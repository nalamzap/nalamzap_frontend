/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
// @ts-ignore
import portraitImg from '../assets/images/me.jpg';

interface LayoutProps {
  currentPath: string;
  navigate: (path: string) => void;
  children: ReactNode;
}

export default function Layout({ currentPath, navigate, children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Normalize path checks
  const isHome = currentPath === '/' || currentPath === '';
  const isRecommendations = currentPath.endsWith('/recommendations');
  const isKnowMe = currentPath.endsWith('/know-me') || isRecommendations;
  const isTraceMe = currentPath.endsWith('/trace-me');
  const isHireMe = currentPath.endsWith('/hire-me');
  const isFindMe = currentPath.endsWith('/find-me');

  const menuItems = [
    { label: 'Know Me', path: '/know-me', active: isKnowMe },
    { label: 'Trace Me', path: '/trace-me', active: isTraceMe },
    { label: 'Hire Me', path: '/hire-me', active: isHireMe },
    { label: 'Find Me', path: '/find-me', active: isFindMe },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col lg:flex-row relative overflow-x-hidden selection:bg-purple-600/30">
      
      {/* Background Face Portrait Photo (from Image 4 & Image 1) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center lg:bg-right-bottom bg-no-repeat opacity-100 transition-all duration-700 pointer-events-none"
        style={{ 
          backgroundImage: `url(${portraitImg})`,
          backgroundSize: 'contain',
          backgroundPosition: 'right bottom'
        }}
      />
      {/* Back glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/70 z-0 pointer-events-none" />

      {/* HEADER / NAVIGATION COLUMN */}
      <header className="w-full lg:w-72 shrink-0 p-4 lg:p-8 flex lg:flex-col justify-between items-center lg:items-start z-40 bg-black/60 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none border-b lg:border-b-0 border-zinc-900 sticky top-0 lg:h-screen lg:fixed lg:left-0 lg:top-0">
        
        {/* Top brand header */}
        <div className="flex flex-row items-center gap-3 lg:flex-col lg:items-start lg:space-y-6 w-full">
          {/* Collapsible Hamburger Menu button for mobile */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-zinc-850 hover:border-zinc-700 rounded-xl bg-zinc-950/80 text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <button
            onClick={() => handleNavClick('/')}
            className="text-left group cursor-pointer focus:outline-none"
          >
            <h1 className="text-xl md:text-2xl lg:text-3xl font-display font-bold font-medium tracking-tight text-white group-hover:text-purple-400 transition-colors duration-300">
              Sk Nazibul Alam
            </h1>
          </button>

          {/* Desktop Navigation list */}
          <nav className="hidden lg:block space-y-2 pt-12">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.path)}
                className={`w-full text-left font-display font-normal text-sm md:text-base py-2.5 px-4 rounded-full transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                  item.active
                    ? 'bg-purple-900/40 border border-purple-700/50 text-white font-semibold shadow-md shadow-purple-900/10'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900/30 border border-transparent'
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight className={`h-3 w-3 transform transition-transform duration-300 ${
                  item.active ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                }`} />
              </button>
            ))}
          </nav>
        </div>

        {/* Footer block at bottom of desktop navbar */}
        <div className="hidden lg:block w-full border-t border-zinc-900 pt-6">
          <p className="text-[10px] font-mono text-zinc-600">
            © 2026 Sk Nazibul Alam
          </p>
        </div>
      </header>

      {/* Mobile Drawer (Side Sliding) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] lg:hidden"
            />

            {/* Drawer Content */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[280px] bg-zinc-950 border-r border-zinc-900 z-[70] lg:hidden flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b border-zinc-900">
                <h2 className="text-lg font-bold">Menu</h2>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-zinc-900 rounded-lg text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="p-6 space-y-3 flex-1">
                {menuItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.path)}
                    className={`w-full text-left font-display text-lg py-3.5 px-5 rounded-xl transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      item.active
                        ? 'bg-purple-900/50 border border-purple-700/60 text-white'
                        : 'text-zinc-400 hover:text-white bg-zinc-900/20'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="h-4 w-4 text-purple-400" />
                  </button>
                ))}
              </nav>

              <div className="p-6 border-t border-zinc-900 text-center">
                <p className="text-xs font-mono text-zinc-500">
                  © 2026 Sk Nazibul Alam
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT VIEWPORT */}
      <main className="flex-1 h-[calc(100vh-77px)] lg:h-screen z-10 flex flex-col items-center p-4 md:p-8 lg:pl-80 relative select-none overflow-hidden">
        
        <div className="w-full max-w-5xl flex flex-col flex-1 justify-center">
          {isHome ? (
            /* Plain Overlay Layout on Home (refer to Image 4: no scrim border/card) */
            <div className="w-full">
              {children}
            </div>
          ) : (
            /* Scrim Border Container for Sub-pages (Image 1, 2, 3) */
            <div className="w-full rounded-3xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-md shadow-2xl relative flex flex-col"
                 style={{
                   minHeight: '72vh',
                   maxHeight: '88vh',
                 }}>

              {/* Visual Header Indicator Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/20 via-purple-505 to-transparent z-20 pointer-events-none" />

              {/* Scrollable Scrim Content Area */}
              <div className={`flex-1 custom-scrollbar ${
                isRecommendations
                  ? 'overflow-y-auto overflow-x-hidden'
                  : isKnowMe
                  ? 'overflow-visible'
                  : isTraceMe
                  ? 'overflow-y-auto overflow-x-hidden pb-[20vh]'
                  : 'overflow-y-auto overflow-x-hidden max-h-full'
              }`}>
                {children}
              </div>
            </div>
          )}
        </div>
      </main>

    </div>
  );
}
