import React from 'react';
import { motion } from 'framer-motion';

// Shared numbered header so each section's start is obvious and matches its navbar name
export const SectionHeader = ({ number, label, icon: Icon, title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.5 }}
    className="text-center max-w-3xl mx-auto mb-14"
  >
    <div className="flex items-center justify-center gap-3 mb-4">
      <span className="h-px w-10 sm:w-20 bg-gradient-to-r from-transparent to-indigo-500/70" />
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-200 border border-indigo-200/80 dark:border-indigo-700/60">
        <span className="font-mono text-indigo-600 dark:text-indigo-400">{number}</span>
        <span className="w-px h-3.5 bg-indigo-300 dark:bg-indigo-700" />
        <Icon className="w-3.5 h-3.5" />
        <span>{label}</span>
      </span>
      <span className="h-px w-10 sm:w-20 bg-gradient-to-l from-transparent to-indigo-500/70" />
    </div>
    <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
        {subtitle}
      </p>
    )}
  </motion.div>
);

// Gradient rule placed between sections so the boundary is visible against the 3D background
export const SectionDivider = () => (
  <div aria-hidden="true" className="relative z-10 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-indigo-400/50 dark:via-indigo-400/30 to-transparent" />
  </div>
);
