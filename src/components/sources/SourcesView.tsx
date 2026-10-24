import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { SOURCES_LIBRARY } from '../../data/sources';
import type { ResourceCategory } from '../../types';
import {
  Search,
  ExternalLink,
  ShieldCheck,
  Tag,
  CheckCircle2
} from 'lucide-react';

const CATEGORIES: ('All' | ResourceCategory)[] = [
  'All',
  'Google Official Documentation',
  'Google Announcements & Blogs',
  'Technical SEO References',
  'AI Search & GEO/AEO',
  'SEO Analytics & Measurement',
  'Advanced SEO Strategy'
];

export const SourcesView: React.FC = () => {
  const { t } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<'All' | ResourceCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSources = useMemo(() => {
    let result = [...SOURCES_LIBRARY];

    if (selectedCategory !== 'All') {
      result = result.filter((s) => s.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.publisher.toLowerCase().includes(q) ||
          s.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    return result;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
          {t.sources.title}
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-3xl">
          {t.sources.subtitle}
        </p>
      </div>

      {/* Search & Category Filter */}
      <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3">
        <div className="relative w-full">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search verified documentation, official guides, or topics..."
            className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-2 text-xs text-navy-900 placeholder-slate-400 focus:bg-white focus:border-accent-500 focus:ring-1 focus:ring-accent-500"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
        </div>

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
                {cat === 'All' ? t.sources.filterAll : cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Count & Assurance */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>
          Showing <strong className="text-navy-900">{filteredSources.length}</strong> official verified sources
        </span>
        <span className="flex items-center gap-1 text-emerald-700 font-medium">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Every resource verified to open its actual destination URL</span>
        </span>
      </div>

      {/* Resource Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredSources.map((item) => (
          <div
            key={item.id}
            className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-all shadow-xs flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-accent-50 text-accent-800 border border-accent-200/60">
                  {item.category}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  <span>Verified</span>
                </span>
              </div>

              <h2 className="text-base font-bold text-navy-900 pt-1">
                {item.title}
              </h2>

              <p className="text-xs text-slate-600 leading-relaxed">
                {item.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-1.5">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 bg-slate-50 text-slate-600 rounded text-[10px] font-medium border border-slate-100 flex items-center gap-1"
                  >
                    <Tag className="w-2.5 h-2.5 text-slate-400" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">
                Publisher: <strong className="text-slate-700">{item.publisher}</strong>
              </span>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <span>{t.sources.openOfficialDoc}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
