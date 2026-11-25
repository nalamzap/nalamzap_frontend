/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, ArrowLeft, Mail, Calendar, User, FileText, ExternalLink } from 'lucide-react';
import { PrivacyPolicyData } from '../data/comig_privacy';

interface PrivacyPolicyViewProps {
  data: PrivacyPolicyData;
  navigate: (path: string) => void;
}

export default function PrivacyPolicyView({ data, navigate }: PrivacyPolicyViewProps) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 md:py-12 text-zinc-200">

      {/* Top Navigation / Back button */}
      <div className="mb-8 flex items-center justify-between">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white hover:border-purple-500/50 transition-all duration-300 cursor-pointer group"
        >
          <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-sm">Back to Portfolio</span>
        </button>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/50 border border-purple-800/40 text-purple-300 text-xs font-mono">
          <Shield className="h-3.5 w-3.5 text-purple-400" />
          <span>Official Privacy Policy</span>
        </div>
      </div>

      {/* Header Card */}
      <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 p-6 md:p-10 mb-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-purple-600/20 border border-purple-500/30 text-purple-400">
              <FileText className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
                {data.appName} Privacy Policy
              </h1>
              <p className="text-zinc-400 text-sm mt-1">
                Data protection and privacy guidelines for users of {data.appName}.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-zinc-800/80 text-xs md:text-sm text-zinc-400">
            <div className="flex items-center gap-2.5">
              <User className="h-4 w-4 text-purple-400 shrink-0" />
              <span>Developer: <strong className="text-zinc-200">{data.developerName}</strong></span>
            </div>
            <div className="flex items-center gap-2.5">
              <Calendar className="h-4 w-4 text-purple-400 shrink-0" />
              <span>Effective Date: <strong className="text-zinc-200">{data.effectiveDate}</strong></span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 text-purple-400 shrink-0" />
              <span>Contact: <a href={`mailto:${data.contactEmail}`} className="text-purple-400 hover:underline">{data.contactEmail}</a></span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-6">
        {data.sections.map((section, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 backdrop-blur-sm p-6 md:p-8 hover:border-zinc-700/80 transition-colors duration-300"
          >
            <h2 className="text-xl font-display font-semibold text-white mb-4 flex items-center gap-3">
              <span className="text-purple-400 font-mono text-sm">#{idx + 1}</span>
              {section.title.replace(/^\d+\.\s*/, '')}
            </h2>

            <div className="space-y-3 text-zinc-300 leading-relaxed text-sm md:text-base">
              {Array.isArray(section.content) ? (
                section.content.map((paragraph, pIdx) => (
                  <p key={pIdx} className={paragraph.startsWith('•') ? 'pl-4 text-zinc-400' : ''}>
                    {paragraph}
                  </p>
                ))
              ) : (
                <p>{section.content}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Callout */}
      <div className="mt-12 rounded-2xl border border-purple-900/40 bg-purple-950/20 p-6 md:p-8 text-center">
        <h3 className="text-lg font-semibold text-white mb-2">Have questions regarding your data?</h3>
        <p className="text-zinc-400 text-sm mb-4">
          We are committed to transparency and user privacy. Reach out if you have any inquiries.
        </p>
        <a
          href={`mailto:${data.contactEmail}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm transition-all duration-300 shadow-lg shadow-purple-900/30 cursor-pointer"
        >
          <Mail className="h-4 w-4" />
          <span>Contact Privacy Support</span>
        </a>
      </div>

      {/* Footer Branding */}
      <div className="mt-12 pt-6 border-t border-zinc-900 text-center text-xs text-zinc-600 font-mono">
        © 2026 {data.developerName} • {data.appName} Privacy Policy
      </div>

    </div>
  );
}
