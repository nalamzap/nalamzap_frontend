/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Milestone, Compass } from 'lucide-react';
import { lifeMoments } from '../data/traceMe';

export default function TraceMeView() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="p-4 md:p-8 text-white flex flex-col min-h-full"
    >
      {/* Page Header */}
      <div className="mb-12 text-center md:text-left max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-display font-medium tracking-wide flex items-center justify-center md:justify-start gap-2 text-purple-200">
          <Milestone className="h-6 w-6 text-purple-400" />
          <span>Moments</span>
        </h2>
        <p className="text-zinc-400 font-light text-sm md:text-base mt-2">
          A collection of moments—stories from my career, side projects, and life.
        </p>
      </div>

      {/* Timeline container */}
      <div className="relative flex flex-col gap-12 md:gap-16 max-w-5xl mx-auto w-full pb-32 select-none">

        {/* Main Vertical Timeline Line */}
        <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-800/60 -translate-x-1/2 z-0" />

        {lifeMoments.map((event, idx) => {
          const isLeft = idx % 2 === 0;

          return (
            <div
              key={event.id || idx}
              className={`relative flex items-center w-full ${
                isLeft ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Desktop Spacer (takes half width) */}
              <div className="hidden md:block w-1/2" />

              {/* Circle Connector Node - Centered on the vertical line */}
              <div
                className="absolute left-[19px] md:left-1/2 w-4 h-4 rounded-full border-2 border-zinc-950 bg-white ring-4 ring-purple-600/10 z-30 -translate-x-1/2"
              />

              {/* Card Container - Flex-1 takes the other half width */}
              <div className={`flex-1 flex items-center pl-10 md:pl-0 ${
                isLeft ? 'md:justify-end md:pr-12' : 'md:justify-start md:pl-12'
              }`}>

                {/* Horizontal connection "thread" */}
                <div className={`absolute h-[2px] bg-zinc-800/60 z-10 ${
                  isLeft
                    ? 'left-[19px] right-auto md:left-auto md:right-1/2 w-6 md:w-12'
                    : 'left-[19px] md:left-1/2 w-6 md:w-12'
                }`} />

                {/* Milestone Card */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="w-full max-w-[95%] md:max-w-md bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm relative z-20"
                >
                  <div className="flex flex-col min-h-[140px]">
                    {/* Event graphic */}
                    {event.imageUrl && (
                      <div className="w-full h-32 md:h-40 overflow-hidden relative">
                        <img
                          src={event.imageUrl}
                          alt={event.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 transition-opacity duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                      </div>
                    )}

                    {/* Body Text */}
                    <div className="p-5 flex-1 flex flex-col justify-center">
                      <span className="text-purple-400 text-xs font-mono font-medium tracking-wider mb-1 block">
                        {event.date}
                      </span>
                      <h3 className="text-lg font-display font-medium text-white mb-2 tracking-wide leading-snug">
                        {event.title}
                      </h3>
                      <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light font-sans whitespace-pre-line">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
