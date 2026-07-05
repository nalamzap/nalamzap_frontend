/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { submitContactMessage } from '../firebase';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Smartphone, CheckCircle, AlertCircle, Loader2, Link as LinkIcon } from 'lucide-react';
import { FindMeData } from '../types';

interface Props {
  externalData?: FindMeData;
}

export default function FindMeView({ externalData }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Validation
    if (!name.trim()) {
      setErrorMsg('Please specify your name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please specify a valid email address.');
      return;
    }
    if (!message.trim() || message.length < 5) {
      setErrorMsg('Please enter a constructive message (at least 5 characters).');
      return;
    }

    setLoading(true);

    try {
      await submitContactMessage(name.trim(), email.trim(), message.trim());
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (err: any) {
      console.error('Submission failed', err);
      setErrorMsg('Could not submit message. Please inspect connection configurations.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="p-4 md:p-8 text-white space-y-8 select-none"
    >
      {/* Header info */}
      <div>
        <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest block mb-1">
          Get In Touch
        </span>
        <h2 className="text-2xl md:text-3xl font-display font-medium tracking-wide text-purple-200">
          Let's Talk
        </h2>
        <p className="text-zinc-400 font-light text-xs md:text-sm mt-1">
          Have an interesting project, a story to share, or just want to say hi? Drop me a line below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Column: Coordinates details & Desaturated OSM Map */}
        <div className="space-y-6">
          <div className="bg-zinc-950/40 border border-zinc-800/80 rounded-xl p-5 space-y-4 shadow-lg backdrop-blur-sm">
            <h3 className="text-white font-medium font-display text-base pb-2 border-b border-zinc-800/60">
              Where to find me
            </h3>

            <div className="space-y-3.5">
              <a
                href={`mailto:${externalData?.email || 'nalamzap@gmail.com'}`}
                className="flex items-center gap-3 text-zinc-300 hover:text-white group transition-colors duration-200"
              >
                <div className="p-2 rounded-lg bg-zinc-800/60 border border-zinc-700/50 group-hover:bg-purple-900/30 transition-all duration-300">
                  <Mail className="h-4 w-4 text-purple-400" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-zinc-500 block">
                    Direct Email
                  </span>
                  <span className="text-sm font-light">{externalData?.email || 'nalamzap@gmail.com'}</span>
                </div>
              </a>

              <div className="flex items-center gap-3 text-zinc-300">
                <div className="p-2 rounded-lg bg-zinc-800/60 border border-zinc-700/50">
                  <Phone className="h-4 w-4 text-purple-400" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-zinc-500 block">
                    Mobile Number
                  </span>
                  <span className="text-sm font-light">{externalData?.mobile || '+91 98765 43210'}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-zinc-300">
                <div className="p-2 rounded-lg bg-zinc-800/60 border border-zinc-700/50">
                  <MapPin className="h-4 w-4 text-purple-400" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-zinc-500 block">
                    Currently in
                  </span>
                  <span className="text-sm font-light">
                    {externalData?.address || 'Kolkata, West Bengal, India'}
                  </span>
                </div>
              </div>
            </div>

            {/* Render External Social Links */}
            {externalData?.socialLinks && externalData.socialLinks.length > 0 && (
              <div className="pt-4 flex flex-wrap gap-3 border-t border-zinc-800/60">
                {externalData.socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-800/40 border border-zinc-700/40 text-xs font-medium text-purple-300 hover:bg-purple-900/20 hover:text-white transition-all"
                  >
                    <LinkIcon size={12} />
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Styled desaturated Map frame with pin */}
          <div className="rounded-xl overflow-hidden border border-zinc-800 shadow-xl relative z-10 h-72">
            <div className="absolute top-3 left-3 z-20 px-3 py-1 bg-zinc-950/80 border border-zinc-800 text-zinc-300 font-mono text-[10px] uppercase tracking-widest rounded-lg">
              Station coordinates
            </div>
            {/* Grayscale filter makes standard OSM map look incredibly slick and cohesive with system design */}
            <iframe
              title="Sk Nazibul Alam Location Map"
              width="100%"
              height="100%"
              src="https://www.openstreetmap.org/export/embed.html?bbox=88.3000%2C22.5000%2C88.4500%2C22.6500&layer=mapnik&marker=22.5726%2C88.3639"
              className="w-full h-full border-0 select-none pointer-events-none"
              style={{
                filter: 'grayscale(100%) invert(92%) contrast(150%) brightness(95%) saturate(10%)',
              }}
            />
          </div>
        </div>

        {/* Right Column: Secure contact form */}
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 shadow-2xl backdrop-blur-sm">
          <h3 className="text-white font-medium font-display text-base mb-4 pb-2 border-b border-zinc-800">
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-[11px] uppercase font-mono text-zinc-400 tracking-wider block mb-1">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="How should I address you?"
                disabled={loading || success}
                className="w-full px-4 py-2.5 rounded-lg bg-zinc-950/50 border border-zinc-800 text-sm placeholder-zinc-600 focus:outline-none focus:border-purple-500 font-light transition-all duration-200"
              />
            </div>

            <div>
              <label className="text-[11px] uppercase font-mono text-zinc-400 tracking-wider block mb-1">
                Your Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="contact@yourdomain.com"
                disabled={loading || success}
                className="w-full px-4 py-2.5 rounded-lg bg-zinc-950/50 border border-zinc-800 text-sm placeholder-zinc-600 focus:outline-none focus:border-purple-500 font-light transition-all duration-200"
              />
            </div>

            <div>
              <label className="text-[11px] uppercase font-mono text-zinc-400 tracking-wider block mb-1">
                Your Message / Enquiry
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Write whatever is on your mind..."
                disabled={loading || success}
                className="w-full px-4 py-2.5 rounded-lg bg-zinc-950/50 border border-zinc-800 text-sm placeholder-zinc-600 focus:outline-none focus:border-purple-500 font-light transition-all duration-200 custom-scrollbar resize-none"
              />
            </div>

            <AnimatePresence>
              {errorMsg && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-3 bg-red-950/25 border border-red-900/40 rounded-lg flex items-start gap-2.5 text-xs text-red-300"
                >
                  <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
                  <span>{errorMsg}</span>
                </motion.div>
              )}

              {success && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-3 bg-emerald-950/25 border border-emerald-950/40 rounded-lg flex items-start gap-2.5 text-xs text-emerald-300 shadow-md"
                >
                  <CheckCircle className="h-4 w-4 shrink-0 text-emerald-400" />
                  <div>
                    <h5 className="font-semibold text-white mb-0.5">Message Dispatched!</h5>
                    <p className="font-light text-emerald-400/80">
                      Thank you. Your message has been saved to Firestore. I will get back to you shortly.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={loading || success}
              className={`w-full py-2.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 shadow-lg transition-all duration-200 cursor-pointer ${
                success
                  ? 'bg-zinc-800 border border-zinc-700 text-zinc-500 cursor-not-allowed'
                  : 'bg-purple-900/60 hover:bg-purple-800/80 border border-purple-700/50 text-white'
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin text-purple-300" />
                  <span>Submitting request...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
