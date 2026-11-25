/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Trash2, ArrowLeft, Mail, AlertTriangle, CheckCircle, ShieldCheck } from 'lucide-react';

interface DeleteAccountViewProps {
  navigate: (path: string) => void;
}

export default function DeleteAccountView({ navigate }: DeleteAccountViewProps) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 md:py-12 text-zinc-200">

      {/* Top Navigation */}
      <div className="mb-8 flex items-center justify-between">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white hover:border-purple-500/50 transition-all duration-300 cursor-pointer group"
        >
          <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-sm">Back to Portfolio</span>
        </button>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-950/50 border border-red-800/40 text-red-300 text-xs font-mono">
          <Trash2 className="h-3.5 w-3.5 text-red-400" />
          <span>Account & Data Deletion</span>
        </div>
      </div>

      {/* Header Card */}
      <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 p-6 md:p-10 mb-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-red-600/20 border border-red-500/30 text-red-400">
              <Trash2 className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
                AsuStays Account Deletion
              </h1>
              <p className="text-zinc-400 text-sm mt-1">
                Request the permanent deletion of your AsuStays account and associated personal data.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions Content */}
      <div className="space-y-6">

        {/* Step 1 */}
        <div className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 backdrop-blur-sm p-6 md:p-8">
          <h2 className="text-xl font-display font-semibold text-white mb-3 flex items-center gap-3">
            <span className="text-red-400 font-mono text-sm">#1</span>
            How to Request Account Deletion
          </h2>
          <p className="text-zinc-300 leading-relaxed text-sm md:text-base mb-4">
            If you wish to delete your <strong>AsuStays</strong> account (`dev.nalamzap.asustays`) and remove all your personal data from our cloud databases, you can submit a deletion request directly via email:
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-xl bg-zinc-950/60 border border-zinc-800">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-purple-400 shrink-0" />
              <span className="font-mono text-white text-sm">nazibul@nalamzap.dev</span>
            </div>
            <a
              href="mailto:nazibul@nalamzap.dev?subject=AsuStays%20Account%20Deletion%20Request&body=Please%20delete%20my%20AsuStays%20account%20associated%20with%20my%20registered%20email%20address."
              className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-xs md:text-sm font-medium rounded-lg transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              Send Deletion Email
            </a>
          </div>
          <p className="text-zinc-400 text-xs mt-3">
            Please make sure to send the email from the registered email address associated with your AsuStays account to verify ownership.
          </p>
        </div>

        {/* Step 2 */}
        <div className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 backdrop-blur-sm p-6 md:p-8">
          <h2 className="text-xl font-display font-semibold text-white mb-3 flex items-center gap-3">
            <span className="text-red-400 font-mono text-sm">#2</span>
            What Data is Deleted?
          </h2>
          <p className="text-zinc-300 leading-relaxed text-sm md:text-base mb-4">
            Upon verifying your request, we will permanently delete or anonymize the following data associated with your account:
          </p>
          <ul className="space-y-2 text-zinc-300 text-sm md:text-base pl-2">
            <li className="flex items-start gap-2.5">
              <CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-1" />
              <span><strong>User Profile:</strong> Name, email address, phone number, emergency contacts, and profile photo.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-1" />
              <span><strong>Booking & Visit Records:</strong> PG reservation history, bed allocation details, and visit schedules.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-1" />
              <span><strong>Ledger & Payment Records:</strong> Rent invoice history and transaction reference numbers linked to your user profile.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-1" />
              <span><strong>Support Tickets:</strong> Maintenance requests, housekeeping inquiries, and attached photos.</span>
            </li>
          </ul>
        </div>

        {/* Retention / Timeline */}
        <div className="rounded-2xl border border-amber-950/40 bg-amber-950/10 p-6 md:p-8">
          <h3 className="text-lg font-semibold text-amber-300 mb-2 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0" />
            <span>Processing Timeline & Retention</span>
          </h3>
          <p className="text-zinc-300 text-sm leading-relaxed">
            Account deletion requests are processed within <strong>7 business days</strong>. Once processed, all personal data is permanently purged from our Firebase Cloud Firestore and Storage databases. Certain financial transaction logs required for statutory accounting compliance may be retained securely for the legally mandated period before final deletion.
          </p>
        </div>

      </div>

      {/* Footer Branding */}
      <div className="mt-12 pt-6 border-t border-zinc-900 text-center text-xs text-zinc-600 font-mono">
        © 2026 Sk Nazibul Alam • AsuStays Account Deletion Support
      </div>

    </div>
  );
}
