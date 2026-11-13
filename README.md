# AGRI IQ — Agricultural Intelligence & Research
### Bengaluru, Karnataka, India | agriiq.in

> **"INTELLIGENCE BEHIND EVERY MARKET DECISION."**  
> *Understanding Markets. Unlocking Opportunities.*

---

## 1. Executive Overview

**AGRI IQ** is a research-driven agricultural market intelligence and analytics company headquartered in Bengaluru, India. 

Agricultural market information is deeply fragmented across producers, wholesale mandis, maritime importers, cold-storage warehouses, distributors, and modern retail networks. Agri IQ bridges this structural information gap by gathering ground observations, validating signals through multi-source triangulation, standardizing disparate trade units, and delivering actionable commercial intelligence.

The company focuses initially on fresh fruits and imported agricultural commodities—where maritime shipping timelines, tariff policies, and cold-chain integrity dictate commercial outcomes—with an active roadmap to expand across India's broader agricultural and food supply chain.

---

## 2. Brand Identity & Design System

- **Official Logos:**
  - Header & Navigation: `public/logo/agriiq-logo-horizontal-trimmed.png`
  - Footer & Badges: `public/logo/agriiq-logo-horizontal-trimmed.png` (integrated on high-contrast container)
  - Favicon & Icons: `public/logo/agriiq-logo-square.png`, `public/favicon.ico`, `public/icon-192.png`, `public/icon-512.png`
- **Color Palette:**
  - **Deep Forest Green** (`#073A27`): Primary brand color, hero sections, and executive presence
  - **Agricultural Green** (`#247A20`): Secondary brand, action highlights, and verified badges
  - **Fresh Green** (`#59A90A`): Accents, checkmarks, and data indicators
  - **Lime Green** (`#B9D912`): Precision highlights and focal callouts
  - **Off-White** (`#F6F8F3`): Main background providing visual breathing room
  - **Light Grey** (`#E8ECE6`): Card borders and structural dividers
  - **Charcoal** (`#202923`): High-legibility body typography
  - **Pure White** (`#FFFFFF`): Contrast cards and container panels
- **Typography:**
  - Headlines: **Manrope** (confident, modern sans-serif)
  - Body & UI: **DM Sans** (clean, readable geometric sans)
  - Editorial Accents: **Newsreader** (classic serif for quotes and abstracts)

---

## 3. Website Architecture

The platform is structured into eight distinct functional routes:

| Route | Page | Purpose |
|---|---|---|
| `/` | **Home** | High-impact hero, market context, 5 service practices, commodity overview, 5-step methodology, 8 industry applications, and latest insights. |
| `/about/` | **About Us** | Origin story, the agricultural information gap, mission, vision, core research values, and Bengaluru headquarters context. |
| `/services/` | **Our Services** | Detailed explanations of the 5 core practices, core capabilities, deliverables, and commercial objectives. |
| `/commodities/` | **Commodity Intelligence** | Interactive searchable commodity directory across 6 categories (Fruits, Vegetables, Grains, Pulses, Spices, Oilseeds) with expandable research scopes and inquiry triggers. |
| `/industries/` | **Industries We Serve** | 8 commercial sector applications: challenges, Agri IQ solutions, metrics analyzed, and sample deliverables. |
| `/methodology/` | **Research Methodology** | Interactive 5-step visual process (COLLECT → VALIDATE → STRUCTURE → ANALYSE → DELIVER) with data quality and confidence tier disclosures. |
| `/insights/` | **Insights & Reports** | Searchable intelligence library featuring published demonstration reports with verifiable statutory citations alongside active research themes. |
| `/insights/[slug]/` | **Report Detail** | Complete research briefs with executive abstract, key takeaways, deep analysis, and official source citations. |
| `/contact/` | **Contact Us** | Bengaluru location, business inquiry form with client validation, reference code generator, and direct mailto transmission. |

---

## 4. Technical Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Export Mode:** Pure Static Export (`output: "export"`, `images: { unoptimized: true }`, `trailingSlash: true`)
- **Compatibility:** GitHub Pages, Vercel, Netlify, Cloudflare Pages, Apache/Nginx

---

## 5. Local Development & Build

### Prerequisites
- Node.js 18+ (tested on v24.14.0)
- npm 9+

### Installation
```bash
# Navigate to project directory
cd agriiq-web

# Install dependencies
npm install
```

### Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Run Production Static Build & Export
```bash
npm run build
```
The static HTML, CSS, JavaScript, and assets are generated in the `./out` directory.

### Preview Static Export Locally
```bash
npx serve out
```

---

## 6. Deployment Guides

### Option A: GitHub Pages
1. Push this repository to GitHub.
2. In your repository settings:
   - Navigate to **Settings > Pages**.
   - Under **Build and deployment > Source**, choose **GitHub Actions**.
3. Push to `main` or trigger the workflow manually from the **Actions** tab.
4. The workflow in `.github/workflows/deploy.yml` will automatically build the static export and deploy it to `https://<USERNAME>.github.io/<REPO>/`.
   - *Note on subfolder paths:* The workflow automatically passes `NEXT_PUBLIC_BASE_PATH` from GitHub Actions, ensuring all asset links and internal routes resolve seamlessly.

### Option B: Vercel
1. Import the repository in [Vercel](https://vercel.com).
2. Framework Preset: **Next.js**.
3. Build Command: `npm run build`.
4. Output Directory: `out` (or default).
5. Deploy.

### Option C: Custom Domain (`agriiq.in`)
1. In your DNS provider (e.g., Cloudflare, GoDaddy, Namecheap):
   - Add an `A` record pointing to the hosting IP (e.g., GitHub Pages or Vercel).
   - Add a `CNAME` record for `www.agriiq.in`.
2. Add a `CNAME` file containing `agriiq.in` in the `public/` directory if deploying on GitHub Pages.

---

## 7. Research Integrity & Fact Attribution

In accordance with Agri IQ's core values:
- **No Fabricated Facts:** Demonstration articles and market references cite official statutory databases including:
  - **APEDA** (*Agricultural and Processed Food Products Export Development Authority*)
  - **Agmarknet** (*Directorate of Marketing & Inspection, Ministry of Agriculture*)
  - **DGCI&S** (*Directorate General of Commercial Intelligence and Statistics*)
  - **Department of Commerce** (*Export-Import Databank, Government of India*)
  - **DGFT** (*Directorate General of Foreign Trade*)
- **Clear Distinction:** Active research pipelines are explicitly identified as "Upcoming Research Themes" to separate ongoing investigations from published demonstration analyses.
- **No Exaggerated Metrics:** As an early-stage startup, Agri IQ emphasizes research rigor, ground validation, and analytical excellence without fabricated customer testimonials or unverified market share numbers.

---

## 8. Directory Structure

```text
agriiq-web/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages automated deployment
├── public/
│   ├── favicon.ico
│   ├── favicon-32x32.png
│   ├── icon-192.png
│   ├── icon-512.png
│   ├── apple-touch-icon.png
│   ├── logo/
│   │   ├── agriiq-logo-square.jpg
│   │   ├── agriiq-logo-horizontal.jpg
│   │   ├── agriiq-logo-square.png
│   │   └── agriiq-logo-horizontal-trimmed.png
│   └── images/                 # Local high-resolution photography
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts, SEO & metadata
│   │   ├── globals.css         # Tailwind v4 theme & custom utilities
│   │   ├── page.tsx            # Homepage
│   │   ├── sitemap.ts          # XML sitemap generator
│   │   ├── robots.ts           # Robots.txt
│   │   ├── about/page.tsx      # About Us
│   │   ├── services/page.tsx   # Our Services
│   │   ├── commodities/page.tsx# Commodity Directory
│   │   ├── industries/page.tsx # Industries We Serve
│   │   ├── methodology/page.tsx# Research Methodology
│   │   ├── insights/
│   │   │   ├── page.tsx        # Insights & Reports Library
│   │   │   └── [slug]/page.tsx # Dynamic detail view with generateStaticParams
│   │   └── contact/page.tsx    # Contact Us
│   ├── components/
│   │   ├── Header.tsx          # Sticky responsive navigation with official logo
│   │   ├── Footer.tsx          # High-contrast corporate footer
│   │   ├── BackToTop.tsx       # Smooth scroll-to-top button
│   │   ├── ServiceCard.tsx     # Summary & detailed service cards
│   │   ├── CommodityDirectory.tsx # Filterable, searchable commodity directory
│   │   ├── MethodologyFlow.tsx # Interactive 5-step process flow
│   │   ├── InsightsLibrary.tsx # Searchable research archive
│   │   ├── ContactForm.tsx     # Client-validated static inquiry workflow
│   │   ├── ContactClientWrapper.tsx # Suspense wrapper for query parameters
│   │   └── CTASection.tsx      # Standardized corporate call-to-action
│   └── data/
│       ├── services.ts         # 5 core services structured data
│       ├── commodities.ts      # 6 commodity categories & items
│       ├── industries.ts       # 8 industry sector breakdowns
│       ├── methodology.ts      # 5-step methodology details & pillars
│       └── insights.ts         # Verifiable research briefs & citations
├── next.config.ts              # Next.js static export & base path config
├── package.json
├── tsconfig.json
└── README.md
```

---

© 2026 AGRI IQ (Agricultural Intelligence & Research). All rights reserved.  
Headquarters: Bengaluru, Karnataka, India.
