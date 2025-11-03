# PROMPT LENGKAP UNTUK MEMBUAT WEBSITE CRYPTO TRACKING "COIN TRENDING"

Buatkan website crypto tracking premium dengan design modern dan clean seperti CoinMarketCap/CoinGecko dengan spesifikasi detail berikut:

---

## SETUP & DESIGN SYSTEM

### Font & Typography
- **Font Family**: Google Fonts Inter dengan weights 400, 500, 600, 700, 800
- **Font Loading**: Preload Inter dengan font-display swap untuk performance optimal
- **Hierarchy**: 
  - Heading 1: 28px weight 800 line-height 34px
  - Heading 2: 18px weight 700 line-height 22px
  - Heading 3: 16px weight 600 line-height 20px
  - Body Large: 16px weight 500 line-height 20px
  - Body: 14px weight 500 line-height 18px
  - Small: 12px weight 600 line-height 14px
  - Tiny: 11px weight 500 line-height 13px
  - Micro: 10px weight 700 line-height 12px

### Color Palette
- **Background Colors**:
  - Primary Background: #0F0F10 (body main)
  - Secondary Background: #151614 (sections, marquee, footer)
  - Card Background: #1A1B1E
  - Card Hover: #202124
  - Banner Background: #202124
  
- **Border Colors**:
  - Default Border: #2A2D31
  - Hover Border: #3A3D41
  - Active Border: #FFFFFF
  
- **Text Colors**:
  - Primary Text: #F5F6F7
  - Secondary Text: #A0A3A1
  - Disabled Text: #6A6D6A
  
- **Accent Colors**:
  - Positive/Green: #12876A
  - Negative/Red: #E74C3C
  - Warning/Yellow: #F0B90B
  - Info/Blue: #627EEA

### Spacing & Layout
- **Container Padding**: 20px horizontal (mobile), 24px (tablet), 32px (desktop)
- **Section Padding**: 20px vertical antar sections
- **Card Padding**: 12px (mobile), 14px (tablet), 16px (desktop)
- **Gap System**: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px
- **Border Radius**: 6px (buttons), 8px (small cards), 12px (standard cards), 16px (banners)

### Responsive Breakpoints
- **Mobile**: < 768px (single column layouts, compact spacing)
- **Tablet**: 768px - 1023px (2-3 column layouts, medium spacing)
- **Desktop**: >= 1024px (4-6 column layouts, optimal spacing)

---

## NAVBAR STICKY SECTION

### Position & Styling
- **Position**: Sticky top 0 dengan z-index 100
- **Height**: Exactly 56px
- **Background**: #0F0F10 solid
- **Layout**: Flexbox justify-between dengan padding horizontal 15px (mobile), 20px (tablet), 32px (desktop)
- **Border**: Bottom border 1px solid #2A2D31 (optional untuk visual separation)

### Left Side - Brand
- **Text**: "COIN TRENDING" 
- **Font**: 16px weight 600, letter-spacing 0.14px
- **Color**: #F5F6F7
- **Hover**: None (brand tidak clickable atau bisa link ke home)

### Right Side - Actions
- **Layout**: Flex row dengan gap 12px, align-items center

#### ADD Button
- **Background**: Transparent
- **Border**: 1px solid #3A3D41
- **Padding**: 6px 10px
- **Height**: 28px
- **Min-width**: 50px
- **Font**: 12px weight 600, color #F5F6F7
- **Border-radius**: 6px
- **Icon**: Plus SVG (12x12px, stroke-width 1.5, color #F5F6F7) di dalam button
- **Display**: Flex center dengan gap 4px
- **Hover State**: 
  - Background: #1A1B1E
  - Border color: #FFFFFF
  - Transform: scale(1.02)
  - Transition: all 0.2s ease
- **Active State**: Scale(0.98)

#### Hamburger Menu
- **Width**: 24px
- **Height**: 24px
- **Display**: Flex column, justify-center, align-items center
- **Position**: Relative
- **Lines**: 
  - 2 horizontal lines, each 20px width, 2px height
  - Background: #F5F6F7
  - Border-radius: 1px
  - Position absolute: top 8px dan top 14px
  - Transition: all 0.3s ease
- **Active State** (saat diklik):
  - Line 1: Rotate 45deg, top 11px
  - Line 2: Rotate -45deg, top 11px
  - Gap: 0 (overlap)

---

## MARQUEE SCROLLING BAR

### Position & Container
- **Position**: Sticky top 56px (di bawah navbar)
- **Height**: Exactly 32px
- **Background**: #151614 solid
- **Width**: 100vw
- **Z-index**: 99
- **Overflow**: Hidden
- **Position**: Relative untuk gradient overlays

### Gradient Fade Overlays
- **Left Gradient**: 
  - Position: absolute left 0, top 0, height 100%, width 16px
  - Background: linear-gradient(to right, #151614, transparent)
  - Z-index: 2
- **Right Gradient**:
  - Position: absolute right 0, top 0, height 100%, width 16px
  - Background: linear-gradient(to left, #151614, transparent)
  - Z-index: 2

### Marquee Content
- **Container**: Flex row dengan gap 24px
- **Animation**: 
  - Name: marquee-scroll
  - Duration: 15s
  - Timing: linear
  - Iteration: infinite
  - Transform: translateX(0) to translateX(-50%)
- **Content Duplication**: Duplicate semua items untuk seamless loop

### Marquee Items (8 crypto dengan format)
- **Format**: "#1 BTC +2.5%, #2 ETH +1.8%, #3 BNB +3.2%, #4 XRP +0.9%, #5 USDT +4.1%, #6 SOL +6.7%, #7 TRX +2.3%, #8 USDC +5.1%"
- **Layout**: Flex row dengan gap 6px, align-items center
- **Item Structure**:
  - Rank: Font 10px weight 700, color #A0A3A1
  - Token Icon: 14x14px circle dengan placeholder image atau background color
  - Ticker: Font 12px weight 600, color #F5F6F7
  - Percent: Font 12px weight 600, color #12876A (always positive untuk demo)
- **Spacing**: Each item memiliki padding 0 12px

---

## HERO SECTION

### Container
- **Padding**: Top 24px, horizontal mengikuti container padding, bottom 0
- **Layout**: Center-aligned dengan max-width 1200px, margin auto

### Main Title
- **Text**: "Track Cryptocurrency Trends"
- **Font**: 28px weight 800, line-height 34px
- **Letter-spacing**: -0.32px
- **Color**: #F5F6F7
- **Margin**: Bottom 12px
- **Text-align**: Center

### Subtitle
- **Text**: "Real-time market data and insights for top cryptocurrencies"
- **Font**: 16px weight 500, line-height 20px
- **Color**: #A0A3A1
- **Margin**: Bottom 20px
- **Text-align**: Center

### Banner Advertisement Placeholder
- **Background**: #202124
- **Height**: 100px
- **Border-radius**: 16px
- **Padding**: 0
- **Display**: Flex center dengan align-items center, justify-content center
- **Box-shadow**: 0 2px 8px rgba(0,0,0,0.25)
- **Text**: "Advertisement Space" 
- **Font**: 14px weight 500, color #A0A3A1
- **Margin**: Bottom 20px

---

## TOKEN TRENDING SECTIONS

### ETH TRENDING SECTION (Template untuk semua token sections)

#### Section Header
- **Layout**: Flex row dengan align-items center, gap 8px
- **Margin**: Bottom 20px
- **Padding**: Top 20px (section spacing)

#### Section Title
- **Text**: "ETH Trending"
- **Font**: 18px weight 700, line-height 22px
- **Color**: #F5F6F7
- **Icon**: ETH logo SVG 24x24px dengan fill #627EEA atau path putih
- **Icon Position**: Sebelum text dengan gap 8px

#### Token Grid Layout
- **Display**: CSS Grid
- **Mobile (< 768px)**: 3 columns, gap 8px
- **Tablet (768px - 1023px)**: 4 columns, gap 8px
- **Desktop (>= 1024px)**: 6 columns, gap 8px
- **Grid Template**: repeat(auto-fit, minmax(100px, 1fr))

#### Token Card Design
- **Background**: #1A1B1E
- **Border**: 1px solid #2A2D31
- **Border-radius**: 12px
- **Padding**: 12px
- **Min-height**: 60px
- **Display**: Flex row dengan align-items center
- **Gap**: 6px internal
- **Transition**: all 0.2s ease
- **Hover State**:
  - Background: #202124
  - Border-color: #3A3D41
  - Transform: translateY(-1px)
  - Box-shadow: 0 2px 8px rgba(0,0,0,0.15)

#### Card Content Layout
- **Rank Number**:
  - Font: 10px weight 700
  - Color: #A0A3A1
  - Min-width: 18px
  - Text-align: left
  
- **Token Icon**:
  - Size: 24x24px circle
  - Flex-shrink: 0
  - Border-radius: 50%
  - Object-fit: cover
  - Placeholder: Gunakan placeholder image URL seperti "https://via.placeholder.com/24x24/627EEA/FFFFFF?text=ETH" (akan diganti dengan API real images)
  
- **Token Info** (flex column):
  - Flex: 1
  - Gap: 1px vertical
  - Ticker: Font 14px weight 600, color #F5F6F7, line-height 1
  - Change: Font 12px weight 600, color #12876A (default), line-height 1
  - Negative Change: Color #E74C3C dengan class "negative"

#### Token Data (12 items untuk ETH Trending)
1. ETH +2.34%
2. USDC +1.89%
3. WBTC +3.12%
4. SHIB +5.67%
5. PEPE +8.23%
6. LINK +2.45%
7. UNI +1.78%
8. AAVE +3.56%
9. CRV +2.11%
10. MKR +4.89%
11. SNX +1.34%
12. COMP +2.67%

**Note**: Semua menggunakan placeholder images dengan warna #627EEA untuk ETH ecosystem tokens.

---

### SOL TRENDING SECTION
**Copy exact style dari ETH Trending Section**, dengan perubahan berikut:

- **Section Title**: "SOL Trending" dengan SOL logo icon (24x24px) menggunakan warna #9945FF
- **12 SOL Ecosystem Tokens**:
  1. SOL +4.56%
  2. RAY +3.23%
  3. SRM +2.89%
  4. ORCA +5.12%
  5. MNGO +1.67%
  6. STEP +3.45%
  7. COPE +2.78%
  8. MEDIA +4.11%
  9. ROPE +1.89%
  10. FIDA +3.56%
  11. MAPS +2.34%
  12. TULIP +6.78%

- **Placeholder Images**: Gunakan warna #9945FF untuk semua SOL ecosystem tokens

---

### BSC TRENDING SECTION
**Copy exact style dari ETH Trending Section**, dengan perubahan berikut:

- **Section Title**: "BSC Trending" dengan BSC logo icon (24x24px) menggunakan warna #F0B90B
- **12 BSC Tokens**:
  1. BNB +2.11%
  2. CAKE +3.45%
  3. BAKE +1.89%
  4. BURGER +4.56%
  5. AUTO +2.78%
  6. ALPACA +3.12%
  7. XVS +1.67%
  8. BELT +2.45%
  9. EPS +4.23%
  10. WATCH +1.34%
  11. TWT +3.67%
  12. SFP +2.89%

- **Placeholder Images**: Gunakan warna #F0B90B untuk semua BSC tokens

---

## FILTERABLE TRENDING SECTION

### Section Header
- **Layout**: Flex row dengan gap 24px, overflow-x auto untuk mobile
- **Padding**: Bottom 4px
- **Border-bottom**: 1px solid #2A2D31
- **Margin**: Bottom 20px
- **Scrollbar**: Hidden untuk mobile dengan smooth scroll

### Filter Tabs
- **Layout**: Flex row dengan gap 24px (desktop), gap 16px (mobile)
- **Tab Style**:
  - Background: none
  - Border: none
  - Padding: 8px 0
  - Font: 14px weight 600
  - Color: #A0A3A1 (inactive), #F5F6F7 (active)
  - White-space: nowrap
  - Cursor: pointer
  - Position: relative
  - Display: flex, align-items center, gap 6px

#### Active Tab State
- **Underline**: 2px solid #FFFFFF
- **Position**: absolute bottom -4px
- **Width**: 100%
- **Border-radius**: 1px
- **Transition**: all 0.2s ease

#### Tab Icons (SVG 16x16px)
- **ALT Trending** (active default): Orange star icon (#FF9500)
- **BASE Trending**: Blue circle icon (#0052FF)
- **TRON Trending**: Red triangle icon (#FF060A)
- **POL Trending**: Purple polygon icon (#8247E5)

### Tab Content
- **Container**: Grid layout sama seperti ETH Trending (3/4/6 columns)
- **Tokens per Tab**: 12 tokens masing-masing dengan style card sama

#### ALT Trending Tokens (default visible)
1. BASE +3.45%
2. TRX +2.89%
3. MATIC +4.12%
4. AVAX +3.67%
5. ATOM +2.34%
6. NEAR +5.23%
7. DOT +1.89%
8. ALGO +3.56%
9. EGLD +2.78%
10. FTM +4.45%
11. ONE +1.67%
12. FLOW +3.12%

#### BASE Trending Tokens (hidden by default)
- Copy ALT style dengan 12 BASE ecosystem tokens berbeda

#### TRON Trending Tokens (hidden by default)
- Copy ALT style dengan 12 TRON ecosystem tokens berbeda

#### POL Trending Tokens (hidden by default)
- Copy ALT style dengan 12 Polygon ecosystem tokens berbeda

### JavaScript Functionality
- **Tab Switching**: Click event untuk switch active tab
- **Content Show/Hide**: Toggle visibility berdasarkan data-tab attribute
- **Smooth Transition**: Fade effect saat switch content (opacity 0 to 1, 0.3s)

---

## CRYPTOCURRENCIES LIST SECTION

### Section Header
- **Padding**: Top 20px (section spacing)
- **Margin**: Bottom 16px

### Filter Tabs (Horizontal Scrollable)
- **Layout**: Flex row dengan gap 16px, overflow-x auto
- **Padding**: Bottom 12px
- **Scrollbar**: Hidden dengan smooth scroll behavior
- **Tabs**: 
  - ALL (active default), MEME, AI, DEFI, GAMING, LAYER1, LAYER2, RWA, PRIVACY, STABLE
- **Tab Style**:
  - Padding: 6px 12px
  - Font: 12px weight 600
  - Color: #A0A3A1 (inactive), #F5F6F7 (active)
  - Border-radius: 6px
  - Background: transparent (inactive), #1A1B1E (active)
  - White-space: nowrap
  - Transition: all 0.2s ease
- **Active State**: Background #1A1B1E, color #F5F6F7

### List Container
- **Layout**: Flex column dengan gap 0
- **Background**: Transparent
- **Border**: Top dan bottom border 1px solid #2A2D31

### List Item Design
- **Layout**: Flex row dengan justify-between, align-items center
- **Padding**: 12px vertical, 0 horizontal
- **Border-bottom**: 1px solid #2A2D31 (except last item)
- **Min-height**: 60px
- **Transition**: background 0.2s ease
- **Hover State**: Background rgba(255,255,255,0.02)

#### Left Side Layout
- **Rank**: 
  - Width: 32px
  - Font: 12px weight 700
  - Color: #A0A3A1
  - Text-align: left
  
- **Token Icon**:
  - Size: 28x28px
  - Border-radius: 50%
  - Margin: 0 12px
  - Placeholder: "https://via.placeholder.com/28x28/[COLOR]/FFFFFF?text=[TICKER]"
  
- **Token Info** (flex column):
  - Ticker: Font 14px weight 600, color #F5F6F7, line-height 1.2
  - Market Cap: Font 11px weight 500, color #A0A3A1, line-height 1.2
  - Format: "$45.2B" atau "¥312.5T"

#### Right Side Layout (Text-align right)
- **Price**: 
  - Font: 14px weight 600
  - Color: #F5F6F7
  - Line-height: 1.2
  - Format: "$43,234.56"
  
- **Change**:
  - Font: 11px weight 600
  - Color: #12876A (positive), #E74C3C (negative)
  - Line-height: 1.2
  - Format: "+2.34%" atau "-1.89%"

### Cryptocurrencies Data (15 items)
1. BTC - Rank 1, Price $43,234.56, Change +2.34%, Market Cap $845.2B
2. ETH - Rank 2, Price $2,345.67, Change +1.89%, Market Cap $281.5B
3. BNB - Rank 3, Price $312.45, Change +3.12%, Market Cap $46.8B
4. SOL - Rank 4, Price $98.76, Change +4.56%, Market Cap $42.3B
5. XRP - Rank 5, Price $0.5234, Change +0.89%, Market Cap $28.9B
6. USDT - Rank 6, Price $1.0001, Change +0.01%, Market Cap $95.2B
7. USDC - Rank 7, Price $0.9998, Change -0.02%, Market Cap $28.5B
8. ADA - Rank 8, Price $0.4567, Change +1.23%, Market Cap $16.2B
9. DOGE - Rank 9, Price $0.0891, Change +2.67%, Market Cap $12.8B
10. TRX - Rank 10, Price $0.1034, Change +1.45%, Market Cap $9.1B
11. LINK - Rank 11, Price $14.23, Change +3.45%, Market Cap $8.2B
12. AVAX - Rank 12, Price $34.56, Change +2.89%, Market Cap $12.5B
13. MATIC - Rank 13, Price $0.8234, Change +1.67%, Market Cap $7.8B
14. DOT - Rank 14, Price $6.78, Change +0.98%, Market Cap $8.9B
15. UNI - Rank 15, Price $7.23, Change +2.34%, Market Cap $4.3B

**Placeholder Images**: Gunakan warna sesuai crypto brand colors (BTC #FFD700, ETH #627EEA, BNB #F0B90B, dll)

---

## MARKET MOVERS SECTION

### Section Header
- **Padding**: Top 20px
- **Margin**: Bottom 16px

### Filter Tabs
- **Layout**: Flex row dengan gap 0
- **Tabs**: GAINERS (active default), LOSERS, NEW LISTINGS
- **Tab Style**:
  - Padding: 8px 16px
  - Font: 14px weight 600
  - Color: #A0A3A1 (inactive), #F5F6F7 (active)
  - Border-bottom: 2px solid transparent (inactive), 2px solid #FFFFFF (active)
  - Background: transparent
  - Cursor: pointer
  - Transition: all 0.2s ease

### Content
**Copy exact style dari Cryptocurrencies List Section** untuk semua tabs.

#### GAINERS Tab (10 items, default visible)
1. SHIB +24.67% - Price $0.00001234
2. DOGE +18.91% - Price $0.0891
3. PEPE +16.45% - Price $0.00000123
4. SOL +14.23% - Price $98.76
5. AVAX +12.67% - Price $34.56
6. MATIC +11.89% - Price $0.8234
7. LINK +10.45% - Price $14.23
8. AAVE +9.78% - Price $89.12
9. UNI +8.34% - Price $7.23
10. CRV +7.89% - Price $0.5678

#### LOSERS Tab (10 items, hidden by default)
1. LUNA -18.45% - Price $0.000123
2. FTT -15.67% - Price $1.2345
3. LUNC -12.89% - Price $0.000098
4. ICP -11.23% - Price $8.90
5. ATOM -9.78% - Price $7.65
6. EGLD -8.45% - Price $23.45
7. NEAR -7.89% - Price $2.34
8. ALGO -6.67% - Price $0.1234
9. ONE -5.56% - Price $0.0098
10. FLOW -4.23% - Price $0.5678

#### NEW LISTINGS Tab (10 items, hidden by default)
1. MOODENG +45.67% - Price $0.1234
2. GOAT +32.45% - Price $0.0567
3. PNUT +28.91% - Price $0.0234
4. POPCAT +24.78% - Price $0.0123
5. NEIRO +19.45% - Price $0.8901
6. TOSHI +17.89% - Price $0.0034
7. BRETT +15.67% - Price $0.0456
8. DEGEN +13.45% - Price $0.0123
9. BONK +11.23% - Price $0.000123
10. WIF +9.78% - Price $2.3456

### JavaScript Functionality
- **Tab Switching**: Show/hide content berdasarkan active tab
- **Smooth Transition**: Fade effect saat switch (0.3s ease)

---

## MARKET STATISTICS SECTION

### Container
- **Padding**: Top 20px
- **Margin**: Bottom 20px

### Grid Layout
- **Display**: CSS Grid
- **Mobile (< 768px)**: 2 columns, gap 8px
- **Tablet (768px - 1023px)**: 3 columns, gap 10px
- **Desktop (>= 1024px)**: 6 columns, gap 12px

### Stat Card Design
- **Background**: #1A1B1E
- **Border**: 1px solid #2A2D31
- **Border-radius**: 8px
- **Padding**: 12px (mobile), 14px (tablet), 16px (desktop)
- **Transition**: all 0.2s ease
- **Hover State**:
  - Background: #202124
  - Border-color: #3A3D41
  - Transform: translateY(-1px)
  - Box-shadow: 0 4px 12px rgba(0,0,0,0.15)

### Card Layout Structure
- **Header Row**: Flex justify-between, align-items center, margin-bottom 8px
  - Label: Font 11px (mobile), 12px (tablet+), weight 500, color #A0A3A1
  - Icon: 18px square, border-radius 4px, background color sesuai stat, SVG icon 12x12px putih center
  
- **Content Row**: Flex justify-between, align-items baseline, gap 8px
  - Value: Font 18px (mobile), 20px (tablet), 22px (desktop), weight 700, color #F5F6F7
  - Change Badge: Font 11px weight 600, padding 2px 6px, border-radius 4px
    - Positive: Background rgba(18,135,106,0.15), color #12876A
    - Negative: Background rgba(231,76,60,0.15), color #E74C3C

### 6 Statistics Cards

#### 1. Total Market Cap
- **Icon**: Stack layers SVG dengan background #FFD700
- **Value**: "$2.45T"
- **Change**: "+2.34%" (positive)

#### 2. 24h Volume
- **Icon**: Chart line SVG dengan background #627EEA
- **Value**: "$89.2B"
- **Change**: "+5.67%" (positive)

#### 3. BTC Dominance
- **Icon**: Clock/time SVG dengan background #F0B90B
- **Value**: "58.7%"
- **Change**: "-0.12%" (negative)

#### 4. ETH Dominance
- **Icon**: Diamond/gem SVG dengan background #9945FF
- **Value**: "18.4%"
- **Change**: "+0.45%" (positive)

#### 5. Active Cryptos
- **Icon**: Document/list SVG dengan background #12876A
- **Value**: "2,847"
- **Change**: "+12" (positive)

#### 6. Fear & Greed Index
- **Icon**: Smiley face SVG dengan background #E74C3C
- **Value**: "74"
- **Change**: "Greed" (text, color #F0B90B, bukan badge)

---

## PARTNERS SECTION

### Container
- **Padding**: Top 20px, bottom 20px
- **Border-top**: 1px solid #2A2D31
- **Layout**: Flex center dengan align-items center, justify-content center
- **Gap**: 40px (mobile), 60px (tablet), 80px (desktop)
- **Flex-wrap**: Wrap untuk responsive

### Partner Logos
- **Height**: 32px (mobile), 36px (tablet), 40px (desktop)
- **Opacity**: 0.15 default
- **Hover**: Opacity 0.3, transition 0.2s ease
- **Color**: #F5F6F7 untuk SVG
- **2 Logos**:
  - Dexscreener: Custom SVG logo dengan path yang sesuai brand
  - CoinGecko: Custom SVG logo dengan path yang sesuai brand

---

## FOOTER SECTION

### Container
- **Background**: #151614
- **Border-top**: 1px solid #2A2D31
- **Padding**: 40px 20px 20px (mobile), 40px 32px 24px (tablet), 40px 64px 32px (desktop)
- **Margin-top**: 40px

### Footer Layout
- **Display**: CSS Grid
- **Mobile (< 768px)**: 1 column, gap 32px
- **Tablet (768px - 1023px)**: 2x2 grid, gap 32px
- **Desktop (>= 1024px)**: 4 columns, gap 40px

### Column 1 - Brand Section
- **Logo**: "COIN TRENDING"
  - Font: 18px weight 700
  - Color: #F5F6F7
  - Margin-bottom: 12px
  
- **Description**: 
  - Text: "Your trusted source for real-time cryptocurrency market data, trends, and insights. Track the latest prices and market movements across all major cryptocurrencies."
  - Font: 14px weight 400, line-height 1.6
  - Color: #A0A3A1
  - Margin: 12px 0 20px 0
  
- **Social Media Icons**:
  - Layout: Flex row dengan gap 12px
  - Icons: Twitter, Telegram, GitHub, Share (SVG 20x20px)
  - Background: #2A2D31 (36x36px circle dengan padding 8px)
  - Border-radius: 50%
  - Hover: 
    - Background: #3A3D41
    - Transform: scale(1.1) translateY(-2px)
    - Transition: all 0.2s ease

### Column 2 - Quick Links
- **Title**: "Quick Links"
  - Font: 16px weight 600
  - Color: #F5F6F7
  - Margin-bottom: 16px
  
- **Links** (5 items):
  - Home
  - Markets
  - Trending
  - Analytics
  - Portfolio
  
- **Link Style**:
  - Font: 14px weight 400
  - Color: #A0A3A1
  - Margin-bottom: 8px
  - Display: block
  - Transition: color 0.2s ease
  - Hover: Color #F5F6F7

### Column 3 - Resources
- **Title**: "Resources"
  - Copy style dari Quick Links title
  
- **Links** (5 items):
  - API
  - Documentation
  - Blog
  - Learn Crypto
  - Market Analysis
  
- **Link Style**: Copy exact dari Quick Links

### Column 4 - Support
- **Title**: "Support"
  - Copy style dari Quick Links title
  
- **Links** (5 items):
  - Help Center
  - Contact Us
  - Community
  - FAQ
  - Report Bug
  
- **Link Style**: Copy exact dari Quick Links

### Footer Bottom
- **Border-top**: 1px solid #2A2D31
- **Padding-top**: 20px
- **Margin-top**: 32px
- **Layout**: Flex justify-between, align-items center
- **Mobile**: Flex column dengan gap 12px, align-items flex-start

- **Copyright Text**:
  - "© 2024 Coin Trending. All rights reserved."
  - Font: 14px weight 400
  - Color: #A0A3A1
  
- **Legal Links**:
  - Layout: Flex row dengan gap 16px
  - Links: "Privacy Policy • Terms of Service • Cookie Policy"
  - Font: 14px weight 400
  - Color: #A0A3A1
  - Hover: Color #F5F6F7
  - Separator: "•" dengan margin 0 8px

---

## JAVASCRIPT FUNCTIONALITY

### Hamburger Menu Toggle
- **Event**: Click pada hamburger button
- **Action**: Toggle active class pada button dan menu container
- **Animation**: Smooth rotate transition untuk hamburger lines
- **Menu Content**: Mobile menu slide down dengan opacity fade (optional)

### Filter Tabs Switching
- **Event**: Click pada filter tabs (Network Trending, Cryptocurrencies, Market Movers)
- **Action**: 
  - Remove active class dari semua tabs
  - Add active class ke clicked tab
  - Show content dengan data-tab attribute sesuai
  - Hide other content dengan display none atau opacity 0
- **Transition**: Smooth fade effect (0.3s ease)

### Hover Effects
- **Cards**: Scale, translateY, background changes
- **Buttons**: Scale, border color changes
- **Links**: Color transitions
- **Icons**: Scale dan translateY animations

### Marquee Animation
- **CSS Animation**: Keyframes untuk infinite scroll
- **Performance**: Use transform translateX untuk GPU acceleration
- **Seamless Loop**: Duplicate content untuk smooth infinite scroll

### Responsive Behavior
- **Breakpoint Detection**: Media queries untuk smooth transitions
- **Mobile Menu**: Hamburger menu toggle untuk mobile navigation
- **Tab Scrolling**: Horizontal scroll untuk filter tabs di mobile

---

## TECHNICAL REQUIREMENTS

### Performance Optimization
- **CSS**: Efficient selectors, minimal reflows
- **Animations**: Use transform dan opacity (GPU accelerated)
- **Images**: Placeholder URLs yang mudah diganti dengan API real images
- **Font Loading**: Preload Inter dengan font-display swap
- **Lazy Loading**: Optional untuk images di bawah fold

### Accessibility
- **Semantic HTML**: Proper heading hierarchy, nav, main, footer tags
- **Keyboard Navigation**: Focus states untuk semua interactive elements
- **ARIA Labels**: Proper labels untuk icons dan buttons
- **Color Contrast**: WCAG AA compliant (minimum 4.5:1)

### Cross-Browser Compatibility
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **CSS Prefixes**: Auto-prefix untuk vendor-specific properties
- **Fallbacks**: Graceful degradation untuk older browsers

### Code Structure
- **HTML**: Well-structured dengan semantic tags
- **CSS**: Organized dengan BEM methodology atau component-based
- **JavaScript**: Modular functions, clean code, minimal dependencies
- **Comments**: Clear comments untuk complex logic

### Image Placeholders
- **Format**: Semua token icons menggunakan placeholder URLs
- **Pattern**: "https://via.placeholder.com/[SIZE]/[COLOR]/FFFFFF?text=[TICKER]"
- **Replacement**: Easy replacement dengan API real images menggunakan data attributes atau dynamic src

---

## FINAL RESULT EXPECTATION

Website crypto tracking premium dengan:
- ✅ Design professional dan modern seperti CoinMarketCap/CoinGecko
- ✅ Smooth animations dan transitions di semua elements
- ✅ Perfect responsive behavior di semua device sizes
- ✅ Consistent design system dengan color palette dan typography
- ✅ Clean code structure yang mudah maintain
- ✅ Ready untuk integration dengan real crypto APIs
- ✅ Performance optimized dengan GPU-accelerated animations
- ✅ Accessibility compliant dengan proper semantic HTML
- ✅ Premium look dan feel dengan attention to detail

---

**Catatan Penting**: 
- Semua token icons menggunakan placeholder images yang akan diganti dengan API real images nantinya
- Semua data cryptocurrency adalah contoh data dan akan diganti dengan real-time API data
- Pastikan semua hover effects, transitions, dan animations smooth dan tidak laggy
- Design harus konsisten di semua sections dengan spacing dan typography yang tepat
- Footer harus lengkap dengan semua links dan social media icons
- Responsive design harus perfect di mobile, tablet, dan desktop tanpa layout breaking
