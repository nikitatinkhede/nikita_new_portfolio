import React from 'react';
import { motion } from 'framer-motion';
import { 
  User,
  Sparkles,
  Zap,
  Code2,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';

export const AboutSection = () => {
  const { personalInfo } = portfolioData;

  const keyStrengths = [
    {
      title: "Responsive Frontend Engineering",
      desc: "Translating complex UI/UX designs into reusable, modular React.js and Next.js components with Material UI (MUI).",
      icon: Code2,
      color: "text-indigo-600 dark:text-indigo-400",
      bgColor: "bg-indigo-500/10",
    },
    {
      title: "REST API & Full-Stack Integration",
      desc: "Architecting seamless client-backend communication with FastAPI and REST APIs, managing dynamic data and token lifecycles.",
      icon: Zap,
      color: "text-cyan-700 dark:text-cyan-400",
      bgColor: "bg-cyan-500/10",
    },
    {
      title: "Agentic AI & LLM Systems",
      desc: "Engineering single- and multi-agent workflows using LangChain, LangGraph, RAG, and stateful reasoning nodes.",
      icon: Cpu,
      color: "text-indigo-600 dark:text-indigo-400",
      bgColor: "bg-indigo-500/10",
    },
    {
      title: "UI Stability & Accessibility",
      desc: "Building accessible, consistent interfaces adhering to modern web standards, profiling performance, and debugging UI bottlenecks.",
      icon: ShieldCheck,
      color: "text-cyan-700 dark:text-cyan-400",
      bgColor: "bg-cyan-500/10",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="01"
          label="About"
          icon={User}
          title="About Me"
          subtitle="A Software Developer with 1.5 years of frontend experience who also builds multi-agent AI systems."
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Professional Summary (Full Width) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="md:col-span-12 glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-white/5 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  Professional Profile
                </span>
                <span className="text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                  Valethi Technology Pvt. Ltd.
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
                {personalInfo.name} — {personalInfo.role}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {personalInfo.summary}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Experience</div>
                <div className="text-base font-bold text-slate-900 dark:text-white">1.5 Years</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Location</div>
                <div className="text-base font-bold text-slate-900 dark:text-white">Nagpur, MH</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400">MCA Degree</div>
                <div className="text-base font-bold text-cyan-700 dark:text-cyan-400">9.54 CGPA</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Specialty</div>
                <div className="text-base font-bold text-indigo-600 dark:text-indigo-400">React & Agents</div>
              </div>
            </div>
          </motion.div>

          {/* Cards 2 to 5: Core Engineering Competencies (4 Columns) */}
          {keyStrengths.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.15 + idx * 0.08 }}
                className="md:col-span-6 lg:col-span-3 glass-card p-6 rounded-3xl border border-slate-200/80 dark:border-white/5 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-11 h-11 rounded-2xl ${item.bgColor} ${item.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold font-display text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
