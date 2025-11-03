# PROMPT LENGKAP: WEBSITE CRYPTO TRACKING "COIN TRENDING"

## 📋 OVERVIEW
Buatkan website crypto tracking premium dengan design modern, clean, dan responsive seperti CoinMarketCap/CoinGecko. Website ini menampilkan real-time cryptocurrency market data dengan berbagai kategori trending tokens dan market statistics.

---

## 🎨 DESIGN SYSTEM

### Typography
- **Font Family**: Google Fonts "Inter" dengan weights: 400, 500, 600, 700, 800
- **Font Sizes**: 10px (small), 11px (caption), 12px (body-sm), 14px (body), 16px (body-lg), 18px (heading-sm), 28px (heading)
- **Line Heights**: 1.2 (headings), 1.5 (body text), 1.6 (descriptions)

### Color Palette
```
Backgrounds:
- Body: #0F0F10 (dark black)
- Card: #1A1B1E (dark gray)
- Section: #151614 (medium dark)
- Hover: #202124 (lighter gray)
- Border: #2A2D31 (default), #3A3D41 (hover/focus)

Text:
- Primary: #F5F6F7 (white)
- Secondary: #A0A3A1 (gray)
- Muted: #6B6D6B (light gray)

Accent:
- Positive/Green: #12876A
- Negative/Red: #E74C3C
- Warning/Yellow: #F0B90B
- Info/Blue: #0052FF
- Purple: #9945FF
- Orange: #FF9500

Token Colors (untuk icon backgrounds):
- BTC: #FFD700, ETH: #627EEA, BNB: #F0B90B, SOL: #9945FF
- XRP: #23292F, USDT: #1BA27A, USDC: #0052FF, ADA: #1BA27A
- DOGE: #FF9500, TRX: #FF060A, LINK: #F89C35, AVAX: #00D4AA
```

### Spacing System
- Gap: 4px, 6px, 8px, 10px, 12px, 16px, 20px, 24px, 32px, 40px
- Padding: 12px (mobile cards), 14px (tablet cards), 16px (desktop cards)
- Border Radius: 6px (buttons), 8px (small cards), 12px (cards), 16px (banners)

### Responsive Breakpoints
```
Mobile: < 768px
Tablet: 768px - 1024px
Desktop: > 1024px
```

---

## 🏗️ STRUKTUR WEBSITE

### 1. NAVBAR STICKY (Height: 56px)
**Position**: Sticky top, z-index 100  
**Background**: #0F0F10  
**Padding**: 0 15px

**Layout**:
- **Left Side**: Brand "COIN TRENDING" (font 16px, weight 600, letter-spacing 0.14px)
- **Right Side**:
  - **ADD Button**: 
    - Style: Transparent background, border 1px solid #3A3D41
    - Padding: 6px 10px
    - Font: 12px, weight 600
    - Border-radius: 6px
    - Icon: Plus SVG (12x12px, stroke-width 1.5)
    - Hover: Background #1A1B1E, border #FFFFFF, scale 1.02
  - **Hamburger Menu**:
    - 2 horizontal lines (width 24px, height 2px, gap 6px)
    - Background: #FFFFFF
    - Active state: Transform into X (rotate 45deg dan -45deg)
    - Transition: all 0.3s ease

---

### 2. MARQUEE SCROLLING BAR (Height: 32px)
**Position**: Sticky top 56px, z-index 99  
**Background**: #151614

**Features**:
- **Gradient Overlays**: 
  - Left: linear-gradient(to right, #151614, transparent), width 16px
  - Right: linear-gradient(to left, #151614, transparent), width 16px
- **Animation**: Scroll 15s linear infinite, translateX(0 to -50%)
- **Content**: Duplicate set untuk seamless loop, gap 24px antar items

**Data Items** (8 cryptocurrencies):
```
#1 BTC +2.5%
#2 ETH +1.8%
#3 BNB +3.2%
#4 XRP +0.9%
#5 USDT +4.1%
#6 SOL +6.7%
#7 TRX +2.3%
#8 USDC +5.1%
```

**Item Structure**:
- Rank: font 10px, weight 700, color #A0A3A1
- Icon: 14x14px circle dengan warna crypto
- Ticker: font 12px, weight 600, color #F5F6F7
- Percent: font 12px, weight 600, color #12876A (green)

---

### 3. HERO SECTION
**Padding**: 24px 20px 0  
**Text-align**: Center

**Elements**:
1. **Main Title**: "Track Cryptocurrency Trends"
   - Font: 28px, weight 800, line-height 34px
   - Letter-spacing: -0.32px
   - Margin-bottom: 12px

2. **Subtitle**: "Real-time market data and insights for top cryptocurrencies"
   - Font: 16px, weight 500, line-height 18px
   - Color: #A0A3A1
   - Margin-bottom: 20px

3. **Banner Ads Placeholder**:
   - Background: #202124
   - Height: 100px
   - Border-radius: 16px
   - Box-shadow: 0 2px 8px rgba(0,0,0,0.25)
   - Display: Flex center
   - Text: "Advertisement Space" (color #A0A3A1, weight 500)

---

### 4. ETH TRENDING SECTION (Template untuk Token Sections)
**Padding**: 20px 0

**Section Header**:
- Display: Flex, align-items center, gap 8px
- ETH Logo: 24x24px SVG dengan fill #627EEA
- Title: "ETH Trending" (font 18px, weight 700)
- Margin-bottom: 20px

**Grid Layout**:
```
Mobile: grid-template-columns: repeat(3, 1fr)
Tablet: grid-template-columns: repeat(4, 1fr)
Desktop: grid-template-columns: repeat(6, 1fr)
Gap: 8px
```

**Token Card Design** (12 cards per section):
- Background: #1A1B1E
- Border: 1px solid #2A2D31
- Border-radius: 12px
- Padding: 12px
- Min-height: 60px
- Hover: Background #202124, border #3A3D41
- Transition: all 0.2s ease

**Card Layout**:
- Display: Flex, align-items center, gap 6px
- **Rank**: Font 10px, weight 700, color #A0A3A1, min-width 18px
- **Icon**: 24x24px circle (use real crypto logo images via URL)
- **Info Container**: Flex 1, flex-direction column, gap 1px
  - **Ticker**: Font 14px, weight 600, line-height 1, color #F5F6F7
  - **Change**: Font 12px, weight 600, line-height 1
    - Positive: color #12876A
    - Negative: color #E74C3C

**ETH Tokens Data** (12 items):
```
1. ETH +3.21%
2. UNI +5.67%
3. LINK +2.34%
4. AAVE +4.89%
5. MKR +1.23%
6. SNX +6.45%
7. CRV +3.78%
8. LDO +8.90%
9. RPL +2.56%
10. SUSHI +4.12%
11. 1INCH +5.34%
12. ENS +3.67%
```

**Icon Images**: Gunakan URL format `https://cryptologos.cc/logos/[name]-[ticker]-logo.png` atau placeholder dengan parameter warna

---

### 5. ADDITIONAL TOKEN SECTIONS
**Copy exact style dari ETH Trending, hanya ganti data:**

#### SOL TRENDING
- Logo: Solana dengan warna #9945FF
- **12 SOL Tokens**:
```
1. SOL +6.78%
2. RAY +4.56%
3. SRM +3.21%
4. ORCA +5.67%
5. MNGO +2.34%
6. STEP +4.89%
7. COPE +3.45%
8. MEDIA +6.12%
9. ROPE +2.78%
10. FIDA +5.23%
11. MAPS +3.90%
12. TULIP +4.45%
```

#### BSC TRENDING
- Logo: Binance dengan warna #F0B90B
- **12 BSC Tokens**:
```
1. BNB +3.12%
2. CAKE +5.34%
3. BAKE +2.67%
4. BURGER +4.23%
5. AUTO +3.89%
6. ALPACA +5.12%
7. XVS +2.45%
8. BELT +4.67%
9. EPS +3.34%
10. WATCH +5.78%
11. TWT +2.90%
12. SFP +4.12%
```

---

### 6. FILTERABLE TRENDING SECTION
**Padding**: 20px 0

**Tab Navigation**:
- Display: Flex, gap 24px, overflow-x auto
- Padding-bottom: 4px
- Border-bottom: 1px solid #2A2D31

**Tab Style**:
- Padding: 8px 0
- Background: none, border: none
- Font: 14px, weight 600
- White-space: nowrap
- **Inactive**: Color #A0A3A1
- **Active**: 
  - Color #F5F6F7
  - Underline putih 2px solid
  - Position: absolute bottom -4px
  - Border-radius: 1px

**4 Tabs dengan Icons** (16x16px):
1. **ALT Trending** (default active) - Orange star icon #FF9500
2. **BASE Trending** - Blue circle icon #0052FF
3. **TRON Trending** - Red triangle icon #FF060A
4. **POL Trending** - Purple polygon icon #8247E5

**Content**:
- Copy exact card style dari ETH Trending
- Setiap tab punya 12 tokens berbeda
- Show/hide content berdasarkan active tab (JavaScript)

**Tab Content Data**:

**ALT Trending** (default visible):
```
1. ATOM +4.56%, 2. ALGO +3.21%, 3. DOT +5.67%, 4. NEAR +2.89%
5. FTM +4.12%, 6. MATIC +3.45%, 7. OP +5.23%, 8. ARB +2.67%
9. APT +4.78%, 10. SUI +3.90%, 11. SEI +5.12%, 12. INJ +2.34%
```

**BASE Trending**:
```
1. BASE +6.78%, 2. BALD +4.23%, 3. TOSHI +5.67%, 4. BRETT +3.45%
5. NORMIE +4.89%, 6. DEGEN +2.56%, 7. KEYCAT +5.34%, 8. MOCHI +3.78%
9. HIGHER +4.12%, 10. AERO +5.90%, 11. SEAM +2.67%, 12. MOON +4.45%
```

**TRON Trending**:
```
1. TRX +2.34%, 2. BTT +4.56%, 3. JST +3.21%, 4. WIN +5.67%
5. SUN +2.89%, 6. NFT +4.23%, 7. LIVE +3.45%, 8. WINK +5.12%
9. DICE +2.67%, 10. APENFT +4.78%, 11. USDD +1.23%, 12. TUSD +0.98%
```

**POL Trending**:
```
1. MATIC +3.45%, 2. QUICK +5.23%, 3. GHST +2.78%, 4. SUSHI +4.56%
5. DFX +3.12%, 6. MANA +5.67%, 7. SAND +2.34%, 8. GALA +4.89%
9. AXS +3.67%, 10. ILV +5.12%, 11. WHALE +2.90%, 12. NAKA +4.23%
```

---

### 7. CRYPTOCURRENCIES LIST SECTION (Template untuk List Format)
**Padding**: 20px 0

**Filter Tabs**:
- Display: Flex, gap 16px, overflow-x auto
- Padding-bottom: 8px
- Margin-bottom: 16px

**Tab Buttons**:
```
ALL (default active), MEME, AI, DEFI, GAMING, LAYER1, LAYER2, RWA, PRIVACY, STABLE
```
- Style: Same as Filterable Trending tabs

**List Container**:
- Display: Flex, flex-direction column
- Gap: 0 (no gap, karena border-bottom serves as separator)

**List Item Style**:
- Display: Flex, justify-content space-between, align-items center
- Padding: 12px 0
- Border-bottom: 1px solid #2A2D31 (except last child)
- Hover: Background rgba(255,255,255,0.02)
- Transition: background 0.2s ease

**Item Layout**:
- **Left Section**: Display flex, align-items center, gap 12px
  - **Rank**: Width 32px, font 12px, weight 700, color #A0A3A1, text-align center
  - **Icon**: 28x28px circle (real crypto logo image)
  - **Info**: Flex-direction column, gap 2px
    - **Ticker**: Font 14px, weight 600, color #F5F6F7
    - **Market Cap**: Font 11px, weight 500, color #A0A3A1
    
- **Right Section**: Display flex, flex-direction column, gap 2px, text-align right
  - **Price**: Font 14px, weight 600, color #F5F6F7
  - **Change**: Font 11px, weight 600
    - Positive: color #12876A
    - Negative: color #E74C3C

**15 Major Cryptocurrencies Data**:
```
1. BTC - Bitcoin - $2.15T - $67,234.56 - +2.34%
2. ETH - Ethereum - $445.2B - $3,712.89 - +1.87%
3. BNB - BNB - $89.4B - $589.12 - +3.21%
4. SOL - Solana - $78.3B - $187.45 - +6.78%
5. XRP - XRP - $65.7B - $1.23 - +0.98%
6. USDT - Tether - $120.5B - $1.00 - +0.01%
7. USDC - USD Coin - $52.8B - $1.00 - -0.02%
8. ADA - Cardano - $42.3B - $1.21 - +1.45%
9. DOGE - Dogecoin - $38.9B - $0.27 - +18.91%
10. TRX - TRON - $28.4B - $0.32 - +2.34%
11. LINK - Chainlink - $15.7B - $27.89 - +2.67%
12. AVAX - Avalanche - $14.2B - $38.45 - +12.67%
13. MATIC - Polygon - $12.8B - $1.89 - +3.45%
14. DOT - Polkadot - $11.3B - $9.67 - +5.67%
15. UNI - Uniswap - $8.9B - $14.78 - +5.67%
```

**Icon Images**: Gunakan real crypto logos dengan URL format seperti:
```
https://cryptologos.cc/logos/bitcoin-btc-logo.png
https://cryptologos.cc/logos/ethereum-eth-logo.png
https://s2.coinmarketcap.com/static/img/coins/64x64/1.png (Bitcoin)
https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png (Ethereum)
```

---

### 8. MARKET MOVERS SECTION
**Padding**: 20px 0

**Tab Navigation**:
- Same style as Cryptocurrencies List tabs
- **3 Tabs**: GAINERS (default active), LOSERS, NEW LISTINGS

**Content**:
- Copy exact list style dari Cryptocurrencies List section
- Setiap tab menampilkan 10 items

**GAINERS Data** (10 items, sorted by highest gain):
```
1. SHIB - Shiba Inu - $14.2B - $0.00003456 - +24.67%
2. DOGE - Dogecoin - $38.9B - $0.27 - +18.91%
3. PEPE - Pepe - $4.8B - $0.00000123 - +16.45%
4. SOL - Solana - $78.3B - $187.45 - +14.23%
5. AVAX - Avalanche - $14.2B - $38.45 - +12.67%
6. BONK - Bonk - $2.1B - $0.00001234 - +11.89%
7. WIF - dogwifhat - $1.7B - $1.78 - +10.56%
8. RNDR - Render - $3.4B - $8.90 - +9.34%
9. JUP - Jupiter - $1.9B - $1.45 - +8.67%
10. PYTH - Pyth Network - $2.8B - $0.67 - +7.89%
```

**LOSERS Data** (10 items, sorted by highest loss):
```
1. LUNA - Terra Luna Classic - $780M - $0.00012 - -18.45%
2. FTT - FTX Token - $1.2B - $3.67 - -15.67%
3. LUNC - Terra Classic - $620M - $0.000098 - -12.89%
4. ICP - Internet Computer - $5.6B - $12.34 - -11.23%
5. ATOM - Cosmos - $11.3B - $9.67 - -9.78%
6. FTM - Fantom - $3.2B - $1.15 - -8.45%
7. ALGO - Algorand - $6.8B - $0.84 - -7.67%
8. FLOW - Flow - $2.1B - $2.01 - -6.89%
9. GALA - Gala - $1.8B - $0.056 - -5.67%
10. CHZ - Chiliz - $1.5B - $0.21 - -4.89%
```

**NEW LISTINGS Data** (10 items, newest tokens):
```
1. MOODENG - Moo Deng - $340M - $0.456 - +45.67%
2. GOAT - Goatseus Maximus - $280M - $1.23 - +32.45%
3. PNUT - Peanut - $220M - $2.34 - +28.91%
4. POPCAT - Popcat - $1.1B - $1.78 - +24.78%
5. NEIRO - Neiro - $180M - $0.89 - +19.45%
6. SPX - SPX6900 - $450M - $0.67 - +15.23%
7. FWOG - Fwog - $160M - $0.34 - +12.67%
8. MICHI - Michi - $95M - $0.23 - +9.89%
9. GIGA - Gigachad - $78M - $0.12 - +8.45%
10. MOG - Mog Coin - $890M - $0.0000034 - +6.78%
```

---

### 9. MARKET STATISTICS SECTION
**Padding**: 20px 0

**Grid Layout**:
```
Mobile: grid-template-columns: repeat(2, 1fr), gap 8px
Tablet: grid-template-columns: repeat(3, 1fr), gap 10px
Desktop: grid-template-columns: repeat(6, 1fr), gap 12px
```

**Card Design**:
- Background: #1A1B1E
- Border: 1px solid #2A2D31
- Border-radius: 8px
- Padding: 12px (mobile), 14px (tablet), 16px (desktop)
- Hover: 
  - Background #202124
  - Border #3A3D41
  - Transform translateY(-1px)
  - Box-shadow: 0 2px 8px rgba(0,0,0,0.15)
- Transition: all 0.2s ease

**Card Layout**:
- **Header**: Display flex, justify-between, align-items center, margin-bottom 8px
  - **Label**: Font 11px (mobile), 12px (tablet+), weight 500, color #A0A3A1
  - **Icon**: 
    - Size: 18px square
    - Border-radius: 4px
    - Background: unique color per card
    - SVG: 12x12px white
    
- **Content**: Display flex, align-baseline, justify-between, gap 8px
  - **Value**: Font 18px (mobile), 20px (tablet), 22px (desktop), weight 700, color #F5F6F7
  - **Change Badge**:
    - Font: 11px, weight 600
    - Padding: 2px 6px
    - Border-radius: 4px
    - Positive: Background rgba(18,135,106,0.15), color #12876A
    - Negative: Background rgba(231,76,60,0.15), color #E74C3C
    - Neutral: Background rgba(160,163,161,0.15), color #A0A3A1

**6 Stat Cards Data**:

1. **Total Market Cap**
   - Icon: Stacked layers SVG, background #FFD700
   - Value: $2.45T
   - Change: +2.34% (positive)

2. **24h Volume**
   - Icon: Chart line SVG, background #627EEA
   - Value: $89.2B
   - Change: +5.67% (positive)

3. **BTC Dominance**
   - Icon: Clock/pie SVG, background #F0B90B
   - Value: 58.7%
   - Change: -0.12% (negative)

4. **ETH Dominance**
   - Icon: Diamond SVG, background #9945FF
   - Value: 18.4%
   - Change: +0.45% (positive)

5. **Active Cryptos**
   - Icon: Document/list SVG, background #12876A
   - Value: 2,847
   - Change: +12 (positive, tanpa %)

6. **Fear & Greed Index**
   - Icon: Smiley face SVG, background #E74C3C
   - Value: 74
   - Change: "Greed" (color #F0B90B, background rgba(240,185,11,0.15))

---

### 10. PARTNERS SECTION
**Padding**: 20px 0
**Border-top**: 1px solid #2A2D31

**Container**:
- Display: Flex, align-items center, justify-content center
- Gap: 40px (mobile), 60px (tablet), 80px (desktop)
- Flex-wrap: wrap

**Partner Logos** (2 logos):
- Height: 32px (mobile), 36px (tablet), 40px (desktop)
- Opacity: 0.15
- Hover: Opacity 0.3, transition 0.3s ease
- Color: #F5F6F7

**Partners**:
1. **Dexscreener** - Custom SVG logo atau image
2. **CoinGecko** - Custom SVG logo atau image

---

### 11. FOOTER SECTION
**Background**: #151614
**Border-top**: 1px solid #2A2D31
**Padding**: 40px 20px 20px

**Layout Grid**:
```
Mobile: 1 column, gap 32px
Tablet: 2x2 grid, gap 32px
Desktop: 4 columns, gap 40px
```

#### Column 1 - BRAND (Desktop: span full width on mobile/tablet)

**Logo**: "COIN TRENDING"
- Font: 18px, weight 700
- Color: #F5F6F7
- Margin-bottom: 12px

**Description**:
```
"Your trusted source for real-time cryptocurrency market data, trends, and insights. 
Track the latest prices and market movements across all major cryptocurrencies."
```
- Font: 14px, weight 400
- Color: #A0A3A1
- Line-height: 1.6
- Margin-bottom: 16px

**Social Media Links**:
- Display: Flex, gap 12px
- **4 Icons** (20x20px each):
  1. Twitter (𝕏) - Hover color: #1DA1F2
  2. Telegram - Hover color: #0088CC
  3. GitHub - Hover color: #F5F6F7
  4. Share - Hover color: #F5F6F7

**Icon Style**:
- Size: 36x36px circle
- Background: #2A2D31
- Display: Flex center
- Border-radius: 50%
- Hover: 
  - Scale 1.1
  - TranslateY -2px
  - Background dengan accent color masing-masing
- Transition: all 0.3s ease

#### Column 2 - QUICK LINKS

**Title**: "Quick Links"
- Font: 16px, weight 600
- Color: #F5F6F7
- Margin-bottom: 16px

**Links**:
```
- Home
- Markets
- Trending
- Analytics
- Portfolio
```

**Link Style**:
- Font: 14px, weight 400
- Color: #A0A3A1
- Hover: Color #F5F6F7
- Margin-bottom: 8px
- Display: Block
- Transition: color 0.2s ease

#### Column 3 - RESOURCES

**Title**: "Resources"
- Same style as Quick Links title

**Links**:
```
- API
- Documentation
- Blog
- Learn Crypto
- Market Analysis
```

**Link Style**: Same as Quick Links

#### Column 4 - SUPPORT

**Title**: "Support"
- Same style as Quick Links title

**Links**:
```
- Help Center
- Contact Us
- Community
- FAQ
- Report Bug
```

**Link Style**: Same as Quick Links

#### FOOTER BOTTOM

**Container**:
- Border-top: 1px solid #2A2D31
- Padding-top: 20px
- Margin-top: 32px
- Display: Flex, justify-content space-between, align-items center
- Flex-direction: column (mobile), row (tablet+)
- Gap: 12px (mobile)

**Left Side - Copyright**:
```
"© 2024 Coin Trending. All rights reserved."
```
- Font: 14px, weight 400
- Color: #A0A3A1

**Right Side - Legal Links**:
```
Privacy Policy • Terms of Service • Cookie Policy
```
- Font: 14px, weight 400
- Color: #A0A3A1
- Separator: " • "
- Hover: Color #F5F6F7
- Transition: color 0.2s ease

---

## ⚙️ JAVASCRIPT FUNCTIONALITY

### 1. Hamburger Menu Toggle
```javascript
Saat hamburger diklik:
- Toggle class "active" pada hamburger
- Rotate 2 lines menjadi X shape
- Show/hide mobile menu (jika ada)
- Animation: rotate 45deg dan -45deg
```

### 2. Filter Tabs Switching
```javascript
Untuk semua section dengan tabs:
- Click event pada tab button
- Remove "active" class dari semua tabs
- Add "active" class ke clicked tab
- Hide semua tab content
- Show content yang sesuai dengan clicked tab
- Smooth transition opacity
```

**Implementation menggunakan data attributes**:
```html
<button data-tab="gainers">GAINERS</button>
<div data-content="gainers">...</div>
```

### 3. Marquee Animation
```css
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.marquee-content {
  animation: scroll 15s linear infinite;
}
```

**Content harus diduplikasi** untuk seamless loop.

### 4. Hover Effects
Semua interactive elements harus punya smooth hover transitions:
- Cards: background, border color, transform
- Buttons: background, scale
- Links: color
- Icons: scale, translateY
- Duration: 0.2s - 0.3s ease

### 5. Responsive Behavior
```javascript
Window resize event untuk:
- Adjust grid columns
- Reposition elements
- Update spacing
- Smooth transitions semua changes
```

---

## 🖼️ CRYPTO ICON IMAGES

**PENTING**: Gunakan **real crypto logo images** dari sources berikut:

### Option 1: CoinMarketCap CDN
```
Format URL: https://s2.coinmarketcap.com/static/img/coins/64x64/[ID].png

Examples:
- Bitcoin (1): https://s2.coinmarketcap.com/static/img/coins/64x64/1.png
- Ethereum (1027): https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png
- BNB (1839): https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png
- Solana (5426): https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png
```

### Option 2: CryptoLogos
```
Format: https://cryptologos.cc/logos/[name]-[ticker]-logo.png

Examples:
- https://cryptologos.cc/logos/bitcoin-btc-logo.png
- https://cryptologos.cc/logos/ethereum-eth-logo.png
- https://cryptologos.cc/logos/binance-coin-bnb-logo.png
```

### Option 3: CoinGecko API
```
Format: https://assets.coingecko.com/coins/images/[ID]/small/[name].png

Examples:
- Bitcoin: https://assets.coingecko.com/coins/images/1/small/bitcoin.png
- Ethereum: https://assets.coingecko.com/coins/images/279/small/ethereum.png
```

### Fallback Placeholder
Jika logo tidak tersedia, gunakan:
```html
<div class="token-icon" style="background: [TOKEN_COLOR];">
  <span>[TICKER]</span>
</div>
```

**Style untuk Fallback**:
```css
.token-icon {
  width: 24px; /* atau 28px untuk list */
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  color: #FFFFFF;
}
```

---

## 📱 RESPONSIVE REQUIREMENTS

### Mobile (< 768px)
- **Navbar**: Full width, hamburger visible
- **Token Grid**: 3 columns
- **Stats Grid**: 2 columns
- **Footer**: 1 column stack
- **Padding**: Reduce to 15px horizontal
- **Font Sizes**: Slightly smaller (but readable)
- **Tabs**: Horizontal scroll dengan smooth scrolling
- **List Items**: Reduce gaps, compact layout

### Tablet (768px - 1024px)
- **Token Grid**: 4 columns
- **Stats Grid**: 3 columns
- **Footer**: 2x2 grid
- **Padding**: 20px horizontal
- **Hamburger**: Still visible (atau hide, tergantung design)

### Desktop (> 1024px)
- **Token Grid**: 6 columns
- **Stats Grid**: 6 columns (full row)
- **Footer**: 4 columns
- **Padding**: 20-24px horizontal
- **Max-width Container**: Optional 1400px center-aligned
- **Hamburger**: Hidden (jika ada full navigation)

### Touch Devices
- Larger tap targets (min 44x44px)
- No hover states on touch
- Swipe gestures untuk tabs
- Smooth scroll behavior

---

## ✅ QUALITY CHECKLIST

### Design
- [ ] Consistent spacing system used throughout
- [ ] Color palette applied correctly
- [ ] Typography hierarchy clear and readable
- [ ] Icons and images properly sized
- [ ] All hover states functional
- [ ] Smooth transitions on all interactive elements

### Functionality
- [ ] All tabs switching correctly
- [ ] Hamburger menu animating smoothly
- [ ] Marquee scrolling without gaps
- [ ] Filter tabs showing/hiding correct content
- [ ] Real crypto logos loading properly
- [ ] No console errors

### Responsive
- [ ] Perfect layout on mobile (320px - 767px)
- [ ] Perfect layout on tablet (768px - 1024px)
- [ ] Perfect layout on desktop (1025px+)
- [ ] Smooth transitions between breakpoints
- [ ] No horizontal scroll
- [ ] Touch-friendly on mobile devices

### Performance
- [ ] Images optimized and loading fast
- [ ] CSS minified for production
- [ ] JavaScript efficient and non-blocking
- [ ] Smooth 60fps animations
- [ ] Fast initial page load

### Accessibility
- [ ] Semantic HTML structure
- [ ] Proper heading hierarchy (h1, h2, h3)
- [ ] Alt text for images
- [ ] Keyboard navigation working
- [ ] Focus states visible
- [ ] Color contrast WCAG AA compliant

---

## 🚀 FINAL RESULT

Website yang dihasilkan harus:

✅ **Professional & Premium** - Terlihat seperti CoinMarketCap/CoinGecko level  
✅ **Clean & Modern** - Design minimalist tapi informative  
✅ **Fully Responsive** - Perfect di semua devices (mobile, tablet, desktop)  
✅ **Smooth Animations** - All transitions dan hover effects smooth 60fps  
✅ **Real Data Ready** - Structure ready untuk integration dengan crypto APIs  
✅ **Fast Loading** - Optimized performance  
✅ **Easy to Customize** - Well-structured code, easy to modify colors, content, etc  

**Website ini ready untuk:**
- Integration dengan CoinGecko API atau CoinMarketCap API
- Adding real-time WebSocket price updates
- Expanding dengan fitur Portfolio Tracking
- Adding chart visualizations
- Multi-language support
- Dark/Light mode toggle

---

## 📝 IMPLEMENTATION NOTES

1. **Start dengan HTML structure** yang semantic dan clean
2. **Setup CSS variables** untuk colors dan spacing (easy customization)
3. **Build mobile-first**, kemudian enhance untuk tablet dan desktop
4. **Test di multiple browsers** (Chrome, Firefox, Safari, Edge)
5. **Use modern CSS** (Grid, Flexbox, CSS Variables)
6. **Keep JavaScript minimal** dan efficient
7. **Comment your code** untuk maintainability
8. **Optimize images** sebelum deploy
9. **Test performance** dengan Lighthouse
10. **Deploy dan share!**

---

**Good luck building your premium crypto tracking website! 🚀💎**
