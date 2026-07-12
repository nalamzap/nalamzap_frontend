/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MessageSquare, Code, BookOpen, Coffee, MousePointer, Mail } from 'lucide-react';
import { knowMeCards } from '../data/knowMe';

// A lightweight custom decorator for simple markdown details (bolds & paragraphs)
function renderDescription(text: string) {
  if (!text) return null;
  return text.split('\n\n').map((paragraph, idx) => {
    // Check for bold notation: **text**
    const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={idx} className="text-zinc-300 text-sm leading-relaxed mb-4 font-light">
        {parts.map((part, pIdx) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return (
              <strong key={pIdx} className="font-semibold text-white">
                {part.slice(2, -2)}
              </strong>
            );
          }
          return part;
        })}
      </p>
    );
  });
}

// Icon getter for cards
const getIconForCard = (title: string) => {
  const norm = title.toLowerCase();
  if (norm.includes('mind') || norm.includes('emotion')) return <Coffee className="h-5 w-5 text-purple-400" />;
  if (norm.includes('interest') || norm.includes('glance')) return <MessageSquare className="h-5 w-5 text-purple-400" />;
  if (norm.includes('program') || norm.includes('dev')) return <Code className="h-5 w-5 text-purple-400" />;
  if (norm.includes('write') || norm.includes('author') || norm.includes('novel')) return <BookOpen className="h-5 w-5 text-purple-400" />;
  return <MousePointer className="h-5 w-5 text-purple-400" />;
};

interface KnowMeViewProps {
  navigate: (path: string) => void;
}

export default function KnowMeView({ navigate }: KnowMeViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="flex flex-col text-white max-h-full h-full relative"
    >
      {/* Intro Quote */}
      <div className="p-4 md:p-8 border-b border-zinc-800/50 bg-zinc-950/20">
        <p className="text-zinc-200 text-base font-light leading-relaxed max-w-4xl italic border-l-2 border-purple-500 pl-4">
          "I'm a Software Engineer who thinks a lot about emotions, fairness, and optimization. I tend to get stuck in side ideas and thought loops, so this space is a way of making sense of them."
        </p>
      </div>

      {/* Horizontal horizontal wrapper */}
      <div className="overflow-x-auto overflow-y-hidden py-8 px-6 md:px-12 flex-1 flex items-center custom-scrollbar">
        <div className="flex gap-6 pb-4">
          {knowMeCards.map((card, index) => (
            <motion.div
              key={card.id || index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="w-[280px] sm:w-[320px] md:w-[380px] shrink-0 bg-zinc-900/90 border border-zinc-800/80 rounded-2xl p-5 md:p-6 flex flex-col justify-between shadow-2xl backdrop-blur-md relative overflow-hidden"
              style={{ minHeight: '420px' }}
            >
              {/* Decorative top corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800/40">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-zinc-800/60 border border-zinc-700/35">
                      {getIconForCard(card.title)}
                    </div>
                    <div>
                      <h3 className="font-display font-medium text-lg text-white tracking-wide">
                        {card.title}
                      </h3>
                      {card.subtitle && (
                        <p className="text-zinc-500 text-xs font-medium font-mono uppercase tracking-wider">
                          {card.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Optional Image */}
                {card.imageUrl && (
                  <div className="w-full h-32 mb-4 overflow-hidden rounded-xl border border-zinc-800 relative">
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                )}

                {/* Description Body */}
                <div className="max-h-[220px] overflow-y-auto pr-1 text-zinc-300 text-sm scroll-py-1">
                  {renderDescription(card.description)}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 pt-3 border-t border-zinc-800/40 flex flex-wrap gap-2 justify-end">
                {card.secondaryActionLabel && card.secondaryActionUrl && (
                  card.secondaryActionInternal ? (
                    <button
                      onClick={() => navigate(card.secondaryActionUrl!)}
                      className="text-xs text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 font-medium px-3.5 py-1.5 rounded-lg bg-zinc-950/20 hover:bg-zinc-800/30 transition-all duration-200 cursor-pointer"
                    >
                      {card.secondaryActionLabel}
                    </button>
                  ) : (
                    <a
                      href={card.secondaryActionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 font-medium px-3.5 py-1.5 rounded-lg bg-zinc-950/20 hover:bg-zinc-800/30 transition-all duration-200"
                    >
                      {card.secondaryActionLabel}
                    </a>
                  )
                )}
                {card.primaryActionLabel && card.primaryActionUrl && (
                  card.primaryActionInternal ? (
                    <button
                      onClick={() => navigate(card.primaryActionUrl!)}
                      className="inline-flex items-center gap-1.5 text-xs text-purple-100 hover:text-white font-semibold px-4 py-1.5 rounded-lg bg-purple-900/60 hover:bg-purple-800/80 border border-purple-700/50 shadow-md transition-all duration-200 cursor-pointer"
                    >
                      <span>{card.primaryActionLabel}</span>
                    </button>
                  ) : (
                    <a
                      href={card.primaryActionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-purple-100 hover:text-white font-semibold px-4 py-1.5 rounded-lg bg-purple-900/60 hover:bg-purple-800/80 border border-purple-700/50 shadow-md transition-all duration-200"
                    >
                      <Mail className="h-3 w-3" />
                      <span>{card.primaryActionLabel}</span>
                    </a>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
