/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowLeft, Bookmark } from 'lucide-react';
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
      className="p-4 md:p-8 text-white flex flex-col min-h-full"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-10">
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
      <div className="flex flex-col gap-12 pb-20">
        {recommendationCategories.map((category, idx) => (
          <div key={idx} className="space-y-4">
            <h3 className="text-lg md:text-xl font-display font-medium text-zinc-100 pl-2 border-l-2 border-purple-500/50">
              {category.title}
            </h3>

            <div className="overflow-x-auto no-scrollbar py-2 -mx-4 px-4 md:-mx-8 md:px-8">
              <div className="flex gap-4">
                {category.items.map((item, itemIdx) => (
                  <motion.div
                    key={itemIdx}
                    whileHover={{ scale: 1.05 }}
                    className="flex-shrink-0 w-36 sm:w-44 md:w-52 h-20 sm:h-24 md:h-28 bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-4 flex items-center justify-center text-center shadow-lg backdrop-blur-sm group hover:border-purple-500/30 transition-colors"
                  >
                    <p className="text-xs sm:text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
