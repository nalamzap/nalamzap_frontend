/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { ArrowLeft, Mail, Github, Linkedin, Smartphone, Globe } from 'lucide-react';
import { hireMeData } from '../data/hireMe';

interface PrintResumeViewProps {
  onBack: () => void;
}

export default function PrintResumeView({ onBack }: PrintResumeViewProps) {
  useEffect(() => {
    // Delay slightly to ensure styles are applied before print dialog opens
    const timer = setTimeout(() => {
      window.print();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-12 font-sans selection:bg-zinc-200">

      <style dangerouslySetInnerHTML={{ __html: `
        @page {
          margin: 1cm;
          size: auto;
        }
        body {
          -webkit-print-color-adjust: exact;
        }
      ` }} />

      {/* Print Controls (Hidden during print) */}
      <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center print:hidden border-b pb-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-800 transition-colors cursor-pointer font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Site</span>
        </button>
        <p className="text-zinc-500 text-sm">
          PDF Generation Preview — Press Ctrl+P if dialog didn't open
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">

        {/* Header Section */}
        <header className="border-b-2 border-black pb-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Sk Nazibul Alam</h1>
              <p className="text-lg text-zinc-600 mt-0.5 font-medium">{hireMeData.preferences.role}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-[13px] text-zinc-700">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>nazibul@nalamzap.dev</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                <span>linkedin.com/in/nalamzap</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                <span>github.com/nalamzap</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>projects.nalamzap.dev</span>
              </div>
            </div>
          </div>
        </header>

        {/* Overview */}
        <section>
          <h2 className="text-base font-bold uppercase tracking-wider border-b border-zinc-300 mb-2 pb-1">Professional Summary</h2>
          <p className="text-[11px] text-zinc-800 leading-relaxed">
            {hireMeData.skillsetSummary}
          </p>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-base font-bold uppercase tracking-wider border-b border-zinc-300 mb-2 pb-1">Technical Skills</h2>
          <div className="space-y-1 text-[11px] text-zinc-800 leading-snug">
            <p><strong>• Languages & Mobile:</strong> Kotlin, Java, Swift, SwiftUI, Flutter, Spring Boot, Linux Shell/Bash</p>
            <p><strong>• Android & AOSP:</strong> AOSP (Android Open Source Project), AIDL & IPC Hubs, Jetpack Compose, Android SDK & NDK, ADB, Fastboot</p>
            <p><strong>• Architecture & Systems:</strong> MVVM & Multi-module Architecture, Socket Programming, Chromium Engine, Offline-First Apps, Android Lint & Static Analysis, Data Structures & Algorithms</p>
            <p><strong>• Tools & Workflow:</strong> Git, Github, Bitbucket, JIRA, CI/CD, Play Store Console, Gradle optimization, Figma</p>
          </div>
        </section>

        {/* Employment History */}
        <section className="space-y-4">
          <h2 className="text-base font-bold uppercase tracking-wider border-b border-zinc-300 mb-3 pb-1">Employment History</h2>

          {hireMeData.employments.map((job, idx) => (
            <div key={idx} className="mb-4">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-base">{job.role}</h3>
                <span className="text-[12px] font-mono text-zinc-600 font-medium">{job.duration}</span>
              </div>
              <p className="text-[13px] text-zinc-800 font-semibold mb-1">{job.company}</p>

              <ul className="space-y-1 pl-4 list-disc marker:text-zinc-400">
                {job.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="text-zinc-700 text-[13px] leading-snug whitespace-pre-line">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-base font-bold uppercase tracking-wider border-b border-zinc-300 mb-2 pb-1">Education</h2>
          <div className="text-[13px]">
            <h3 className="font-bold">{hireMeData.education.degree}</h3>
            <p className="text-zinc-600">{hireMeData.education.field}</p>
            <p className="text-zinc-800 font-medium mt-0.5">{hireMeData.education.institution}</p>
            <p className="text-zinc-500 text-[11px] font-mono mt-0.5">{hireMeData.education.duration}</p>
          </div>
        </section>

        {/* Footer info */}
        <footer className="pt-10 border-t border-zinc-200 text-center text-zinc-400 text-[10px] uppercase tracking-widest">
          Generated from nalamzap.dev on {new Date().toLocaleDateString()}
        </footer>

      </div>
    </div>
  );
}
