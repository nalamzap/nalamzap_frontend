/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowLeft, Bookmark, ExternalLink } from 'lucide-react';
import { recommendationCategories } from '../data/recommendations';

interface RecommendationsViewProps {
  onBack: () => void;
}

export default function RecommendationsView({ onBack }: RecommendationsViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="p-4 md:p-8 text-white flex flex-col min-h-full overscroll-contain"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-10 sticky top-0 z-50 bg-black/40 backdrop-blur-md py-4 -mx-4 px-4 md:-mx-8 md:px-8 border-b border-zinc-800/50">
        <button
          onClick={onBack}
          className="p-2 rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-700/50 text-zinc-300 hover:text-white transition-all duration-200 cursor-pointer"
          aria-label="Go back"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div>
          <h2 className="text-2xl md:text-3xl font-display font-medium tracking-wide flex items-center gap-2 text-purple-200">
            <Bookmark className="h-6 w-6 text-purple-400" />
            <span>Recommendations</span>
          </h2>
          <p className="text-zinc-500 text-xs md:text-sm font-light mt-1">
            Things that shaped my thinking or kept me entertained.
          </p>
        </div>
      </div>

      {/* Category Rows */}
      <div className="flex flex-col gap-12 pb-32">
        {recommendationCategories.map((category, idx) => (
          <div key={idx} className="space-y-4">
            <h3 className="text-lg md:text-xl font-display font-medium text-zinc-100 pl-4 border-l-2 border-purple-500/50">
              {category.title}
            </h3>

            <div className="overflow-x-auto no-scrollbar py-4 -mx-4 px-4 md:-mx-8 md:px-8 overscroll-x-contain">
              <div className="flex gap-5">
                {category.items.map((item, itemIdx) => (
                  <motion.a
                    key={itemIdx}
                    href={item.redirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-shrink-0 w-40 sm:w-48 md:w-56 group relative"
                  >
                    {/* Card Body */}
                    <div className="aspect-[2/3] w-full bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl transition-colors group-hover:border-purple-500/50">
                      {item.imageUrl ? (
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-zinc-950/40">
                          <Bookmark className="h-8 w-8 text-zinc-800" />
                        </div>
                      )}

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                      {/* Text Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-sm font-medium text-white line-clamp-2 leading-snug">
                          {item.name}
                        </p>
                        <div className="flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-[10px] text-purple-400 font-mono uppercase tracking-widest">Explore</span>
                          <ExternalLink className="h-3 w-3 text-purple-400" />
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
