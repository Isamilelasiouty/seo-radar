import React, { useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { SEO_UPDATES } from '../../data/updates';
import { ROADMAP_MODULES } from '../../data/roadmap';
import {
  BarChart3,
  Bookmark,
  CheckSquare,
  Download,
  Upload,
  RotateCcw,
  AlertCircle,
  Trash2,
  CheckCircle2,
  FileText
} from 'lucide-react';

export const TrackerView: React.FC = () => {
  const {
    t,
    savedUpdateIds,
    toggleSaveUpdate,
    openUpdateBrief,
    completedChecklistIds,
    actionTasks,
    updateTaskStatus,
    exportData,
    importData,
    resetAllData,
    setActiveTab
  } = useApp();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const totalChecklist = ROADMAP_MODULES.reduce((acc, m) => acc + m.checklist.length, 0);
  const completedSkills = completedChecklistIds.length;
  const overallPercent = Math.round((completedSkills / totalChecklist) * 100) || 0;

  const savedUpdates = SEO_UPDATES.filter((u) => savedUpdateIds.includes(u.id));
  const pendingTasks = actionTasks.filter((t) => t.status !== 'Completed');
  const completedTasks = actionTasks.filter((t) => t.status === 'Completed');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const success = importData(content);
      if (success) {
        alert('Data imported successfully!');
      } else {
        alert('Failed to parse backup JSON file.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
          {t.tracker.title}
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-3xl">
          {t.tracker.subtitle}
        </p>
      </div>

      {/* Local Storage Transparency Notice */}
      <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 flex items-start gap-3 text-xs text-blue-950">
        <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <div className="space-y-0.5 leading-relaxed">
          <strong className="font-bold text-blue-900 block">Browser Storage Notice:</strong>
          <span>{t.tracker.storageNotice}</span>
        </div>
      </div>

      {/* KPI Overview Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
            {t.tracker.statsOverall}
          </span>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-navy-900">{overallPercent}%</span>
            <span className="text-xs text-accent-700 font-semibold">Verified</span>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
            <div
              className="bg-accent-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${overallPercent}%` }}
            />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
            {t.tracker.statsChecklist}
          </span>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-navy-900">{completedSkills}</span>
            <span className="text-xs text-slate-500">/ {totalChecklist} validated</span>
          </div>
          <span className="text-xs text-slate-500 mt-1 block">
            Core competence checkpoints
          </span>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
            {t.tracker.statsTasks}
          </span>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-navy-900">{completedTasks.length}</span>
            <span className="text-xs text-slate-500">
              ({pendingTasks.length} pending)
            </span>
          </div>
          <span className="text-xs text-slate-500 mt-1 block">
            Action items completed
          </span>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
            {t.tracker.statsSaved}
          </span>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-navy-900">{savedUpdates.length}</span>
            <span className="text-xs text-slate-500">briefs</span>
          </div>
          <span className="text-xs text-slate-500 mt-1 block">
            Saved for quick lookup
          </span>
        </div>

      </div>

      {/* Module Breakdown Grid */}
      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
        <h2 className="text-base font-bold text-navy-900 flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-accent-600" />
          <span>{t.tracker.moduleProgress}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ROADMAP_MODULES.map((mod) => {
            const totalModItems = mod.checklist.length;
            const completedInMod = mod.checklist.filter((c) =>
              completedChecklistIds.includes(c.id)
            ).length;
            const modPercent = Math.round((completedInMod / totalModItems) * 100);

            return (
              <div
                key={mod.id}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white text-navy-900 border border-slate-200">
                    Module {mod.number}
                  </span>
                  <span className="font-bold text-navy-900">{modPercent}%</span>
                </div>

                <div>
                  <span className="font-semibold text-navy-900 block truncate">
                    {mod.title}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {completedInMod} of {totalModItems} skills completed
                  </span>
                </div>

                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      modPercent === 100 ? 'bg-emerald-500' : 'bg-accent-500'
                    }`}
                    style={{ width: `${modPercent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Two columns: Saved Articles & Pending Action Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Saved Articles */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-navy-900 flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-accent-600" />
              <span>{t.tracker.savedArticlesTitle}</span>
            </h2>
            <span className="text-xs text-slate-500 font-medium">
              {savedUpdates.length} Saved
            </span>
          </div>

          {savedUpdates.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-500 bg-slate-50 rounded-xl border border-dashed border-slate-200">
              <Bookmark className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <p>{t.tracker.noSavedArticles}</p>
              <button
                onClick={() => setActiveTab('updates')}
                className="mt-3 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-navy-900 font-semibold text-xs hover:bg-slate-100"
              >
                Browse Updates
              </button>
            </div>
          ) : (
            <div className="space-y-2.5">
              {savedUpdates.map((update) => (
                <div
                  key={update.id}
                  className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start justify-between gap-3 text-xs"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-semibold text-accent-800 bg-accent-100 px-1.5 py-0.5 rounded">
                        {update.category}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-500">{update.date}</span>
                    </div>
                    <span
                      onClick={() => openUpdateBrief(update)}
                      className="font-bold text-navy-900 hover:text-accent-700 cursor-pointer block"
                    >
                      {update.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => openUpdateBrief(update)}
                      className="p-1.5 rounded text-slate-500 hover:text-navy-900 hover:bg-slate-200"
                      title="Open Brief"
                    >
                      <FileText className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => toggleSaveUpdate(update.id)}
                      className="p-1.5 rounded text-rose-500 hover:bg-rose-50"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Pending Action Tasks */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-navy-900 flex items-center gap-2">
              <CheckSquare className="w-4 h-4 text-amber-600" />
              <span>{t.tracker.pendingTasksTitle}</span>
            </h2>
            <button
              onClick={() => setActiveTab('actions')}
              className="text-xs text-accent-700 font-semibold hover:underline"
            >
              Action Center
            </button>
          </div>

          {pendingTasks.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-500 bg-slate-50 rounded-xl border border-dashed border-slate-200">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
              <p>{t.tracker.noPendingTasks}</p>
            </div>
          ) : (
            <div className="space-y-2.5">
              {pendingTasks.map((task) => (
                <div
                  key={task.id}
                  className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start justify-between gap-3 text-xs"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                          task.priority === 'P1 - High'
                            ? 'bg-rose-100 text-rose-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {task.priority}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-500">{task.effort}</span>
                    </div>
                    <span className="font-semibold text-navy-900 block">
                      {task.title}
                    </span>
                  </div>

                  <button
                    onClick={() => updateTaskStatus(task.id, 'Completed')}
                    className="px-2.5 py-1 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-[11px] shrink-0"
                  >
                    Mark Done
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Data Management (Export, Import, Reset) */}
      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-navy-900 text-sm">
            Data Backup & Migration
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Export your verified progress JSON to back up or transfer between devices.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept=".json"
            className="hidden"
          />

          <button
            onClick={exportData}
            className="px-3.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span>{t.tracker.exportData}</span>
          </button>

          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-3.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors flex items-center gap-1.5"
          >
            <Upload className="w-3.5 h-3.5 text-slate-500" />
            <span>{t.tracker.importData}</span>
          </button>

          <button
            onClick={resetAllData}
            className="px-3.5 py-1.5 rounded-lg border border-rose-200 bg-rose-50/50 hover:bg-rose-100 text-rose-700 font-semibold text-xs transition-colors flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t.tracker.resetData}</span>
          </button>
        </div>
      </div>

    </div>
  );
};
