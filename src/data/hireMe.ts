export interface Employment {
  role: string;
  company: string;
  duration: string;
  bullets: string[];
}

export interface Recommendation {
  name: string;
  relationship: string;
  text: string;
  profileLink?: string;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  duration: string;
}

export interface Language {
  name: string;
  proficiency: string;
}

export interface ResumeData {
  skillsetSummary: string;
  lastUpdated: string;
  skills: string[];
  employments: Employment[];
  recommendations: Recommendation[];
  education: Education;
  languages: Language[];
  preferences: {
    role: string;
    location: string;
    employmentType: string;
    noticePeriod: string;
  };
  socialLinks: {
    github: string;
    linkedin: string;
    playStore: string;
  };
}

export const hireMeData: ResumeData = {
  skillsetSummary: "With a 5 years of industry experience in Android Development, including a year with the Android Open Source Project (AOSP), Nazibul brings extensive expertise in both Android app development and Android OS framework as a 1st Party(1P) Android Developer. His journey in programming began in the 4th grade, fueling a lifelong passion for technology. Although he specializes in Android technologies, Nazibul is keen on exploring a diverse range of technologies and excels at quickly acquiring new skills as needed. He has often acquired new skills trying to teach a friend or junior from school. He has conducted 50+ technical interviews to evaluate and shortlist candidates for android engineering roles.",
  lastUpdated: "30th June 2026",
  skills: [
    "Kotlin", "Java", "AOSP (Android Open Source Project)", "AIDL & IPC Hubs",
    "Jetpack Compose", "Android SDK & NDK",
    "ADB", "Fastboot", "Linux Shell / Bash",
    "MVVM & Multi-module Architecture", "Socket Programming", "Chromium Engine",
    "Offline-First Apps", "Android Lint & Static Analysis", "Data Structures & Algorithms",
    "Swift, SwiftUI (iOS Dev)", "Flutter", "Spring Boot & backend integrations",
    "Git", "Github & Bitbucket", "JIRA & CI/CD", "Play Store Console", "Gradle optimization", "Figma"
  ],
  employments: [
    {
      role: "Mobile Application Developer",
      company: "Aggregate Intelligence India",
      duration: "Jul 2025 - Present",
      bullets: [
          `RYIP
Description : A Socket based proxy application that turns a mobile device into a proxy node.

    Notable contribution :
        1. Re-designed(Figma) and implemented UX giving it a modern Material 3 look.
        2. Support for US devices by reversing proxy connection from inbound to outbound.
        3. Reduced packet loss by 10 percent by optimizing socket connection life resulting in increased user retention.
        4. Optimized battery consumption bringing it down to 60 percent, also resulting in increased user retention and app usage.`,

`In house Browser(based on Chromium)

Description : Modify and build Chromium with added custom tools.`
      ]
    },
    {
      role: "Software Engineer",
      company: "Underscore Technology",
      duration: "Sep 2023 - Jul 2025",
      bullets: [
        `Elo Touch Solutions - Kiosk and POS Projects

Role: Senior Android Developer (Android & AOSP)

Description:
    Worked alongside developers, software engineers, firmware engineers, QA engineers, and product managers across the globe on scalable POS and Kiosk software deployed to thousands of merchant outlets and used by millions of customers.

    Resolved 100+ bugs, delivered 10+ feature improvements, and implemented 5+ new features.

    Notable Contributions:

    1. Reduced IPC communication by 100%
        • Reimplemented a standalone application as a library module inside a multi-module Launcher application.
        • Replaced Broadcast Receivers and AIDL with Kotlin interface callbacks and listeners for intra-module communication.
        • Eliminated circular dependencies between library modules.

    2. Modernized UI architecture
        • Migrated XML-based UI to Jetpack Compose.
        • Adopted MVVM architecture.
        • Reduced boilerplate code while improving maintainability and performance.

    3. Improved code quality
        • Reduced Android Lint issues by 90% using './gradlew lint'.
    • Systematically analyzed and resolved static analysis warnings.`,
        "Conducted technical interviews for Android engineers, assessing coding skills and problem-solving abilities."
      ]
    },
    {
      role: "Software Developer",
      company: "Greenthink Ventures (Ingreens)",
      duration: "Sep 2022 - Sep 2023",
      bullets: [
        "Bangla Shasya Bima(BSB) - Build & maintenance of West Bengal government form-based app to track and apply for government scheme Bangla Shasya Bima Scheme.",
        "Krishak Bandhu(KB) - Build & maintenance of West Bengal government form-based app to track and apply for government scheme Krishak Bandhu Scheme.",
        "These apps were build as offline first since rural areas have weak internet connectivity."
      ]
    },
    {
      role: "Android Developer",
      company: "Dotcom Softwares",
      duration: "Mar 2021 - Sep 2022",
      bullets: [
          "Worked on various local client projects - Shopping, Employee management, Gamified educational app"
          ]
    },
    {
      role: "Android Developer",
      company: "Webvio technologies",
      duration: "Nov 2020 - Feb 2021",
      bullets: [
          "Under NDA - In-House Application"
          ]
    }
  ],
  recommendations: [
    {
      name: "Dustin Colten McAfee",
      relationship: "Android Software Manager at Elo Touch Solutions",
      text: "I have worked with Nazibul for a few years on Android Operating System development, and I have always been able to rely on him for high quality feature development and root cause analysis for any issues that we have experienced. Nazibul is a very experienced Android Operating System and Application Developer, and I would recommend him for anything Java or Android related.",
      profileLink: "https://www.linkedin.com/in/dustinmcafee/"
    },
    {
      name: "Mayank Jain",
      relationship: "Technical Lead at MahiTech LLC",
      text: "I had the chance to work with Nazibul, and it was a great experience. He is very good at solving problems and managing large codebase. He also communicates well with the team. He did a great job updating the old UI code to Jetpack Compose, which made the app smoother and more stable. I would definitely recommend him for Android app development.",
      profileLink: "https://www.linkedin.com/in/mayankzen/"
    },
    {
      name: "Greg Garman",
      relationship: "Android Developer at Elo Touch Solutions",
      text: "I had the pleasure of working with Nazibul on a large AOSP code base. He is an excellent problem solver and well versed in modern android app architecture. I was very impressed by his ability to refactor complex, old code and turn it into modern kotlin/jetpack compose that worked great and was easy to understand. He also has great interpersonal skills and explains concepts very well. I highly recommend Nazibul for any android development role.",
      profileLink: "https://www.linkedin.com/in/gregorybgarman/"
    },
    {
      name: "Shiny Majumder Karmakar",
      relationship: "IT Analyst at TCS",
      text: "I had the privilege of working with Nazibul, an exceptional Android developer, on several projects. His enthusiasm for learning, technical expertise, and dedication to delivering high-quality work stood out. Nazibul is a team player who communicates eﬀectively and ensures seamless collaboration between frontend and backend. His problem-solving skills, attention to detail, and proactive approach make him a reliable and valuable asset to any team. I highly recommend him for any role.",
      profileLink: "https://www.linkedin.com/in/shiny-majumder-karmakar-4683b5113/"
    },
    {
      name: "Prasad Parulkar",
      relationship: "Android Developer Intern at Elo Touch Solutions",
      text: "I had the pleasure of working with Nazibul on our team, where he excelled as a Software Engineer. We collaborated on several AOSP-based projects, particularly focusing on the Android framework layer. Nazibul's technical expertise and innovative problem-solving skills were crucial to our success. He's a great communicator, always willing to share his knowledge and support the team. His positive attitude and dedication made him a fantastic colleague and a true asset to any team.",
      profileLink: "https://www.linkedin.com/in/prasad-parulkar-b36515180/"
    }
  ],
  education: {
    degree: "Diploma in Computer Science and Technology",
    field: "Computer Engineering",
    institution: "W.B.S.C.T.E",
    duration: "2017 — 2020"
  },
  languages: [
    { name: "English", proficiency: "Native / Bilingual Proficiency" },
    { name: "Bengali", proficiency: "Native Spoken Proficiency" },
    { name: "Hindi", proficiency: "Native Spoken Proficiency" },
    { name: "Japanese", proficiency: "N5 Level" }
  ],
  preferences: {
    role: "Senior / Lead Android Software Engineer",
    location: "Hybrid or Onsite (Bengaluru / Chennai / Coimbatore / Tokyo)",
    employmentType: "Full-Time",
    noticePeriod: "Immediate (within 7 days)"
  },
  socialLinks: {
    github: "https://github.com/nalamzap",
    linkedin: "https://www.linkedin.com/in/nalamzap/",
    playStore: "https://play.google.com/store/apps/dev?id=5325993520819344034"
  }
};
