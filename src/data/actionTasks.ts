import type { ActionTask } from '../types';

export const INITIAL_ACTION_TASKS: ActionTask[] = [
  {
    id: 'task-sep-2026-spam-audit',
    title: 'Audit Thin Content & Syndication for September 2026 Spam Update',
    relatedUpdateId: 'september-2026-spam-update',
    relatedUpdateTitle: 'September 2026 Spam Update',
    problem:
      'Evaluate whether algorithmic demotions occurred following the completion of the 14-day September 2026 spam update, particularly on programmatic URLs or syndicated sections.',
    evidenceRequired:
      'GSC Search Performance data (Sept 10-23 baseline vs Oct 9-23 post-rollout) and Crawl Status report showing impressions and indexing trends.',
    suggestedSteps: [
      'Export Search Console performance data segmented by Page path for the 14 days before Sept 24 vs 14 days after Oct 8.',
      'Identify URLs suffering >25% click drops without an overall decline in search demand.',
      'Check Security & Manual Actions tab to rule out manual penalties.',
      'Audit identified pages for thin programmatic text, automated translation artifacts, or missing rel="sponsored" attributes on partner links.',
      'Draft a pruning or de-indexing plan for non-performing low-utility pages.'
    ],
    priority: 'P1 - High',
    effort: 'Medium (2-8h)',
    impactScore: 5,
    confidenceScore: 4,
    effortScore: 3,
    iceScore: 6.67, // (5 * 4) / 3
    status: 'In Progress',
    notes:
      'Baseline analysis underway. Verified that no manual actions are present in GSC. Reviewing product listing and programmatic category filters for thin content.',
    isCustom: false,
    createdAt: '2026-10-10'
  },
  {
    id: 'task-ai-snippet-controls',
    title: 'Implement data-nosnippet & Max-Snippet Controls on Proprietary Insights',
    relatedUpdateId: 'google-ai-optimization-guide-official',
    relatedUpdateTitle: "Google's Official Guide to Optimizing for Generative AI Features",
    problem:
      'Protect proprietary data tables, financial metrics, and premium research excerpts from complete synthesis in AI Overviews while keeping full page indexing intact.',
    evidenceRequired:
      'Rendered HTML DOM inspection in GSC URL Inspection tool confirming valid data-nosnippet attributes on target containers.',
    suggestedSteps: [
      'Identify all proprietary data modules, calculators, and exclusive survey tables on the site.',
      'Add data-nosnippet attribute to the parent wrapper tags (`<div data-nosnippet>` or `<span data-nosnippet>`).',
      'Verify that the robots meta tag does not inadvertently have a site-wide nosnippet directive.',
      'Submit updated URLs in GSC URL Inspection tool to confirm Googlebot renders the attribute correctly.',
      'Monitor AI Overview appearances for relevant high-intent queries.'
    ],
    priority: 'P2 - Medium',
    effort: 'Quick Win (<2h)',
    impactScore: 4,
    confidenceScore: 5,
    effortScore: 2,
    iceScore: 10.0, // (4 * 5) / 2
    status: 'Not Started',
    notes: 'Identified 12 proprietary research summary cards that should be protected from direct AI summary scraping.',
    isCustom: false,
    createdAt: '2026-10-12'
  },
  {
    id: 'task-may-2026-core-review',
    title: 'Execute E-E-A-T Self-Assessment Review for May 2026 Core Update',
    relatedUpdateId: 'may-2026-core-update',
    relatedUpdateTitle: 'May 2026 Broad Core Update',
    problem:
      'Investigate pages that saw organic position declines after the May 2026 broad core update to determine if content satisfaction and first-hand experience signals are lacking.',
    evidenceRequired:
      'GSC Query position data comparing May 2026 with June/July 2026 and SERP competitor comparison audit sheet.',
    suggestedSteps: [
      'Filter GSC for pages that experienced an average position drop of 3 or more positions.',
      'Compare each dropping page against the top 3 ranking competitor URLs currently winning the SERP.',
      'Evaluate whether competitors provide first-hand testing, original images, or proprietary data that your page lacks.',
      'Update author credentials, add verifiable testing methodologies, and consolidate overlapping articles.',
      'Submit updated URLs for re-crawling and monitor across the next core update cycle.'
    ],
    priority: 'P1 - High',
    effort: 'Deep Dive (>1d)',
    impactScore: 5,
    confidenceScore: 4,
    effortScore: 4,
    iceScore: 5.0, // (5 * 4) / 4
    status: 'Not Started',
    notes: 'Targeting top 5 high-converting commercial comparison guides for first-hand research enhancements.',
    isCustom: false,
    createdAt: '2026-10-14'
  },
  {
    id: 'task-inp-performance-optimization',
    title: 'Profile Main Thread Tasks & Fix Interaction to Next Paint (INP)',
    relatedUpdateId: 'inp-official-core-web-vital',
    relatedUpdateTitle: 'Interaction to Next Paint (INP) Official Core Web Vital Standard',
    problem:
      'Resolve "Needs Improvement" INP metrics (>200ms) on mobile templates causing Core Web Vitals assessment failure in Google Search Console.',
    evidenceRequired:
      'CrUX (Chrome User Experience Report) 75th percentile mobile INP data in GSC Core Web Vitals report and DevTools performance traces.',
    suggestedSteps: [
      'Open GSC Core Web Vitals report and identify URL groups flagged with INP > 200ms.',
      'Record interactions in Chrome DevTools Performance panel under 4x CPU throttling.',
      'Identify long JavaScript tasks (>50ms) blocking the main thread during click and tap events.',
      'Implement `scheduler.yield()` or break tasks into micro-tasks before rendering UI responses.',
      'Defer non-essential third-party analytics and marketing scripts until after user interaction.'
    ],
    priority: 'P2 - Medium',
    effort: 'Medium (2-8h)',
    impactScore: 4,
    confidenceScore: 4,
    effortScore: 3,
    iceScore: 5.33, // (4 * 4) / 3
    status: 'In Progress',
    notes: 'Eliminated two heavy marketing pixels on mobile templates. Main thread blocking time reduced from 340ms to 160ms in staging.',
    isCustom: false,
    createdAt: '2026-10-15'
  },
  {
    id: 'task-site-reputation-audit',
    title: 'Audit Third-Party Sections for Site Reputation Abuse Compliance',
    relatedUpdateId: 'site-reputation-abuse-automated-enforcement',
    relatedUpdateTitle: 'Site Reputation Abuse Policy: Algorithmic Enforcement Rollout',
    problem:
      'Ensure the domain contains zero third-party commercial content, white-label syndication, or affiliate portals published without strict first-party editorial oversight.',
    evidenceRequired:
      'Site architecture crawl of all subdirectories and subdomains paired with editorial contract verification.',
    suggestedSteps: [
      'Crawl all subdomains and subdirectories looking for hosted partner content or coupon/discount directories.',
      'Verify that first-party internal editorial teams actively review and approve all published material.',
      'If third-party commercial sections exist without editorial control, immediately apply `noindex` or block via robots.txt.',
      'Ensure all commercial affiliate hyperlinks use rel="sponsored" or rel="nofollow".'
    ],
    priority: 'P1 - High',
    effort: 'Quick Win (<2h)',
    impactScore: 5,
    confidenceScore: 5,
    effortScore: 2,
    iceScore: 12.5, // (5 * 5) / 2
    status: 'Completed',
    completionDate: '2026-10-18',
    notes: 'Completed full subfolder audit. Domain does not lease or host external third-party affiliate hubs. 100% compliant.',
    isCustom: false,
    createdAt: '2026-10-16'
  }
];
