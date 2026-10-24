import React from 'react';
import { useApp } from '../../context/AppContext';
import { SEO_UPDATES } from '../../data/updates';
import { ROADMAP_MODULES } from '../../data/roadmap';
import { SOURCES_LIBRARY } from '../../data/sources';
import {
  Radio,
  CheckSquare,
  Map,
  Bookmark,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  Calendar,
  Sparkles,
  TrendingUp,
  BookOpen
} from 'lucide-react';

export const DashboardView: React.FC = () => {
  const {
    t,
    setActiveTab,
    openUpdateBrief,
    actionTasks,
    completedChecklistIds,
    savedUpdateIds,
    toggleSaveUpdate,
    updateTaskStatus
  } = useApp();

  const totalChecklist = ROADMAP_MODULES.reduce((acc, m) => acc + m.checklist.length, 0);
  const roadmapPercent = Math.round((completedChecklistIds.length / totalChecklist) * 100) || 0;
  const activeTasks = actionTasks.filter((t) => t.status !== 'Completed');
  const completedTasks = actionTasks.filter((t) => t.status === 'Completed');

  const latestUpdates = SEO_UPDATES.slice(0, 4);
  const recentDocs = SOURCES_LIBRARY.filter((s) => s.category === 'Google Official Documentation').slice(0, 4);

  // Identify next learning priority module (first one not 100% completed)
  const nextPriorityModule =
    ROADMAP_MODULES.find((m) => {
      const moduleDone = m.checklist.every((c) => completedChecklistIds.includes(c.id));
      return !moduleDone;
    }) || ROADMAP_MODULES[0];

  return (
    <div className="space-y-6">
      
      {/* Page Title & Intro */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
            {t.dashboard.title}
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-3xl">
            {t.dashboard.subtitle}
          </p>
        </div>
        <div className="flex items-center gap-2 self-start md:self-auto">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Search System Feed Active</span>
          </span>
        </div>
      </div>

      {/* Critical Alert Banner: September 2026 Spam Update */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-navy-900 via-navy-950 to-slate-900 text-white p-5 sm:p-6 shadow-md border border-navy-800">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400 mt-0.5">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Critical Search Update
                </span>
                <span className="text-xs text-slate-400">Completed Oct 8, 2026</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white mt-1">
                {t.dashboard.urgentBannerTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                {t.dashboard.urgentBannerDesc}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full md:w-auto shrink-0">
            <button
              onClick={() => {
                const sepUpdate = SEO_UPDATES.find((u) => u.id === 'september-2026-spam-update');
                if (sepUpdate) openUpdateBrief(sepUpdate);
              }}
              className="w-full md:w-auto px-4 py-2 rounded-lg bg-accent-500 hover:bg-accent-600 text-navy-950 font-bold text-xs shadow-sm transition-all text-center flex items-center justify-center gap-1.5"
            >
              <span>Inspect 11-Point Brief</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* KPI Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Updates Tracked */}
        <div
          onClick={() => setActiveTab('updates')}
          className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-all cursor-pointer shadow-xs group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              {t.dashboard.statsUpdatesTracked}
            </span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
              <Radio className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-navy-900">{SEO_UPDATES.length}</span>
            <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
              100% Verified
            </span>
          </div>
          <span className="text-xs text-slate-500 mt-1 block">
            Official confirmed updates
          </span>
        </div>

        {/* Card 2: Active Tasks */}
        <div
          onClick={() => setActiveTab('actions')}
          className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-all cursor-pointer shadow-xs group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              {t.dashboard.statsActiveTasks}
            </span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
              <CheckSquare className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-navy-900">{activeTasks.length}</span>
            <span className="text-xs text-slate-500">
              ({completedTasks.length} completed)
            </span>
          </div>
          <span className="text-xs text-slate-500 mt-1 block">
            Systematic SEO investigations
          </span>
        </div>

        {/* Card 3: Roadmap Progress */}
        <div
          onClick={() => setActiveTab('roadmap')}
          className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-all cursor-pointer shadow-xs group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              {t.dashboard.statsRoadmapProgress}
            </span>
            <div className="w-8 h-8 rounded-lg bg-accent-50 text-accent-600 flex items-center justify-center group-hover:bg-accent-100 transition-colors">
              <Map className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-navy-900">{roadmapPercent}%</span>
            <span className="text-xs text-slate-500">
              {completedChecklistIds.length}/{totalChecklist} skills
            </span>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
            <div
              className="bg-accent-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${roadmapPercent}%` }}
            />
          </div>
        </div>

        {/* Card 4: Saved Research */}
        <div
          onClick={() => setActiveTab('tracker')}
          className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-all cursor-pointer shadow-xs group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              {t.dashboard.statsSavedItems}
            </span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
              <Bookmark className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-navy-900">{savedUpdateIds.length}</span>
            <span className="text-xs text-slate-500">Briefs saved</span>
          </div>
          <span className="text-xs text-slate-500 mt-1 block">
            Bookmarked for fast reference
          </span>
        </div>

      </div>

      {/* Main Grid: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column (2 spans): Verified Updates Feed */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Radio className="w-4 h-4 text-accent-600" />
              <h2 className="text-lg font-bold text-navy-900">
                {t.dashboard.recentUpdatesTitle}
              </h2>
            </div>
            <button
              onClick={() => setActiveTab('updates')}
              className="text-xs font-semibold text-accent-700 hover:text-accent-800 transition-colors flex items-center gap-1"
            >
              <span>{t.dashboard.viewAllUpdates}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {latestUpdates.map((update) => {
              const isSaved = savedUpdateIds.includes(update.id);
              return (
                <div
                  key={update.id}
                  className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-all shadow-xs"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-accent-50 text-accent-800 border border-accent-200/60">
                          {update.category}
                        </span>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-slate-400" />
                          <span>{update.date}</span>
                        </span>
                        {update.isLatest && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800">
                            Latest
                          </span>
                        )}
                      </div>
                      <h3
                        onClick={() => openUpdateBrief(update)}
                        className="text-base font-bold text-navy-900 hover:text-accent-700 cursor-pointer transition-colors"
                      >
                        {update.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed line-clamp-2">
                        {update.summary}
                      </p>
                    </div>

                    <button
                      onClick={() => toggleSaveUpdate(update.id)}
                      className={`p-1.5 rounded-lg border transition-colors ${
                        isSaved
                          ? 'bg-accent-50 border-accent-300 text-accent-700'
                          : 'border-slate-200 text-slate-400 hover:text-navy-900'
                      }`}
                      title={isSaved ? 'Saved' : 'Save'}
                    >
                      <Bookmark className="w-3.5 h-3.5 fill-current" />
                    </button>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2 text-slate-500">
                      <span className="font-medium text-slate-700">Source:</span>
                      <a
                        href={update.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-700 hover:underline inline-flex items-center gap-1"
                      >
                        <span>{update.sourceName}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    <button
                      onClick={() => openUpdateBrief(update)}
                      className="px-3 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-navy-800 font-semibold text-xs transition-colors"
                    >
                      Open 11-Point Brief
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Recommended Priority Actions (Triage) */}
          <div className="pt-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-amber-600" />
                <h2 className="text-lg font-bold text-navy-900">
                  {t.dashboard.recommendedActionsTitle}
                </h2>
              </div>
              <button
                onClick={() => setActiveTab('actions')}
                className="text-xs font-semibold text-accent-700 hover:text-accent-800 transition-colors flex items-center gap-1"
              >
                <span>{t.dashboard.viewAllActions}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-2.5">
              {actionTasks.slice(0, 3).map((task) => (
                <div
                  key={task.id}
                  className="p-3.5 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-xs"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          task.priority === 'P1 - High'
                            ? 'bg-rose-50 text-rose-700 border border-rose-200'
                            : 'bg-amber-50 text-amber-700 border border-amber-200'
                        }`}
                      >
                        {task.priority}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-500 font-medium">{task.effort}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-accent-700 font-semibold">ICE: {task.iceScore}</span>
                    </div>
                    <span className="font-semibold text-navy-900 text-sm block">
                      {task.title}
                    </span>
                    <p className="text-slate-600 text-xs mt-0.5 line-clamp-1">
                      {task.problem}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <select
                      value={task.status}
                      onChange={(e) => updateTaskStatus(task.id, e.target.value as any)}
                      className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${
                        task.status === 'Completed'
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : task.status === 'In Progress'
                          ? 'bg-amber-50 text-amber-800 border-amber-200'
                          : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      <option value="Not Started">Not Started</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Roadmap Focus & Official Docs Highlights */}
        <div className="space-y-6">
          
          {/* Priority Learning Roadmap Focus */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent-600" />
                <h3 className="font-bold text-navy-900 text-sm">
                  Upcoming Learning Priority
                </h3>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-accent-100 text-accent-800">
                Module {nextPriorityModule.number}
              </span>
            </div>

            <div>
              <h4 className="text-base font-bold text-navy-900">
                {nextPriorityModule.title}
              </h4>
              <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                {nextPriorityModule.description}
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
              <span className="font-semibold text-slate-700 block text-[11px] uppercase tracking-wider">
                Module Checklist Preview:
              </span>
              {nextPriorityModule.checklist.slice(0, 3).map((item) => (
                <div key={item.id} className="flex items-start gap-2 text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-1.5 shrink-0" />
                  <span className="line-clamp-1">{item.label}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setActiveTab('roadmap')}
              className="w-full py-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>{t.dashboard.viewRoadmap}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Module-by-Module Progress Bars */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-navy-900 text-sm flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-accent-600" />
                <span>{t.dashboard.roadmapOverviewTitle}</span>
              </h3>
              <span className="text-xs font-bold text-accent-700">{roadmapPercent}%</span>
            </div>

            <div className="space-y-2.5 pt-1">
              {ROADMAP_MODULES.map((mod) => {
                const totalModItems = mod.checklist.length;
                const completedInMod = mod.checklist.filter((c) =>
                  completedChecklistIds.includes(c.id)
                ).length;
                const modPercent = Math.round((completedInMod / totalModItems) * 100);

                return (
                  <div key={mod.id} className="space-y-1 text-xs">
                    <div className="flex items-center justify-between text-slate-700">
                      <span className="font-medium truncate max-w-[190px]">
                        M{mod.number}: {mod.title}
                      </span>
                      <span className="text-slate-400 text-[11px]">
                        {completedInMod}/{totalModItems}
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-accent-500 h-full rounded-full transition-all duration-200"
                        style={{ width: `${modPercent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Official Documentation Highlights */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-navy-900 text-sm flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-slate-600" />
                <span>{t.dashboard.docUpdatesTitle}</span>
              </h3>
              <button
                onClick={() => setActiveTab('sources')}
                className="text-xs text-accent-700 hover:underline font-medium"
              >
                All Sources
              </button>
            </div>

            <div className="space-y-2 text-xs">
              {recentDocs.map((doc) => (
                <a
                  key={doc.id}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/60 block transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-navy-900 group-hover:text-accent-700 transition-colors truncate">
                      {doc.title}
                    </span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-slate-700 shrink-0 ml-1" />
                  </div>
                  <span className="text-[11px] text-slate-500 block truncate mt-0.5">
                    {doc.publisher}
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
