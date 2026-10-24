export type UpdateCategory =
  | 'Core Updates'
  | 'Spam Updates'
  | 'AI Search'
  | 'Technical SEO'
  | 'Search Console'
  | 'Content and Quality'
  | 'Structured Data'
  | 'Crawling and Indexing'
  | 'Documentation Changes'
  | 'Industry Research';

export type VerificationStatus =
  | 'Confirmed Algorithm Update'
  | 'Official Documentation Change'
  | 'Official Feature Launch'
  | 'Technical Standard'
  | 'Industry Research Study';

export type ImpactLevel = 'Critical' | 'High' | 'Medium' | 'Low' | 'Informational';

export interface SupportingResource {
  title: string;
  url: string;
  note: string;
}

export interface UpdateResearchBrief {
  whatChanged: string;
  whenAnnounced: string;
  rolloutTimeline: string;
  officialConfirmation: string;
  whatIsUncertain: string;
  affectedWebsites: string[];
  investigationMethod: string;
  gscAnalyticsChecks: string[];
  practicalActions: string[];
  avoidSpeculation: string[];
  supportingResources: SupportingResource[];
}

export interface SEOUpdate {
  id: string;
  title: string;
  shortTitle: string;
  date: string;
  announcementDate: string;
  rolloutStartDate: string;
  rolloutEndDate: string | null;
  duration?: string;
  category: UpdateCategory;
  sourceName: string;
  sourceUrl: string;
  verificationStatus: VerificationStatus;
  impactLevel: ImpactLevel;
  summary: string;
  whyItMatters: string;
  potentialImpact: string;
  recommendedAction: string;
  fullBrief: UpdateResearchBrief;
  isHistorical: boolean;
  isLatest: boolean;
}

export interface RoadmapExercise {
  id: string;
  title: string;
  task: string;
  deliverable: string;
}

export interface ChecklistItem {
  id: string;
  label: string;
  details: string;
}

export interface DocLink {
  title: string;
  url: string;
  description: string;
}

export interface ArticleLink {
  title: string;
  author: string;
  url: string;
  description: string;
}

export interface RoadmapModule {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  level: 'Foundational' | 'Intermediate' | 'Advanced';
  estimatedHours: number;
  learningObjectives: string[];
  officialDocs: DocLink[];
  recommendedArticles: ArticleLink[];
  practicalExercises: RoadmapExercise[];
  checklist: ChecklistItem[];
}

export type TaskPriority = 'P1 - High' | 'P2 - Medium' | 'P3 - Low';
export type TaskEffort = 'Quick Win (<2h)' | 'Medium (2-8h)' | 'Deep Dive (>1d)';
export type TaskStatus = 'Not Started' | 'In Progress' | 'Completed';

export interface ActionTask {
  id: string;
  title: string;
  relatedUpdateId?: string;
  relatedUpdateTitle?: string;
  problem: string;
  evidenceRequired: string;
  suggestedSteps: string[];
  priority: TaskPriority;
  effort: TaskEffort;
  impactScore: number; // 1-5
  confidenceScore: number; // 1-5
  effortScore: number; // 1-5
  iceScore: number; // (Impact * Confidence) / Effort
  status: TaskStatus;
  notes: string;
  completionDate?: string;
  isCustom: boolean;
  createdAt: string;
}

export type ResourceCategory =
  | 'Google Official Documentation'
  | 'Google Announcements & Blogs'
  | 'Technical SEO References'
  | 'AI Search & GEO/AEO'
  | 'SEO Analytics & Measurement'
  | 'Advanced SEO Strategy';

export interface ResourceItem {
  id: string;
  title: string;
  category: ResourceCategory;
  url: string;
  publisher: string;
  description: string;
  tags: string[];
  verified: boolean;
}
