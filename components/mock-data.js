export const defaultStudentProfile = {
  id: "student-saif",
  name: "Saif",
  avatar: "/avatars/ahmed.svg",
  classLevel: "Class 10",
  group: "Science",
  version: "Bangla",
  school: "Shikho Model School",
  enrolledSubjects: ["Physics", "Math", "Chemistry", "Biology"],
  targetExam: "SSC 2026",
  studyGoal: "প্রতিদিন ২০টি MCQ",
  preferredStudyTime: "রাত ৮টা - ৯টা"
};

export const labelMap = {
  classLevel: {
    "Class 9": "নবম শ্রেণি",
    "Class 10": "দশম শ্রেণি",
    "Class 11": "একাদশ শ্রেণি",
    "Class 12": "দ্বাদশ শ্রেণি"
  },
  group: {
    Science: "বিজ্ঞান",
    Commerce: "ব্যবসায় শিক্ষা",
    Arts: "মানবিক"
  },
  version: {
    Bangla: "বাংলা ভার্সন",
    English: "English Version"
  },
  subject: {
    Physics: "পদার্থবিজ্ঞান",
    Math: "গণিত",
    Chemistry: "রসায়ন",
    Biology: "জীববিজ্ঞান",
    ICT: "আইসিটি",
    English: "English",
    Bangla: "বাংলা"
  }
};

export const circles = [
  {
    id: "physics-class-10",
    title: "Class 10 Physics Circle",
    titleBn: "দশম শ্রেণি পদার্থবিজ্ঞান সার্কেল",
    classLevel: "Class 10",
    group: "Science",
    version: "Bangla",
    subject: "Physics",
    chapter: "Chapter 4",
    chapterBn: "অধ্যায় ৪",
    activeStudents: 162,
    members: 152,
    previewCount: 157,
    completionRate: 78,
    todayGoal: "Chapter 4 MCQ Practice",
    todayGoalBn: "অধ্যায় ৪ MCQ প্র্যাকটিস",
    goalDescriptionBn: "নিউটনের প্রথম সূত্র থেকে ২০টি MCQ শেষ করো।",
    nextActionBn: "MCQ Practice শুরু করুন",
    difficulty: "Medium",
    estimatedTime: "১৮ মিনিট",
    icon: "atom",
    accent: "#2563EB",
    bg: "#EFF6FF",
    whySuggestedBn:
      "আপনার Class 10 Science প্রোফাইল এবং Physics enrollment অনুযায়ী এই সার্কেলটি সবচেয়ে relevant.",
    outcomesBn: [
      "নিউটনের প্রথম সূত্র পরিষ্কার হবে",
      "ভুল MCQ-এর ব্যাখ্যা পাবেন",
      "সার্কেলের সাথে দৈনিক goal complete করবেন"
    ],
    tags: ["SSC 2026", "Physics", "MCQ", "Activation"]
  },
  {
    id: "math-class-10",
    title: "Class 10 Math Circle",
    titleBn: "দশম শ্রেণি গণিত সার্কেল",
    classLevel: "Class 10",
    group: "Science",
    version: "Bangla",
    subject: "Math",
    chapter: "Algebra",
    chapterBn: "বীজগণিত",
    activeStudents: 118,
    members: 133,
    previewCount: 113,
    completionRate: 64,
    todayGoal: "Algebra Basics",
    todayGoalBn: "বীজগণিতের মৌলিক ধারণা",
    goalDescriptionBn: "সরল সমীকরণ থেকে ১৫টি practice problem শেষ করো।",
    nextActionBn: "Practice শুরু করুন",
    difficulty: "Easy",
    estimatedTime: "১৫ মিনিট",
    icon: "calculator",
    accent: "#16A34A",
    bg: "#ECFDF5",
    whySuggestedBn:
      "Science group-এর শিক্ষার্থীদের জন্য Math foundation strong রাখা গুরুত্বপূর্ণ.",
    outcomesBn: [
      "বীজগণিতের basic rule revise হবে",
      "দ্রুত problem-solving habit তৈরি হবে",
      "weekly progress track হবে"
    ],
    tags: ["SSC 2026", "Math", "Algebra"]
  },
  {
    id: "chemistry-class-10",
    title: "Class 10 Chemistry Circle",
    titleBn: "দশম শ্রেণি রসায়ন সার্কেল",
    classLevel: "Class 10",
    group: "Science",
    version: "Bangla",
    subject: "Chemistry",
    chapter: "Chemical Bonding",
    chapterBn: "রাসায়নিক বন্ধন",
    activeStudents: 91,
    members: 87,
    previewCount: 86,
    completionRate: 52,
    todayGoal: "Chemical Bonding",
    todayGoalBn: "রাসায়নিক বন্ধন",
    goalDescriptionBn: "আয়নিক ও সমযোজী বন্ধন থেকে ১২টি MCQ solve করো।",
    nextActionBn: "লেসন শুরু করুন",
    difficulty: "Medium",
    estimatedTime: "২০ মিনিট",
    icon: "flask",
    accent: "#F59E0B",
    bg: "#FFFBEB",
    whySuggestedBn:
      "Chemistry enrolled থাকায় এই chapter-based circle আপনার জন্য useful.",
    outcomesBn: [
      "রাসায়নিক বন্ধনের পার্থক্য বুঝবেন",
      "source-based explanation পাবেন",
      "exam-style MCQ practice হবে"
    ],
    tags: ["Chemistry", "Bonding", "MCQ"]
  },
  {
    id: "biology-class-10",
    title: "Class 10 Biology Circle",
    titleBn: "দশম শ্রেণি জীববিজ্ঞান সার্কেল",
    classLevel: "Class 10",
    group: "Science",
    version: "Bangla",
    subject: "Biology",
    chapter: "Cell Structure",
    chapterBn: "কোষের গঠন",
    activeStudents: 76,
    members: 71,
    previewCount: 71,
    completionRate: 46,
    todayGoal: "Cell Structure",
    todayGoalBn: "কোষের গঠন",
    goalDescriptionBn: "কোষের অঙ্গাণু থেকে ১০টি quick MCQ শেষ করো।",
    nextActionBn: "Quick Practice",
    difficulty: "Easy",
    estimatedTime: "১২ মিনিট",
    icon: "leaf",
    accent: "#0D9488",
    bg: "#CCFBF1",
    whySuggestedBn:
      "Biology enrolled subject হিসেবে cell structure আপনার current learning path-এর সাথে মিলে.",
    outcomesBn: [
      "cell organelle চিনতে পারবেন",
      "short explanation পাবেন",
      "revision দ্রুত হবে"
    ],
    tags: ["Biology", "Cell", "Revision"]
  },
  {
    id: "physics-class-9",
    title: "Class 9 Physics Circle",
    titleBn: "নবম শ্রেণি পদার্থবিজ্ঞান সার্কেল",
    classLevel: "Class 9",
    group: "Science",
    version: "Bangla",
    subject: "Physics",
    chapter: "Motion Basics",
    chapterBn: "গতি",
    activeStudents: 84,
    members: 65,
    previewCount: 62,
    completionRate: 58,
    todayGoal: "Motion Basics",
    todayGoalBn: "গতির প্রাথমিক ধারণা",
    goalDescriptionBn: "গতি ও বেগ থেকে ১৫টি MCQ solve করো।",
    nextActionBn: "Practice শুরু করুন",
    difficulty: "Easy",
    estimatedTime: "১৪ মিনিট",
    icon: "atom",
    accent: "#2563EB",
    bg: "#EFF6FF",
    whySuggestedBn:
      "Class 9 Science শিক্ষার্থীদের Physics foundation তৈরি করার জন্য.",
    outcomesBn: [
      "গতি ও বেগের basic ধারণা পরিষ্কার হবে",
      "formula recall improve হবে",
      "chapter confidence বাড়বে"
    ],
    tags: ["Class 9", "Physics", "Motion"]
  }
];

export const activeLearners = [
  {
    id: "learner-nafisa",
    name: "Nafisa",
    classLevel: "Class 10",
    subject: "Physics",
    status: "online",
    streak: 9,
    solvedToday: 18,
    color: "#FEE2E2",
    avatar: "/avatars/nafisa.svg"
  },
  {
    id: "learner-rifat",
    name: "Rifat",
    classLevel: "Class 10",
    subject: "Physics",
    status: "online",
    streak: 6,
    solvedToday: 14,
    color: "#E0F2FE",
    avatar: "/avatars/rifat.svg"
  },
  {
    id: "learner-ahmed",
    name: "Ahmed",
    classLevel: "Class 10",
    subject: "Physics",
    status: "online",
    streak: 12,
    solvedToday: 20,
    color: "#FEF3C7",
    avatar: "/avatars/ahmed.svg"
  },
  {
    id: "learner-tasnim",
    name: "Tasnim",
    classLevel: "Class 10",
    subject: "Physics",
    status: "online",
    streak: 8,
    solvedToday: 16,
    color: "#DCFCE7",
    avatar: "/avatars/tasnim.svg"
  },
  {
    id: "learner-mehedi",
    name: "Mehedi",
    classLevel: "Class 10",
    subject: "Physics",
    status: "online",
    streak: 5,
    solvedToday: 12,
    color: "#EDE9FE",
    avatar: "/avatars/mehedi.svg"
  }
];

export const circleProgress = {
  "physics-class-10": {
    completionRate: 78,
    completed: 118,
    inProgress: 24,
    notStarted: 10,
    averageAccuracy: 81,
    topRank: 8,
    totalMcqsToday: 20
  },
  "math-class-10": {
    completionRate: 64,
    completed: 85,
    inProgress: 31,
    notStarted: 17,
    averageAccuracy: 76,
    topRank: 12,
    totalMcqsToday: 15
  },
  "chemistry-class-10": {
    completionRate: 52,
    completed: 45,
    inProgress: 28,
    notStarted: 14,
    averageAccuracy: 69,
    topRank: 18,
    totalMcqsToday: 12
  },
  "biology-class-10": {
    completionRate: 46,
    completed: 33,
    inProgress: 21,
    notStarted: 17,
    averageAccuracy: 72,
    topRank: 15,
    totalMcqsToday: 10
  },
  "physics-class-9": {
    completionRate: 58,
    completed: 38,
    inProgress: 18,
    notStarted: 9,
    averageAccuracy: 74,
    topRank: 10,
    totalMcqsToday: 15
  }
};

export const leaderboard = {
  "physics-class-10": [
    {
      rank: 1,
      name: "Ahmed",
      avatar: "/avatars/ahmed.svg",
      solved: 20,
      accuracy: 95,
      streak: 12
    },
    {
      rank: 2,
      name: "Nafisa",
      avatar: "/avatars/nafisa.svg",
      solved: 18,
      accuracy: 91,
      streak: 9
    },
    {
      rank: 3,
      name: "Tasnim",
      avatar: "/avatars/tasnim.svg",
      solved: 16,
      accuracy: 88,
      streak: 8
    },
    {
      rank: 8,
      name: "Saif",
      avatar: "/avatars/ahmed.svg",
      solved: 12,
      accuracy: 85,
      streak: 7,
      isCurrentUser: true
    }
  ]
};

export const activityFeed = [
  {
    id: "activity-1",
    circleId: "physics-class-10",
    type: "goal_completed",
    user: "Ahmed",
    avatar: "/avatars/ahmed.svg",
    textBn: "আজকের ২০টি MCQ শেষ করেছে",
    time: "৫ মিনিট আগে"
  },
  {
    id: "activity-2",
    circleId: "physics-class-10",
    type: "explanation_viewed",
    user: "Nafisa",
    avatar: "/avatars/nafisa.svg",
    textBn: "ভুল উত্তর দেখে explanation পড়েছে",
    time: "১২ মিনিট আগে"
  },
  {
    id: "activity-3",
    circleId: "physics-class-10",
    type: "joined",
    user: "Rifat",
    avatar: "/avatars/rifat.svg",
    textBn: "Physics Circle-এ যোগ দিয়েছে",
    time: "২০ মিনিট আগে"
  }
];

export const weeklyPlan = [
  {
    id: "sun",
    day: "রবি",
    titleBn: "Newton’s First Law",
    taskBn: "২০টি MCQ",
    status: "done"
  },
  {
    id: "mon",
    day: "সোম",
    titleBn: "Inertia",
    taskBn: "১৫ মিনিট revision",
    status: "done"
  },
  {
    id: "tue",
    day: "মঙ্গল",
    titleBn: "Force Concept",
    taskBn: "১০টি MCQ",
    status: "active"
  },
  {
    id: "wed",
    day: "বুধ",
    titleBn: "Common Mistakes",
    taskBn: "Explanation review",
    status: "upcoming"
  },
  {
    id: "thu",
    day: "বৃহস্পতি",
    titleBn: "Chapter Test",
    taskBn: "৩০টি MCQ",
    status: "upcoming"
  }
];

export const subjectMaterials = {
  Physics: weeklyPlan,
  Math: [
    {
      id: "math-mon",
      day: "রবি",
      titleBn: "Algebra Basics",
      taskBn: "২০টি practice problem",
      status: "done"
    },
    {
      id: "math-tue",
      day: "সোম",
      titleBn: "Linear Equations",
      taskBn: "১৫ মিনিট revision",
      status: "done"
    },
    {
      id: "math-wed",
      day: "মঙ্গল",
      titleBn: "Fraction Drill",
      taskBn: "১০টি MCQ",
      status: "active"
    },
    {
      id: "math-thu",
      day: "বুধ",
      titleBn: "Word Problems",
      taskBn: "Explanation review",
      status: "upcoming"
    },
    {
      id: "math-fri",
      day: "বৃহস্পতি",
      titleBn: "Chapter Test",
      taskBn: "৩০টি MCQ",
      status: "upcoming"
    }
  ],
  Chemistry: [
    {
      id: "chem-mon",
      day: "রবি",
      titleBn: "Chemical Bonding",
      taskBn: "২০টি MCQ",
      status: "done"
    },
    {
      id: "chem-tue",
      day: "সোম",
      titleBn: "Periodic Table",
      taskBn: "১৫ মিনিট revision",
      status: "done"
    },
    {
      id: "chem-wed",
      day: "মঙ্গল",
      titleBn: "Valency Drill",
      taskBn: "১০টি MCQ",
      status: "active"
    },
    {
      id: "chem-thu",
      day: "বুধ",
      titleBn: "Common Mistakes",
      taskBn: "Explanation review",
      status: "upcoming"
    },
    {
      id: "chem-fri",
      day: "বৃহস্পতি",
      titleBn: "Chapter Test",
      taskBn: "৩০টি MCQ",
      status: "upcoming"
    }
  ],
  Biology: [
    {
      id: "bio-mon",
      day: "রবি",
      titleBn: "Cell Structure",
      taskBn: "২০টি MCQ",
      status: "done"
    },
    {
      id: "bio-tue",
      day: "সোম",
      titleBn: "Cell Organelles",
      taskBn: "১৫ মিনিট revision",
      status: "done"
    },
    {
      id: "bio-wed",
      day: "মঙ্গল",
      titleBn: "Cell Division",
      taskBn: "১০টি MCQ",
      status: "active"
    },
    {
      id: "bio-thu",
      day: "বুধ",
      titleBn: "Photosynthesis",
      taskBn: "Explanation review",
      status: "upcoming"
    },
    {
      id: "bio-fri",
      day: "বৃহস্পতি",
      titleBn: "Chapter Test",
      taskBn: "৩০টি MCQ",
      status: "upcoming"
    }
  ]
};

export const defaultProgress = {
  streak: 7,
  solvedMcqs: 120,
  correctRate: 85,
  circleRank: 8,
  studyTime: "6h 30m",
  participation: 87,
  completedGoals: ["physics-chapter-4"],
  weeklyGoalCompleted: 3,
  weeklyGoalTotal: 5,
  lastActiveCircleId: "physics-class-10"
};

export const defaultMcqState = {
  selectedAnswer: null,
  answered: false,
  explanationViewed: false,
  attempts: [],
  lastQuestionId: "physics-newton-1"
};

/**
 * Important:
 * Keep joinedCircles empty for first browser load.
 * This lets reviewers test:
 * join circle → navigate away → come back → state persists.
 */
export const defaultState = {
  studentProfile: defaultStudentProfile,
  joinedCircles: [],
  progress: defaultProgress,
  mcqState: defaultMcqState
};

export const classOptions = ["Class 9", "Class 10", "Class 11", "Class 12"];

export const subjectOptions = [
  "Physics",
  "Math",
  "Chemistry",
  "Biology",
  "ICT",
  "English",
  "Bangla"
];

export const notifications = [
  {
    id: "notification-1",
    titleBn: "আজকের Physics goal ready",
    bodyBn: "Chapter 4 থেকে ২০টি MCQ practice করুন।",
    time: "১০ মিনিট আগে",
    unread: true
  },
  {
    id: "notification-2",
    titleBn: "Nafisa goal complete করেছে",
    bodyBn: "আপনার circle-এ ১১৮ জন আজকের goal শেষ করেছে।",
    time: "৩০ মিনিট আগে",
    unread: true
  },
  {
    id: "notification-3",
    titleBn: "সাপ্তাহিক progress update",
    bodyBn: "আপনি এই সপ্তাহে ৩/৫ goal complete করেছেন।",
    time: "১ ঘণ্টা আগে",
    unread: false
  }
];

export const mcqBank = {
  "physics-class-10": [
    {
      id: "physics-newton-1",
      subject: "Physics",
      chapter: "Chapter 4",
      chapterBn: "অধ্যায় ৪",
      topicBn: "নিউটনের প্রথম সূত্র",
      examTag: "SSC-style Concept MCQ",
      question: "নিচের কোনটি নিউটনের প্রথম সূত্রের সঠিক ব্যাখ্যা?",
      options: [
        { id: "A", text: "কোনো বস্তু অবস্থার পরিবর্তন করে যখন কোনো বল প্রয়োগ করা হয়" },
        { id: "B", text: "কোনো বস্তু তার অবস্থা অপরিবর্তিত রাখে যদি বাহ্যিক বল প্রয়োগ না করা হয়" },
        { id: "C", text: "বল ও ত্বরণের গুণফল হচ্ছে ভরবেগ" },
        { id: "D", text: "উপরের কোনোটিই নয়" }
      ],
      correctAnswer: "B",
      explanation:
        "নিউটনের প্রথম সূত্র অনুযায়ী, কোনো বস্তুর ওপর বাহ্যিক বল প্রয়োগ না হলে বস্তু তার বর্তমান অবস্থা বজায় রাখে। তাই স্থির বস্তু স্থির থাকবে এবং গতিশীল বস্তু সমবেগে সরলরেখায় চলতে থাকবে।",
      commonMistakeBn:
        "অনেক শিক্ষার্থী বল প্রয়োগ হলেই প্রথম সূত্র মনে করে, কিন্তু প্রথম সূত্র মূলত বাহ্যিক বল না থাকলে বস্তুর অবস্থা কী হবে তা বলে।",
      source: "Mock source: SSC Physics • অধ্যায় ৪ • নিউটনের গতি সূত্র",
      difficulty: "Medium"
    },
    {
      id: "physics-newton-2",
      subject: "Physics",
      chapter: "Chapter 4",
      chapterBn: "অধ্যায় ৪",
      topicBn: "জড়তা",
      examTag: "SSC-style Definition MCQ",
      question: "জড়তা বলতে কী বোঝায়?",
      options: [
        { id: "A", text: "বস্তুর ভর পরিবর্তনের প্রবণতা" },
        { id: "B", text: "বস্তুর নিজ অবস্থার পরিবর্তনে বাধা দেওয়ার প্রবণতা" },
        { id: "C", text: "বস্তুর তাপমাত্রা বাড়ার প্রবণতা" },
        { id: "D", text: "বস্তুর আকার পরিবর্তনের প্রবণতা" }
      ],
      correctAnswer: "B",
      explanation:
        "জড়তা হলো বস্তুর এমন একটি ধর্ম যার কারণে বস্তু তার স্থির বা গতিশীল অবস্থা বজায় রাখতে চায়। ভর যত বেশি, জড়তাও তত বেশি।",
      commonMistakeBn:
        "জড়তাকে অনেক সময় বল মনে করা হয়, কিন্তু এটি বস্তুর একটি ধর্ম।",
      source: "Mock source: SSC Physics • জড়তা",
      difficulty: "Easy"
    },
    {
      id: "physics-newton-3",
      subject: "Physics",
      chapter: "Chapter 4",
      chapterBn: "অধ্যায় ৪",
      topicBn: "সমবেগে গতি",
      examTag: "SSC-style Application MCQ",
      question: "বাহ্যিক বল না থাকলে একটি চলমান বস্তু কী করবে?",
      options: [
        { id: "A", text: "তাৎক্ষণিক থেমে যাবে" },
        { id: "B", text: "সমবেগে সরলরেখায় চলতে থাকবে" },
        { id: "C", text: "বেগ বাড়াতে থাকবে" },
        { id: "D", text: "দিক পরিবর্তন করবে" }
      ],
      correctAnswer: "B",
      explanation:
        "বাহ্যিক বল না থাকলে চলমান বস্তু সমবেগে সরলরেখায় চলতে থাকবে। এটি নিউটনের প্রথম সূত্রের সরাসরি প্রয়োগ।",
      commonMistakeBn:
        "দৈনন্দিন জীবনে ঘর্ষণের কারণে বস্তু থেমে যায়, তাই অনেকে ভাবে বল না থাকলে বস্তু থেমে যাবে। কিন্তু আদর্শ অবস্থায় ঘর্ষণ না থাকলে বস্তু চলতেই থাকবে।",
      source: "Mock source: SSC Physics • নিউটনের প্রথম সূত্র",
      difficulty: "Medium"
    }
  ],

  "math-class-10": [
    {
      id: "math-algebra-1",
      subject: "Math",
      chapter: "Algebra",
      chapterBn: "বীজগণিত",
      topicBn: "সরল সমীকরণ",
      examTag: "SSC-style Algebra MCQ",
      question: "x + 5 = 12 হলে x এর মান কত?",
      options: [
        { id: "A", text: "৫" },
        { id: "B", text: "৬" },
        { id: "C", text: "৭" },
        { id: "D", text: "৮" }
      ],
      correctAnswer: "C",
      explanation:
        "x + 5 = 12 হলে, উভয় পাশ থেকে 5 বিয়োগ করলে x = 12 - 5 = 7। তাই সঠিক উত্তর ৭।",
      commonMistakeBn:
        "অনেকে 12 + 5 করে 17 পায়, কিন্তু এখানে 5 অন্য পাশে গেলে বিয়োগ হবে।",
      source: "Mock source: SSC Math • বীজগণিত • সরল সমীকরণ",
      difficulty: "Easy"
    },
    {
      id: "math-algebra-2",
      subject: "Math",
      chapter: "Algebra",
      chapterBn: "বীজগণিত",
      topicBn: "বর্গ সূত্র",
      examTag: "SSC-style Formula MCQ",
      question: "(a + b)² এর বিস্তৃত রূপ কোনটি?",
      options: [
        { id: "A", text: "a² + b²" },
        { id: "B", text: "a² + 2ab + b²" },
        { id: "C", text: "a² - 2ab + b²" },
        { id: "D", text: "2a + 2b" }
      ],
      correctAnswer: "B",
      explanation:
        "(a + b)² = (a + b)(a + b) = a² + ab + ab + b² = a² + 2ab + b²।",
      commonMistakeBn:
        "সবচেয়ে common ভুল হলো মাঝের 2ab অংশ বাদ দেওয়া।",
      source: "Mock source: SSC Math • বীজগণিতের সূত্র",
      difficulty: "Medium"
    },
    {
      id: "math-algebra-3",
      subject: "Math",
      chapter: "Algebra",
      chapterBn: "বীজগণিত",
      topicBn: "উৎপাদক",
      examTag: "SSC-style Factorization MCQ",
      question: "x² - 9 এর উৎপাদক কোনটি?",
      options: [
        { id: "A", text: "(x - 3)(x + 3)" },
        { id: "B", text: "(x - 9)(x + 1)" },
        { id: "C", text: "(x + 9)(x - 1)" },
        { id: "D", text: "(x - 3)(x - 3)" }
      ],
      correctAnswer: "A",
      explanation:
        "x² - 9 হলো difference of squares. অর্থাৎ x² - 3² = (x - 3)(x + 3)।",
      commonMistakeBn:
        "অনেকে 9 কে সরাসরি x-এর সাথে বসায়, কিন্তু 9 = 3² ধরতে হবে।",
      source: "Mock source: SSC Math • উৎপাদক",
      difficulty: "Medium"
    }
  ],

  "chemistry-class-10": [
    {
      id: "chem-bonding-1",
      subject: "Chemistry",
      chapter: "Chemical Bonding",
      chapterBn: "রাসায়নিক বন্ধন",
      topicBn: "আয়নিক বন্ধন",
      examTag: "SSC-style Chemistry MCQ",
      question: "আয়নিক বন্ধন সাধারণত কোন ধরনের পরমাণুর মধ্যে গঠিত হয়?",
      options: [
        { id: "A", text: "ধাতু ও অধাতু" },
        { id: "B", text: "দুইটি অধাতু" },
        { id: "C", text: "দুইটি নিষ্ক্রিয় গ্যাস" },
        { id: "D", text: "শুধু ধাতু" }
      ],
      correctAnswer: "A",
      explanation:
        "আয়নিক বন্ধন সাধারণত ধাতু ও অধাতুর মধ্যে electron transfer-এর মাধ্যমে গঠিত হয়। ধাতু electron ত্যাগ করে এবং অধাতু electron গ্রহণ করে।",
      commonMistakeBn:
        "অনেকে covalent bond-এর সাথে গুলিয়ে ফেলে। Covalent bond সাধারণত দুই অধাতুর মধ্যে electron sharing-এর মাধ্যমে হয়।",
      source: "Mock source: SSC Chemistry • রাসায়নিক বন্ধন",
      difficulty: "Medium"
    },
    {
      id: "chem-bonding-2",
      subject: "Chemistry",
      chapter: "Chemical Bonding",
      chapterBn: "রাসায়নিক বন্ধন",
      topicBn: "সমযোজী বন্ধন",
      examTag: "SSC-style Concept MCQ",
      question: "সমযোজী বন্ধনে কী ঘটে?",
      options: [
        { id: "A", text: "electron সম্পূর্ণ স্থানান্তর হয়" },
        { id: "B", text: "electron ভাগাভাগি হয়" },
        { id: "C", text: "proton বিনিময় হয়" },
        { id: "D", text: "neutron নষ্ট হয়" }
      ],
      correctAnswer: "B",
      explanation:
        "সমযোজী বন্ধনে দুইটি পরমাণু electron ভাগাভাগি করে স্থিতিশীল electron বিন্যাস অর্জন করে।",
      commonMistakeBn:
        "সমযোজী বন্ধনে electron transfer নয়, electron sharing হয় — এই পার্থক্যটাই পরীক্ষায় গুরুত্বপূর্ণ।",
      source: "Mock source: SSC Chemistry • সমযোজী বন্ধন",
      difficulty: "Easy"
    },
    {
      id: "chem-bonding-3",
      subject: "Chemistry",
      chapter: "Chemical Bonding",
      chapterBn: "রাসায়নিক বন্ধন",
      topicBn: "ইলেকট্রন বিন্যাস",
      examTag: "SSC-style Application MCQ",
      question: "NaCl যৌগে Na পরমাণু কী করে?",
      options: [
        { id: "A", text: "একটি electron গ্রহণ করে" },
        { id: "B", text: "একটি electron ত্যাগ করে" },
        { id: "C", text: "দুইটি proton ত্যাগ করে" },
        { id: "D", text: "electron ভাগাভাগি করে" }
      ],
      correctAnswer: "B",
      explanation:
        "Na বা sodium একটি electron ত্যাগ করে Na⁺ আয়নে পরিণত হয়। Chlorine সেই electron গ্রহণ করে Cl⁻ হয়। ফলে NaCl-এ আয়নিক বন্ধন তৈরি হয়।",
      commonMistakeBn:
        "Na ধাতু, তাই এটি সাধারণত electron ত্যাগ করে। অধাতু electron গ্রহণ করে।",
      source: "Mock source: SSC Chemistry • NaCl গঠন",
      difficulty: "Medium"
    }
  ],

  "biology-class-10": [
    {
      id: "bio-cell-1",
      subject: "Biology",
      chapter: "Cell Structure",
      chapterBn: "কোষের গঠন",
      topicBn: "মাইটোকন্ড্রিয়া",
      examTag: "SSC-style Biology MCQ",
      question: "কোষের শক্তিঘর বলা হয় কোন অঙ্গাণুকে?",
      options: [
        { id: "A", text: "নিউক্লিয়াস" },
        { id: "B", text: "মাইটোকন্ড্রিয়া" },
        { id: "C", text: "রাইবোসোম" },
        { id: "D", text: "ক্লোরোপ্লাস্ট" }
      ],
      correctAnswer: "B",
      explanation:
        "মাইটোকন্ড্রিয়া কোষে ATP উৎপাদনে সাহায্য করে। ATP হলো কোষের প্রধান শক্তির উৎস, তাই মাইটোকন্ড্রিয়াকে কোষের শক্তিঘর বলা হয়।",
      commonMistakeBn:
        "ক্লোরোপ্লাস্ট খাদ্য তৈরি করে, কিন্তু ATP উৎপাদনের জন্য মাইটোকন্ড্রিয়া গুরুত্বপূর্ণ।",
      source: "Mock source: SSC Biology • কোষের অঙ্গাণু",
      difficulty: "Easy"
    },
    {
      id: "bio-cell-2",
      subject: "Biology",
      chapter: "Cell Structure",
      chapterBn: "কোষের গঠন",
      topicBn: "নিউক্লিয়াস",
      examTag: "SSC-style Definition MCQ",
      question: "কোষের নিয়ন্ত্রণ কেন্দ্র কোনটি?",
      options: [
        { id: "A", text: "রাইবোসোম" },
        { id: "B", text: "মাইটোকন্ড্রিয়া" },
        { id: "C", text: "নিউক্লিয়াস" },
        { id: "D", text: "সাইটোপ্লাজম" }
      ],
      correctAnswer: "C",
      explanation:
        "নিউক্লিয়াসে genetic material থাকে এবং এটি কোষের বিভিন্ন কার্যক্রম নিয়ন্ত্রণ করে। তাই একে কোষের নিয়ন্ত্রণ কেন্দ্র বলা হয়।",
      commonMistakeBn:
        "মাইটোকন্ড্রিয়া শক্তি তৈরি করে, কিন্তু কোষের নিয়ন্ত্রণ করে নিউক্লিয়াস।",
      source: "Mock source: SSC Biology • নিউক্লিয়াস",
      difficulty: "Easy"
    },
    {
      id: "bio-cell-3",
      subject: "Biology",
      chapter: "Cell Structure",
      chapterBn: "কোষের গঠন",
      topicBn: "রাইবোসোম",
      examTag: "SSC-style Function MCQ",
      question: "রাইবোসোমের প্রধান কাজ কী?",
      options: [
        { id: "A", text: "প্রোটিন সংশ্লেষণ" },
        { id: "B", text: "শক্তি উৎপাদন" },
        { id: "C", text: "আলোকসংশ্লেষণ" },
        { id: "D", text: "জল সংরক্ষণ" }
      ],
      correctAnswer: "A",
      explanation:
        "রাইবোসোমের প্রধান কাজ হলো প্রোটিন সংশ্লেষণ করা। তাই protein-making structure হিসেবে রাইবোসোম গুরুত্বপূর্ণ।",
      commonMistakeBn:
        "শক্তি উৎপাদন মাইটোকন্ড্রিয়ার কাজ, রাইবোসোমের কাজ প্রোটিন তৈরি।",
      source: "Mock source: SSC Biology • রাইবোসোম",
      difficulty: "Medium"
    }
  ],

  "physics-class-9": [
    {
      id: "physics-motion-1",
      subject: "Physics",
      chapter: "Motion Basics",
      chapterBn: "গতি",
      topicBn: "বেগ",
      examTag: "Class 9 Foundation MCQ",
      question: "বেগ নির্ণয়ের সূত্র কোনটি?",
      options: [
        { id: "A", text: "বেগ = দূরত্ব × সময়" },
        { id: "B", text: "বেগ = দূরত্ব / সময়" },
        { id: "C", text: "বেগ = সময় / দূরত্ব" },
        { id: "D", text: "বেগ = ভর × ত্বরণ" }
      ],
      correctAnswer: "B",
      explanation:
        "বেগ হলো একক সময়ে অতিক্রান্ত দূরত্ব। তাই বেগ = দূরত্ব / সময়।",
      commonMistakeBn:
        "বেগ ও বলের সূত্র গুলিয়ে ফেললে ভুল হয়। ভর × ত্বরণ হলো বলের সূত্র।",
      source: "Mock source: Class 9 Physics • গতি",
      difficulty: "Easy"
    },
    {
      id: "physics-motion-2",
      subject: "Physics",
      chapter: "Motion Basics",
      chapterBn: "গতি",
      topicBn: "ত্বরণ",
      examTag: "Class 9 Foundation MCQ",
      question: "ত্বরণ বলতে কী বোঝায়?",
      options: [
        { id: "A", text: "সময়ের সাথে বেগের পরিবর্তনের হার" },
        { id: "B", text: "সময়ের সাথে ভরের পরিবর্তনের হার" },
        { id: "C", text: "দূরত্বের সাথে সময়ের পরিবর্তন" },
        { id: "D", text: "শক্তির পরিবর্তন" }
      ],
      correctAnswer: "A",
      explanation:
        "ত্বরণ হলো সময়ের সাথে বেগের পরিবর্তনের হার। বেগ বাড়লে বা কমলে ত্বরণ ঘটে।",
      commonMistakeBn:
        "ত্বরণ মানেই শুধু বেগ বাড়া নয়; বেগ কমলেও ত্বরণ থাকতে পারে।",
      source: "Mock source: Class 9 Physics • ত্বরণ",
      difficulty: "Medium"
    }
  ]
};

/**
 * Backward compatibility:
 * If your existing practice screen imports `mcq`, it will still work.
 */
export const mcq = mcqBank["physics-class-10"][0];
