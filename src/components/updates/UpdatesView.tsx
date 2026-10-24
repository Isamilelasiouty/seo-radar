import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { SEO_UPDATES } from '../../data/updates';
import type { UpdateCategory, SEOUpdate } from '../../types';
import {
  Search,
  Filter,
  ArrowUpDown,
  Bookmark,
  Calendar,
  Clock,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  PlusCircle,
  FileText
} from 'lucide-react';

const CATEGORIES: ('All' | UpdateCategory)[] = [
  'All',
  'Core Updates',
  'Spam Updates',
  'AI Search',
  'Technical SEO',
  'Search Console',
  'Content and Quality',
  'Structured Data',
  'Crawling and Indexing',
  'Documentation Changes',
  'Industry Research'
];

export const UpdatesView: React.FC = () => {
  const {
    t,
    openUpdateBrief,
    savedUpdateIds,
    toggleSaveUpdate,
    globalSearch,
    setGlobalSearch,
    addTask,
    setActiveTab
  } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<'All' | UpdateCategory>('All');
  const [sortBy, setSortBy] = useState<'date-desc' | 'date-asc' | 'impact'>('date-desc');
  const [onlySaved, setOnlySaved] = useState(false);

  const filteredUpdates = useMemo(() => {
    let result = [...SEO_UPDATES];

    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter((u) => u.category === selectedCategory);
    }

    // Filter by saved
    if (onlySaved) {
      result = result.filter((u) => savedUpdateIds.includes(u.id));
    }

    // Filter by search query
    if (globalSearch.trim()) {
      const q = globalSearch.toLowerCase();
      result = result.filter(
        (u) =>
          u.title.toLowerCase().includes(q) ||
          u.summary.toLowerCase().includes(q) ||
          u.category.toLowerCase().includes(q) ||
          u.sourceName.toLowerCase().includes(q) ||
          u.whyItMatters.toLowerCase().includes(q)
      );
    }

    // Sort
    result.sort((a, b) => {
      if (sortBy === 'date-desc') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      if (sortBy === 'date-asc') {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      if (sortBy === 'impact') {
        const impactWeight: Record<string, number> = {
          Critical: 4,
          High: 3,
          Medium: 2,
          Low: 1,
          Informational: 0
        };
        return (impactWeight[b.impactLevel] || 0) - (impactWeight[a.impactLevel] || 0);
      }
      return 0;
    });

    return result;
  }, [selectedCategory, onlySaved, globalSearch, sortBy, savedUpdateIds]);

  const handleQuickCreateTask = (update: SEOUpdate, e: React.MouseEvent) => {
    e.stopPropagation();
    addTask({
      title: `Investigate impact of ${update.shortTitle}`,
      relatedUpdateId: update.id,
      relatedUpdateTitle: update.title,
      problem: update.potentialImpact,
      evidenceRequired: `GSC Search performance and indexing data around ${update.date}`,
      suggestedSteps: update.fullBrief.gscAnalyticsChecks,
      priority: update.impactLevel === 'Critical' ? 'P1 - High' : 'P2 - Medium',
      effort: 'Medium (2-8h)',
      impactScore: update.impactLevel === 'Critical' ? 5 : 4,
      confidenceScore: 4,
      effortScore: 3,
      notes: `Quick task added from Search Updates view on ${new Date().toISOString().split('T')[0]}`
    });
    setActiveTab('actions');
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
          {t.updates.title}
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-3xl">
          {t.updates.subtitle}
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3">
        <div className="flex flex-col md:flex-row items-center gap-3">
          
          {/* Search Input */}
          <div className="relative w-full md:flex-1">
            <input
              type="search"
              value={globalSearch}
              onChange={(e) => setGlobalSearch(e.target.value)}
              placeholder={t.updates.searchPlaceholder}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-2 text-sm text-navy-900 placeholder-slate-400 focus:bg-white focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 w-full md:w-auto">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-navy-900 font-semibold focus:outline-none cursor-pointer"
              >
                <option value="date-desc">{t.updates.sortByDateDesc}</option>
                <option value="date-asc">{t.updates.sortByDateAsc}</option>
                <option value="impact">{t.updates.sortByImpact}</option>
              </select>
            </div>

            {/* Saved filter toggle */}
            <button
              onClick={() => setOnlySaved(!onlySaved)}
              className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-colors flex items-center gap-1.5 shrink-0 ${
                onlySaved
                  ? 'bg-accent-50 border-accent-300 text-accent-800'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-navy-900'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5 fill-current" />
              <span>Saved ({savedUpdateIds.length})</span>
            </button>
          </div>

        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-accent-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-navy-900'
                }`}
              >
                {cat === 'All' ? t.updates.filterAll : cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count & Notice */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>
          Showing <strong className="text-navy-900">{filteredUpdates.length}</strong> verified updates
        </span>
        <span className="hidden sm:inline">
          Dates represent confirmed rollout and completion periods
        </span>
      </div>

      {/* Updates Cards List */}
      {filteredUpdates.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
          <Filter className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-navy-900 mb-1">{t.updates.noResults}</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Try resetting your search query or switching categories to explore other verified updates.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setGlobalSearch('');
              setOnlySaved(false);
            }}
            className="mt-4 px-4 py-2 rounded-lg bg-accent-600 text-white text-xs font-semibold hover:bg-accent-700 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredUpdates.map((update) => {
            const isSaved = savedUpdateIds.includes(update.id);
            return (
              <article
                key={update.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-all p-5 shadow-xs space-y-4"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent-50 text-accent-800 border border-accent-200/60">
                        {update.category}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-emerald-600" />
                        <span>{update.verificationStatus}</span>
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                          update.impactLevel === 'Critical'
                            ? 'bg-rose-100 text-rose-800'
                            : update.impactLevel === 'High'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-slate-100 text-slate-800'
                        }`}
                      >
                        Impact: {update.impactLevel}
                      </span>
                      {update.isLatest && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-600 text-white">
                          Latest Update
                        </span>
                      )}
                      {update.isHistorical && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600 border border-slate-200">
                          Historical Reference
                        </span>
                      )}
                    </div>
                    <h2
                      onClick={() => openUpdateBrief(update)}
                      className="text-lg sm:text-xl font-bold text-navy-900 hover:text-accent-700 cursor-pointer transition-colors pt-1"
                    >
                      {update.title}
                    </h2>
                  </div>

                  {/* Bookmark Button */}
                  <div className="flex items-center gap-2 self-end sm:self-start">
                    <button
                      onClick={() => toggleSaveUpdate(update.id)}
                      className={`p-2 rounded-lg border transition-colors flex items-center gap-1.5 text-xs font-medium ${
                        isSaved
                          ? 'bg-accent-50 border-accent-300 text-accent-800'
                          : 'border-slate-200 text-slate-500 hover:text-navy-900 hover:bg-slate-50'
                      }`}
                      title={isSaved ? t.updates.savedArticle : t.updates.saveArticle}
                    >
                      <Bookmark className="w-4 h-4 fill-current" />
                      <span className="hidden sm:inline">
                        {isSaved ? t.updates.savedArticle : t.updates.saveArticle}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Rollout Timing Bar */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 py-2 px-3 bg-slate-50 rounded-xl text-xs text-slate-700 border border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>
                      <strong className="text-slate-900">Announced:</strong> {update.announcementDate}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>
                      <strong className="text-slate-900">Rollout Started:</strong> {update.rolloutStartDate}
                    </span>
                  </div>
                  {update.rolloutEndDate && (
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>
                        <strong className="text-slate-900">Completed:</strong> {update.rolloutEndDate}
                      </span>
                    </div>
                  )}
                  {update.duration && (
                    <span className="text-slate-500">({update.duration})</span>
                  )}
                </div>

                {/* Summary & Analysis Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-slate-50/70 rounded-xl border border-slate-200/60">
                    <span className="font-bold text-navy-900 block mb-1 uppercase tracking-wider text-[10px]">
                      Short Summary
                    </span>
                    <p className="text-slate-700 leading-relaxed">{update.summary}</p>
                  </div>

                  <div className="p-3 bg-slate-50/70 rounded-xl border border-slate-200/60">
                    <span className="font-bold text-navy-900 block mb-1 uppercase tracking-wider text-[10px]">
                      Why It Matters
                    </span>
                    <p className="text-slate-700 leading-relaxed">{update.whyItMatters}</p>
                  </div>

                  <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-200/60">
                    <span className="font-bold text-emerald-950 block mb-1 uppercase tracking-wider text-[10px]">
                      Recommended Action
                    </span>
                    <p className="text-emerald-950 leading-relaxed">{update.recommendedAction}</p>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">Official Publisher:</span>
                    <a
                      href={update.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-accent-700 hover:text-accent-800 inline-flex items-center gap-1 hover:underline"
                    >
                      <span>{update.sourceName}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => handleQuickCreateTask(update, e)}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold transition-colors flex items-center gap-1.5"
                    >
                      <PlusCircle className="w-3.5 h-3.5 text-accent-600" />
                      <span>{t.updates.createTask}</span>
                    </button>

                    <button
                      onClick={() => openUpdateBrief(update)}
                      className="px-4 py-1.5 rounded-lg bg-accent-600 hover:bg-accent-700 text-white font-semibold shadow-xs transition-colors flex items-center gap-1.5"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>{t.updates.viewBrief}</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

    </div>
  );
};
