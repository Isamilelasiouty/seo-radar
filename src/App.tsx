import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { DashboardView } from './components/dashboard/DashboardView';
import { UpdatesView } from './components/updates/UpdatesView';
import { RoadmapView } from './components/roadmap/RoadmapView';
import { ActionCenterView } from './components/actions/ActionCenterView';
import { TrackerView } from './components/tracker/TrackerView';
import { SourcesView } from './components/sources/SourcesView';
import { UpdateDetailsModal } from './components/updates/UpdateDetailsModal';

const MainContent: React.FC = () => {
  const { activeTab, language } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen bg-slate-50 flex flex-col ${language === 'ar' ? 'font-sans' : ''}`}>
      {/* Top Header */}
      <Header onToggleMobileMenu={() => setMobileMenuOpen(true)} />

      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Navigation Sidebar */}
        <Sidebar
          mobileOpen={mobileMenuOpen}
          onCloseMobile={() => setMobileMenuOpen(false)}
        />

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 lg:pl-64 p-4 sm:p-6 lg:p-8 transition-all">
          <div className="max-w-5xl mx-auto">
            {activeTab === 'dashboard' && <DashboardView />}
            {activeTab === 'updates' && <UpdatesView />}
            {activeTab === 'roadmap' && <RoadmapView />}
            {activeTab === 'actions' && <ActionCenterView />}
            {activeTab === 'tracker' && <TrackerView />}
            {activeTab === 'sources' && <SourcesView />}
          </div>
        </main>
      </div>

      {/* Global 11-Point Brief Modal Dialog */}
      <UpdateDetailsModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
