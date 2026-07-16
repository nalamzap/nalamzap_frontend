/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Terminal, Award, FileDown, CheckCircle, Github, Linkedin, Smartphone, Calendar, MapPin, Clock, ExternalLink, GraduationCap, Quote } from 'lucide-react';
import { hireMeData } from '../data/hireMe';

export interface HireMeViewProps {
  navigate: (path: string) => void;
}

export default function HireMeView({ navigate }: HireMeViewProps) {
  const [expandedWorkIdx, setExpandedWorkIdx] = useState<number>(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="p-4 md:p-8 text-zinc-100 space-y-8 select-none"
    >
      {/* Top Meta info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-800/80 pb-6 gap-4">
        <div>
          <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest block mb-1">
            Professional Profile
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-medium tracking-wide text-white">
            Hire Me
          </h2>
          <p className="text-zinc-400 font-light text-xs md:text-sm mt-1">
            Last updated: {hireMeData.lastUpdated}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 self-start md:self-auto print:hidden">
          <button
            onClick={() => navigate('/print-resume')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-900/60 hover:bg-purple-800/80 border border-purple-700/50 hover:border-purple-600/50 shadow-lg text-white font-semibold text-sm transition-all duration-300 cursor-pointer"
          >
            <FileDown className="h-4 w-4" />
            <span>Save Resume as PDF</span>
          </button>

          <a
            href="https://projects.nalamzap.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-700/50 hover:border-zinc-600/50 shadow-lg text-white font-semibold text-sm transition-all duration-300 cursor-pointer"
          >
            <ExternalLink className="h-4 w-4" />
            <span>View Projects</span>
          </a>
        </div>
      </div>

      {/* Main Grid: Left Resume Details | Right Skill bars and preference parameters */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left 2 Cols: Experience & Recommendations & Main Skillset list */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Skillset matching screenshot image 1 exactly */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-zinc-950/40 border border-zinc-800/80 rounded-2xl p-6 relative overflow-hidden backdrop-blur-sm"
          >
            <div className="absolute top-0 left-0 text-zinc-500 text-xs font-mono px-3 py-1 bg-zinc-900 border-r border-b border-zinc-800 rounded-tl-xl rounded-br-xl">
              CORE STATS
            </div>
            
            <h3 className="text-xl font-display font-medium text-white mb-4 mt-2">
              Skillset
            </h3>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-light mb-6">
              {hireMeData.skillsetSummary}
            </p>

            <ul className="space-y-4 text-xs md:text-sm text-zinc-300 font-light leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1.5 shrink-0">•</span>
                <span>
                  Deep experience across <strong className="text-zinc-100 font-medium font-sans">AOSP, Android SDK, AIDLs, Java, Kotlin</strong>, and <strong className="text-zinc-100 font-medium font-sans">Jetpack Compose</strong>, with a strong understanding of system services, IPC, and modern UI development.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1.5 shrink-0">•</span>
                <span>
                  Experienced in integrating <strong className="text-zinc-100 font-medium font-sans">payment, AWS</strong>, and <strong className="text-zinc-100 font-medium font-sans">Google SDKs</strong> (Firebase, ML Kit, Maps, Play Services), designing scalable architectures with <strong className="text-zinc-100 font-medium font-sans">MVVM/MVC</strong>, and delivering polished Material-based UIs.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1.5 shrink-0">•</span>
                <span>
                  End-to-end ownership using <strong className="text-zinc-100 font-medium font-sans">Git, GitHub, Bitbucket, CI/CD pipelines, JIRA</strong>, and <strong className="text-zinc-100 font-medium font-sans">Play Store Console</strong>, with additional cross-platform experience in <strong className="text-zinc-100 font-medium font-sans">Swift/SwiftUI, Flutter, Unity (Oculus Quest)</strong> and backend exposure to <strong className="text-zinc-100 font-medium font-sans">Spring Boot and MongoDB</strong>.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Interactive Employment Experience Accordion */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-medium text-white flex items-center gap-2 mb-2">
              <Briefcase className="h-5 w-5 text-purple-400" />
              <span>Employment History</span>
            </h3>

            {hireMeData.employments.map((job, idx) => {
              const isExpanded = expandedWorkIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-zinc-90 w-full border border-zinc-800/80 rounded-xl overflow-hidden transition-all duration-300 shadow-lg"
                >
                  <button
                    onClick={() => setExpandedWorkIdx(isExpanded ? -1 : idx)}
                    className="w-full text-left p-5 flex items-center justify-between hover:bg-zinc-800/10 transition-colors duration-200 cursor-pointer"
                  >
                    <div>
                      <h4 className="text-white font-medium font-display text-base md:text-lg">
                        {job.role}
                      </h4>
                      <p className="text-zinc-400 text-xs md:text-sm font-light mt-0.5">
                        {job.company} — <span className="text-purple-400/90 font-mono text-xs">{job.duration}</span>
                      </p>
                    </div>
                    <div className="ml-4 shrink-0 p-2 rounded-lg bg-zinc-800/60 border border-zinc-700/50">
                      <motion.svg
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        className="h-4 w-4 text-purple-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 pb-5 pt-1 border-t border-zinc-800/40 bg-zinc-950/20">
                          <ul className="space-y-2.5 text-zinc-300 text-xs md:text-sm font-light leading-relaxed">
                            {job.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex gap-2.5 items-start">
                                <CheckCircle className="h-4 w-4 mt-1 text-purple-500/80 shrink-0" />
                                <span className="whitespace-pre-line">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* LinkedIn Recommendations Showcase */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-medium text-white flex items-center gap-2">
              <Award className="h-5 w-5 text-purple-400" />
              <span>LinkedIn Recommendations</span>
            </h3>

            <div className="flex overflow-x-auto gap-4 pb-4 snap-x custom-scrollbar">
              {hireMeData.recommendations.map((rec, recIdx) => (
                <div
                  key={recIdx}
                  className="min-w-[300px] md:min-w-[400px] bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-5 flex flex-col justify-between shadow-md snap-start"
                >
                  <p className="text-zinc-300 text-xs md:text-sm font-light italic leading-relaxed mb-4">
                    "{rec.text}"
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-zinc-800/40 pt-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-purple-900/40 border border-purple-500/30 flex items-center justify-center font-bold text-sm text-purple-200">
                        {rec.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-white text-xs md:text-sm font-medium">
                          {rec.name}
                        </h4>
                        <p className="text-zinc-500 text-[10px] md:text-xs">
                          {rec.relationship}
                        </p>
                      </div>
                    </div>

                    {rec.profileLink && (
                      <a
                        href={rec.profileLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-zinc-800/40 hover:bg-zinc-800 hover:text-purple-400 transition-all duration-200"
                        title="View profiles"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {hireMeData.recommendations.length > 1 && (
              <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest text-center animate-pulse">
                Scroll horizontally to view more →
              </p>
            )}
          </div>

          {/* Static Education Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-medium text-white flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-purple-400" />
              <span>Education</span>
            </h3>

            <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
               <div className="flex flex-col md:flex-row justify-between gap-2">
                 <div>
                    <h4 className="text-white font-medium text-base">{hireMeData.education.degree}</h4>
                    <p className="text-purple-400 text-xs md:text-sm font-light">{hireMeData.education.field}</p>
                 </div>
                 <div className="text-right">
                    <p className="text-zinc-300 text-sm">{hireMeData.education.institution}</p>
                    <p className="text-zinc-500 text-xs font-mono">{hireMeData.education.duration}</p>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Right 1 Col: Tech Stack Tags, Social Links, and Job Preferences */}
        <div className="space-y-6">
          
          {/* Portfolio Links (Socials) */}
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5 shadow-lg">
            <h4 className="text-white font-display font-medium text-sm md:text-base mb-4 pb-2 border-b border-zinc-800">
              Developer Connections
            </h4>
            <div className="flex items-center gap-4">
              <a
                href={hireMeData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-zinc-950/40 border border-zinc-800/40 hover:border-zinc-700 text-zinc-300 hover:text-white hover:bg-purple-900/20 transition-all duration-300"
                title="GitHub"
              >
                <Github className="h-5 w-5 text-purple-400" />
              </a>

              <a
                href={hireMeData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-zinc-950/40 border border-zinc-800/40 hover:border-zinc-700 text-zinc-300 hover:text-white hover:bg-purple-900/20 transition-all duration-300"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-purple-400" />
              </a>

              <a
                href={hireMeData.socialLinks.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-zinc-950/40 border border-zinc-800/40 hover:border-zinc-700 text-zinc-300 hover:text-white hover:bg-purple-900/20 transition-all duration-300"
                title="Google Play Store"
              >
                <Smartphone className="h-5 w-5 text-purple-400" />
              </a>
            </div>
          </div>

          {/* Static Language Proficiency Section */}
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5 shadow-lg">
            <h4 className="text-white font-display font-medium text-sm md:text-base mb-4 pb-2 border-b border-zinc-800 flex items-center gap-2">
              <Quote className="h-4 w-4 text-purple-400" />
              <span>Languages</span>
            </h4>
            <div className="space-y-3">
              {hireMeData.languages.map((lang, i) => (
                <div key={i}>
                  <span className="text-[10px] uppercase font-mono text-zinc-500 tracking-wider block">{lang.name}</span>
                  <p className="text-white text-xs font-medium">{lang.proficiency}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats: technical tags */}
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5 shadow-lg">
            <h4 className="text-white font-display font-medium text-sm md:text-base mb-4 pb-2 border-b border-zinc-800 flex items-center gap-2">
              <Terminal className="h-4 w-4 text-purple-400" />
              <span>Technical Skills</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {hireMeData.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-2.5 py-1 text-[11px] font-mono rounded bg-zinc-800/80 text-purple-300 border border-zinc-705/30 uppercase tracking-wide hover:bg-purple-900/20 hover:text-white hover:border-purple-500/20 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Prefs Panel - EXCLUDES CTC as strictly mandated! */}
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/10 rounded-full blur-xl pointer-events-none" />
            
            <h4 className="text-white font-display font-medium text-sm md:text-base mb-4 pb-2 border-b border-zinc-800">
              Future Endeavors (Preferences)
            </h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Briefcase className="h-4 w-4 text-purple-400 mt-1 shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-mono text-zinc-500 tracking-wider">
                    Role Preference
                  </span>
                  <p className="text-white text-xs md:text-sm font-medium">
                    {hireMeData.preferences.role}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-purple-400 mt-1 shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-mono text-zinc-500 tracking-wider">
                    Preferred Location
                  </span>
                  <p className="text-white text-xs md:text-sm font-medium">
                    {hireMeData.preferences.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-purple-400 mt-1 shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-mono text-zinc-500 tracking-wider">
                    Employment Type
                  </span>
                  <p className="text-white text-xs md:text-sm font-medium">
                    {hireMeData.preferences.employmentType}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="h-4 w-4 text-purple-400 mt-1 shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-mono text-zinc-500 tracking-wider">
                    Notice Interval
                  </span>
                  <p className="text-white text-xs md:text-sm font-medium">
                    {hireMeData.preferences.noticePeriod}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
