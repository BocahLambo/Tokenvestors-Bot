# TokenVestors — Minimal Telegram Bot (Coinbase, Render-ready)

## Deploy (Render)
1. Buat repo GitHub baru dari HP, upload `app.js`, `package.json`, `.env.example`.
2. Render → New → Web Service → pilih repo.
3. Build Command: `npm install`
4. Start Command: `node app.js`
5. Environment → tambah variable sesuai `.env.example`.
6. Set webhook di Coinbase ke: `https://YOUR-RENDER-URL/webhook/coinbase-commerce`.
7. Test di Telegram: `/submit` → bayar → otomatis post ke @tokenvestors.
