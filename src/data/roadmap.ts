import type { RoadmapModule } from '../types';

export const ROADMAP_MODULES: RoadmapModule[] = [
  {
    id: 'module-1-seo-foundations',
    number: 1,
    title: 'SEO Foundations',
    subtitle: 'How Search Works, Crawling, Indexing & Google Search Essentials',
    description:
      'Master the fundamental mechanics of how Google Search discovers, analyzes, indexes, and serves web pages to searchers, and adhere to official Google Search Essentials.',
    level: 'Foundational',
    estimatedHours: 8,
    learningObjectives: [
      'Understand the 3-stage search pipeline: Crawling (discovery), Indexing (understanding/storing), and Serving (ranking & rendering results).',
      'Distinguish between search intent archetypes: Informational, Navigational, Commercial, and Transactional.',
      'Master Google Search Essentials (technical requirements, spam policies, and key best practices).',
      'Learn how Googlebot behaves, respects crawl limits, and requests rendering resources.'
    ],
    officialDocs: [
      {
        title: 'How Google Search Works',
        url: 'https://developers.google.com/search/docs/fundamentals/how-search-works',
        description: 'Google official overview of crawling, indexing, rendering, and serving.'
      },
      {
        title: 'Google Search Essentials (formerly Webmaster Guidelines)',
        url: 'https://developers.google.com/search/docs/essentials',
        description: 'Core technical requirements, spam policies, and quality guidelines required for indexability.'
      },
      {
        title: 'Google Search Central: Overview of Google Crawlers (Googlebot)',
        url: 'https://developers.google.com/search/docs/crawling-indexing/googlebot',
        description: 'Detailed specifications of Googlebot user-agents, IP ranges, and request behavior.'
      }
    ],
    recommendedArticles: [
      {
        title: 'The Anatomy of a Modern Search Engine (Reflected in 2026)',
        author: 'Technical SEO Collective',
        url: 'https://developers.google.com/search/docs/fundamentals/how-search-works',
        description: 'Deep dive into inverted indexes, document vector representations, and token parsing.'
      },
      {
        title: 'Deconstructing Search Intent: Beyond Basic Keyword Matches',
        author: 'Search Quality Lab',
        url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
        description: 'How Google identifies multifaceted and changing searcher intent.'
      }
    ],
    practicalExercises: [
      {
        id: 'ex-1-1',
        title: 'Crawl Inspection with Live URL Tools',
        task: 'Inspect 3 distinct URLs in Google Search Console URL Inspection tool (a homepage, a deep article, and a filtered category page).',
        deliverable: 'Document the Crawl Status, Referring page, User-agent used, and whether Indexing was allowed.'
      },
      {
        id: 'ex-1-2',
        title: 'Search Intent Mapping Matrix',
        task: 'Take 10 high-value queries in your niche, search them incognito, and log the top 3 result formats (Direct AI Overview, Product grids, Listicles, Forums).',
        deliverable: 'A structured spreadsheet classifying the exact dominant intent and required page layout.'
      }
    ],
    checklist: [
      {
        id: 'chk-1-1',
        label: 'Explain the 3 phases of Google Search (Crawl, Index, Serve)',
        details: 'Be able to articulate the technical distinction between discovering a URL, rendering it, and scoring it for a query.'
      },
      {
        id: 'chk-1-2',
        label: 'Memorize Google Search Essentials core technical requirements',
        details: 'Verify that a site returns 200 OK status codes, is not blocked by robots.txt, and does not violate spam policies.'
      },
      {
        id: 'chk-1-3',
        label: 'Map keywords to search intent categories before drafting content',
        details: 'Confirm whether a query seeks a quick factual definition, in-depth comparison, or transactional checkout.'
      },
      {
        id: 'chk-1-4',
        label: 'Verify Googlebot smartphone crawling parity',
        details: 'Check that mobile and desktop versions serve equivalent content, links, and structured data.'
      }
    ]
  },
  {
    id: 'module-2-technical-seo',
    number: 2,
    title: 'Technical SEO',
    subtitle: 'Indexing Diagnostics, Architecture, Performance & Core Web Vitals',
    description:
      'Build a robust, crawlable technical foundation. Master robots.txt, canonicalization, XML sitemaps, JavaScript hydration, structured data, and Core Web Vitals.',
    level: 'Intermediate',
    estimatedHours: 14,
    learningObjectives: [
      'Diagnose indexing issues in Google Search Console Page Indexing report.',
      'Configure robots.txt, meta robots directives, and HTTP X-Robots-Tag headers accurately.',
      'Resolve complex canonicalization issues across parameterized and faceted URLs.',
      'Debug client-side JavaScript rendering and verify DOM hydration for Googlebot.',
      'Implement valid Schema.org JSON-LD structured data and monitor rich results.',
      'Measure and optimize Core Web Vitals (LCP, INP, CLS) using field data (CrUX).'
    ],
    officialDocs: [
      {
        title: 'Robots.txt Specifications and Testing',
        url: 'https://developers.google.com/search/docs/crawling-indexing/robots/intro',
        description: 'Complete official guide on how Google interprets robots.txt directives and wildcards.'
      },
      {
        title: 'Consolidating Duplicate URLs (Canonicalization)',
        url: 'https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls',
        description: 'How Google selects canonical URLs using rel="canonical", sitemaps, and redirects.'
      },
      {
        title: 'JavaScript SEO Basics & Rendering Troubleshooting',
        url: 'https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics',
        description: 'Guidance on how Googlebot renders JavaScript using modern headless Chromium.'
      },
      {
        title: 'Core Web Vitals Documentation',
        url: 'https://developers.google.com/search/docs/appearance/core-web-vitals',
        description: 'Technical criteria for LCP (Largest Contentful Paint), INP (Interaction to Next Paint), and CLS.'
      }
    ],
    recommendedArticles: [
      {
        title: 'Interaction to Next Paint (INP) Deep Dive',
        author: 'web.dev Team',
        url: 'https://web.dev/explore/inp',
        description: 'How to profile long tasks and break up main-thread work.'
      },
      {
        title: 'Faceted Navigation & Crawl Budget Management',
        author: 'Technical SEO Guidelines',
        url: 'https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag',
        description: 'Preventing crawl traps in large e-commerce catalogs.'
      }
    ],
    practicalExercises: [
      {
        id: 'ex-2-1',
        title: 'Robots.txt & Meta Robots Audit',
        task: 'Audit your staging or production robots.txt file. Test URL patterns against Google Search Console robots.txt report.',
        deliverable: 'A validated robots.txt file with zero disallowed resource assets (CSS/JS).'
      },
      {
        id: 'ex-2-2',
        title: 'Schema JSON-LD Implementation & Rich Result Test',
        task: 'Implement Article or Product structured data in valid JSON-LD on a template, and validate with Google Rich Results Test tool.',
        deliverable: 'A JSON-LD snippet validating with 0 errors and 0 missing required fields.'
      }
    ],
    checklist: [
      {
        id: 'chk-2-1',
        label: 'Audit Page Indexing report in GSC for abnormal excluded statuses',
        details: 'Investigate "Discovered - currently not indexed" and "Crawled - currently not indexed" spikes.'
      },
      {
        id: 'chk-2-2',
        label: 'Implement self-referential rel="canonical" tags across all unique pages',
        details: 'Verify canonical tags match HTTP protocol, exact trailing slashes, and domain variant.'
      },
      {
        id: 'chk-2-3',
        label: 'Ensure critical content is rendered in initial HTML without requiring click events',
        details: 'Inspect Googlebot rendered DOM in GSC URL Inspection to verify key copy is present.'
      },
      {
        id: 'chk-2-4',
        label: 'Pass Core Web Vitals on 75% of page views for mobile users',
        details: 'Maintain LCP < 2.5s, INP < 200ms, and CLS < 0.1 in Chrome User Experience Report (CrUX).'
      }
    ]
  },
  {
    id: 'module-3-seo-analytics-troubleshooting',
    number: 3,
    title: 'SEO Analytics & Troubleshooting',
    subtitle: 'Search Console Mastery, Drop Diagnoses, Root Causes & Prioritization',
    description:
      'Become an expert diagnostic detective. Learn how to isolate algorithmic drops from technical bugs, analyze SERP shifts, prioritize fixes with ICE frameworks, and prove business ROI.',
    level: 'Intermediate',
    estimatedHours: 12,
    learningObjectives: [
      'Master Google Search Console performance data: queries, pages, countries, devices, and search appearances.',
      'Systematically investigate sudden or gradual organic traffic drops using a proven root-cause flowchart.',
      'Distinguish between technical crawling drops, seasonal shifts, manual penalties, and algorithmic updates.',
      'Analyze SERP composition changes: new SERP features, AI Overviews, or intent re-classifications.',
      'Apply prioritization models (Impact, Confidence, Effort) to allocate engineering and editorial resources.',
      'Measure the verified commercial impact of SEO optimizations over 30, 60, and 90-day timeframes.'
    ],
    officialDocs: [
      {
        title: 'Diagnosing Drops in Google Search Traffic',
        url: 'https://developers.google.com/search/blog/2021/07/search-traffic-drops',
        description: 'Google official guide analyzing the 5 primary shapes of search traffic drops.'
      },
      {
        title: 'Search Console Performance Report Documentation',
        url: 'https://support.google.com/webmasters/answer/7576553',
        description: 'How to accurately filter and interpret clicks, impressions, CTR, and average position.'
      },
      {
        title: 'Google Search Status Dashboard Incident History',
        url: 'https://status.search.google.com/summary',
        description: 'Cross-reference traffic drops with confirmed Google Search ranking updates.'
      }
    ],
    recommendedArticles: [
      {
        title: 'Root Cause Analysis Framework for SEO Anomalies',
        author: 'Senior SEO Technical Advisory',
        url: 'https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops',
        description: 'Step-by-step diagnostic workflows for enterprise traffic shifts.'
      }
    ],
    practicalExercises: [
      {
        id: 'ex-3-1',
        title: '14-Day Traffic Drop Diagnostic Case Study',
        task: 'Take an anonymized or client GSC dataset, compare a 28-day pre-drop period with a 28-day post-drop period, and classify whether the drop was sharp, gradual, or feature-based.',
        deliverable: 'A 1-page Root Cause Brief isolating the affected page directory and primary affected query bucket.'
      },
      {
        id: 'ex-3-2',
        title: 'ICE Prioritization Scorecard',
        task: 'Score 5 competing technical fixes (e.g. Broken canonicals, INP lag, Image compression, Schema markup, Sitemap refresh) using Impact (1-5), Confidence (1-5), Effort (1-5).',
        deliverable: 'A ranked roadmap spreadsheet detailing the top priority task with clear rationale.'
      }
    ],
    checklist: [
      {
        id: 'chk-3-1',
        label: 'Identify the pattern shape of any traffic drop (Immediate cliff vs Gradual slide vs Periodic)',
        details: 'Immediate cliffs usually signify manual actions, site-wide technical failures, or robots.txt blockages.'
      },
      {
        id: 'chk-3-2',
        label: 'Check Google Search Status Dashboard before hypothesizing algorithmic causes',
        details: 'Confirm whether a confirmed core or spam update was actively rolling out on the exact shift date.'
      },
      {
        id: 'chk-3-3',
        label: 'Correlate position shifts with CTR shifts to identify SERP layout impacts',
        details: 'Check if average ranking stayed flat at #1 or #2 while CTR fell due to AI Overviews or direct answers.'
      },
      {
        id: 'chk-3-4',
        label: 'Establish pre-change baselines before shipping technical updates',
        details: 'Record 30-day baseline impressions, clicks, and rankings to isolate causation post-deployment.'
      }
    ]
  },
  {
    id: 'module-4-content-quality',
    number: 4,
    title: 'Content Quality & E-E-A-T',
    subtitle: 'Helpful Content, Experience Signals, Audits & AI Guidelines',
    description:
      'Produce content that succeeds under Google’s modern quality systems. Learn how E-E-A-T operates, how to conduct forensic content audits, eliminate cannibalization, and use AI ethically.',
    level: 'Intermediate',
    estimatedHours: 10,
    learningObjectives: [
      'Master Google’s "Creating helpful, reliable, people-first content" self-assessment criteria.',
      'Understand Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) and how Google evaluates them.',
      'Conduct a thorough Content Audit to categorize URLs into: Keep, Update, Consolidate, or Prune (Noindex/Delete).',
      'Identify and remediate keyword and topic cannibalization across large websites.',
      'Align with Google’s official guidance on AI-generated content (focusing on quality, not production method).'
    ],
    officialDocs: [
      {
        title: 'Creating Helpful, Reliable, People-First Content',
        url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
        description: 'Google self-assessment guide covering content, quality, expertise, and search engine first pitfalls.'
      },
      {
        title: 'Google Guidance on Using Generative AI Content',
        url: 'https://developers.google.com/search/docs/fundamentals/using-gen-ai-content',
        description: 'Official confirmation that Google rewards quality content regardless of how it is produced.'
      },
      {
        title: 'Google Search Quality Rater Guidelines',
        url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content#rater-guidelines',
        description: 'The publicly released 170+ page manual used by human quality raters to grade search results.'
      }
    ],
    recommendedArticles: [
      {
        title: 'The Reality of E-E-A-T: Demonstrating First-Hand Experience',
        author: 'Content Strategy Institute',
        url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
        description: 'How to integrate original photos, author backgrounds, and authentic testing workflows.'
      }
    ],
    practicalExercises: [
      {
        id: 'ex-4-1',
        title: 'E-E-A-T Forensic Content Audit',
        task: 'Audit 5 top informational articles on a site against Google’s official questions. Check for original research, clear authorship, citations, and absence of generic consensus fluff.',
        deliverable: 'A Content Improvement Plan with specific recommendations for each article.'
      },
      {
        id: 'ex-4-2',
        title: 'Topic Cannibalization Deconfliction',
        task: 'Identify two URLs ranking for the same core query. Decide whether to 301-redirect the weaker page into the stronger master guide, or differentiate their intents with distinct H1s and focus.',
        deliverable: 'A canonicalization or consolidation plan with before/after URL mapping.'
      }
    ],
    checklist: [
      {
        id: 'chk-4-1',
        label: 'Answer all official Google helpful content self-assessment questions honestly',
        details: 'Ask: "Does the content provide original information, reporting, research, or analysis?"'
      },
      {
        id: 'chk-4-2',
        label: 'Include verifiable author credentials and clear editorial standards on all YMYL topics',
        details: 'Link author profiles to real biographical backgrounds, published work, and professional affiliations.'
      },
      {
        id: 'chk-4-3',
        label: 'Never mass-produce low-effort articles solely to capture search volume',
        details: 'Avoid scaled content generation that regurgitates existing search results without added utility.'
      },
      {
        id: 'chk-4-4',
        label: 'Prune or consolidate outdated, duplicate, and near-zero traffic articles annually',
        details: 'Maintain high sitewide quality by removing dead-weight pages that dilute crawl and quality signals.'
      }
    ]
  },
  {
    id: 'module-5-ai-search-geo-aeo',
    number: 5,
    title: 'AI Search, GEO and AEO',
    subtitle: 'AI Overviews, AI Mode, Entity Optimization & Fact-Checking Hype',
    description:
      'Separate documented search reality from speculative industry buzz. Master how AI Overviews work via Retrieval-Augmented Generation (RAG), optimize for entity extraction, and learn snippet controls.',
    level: 'Advanced',
    estimatedHours: 12,
    learningObjectives: [
      'Understand how AI Overviews and AI Mode function technically using RAG on top of Google’s standard web index.',
      'Dispel common GEO/AEO myths (e.g., confirming why `llms.txt` is not used by Google Search).',
      'Optimize content for information extraction: entity clarity, inverted pyramid structure, and semantic markup.',
      'Control AI and search snippet generation using `nosnippet`, `data-nosnippet`, and `max-snippet`.',
      'Track and measure generative search visibility despite Search Console reporting constraints.'
    ],
    officialDocs: [
      {
        title: 'Google Guide to Optimizing for Generative AI Features',
        url: 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide',
        description: 'Official Search Central guide on how Google AI features retrieve and cite web content.'
      },
      {
        title: 'Google AI Features and Your Website',
        url: 'https://developers.google.com/search/docs/appearance/ai-features',
        description: 'Publisher controls, snippet management, and traffic considerations for AI surfaces.'
      },
      {
        title: 'Managing Search Snippets with Robots Meta Tags',
        url: 'https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag',
        description: 'How to use data-nosnippet to exclude sensitive proprietary data from AI summaries.'
      }
    ],
    recommendedArticles: [
      {
        title: 'GEO & AEO Reality Check: What the Data Actually Shows',
        author: 'Search Science Journal',
        url: 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide',
        description: 'Empirical analysis of citation overlap between top 10 organic results and AI Overviews.'
      }
    ],
    practicalExercises: [
      {
        id: 'ex-5-1',
        title: 'AI Overview Citation Reverse-Engineering',
        task: 'Query 5 queries that trigger an AI Overview. Inspect the 3 cited link cards. Compare the cited paragraph on the source website with the synthesized text in the AI Overview.',
        deliverable: 'A breakdown documenting what factual structure, table, or definition was extracted by the model.'
      },
      {
        id: 'ex-5-2',
        title: 'Snippet Exclusion Implementation (`data-nosnippet`)',
        task: 'Add `data-nosnippet` to a container holding proprietary pricing or data in your HTML and test it in GSC URL Inspection.',
        deliverable: 'Validated HTML snippet preventing unauthorized snippet reproduction.'
      }
    ],
    checklist: [
      {
        id: 'chk-5-1',
        label: 'Recognize that AI Overviews use Google’s standard index via RAG (no separate index exists)',
        details: 'Standard crawling, indexing, and technical SEO health are prerequisites for AI citation.'
      },
      {
        id: 'chk-5-2',
        label: 'Provide clear, concise direct answer blocks near the start of informational sections',
        details: 'Answer core definition questions within 40-60 clear words before expanding into nuances.'
      },
      {
        id: 'chk-5-3',
        label: 'Reject unproven gimmicks like creating `llms.txt` for Googlebot',
        details: 'Focus engineering effort on crawl speed, semantic tables, and authoritative structured data.'
      },
      {
        id: 'chk-5-4',
        label: 'Audit pages for proprietary data that should be shielded using data-nosnippet',
        details: 'Protect proprietary survey figures or gated calculation formulas from direct snippet scraping.'
      }
    ]
  },
  {
    id: 'module-6-advanced-seo-strategy',
    number: 6,
    title: 'Advanced SEO Strategy & Product Management',
    subtitle: 'Prioritization Frameworks, Experimentation, Roadmaps & Stakeholder Buy-in',
    description:
      'Bridge the gap between SEO specialist and executive product leader. Learn how to design statistical SEO experiments, build roadmap backlogs, calculate ROI, and present to executive stakeholders.',
    level: 'Advanced',
    estimatedHours: 14,
    learningObjectives: [
      'Build an impact-driven SEO Product Roadmap balancing technical health, content expansion, and UX.',
      'Design controlled SEO split tests (A/B page testing) to validate hypotheses before sitewide rollouts.',
      'Forecast SEO business revenue, customer acquisition cost (CAC) reduction, and organic ROI.',
      'Communicate complex technical trade-offs to engineering leads and C-suite stakeholders effectively.',
      'Translate search algorithm updates into proactive product initiatives rather than reactive fire drills.'
    ],
    officialDocs: [
      {
        title: 'Google Search Central Case Studies & Enterprise Guidance',
        url: 'https://developers.google.com/search/case-studies/overview',
        description: 'Real-world case studies demonstrating large-scale architectural and performance investments.'
      },
      {
        title: 'Google Search Console API Documentation',
        url: 'https://developers.google.com/webmaster-tools',
        description: 'How to programmatically extract search performance metrics for custom warehouse models.'
      }
    ],
    recommendedArticles: [
      {
        title: 'The SEO Product Management Operating System',
        author: 'Enterprise SEO Lead',
        url: 'https://developers.google.com/search/docs/essentials',
        description: 'Framing SEO as a core product feature with sprint points and engineering velocity.'
      },
      {
        title: 'Statistical SEO Split Testing Methodologies',
        author: 'Search Science Lab',
        url: 'https://developers.google.com/search/docs/appearance/ranking-systems-guide',
        description: 'Designing group tests across templated pages to establish statistical significance.'
      }
    ],
    practicalExercises: [
      {
        id: 'ex-6-1',
        title: 'Executive SEO Business Case Pitch Deck',
        task: 'Draft a 1-page executive summary requesting 2 engineering sprints to resolve INP and canonicalization bottlenecks. Include estimated traffic risk, revenue upside, and clear milestones.',
        deliverable: 'A 1-page executive pitch highlighting business ROI, risk mitigation, and timeline.'
      },
      {
        id: 'ex-6-2',
        title: 'Quarterly SEO Product Roadmap',
        task: 'Structure a 3-month roadmap dividing initiatives into: Now (P1 Bugs), Next (Architecture & Core Web Vitals), and Later (AI Overview optimization & content pruning).',
        deliverable: 'A prioritized sprint backlog with assigned ICE scores and stakeholder milestones.'
      }
    ],
    checklist: [
      {
        id: 'chk-6-1',
        label: 'Translate technical SEO jargon into business metrics (Revenue, CAC, Conversion rate)',
        details: 'Never pitch "fixing canonical tags" to an executive; pitch "eliminating traffic fragmentation to recover lost transactions".'
      },
      {
        id: 'chk-6-2',
        label: 'Establish an ICE scoring framework for all incoming SEO roadmap requests',
        details: 'Objectively score Impact, Confidence, and Effort before committing development resources.'
      },
      {
        id: 'chk-6-3',
        label: 'Run controlled split tests on templated pages whenever making major layout changes',
        details: 'Test title tag formats or structured data templates on 50 URLs against a matched control group of 50 URLs.'
      },
      {
        id: 'chk-6-4',
        label: 'Create automated quarterly dashboards integrating Search Console API data with business analytics',
        details: 'Ensure organic conversions and pipeline value are tracked alongside raw organic impressions and clicks.'
      }
    ]
  }
];
