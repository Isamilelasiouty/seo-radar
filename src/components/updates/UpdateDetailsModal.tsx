import React, { useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  ExternalLink,
  ShieldCheck,
  Calendar,
  Clock,
  AlertTriangle,
  Search,
  CheckCircle2,
  FileText,
  PlusCircle,
  Bookmark
} from 'lucide-react';

export const UpdateDetailsModal: React.FC = () => {
  const { selectedUpdate, closeUpdateBrief, toggleSaveUpdate, savedUpdateIds, addTask, setActiveTab } = useApp();
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const isSaved = selectedUpdate ? savedUpdateIds.includes(selectedUpdate.id) : false;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedUpdate) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }

    // Fallback for browsers without native closedby support
    const handleBackdropClick = (event: MouseEvent) => {
      if (!('closedBy' in HTMLDialogElement.prototype)) {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const isDialogContent =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;
        if (!isDialogContent) {
          closeUpdateBrief();
        }
      }
    };

    const handleCloseEvent = () => {
      closeUpdateBrief();
    };

    dialog.addEventListener('click', handleBackdropClick);
    dialog.addEventListener('close', handleCloseEvent);

    return () => {
      dialog.removeEventListener('click', handleBackdropClick);
      dialog.removeEventListener('close', handleCloseEvent);
    };
  }, [selectedUpdate, closeUpdateBrief]);

  if (!selectedUpdate) return null;

  const { fullBrief } = selectedUpdate;

  const handleCreateTaskFromUpdate = () => {
    addTask({
      title: `Investigate impact of ${selectedUpdate.shortTitle}`,
      relatedUpdateId: selectedUpdate.id,
      relatedUpdateTitle: selectedUpdate.title,
      problem: selectedUpdate.potentialImpact,
      evidenceRequired: `GSC Search performance and indexing data around ${selectedUpdate.date}`,
      suggestedSteps: fullBrief.gscAnalyticsChecks,
      priority: selectedUpdate.impactLevel === 'Critical' ? 'P1 - High' : 'P2 - Medium',
      effort: 'Medium (2-8h)',
      impactScore: selectedUpdate.impactLevel === 'Critical' ? 5 : 4,
      confidenceScore: 4,
      effortScore: 3,
      notes: `Generated from research brief on ${new Date().toISOString().split('T')[0]}. Recommended action: ${selectedUpdate.recommendedAction}`
    });
    closeUpdateBrief();
    setActiveTab('actions');
  };

  return (
    <dialog
      ref={dialogRef}
      id="updateDetailsDialog"
      {...({ closedby: 'any' } as any)}
      aria-labelledby="dialogTitle"
      className="m-auto rounded-2xl bg-white text-navy-900 shadow-2xl p-0 w-[95vw] max-w-4xl max-h-[90vh] overflow-hidden border border-slate-200"
    >
      {/* Header bar */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent-100 text-accent-800">
              {selectedUpdate.category}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              <span>{selectedUpdate.verificationStatus}</span>
            </span>
            <span
              className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                selectedUpdate.impactLevel === 'Critical'
                  ? 'bg-rose-100 text-rose-800'
                  : selectedUpdate.impactLevel === 'High'
                  ? 'bg-amber-100 text-amber-800'
                  : 'bg-slate-100 text-slate-800'
              }`}
            >
              Impact: {selectedUpdate.impactLevel}
            </span>
          </div>
          <h2 id="dialogTitle" className="text-xl font-bold text-navy-900 tracking-tight">
            {selectedUpdate.title}
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleSaveUpdate(selectedUpdate.id)}
            className={`p-2 rounded-lg border transition-colors ${
              isSaved
                ? 'bg-accent-50 border-accent-300 text-accent-700'
                : 'border-slate-200 text-slate-500 hover:text-navy-900 hover:bg-slate-50'
            }`}
            title={isSaved ? 'Saved in Research' : 'Save Research'}
          >
            <Bookmark className="w-4 h-4 fill-current" />
          </button>

          <button
            onClick={closeUpdateBrief}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Modal Body */}
      <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)] space-y-6">
        
        {/* Key Rollout Timestamps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-slate-400" />
            <div>
              <span className="block text-slate-500 font-medium">Announced</span>
              <span className="font-semibold text-navy-900">{selectedUpdate.announcementDate}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-slate-400" />
            <div>
              <span className="block text-slate-500 font-medium">Rollout Start</span>
              <span className="font-semibold text-navy-900">{selectedUpdate.rolloutStartDate}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <div>
              <span className="block text-slate-500 font-medium">Completion</span>
              <span className="font-semibold text-navy-900">
                {selectedUpdate.rolloutEndDate || 'Ongoing Continuous Signal'}
              </span>
            </div>
          </div>
        </div>

        {/* Section 1 & 4: What Changed vs What Google Officially Confirmed */}
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center text-xs">1</span>
              <span>What Changed?</span>
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed bg-white p-3 rounded-lg border border-slate-200">
              {fullBrief.whatChanged}
            </p>
          </div>

          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4">
            <h3 className="text-sm font-bold text-emerald-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Official Google Confirmation (Verified Statement)</span>
            </h3>
            <blockquote className="text-sm text-emerald-950 italic border-l-4 border-emerald-500 pl-3 my-2">
              {fullBrief.officialConfirmation}
            </blockquote>
            <div className="mt-3 flex items-center justify-between text-xs text-emerald-800">
              <span>Source: {selectedUpdate.sourceName}</span>
              <a
                href={selectedUpdate.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold underline hover:text-emerald-900"
              >
                <span>View Original Source Record</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Section 5: What Remains Uncertain */}
        <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl text-xs">
          <div className="flex items-center gap-2 text-amber-900 font-bold mb-1 uppercase tracking-wider text-xs">
            <AlertTriangle className="w-4 h-4 text-amber-700" />
            <span>What Is Still Uncertain (Unconfirmed by Google)</span>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm">
            {fullBrief.whatIsUncertain}
          </p>
        </div>

        {/* Section 6: Affected Websites */}
        <div>
          <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wider mb-2 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center text-xs">6</span>
            <span>Websites & SEO Activities Most Affected</span>
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {fullBrief.affectedWebsites.map((item, idx) => (
              <li
                key={idx}
                className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 flex items-start gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent-600 mt-1.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 7 & 8: Investigation Method & Search Console Checks */}
        <div className="space-y-3">
          <div>
            <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Search className="w-4 h-4 text-accent-700" />
              <span>How Should an SEO Specialist Investigate?</span>
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed bg-white p-3 rounded-lg border border-slate-200">
              {fullBrief.investigationMethod}
            </p>
          </div>

          <div className="p-4 bg-blue-50/60 border border-blue-200 rounded-xl">
            <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">
              Required Search Console & Analytics Checks
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-800">
              {fullBrief.gscAnalyticsChecks.map((check, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                  <span>{check}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 9: Practical Actions */}
        <div>
          <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wider mb-2 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Practical Actions to Consider</span>
          </h3>
          <div className="space-y-2">
            {fullBrief.practicalActions.map((action, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-emerald-50/40 border border-emerald-200/80 text-xs text-emerald-950 font-medium flex items-start gap-2.5"
              >
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-[11px]">
                  {idx + 1}
                </span>
                <span>{action}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 10: What to Avoid Doing Based on Speculation */}
        <div className="p-4 bg-rose-50/70 border border-rose-200 rounded-xl">
          <h3 className="text-xs font-bold text-rose-900 uppercase tracking-wider mb-2 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            <span>What to Avoid Doing Based on Speculation (Don'ts)</span>
          </h3>
          <ul className="space-y-1.5 text-xs text-rose-950">
            {fullBrief.avoidSpeculation.map((dont, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">✕</span>
                <span>{dont}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 11: Official Sources & Supporting Resources */}
        <div>
          <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wider mb-2 flex items-center gap-2">
            <FileText className="w-4 h-4 text-slate-600" />
            <span>Official Sources & Supporting Documentation</span>
          </h3>
          <div className="space-y-2">
            {fullBrief.supportingResources.map((res, idx) => (
              <div
                key={idx}
                className="p-3 bg-white rounded-lg border border-slate-200 flex items-center justify-between gap-4 text-xs"
              >
                <div>
                  <span className="font-semibold text-navy-900 block">{res.title}</span>
                  <span className="text-slate-500 text-[11px]">{res.note}</span>
                </div>
                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-md bg-slate-100 hover:bg-slate-200 text-navy-800 font-medium inline-flex items-center gap-1 transition-colors shrink-0"
                >
                  <span>Open Resource</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Footer bar */}
      <div className="sticky bottom-0 z-10 bg-slate-50 px-6 py-3.5 border-t border-slate-200 flex items-center justify-between gap-3">
        <div className="text-xs text-slate-500 hidden sm:block">
          Need to investigate this update? Create a trackable task in your Action Center.
        </div>
        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
          <button
            onClick={closeUpdateBrief}
            className="px-4 py-2 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors"
          >
            Close Brief
          </button>
          <button
            onClick={handleCreateTaskFromUpdate}
            className="px-4 py-2 rounded-lg bg-accent-600 hover:bg-accent-700 text-white text-xs font-semibold shadow-sm transition-colors flex items-center gap-1.5"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Create Action Task</span>
          </button>
        </div>
      </div>
    </dialog>
  );
};
