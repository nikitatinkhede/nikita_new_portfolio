import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Building2,
  Layers,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const ExperienceSection = () => {
  const { experience } = portfolioData;

  const experienceBreakdown = [
    {
      category: "Frontend Architecture & Design Systems",
      points: [
        "Develop and maintain responsive, high-fidelity React.js, Next.js, and modern JavaScript applications.",
        "Translate complex UI/UX designs from Figma into modular, reusable, production-ready component libraries.",
        "Ensure full cross-browser compatibility and fluid mobile-first responsive layouts."
      ],
      icon: Layers,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      category: "REST API Integration & Dynamic State",
      points: [
        "Integrate REST APIs to fetch, display, and manage dynamic state across complex enterprise workflows.",
        "Ensure seamless and secure client-to-backend communication with Axios interceptors and token management.",
        "Optimize data serialization and client-side rendering for lightning-fast page responsiveness."
      ],
      icon: Zap,
      color: "text-amber-500",
      bgColor: "bg-amber-500/10"
    },
    {
      category: "Material UI, Accessibility & Performance",
      points: [
        "Build consistent, accessible user interfaces following WCAG standards using Material UI (MUI).",
        "Profile UI rendering pipelines, debug state bottlenecks, and optimize bundle sizes.",
        "Collaborate cross-functionally across engineering teams to debug issues, optimize performance, and deliver high-quality releases on schedule."
      ],
      icon: ShieldCheck,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10"
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-violet-50 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400 border border-violet-200/60 dark:border-violet-800/60 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Employment History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Professional Experience Timeline
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Current and past industry roles demonstrating hands-on production engineering, client-server integration, and teamwork.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/30 dark:border-indigo-500/20 space-y-12 ml-2 sm:ml-4">
          {experience.map((exp) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Timeline Indicator Node with Live Pulse */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-500/40 border-4 border-slate-50 dark:border-[#080B11]">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Card Container */}
              <div className="glass-card p-6 sm:p-9 rounded-3xl border border-slate-200/80 dark:border-white/5 relative overflow-hidden">
                {/* Accent line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400" />

                {/* Company & Role Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-800/80">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                        {exp.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-emerald-500 font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                        Active Position
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white pt-1">
                      {exp.role}
                    </h3>

                    <div className="text-base font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap md:flex-col md:items-end gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1.5 font-medium px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80">
                      <Calendar className="w-4 h-4 text-indigo-500" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80">
                      <MapPin className="w-4 h-4 text-cyan-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Categorized Impact Columns */}
                <div className="py-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {experienceBreakdown.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.category}
                          className="p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2.5"
                        >
                          <div className="flex items-center gap-2">
                            <div className={`w-7 h-7 rounded-lg ${item.bgColor} ${item.color} flex items-center justify-center`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <h4 className="text-xs font-bold text-slate-900 dark:text-white font-display">
                              {item.category}
                            </h4>
                          </div>
                          <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            {item.points.map((p, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1 flex-shrink-0" />
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Applied Technologies Footer */}
                <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-1">
                      Tech Stack:
                    </span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    Nagpur, Maharashtra
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
