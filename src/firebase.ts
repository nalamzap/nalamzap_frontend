/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, serverTimestamp, getDocFromServer, doc } from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';
import { ContactMessage, KnowMeCard, LifeEvent, ResumeInfo } from './types';

import { PortfolioData } from './types';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

const PORTFOLIO_DOC_PATH = 'portfolio/main';

export async function getPortfolioData(): Promise<PortfolioData | null> {
  const docRef = doc(db, PORTFOLIO_DOC_PATH);
  const docSnap = await getDocFromServer(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as PortfolioData;
  }
  return null;
}

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
  };
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid || null,
      email: auth.currentUser?.email || null,
      emailVerified: auth.currentUser?.emailVerified || null,
    },
    operationType,
    path,
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Validation function to safeguard connection on init
export async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Please check your Firebase configuration.");
    }
  }
}

// Inbound contact message submission
export async function submitContactMessage(name: string, email: string, message: string): Promise<string> {
  const path = 'contact_messages';
  try {
    const docRef = await addDoc(collection(db, path), {
      name,
      email,
      message,
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}

// Beautiful fallback default data for the application
export const defaultKnowMeCards: KnowMeCard[] = [
  {
    id: "card_1",
    title: "Mind & Emotions",
    subtitle: "How I think, feel, and process things",
    description: "I spend a lot of time observing people, systems, and my own reactions to them. I'm drawn to questions of fairness, emotional balance, and why things are the way they are.\n\nI don't experience emotions loudly and I tend to analyze feelings before expressing them, trying to understand how they influence decisions.\n\nMy mind loops.. revisiting ideas, questioning assumptions, and refining them. Sometimes this becomes overthinking; other times, it leads to clarity.",
    primaryActionLabel: "Grab a coffee/meal",
    primaryActionUrl: "mailto:nalamzap@gmail.com?subject=Let's Grab Coffee",
    order: 1
  },
  {
    id: "card_2",
    title: "At a Glance - Interests",
    subtitle: "Exploring limits and disciplines",
    description: "**Create** - Programming, Blog & Author, Pencil Sketch\n\n**Media** - Anime & Manga, K-Drama & C-Drama, Music & Movies, Learning Japanese\n\n**Movement** - Karate, Walking, Cycling, Skateboarding & skating\n\nGames, Thinking",
    primaryActionLabel: "Get an Invite",
    primaryActionUrl: "mailto:nalamzap@gmail.com?subject=Invite to Collaborate",
    order: 2
  },
  {
    id: "card_3",
    title: "Programming",
    subtitle: "Building, thinking, refining",
    imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400&auto=format&fit=crop", // rock visual matching moody style
    description: "Programming is both my profession and a thinking tool. I enjoy shaping systems, questioning assumptions, and optimizing flows; not just making things work, but making them feel right.",
    primaryActionLabel: "View Projects",
    primaryActionUrl: "https://github.com/sk-nazibul-alam",
    order: 3
  },
  {
    id: "card_4",
    title: "Author",
    subtitle: "Blogging for fun, authoring a novel",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop",
    description: "Writing is how I let thoughts exist outside my head. Blogging is casual and exploratory; a place to think out loud without pressure.\n\nLonger writing is different. Working on a novel is slower, more deliberate, and more personal. It's less about output and more about staying with an idea long enough to understand it.",
    primaryActionLabel: "Read Blog",
    primaryActionUrl: "https://sk-nazibul-alam.github.io/blog",
    secondaryActionLabel: "Read Book",
    secondaryActionUrl: "https://sk-nazibul-alam.github.io/novel",
    order: 4
  }
];

export const defaultLifeEvents: LifeEvent[] = [
  {
    id: "event_1",
    title: "Lead Android & AOSP Developer",
    date: "Jan 2024 - Present",
    description: "Leading system-level integration of low-level IPC APIs and frameworks. Designing highly performant custom AOSP software interfaces for specialized devices, scaling to over 10M active modules, and mentoring system engineers.",
    imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400&auto=format&fit=crop", // crystal/rock
    order: 1
  },
  {
    id: "event_2",
    title: "Compose Frame library release",
    date: "May 2022",
    description: "Authored and launched an custom extension library for Jetpack Compose simplifying complex navigation states. Focused on structural design, layout predictability, and high fluid transitions.",
    imageUrl: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?q=80&w=400&auto=format&fit=crop", // dreamy window
    order: 2
  },
  {
    id: "event_3",
    title: "Senior Android Developer at AppMakers",
    date: "Aug 2020 - Dec 2023",
    description: "Re-architected old legacy Java architectures to strict modular Kotlin MVVM modules. Successfully integrated cross-functional systems, secure localized offline databases, and offline sync handlers.",
    imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=400&auto=format&fit=crop", // dark framed attic gallery
    order: 3
  }
];

export const defaultResumeInfo: ResumeInfo = {
  skillsetSummary: "Android engineer with 5+ years of experience building applications and platform components, including hands-on work as a first-party (AOSP) Android developer on system-level features and framework integrations.",
  lastUpdated: "18th January 2026",
  skills: [
    "Kotlin", "Java", "AOSP (Android Open Source Project)", "AIDL & IPC Hubs",
    "Jetpack Compose", "Android SDK & NDK", "C++ Engine Bindings",
    "Swift, SwiftUI (iOS Dev)", "Flutter", "Spring Boot & backend integrations",
    "Git & GitHub Actions CI/CD", "Play Store Console & Gradle optimization"
  ],
  employments: [
    {
      role: "Lead Android Engineer / AOSP Creator",
      company: "AOSP First Party Integration Group",
      duration: "Jan 2024 - Present",
      bullets: [
        "Architected custom system-level extensions inside AOSP (Android Open Source Project).",
        "Author custom AIDLs, enabling secure sandbox RPC communication channels between system layers.",
        "Created an event loop mechanism that reduced background service waking interrupts by 30%.",
        "Instruct and guide developers on hardware-friendly memory footprints using modular Compose frameworks."
      ]
    },
    {
      role: "Senior Android Software Developer",
      company: "AppMakers International",
      duration: "Aug 2020 - Dec 2023",
      bullets: [
        "Re-imagined legacy applications into multi-module, highly cohesive Clean Architecture packages.",
        "Spearheaded Kotlin transitions, leading to a 45% decrease in overall code size and runtime null-pointers.",
        "Integrated modern offline-first sync engines powered by Room databases and AES-256 local encrypted storage.",
        "Configured secure GitLab CI/CD builds automated to generate dev, staging, and production release variants."
      ]
    },
    {
      role: "Android UI Developer",
      company: "PixelPerfect Labs",
      duration: "Jun 2018 - Jul 2020",
      bullets: [
        "Focused on custom layouts, complex transition animations, and high-performance custom canvas views.",
        "Integrated Maps SDK, Location APIs, and customized low-latency Geofencing triggers."
      ]
    }
  ],
  recommendations: [
    {
      name: "Arindam Sen",
      relationship: "Engineering Director",
      text: "Nazibul possesses a rare combination of deeply technical low-level platform understanding and clean architectural patterns. His work in Compose and AOSP was highly pivotal for our system delivery.",
      profileLink: "https://linkedin.com"
    },
    {
      name: "Sayaka Tanaka",
      relationship: "Lead Designer at AppMakers",
      text: "Nazibul is a design's best friend. He refuses to sacrifice responsive alignment and micro-interactions, making sure our animations run smoothly even on lower-tier devices.",
      profileLink: "https://linkedin.com"
    }
  ],
  preferences: {
    role: "Senior / Lead Android Software Engineer",
    location: "Remote or Hybrid (Bangalore / Tokyo / Singapore)",
    employmentType: "Full-Time",
    noticePeriod: "60 days                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               "
  },
  githubUrl: "https://github.com/nalamzap",
  linkedinUrl: "https://www.linkedin.com/in/nalamzap/",
  playStoreUrl: "https://play.google.com/store/apps/dev?id=5325993520819344034"
};
