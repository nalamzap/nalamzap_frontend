/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db, defaultLifeEvents } from '../firebase';
import { LifeEvent, TraceMeItem } from '../types';
import { motion } from 'motion/react';
import { Sparkles, Milestone, Compass } from 'lucide-react';

interface Props {
  externalData?: TraceMeItem[];
}

export default function TraceMeView({ externalData }: Props) {
  const [events, setEvents] = useState<LifeEvent[]>(defaultLifeEvents);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (externalData && externalData.length > 0) {
      const list: LifeEvent[] = externalData.map((item, i) => ({
        id: `ext_${i}`,
        title: item.title,
        date: '',
        description: item.shortDesc || '',
        imageUrl: item.imageUrl,
        order: i
      }));
      setEvents(list);
      return;
    }

    setLoading(true);
    const q = query(collection(db, 'life_events'), orderBy('order', 'asc'));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        if (!snapshot.empty) {
          const list: LifeEvent[] = [];
          snapshot.forEach((doc) => {
            list.push({ id: doc.id, ...doc.data() } as LifeEvent);
          });
          setEvents(list);
        } else {
          setEvents(defaultLifeEvents);
        }
        setLoading(false);
      },
      (error) => {
        console.warn('Could not list events from Firestore, loading defaults', error);
        setEvents(defaultLifeEvents);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="p-4 md:p-8 text-white flex flex-col min-h-full"
    >
      {/* Page Header */}
      <div className="mb-10 text-center md:text-left max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-display font-medium tracking-wide flex items-center justify-center md:justify-start gap-2 text-purple-200">
          <Milestone className="h-6 w-6 text-purple-400" />
          <span>Moments</span>
        </h2>
        <p className="text-zinc-400 font-light text-sm md:text-base mt-2">
          A collection of moments—stories from my career, side projects, and life.
        </p>
      </div>

      {/* Grid Timeline container */}
      <div className="relative flex flex-col gap-16 md:gap-24 max-w-5xl mx-auto w-full pb-20 select-none">
        {events.map((event, idx) => {
          const isLeft = idx % 2 === 0;

          return (
            <div
              key={event.id || idx}
              className={`relative flex items-center w-full ${
                isLeft ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Continuous Thread Line via Segment Layouts */}
              {/* Vertical link downwards from the left thread circle */}
              {isLeft && idx < events.length - 1 && (
                <>
                  {/* Left line goes down and right line curves */}
                  <div className="absolute left-4 md:left-8 top-1/2 h-[calc(100%+64px)] border-l-2 border-zinc-500/30 z-0 pointer-events-none" />
                  <div className="absolute left-4 md:left-8 right-4 md:right-8 h-[calc(100%+64px)] border-b-2 border-zinc-500/30 top-1/2 z-0 pointer-events-none" />
                </>
              )}

              {/* Vertical link downwards from the right thread circle */}
              {!isLeft && idx < events.length - 1 && (
                <>
                  <div className="absolute right-4 md:right-8 top-1/2 h-[calc(100%+64px)] border-r-2 border-zinc-500/30 z-0 pointer-events-none" />
                  <div className="absolute left-4 md:left-8 right-4 md:right-8 h-[calc(100%+64px)] border-b-2 border-zinc-500/30 top-1/2 z-0 pointer-events-none" />
                </>
              )}

              {/* Circle Connector Node */}
              <div
                className={`absolute w-5 h-5 rounded-full border-4 border-zinc-950 bg-white ring-4 ring-purple-600/20 z-10 ${
                  isLeft ? 'left-2.5 md:left-6.5' : 'right-2.5 md:right-6.5'
                } top-1/2 -translate-y-1/2`}
              />

              {/* Small horizontal thread line directly from Circle Node into the card edge */}
              <div
                className={`absolute h-[1px] bg-zinc-500/60 z-0 ${
                  isLeft
                    ? 'left-7 md:left-11 w-4 md:w-10'
                    : 'right-7 md:right-11 w-4 md:w-10'
                } top-1/2 -translate-y-1/2`}
              />

              {/* Milestone Card */}
              <motion.div
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={`w-full max-w-[85%] md:max-w-[78%] bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm relative z-20 ${
                  isLeft ? 'ml-12 md:ml-20' : 'mr-12 md:mr-20'
                }`}
              >
                {/* Horizontal side image alignment */}
                <div className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} min-h-[160px]`}>
                  {/* Event graphic */}
                  {event.imageUrl ? (
                    <div className="w-full md:w-48 shrink-0 h-40 md:h-auto overflow-hidden relative">
                      <img
                        src={event.imageUrl}
                        alt={event.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 transition-opacity duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-zinc-950" />
                    </div>
                  ) : (
                    <div className="w-full md:w-48 shrink-0 h-32 md:h-auto bg-zinc-950/40 flex items-center justify-center border-b md:border-b-0 md:border-r border-zinc-800">
                      <Compass className="h-8 w-8 text-zinc-700" />
                    </div>
                  )}

                  {/* Body Text */}
                  <div className="p-5 md:p-6 flex-1 flex flex-col justify-center">
                    <span className="text-purple-400 text-xs md:text-sm font-mono font-medium tracking-wider mb-1 block">
                      {event.date}
                    </span>
                    <h3 className="text-lg md:text-xl font-display font-medium text-white mb-2 tracking-wide leading-snug">
                      {event.title}
                    </h3>
                    <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light font-sans">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
