import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  Globe, 
  Server, 
  Database, 
  Cpu, 
  Layers,
  Bot
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const categoryIcons = {
  Languages: Terminal,
  Frontend: Globe,
  "Backend & API": Server,
  Database: Database,
  "AI & Machine Learning": Cpu,
};

const skillDetails = {
  "React.js": { level: "Production", context: "Component architecture, hooks, state management & UI optimization" },
  "Next.js": { level: "Production", context: "Next.js 14 App Router, SSR, performance dashboards & route handlers" },
  "Material UI (MUI)": { level: "Production", context: "Design systems, accessible components, KPI cards & custom theming" },
  "FastAPI": { level: "Production", context: "High-performance Python backend, async endpoints & agent orchestration" },
  "REST API": { level: "Production", context: "Dynamic CRUD, Axios integration, token handling & client sync" },
  "JavaScript": { level: "Core", context: "ES6+, asynchronous programming, DOM manipulation & frontend logic" },
  "Python": { level: "Core", context: "Data structures, agent pipelines, LangChain integrations & backend services" },
  "SQL": { level: "Core", context: "Relational queries, schema design, joins & performance indexing" },
  "MySQL": { level: "Database", context: "Relational data management & relational integrity" },
  "PostgreSQL": { level: "Database", context: "Enterprise relational database with structured query optimization" },
  "LLMs": { level: "AI Specialist", context: "Prompt engineering, evaluation benchmarks & reasoning over candidate data" },
  "LangChain": { level: "AI Specialist", context: "Chains, prompt templates, output parsers & LLM wrappers" },
  "LangGraph": { level: "AI Specialist", context: "Stateful multi-node agent graphs, cyclical workflows & human-in-the-loop" },
  "RAG (Retrieval-Augmented Generation)": { level: "AI Specialist", context: "Context injection, semantic search & knowledge-grounded generation" },
  "AI Agents (Single & Multi-Agent Systems)": { level: "AI Specialist", context: "Autonomous agent coordination, reasoning nodes & supervisor architecture" },
};

export const SkillsSection = () => {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skills.map(s => s.category)];

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-50 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400 border border-cyan-200/60 dark:border-cyan-800/60 mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Comprehensive Skills & AI Stack
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Every technology is verified from professional industry experience at Valethi Technology and specialized AI projects.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 interactive-hover ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25 scale-105'
                      : 'glass-panel text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skillGroup) => {
              const Icon = categoryIcons[skillGroup.category] || Layers;
              const isAIML = skillGroup.category === 'AI & Machine Learning';

              return (
                <motion.div
                  key={skillGroup.category}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className={`glass-card p-6 sm:p-7 rounded-3xl relative overflow-hidden group border ${
                    isAIML
                      ? 'border-violet-500/40 dark:border-violet-500/30 lg:col-span-2'
                      : 'border-slate-200/80 dark:border-white/5'
                  }`}
                >
                  {/* Decorative ambient glow */}
                  <div 
                    className={`absolute -right-16 -top-16 w-44 h-44 rounded-full bg-gradient-to-br ${skillGroup.color} blur-3xl opacity-40 group-hover:opacity-75 transition-opacity duration-300 pointer-events-none`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 dark:bg-white/5 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">
                            {skillGroup.category}
                          </h3>
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            {skillGroup.items.length} Core Technologies
                          </span>
                        </div>
                      </div>

                      {skillGroup.highlight && (
                        <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-violet-500/15 text-violet-600 dark:text-violet-400 border border-violet-500/20 flex items-center gap-1">
                          <Bot className="w-3.5 h-3.5" />
                          Advanced AI
                        </span>
                      )}
                    </div>

                    {/* Detailed Technology Stack Pills */}
                    <div className="space-y-2.5">
                      {skillGroup.items.map((item) => {
                        const meta = skillDetails[item] || { level: 'Core', context: '' };
                        return (
                          <div
                            key={item}
                            className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 hover:border-indigo-500/40 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-bold text-slate-800 dark:text-slate-200 font-sans">
                                {item}
                              </span>
                              <span className="px-2 py-0.5 rounded text-[10px] font-semibold font-mono bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/50">
                                {meta.level}
                              </span>
                            </div>
                            {meta.context && (
                              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-normal">
                                {meta.context}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
