/**
 * TokenVestors — Minimal Bot (Coinbase only, ready for Render)
 * Telegram (Telegraf) + Express + SQLite
 * Webhook: /webhook/coinbase-commerce
 *
 * Steps on Render:
 *  - Set Environment variables from .env.example
 *  - Build: npm install
 *  - Start: node app.js
 */
require('dotenv').config();
const { Telegraf, Markup, session } = require('telegraf');
const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const axios = require('axios');
const sqlite3 = require('sqlite3').verbose();
const { v4: uuidv4 } = require('uuid');

// ===== ENV =====
const BOT_TOKEN = process.env.BOT_TOKEN; if (!BOT_TOKEN) throw new Error('BOT_TOKEN required');
const POST_CHANNEL = process.env.POST_CHANNEL || '@tokenvestors';
const ALT_GROUP_ID = process.env.ALT_GROUP_ID; // optional -100...
const PORT = Number(process.env.PORT || 3000);
let PRICE_USD = Number(process.env.PRICE_USD || 50);
const ADMIN_IDS = (process.env.ADMIN_IDS || '').split(',').filter(Boolean).map(s=>Number(s.trim()));
const BASE_URL = process.env.BASE_URL || 'https://example.com';
const COINBASE_API_KEY = process.env.COINBASE_API_KEY;
const COINBASE_WEBHOOK_SECRET = process.env.COINBASE_WEBHOOK_SECRET;

// ===== DB =====
const db = new sqlite3.Database('./tokenvestors.db');
db.serialize(()=>{
  db.run(`CREATE TABLE IF NOT EXISTS submissions (
    id TEXT PRIMARY KEY,
    user_id INTEGER,
    username TEXT,
    chain TEXT,
    contract TEXT,
    description TEXT,
    socials TEXT,
    chart_url TEXT,
    price_usd REAL,
    status TEXT,
    charge_id TEXT,
    created_at TEXT
  )`);
});

// ===== Helpers =====
const escapeHtml = (s)=> (s||'').toString().replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const isEvm = (a)=> /^0x[a-fA-F0-9]{40}$/.test(a||'');
const looksSol = (a)=> /^[1-9A-HJ-NP-Za-km-z]{32,48}$/.test(a||'');
const looksTon = (a)=> /^[A-Za-z0-9_-]{48,66}$/.test(a||'');
function validateContract(chainKey, addr){
  addr=(addr||'').trim();
  switch(chainKey){
    case 'ETH':case 'BSC':case 'BASE':case 'POLY': return isEvm(addr);
    case 'SOL': return looksSol(addr);
    case 'TON': return looksTon(addr);
    default: return false;
  }
}
function looksChart(u){
  if(!u) return false; u=u.toLowerCase();
  return ['dexscreener.com','dextools.io','birdeye.so','geckoterminal','poocoin'].some(x=>u.includes(x));
}
function parseSocials(t){
  const out=[]; (t||'').split(/\s+/).forEach(s=>{ if(/^https?:\/\//i.test(s)) out.push(s); if(/^t\.me\//i.test(s)) out.push('https://'+s); });
  return [...new Set(out)].slice(0,6);
}
function fmtSubmissionHTML(s){
  const socials = JSON.parse(s.socials||'[]');
  const socialBtns = socials.map((l,i)=>Markup.button.url(`Social ${i+1}`, l));
  const header = `🔥 <b>Token Promotion</b> — <i>${escapeHtml(s.chain)}</i>`;
  const line1 = `📄 <b>Contract:</b> <code>${escapeHtml(s.contract)}</code>`;
  const line2 = `📝 <b>About:</b> ${escapeHtml(s.description).slice(0,500)}`;
  const chart = s.chart_url ? `📈 <a href="${escapeHtml(s.chart_url)}">Open Chart</a>` : '';
  const disclaimer = `\n<b>Disclaimer:</b> DYOR. Bukan nasihat finansial. Admin ${escapeHtml(POST_CHANNEL)} tidak bertanggung jawab.`;
  return { text:[header,line1,line2,chart,disclaimer].filter(Boolean).join('\n'),
           inline:[ ...(s.chart_url?[[Markup.button.url('📈 Chart',s.chart_url)]]:[]), socialBtns].filter(r=>r.length)};
}

// ===== Coinbase =====
async function createCoinbaseCharge({ amountUSD, description, submissionId }){
  if(!COINBASE_API_KEY) throw new Error('COINBASE_API_KEY required');
  const {data} = await axios.post('https://api.commerce.coinbase.com/charges',{
    name:'TokenVestors Promo',
    description: description || 'Promo',
    pricing_type:'fixed_price',
    local_price:{ amount:String(amountUSD), currency:'USD' },
    metadata:{ submissionId },
    redirect_url: `${BASE_URL}/paid`,
    cancel_url: `${BASE_URL}/cancel`
  },{
    headers:{ 'X-CC-Api-Key':COINBASE_API_KEY, 'X-CC-Version':'2018-03-22', 'Content-Type':'application/json' }
  });
  return data?.data;
}
function verifyCoinbase(raw, sigHeader){
  if(!COINBASE_WEBHOOK_SECRET||!raw) return {ok:false};
  const calc = crypto.createHmac('sha256', COINBASE_WEBHOOK_SECRET).update(raw).digest('hex');
  const ok = crypto.timingSafeEqual(Buffer.from(calc), Buffer.from(sigHeader||''));
  return { ok };
}

// ===== Bot =====
const bot = new Telegraf(BOT_TOKEN, { handlerTimeout: 90_000 });
bot.use(session());

const CHAINS=[{key:'ETH',label:'Ethereum'},{key:'BSC',label:'BSC'},{key:'BASE',label:'Base'},{key:'POLY',label:'Polygon'},{key:'SOL',label:'Solana'},{key:'TON',label:'TON'}];
const Steps={NONE:0,CHAIN:1,CONTRACT:2,DESC:3,SOCIALS:4,CHART:5,REVIEW:6};

bot.start(async(ctx)=>{
  const me=await ctx.telegram.getMe();
  await ctx.reply(`Halo, saya <b>${escapeHtml(me.first_name)}</b>!\nGunakan /submit untuk promosi token.\nHarga: <b>USD ${PRICE_USD}</b> (Coinbase).`,{parse_mode:'HTML'});
});
bot.command('help', (ctx)=> ctx.reply('/submit — ajukan promo\n/price — lihat harga\n/setprice <angka> — admin'));
bot.command('price', (ctx)=> ctx.reply(`Harga promosi: USD ${PRICE_USD}`));
bot.command('setprice', (ctx)=>{
  const uid=ctx.from?.id; if(!ADMIN_IDS.includes(uid)) return ctx.reply('Khusus admin.');
  const v=Number((ctx.message.text||'').split(/\s+/)[1]); if(!v||v<=0) return ctx.reply('Format: /setprice 50'); PRICE_USD=v; ctx.reply(`Harga diupdate: USD ${PRICE_USD}`);
});
bot.command('submit', async(ctx)=>{
  ctx.session.step=Steps.CHAIN; ctx.session.form={};
  const btns=CHAINS.map(c=>Markup.button.callback(c.label,`chain_${c.key}`));
  await ctx.reply('Pilih chain/network:', Markup.inlineKeyboard(btns,{columns:3}));
});
bot.on('callback_query', async(ctx)=>{
  const data=ctx.callbackQuery.data||'';
  if(data.startsWith('chain_')){
    const key=data.split('chain_')[1]; const chain=CHAINS.find(c=>c.key===key); if(!chain) return ctx.answerCbQuery('Chain tidak dikenal');
    ctx.session.form.chain=chain.label; ctx.session.form.chainKey=chain.key; ctx.session.step=Steps.CONTRACT;
    await ctx.editMessageReplyMarkup(); await ctx.reply(`Kirim <b>contract address</b> untuk ${chain.label}:`,{parse_mode:'HTML'}); return ctx.answerCbQuery();
  }
  if(data==='confirm_pay'){
    await ctx.answerCbQuery();
    const f=ctx.session.form; if(!f) return;
    const submissionId = uuidv4();
    db.run(`INSERT INTO submissions (id,user_id,username,chain,contract,description,socials,chart_url,price_usd,status,created_at)
            VALUES (?,?,?,?,?,?,?,?,?,?,datetime('now'))`,
      [submissionId, ctx.from.id, ctx.from.username||'', f.chain, f.contract, f.description, JSON.stringify(f.socials||[]), f.chart_url||'', PRICE_USD, 'pending']);
    try{
      const charge = await createCoinbaseCharge({ amountUSD: PRICE_USD, description:`${f.chain} — ${f.contract.slice(0,10)} promotion`, submissionId });
      db.run('UPDATE submissions SET charge_id=? WHERE id=?', [charge.id, submissionId]);
      await ctx.reply(`✅ Data diterima. Silakan bayar untuk melanjutkan:\n${charge.hosted_url}\n\nSetelah <b>CONFIRMED</b>, bot akan memposting ke ${POST_CHANNEL}${ALT_GROUP_ID?' dan grup':''}.`,{parse_mode:'HTML',disable_web_page_preview:true});
    }catch(e){ console.error('invoice err', e?.response?.data || e.message); await ctx.reply('Gagal membuat invoice. Coba lagi.'); }
    return;
  }
  if(data==='edit_back'){
    await ctx.answerCbQuery(); ctx.session.step=Steps.CHAIN;
    const btns=CHAINS.map(c=>Markup.button.callback(c.label,`chain_${c.key}`));
    return ctx.reply('Ubah chain:', Markup.inlineKeyboard(btns,{columns:3}));
  }
});
bot.on('text', async(ctx)=>{
  const step=ctx.session.step||Steps.NONE; const txt=(ctx.message.text||'').trim();
  if(step===Steps.CONTRACT){ if(!validateContract(ctx.session.form.chainKey, txt)) return ctx.reply('Alamat kontrak tidak valid. Coba lagi.'); ctx.session.form.contract=txt; ctx.session.step=Steps.DESC; return ctx.reply('Kirim <b>deskripsi singkat</b> (~240-500 karakter):',{parse_mode:'HTML'}); }
  if(step===Steps.DESC){ ctx.session.form.description=txt.slice(0,500); ctx.session.step=Steps.SOCIALS; return ctx.reply('Kirim <b>link sosial</b> (TG, X/Twitter, website) pisahkan spasi/enter:',{parse_mode:'HTML'}); }
  if(step===Steps.SOCIALS){ const s=parseSocials(txt); if(!s.length) return ctx.reply('Tidak ada link yang valid. Pastikan pakai https://'); ctx.session.form.socials=s; ctx.session.step=Steps.CHART; return ctx.reply('Kirim <b>link chart</b> dari Dexscreener/DexTools/Birdeye/etc:',{parse_mode:'HTML'}); }
  if(step===Steps.CHART){ if(!looksChart(txt)) return ctx.reply('Link chart tidak dikenali.'); ctx.session.form.chart_url=txt; ctx.session.step=Steps.REVIEW; const preview=fmtSubmissionHTML({chain:ctx.session.form.chain,contract:ctx.session.form.contract,description:ctx.session.form.description,socials:JSON.stringify(ctx.session.form.socials),chart_url:ctx.session.form.chart_url}); return ctx.reply(`Cek kembali data Anda (harga: USD ${PRICE_USD}):\n\n${preview.text}`,{parse_mode:'HTML',disable_web_page_preview:true, ...Markup.inlineKeyboard([[Markup.button.callback('✅ Konfirmasi & Bayar','confirm_pay')],[Markup.button.callback('✏️ Edit','edit_back')]])}); }
});

// ===== Express + Webhook =====
const app = express();
// keep raw body for signature verify
app.use('/webhook/coinbase-commerce', bodyParser.raw({ type: '*/*' }));
app.post('/webhook/coinbase-commerce', (req,res)=>{
  try{
    const sig = req.header('X-CC-Webhook-Signature') || '';
    const { ok } = verifyCoinbase(req.body, sig);
    if(!ok) return res.status(401).send('bad sig');
    const event = JSON.parse(req.body.toString('utf8'));
    const type = event?.type;
    const submissionId = event?.data?.metadata?.submissionId;
    if(submissionId && (type==='charge:confirmed' || type==='charge:resolved')){
      // mark paid & post
      db.get('SELECT * FROM submissions WHERE id=?',[submissionId], async(err,row)=>{
        if(err||!row) return;
        if(row.status==='paid') return;
        db.run('UPDATE submissions SET status=? WHERE id=?',['paid', submissionId]);
        try{
          const payload = fmtSubmissionHTML(row);
          await bot.telegram.sendMessage(POST_CHANNEL, payload.text, {parse_mode:'HTML',disable_web_page_preview:false, reply_markup:{inline_keyboard:payload.inline}});
          if(ALT_GROUP_ID){
            await bot.telegram.sendMessage(ALT_GROUP_ID, payload.text, {parse_mode:'HTML',disable_web_page_preview:false, reply_markup:{inline_keyboard:payload.inline}});
          }
          await bot.telegram.sendMessage(row.user_id, '✅ Pembayaran terkonfirmasi. Promo Anda telah diposting.');
        }catch(e){ console.error('post err', e.message); }
      });
    }
    res.send('ok');
  }catch(e){ console.error('webhook err', e.message); res.status(400).send('bad'); }
});

app.get('/', (_req,res)=> res.send('TokenVestors minimal bot running'));
app.listen(PORT, ()=> console.log('HTTP listening on', PORT));

bot.launch().then(()=>console.log('Bot started')).catch(console.error);
process.once('SIGINT', ()=>bot.stop('SIGINT'));
process.once('SIGTERM', ()=>bot.stop('SIGTERM'));
