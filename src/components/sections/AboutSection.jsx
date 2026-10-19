import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  MapPin, 
  Mail, 
  Sparkles, 
  Zap,
  Code2,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const AboutSection = () => {
  const { personalInfo } = portfolioData;

  const keyStrengths = [
    {
      title: "Responsive Frontend Engineering",
      desc: "Translating complex UI/UX designs into reusable, modular React.js and Next.js components with Material UI (MUI).",
      icon: Code2,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "REST API & Full-Stack Integration",
      desc: "Architecting seamless client-backend communication with FastAPI and REST APIs, managing dynamic data and token lifecycles.",
      icon: Zap,
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
    },
    {
      title: "Agentic AI & LLM Systems",
      desc: "Engineering single- and multi-agent workflows using LangChain, LangGraph, RAG, and stateful reasoning nodes.",
      icon: Cpu,
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
    },
    {
      title: "UI Stability & Accessibility",
      desc: "Building accessible, consistent interfaces adhering to modern web standards, profiling performance, and debugging UI bottlenecks.",
      icon: ShieldCheck,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Nikita</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Engineering High-Performance Web & AI Systems
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A Junior Software Developer combining 1.5 years of professional frontend experience with stateful multi-agent AI orchestration.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Professional Summary (Large Col 8) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="md:col-span-8 glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-white/5 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  Professional Profile
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
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
                <div className="text-xs text-slate-400">Experience</div>
                <div className="text-base font-bold text-slate-900 dark:text-white">1.5 Years</div>
              </div>
              <div>
                <div className="text-xs text-slate-400">Location</div>
                <div className="text-base font-bold text-slate-900 dark:text-white">Nagpur, MH</div>
              </div>
              <div>
                <div className="text-xs text-slate-400">MCA Degree</div>
                <div className="text-base font-bold text-emerald-600 dark:text-emerald-400">9.54 CGPA</div>
              </div>
              <div>
                <div className="text-xs text-slate-400">Specialty</div>
                <div className="text-base font-bold text-indigo-600 dark:text-indigo-400">React & Agents</div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Contact Metadata Bento (Col 4) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-4 glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-white/5 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Direct Contact
              </span>

              <div className="space-y-3.5 pt-1">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-800/50 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 border border-slate-200/60 dark:border-slate-700/60 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] text-slate-400">Email Address</div>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate group-hover:text-indigo-500">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-800/50 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border border-slate-200/60 dark:border-slate-700/60 transition-colors group">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Work Status</div>
                    <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      {personalInfo.availability}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Base Location</div>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-4 w-full py-2.5 rounded-xl text-center text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
            >
              Start a Conversation
            </a>
          </motion.div>

          {/* Cards 3 to 6: Core Engineering Competencies (4 Columns) */}
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
