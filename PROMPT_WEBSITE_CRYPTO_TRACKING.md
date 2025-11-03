# PROMPT LENGKAP UNTUK MEMBUAT WEBSITE CRYPTO TRACKING "COIN TRENDING"

Buatkan website crypto tracking premium dengan design modern dan clean seperti CoinMarketCap/CoinGecko dengan spesifikasi berikut:

---

## DESIGN SYSTEM & SETUP

**Font Family:** Google Fonts Inter (weights: 400, 500, 600, 700, 800)

**Color Palette:**
- Background Primary: `#0F0F10`
- Background Secondary: `#151614`
- Card Background: `#1A1B1E`
- Border Default: `#2A2D31`
- Border Hover: `#3A3D41`
- Text Primary: `#F5F6F7`
- Text Secondary: `#A0A3A1`
- Positive/Green: `#12876A`
- Negative/Red: `#E74C3C`
- Warning/Yellow: `#F0B90B`

**Responsive Breakpoints:**
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

**General Styling:**
- Border radius: 12px (cards), 16px (banners), 6px (buttons)
- Smooth transitions: `all 0.3s ease`
- Box shadows: subtle untuk depth
- Hover effects: scale, translateY, color changes

---

## 1. NAVBAR STICKY

**Position:** Sticky top dengan z-index 100
**Height:** 56px
**Background:** `#0F0F10`
**Padding:** Horizontal 15px (mobile), 20px (tablet+)

**Layout:**
- Flex display dengan justify-between
- Align items center

**Left Side:**
- Brand title: "COIN TRENDING"
- Font: 16px, weight 600, letter-spacing 0.14px
- Color: `#F5F6F7`

**Right Side:**
- **ADD Button:**
  - Background: transparent
  - Border: 1px solid `#3A3D41`
  - Padding: 6px 10px
  - Font: 12px, weight 600
  - Border-radius: 6px
  - Height: 28px
  - Min-width: 50px
  - Plus icon SVG (12x12px, stroke-width 1.5, color `#F5F6F7`)
  - Hover: background `#1A1B1E`, border `#FFFFFF`, transform scale(1.02)

- **Hamburger Menu:**
  - Width: 24px, height: 16px
  - Position: relative
  - 2 horizontal lines (width: 24px, height: 2px each)
  - Background: `#FFFFFF`
  - Position: top 8px dan 14px
  - Active state: rotate 45deg dan -45deg, both at top 11px
  - Transition: all 0.3s ease

---

## 2. MARQUEE SCROLLING BAR

**Position:** Sticky di bawah navbar (top: 56px)
**Height:** 32px
**Background:** `#151614`
**Overflow:** Hidden
**Z-index:** 99

**Gradient Overlays:**
- Kiri: `linear-gradient(to right, #151614, transparent)`, width 16px, position absolute left 0, height 100%, z-index 1
- Kanan: `linear-gradient(to left, #151614, transparent)`, width 16px, position absolute right 0, height 100%, z-index 1

**Marquee Content:**
- Display: flex, gap 24px
- Animation: scroll 15s linear infinite
- Transform: translateX(0) to translateX(-50%)
- Duplicate content untuk seamless loop

**Content Items (8 crypto):**
- Format: "#1 BTC +2.5%, #2 ETH +1.8%, #3 BNB +3.2%, #4 XRP +0.9%, #5 USDT +4.1%, #6 SOL +6.7%, #7 TRX +2.3%, #8 USDC +5.1%"

**Item Structure:**
- Display: flex, align-items center, gap 6px
- Rank: font-size 10px, weight 700, color `#A0A3A1`
- Icon: 14x14px circle dengan warna crypto sesuai
- Ticker: font-size 12px, weight 600, color `#F5F6F7`
- Percent: font-size 12px, weight 600, color `#12876A`

**Token Icons (14x14px circles):**
- BTC: `#FFD700`
- ETH: `#627EEA`
- BNB: `#F0B90B`
- XRP: `#23292F`
- USDT: `#1BA27A`
- SOL: `#9945FF`
- TRX: `#FF060A`
- USDC: `#0052FF`

---

## 3. HERO SECTION

**Padding:** Top 24px, horizontal 20px
**Layout:** Center-aligned, max-width 1200px, margin auto

**Main Title:**
- Text: "Track Cryptocurrency Trends"
- Font-size: 28px (mobile), 32px (tablet+)
- Font-weight: 800
- Line-height: 34px
- Letter-spacing: -0.32px
- Color: `#F5F6F7`
- Margin-bottom: 12px

**Subtitle:**
- Text: "Real-time market data and insights for top cryptocurrencies"
- Font-size: 16px
- Font-weight: 500
- Line-height: 18px
- Color: `#A0A3A1`
- Margin-bottom: 20px

**Banner Placeholder:**
- Background: `#202124`
- Height: 100px
- Border-radius: 16px
- Display: flex, align-items center, justify-content center
- Box-shadow: 0 2px 8px rgba(0,0,0,0.25)
- Text: "Advertisement Space"
- Font-size: 14px, weight 500, color `#A0A3A1`

---

## 4. ETH TRENDING SECTION (TEMPLATE UNTUK SEMUA TOKEN SECTIONS)

**Container:**
- Padding: 20px (mobile), 20px 0 (tablet+)
- Max-width: 1200px, margin auto

**Section Title:**
- Display: flex, align-items center, gap 8px
- Font-size: 18px, weight 700
- Color: `#F5F6F7`
- Margin-bottom: 20px
- ETH Logo SVG: 24x24px, fill `#627EEA` dengan path putih

**Grid Layout:**
- Display: grid
- Mobile: `grid-template-columns: repeat(3, 1fr)`
- Tablet: `grid-template-columns: repeat(4, 1fr)`
- Desktop: `grid-template-columns: repeat(6, 1fr)`
- Gap: 8px

**Token Cards (12 items):**

**Card Style:**
- Background: `#1A1B1E`
- Border: 1px solid `#2A2D31`
- Border-radius: 12px
- Padding: 12px
- Min-height: 60px
- Display: flex, align-items center, gap 6px
- Transition: all 0.3s ease
- Hover: background `#202124`, border-color `#3A3D41`, transform translateY(-2px)

**Card Elements:**
- **Rank:** Font-size 10px, weight 700, color `#A0A3A1`, min-width 18px
- **Icon:** 24x24px, border-radius 50%, flex-shrink 0
  - Gunakan placeholder image: `https://via.placeholder.com/24x24/627EEA/FFFFFF?text=ETH`
  - Atau gunakan API image: `https://assets.coingecko.com/coins/images/279/small/ethereum.png` (contoh)
- **Info Container:** Flex 1, flex-direction column, gap 1px
- **Ticker:** Font-size 14px, weight 600, line-height 1, color `#F5F6F7`
- **Change:** Font-size 12px, weight 600, line-height 1
  - Positive: color `#12876A`
  - Negative: color `#E74C3C` (class `.negative`)

**12 ETH Tokens Data:**
1. ETH +5.23%
2. USDT +0.12%
3. USDC +0.08%
4. DAI +0.15%
5. LINK +8.45%
6. UNI +12.67%
7. AAVE +6.23%
8. MKR +9.45%
9. COMP +7.89%
10. SUSHI +11.23%
11. CRV +4.56%
12. SNX +13.45%

**Token Icons:**
- Gunakan placeholder images dengan warna ungu `#627EEA` untuk ETH ecosystem
- Format: `https://via.placeholder.com/24x24/627EEA/FFFFFF?text=[TICKER]`
- Atau siapkan struktur untuk API image integration

---

## 5. SOL TRENDING SECTION

**Copy exact style dari ETH Trending Section**

**Perubahan:**
- Logo: SOL logo dengan warna `#9945FF` (Solana purple)
- Logo SVG: 24x24px dengan Solana pattern/path

**12 SOL Tokens Data:**
1. SOL +14.23%
2. RAY +18.67%
3. SRM +12.45%
4. ORCA +16.89%
5. MNGO +9.34%
6. STEP +22.56%
7. COPE +7.89%
8. MEDIA +11.23%
9. ROPE +15.67%
10. FIDA +8.45%
11. MAPS +13.78%
12. TULIP +10.12%

**Token Icons:**
- Placeholder images dengan warna ungu `#9945FF`
- Format: `https://via.placeholder.com/24x24/9945FF/FFFFFF?text=[TICKER]`

---

## 6. BSC TRENDING SECTION

**Copy exact style dari ETH Trending Section**

**Perubahan:**
- Logo: BSC/Binance logo dengan warna `#F0B90B` (Binance yellow)
- Logo SVG: 24x24px dengan Binance diamond pattern

**12 BSC Tokens Data:**
1. BNB +6.78%
2. CAKE +15.45%
3. BAKE +12.34%
4. BURGER +9.67%
5. AUTO +11.23%
6. ALPACA +8.90%
7. XVS +7.56%
8. BELT +13.45%
9. EPS +10.78%
10. WATCH +14.23%
11. TWT +16.67%
12. SFP +9.34%

**Token Icons:**
- Placeholder images dengan warna kuning `#F0B90B`
- Format: `https://via.placeholder.com/24x24/F0B90B/FFFFFF?text=[TICKER]`

---

## 7. FILTERABLE TRENDING SECTION

**Container:** Same padding dan max-width seperti ETH Trending

**Filter Tabs:**
- Display: flex, gap 24px
- Overflow-x: auto (mobile)
- Padding-bottom: 4px
- Border-bottom: 1px solid `#2A2D31`
- Margin-bottom: 20px

**Tab Style:**
- Background: none
- Border: none
- Padding: 8px 0
- Font-size: 14px, weight 600
- Color: `#A0A3A1` (inactive), `#F5F6F7` (active)
- White-space: nowrap
- Position: relative
- Cursor: pointer
- Transition: color 0.3s ease

**Active Tab:**
- Color: `#F5F6F7`
- Underline: 2px solid `#FFFFFF`, position absolute bottom -4px, width 100%, border-radius 1px

**4 Tabs dengan Icons:**
1. **ALT Trending** (default active)
   - Icon: Orange star SVG (12x12px, color `#FF9500`)
   - Content: 12 ALT tokens dengan style sama seperti ETH cards

2. **BASE Trending**
   - Icon: Blue circle SVG (12x12px, color `#0052FF`)
   - Content: 12 BASE tokens

3. **TRON Trending**
   - Icon: Red triangle SVG (12x12px, color `#FF060A`)
   - Content: 12 TRON tokens

4. **POL Trending**
   - Icon: Purple polygon SVG (12x12px, color `#8247E5`)
   - Content: 12 POL tokens

**Tab Content:**
- Copy exact grid layout dan card style dari ETH Trending
- 12 tokens per tab dengan warna berbeda sesuai network
- Default: ALT Trending visible, lainnya hidden
- JavaScript: Toggle visibility berdasarkan tab click

**ALT Tokens Data (12 items):**
1. BASE +8.45%
2. MATIC +12.67%
3. AVAX +15.23%
4. ATOM +7.89%
5. NEAR +11.34%
6. FTM +9.67%
7. DOT +6.78%
8. ADA +5.45%
9. ALGO +10.12%
10. EGLD +13.56%
11. XTZ +8.90%
12. ZIL +14.23%

**BASE Tokens Data (12 items):**
1. BASE +8.45%
2. DEGEN +25.67%
3. BRETT +18.34%
4. MOON +12.45%
5. SWARM +15.89%
6. OD +9.67%
7. BOX +11.23%
8. BLUE +7.56%
9. TOSHI +13.78%
10. NORA +10.45%
11. AERO +16.12%
12. LRC +14.67%

**TRON Tokens Data (12 items):**
1. TRX +4.23%
2. BTT +8.67%
3. WIN +12.45%
4. JST +6.89%
5. SUN +9.34%
6. NFT +15.56%
7. USDD +0.12%
8. BUSD +0.08%
9. USDT +0.15%
10. APENFT +18.23%
11. KLV +11.67%
12. DICE +13.45%

**POL Tokens Data (12 items):**
1. MATIC +12.67%
2. USDC +0.08%
3. USDT +0.12%
4. WETH +5.23%
5. AAVE +6.45%
6. LINK +8.67%
7. UNI +10.89%
8. CRV +7.23%
9. COMP +9.56%
10. SNX +11.34%
11. SUSHI +8.12%
12. DAI +0.15%

---

## 8. CRYPTOCURRENCIES LIST SECTION (TEMPLATE UNTUK LIST FORMAT)

**Container:** Same padding dan max-width

**Filter Tabs:**
- Display: flex, gap 16px
- Overflow-x: auto (mobile)
- Padding-bottom: 4px
- Border-bottom: 1px solid `#2A2D31`
- Margin-bottom: 20px
- Scrollbar: hidden (custom scrollbar styling)

**Tab Style:**
- Padding: 8px 12px
- Background: none
- Border: none
- Font-size: 13px (mobile), 14px (tablet+)
- Weight: 600
- Color: `#A0A3A1` (inactive), `#F5F6F7` (active)
- White-space: nowrap
- Border-radius: 6px
- Cursor: pointer
- Transition: all 0.3s ease
- Active: background `#1A1B1E`, color `#F5F6F7`

**10 Filter Tabs:**
ALL (default active), MEME, AI, DEFI, GAMING, LAYER1, LAYER2, RWA, PRIVACY, STABLE

**List Layout:**
- Display: flex, flex-direction: column
- Gap: 0 (no gap, menggunakan border-bottom)

**List Item Style:**
- Display: flex, justify-content: space-between
- Align-items: center
- Padding: 12px 0
- Border-bottom: 1px solid `#2A2D31` (except last item)
- Transition: background 0.2s ease
- Hover: background `rgba(255,255,255,0.02)`
- Cursor: pointer

**Item Layout:**
- **Left Side:** Display flex, align-items center, gap 12px, flex 1
  - Rank: Width 32px, font-size 12px, weight 700, color `#A0A3A1`, text-align left
  - Icon: 28x28px, border-radius 50%, flex-shrink 0
  - Info: Flex column, gap 2px
    - Ticker: Font-size 14px, weight 600, color `#F5F6F7`
    - MCAP: Font-size 11px, weight 500, color `#A0A3A1`

- **Right Side:** Display flex, flex-column, align-items flex-end, gap 2px
  - Price: Font-size 14px, weight 600, color `#F5F6F7`
  - Change: Font-size 11px, weight 600
    - Positive: color `#12876A`
    - Negative: color `#E74C3C`

**15 Major Cryptocurrencies Data:**

1. BTC - Bitcoin - Market Cap: $1.2T - Price: $62,450.23 - Change: +2.34%
2. ETH - Ethereum - Market Cap: $380B - Price: $3,165.78 - Change: +5.67%
3. BNB - Binance Coin - Market Cap: $95B - Price: $595.45 - Change: +1.23%
4. SOL - Solana - Market Cap: $78B - Price: $178.90 - Change: +12.45%
5. XRP - Ripple - Market Cap: $32B - Price: $0.58 - Change: -0.89%
6. USDT - Tether - Market Cap: $110B - Price: $1.00 - Change: +0.01%
7. USDC - USD Coin - Market Cap: $28B - Price: $1.00 - Change: +0.02%
8. DOGE - Dogecoin - Market Cap: $24B - Price: $0.17 - Change: +18.91%
9. ADA - Cardano - Market Cap: $22B - Price: $0.62 - Change: +3.45%
10. TRX - Tron - Market Cap: $10B - Price: $0.11 - Change: +2.67%
11. AVAX - Avalanche - Market Cap: $14B - Price: $35.67 - Change: +8.23%
12. LINK - Chainlink - Market Cap: $16B - Price: $28.45 - Change: +6.78%
13. DOT - Polkadot - Market Cap: $9B - Price: $7.89 - Change: +4.12%
14. MATIC - Polygon - Market Cap: $8B - Price: $0.85 - Change: +7.56%
15. SHIB - Shiba Inu - Market Cap: $12B - Price: $0.000021 - Change: +24.67%

**Token Icons:**
- Gunakan placeholder images dengan format: `https://via.placeholder.com/28x28/[COLOR]/FFFFFF?text=[TICKER]`
- Atau struktur untuk API integration dengan Coingecko/CoinMarketCap API
- Colors: BTC `#FFD700`, ETH `#627EEA`, BNB `#F0B90B`, SOL `#9945FF`, XRP `#23292F`, USDT `#1BA27A`, USDC `#0052FF`, DOGE `#FF9500`, ADA `#1BA27A`, TRX `#FF060A`, AVAX `#00D4AA`, LINK `#F89C35`, DOT `#E6007A`, MATIC `#8247E5`, SHIB `#FFA409`

---

## 9. MARKET MOVERS SECTION

**Copy exact style dari Cryptocurrencies List Section**

**Filter Tabs:** 3 tabs - GAINERS (default active), LOSERS, NEW LISTINGS

**GAINERS Tab (10 items, default visible):**
1. SHIB +24.67%
2. DOGE +18.91%
3. PEPE +16.45%
4. SOL +14.23%
5. AVAX +12.67%
6. MATIC +11.34%
7. LINK +10.89%
8. UNI +9.67%
9. AAVE +8.45%
10. MKR +7.89%

**LOSERS Tab (10 items, hidden by default):**
1. LUNA -18.45%
2. FTT -15.67%
3. LUNC -12.89%
4. ICP -11.23%
5. ATOM -9.78%
6. NEAR -8.45%
7. ALGO -7.56%
8. EGLD -6.34%
9. XTZ -5.67%
10. ZIL -4.89%

**NEW LISTINGS Tab (10 items, hidden by default):**
1. MOODENG +45.67%
2. GOAT +32.45%
3. PNUT +28.91%
4. POPCAT +24.78%
5. NEIRO +19.45%
6. TURBO +16.23%
7. BONK +14.67%
8. WIF +13.89%
9. MYRO +12.34%
10. SAMO +11.56%

**JavaScript:** Tab switching untuk show/hide content dengan data attributes

---

## 10. MARKET STATISTICS SECTION

**Container:** Same padding dan max-width

**Grid Layout:**
- Display: grid
- Mobile: `grid-template-columns: repeat(2, 1fr)`
- Tablet: `grid-template-columns: repeat(3, 1fr)`
- Desktop: `grid-template-columns: repeat(6, 1fr)`
- Gap: 8px (mobile), 10px (tablet), 12px (desktop)

**Card Style:**
- Background: `#1A1B1E`
- Border: 1px solid `#2A2D31`
- Border-radius: 8px
- Padding: 12px (mobile), 14px (tablet), 16px (desktop)
- Transition: all 0.3s ease
- Hover: background `#202124`, border `#3A3D41`, transform translateY(-1px)

**Card Layout:**
- Display: flex, flex-direction: column
- Gap: 8px

**Header Row:**
- Display: flex, justify-content: space-between
- Align-items: center
- Margin-bottom: 8px

**Label:**
- Font-size: 11px (mobile), 12px (tablet+)
- Weight: 500
- Color: `#A0A3A1`

**Icon:**
- Width: 18px, height: 18px
- Border-radius: 4px
- Display: flex, align-items center, justify-content center
- SVG icon: 12x12px, color `#FFFFFF`

**Content Row:**
- Display: flex, align-items baseline
- Justify-content: space-between
- Gap: 8px

**Value:**
- Font-size: 18px (mobile), 20px (tablet), 22px (desktop)
- Weight: 700
- Color: `#F5F6F7`

**Change Badge:**
- Font-size: 11px
- Weight: 600
- Padding: 2px 6px
- Border-radius: 4px
- Positive: background `rgba(18, 135, 106, 0.15)`, color `#12876A`
- Negative: background `rgba(231, 76, 60, 0.15)`, color `#E74C3C`

**6 Stat Cards:**

1. **Total Market Cap**
   - Icon: Stack layers SVG, background `#FFD700`
   - Value: $2.45T
   - Change: +2.34% (positive)

2. **24h Volume**
   - Icon: Chart line SVG, background `#627EEA`
   - Value: $89.2B
   - Change: +5.67% (positive)

3. **BTC Dominance**
   - Icon: Clock SVG, background `#F0B90B`
   - Value: 58.7%
   - Change: -0.12% (negative)

4. **ETH Dominance**
   - Icon: Diamond SVG, background `#9945FF`
   - Value: 18.4%
   - Change: +0.45% (positive)

5. **Active Cryptos**
   - Icon: Document SVG, background `#12876A`
   - Value: 2,847
   - Change: +12 (positive, no %)

6. **Fear & Greed**
   - Icon: Smiley face SVG, background `#E74C3C`
   - Value: 74
   - Change: "Greed" (text, color `#F0B90B`)

---

## 11. PARTNERS SECTION

**Container:**
- Padding: 20px 0
- Border-top: 1px solid `#2A2D31`
- Display: flex
- Align-items: center
- Justify-content: center
- Gap: 40px (mobile), 60px (tablet), 80px (desktop)
- Flex-wrap: wrap

**Partner Logos:**
- Height: 32px (mobile), 36px (tablet), 40px (desktop)
- Width: auto (maintain aspect ratio)
- Opacity: 0.15
- Transition: opacity 0.3s ease
- Hover: opacity 0.3
- Color: `#F5F6F7` (SVG)

**2 Partner Logos:**
1. **Dexscreener** - Custom SVG path
2. **CoinGecko** - Custom SVG path

---

## 12. FOOTER SECTION

**Background:** `#151614`
**Border-top:** 1px solid `#2A2D31`
**Padding:** 40px 20px 20px

**Layout:**
- Max-width: 1200px, margin auto
- Mobile: 1 column, gap 32px
- Tablet: 2x2 grid, gap 32px
- Desktop: 4 columns, gap 40px

**Column 1 - Brand:**
- Logo: "COIN TRENDING" (18px, weight 700, color `#F5F6F7`)
- Description: "Your trusted source for real-time cryptocurrency market data, trends, and insights. Track the latest prices and market movements across all major cryptocurrencies." (14px, color `#A0A3A1`, line-height 1.6, margin 12px 0)
- Social Media Icons:
  - Display: flex, gap 12px, margin-top 16px
  - Icon size: 20x20px
  - Background: `#2A2D31`
  - Border-radius: 6px
  - Padding: 8px
  - Transition: all 0.3s ease
  - Hover: background `#3A3D41`, transform scale(1.1) translateY(-2px)
  - 4 Icons: Twitter, Telegram, GitHub, Share (SVG icons)

**Column 2 - Quick Links:**
- Title: "Quick Links" (16px, weight 600, color `#F5F6F7`, margin-bottom 16px)
- Links: Display flex, flex-direction column, gap 8px
  - Home
  - Markets
  - Trending
  - Analytics
  - Portfolio
- Link Style: 14px, color `#A0A3A1`, hover `#F5F6F7`, transition color 0.3s ease

**Column 3 - Resources:**
- Title: "Resources" (16px, weight 600, color `#F5F6F7`, margin-bottom 16px)
- Links:
  - API
  - Documentation
  - Blog
  - Learn Crypto
  - Market Analysis

**Column 4 - Support:**
- Title: "Support" (16px, weight 600, color `#F5F6F7`, margin-bottom 16px)
- Links:
  - Help Center
  - Contact Us
  - Community
  - FAQ
  - Report Bug

**Footer Bottom:**
- Border-top: 1px solid `#2A2D31`
- Padding-top: 20px
- Margin-top: 32px
- Display: flex
- Justify-content: space-between
- Align-items: center
- Mobile: flex-direction column, gap 12px, text-align center

**Copyright:**
- Text: "© 2024 Coin Trending. All rights reserved."
- Font-size: 14px
- Color: `#A0A3A1`

**Legal Links:**
- Display: flex, gap 12px
- Font-size: 14px
- Color: `#A0A3A1`
- Hover: color `#F5F6F7`
- Links: Privacy Policy • Terms of Service • Cookie Policy
- Separator: "•" (color `#2A2D31`)

---

## JAVASCRIPT FUNCTIONALITY

**1. Hamburger Menu Toggle:**
- Toggle active class pada hamburger
- Rotate animation untuk lines
- Show/hide mobile menu (jika ada)

**2. Filter Tabs Switching:**
- Semua filter tabs (Network Trending, Crypto Categories, Market Movers)
- Add/remove active class
- Show/hide content berdasarkan data attributes atau class
- Smooth transition

**3. Marquee Animation:**
- CSS animation untuk infinite scroll
- Smooth dan performant

**4. Hover Effects:**
- All interactive elements dengan smooth transitions
- Scale, translateY, color changes
- Consistent timing: 0.3s ease

**5. Responsive Behavior:**
- Smooth transitions antar breakpoints
- Mobile menu toggle (jika diperlukan)
- Grid adjustments

---

## TECHNICAL REQUIREMENTS

**Responsive Design:**
- Perfect di semua device sizes
- Smooth transitions antar breakpoints
- Touch-friendly pada mobile
- No horizontal scroll pada mobile

**Performance:**
- Optimized CSS dengan efficient selectors
- CSS animations instead of JavaScript animations dimana memungkinkan
- Lazy loading untuk images (jika menggunakan API)
- Minified code untuk production

**Accessibility:**
- Proper semantic HTML (header, nav, main, section, footer)
- Keyboard navigation support
- Focus states untuk semua interactive elements
- ARIA labels dimana diperlukan

**Cross-browser Compatibility:**
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Tested pada latest versions

**Image Integration:**
- Semua token icons menggunakan placeholder images yang mudah diganti
- Struktur siap untuk API integration (Coingecko, CoinMarketCap)
- Format: `https://assets.coingecko.com/coins/images/[ID]/small/[name].png`
- Fallback ke placeholder jika API image gagal load

**Code Quality:**
- Well-structured HTML dengan semantic tags
- Organized CSS dengan BEM methodology atau similar
- Minimal JavaScript dengan clear functions
- Comments untuk complex logic
- Clean dan maintainable code

---

## RESULT EXPECTATION

Website crypto tracking premium dengan:
- ✅ Design professional dan modern
- ✅ Smooth animations dan transitions
- ✅ Perfect responsive behavior di semua devices
- ✅ Consistent design system
- ✅ Ready untuk integration dengan real crypto APIs
- ✅ Performance optimized
- ✅ Clean dan maintainable code structure
- ✅ Accessibility compliant
- ✅ Cross-browser compatible

Website ini akan terlihat seperti CoinMarketCap/CoinGecko level dengan design yang clean, modern, dan premium.
