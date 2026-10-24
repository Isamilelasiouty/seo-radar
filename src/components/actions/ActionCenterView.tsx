import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import type { ActionTask, TaskStatus, TaskPriority, TaskEffort } from '../../types';
import {
  CheckSquare,
  PlusCircle,
  Search,
  AlertCircle,
  Clock,
  TrendingUp,
  FileEdit,
  Trash2,
  CheckCircle2,
  Save,
  X
} from 'lucide-react';

export const ActionCenterView: React.FC = () => {
  const { t, actionTasks, addTask, updateTaskStatus, updateTaskNotes, deleteTask } = useApp();

  const [statusFilter, setStatusFilter] = useState<'All' | TaskStatus>('All');
  const [priorityFilter, setPriorityFilter] = useState<'All' | TaskPriority>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingNotesId, setEditingNotesId] = useState<string | null>(null);
  const [notesBuffer, setNotesBuffer] = useState('');

  // Create Custom Task Modal State
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newProblem, setNewProblem] = useState('');
  const [newEvidence, setNewEvidence] = useState('');
  const [newSteps, setNewSteps] = useState('');
  const [newPriority, setNewPriority] = useState<TaskPriority>('P1 - High');
  const [newEffort, setNewEffort] = useState<TaskEffort>('Medium (2-8h)');
  const [newImpact, setNewImpact] = useState(4);
  const [newConfidence, setNewConfidence] = useState(4);
  const [newEffortScore, setNewEffortScore] = useState(3);

  const filteredTasks = useMemo(() => {
    let result = [...actionTasks];

    if (statusFilter !== 'All') {
      result = result.filter((t) => t.status === statusFilter);
    }

    if (priorityFilter !== 'All') {
      result = result.filter((t) => t.priority === priorityFilter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.problem.toLowerCase().includes(q) ||
          (t.relatedUpdateTitle && t.relatedUpdateTitle.toLowerCase().includes(q)) ||
          t.notes.toLowerCase().includes(q)
      );
    }

    return result;
  }, [actionTasks, statusFilter, priorityFilter, searchQuery]);

  const handleStartEditNotes = (task: ActionTask) => {
    setEditingNotesId(task.id);
    setNotesBuffer(task.notes || '');
  };

  const handleSaveNotes = (id: string) => {
    updateTaskNotes(id, notesBuffer);
    setEditingNotesId(null);
  };

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    addTask({
      title: newTitle,
      problem: newProblem || 'Hypothesis under investigation.',
      evidenceRequired: newEvidence || 'GSC performance data and live URL inspections.',
      suggestedSteps: newSteps
        .split('\n')
        .map((s) => s.trim())
        .filter(Boolean),
      priority: newPriority,
      effort: newEffort,
      impactScore: Number(newImpact),
      confidenceScore: Number(newConfidence),
      effortScore: Number(newEffortScore)
    });

    // Reset form
    setNewTitle('');
    setNewProblem('');
    setNewEvidence('');
    setNewSteps('');
    setShowCreateModal(false);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
            {t.actions.title}
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-3xl">
            {t.actions.subtitle}
          </p>
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          className="self-start sm:self-auto px-4 py-2 rounded-xl bg-accent-600 hover:bg-accent-700 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
        >
          <PlusCircle className="w-4 h-4" />
          <span>{t.actions.createNewTask}</span>
        </button>
      </div>

      {/* Mandatory Hypothesis Disclaimer */}
      <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start gap-3 text-xs text-amber-950">
        <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="space-y-0.5 leading-relaxed">
          <strong className="font-bold text-amber-900 block">Scientific SEO Methodology:</strong>
          <span>{t.actions.disclaimer}</span>
        </div>
      </div>

      {/* Filters and Search Bar */}
      <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center gap-3">
        
        {/* Search Input */}
        <div className="relative w-full md:flex-1">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.actions.searchTasks}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-1.5 text-xs text-navy-900 placeholder-slate-400 focus:bg-white focus:border-accent-500 focus:ring-1 focus:ring-accent-500"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2" />
        </div>

        {/* Status Filter Tabs */}
        <div className="flex items-center gap-1 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          {(['All', 'Not Started', 'In Progress', 'Completed'] as const).map((st) => {
            const isSelected = statusFilter === st;
            return (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  isSelected
                    ? 'bg-navy-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-navy-900'
                }`}
              >
                {st === 'All'
                  ? t.actions.filterAll
                  : st === 'Not Started'
                  ? t.actions.filterNotStarted
                  : st === 'In Progress'
                  ? t.actions.filterInProgress
                  : t.actions.filterCompleted}
              </button>
            );
          })}
        </div>

        {/* Priority Filter */}
        <div className="w-full md:w-auto">
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value as any)}
            className="w-full md:w-auto px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 focus:outline-none"
          >
            <option value="All">All Priorities</option>
            <option value="P1 - High">P1 - High</option>
            <option value="P2 - Medium">P2 - Medium</option>
            <option value="P3 - Low">P3 - Low</option>
          </select>
        </div>

      </div>

      {/* Action Task Cards */}
      {filteredTasks.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
          <CheckSquare className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-navy-900 mb-1">{t.actions.noTasks}</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            No tasks match the active filters. Create a new custom task or adjust your search filter.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredTasks.map((task) => {
            const isEditingNotes = editingNotesId === task.id;

            return (
              <div
                key={task.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-all p-5 shadow-xs space-y-4"
              >
                {/* Task Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`px-2.5 py-0.5 rounded text-[11px] font-bold ${
                          task.priority === 'P1 - High'
                            ? 'bg-rose-100 text-rose-800'
                            : task.priority === 'P2 - Medium'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {task.priority}
                      </span>

                      <span className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>{task.effort}</span>
                      </span>

                      {/* ICE Score Pill */}
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-accent-50 text-accent-800 border border-accent-200/80 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-accent-600" />
                        <span>ICE Score: {task.iceScore}</span>
                      </span>

                      {task.relatedUpdateTitle && (
                        <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-50 text-slate-600 border border-slate-200 truncate max-w-xs">
                          Update: {task.relatedUpdateTitle}
                        </span>
                      )}
                    </div>

                    <h2 className="text-base sm:text-lg font-bold text-navy-900 pt-1">
                      {task.title}
                    </h2>
                  </div>

                  {/* Status Dropdown & Delete */}
                  <div className="flex items-center gap-2 self-start">
                    <select
                      value={task.status}
                      onChange={(e) => updateTaskStatus(task.id, e.target.value as any)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold border transition-colors ${
                        task.status === 'Completed'
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                          : task.status === 'In Progress'
                          ? 'bg-amber-50 text-amber-800 border-amber-300'
                          : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      <option value="Not Started">Not Started</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>

                    <button
                      onClick={() => deleteTask(task.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                      title="Delete Task"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Problem & Evidence Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="font-bold text-navy-900 block mb-1 uppercase tracking-wider text-[10px]">
                      {t.actions.problem}
                    </span>
                    <p className="text-slate-700 leading-relaxed">{task.problem}</p>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="font-bold text-navy-900 block mb-1 uppercase tracking-wider text-[10px]">
                      {t.actions.evidence}
                    </span>
                    <p className="text-slate-700 leading-relaxed">{task.evidenceRequired}</p>
                  </div>
                </div>

                {/* Suggested Steps */}
                {task.suggestedSteps && task.suggestedSteps.length > 0 && (
                  <div>
                    <span className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-2 block">
                      {t.actions.steps}
                    </span>
                    <div className="space-y-1.5 text-xs">
                      {task.suggestedSteps.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-slate-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-600 mt-0.5 shrink-0" />
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Notes & Findings Area */}
                <div className="p-3.5 bg-slate-50/60 rounded-xl border border-slate-200 text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-navy-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                      <FileEdit className="w-3.5 h-3.5 text-slate-500" />
                      <span>{t.actions.notes}</span>
                    </span>
                    {!isEditingNotes && (
                      <button
                        onClick={() => handleStartEditNotes(task)}
                        className="text-xs font-semibold text-accent-700 hover:underline"
                      >
                        Edit Notes
                      </button>
                    )}
                  </div>

                  {isEditingNotes ? (
                    <div className="space-y-2">
                      <textarea
                        value={notesBuffer}
                        onChange={(e) => setNotesBuffer(e.target.value)}
                        rows={3}
                        placeholder="Log GSC observations, dates, URLs, or action outcomes..."
                        className="w-full p-2.5 bg-white border border-slate-300 rounded-lg text-xs text-navy-900 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 font-sans leading-relaxed"
                      />
                      <div className="flex items-center gap-2 justify-end">
                        <button
                          onClick={() => setEditingNotesId(null)}
                          className="px-3 py-1 rounded-md text-xs font-medium text-slate-600 hover:bg-slate-200"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => handleSaveNotes(task.id)}
                          className="px-3 py-1 rounded-md bg-accent-600 hover:bg-accent-700 text-white text-xs font-semibold flex items-center gap-1"
                        >
                          <Save className="w-3 h-3" />
                          <span>{t.actions.saveNotes}</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-slate-700 leading-relaxed italic">
                      {task.notes || 'No notes added yet. Click "Edit Notes" to record your investigation findings.'}
                    </p>
                  )}

                  {task.completionDate && (
                    <div className="pt-2 text-[11px] text-emerald-800 font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Completed on {task.completionDate}</span>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      )}

      {/* Create Custom Task Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 bg-navy-950/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-navy-900">
                Create Custom SEO Action Task
              </h3>
              <button
                onClick={() => setShowCreateModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-navy-900"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">
                  Task Title *
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Audit faceted category URLs for canonical loops"
                  className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-navy-900 focus:bg-white focus:border-accent-500"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">
                  Problem / Hypothesis Being Investigated
                </label>
                <textarea
                  rows={2}
                  value={newProblem}
                  onChange={(e) => setNewProblem(e.target.value)}
                  placeholder="What traffic or indexing anomaly was observed?"
                  className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-navy-900 focus:bg-white focus:border-accent-500"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">
                  Evidence Required
                </label>
                <input
                  type="text"
                  value={newEvidence}
                  onChange={(e) => setNewEvidence(e.target.value)}
                  placeholder="e.g. GSC Search Performance report, Server access logs, URL Inspection"
                  className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-navy-900 focus:bg-white focus:border-accent-500"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">
                  Suggested Steps (One step per line)
                </label>
                <textarea
                  rows={3}
                  value={newSteps}
                  onChange={(e) => setNewSteps(e.target.value)}
                  placeholder="Step 1: Check GSC Performance&#10;Step 2: Compare pre/post drop queries&#10;Step 3: Document findings"
                  className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-navy-900 focus:bg-white focus:border-accent-500 font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">
                    Priority
                  </label>
                  <select
                    value={newPriority}
                    onChange={(e) => setNewPriority(e.target.value as any)}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-navy-900"
                  >
                    <option value="P1 - High">P1 - High</option>
                    <option value="P2 - Medium">P2 - Medium</option>
                    <option value="P3 - Low">P3 - Low</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">
                    Effort Estimation
                  </label>
                  <select
                    value={newEffort}
                    onChange={(e) => setNewEffort(e.target.value as any)}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-navy-900"
                  >
                    <option value="Quick Win (<2h)">Quick Win (&lt;2h)</option>
                    <option value="Medium (2-8h)">Medium (2-8h)</option>
                    <option value="Deep Dive (>1d)">Deep Dive (&gt;1d)</option>
                  </select>
                </div>
              </div>

              {/* ICE Scoring Inputs */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <span className="font-bold text-navy-900 block text-[11px] uppercase tracking-wider">
                  ICE Prioritization Model (1 = Low, 5 = High)
                </span>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <label className="block text-[11px] text-slate-500 mb-1">Impact (1-5)</label>
                    <input
                      type="number"
                      min={1}
                      max={5}
                      value={newImpact}
                      onChange={(e) => setNewImpact(Number(e.target.value))}
                      className="w-full p-1.5 bg-white border border-slate-200 rounded text-center font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-500 mb-1">Confidence (1-5)</label>
                    <input
                      type="number"
                      min={1}
                      max={5}
                      value={newConfidence}
                      onChange={(e) => setNewConfidence(Number(e.target.value))}
                      className="w-full p-1.5 bg-white border border-slate-200 rounded text-center font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-500 mb-1">Effort Score (1-5)</label>
                    <input
                      type="number"
                      min={1}
                      max={5}
                      value={newEffortScore}
                      onChange={(e) => setNewEffortScore(Number(e.target.value))}
                      className="w-full p-1.5 bg-white border border-slate-200 rounded text-center font-bold"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-accent-600 hover:bg-accent-700 text-white text-xs font-semibold"
                >
                  Save Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
