import React from 'react';
import { useApp } from '../../context/AppContext';
import type { NavTab } from '../../context/AppContext';
import { SEO_UPDATES } from '../../data/updates';
import { ROADMAP_MODULES } from '../../data/roadmap';
import {
  LayoutDashboard,
  Radio,
  Map,
  CheckSquare,
  BarChart3,
  BookOpen,
  X,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ mobileOpen, onCloseMobile }) => {
  const { activeTab, setActiveTab, t, actionTasks, completedChecklistIds, savedUpdateIds } = useApp();

  const totalChecklist = ROADMAP_MODULES.reduce((acc, m) => acc + m.checklist.length, 0);
  const roadmapPercent = Math.round((completedChecklistIds.length / totalChecklist) * 100) || 0;
  const activeTasksCount = actionTasks.filter((t) => t.status !== 'Completed').length;

  const navItems: { tab: NavTab; label: string; icon: React.ReactNode; badge?: string | number; badgeColor?: string }[] = [
    {
      tab: 'dashboard',
      label: t.nav.dashboard,
      icon: <LayoutDashboard className="w-4 h-4" />
    },
    {
      tab: 'updates',
      label: t.nav.updates,
      icon: <Radio className="w-4 h-4" />,
      badge: SEO_UPDATES.length,
      badgeColor: 'bg-emerald-100 text-emerald-800'
    },
    {
      tab: 'roadmap',
      label: t.nav.roadmap,
      icon: <Map className="w-4 h-4" />,
      badge: `${roadmapPercent}%`,
      badgeColor: 'bg-accent-100 text-accent-800'
    },
    {
      tab: 'actions',
      label: t.nav.actions,
      icon: <CheckSquare className="w-4 h-4" />,
      badge: activeTasksCount,
      badgeColor: activeTasksCount > 0 ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-600'
    },
    {
      tab: 'tracker',
      label: t.nav.tracker,
      icon: <BarChart3 className="w-4 h-4" />,
      badge: savedUpdateIds.length > 0 ? savedUpdateIds.length : undefined,
      badgeColor: 'bg-blue-100 text-blue-800'
    },
    {
      tab: 'sources',
      label: t.nav.sources,
      icon: <BookOpen className="w-4 h-4" />
    }
  ];

  const handleSelectTab = (tab: NavTab) => {
    setActiveTab(tab);
    onCloseMobile();
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-navy-950/40 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-white border-r border-slate-200 flex flex-col transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="h-16 px-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center text-accent-600 font-bold text-sm">
              SR
            </div>
            <span className="font-semibold text-navy-900 text-sm tracking-tight">
              Navigation Menu
            </span>
          </div>
          <button
            onClick={onCloseMobile}
            className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = activeTab === item.tab;
            return (
              <button
                key={item.tab}
                onClick={() => handleSelectTab(item.tab)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all group ${
                  isActive
                    ? 'bg-accent-50 text-accent-800 border border-accent-200/60 shadow-xs'
                    : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`transition-colors ${
                      isActive ? 'text-accent-600' : 'text-slate-400 group-hover:text-slate-600'
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
                {item.badge !== undefined && (
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-semibold ${item.badgeColor || 'bg-slate-100 text-slate-700'}`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Google Status Quick Card */}
        <div className="p-3 mx-3 mb-3 bg-slate-50 border border-slate-200 rounded-xl">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Google Search Status
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
          </div>
          <p className="text-xs text-navy-800 font-medium leading-relaxed">
            All ranking & crawling systems operational.
          </p>
          <a
            href="https://status.search.google.com/summary"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-accent-700 hover:text-accent-800 transition-colors"
          >
            <span>Live Incident Dashboard</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
          <span className="text-[11px]">v1.0.0 • Production</span>
          <span className="inline-flex items-center gap-1 text-[11px] text-slate-400">
            <span>Verified Hub</span>
            <ChevronRight className="w-3 h-3" />
          </span>
        </div>
      </aside>
    </>
  );
};
