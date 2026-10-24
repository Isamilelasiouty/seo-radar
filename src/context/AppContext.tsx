import React, { createContext, useContext, useState, useEffect } from 'react';
import type { SEOUpdate, ActionTask, TaskStatus } from '../types';
import { INITIAL_ACTION_TASKS } from '../data/actionTasks';
import { translations } from '../data/translations';
import type { TranslationStrings } from '../data/translations';

export type NavTab = 'dashboard' | 'updates' | 'roadmap' | 'actions' | 'tracker' | 'sources';

interface AppContextType {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  language: 'en' | 'ar';
  setLanguage: (lang: 'en' | 'ar') => void;
  t: TranslationStrings;
  savedUpdateIds: string[];
  toggleSaveUpdate: (id: string) => void;
  completedChecklistIds: string[];
  toggleChecklist: (id: string) => void;
  actionTasks: ActionTask[];
  addTask: (task: {
    title: string;
    relatedUpdateId?: string;
    relatedUpdateTitle?: string;
    problem: string;
    evidenceRequired: string;
    suggestedSteps: string[];
    priority: ActionTask['priority'];
    effort: ActionTask['effort'];
    impactScore: number;
    confidenceScore: number;
    effortScore: number;
    notes?: string;
  }) => void;
  updateTaskStatus: (id: string, status: TaskStatus) => void;
  updateTaskNotes: (id: string, notes: string) => void;
  deleteTask: (id: string) => void;
  selectedUpdate: SEOUpdate | null;
  openUpdateBrief: (update: SEOUpdate) => void;
  closeUpdateBrief: () => void;
  globalSearch: string;
  setGlobalSearch: (q: string) => void;
  exportData: () => void;
  importData: (jsonStr: string) => boolean;
  resetAllData: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  SAVED_UPDATES: 'seoradar_saved_updates_v1',
  CHECKLIST: 'seoradar_checklist_v1',
  TASKS: 'seoradar_action_tasks_v1',
  LANG: 'seoradar_language_v1'
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<NavTab>('dashboard');
  const [language, setLanguageState] = useState<'en' | 'ar'>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.LANG);
    return saved === 'ar' ? 'ar' : 'en';
  });

  const [savedUpdateIds, setSavedUpdateIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.SAVED_UPDATES);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [completedChecklistIds, setCompletedChecklistIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.CHECKLIST);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [actionTasks, setActionTasks] = useState<ActionTask[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.TASKS);
      return stored ? JSON.parse(stored) : INITIAL_ACTION_TASKS;
    } catch {
      return INITIAL_ACTION_TASKS;
    }
  });

  const [selectedUpdate, setSelectedUpdate] = useState<SEOUpdate | null>(null);
  const [globalSearch, setGlobalSearch] = useState('');

  // Persist saved updates
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SAVED_UPDATES, JSON.stringify(savedUpdateIds));
  }, [savedUpdateIds]);

  // Persist checklist
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CHECKLIST, JSON.stringify(completedChecklistIds));
  }, [completedChecklistIds]);

  // Persist action tasks
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(actionTasks));
  }, [actionTasks]);

  // Language & RTL setup
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.LANG, language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const setLanguage = (lang: 'en' | 'ar') => {
    setLanguageState(lang);
  };

  const toggleSaveUpdate = (id: string) => {
    setSavedUpdateIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleChecklist = (id: string) => {
    setCompletedChecklistIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const addTask = (data: {
    title: string;
    relatedUpdateId?: string;
    relatedUpdateTitle?: string;
    problem: string;
    evidenceRequired: string;
    suggestedSteps: string[];
    priority: ActionTask['priority'];
    effort: ActionTask['effort'];
    impactScore: number;
    confidenceScore: number;
    effortScore: number;
    notes?: string;
  }) => {
    const ice = Number(((data.impactScore * data.confidenceScore) / (data.effortScore || 1)).toFixed(2));
    const newTask: ActionTask = {
      id: `task-custom-${Date.now()}`,
      title: data.title,
      relatedUpdateId: data.relatedUpdateId,
      relatedUpdateTitle: data.relatedUpdateTitle,
      problem: data.problem,
      evidenceRequired: data.evidenceRequired,
      suggestedSteps: data.suggestedSteps,
      priority: data.priority,
      effort: data.effort,
      impactScore: data.impactScore,
      confidenceScore: data.confidenceScore,
      effortScore: data.effortScore,
      iceScore: ice,
      status: 'Not Started',
      notes: data.notes || '',
      isCustom: true,
      createdAt: new Date().toISOString().split('T')[0]
    };
    setActionTasks((prev) => [newTask, ...prev]);
  };

  const updateTaskStatus = (id: string, status: TaskStatus) => {
    setActionTasks((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            status,
            completionDate: status === 'Completed' ? new Date().toISOString().split('T')[0] : undefined
          };
        }
        return t;
      })
    );
  };

  const updateTaskNotes = (id: string, notes: string) => {
    setActionTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, notes } : t))
    );
  };

  const deleteTask = (id: string) => {
    setActionTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const openUpdateBrief = (update: SEOUpdate) => {
    setSelectedUpdate(update);
  };

  const closeUpdateBrief = () => {
    setSelectedUpdate(null);
  };

  const exportData = () => {
    const backup = {
      version: '1.0',
      exportedAt: new Date().toISOString(),
      savedUpdateIds,
      completedChecklistIds,
      actionTasks
    };
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seo-radar-progress-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importData = (jsonStr: string): boolean => {
    try {
      const data = JSON.parse(jsonStr);
      if (Array.isArray(data.savedUpdateIds)) setSavedUpdateIds(data.savedUpdateIds);
      if (Array.isArray(data.completedChecklistIds)) setCompletedChecklistIds(data.completedChecklistIds);
      if (Array.isArray(data.actionTasks)) setActionTasks(data.actionTasks);
      return true;
    } catch (e) {
      console.error('Failed to import backup JSON', e);
      return false;
    }
  };

  const resetAllData = () => {
    if (window.confirm('Are you sure you want to reset all progress, tasks, and saved articles?')) {
      localStorage.removeItem(STORAGE_KEYS.SAVED_UPDATES);
      localStorage.removeItem(STORAGE_KEYS.CHECKLIST);
      localStorage.removeItem(STORAGE_KEYS.TASKS);
      setSavedUpdateIds([]);
      setCompletedChecklistIds([]);
      setActionTasks(INITIAL_ACTION_TASKS);
    }
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        language,
        setLanguage,
        t: translations[language],
        savedUpdateIds,
        toggleSaveUpdate,
        completedChecklistIds,
        toggleChecklist,
        actionTasks,
        addTask,
        updateTaskStatus,
        updateTaskNotes,
        deleteTask,
        selectedUpdate,
        openUpdateBrief,
        closeUpdateBrief,
        globalSearch,
        setGlobalSearch,
        exportData,
        importData,
        resetAllData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
