import type { SEOUpdate } from '../types';

export const SEO_UPDATES: SEOUpdate[] = [
  {
    id: 'september-2026-spam-update',
    title: 'September 2026 Spam Update',
    shortTitle: 'Sep 2026 Spam Update',
    date: '2026-10-08',
    announcementDate: '2026-09-24',
    rolloutStartDate: '2026-09-24 (09:15 PDT)',
    rolloutEndDate: '2026-10-08 (01:00 PDT)',
    duration: '13 days, 16 hours',
    category: 'Spam Updates',
    sourceName: 'Google Search Status Dashboard',
    sourceUrl: 'https://status.search.google.com/incidents/aG5yv7JqFf2jV',
    verificationStatus: 'Confirmed Algorithm Update',
    impactLevel: 'High',
    isLatest: true,
    isHistorical: false,
    summary:
      'Google released and completed a global, multilingual automated spam update targeting violations of Google Search Essentials spam policies.',
    whyItMatters:
      'Unlike shorter spam sweeps earlier in 2026, this rollout took nearly the full two weeks. Sites with thin programmatic pages, unverified automated translations, or aggressive monetization patterns experienced sharp drops.',
    potentialImpact:
      'Sites hosting expired domain abuse, low-effort programmatic content, or automated aggregator feeds may experience substantial ranking demotions across organic search and Discover.',
    recommendedAction:
      'Check Google Search Console Security & Manual Actions tab. If no manual action exists but organic traffic declined during Sep 24 - Oct 8, conduct an audit against Google Spam Policies, focusing on scaled thin content and low-value syndication.',
    fullBrief: {
      whatChanged:
        'Google rolled out an update to its global automated spam detection systems. The update targets web pages and sites that violate Google Search Essentials spam policies across all languages worldwide.',
      whenAnnounced: 'September 24, 2026 at 09:15 PDT via the Google Search Status Dashboard and official Search Central channels.',
      rolloutTimeline: 'Started on September 24, 2026 and concluded on October 8, 2026 at 01:00 PDT (13 days, 16 hours).',
      officialConfirmation:
        '"Released the September 2026 spam update. The rollout was completed on October 8, 2026." Google confirmed the update affects all languages and operates algorithmically without requiring manual penalties.',
      whatIsUncertain:
        'Specific algorithmic threshold weights and targeted query verticals remain undisclosed, as Google does not reveal granular detection heuristics to prevent spam evasion.',
      affectedWebsites: [
        'Websites utilizing mass programmatic content generation without human editorial review',
        'Expired domains acquired to artificially rank repurposed niche content',
        'Syndicated third-party content without distinct canonical value or added analysis',
        'Sites with deceptive user redirects, doorway pages, or hidden affiliate schemes'
      ],
      investigationMethod:
        'Compare Google Search Console search performance data from September 10–23 (pre-update baseline) against September 25 – October 15. Segment by Page and Query to identify if traffic loss is sitewide or isolated to specific page templates.',
      gscAnalyticsChecks: [
        'Inspect "Performance > Search Results" comparing the pre-rollout 14 days with post-rollout 14 days.',
        'Review the "Security & Manual Actions" report to verify whether a manual penalty was applied or if the drop is purely algorithmic.',
        'Filter queries by position changes: check whether impressions dropped while average position stayed similar (indicating indexing/filtering) or if positions dropped across the board.',
        'Review Discover traffic in Search Console, as spam updates frequently suppress eligibility in Discover.'
      ],
      practicalActions: [
        'Perform a comprehensive content audit of pages losing more than 30% of search traffic.',
        'De-index or heavily enrich thin, low-utility programmatic URLs.',
        'Verify that all affiliate links, sponsored links, and user-generated content strictly use rel="sponsored" or rel="ugc" attributes.',
        'Ensure unique editorial substance, original data, and clear author accountability exist across all indexed articles.'
      ],
      avoidSpeculation: [
        'Do not disavow backlinks en masse unless you have active manual actions for unnatural outbound/inbound links; Google ignores low-quality links automatically.',
        'Do not rewrite high-performing pages that did not experience traffic drops.',
        'Avoid making hasty 301 redirects to new domains; algorithmic spam flags follow permanent redirects.'
      ],
      supportingResources: [
        {
          title: 'Google Search Essentials Spam Policies',
          url: 'https://developers.google.com/search/docs/essentials/spam-policies',
          note: 'The primary official definition of algorithmic spam violations'
        },
        {
          title: 'Google Search Status Dashboard Incident Record',
          url: 'https://status.search.google.com/summary',
          note: 'Official incident timestamp and confirmation log'
        }
      ]
    }
  },
  {
    id: 'may-2026-core-update',
    title: 'May 2026 Broad Core Update',
    shortTitle: 'May 2026 Core Update',
    date: '2026-06-02',
    announcementDate: '2026-05-21',
    rolloutStartDate: '2026-05-21 (08:40 PDT)',
    rolloutEndDate: '2026-06-02 (05:40 PDT)',
    duration: '11 days, 21 hours',
    category: 'Core Updates',
    sourceName: 'Google Search Central',
    sourceUrl: 'https://status.search.google.com/summary',
    verificationStatus: 'Confirmed Algorithm Update',
    impactLevel: 'Critical',
    isLatest: false,
    isHistorical: false,
    summary:
      'The second broad core update of 2026 refined how Google systems evaluate content satisfaction, rewarding first-hand experience and holistic user utility.',
    whyItMatters:
      'Core updates do not target specific sites or spam violations; they re-weight Google’s holistic quality assessment systems. Sites with strong topical authority and genuine subject-matter expertise saw significant positive trajectory.',
    potentialImpact:
      'Broad volatility across informational, e-commerce, and review queries. Sites that rely purely on rephrased search engine consensus content without proprietary data or distinct utility saw decline.',
    recommendedAction:
      'Evaluate pages that dropped against Google’s helpful content self-assessment questions. Focus on whether your pages provide genuinely original insights, comparative testing, or proprietary data.',
    fullBrief: {
      whatChanged:
        'Google adjusted its core ranking systems to improve how search assesses content relevance, depth, and genuine helpfulness across all queries globally.',
      whenAnnounced: 'May 21, 2026 at 08:40 PDT.',
      rolloutTimeline: 'Began May 21, 2026 and concluded on June 2, 2026 at 05:40 PDT (duration: 11 days, 21 hours).',
      officialConfirmation:
        '"Released the May 2026 core update. The rollout was completed on June 2, 2026." Google re-iterated that broad core updates represent fundamental recalibrations of ranking systems.',
      whatIsUncertain:
        'Google does not publish individual weights for ranking signals such as click signals, brand mentions, or content length.',
      affectedWebsites: [
        'Websites across all niches, especially informational lifestyle, technology, and health content',
        'Review and comparison websites lacking demonstrated hands-on product testing',
        'Aggregator portals with thin commentary surrounding scraped listings',
        'Websites with unaddressed content cannibalization across broad parent topics'
      ],
      investigationMethod:
        'Isolate the exact date of visibility shift during the May 21 - June 2 window. Compare top lost queries and examine SERP composition to see which competitor URLs replaced your positions.',
      gscAnalyticsChecks: [
        'Segment GSC Performance data by Device (Mobile vs Desktop) and Country to detect if changes are regional or platform-specific.',
        'Review CTR vs Average Position: did your rankings stay identical while CTR dropped due to AI Overviews or rich results changes?',
        'Look at Page-level aggregates: did whole directory clusters lose traffic, or only specific low-depth blog posts?',
        'Check query intent shifts: did Google replace informational listicles with authoritative product category pages or forum discussions?'
      ],
      practicalActions: [
        'Audit underperforming content using the official "Creating helpful, reliable, people-first content" criteria.',
        'Add verifiable first-hand research, original photographs, proprietary surveys, or case studies.',
        'Prune or consolidate outdated, duplicate, or overlapping articles covering identical search intent.',
        'Strengthen author bios with verifiable external citations, relevant credentials, and clear editorial oversight policies.'
      ],
      avoidSpeculation: [
        'Do not engage in superficial word count expansions or artificial keyword insertion.',
        'Do not make radical site-wide architectural overhauls while a rollout is active.',
        'Do not assume a drop is a technical glitch when content relevance has been re-evaluated by the core system.'
      ],
      supportingResources: [
        {
          title: 'Google Search Core Updates Guide',
          url: 'https://developers.google.com/search/updates/ranking',
          note: 'Official guidance on understanding and diagnosing core update fluctuations'
        },
        {
          title: 'Creating Helpful, Reliable, People-First Content',
          url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
          note: 'Official self-assessment questionnaire for webmasters'
        }
      ]
    }
  },
  {
    id: 'google-ai-optimization-guide-official',
    title: "Google's Official Guide to Optimizing for Generative AI Features",
    shortTitle: 'AI Optimization & AI Overviews Guide',
    date: '2026-04-18',
    announcementDate: '2026-04-18',
    rolloutStartDate: '2026-04-18',
    rolloutEndDate: null,
    duration: 'Ongoing Guidance',
    category: 'AI Search',
    sourceName: 'Google Search Central Documentation',
    sourceUrl: 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide',
    verificationStatus: 'Official Documentation Change',
    impactLevel: 'Critical',
    isLatest: false,
    isHistorical: false,
    summary:
      'Google published foundational official documentation outlining how generative AI features like AI Overviews and AI Mode interact with websites and the search index.',
    whyItMatters:
      'Google unequivocally confirmed that AI features rely on the standard Google Search index via Retrieval-Augmented Generation (RAG). There is no special "llms.txt" file or secret AI syntax required.',
    potentialImpact:
      'Clarifies how to be cited in AI Overviews, how to use snippet control tags (`nosnippet`, `data-nosnippet`), and dispels common industry myths regarding GEO and AEO.',
    recommendedAction:
      'Ensure standard technical SEO health: clean indexability, logical heading hierarchy, factual accuracy, and snippet eligibility. Do not waste engineering resources creating custom LLM text files for Google.',
    fullBrief: {
      whatChanged:
        'Google formalized its developer guidance on optimizing for AI Overviews, AI Mode, and generative search features within Google Search Central documentation.',
      whenAnnounced: 'Published and regularly updated across Search Central developer documentation.',
      rolloutTimeline: 'Living technical specification and guidance repository.',
      officialConfirmation:
        '"There are no special optimizations, meta tags, or file formats required to be included in AI Overviews. Google\'s AI features source their information directly from our core web search index using Retrieval-Augmented Generation (RAG)."',
      whatIsUncertain:
        'Exact citation selection thresholds, click-through attribution tracking in Search Console, and explicit impressions data for AI Overview links remain limited.',
      affectedWebsites: [
        'All public websites indexed by Google Search',
        'Informational websites providing direct answers, definitions, and tutorials',
        'Websites utilizing `data-nosnippet` or `max-snippet` to control summary displays'
      ],
      investigationMethod:
        'Monitor GSC Performance reports for high-impression, low-CTR queries that frequently trigger AI Overviews. Inspect SERPs directly for key target queries to verify citations and snippet formats.',
      gscAnalyticsChecks: [
        'Analyze queries with high impressions but sudden CTR drops in GSC; these often correspond to answers fulfilled directly by AI Overviews.',
        'Monitor organic referral paths in web analytics (GA4) looking for direct click-throughs from AI card citations.',
        'Review robots meta tag directives on your pages to confirm you have not unintentionally added `nosnippet` or restrictive `max-snippet:0` settings.'
      ],
      practicalActions: [
        'Structure content with clear, concise answers to core user queries near the top of pages (inverted pyramid model).',
        'Use semantic HTML elements (h1-h3, lists, tables) so automated parsing systems can accurately extract factual entities.',
        'Include unique data tables, original statistics, and authoritative citations that AI models need to source for grounding.',
        'If you wish to prevent specific sensitive excerpts from appearing in AI summaries, apply the `data-nosnippet` attribute to that specific HTML container.'
      ],
      avoidSpeculation: [
        'Do not create `llms.txt` files expecting Google Search to prioritize them; Google Search crawler (Googlebot) does not use `llms.txt`.',
        'Do not arbitrarily break articles into unnatural short chunks or adopt robotic formatting under the guise of "AI optimization".',
        'Do not block Googlebot from indexing your text if your objective is organic search and AI Overview visibility.'
      ],
      supportingResources: [
        {
          title: 'Google AI Features and Your Website',
          url: 'https://developers.google.com/search/docs/appearance/ai-features',
          note: 'Documentation on AI Overviews, controls, and snippet management'
        },
        {
          title: 'Google Guidance on AI-Generated Content',
          url: 'https://developers.google.com/search/docs/fundamentals/using-gen-ai-content',
          note: 'Official policy on using generative AI in content creation'
        }
      ]
    }
  },
  {
    id: 'site-reputation-abuse-automated-enforcement',
    title: 'Site Reputation Abuse Policy: Algorithmic Enforcement Rollout',
    shortTitle: 'Site Reputation Abuse Enforcement',
    date: '2026-03-12',
    announcementDate: '2026-03-12',
    rolloutStartDate: '2026-03-12',
    rolloutEndDate: null,
    duration: 'Ongoing Algorithmic Enforcement',
    category: 'Spam Updates',
    sourceName: 'Google Search Central Blog',
    sourceUrl: 'https://developers.google.com/search/blog',
    verificationStatus: 'Confirmed Algorithm Update',
    impactLevel: 'Critical',
    isLatest: false,
    isHistorical: false,
    summary:
      'Google expanded automated algorithmic systems to detect and demote "parasite SEO" where third-party pages are hosted on trusted authority domains without direct site oversight.',
    whyItMatters:
      'Following initial manual actions in mid-2024, automated signals now systematically identify low-oversight commercial subdomains, syndicated coupon hubs, and third-party sponsored sections.',
    potentialImpact:
      'Severe traffic collapse for high-authority media domains leasing subdomains or subdirectories to third-party commercial operators.',
    recommendedAction:
      'Audit your domain for third-party partnerships, white-label affiliate portals, or syndicated hubs operating without strict editorial oversight. Terminate or noindex unvetted third-party commercial content.',
    fullBrief: {
      whatChanged:
        'Google transitioned from manual actions to automated algorithmic detection targeting Site Reputation Abuse as defined in Google Search Essentials spam policies.',
      whenAnnounced: 'Policy launched May 2024; automated enforcement systems fully integrated and active into 2025/2026.',
      rolloutTimeline: 'Ongoing continuous automated evaluation across the search index.',
      officialConfirmation:
        '"Site reputation abuse is when third-party pages are published with little or no first-party involvement or oversight, where the purpose is to manipulate search rankings by taking advantage of the host site\'s ranking signals."',
      whatIsUncertain:
        'The exact degree of first-party editorial review required before third-party syndicated content is deemed compliant is evaluated on a case-by-case basis by automated signals.',
      affectedWebsites: [
        'News and publishing websites hosting third-party coupon sections',
        'Educational or government domains hosting external commercial affiliate guides',
        'Large digital publications licensing sections to third-party SEO agencies'
      ],
      investigationMethod:
        'Audit subdirectories and subdomains in GSC to isolate external affiliate or partner sections. Check if organic impressions dropped to near-zero specifically on those partner URLs.',
      gscAnalyticsChecks: [
        'Inspect URL path performance in GSC Performance report filtering by subpaths like `/coupons/`, `/reviews/`, or partner subdomains.',
        'Review "Manual Actions" tab for any explicit "Site Reputation Abuse" notices.',
        'Inspect indexing status for third-party paths to verify whether Google is excluding them from indexing or demoting ranking positions.'
      ],
      practicalActions: [
        'Remove or block indexing (`noindex` or disallow in robots.txt) for any third-party sections created primarily to exploit your root domain authority.',
        'Institute strict editorial review where the host publisher directly authors or actively vets all published content.',
        'Ensure that legitimate sponsored content is clearly demarcated and marked with `rel="sponsored"` or `rel="nofollow"`.'
      ],
      avoidSpeculation: [
        'Do not assume that having a disclaimer text alone excuses low-oversight commercial hubs.',
        'Do not move penalized third-party sections to another subdomain on the same primary domain.'
      ],
      supportingResources: [
        {
          title: 'Google Spam Policies — Site Reputation Abuse',
          url: 'https://developers.google.com/search/docs/essentials/spam-policies#site-reputation',
          note: 'Official policy definition and examples of violations'
        }
      ]
    }
  },
  {
    id: 'robots-meta-tag-and-content-control-updates',
    title: 'Google Search Documentation: Content Control & Snippet Directives',
    shortTitle: 'Content Control & Snippet Directives',
    date: '2026-02-19',
    announcementDate: '2026-02-19',
    rolloutStartDate: '2026-02-19',
    rolloutEndDate: null,
    duration: 'Documentation Clarification',
    category: 'Documentation Changes',
    sourceName: 'Google Search Documentation Updates',
    sourceUrl: 'https://developers.google.com/search/updates',
    verificationStatus: 'Official Documentation Change',
    impactLevel: 'Medium',
    isLatest: false,
    isHistorical: false,
    summary:
      'Google clarified documentation regarding robots meta tags, `data-nosnippet`, `max-snippet`, and how publishers can control the use of their content in generative search features.',
    whyItMatters:
      'Clarifies how webmasters can prevent specific text spans from appearing in AI-generated answers and search snippets without removing the entire page from Google Search index.',
    potentialImpact:
      'Allows publishers to protect proprietary research excerpts, paywalled previews, or confidential calculations while maintaining full search indexability.',
    recommendedAction:
      'Implement `data-nosnippet` on HTML containers containing proprietary formulas, tables, or paywall boundaries. Review `robots.txt` and meta tag configurations across sensitive content.',
    fullBrief: {
      whatChanged:
        'Search Central documentation updated instructions for webmasters on managing snippets, previews, and generative AI feature display through standard HTML attributes and HTTP headers.',
      whenAnnounced: 'February 19, 2026 via Google Search Central updates changelog.',
      rolloutTimeline: 'Immediate technical implementation guideline across all Google Search surfaces.',
      officialConfirmation:
        '"Publishers can use existing robots meta tags and HTML attributes like data-nosnippet and max-snippet to manage how their content is summarized in search snippets and generative features."',
      whatIsUncertain:
        'Whether blocking text via `data-nosnippet` affects Google\'s internal RAG entity extraction for citation generation without snippet display.',
      affectedWebsites: [
        'Publishers with premium paywalled content',
        'Data providers offering proprietary pricing or financial metrics',
        'Webmasters seeking fine-grained control over search presentation'
      ],
      investigationMethod:
        'Inspect page source code and check live URL in Google Search Console URL Inspection tool to confirm directives are properly parsed.',
      gscAnalyticsChecks: [
        'Test affected URLs in GSC "URL Inspection > View Tested Page > HTML" to ensure `data-nosnippet` attributes are present in rendered DOM.',
        'Check GSC Performance report for changes in CTR following snippet attribute adjustments.'
      ],
      practicalActions: [
        'Add `data-nosnippet` to `<span>`, `<div>`, or `<section>` tags holding sensitive or proprietary text.',
        'Use `max-snippet:[number]` in robots meta tag if you wish to cap the character length of generated previews.',
        'Ensure that `nosnippet` is not applied site-wide accidentally, as it suppresses rich results and video previews.'
      ],
      avoidSpeculation: [
        'Do not use `data-nosnippet` to hide low-quality content; Googlebot still crawls and evaluates the text for ranking purposes.',
        'Do not block Googlebot via `robots.txt` if you only want to limit snippet summaries; use meta tags instead.'
      ],
      supportingResources: [
        {
          title: 'Robots Meta Tag and X-Robots-Tag Specifications',
          url: 'https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag',
          note: 'Official developer documentation for snippet controls'
        }
      ]
    }
  },
  {
    id: 'february-2026-discover-update',
    title: 'February 2026 Google Discover Ranking Update',
    shortTitle: 'Feb 2026 Discover Update',
    date: '2026-02-05',
    announcementDate: '2026-02-05',
    rolloutStartDate: '2026-02-05',
    rolloutEndDate: '2026-02-12',
    duration: '7 days',
    category: 'Core Updates',
    sourceName: 'Google Search Status Dashboard',
    sourceUrl: 'https://status.search.google.com/summary',
    verificationStatus: 'Confirmed Algorithm Update',
    impactLevel: 'Medium',
    isLatest: false,
    isHistorical: false,
    summary:
      'Google rolled out an algorithmic update specifically calibrating feed discovery, user interest relevance, and image quality thresholds within Google Discover.',
    whyItMatters:
      'Discover traffic is highly volatile and operates on predictive interest rather than explicit search queries. Sites using clickbait titles or low-resolution imagery experienced reduced impressions.',
    potentialImpact:
      'Noticeable shifts in Discover impressions for lifestyle, entertainment, news, and specialized hobby publications.',
    recommendedAction:
      'Ensure high-resolution lead images (at least 1200px wide) with `max-image-preview:large` enabled. Avoid sensationalized headlines that promise information the article does not deliver.',
    fullBrief: {
      whatChanged:
        'Google refined its automated ranking systems that power Google Discover, prioritizing content that demonstrates high user engagement without misleading curiosity gaps.',
      whenAnnounced: 'February 5, 2026.',
      rolloutTimeline: 'Began February 5, 2026 and concluded on February 12, 2026.',
      officialConfirmation:
        '"Released an update to our Discover ranking systems to better match user interest and suppress misleading headlines."',
      whatIsUncertain:
        'Individual threshold metrics for click-through to bounce rates within the Google app Discover feed.',
      affectedWebsites: [
        'Digital news sites and online magazines reliant on Google Discover traffic',
        'Publishers utilizing dramatic clickbait titles or sensational lead images'
      ],
      investigationMethod:
        'Filter Google Search Console Performance report by "Search type: Discover" over the past 90 days. Compare top performing pages before and after February 5.',
      gscAnalyticsChecks: [
        'Compare Discover impressions and clicks in GSC Performance > Discover.',
        'Check CTR on Discover articles: a sharp drop in impressions with steady CTR suggests overall algorithmic filtering rather than headline disinterest.',
        'Verify `max-image-preview:large` robots directive is present in the `<head>` of all candidate articles.'
      ],
      practicalActions: [
        'Ensure primary featured images are at least 1200px wide and served with clean aspect ratios (16:9).',
        'Align headlines directly with article content and avoid hyperbolic clickbait.',
        'Publish timely, evergreen analysis on niche topics where your authors possess verified credentials.'
      ],
      avoidSpeculation: [
        'Do not treat Discover as guaranteed baseline search traffic; Discover is inherently query-less and subject to cyclical audience shifts.',
        'Do not delete articles simply because they did not trigger Discover impressions.'
      ],
      supportingResources: [
        {
          title: 'Google Discover and Your Website',
          url: 'https://developers.google.com/search/docs/appearance/google-discover',
          note: 'Official requirements for Discover eligibility'
        }
      ]
    }
  },
  {
    id: 'december-2025-core-update',
    title: 'December 2025 Broad Core Update',
    shortTitle: 'Dec 2025 Core Update',
    date: '2025-12-28',
    announcementDate: '2025-12-11',
    rolloutStartDate: '2025-12-11',
    rolloutEndDate: '2025-12-28',
    duration: '17 days',
    category: 'Core Updates',
    sourceName: 'Google Search Status Dashboard',
    sourceUrl: 'https://status.search.google.com/summary',
    verificationStatus: 'Confirmed Algorithm Update',
    impactLevel: 'High',
    isLatest: false,
    isHistorical: true,
    summary:
      'The final core update of 2025 rolled out across a 17-day window, re-evaluating website authority, user satisfaction signals, and brand entity recognition.',
    whyItMatters:
      'Concluded a pivotal year of search quality updates. Provided positive re-evaluations for sites that improved content depth following 2024–2025 update fluctuations.',
    potentialImpact:
      'Wide-ranging ranking shifts across e-commerce, consumer tech, finance, and educational verticals.',
    recommendedAction:
      'Review long-term annual organic trends. Identify content clusters that regained positions versus those that remained depressed, prioritizing content consolidation.',
    fullBrief: {
      whatChanged:
        'A comprehensive broad core update adjusting Google\'s global core ranking algorithms across all regions and languages.',
      whenAnnounced: 'December 11, 2025.',
      rolloutTimeline: 'Started December 11, 2025 and concluded December 28, 2025.',
      officialConfirmation:
        '"The December 2025 core update rollout is now complete." As with all core updates, Google reiterated its standing guidance on content quality.',
      whatIsUncertain:
        'Individual algorithm signals and relative weighting factors across different competitive niches.',
      affectedWebsites: [
        'Global websites across commercial and informational categories',
        'Affiliate websites with overlapping product reviews',
        'Sites that implemented major content improvements during Q3 2025'
      ],
      investigationMethod:
        'Execute a comprehensive quarterly traffic audit comparing Q3 2025 with Q1 2026 performance in GSC.',
      gscAnalyticsChecks: [
        'Review Year-over-Year (YoY) organic traffic in Google Analytics 4 and GSC.',
        'Inspect branded vs non-branded query performance splits.',
        'Identify lost commercial keywords and evaluate top 3 competitor pages that gained share.'
      ],
      practicalActions: [
        'Consolidate cannibalizing URLs into comprehensive canonical master guides.',
        'Update outdated data points, expired pricing, and broken reference links.',
        'Improve internal linking architecture from authoritative top-level pages to deep subtopic guides.'
      ],
      avoidSpeculation: [
        'Do not assume a temporary holiday ranking fluctuation is permanent without examining post-holiday performance data.'
      ],
      supportingResources: [
        {
          title: 'Google Search Ranking Systems Guide',
          url: 'https://developers.google.com/search/docs/appearance/ranking-systems-guide',
          note: 'Overview of Google core ranking systems'
        }
      ]
    }
  },
  {
    id: 'inp-official-core-web-vital',
    title: 'Interaction to Next Paint (INP) Official Core Web Vital Standard',
    shortTitle: 'INP Replaces FID as Core Web Vital',
    date: '2024-03-12',
    announcementDate: '2024-03-12',
    rolloutStartDate: '2024-03-12',
    rolloutEndDate: null,
    duration: 'Permanent Standard',
    category: 'Technical SEO',
    sourceName: 'Google Search Central Blog & web.dev',
    sourceUrl: 'https://developers.google.com/search/docs/appearance/core-web-vitals',
    verificationStatus: 'Technical Standard',
    impactLevel: 'Medium',
    isLatest: false,
    isHistorical: true,
    summary:
      'Interaction to Next Paint (INP) officially replaced First Input Delay (FID) as a Core Web Vital metric, measuring full page responsiveness throughout a user visit.',
    whyItMatters:
      'FID only measured the initial delay of the very first click. INP measures all user interactions (clicks, taps, key presses) and reports the worst 98th percentile latency, penalizing heavy JavaScript execution.',
    potentialImpact:
      'Complex single-page applications and e-commerce sites with heavy JavaScript main-thread blocking saw their Core Web Vitals assessment status drop to "Needs Improvement" or "Poor".',
    recommendedAction:
      'Inspect GSC "Core Web Vitals" report. For URLs failing INP (>200ms), profile main thread activity in Chrome DevTools Performance panel, break up long tasks, and defer non-critical third-party scripts.',
    fullBrief: {
      whatChanged:
        'INP officially replaced FID in Google\'s Core Web Vitals suite, becoming part of the page experience ranking signals in Google Search.',
      whenAnnounced: 'Announced in 2023; officially activated as a Core Web Vital on March 12, 2024.',
      rolloutTimeline: 'Permanent ranking system component monitored continuously via Chrome User Experience Report (CrUX).',
      officialConfirmation:
        '"Interaction to Next Paint (INP) has replaced First Input Delay (FID) as a Core Web Vital metric." (web.dev & Google Search Central).',
      whatIsUncertain:
        'The exact weight of Core Web Vitals relative to core relevance and content signals (Google confirms page experience acts as a tiebreaker, not a substitute for relevant content).',
      affectedWebsites: [
        'Websites with heavy JavaScript frameworks, unoptimized React/Vue hydration, or complex DOM trees',
        'E-commerce websites with interactive filters, facet drawers, and third-party tag managers'
      ],
      investigationMethod:
        'Open Google Search Console > Core Web Vitals report. Look for INP issues (interactions taking >200ms for "Needs Improvement" or >500ms for "Poor"). Run Chrome DevTools Performance panel to record interaction traces.',
      gscAnalyticsChecks: [
        'Review GSC Core Web Vitals (Mobile and Desktop) for URLs in the Poor or Needs Improvement buckets.',
        'Examine PageSpeed Insights CrUX field data (75th percentile of real users) vs synthetic Lighthouse lab tests.'
      ],
      practicalActions: [
        'Yield to the main thread during long JavaScript tasks using `scheduler.yield()` or `setTimeout`.',
        'Audit and remove heavy, unneeded third-party tracking pixels, chat widgets, and heatmaps.',
        'Optimize complex CSS selectors and avoid layout thrashing during DOM updates.'
      ],
      avoidSpeculation: [
        'Do not expect a massive ranking boost solely by fixing INP if the page content does not fulfill search intent.',
        'Do not rely solely on Lighthouse lab scores; INP is calculated strictly from real user field data (CrUX).'
      ],
      supportingResources: [
        {
          title: 'Interaction to Next Paint (INP) Guide',
          url: 'https://web.dev/explore/inp',
          note: 'Complete technical documentation on diagnosing and optimizing INP'
        },
        {
          title: 'Core Web Vitals & Search Results',
          url: 'https://developers.google.com/search/docs/appearance/core-web-vitals',
          note: 'Google official overview of Core Web Vitals in ranking'
        }
      ]
    }
  },
  {
    id: 'march-2024-core-and-spam-update',
    title: 'March 2024 Core Update & New Spam Policies Overhaul',
    shortTitle: 'March 2024 Core & Spam Overhaul',
    date: '2024-04-19',
    announcementDate: '2024-03-05',
    rolloutStartDate: '2024-03-05',
    rolloutEndDate: '2024-04-19',
    duration: '45 days',
    category: 'Core Updates',
    sourceName: 'Google Search Central Blog',
    sourceUrl: 'https://developers.google.com/search/blog/2024/03/core-update-spam-policies',
    verificationStatus: 'Confirmed Algorithm Update',
    impactLevel: 'Critical',
    isLatest: false,
    isHistorical: true,
    summary:
      'A historic 45-day rollout that integrated the Helpful Content System directly into Google’s core ranking algorithm, reducing unoriginal search results by an officially estimated 45%.',
    whyItMatters:
      'Permanently altered SEO content creation practices. Retired the standalone "helpful content update" name, integrating quality evaluations into core ranking. Launched explicit spam policies against scaled content abuse and expired domain abuse.',
    potentialImpact:
      'Thousands of thin affiliate sites, AI-spun content networks, and automated aggregators experienced de-indexing or permanent 80-95% traffic losses.',
    recommendedAction:
      'Understand the architecture: helpful content is no longer a separate periodic update—it is continuously evaluated as part of core ranking.',
    fullBrief: {
      whatChanged:
        'Google overhauled its core ranking systems to identify unhelpful pages, poor user experiences, and content created primarily for search engines. Concurrently introduced three new spam policies: Scaled Content Abuse, Expired Domain Abuse, and Site Reputation Abuse.',
      whenAnnounced: 'March 5, 2024.',
      rolloutTimeline: 'Started March 5, 2024 and completed on April 19, 2024 (45 days total).',
      officialConfirmation:
        '"The March 2024 core update is a more complex update than our usual core updates, involving changes to multiple core systems... We estimate that the combination of this update and our previous efforts will reduce low-quality, unoriginal content in search results by 45%."',
      whatIsUncertain:
        'How individual signals from the former standalone helpful content system were architecturally weighted inside the core ranking pipeline.',
      affectedWebsites: [
        'Websites mass-producing content using generative AI without editorial verification',
        'Websites purchasing expired domains with preexisting backlinks to rank unrelated content',
        'Websites that summarized other web pages without offering proprietary testing or original viewpoints'
      ],
      investigationMethod:
        'Historical benchmark: check whether your domain suffered severe losses during March-April 2024 that have persisted, signaling fundamental sitewide quality classification issues.',
      gscAnalyticsChecks: [
        'Check historical GSC performance from March 2024 to present.',
        'Review indexed URL count in GSC "Pages" report to identify mass "Crawled - currently not indexed" patterns.'
      ],
      practicalActions: [
        'Cease automated mass-publishing of keyword-targeted articles.',
        'Perform ruthless pruning of obsolete, thin, or low-performing pages.',
        'Rebuild domain reputation around distinct proprietary expertise, verified authors, and genuine business utility.'
      ],
      avoidSpeculation: [
        'Do not wait for a "helpful content recovery update"; recovery requires substantial, continuous sitewide improvement over multiple core update cycles.'
      ],
      supportingResources: [
        {
          title: 'Google Blog: What to Know About the March 2024 Core Update',
          url: 'https://developers.google.com/search/blog/2024/03/core-update-spam-policies',
          note: 'Original landmark announcement by Google Search Quality team'
        }
      ]
    }
  }
];
