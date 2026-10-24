import type { ResourceItem } from '../types';

export const SOURCES_LIBRARY: ResourceItem[] = [
  // Google Official Documentation
  {
    id: 'src-google-status-dashboard',
    title: 'Google Search Status Dashboard',
    category: 'Google Official Documentation',
    url: 'https://status.search.google.com/summary',
    publisher: 'Google Search Central',
    description:
      'Official real-time status and historical incident log of all confirmed Google Search ranking updates, crawling outages, and indexing incidents.',
    tags: ['Official', 'Status', 'Ranking Updates', 'Confirmed'],
    verified: true
  },
  {
    id: 'src-google-search-essentials',
    title: 'Google Search Essentials (formerly Webmaster Guidelines)',
    category: 'Google Official Documentation',
    url: 'https://developers.google.com/search/docs/essentials',
    publisher: 'Google Search Central',
    description:
      'The foundational standard defining technical requirements, spam policies, and essential practices required for a website to appear in Google Search.',
    tags: ['Official', 'Foundational', 'Spam Policies', 'Requirements'],
    verified: true
  },
  {
    id: 'src-helpful-content-guidance',
    title: 'Creating Helpful, Reliable, People-First Content',
    category: 'Google Official Documentation',
    url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
    publisher: 'Google Search Central',
    description:
      'Official questionnaire and assessment criteria covering content originality, quality, E-E-A-T, and avoiding search-engine-first content.',
    tags: ['Official', 'E-E-A-T', 'Content Quality', 'Self-Assessment'],
    verified: true
  },
  {
    id: 'src-docs-changelog',
    title: 'Google Search Documentation Updates Changelog',
    category: 'Google Official Documentation',
    url: 'https://developers.google.com/search/updates',
    publisher: 'Google Search Central',
    description:
      'Chronological log of all additions, revisions, and deprecations made to official Google Search developer documentation.',
    tags: ['Official', 'Changelog', 'Technical Specs'],
    verified: true
  },
  {
    id: 'src-ranking-updates-history',
    title: 'Google Search Ranking Updates History',
    category: 'Google Official Documentation',
    url: 'https://developers.google.com/search/updates/ranking',
    publisher: 'Google Search Central',
    description:
      'Official repository of Google core updates, spam updates, helpful content integrations, and reviews system updates.',
    tags: ['Official', 'Core Updates', 'Spam Updates', 'History'],
    verified: true
  },

  // Google Announcements & Blogs
  {
    id: 'src-search-central-blog',
    title: 'Google Search Central Blog',
    category: 'Google Announcements & Blogs',
    url: 'https://developers.google.com/search/blog',
    publisher: 'Google Search Central Team',
    description:
      'The primary publication channel for Google Search announcements, new features, policy changes, and developer case studies.',
    tags: ['Official Blog', 'Announcements', 'Features'],
    verified: true
  },
  {
    id: 'src-guidance-ai-content',
    title: 'Google Guidance on AI-Generated Content',
    category: 'Google Announcements & Blogs',
    url: 'https://developers.google.com/search/docs/fundamentals/using-gen-ai-content',
    publisher: 'Google Search Central',
    description:
      'Official policy stating Google rewards high-quality content however it is produced, while continuing to penalize automated content created primarily to manipulate rankings.',
    tags: ['Official', 'GenAI', 'Spam Policies', 'Quality'],
    verified: true
  },

  // Technical SEO References
  {
    id: 'src-robots-meta-tag',
    title: 'Robots Meta Tag and X-Robots-Tag Specifications',
    category: 'Technical SEO References',
    url: 'https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag',
    publisher: 'Google Search Central',
    description:
      'Complete technical syntax for robots directives including noindex, nofollow, nosnippet, data-nosnippet, and max-snippet.',
    tags: ['Technical SEO', 'Robots', 'Snippet Control', 'Indexing'],
    verified: true
  },
  {
    id: 'src-core-web-vitals-guide',
    title: 'Core Web Vitals Documentation & INP Guide',
    category: 'Technical SEO References',
    url: 'https://developers.google.com/search/docs/appearance/core-web-vitals',
    publisher: 'Google Search Central & web.dev',
    description:
      'Technical criteria and user-experience benchmarks for Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS).',
    tags: ['Technical SEO', 'Performance', 'INP', 'Page Experience'],
    verified: true
  },
  {
    id: 'src-structured-data-intro',
    title: 'Introduction to Structured Data in Google Search',
    category: 'Technical SEO References',
    url: 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data',
    publisher: 'Google Search Central',
    description:
      'How to implement Schema.org JSON-LD to enable rich results, carousels, and enhanced entity understanding.',
    tags: ['Structured Data', 'Schema.org', 'JSON-LD', 'Rich Results'],
    verified: true
  },

  // AI Search & GEO/AEO
  {
    id: 'src-ai-optimization-guide',
    title: "Google's Guide to Optimizing for Generative AI Features",
    category: 'AI Search & GEO/AEO',
    url: 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide',
    publisher: 'Google Search Central',
    description:
      'Official developer guide explaining how AI Overviews and AI Mode use RAG over standard web search indexes, debunking file format myths like llms.txt.',
    tags: ['AI Search', 'AI Overviews', 'GEO', 'AEO', 'RAG'],
    verified: true
  },
  {
    id: 'src-google-ai-features-website',
    title: 'Google AI Features and Your Website',
    category: 'AI Search & GEO/AEO',
    url: 'https://developers.google.com/search/docs/appearance/ai-features',
    publisher: 'Google Search Central',
    description:
      'Comprehensive guide to how AI features appear, how citations are determined, and publisher controls over preview displays.',
    tags: ['AI Search', 'Citations', 'Publisher Controls'],
    verified: true
  },

  // SEO Analytics & Measurement
  {
    id: 'src-traffic-drops-debugging',
    title: 'Debugging Search Traffic Drops: Step-by-Step Flowchart',
    category: 'SEO Analytics & Measurement',
    url: 'https://developers.google.com/search/blog/2021/07/search-traffic-drops',
    publisher: 'Google Search Central',
    description:
      'Official visual classification of traffic drop patterns (technical cliffs, algorithmic adjustments, seasonal shifts, tracking errors).',
    tags: ['Analytics', 'Troubleshooting', 'GSC', 'Traffic Drops'],
    verified: true
  },
  {
    id: 'src-gsc-performance-docs',
    title: 'Google Search Console Performance Report Guide',
    category: 'SEO Analytics & Measurement',
    url: 'https://support.google.com/webmasters/answer/7576553',
    publisher: 'Google Search Support',
    description:
      'Official instructions for filtering by page, query, search type (Web, Image, Video, News, Discover), and calculating accurate CTR benchmarks.',
    tags: ['GSC', 'Performance', 'Metrics', 'Queries'],
    verified: true
  },

  // Advanced SEO Strategy
  {
    id: 'src-ranking-systems-guide',
    title: 'A Guide to Google Search Ranking Systems',
    category: 'Advanced SEO Strategy',
    url: 'https://developers.google.com/search/docs/appearance/ranking-systems-guide',
    publisher: 'Google Search Central',
    description:
      'Definitive overview distinguishing standing core ranking systems (BERT, MUM, Passage ranking, Helpful content system) from periodic algorithmic updates.',
    tags: ['Strategy', 'Ranking Systems', 'Algorithms', 'BERT', 'MUM'],
    verified: true
  },
  {
    id: 'src-quality-rater-guidelines',
    title: 'Search Quality Rater Guidelines (Full Document)',
    category: 'Advanced SEO Strategy',
    url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content#rater-guidelines',
    publisher: 'Google Search Quality',
    description:
      'The comprehensive handbook provided to Google’s third-party search quality raters, detailing Page Quality (PQ) rating and Needs Met evaluations.',
    tags: ['Quality Raters', 'E-E-A-T', 'YMYL', 'Advanced Strategy'],
    verified: true
  }
];
