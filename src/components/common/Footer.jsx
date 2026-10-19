import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 py-12 px-4 sm:px-6 lg:px-8 relative z-10 bg-white/40 dark:bg-[#080B11]/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold text-xs font-mono">
            NT
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900 dark:text-white font-display">
              {portfolioData.personalInfo.name}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {portfolioData.personalInfo.role} • {portfolioData.personalInfo.location}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600 dark:text-slate-400">
          {portfolioData.navigation.slice(0, 5).map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            © {CURRENT_YEAR} Nikita Tinkhede. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors interactive-hover"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
