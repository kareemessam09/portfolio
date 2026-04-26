/*
 * data.js — Central data store for the portfolio.
 * All content lives here so it's trivial to update.
 * Populated from Kareem Essam's CV.
 */

export const personalInfo = {
  initials: "KE",
  name: "Kareem Essam",
  location: "Cairo, Egypt",
  headline: "Software Engineer",
  photo: "/mee.jpg",
  roles: ["Mobile Developer", "Full-Stack Builder", "Next Hokage"],
  summary:
    "A true shinobi adapts to any battlefield. I use Shadow Clone logic to ensure my systems are fighting on every user interface at once. While the world sees the flashy techniques of the frontend, I’m anchored in the Hidden Backend Village, sealing chaotic data into elegant, high-performance architectures. I don't just build applications; I architect entire digital nations with the precision of a Sealing Jutsu master.",
  closingQuote:
    "I debug for fun, ship on optimism, and call it character development.",
  resumeLink: "/KareemEssamResume.pdf",
  email: "kareemessam.me@gmail.com",
  phone: "+20 1554158037",
  github: "https://github.com/kareemessam09",
  linkedin: "https://linkedin.com/in/kareemessam09",
  website: "https://kareemessam.dev",
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const experience = [
  {
    company: "Freelance",
    title: "Mobile Developer",
    period: "Jan 2025 – Present",
    location: "Remote",
    bullets: [
      "Besor3a Ecosystem (Flutter, Node.js) — published on Google Play Store.",
      "Engineered a multi-role e-commerce platform for Al-Salhia Al-Jadida, featuring dedicated interfaces for Clients, Sellers, and Drivers with integrated real-time logistics and order tracking.",
      "Managed the full production deployment on Google Play, ensuring compliance with security and data privacy standards.",
    ],
  },
];

export const education = [
  {
    school: "Suez Canal University",
    degree: "Bachelor of Computer Science",
    gpa: "3.3",
    period: "2022 – Expected 2026",
    location: "Ismailia, Egypt",
  },
  {
    school: "Ismailia STEM School",
    degree: "High-level Education",
    gpa: "3.8",
    period: "2019 – 2022",
    location: "Ismailia, Egypt",
  },
];

export const projects = [
  {
    title: "Besor3a",
    description:
      "Multi-role e-commerce platform with dedicated interfaces for Clients, Sellers, and Drivers. Integrated real-time logistics and order tracking. Live on Google Play Store.",
    tags: ["Flutter", "Node.js", "Firebase", "Google Play"],
    github: "https://github.com/kareemessam09",
    playStore: "https://play.google.com/store/apps/details?id=com.kareem09.besor3a",
    year: "2025",
    featured: true,
    category: "fullstack",
    hasLogo: true,
  },
  {
    title: "GitMatch",
    description:
      "Full-stack developer networking platform with a Tinder-style swiping interface. KMP shared business logic across Android & iOS, backed by a Java Spring Boot REST API with JWT auth.",
    tags: ["KMP", "Spring Boot", "PostgreSQL", "Docker", "Compose Multiplatform"],
    github: "https://github.com/kareemessam09/GitMatch",
    year: "2026",
    featured: true,
    category: "fullstack",
  },
  {
    title: "GeoQuest",
    description:
      "Interactive location-based treasure hunt app using the Geofencing API for real-time proximity events. Clean Architecture with Hilt DI and reactive Compose UI with interactive maps.",
    tags: ["Kotlin", "Jetpack Compose", "Hilt", "OSMdroid", "Geofencing"],
    github: "https://github.com/kareemessam09/GeoQuest",
    year: "2026",
    featured: true,
    category: "mobile",
  },
  {
    title: "Financial NER Library",
    description:
      "AI-powered Named Entity Recognition library achieving 90.5% accuracy in extracting financial entities from English and Arabic banking messages. Hybrid BERT + rule-based architecture.",
    tags: ["Kotlin", "ONNX Runtime", "BERT", "NLP"],
    github: "https://github.com/kareemessam09/BankMessagesTokenizer",
    year: "2025",
    featured: true,
    category: "ai",
  },

  {
    title: "Gymify",
    description:
      "Modern fitness app delivering personalized workout plans with AI-powered recommendations. MVVM with repository pattern, reactive Flow state, and offline-first caching.",
    tags: ["Kotlin", "Jetpack Compose", "Room", "MVVM", "OpenAI API"],
    github: "https://github.com/kareemessam09/Gymify",
    year: "2025",
    featured: false,
    category: "mobile",
  },
  {
    title: "Conan",
    description:
      "Digital wellness Android app for productivity through intelligent content monitoring. Achieved 96% detection accuracy using Accessibility framework for real-time analysis.",
    tags: ["Kotlin", "Jetpack Compose", "WorkManager", "DataStore"],
    github: "https://github.com/kareemessam09/Conan",
    year: "2025",
    featured: false,
    category: "mobile",
  },
];

export const skills = {
  languages: ["Kotlin", "Java", "Python", "Dart", "SQL", "JavaScript"],
  mobile: [
    "Jetpack Compose",
    "Android SDK",
    "MVVM",
    "MVI",
    "Hilt",
    "Coroutines",
    "Flow",
    "Room",
    "Retrofit",
    "Paging3",
    "WorkManager",
    "DataStore",
  ],
  backend: ["Spring Boot", "Node.js", "PostgreSQL", "Docker", "REST API"],
  tools: ["Git/GitHub", "Android Studio", "Gradle", "Firebase", "KMP", "ONNX Runtime", "JUnit", "Espresso"],
};

export const blogs = [
  {
    title: "From XML to Pixels: The UI Rendering Pipeline (Part 3)",
    date: "Feb 2026",
    summary:
      "A deep dive into how the Android graphics subsystem turns a tree of Kotlin objects into a smooth 60 FPS animation using DisplayLists and the GPU.",
    medium_link: "https://medium.com/@kareemessam.me/from-xml-to-pixels-the-ui-rendering-pipeline-part-3-bbfd257215d8",
    readTime: "10 min read",
  },
  {
    title: "From Icon Click to onCreate: The Zygote Process & App Startup (Part 2)",
    date: "Jan 2026",
    summary:
      "Exploring the genius behind the Zygote process and why Android doesn't just 'open' your app, but clones it for maximum efficiency.",
    medium_link: "https://medium.com/@kareemessam.me/from-icon-click-to-oncreate-the-zygote-process-app-startup-part-2-b6058079543e",
    readTime: "9 min read",
  },
  {
    title: "From Kotlin Code to APK: What Actually Happens When You Press “Run” (Part 1)",
    date: "Dec 2025",
    summary:
      "Demystifying the Android Build Process—from Frontend Compilation and Dexing with D8 to Code Shrinking and Obfuscation with R8.",
    medium_link: "https://medium.com/@kareemessam.me/from-kotlin-code-to-apk-what-actually-happens-when-you-press-run-part-1-88aaded04719",
    readTime: "12 min read",
  },
  {
    title: "Why C Makes You Take Out the Garbage Yourself!",
    date: "Jun 2025",
    summary:
      "An engineering perspective on memory management, manual allocation, and the clever algorithms designed to prevent nasty leaks.",
    medium_link: "https://medium.com/@kareemessam.me/why-c-makes-you-take-out-the-garbage-yourself-4903337a6b4a",
    readTime: "6 min read",
  },
];
