# SEO Radar 📡
> **Track Search. Understand Changes. Take Action.**

SEO Radar is a professional, production-grade SEO knowledge and intelligence hub designed for SEO Specialists, Technical SEOs, Search Analysts, and AI Product Managers. It bridges the gap between confirmed Google Search algorithm updates, official technical documentation, and structured day-to-day execution.

---

## 🌟 Core Product Features

### 1. Real-Time Verified Search Updates Feed
- **100% Verified Official Sources**: Sourced directly from the [Google Search Status Dashboard](https://status.search.google.com/summary), [Google Search Central Blog](https://developers.google.com/search/blog), and [Search Documentation Changelogs](https://developers.google.com/search/updates).
- **Exact Rollout Timelines**: Clearly separates announcement date, rollout start time, and completion timestamps.
- **Categorization & Filtering**: Filter by Core Updates, Spam Updates, AI Search, Technical SEO, Search Console, Content & Quality, Structured Data, Crawling & Indexing, Documentation Changes, and Industry Research.
- **Clear Classification**: Distinguishes confirmed algorithmic updates from documentation edits, feature rollouts, and technical standards.

### 2. Comprehensive 11-Point Research Briefs
Every update includes a structured deep-dive brief answering:
1. **What changed?**
2. **When was it announced?**
3. **When did the rollout start and end?**
4. **What did Google officially confirm?** (Direct quoted statements)
5. **What is still uncertain or unconfirmed?**
6. **Which websites or SEO activities may be affected?**
7. **How should an SEO specialist investigate the impact?**
8. **What data should be checked in Google Search Console or analytics?**
9. **What practical actions should be considered?**
10. **What should I avoid doing based on speculation?** (Crucial don'ts)
11. **Official source links and supporting resources.**

### 3. Structured SEO Learning Roadmap
Interactive 6-module curriculum taking professionals from fundamental crawling mechanics to AI search optimization and executive SEO strategy:
- **Module 1: SEO Foundations** (How search works, crawling, indexing, serving, intent, Search Essentials)
- **Module 2: Technical SEO** (Indexing diagnostics, canonicalization, robots.txt, JS rendering, structured data, Core Web Vitals / INP)
- **Module 3: SEO Analytics & Troubleshooting** (Search Console mastery, traffic drop diagnostic flowchart, SERP feature analysis, ICE prioritization)
- **Module 4: Content Quality & E-E-A-T** (Helpful content guidelines, experience signals, forensic content audits, cannibalization resolution)
- **Module 5: AI Search, GEO & AEO** (AI Overviews, AI Mode, RAG mechanics, `data-nosnippet`, dispelling `llms.txt` myths)
- **Module 6: Advanced SEO Strategy & Product Management** (SEO roadmaps, statistical split testing, executive business cases, ROI modeling)

Each module contains:
- Core Learning Objectives
- Official Google Documentation Links
- Recommended Technical Articles
- Hands-on Practical Exercises with Deliverables
- Competency Checklists with persistent progress tracking

### 4. Practical SEO Action Center
Translates confirmed search updates into actionable investigation hypotheses:
- Pre-populated tasks derived from recent updates (e.g., September 2026 Spam Update Audit, AI Overview `data-nosnippet` Implementation, INP Optimization).
- **ICE Prioritization Model**: Calculates `(Impact × Confidence) / Effort` to objectively rank tasks.
- **Hypothesis Disclaimer**: Emphasizes that recommendations are hypotheses to systematically investigate rather than magic fixes.
- **Custom Task Builder**: Allows users to create their own prioritized tasks with step-by-step checklists.
- **Investigator Notes**: Inline notes editor to log Search Console observations and audit outcomes.

### 5. Personal Learning & Progress Tracker
- **Progress Persistence**: Uses browser `LocalStorage` with full offline capability.
- **Module Breakdown**: Tracks completion rates per roadmap module.
- **Saved Research**: Bookmarked briefs for instant access.
- **Data Portability**: Full JSON Export, Import, and Reset capabilities.

### 6. Official Sources & Standards Library
Direct repository of verified Google Search Central documentation, developer references, and technical standards grouped into 6 curated categories.

### 7. Bilingual & RTL Architecture
Full support for English and Arabic (**العربية**), including bidirectional layout switching (`dir="rtl"`) and tailored typography.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Persistence**: Browser LocalStorage with JSON backup
- **Accessibility & Modals**: Native HTML5 `<dialog closedby="any">` with outside-click boundary fallbacks (following modern web guidance)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/<your-username>/seo-radar.git
cd seo-radar

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Production Build
```bash
# Compile TypeScript and bundle assets
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deployment Guide

### Option 1: GitHub Pages (Automated via GitHub Actions)
1. Push this repository to GitHub.
2. In your repository on GitHub, navigate to **Settings > Pages**.
3. Under **Build and deployment > Source**, select **GitHub Actions**.
4. The `.github/workflows/deploy.yml` workflow will automatically build and publish the site to `https://<username>.github.io/seo-radar/`.

### Option 2: Vercel / Netlify / Cloudflare Pages
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- Assets are built with relative paths (`base: './'`), so it works out-of-the-box on any subpath or root domain.

---

## 📝 How to Add Future SEO Updates

All updates are strictly separated from UI components in `src/data/updates.ts`.

To add a new verified Google update:
1. Open `src/data/updates.ts`.
2. Add a new object conforming to the `SEOUpdate` interface:
   ```typescript
   {
     id: 'november-2026-core-update',
     title: 'November 2026 Broad Core Update',
     shortTitle: 'Nov 2026 Core Update',
     date: '2026-11-15',
     announcementDate: '2026-11-15',
     rolloutStartDate: '2026-11-15 (08:30 PDT)',
     rolloutEndDate: null, // Set when completed
     duration: 'Rollout in progress (~2 weeks)',
     category: 'Core Updates',
     sourceName: 'Google Search Status Dashboard',
     sourceUrl: 'https://status.search.google.com/summary',
     verificationStatus: 'Confirmed Algorithm Update',
     impactLevel: 'Critical',
     isLatest: true,
     isHistorical: false,
     summary: '...',
     whyItMatters: '...',
     potentialImpact: '...',
     recommendedAction: '...',
     fullBrief: {
       whatChanged: '...',
       whenAnnounced: '...',
       rolloutTimeline: '...',
       officialConfirmation: '...',
       whatIsUncertain: '...',
       affectedWebsites: [...],
       investigationMethod: '...',
       gscAnalyticsChecks: [...],
       practicalActions: [...],
       avoidSpeculation: [...],
       supportingResources: [...]
     }
   }
   ```
3. Run `npm run build` to verify type safety. The UI automatically displays the update, enables filtering, adds it to the search index, and creates 1-click action tasks.

---

## 🛡️ Content Integrity Guidelines
- **Verify every update**: Consult the [Google Search Status Dashboard](https://status.search.google.com/summary) or [Google Search Central Blog](https://developers.google.com/search/blog).
- **Never fabricate dates**: Record official announcement, rollout start, and completion dates accurately.
- **Distinguish confirmed updates**: Clearly separate confirmed ranking updates from documentation revisions and industry commentary.

---

## 📄 License
MIT License. Created for the global SEO and technical product community.
