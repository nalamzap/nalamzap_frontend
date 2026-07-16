/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TraceMeItem {
  title: string;
  shortDesc?: string;
  imageUrl?: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface FindMeData {
  mobile: string;
  email: string;
  address: string;
  coordinates: {
    lat: number;
    long: number;
  };
  socialLinks: SocialLink[];
}

export interface Employment {
  role: string;
  companyName: string;
  dateRange: string;
  bulletPoints: string[];
  shortDescription?: string;
}

export interface QuickLink {
  label: string;
  url: string;
}

export interface Preference {
  role: string;
  location: string;
  employmentType: string;
  noticePeriod: string;
}

export interface Achievement {
  title: string;
  subtitle: string;
  date: string;
}

export interface Education {
  degree: string;
  school: string;
  date: string;
}

export interface Recommendation {
  text: string;
  name: string;
  position: string;
  linkedinLink: string;
}

export interface HireMeData {
  lastUpdate: string;
  skills: string[];
  quickLinks: QuickLink[];
  preference: Preference;
  employments: Employment[];
  achievements: Achievement[];
  education: Education[];
  recommendations: Recommendation[];
  overview: string;
}

export interface PortfolioData {
  traceMe: TraceMeItem[];
  findMe: FindMeData;
  hireMe: HireMeData;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: any; // Firestore serverTimestamp
}

export interface KnowMeCard {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  imageUrl?: string;
  primaryActionLabel?: string;
  primaryActionUrl?: string;
  primaryActionInternal?: boolean;
  secondaryActionLabel?: string;
  secondaryActionUrl?: string;
  secondaryActionInternal?: boolean;
  order: number;
}

export interface LifeEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl?: string;
  order: number;
}

export interface RecommendationItem {
  name: string;
  imageUrl?: string;
  redirectUrl?: string;
}

export interface RecommendationCategory {
  title: string;
  items: RecommendationItem[];
}

export interface ResumeInfo {
  skillsetSummary: string;
  lastUpdated: string;
  skills: string[];
  employments: any[]; // Temp to avoid conflict
  recommendations: any[]; // Temp to avoid conflict
  preferences: any; // Temp to avoid conflict
  githubUrl: string;
  linkedinUrl: string;
  playStoreUrl: string;
}
