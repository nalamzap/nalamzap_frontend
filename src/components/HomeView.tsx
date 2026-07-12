/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function HomeView() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex flex-col justify-between min-h-[500px] text-white p-4 md:p-8"
    >
      <div className="max-w-xl space-y-6 mt-6 md:mt-10">
        <h1 className="text-2xl md:text-3xl font-display font-medium tracking-tight">
          Hello!
        </h1>
        <p className="text-zinc-300 text-base md:text-lg font-light leading-relaxed">
          This is my personal weblog and any views expressed here are mine and mine alone.
          The pictures posted in this site belongs to me unless otherwise stated.
        </p>
      </div>

      <div className="flex flex-col items-end text-right mt-16 md:mt-32 self-end">
        <div className="max-w-md border-r-2 border-purple-500 pr-4 py-2">
          <p className="text-lg md:text-xl font-medium text-zinc-100">
            One curious mind.
          </p>
          <p className="text-zinc-400 text-sm md:text-base font-light">
            Creating ideas, products, art, and things in between.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
