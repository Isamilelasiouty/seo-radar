import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ROADMAP_MODULES } from '../../data/roadmap';
import {
  CheckCircle2,
  Circle,
  ExternalLink,
  BookOpen,
  Clock,
  Layers,
  ChevronDown,
  ChevronUp,
  Award,
  Sparkles
} from 'lucide-react';

export const RoadmapView: React.FC = () => {
  const { t, completedChecklistIds, toggleChecklist } = useApp();
  const [expandedModules, setExpandedModules] = useState<string[]>(['module-1-seo-foundations', 'module-5-ai-search-geo-aeo']);

  const totalChecklist = ROADMAP_MODULES.reduce((acc, m) => acc + m.checklist.length, 0);
  const totalCompleted = completedChecklistIds.length;
  const overallPercent = Math.round((totalCompleted / totalChecklist) * 100) || 0;

  const toggleExpand = (modId: string) => {
    setExpandedModules((prev) =>
      prev.includes(modId) ? prev.filter((id) => id !== modId) : [...prev, modId]
    );
  };

  const expandAll = () => {
    setExpandedModules(ROADMAP_MODULES.map((m) => m.id));
  };

  const collapseAll = () => {
    setExpandedModules([]);
  };

  return (
    <div className="space-y-6">
      
      {/* Title & Progress Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
            {t.roadmap.title}
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-3xl">
            {t.roadmap.subtitle}
          </p>
        </div>

        {/* Global Progress Widget */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center gap-4 min-w-[280px]">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-slate-100"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-accent-500 transition-all duration-300"
                strokeDasharray={`${overallPercent}, 100`}
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span className="absolute text-xs font-bold text-navy-900">
              {overallPercent}%
            </span>
          </div>
          <div>
            <span className="text-xs font-bold text-navy-900 block">
              {t.roadmap.progressOverall}
            </span>
            <span className="text-xs text-slate-500">
              {totalCompleted} of {totalChecklist} competencies validated
            </span>
          </div>
        </div>
      </div>

      {/* Expand/Collapse Controls */}
      <div className="flex items-center justify-between text-xs text-slate-600 px-1">
        <span className="font-semibold text-slate-700">
          {t.roadmap.modulesCount}
        </span>
        <div className="flex items-center gap-3">
          <button
            onClick={expandAll}
            className="hover:text-navy-900 font-medium text-accent-700"
          >
            Expand All
          </button>
          <span>•</span>
          <button
            onClick={collapseAll}
            className="hover:text-navy-900 font-medium text-slate-500"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Modules Accordion List */}
      <div className="space-y-4">
        {ROADMAP_MODULES.map((module) => {
          const isExpanded = expandedModules.includes(module.id);
          const totalModItems = module.checklist.length;
          const completedInMod = module.checklist.filter((c) =>
            completedChecklistIds.includes(c.id)
          ).length;
          const modPercent = Math.round((completedInMod / totalModItems) * 100);
          const isComplete = modPercent === 100;

          return (
            <div
              key={module.id}
              className={`rounded-2xl border transition-all overflow-hidden ${
                isComplete
                  ? 'bg-emerald-50/20 border-emerald-200'
                  : isExpanded
                  ? 'bg-white border-slate-300 shadow-sm'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
              }`}
            >
              {/* Module Header Card */}
              <div
                onClick={() => toggleExpand(module.id)}
                className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                      isComplete
                        ? 'bg-emerald-500 text-white'
                        : 'bg-accent-50 text-accent-800 border border-accent-200'
                    }`}
                  >
                    {isComplete ? <CheckCircle2 className="w-5 h-5" /> : `0${module.number}`}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Module {module.number}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          module.level === 'Foundational'
                            ? 'bg-blue-50 text-blue-700'
                            : module.level === 'Intermediate'
                            ? 'bg-amber-50 text-amber-700'
                            : 'bg-purple-50 text-purple-700'
                        }`}
                      >
                        {module.level}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>~{module.estimatedHours}h Study Time</span>
                      </span>
                    </div>

                    <h2 className="text-base sm:text-lg font-bold text-navy-900">
                      {module.title}
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {module.subtitle}
                    </p>
                  </div>
                </div>

                {/* Progress bar & Toggle */}
                <div className="flex items-center gap-5 self-end md:self-auto shrink-0">
                  <div className="w-36 text-right">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-slate-500 font-medium">Progress</span>
                      <span className="font-bold text-navy-900">{modPercent}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          isComplete ? 'bg-emerald-500' : 'bg-accent-500'
                        }`}
                        style={{ width: `${modPercent}%` }}
                      />
                    </div>
                  </div>

                  <div className="p-1.5 rounded-lg text-slate-400 hover:text-navy-900 hover:bg-slate-100 transition-colors">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>
              </div>

              {/* Module Expanded Details */}
              {isExpanded && (
                <div className="px-5 pb-6 pt-2 border-t border-slate-100 space-y-6">
                  
                  {/* Module Description */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                    {module.description}
                  </p>

                  {/* Core Learning Objectives */}
                  <div>
                    <h3 className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-accent-600" />
                      <span>{t.roadmap.learningObjectives}</span>
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                      {module.learningObjectives.map((obj, idx) => (
                        <li
                          key={idx}
                          className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-800 flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-1.5 shrink-0" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Documentation & Recommended Articles */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* Official Docs */}
                    <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2.5">
                      <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{t.roadmap.officialDocs}</span>
                      </h4>
                      <div className="space-y-2 text-xs">
                        {module.officialDocs.map((doc, idx) => (
                          <a
                            key={idx}
                            href={doc.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-colors group"
                          >
                            <div className="flex items-center justify-between font-semibold text-navy-900 group-hover:text-accent-700">
                              <span>{doc.title}</span>
                              <ExternalLink className="w-3 h-3 text-slate-400 shrink-0" />
                            </div>
                            <span className="text-[11px] text-slate-500 block mt-0.5">
                              {doc.description}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Recommended Technical Reading */}
                    <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2.5">
                      <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-purple-600" />
                        <span>{t.roadmap.recommendedReading}</span>
                      </h4>
                      <div className="space-y-2 text-xs">
                        {module.recommendedArticles.map((art, idx) => (
                          <a
                            key={idx}
                            href={art.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-colors group"
                          >
                            <div className="flex items-center justify-between font-semibold text-navy-900 group-hover:text-accent-700">
                              <span>{art.title}</span>
                              <ExternalLink className="w-3 h-3 text-slate-400 shrink-0" />
                            </div>
                            <span className="text-[11px] text-slate-500 block mt-0.5">
                              By {art.author} • {art.description}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Practical Exercises */}
                  <div>
                    <h3 className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-600" />
                      <span>{t.roadmap.practicalExercises}</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      {module.practicalExercises.map((ex) => (
                        <div
                          key={ex.id}
                          className="p-3.5 rounded-xl bg-amber-50/40 border border-amber-200/70 space-y-1.5"
                        >
                          <span className="font-bold text-amber-950 block text-xs">
                            {ex.title}
                          </span>
                          <p className="text-slate-700 text-xs">{ex.task}</p>
                          <div className="pt-1.5 border-t border-amber-200/60 text-[11px] text-amber-900 font-medium">
                            <strong>Deliverable:</strong> {ex.deliverable}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Competency Checklist with Checkboxes */}
                  <div className="pt-2">
                    <h3 className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-2.5 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-600" />
                        <span>{t.roadmap.checklistTitle}</span>
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500">
                        {completedInMod}/{totalModItems} Completed
                      </span>
                    </h3>

                    <div className="space-y-2">
                      {module.checklist.map((item) => {
                        const isChecked = completedChecklistIds.includes(item.id);
                        return (
                          <div
                            key={item.id}
                            onClick={() => toggleChecklist(item.id)}
                            className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-3 text-xs select-none ${
                              isChecked
                                ? 'bg-emerald-50/60 border-emerald-200 text-emerald-950'
                                : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800'
                            }`}
                          >
                            <div className="mt-0.5 shrink-0">
                              {isChecked ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                              ) : (
                                <Circle className="w-4 h-4 text-slate-300" />
                              )}
                            </div>
                            <div className="flex-1">
                              <span
                                className={`font-semibold block ${
                                  isChecked ? 'line-through text-slate-500' : 'text-navy-900'
                                }`}
                              >
                                {item.label}
                              </span>
                              <span className="text-[11px] text-slate-500 mt-0.5 block">
                                {item.details}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
