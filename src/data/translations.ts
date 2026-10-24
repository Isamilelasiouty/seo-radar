export interface TranslationStrings {
  appName: string;
  tagline: string;
  nav: {
    dashboard: string;
    updates: string;
    roadmap: string;
    actions: string;
    tracker: string;
    sources: string;
  };
  header: {
    statusBadge: string;
    verifiedUpdates: string;
    searchPlaceholder: string;
    language: string;
    sourceCode: string;
  };
  dashboard: {
    title: string;
    subtitle: string;
    statsUpdatesTracked: string;
    statsActiveTasks: string;
    statsRoadmapProgress: string;
    statsSavedItems: string;
    urgentBannerTitle: string;
    urgentBannerDesc: string;
    recentUpdatesTitle: string;
    viewAllUpdates: string;
    recommendedActionsTitle: string;
    viewAllActions: string;
    roadmapOverviewTitle: string;
    viewRoadmap: string;
    docUpdatesTitle: string;
  };
  updates: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    filterAll: string;
    sortByDateDesc: string;
    sortByDateAsc: string;
    sortByImpact: string;
    viewBrief: string;
    saveArticle: string;
    savedArticle: string;
    createTask: string;
    noResults: string;
  };
  roadmap: {
    title: string;
    subtitle: string;
    progressOverall: string;
    modulesCount: string;
    level: string;
    estTime: string;
    learningObjectives: string;
    officialDocs: string;
    recommendedReading: string;
    practicalExercises: string;
    checklistTitle: string;
  };
  actions: {
    title: string;
    subtitle: string;
    createNewTask: string;
    filterAll: string;
    filterNotStarted: string;
    filterInProgress: string;
    filterCompleted: string;
    searchTasks: string;
    disclaimer: string;
    iceScore: string;
    priority: string;
    effort: string;
    problem: string;
    evidence: string;
    steps: string;
    notes: string;
    saveNotes: string;
    noTasks: string;
  };
  tracker: {
    title: string;
    subtitle: string;
    statsOverall: string;
    statsChecklist: string;
    statsTasks: string;
    statsSaved: string;
    moduleProgress: string;
    savedArticlesTitle: string;
    noSavedArticles: string;
    pendingTasksTitle: string;
    noPendingTasks: string;
    storageNotice: string;
    exportData: string;
    importData: string;
    resetData: string;
  };
  sources: {
    title: string;
    subtitle: string;
    filterAll: string;
    openOfficialDoc: string;
    verifiedOfficial: string;
    totalResources: string;
  };
}

export const translations: Record<'en' | 'ar', TranslationStrings> = {
  en: {
    appName: 'SEO Radar',
    tagline: 'Track Search. Understand Changes. Take Action.',
    nav: {
      dashboard: 'Dashboard',
      updates: 'Search Updates',
      roadmap: 'Learning Roadmap',
      actions: 'Action Center',
      tracker: 'Learning Tracker',
      sources: 'Sources Library'
    },
    header: {
      statusBadge: 'Google Search Status: Normal',
      verifiedUpdates: '100% Verified Official Sources',
      searchPlaceholder: 'Search updates, roadmap topics, tasks...',
      language: 'Language',
      sourceCode: 'GitHub Repository'
    },
    dashboard: {
      title: 'SEO Intelligence & Learning Dashboard',
      subtitle: 'Real-time verified Google algorithm updates, technical documentation, and structured learning roadmaps.',
      statsUpdatesTracked: 'Updates Tracked',
      statsActiveTasks: 'Action Tasks',
      statsRoadmapProgress: 'Roadmap Progress',
      statsSavedItems: 'Saved Research',
      urgentBannerTitle: 'Critical Update Notice: September 2026 Spam Update Completed',
      urgentBannerDesc:
        'The global 14-day spam rollout concluded on October 8, 2026. Review high-traffic programmatic pages and check GSC Security & Manual Actions tab.',
      recentUpdatesTitle: 'Latest Verified Google Updates',
      viewAllUpdates: 'View All Updates',
      recommendedActionsTitle: 'Recommended Priority Actions',
      viewAllActions: 'Open Action Center',
      roadmapOverviewTitle: 'Roadmap Mastery Progress',
      viewRoadmap: 'Continue Learning',
      docUpdatesTitle: 'Official Documentation & Standards'
    },
    updates: {
      title: 'SEO News & Algorithm Updates',
      subtitle: 'Curated, fact-checked updates from Google Search Status Dashboard and Google Search Central.',
      searchPlaceholder: 'Search by keyword, algorithm, or impact...',
      filterAll: 'All Categories',
      sortByDateDesc: 'Newest First',
      sortByDateAsc: 'Oldest First',
      sortByImpact: 'Highest Impact',
      viewBrief: 'View 11-Point Brief',
      saveArticle: 'Save Research',
      savedArticle: 'Saved',
      createTask: 'Add to Tasks',
      noResults: 'No updates match your search and filter criteria.'
    },
    roadmap: {
      title: 'Structured SEO Learning Roadmap',
      subtitle: 'From foundational crawling mechanics to AI search (GEO/AEO) and executive SEO strategy.',
      progressOverall: 'Overall Completion',
      modulesCount: '6 Comprehensive Modules',
      level: 'Level',
      estTime: 'Est. Time',
      learningObjectives: 'Core Learning Objectives',
      officialDocs: 'Official Google Documentation',
      recommendedReading: 'Recommended Technical Articles',
      practicalExercises: 'Practical Hands-on Exercises',
      checklistTitle: 'Competency Checklist'
    },
    actions: {
      title: 'Practical SEO Action Center',
      subtitle: 'Translate confirmed search updates into systematic investigation workflows and hypotheses.',
      createNewTask: 'Create Custom Task',
      filterAll: 'All Statuses',
      filterNotStarted: 'Not Started',
      filterInProgress: 'In Progress',
      filterCompleted: 'Completed',
      searchTasks: 'Search action tasks...',
      disclaimer:
        'Notice: Recommendations are hypotheses to investigate systematically, not guaranteed fixes. Always verify causation using Google Search Console before making changes.',
      iceScore: 'ICE Score',
      priority: 'Priority',
      effort: 'Effort',
      problem: 'Problem Under Investigation',
      evidence: 'Evidence Required',
      steps: 'Suggested Investigation Steps',
      notes: 'Investigator Notes & Findings',
      saveNotes: 'Save Notes',
      noTasks: 'No action tasks found.'
    },
    tracker: {
      title: 'Personal Learning & Action Tracker',
      subtitle: 'Track your roadmap competency checklist, monitor action tasks, and manage saved research.',
      statsOverall: 'Roadmap Progress',
      statsChecklist: 'Checklist Items Done',
      statsTasks: 'Tasks Completed',
      statsSaved: 'Saved Articles',
      moduleProgress: 'Progress by Module',
      savedArticlesTitle: 'Saved Research & Updates',
      noSavedArticles: 'You have not saved any research briefs yet. Click the bookmark icon on any update to save it.',
      pendingTasksTitle: 'Active Priority Tasks',
      noPendingTasks: 'All action tasks are completed! Create a new custom task or continue roadmap modules.',
      storageNotice:
        'Storage Information: Progress is stored locally in your browser storage (LocalStorage). It does not automatically synchronize between separate devices.',
      exportData: 'Export Progress (JSON)',
      importData: 'Import Progress',
      resetData: 'Reset Progress'
    },
    sources: {
      title: 'Verified Sources & Standards Library',
      subtitle: 'Direct links to official Google Search documentation, developer guidelines, and industry references.',
      filterAll: 'All Sources',
      openOfficialDoc: 'Open Official Source',
      verifiedOfficial: 'Official Verified Source',
      totalResources: 'Verified Sources Available'
    }
  },
  ar: {
    appName: 'سيو رادار (SEO Radar)',
    tagline: 'تتبّع البحث. افهم التغييرات. اتخذ الإجراء المناسب.',
    nav: {
      dashboard: 'لوحة التحكم',
      updates: 'تحديثات البحث',
      roadmap: 'مسار التعلم',
      actions: 'مركز الإجراءات',
      tracker: 'متابعة التقدم',
      sources: 'مكتبة المصادر'
    },
    header: {
      statusBadge: 'حالة محرك بحث جوجل: طبيعية',
      verifiedUpdates: 'مصادر رسمية موثقة 100%',
      searchPlaceholder: 'ابحث في التحديثات، الدروس، والمهام...',
      language: 'اللغة',
      sourceCode: 'مستودع GitHub'
    },
    dashboard: {
      title: 'لوحة معلومات وخارطة طريق السيو',
      subtitle: 'تحديثات خوارزميات جوجل الموثقة لحظة بلحظة، والتوثيق التقني، ومسار التعلم المنهجي.',
      statsUpdatesTracked: 'تحديثات موثقة',
      statsActiveTasks: 'مهام قيد التنفيذ',
      statsRoadmapProgress: 'إنجاز المسار',
      statsSavedItems: 'أبحاث محفوظة',
      urgentBannerTitle: 'تنبيه تحديث حاسم: اكتمال تحديث السبام لشهر سبتمبر 2026',
      urgentBannerDesc:
        'اكتمل نشر تحديث مكافحة المحتوى المزعج (Spam) العالمي في 8 أكتوبر 2026. راجع الصفحات التوليدية وتحقق من تقرير الإجراءات اليدوية في Search Console.',
      recentUpdatesTitle: 'أحدث تحديثات جوجل الموثقة',
      viewAllUpdates: 'عرض جميع التحديثات',
      recommendedActionsTitle: 'الإجراءات ذات الأولوية الموصى بها',
      viewAllActions: 'فتح مركز الإجراءات',
      roadmapOverviewTitle: 'تقدم إتقان مسار التعلم',
      viewRoadmap: 'مواصلة التعلم',
      docUpdatesTitle: 'التوثيق الرسمي والمعايير التقنية'
    },
    updates: {
      title: 'أخبار وتحديثات خوارزميات السيو',
      subtitle: 'تحديثات مدققة وموثقة من لوحة حالة بحث جوجل ومدونة Google Search Central.',
      searchPlaceholder: 'ابحث بالكلمة المفتاحية، اسم التحديث، أو التأثير...',
      filterAll: 'جميع الأقسام',
      sortByDateDesc: 'الأحدث أولاً',
      sortByDateAsc: 'الأقدم أولاً',
      sortByImpact: 'الأعلى تأثيراً',
      viewBrief: 'عرض الملخص التحليلي (11 نقطة)',
      saveArticle: 'حفظ البحث',
      savedArticle: 'تم الحفظ',
      createTask: 'إضافة للمهام',
      noResults: 'لا توجد تحديثات تطابق معايير البحث والتصفية.'
    },
    roadmap: {
      title: 'خارطة طريق تعلم السيو المنهجية',
      subtitle: 'من آليات الزحف والفهرسة الأساسية إلى محركات بحث الذكاء الاصطناعي (GEO/AEO) واستراتيجيات السيو المتقدمة.',
      progressOverall: 'نسبة الإنجاز الإجمالية',
      modulesCount: '6 وحدات تدريبية متكاملة',
      level: 'المستوى',
      estTime: 'الوقت المقدر',
      learningObjectives: 'الأهداف التعليمية الرئيسية',
      officialDocs: 'توثيق جوجل الرسمي',
      recommendedReading: 'مقالات تقنية موصى بها',
      practicalExercises: 'تمارين عملية وتطبيقية',
      checklistTitle: 'قائمة مهارات الإتقان'
    },
    actions: {
      title: 'مركز الإجراءات والتحقيقات العملية',
      subtitle: 'تحويل تحديثات البحث الرسمية إلى خطوات تحقيق منهجية وفرضيات عمل موثقة.',
      createNewTask: 'إنشاء مهمة مخصصة',
      filterAll: 'جميع الحالات',
      filterNotStarted: 'لم تبدأ',
      filterInProgress: 'قيد التنفيذ',
      filterCompleted: 'مكتملة',
      searchTasks: 'ابحث في المهام...',
      disclaimer:
        'ملاحظة هامة: التوصيات هي فرضيات للتحقيق المنهجي وليست حلولاً مضمونة. تحقق دائماً من العلاقة السببية عبر Google Search Console قبل تنفيذ التغييرات.',
      iceScore: 'معيار ICE',
      priority: 'الأولوية',
      effort: 'الجهد',
      problem: 'المشكلة قيد التحقيق',
      evidence: 'الأدلة المطلوبة',
      steps: 'خطوات التحقيق المقترحة',
      notes: 'ملاحظات المحلل والنتائج',
      saveNotes: 'حفظ الملاحظات',
      noTasks: 'لا توجد مهام مطابقة.'
    },
    tracker: {
      title: 'سجل التعلم والمهام الشخصي',
      subtitle: 'متابعة قائمة تدقيق المهارات، وإدارة مهام العمل، واستعراض الأبحاث المحفوظة.',
      statsOverall: 'إنجاز المسار',
      statsChecklist: 'بنود التدقيق المكتملة',
      statsTasks: 'المهام المكتملة',
      statsSaved: 'المقالات المحفوظة',
      moduleProgress: 'التقدم حسب الوحدة',
      savedArticlesTitle: 'الأبحاث والتحديثات المحفوظة',
      noSavedArticles: 'لم تقم بحفظ أي أبحاث حتى الآن. انقر على رمز الحفظ في أي تحديث لإضافته هنا.',
      pendingTasksTitle: 'المهام ذات الأولوية النشطة',
      noPendingTasks: 'تم إنجاز جميع المهام! يمكنك إنشاء مهمة جديدة أو مواصلة دراسة وحدات المسار.',
      storageNotice:
        'معلومات الحفظ: يتم تخزين بياناتك محلياً في متصفحك (LocalStorage). لا يتم المزامنة تلقائياً بين الأجهزة المختلفة.',
      exportData: 'تصدير البيانات (JSON)',
      importData: 'استيراد البيانات',
      resetData: 'إعادة تعيين التقدم'
    },
    sources: {
      title: 'مكتبة المصادر والمعايير المعتمدة',
      subtitle: 'روابط مباشرة للتوثيق الرسمي لمحرك بحث جوجل، وإرشادات المطورين، والمراجع التقنية الموثوقة.',
      filterAll: 'جميع المصادر',
      openOfficialDoc: 'فتح المصدر الرسمي',
      verifiedOfficial: 'مصدر رسمي موثق',
      totalResources: 'مصادر رسمية متاحة'
    }
  }
};
