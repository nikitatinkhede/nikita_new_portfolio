import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  MapPin,
  Building2,
  Layers,
  Zap,
  Users
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';

// A heading and icon for each resume bullet in portfolioData.experience[].description, in the same order
const highlightStyles = [
  { title: "Frontend Development", icon: Layers, color: "text-indigo-600 dark:text-indigo-400", bgColor: "bg-indigo-500/10" },
  { title: "REST API Integration", icon: Zap, color: "text-cyan-700 dark:text-cyan-400", bgColor: "bg-cyan-500/10" },
  { title: "UI & Team Collaboration", icon: Users, color: "text-indigo-600 dark:text-indigo-400", bgColor: "bg-indigo-500/10" },
];

export const ExperienceSection = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="03"
          label="Experience"
          icon={Briefcase}
          title="Work Experience"
          subtitle="My current role and the work I do day to day."
        />

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
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-500/40 border-4 border-slate-50 dark:border-[#0B1020]">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Card Container */}
              <div className="glass-card p-6 sm:p-9 rounded-3xl border border-slate-200/80 dark:border-white/5 relative overflow-hidden">
                {/* Accent line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-400" />

                {/* Company & Role Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-800/80">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
                        {exp.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        Current Role
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

                  <div className="flex flex-wrap md:flex-col md:items-end gap-2 text-sm text-slate-600 dark:text-slate-300">
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

                {/* Responsibilities (from resume) */}
                <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {exp.description.map((point, idx) => {
                    const style = highlightStyles[idx % highlightStyles.length];
                    const Icon = style.icon;
                    return (
                      <div
                        key={style.title}
                        className="p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2.5"
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-8 h-8 rounded-lg ${style.bgColor} ${style.color} flex items-center justify-center`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display">
                            {style.title}
                          </h4>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {point}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Applied Technologies Footer */}
                <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 mr-1">
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
