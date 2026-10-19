import React, { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Code2,
  Terminal,
  Globe,
  Server,
  Database,
  Cpu,
  Layers,
  Webhook,
  Sparkles,
  FileSearch,
  Bot
} from 'lucide-react';
import {
  siJavascript,
  siPython,
  siReact,
  siNextdotjs,
  siMui,
  siFastapi,
  siMysql,
  siPostgresql,
  siLangchain,
  siLanggraph
} from 'simple-icons';
import { portfolioData } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';

const categoryIcons = {
  Languages: Terminal,
  Frontend: Globe,
  "Backend & API": Server,
  Database: Database,
  "AI & Machine Learning": Cpu,
};

// brand: Simple Icons logo drawn in its brand colour; Icon + color: lucide icon for skills without a logo.
// Icons sit on a dark tile in both themes, so `color` only overrides brand colours too dark for that tile.
const skillDetails = {
  "JavaScript": { brand: siJavascript },
  "Python": { brand: siPython },
  "SQL": { Icon: Database, color: "#22D3EE" },
  "React.js": { brand: siReact },
  "Next.js": { brand: siNextdotjs, color: "#FFFFFF" },
  "Material UI (MUI)": { brand: siMui, label: "Material UI" },
  "FastAPI": { brand: siFastapi },
  "REST API": { Icon: Webhook, color: "#818CF8" },
  "MySQL": { brand: siMysql },
  "PostgreSQL": { brand: siPostgresql },
  "LLMs": { Icon: Sparkles, color: "#818CF8" },
  "LangChain": { brand: siLangchain },
  "LangGraph": { brand: siLanggraph },
  "RAG (Retrieval-Augmented Generation)": { Icon: FileSearch, color: "#22D3EE", label: "RAG" },
  "AI Agents (Single & Multi-Agent Systems)": { Icon: Bot, color: "#818CF8", label: "AI Agents" },
};

const fallbackDetails = { Icon: Layers, color: "#818CF8" };

// Deterministic pseudo-random scatter so every chip flies in from its own spot
const scatterFor = (i) => {
  const rand = (n) => {
    const v = Math.sin(i * 12.9898 + n * 78.233) * 43758.5453;
    return v - Math.floor(v);
  };
  return { x: (rand(1) - 0.5) * 260, y: (rand(2) - 0.5) * 180, rotate: (rand(3) - 0.5) * 60 };
};

const panelVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96, transition: { duration: 0.3 } },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const rowVariants = {
  hidden: { opacity: 0, x: -30, transition: { duration: 0.2 } },
  visible: (rowIdx) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.15 + rowIdx * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

const chipVariants = {
  hidden: ({ scatter }) => ({
    opacity: 0,
    ...scatter,
    scale: 0.3,
    filter: 'blur(6px)',
    transition: { duration: 0.25 },
  }),
  visible: ({ index }) => ({
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 140, damping: 13, mass: 0.8, delay: 0.3 + index * 0.045 },
  }),
};

const SkillIcon = ({ meta, className }) => {
  if (meta.brand) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d={meta.brand.path} />
      </svg>
    );
  }
  const Icon = meta.Icon;
  return <Icon className={className} aria-hidden="true" />;
};

export const SkillsSection = () => {
  const { skills } = portfolioData;
  const reduceMotion = useReducedMotion();
  const panelRef = useRef(null);
  let chipIndex = 0;

  // Cursor-following spotlight: update CSS variables directly so React doesn't re-render on every move
  const handlePanelMouseMove = (e) => {
    const panel = panelRef.current;
    if (!panel) return;
    const rect = panel.getBoundingClientRect();
    panel.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    panel.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Drifting ambient glow behind the panel */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-[8%] w-72 h-72 rounded-full bg-indigo-500/20 blur-3xl animate-blob" />
        <div className="absolute bottom-16 right-[8%] w-72 h-72 rounded-full bg-cyan-500/15 blur-3xl animate-blob [animation-delay:-7s]" />
      </div>

      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="02"
          label="Skills"
          icon={Code2}
          title={<>Skills & <span className="gradient-text-indigo">AI Stack</span></>}
          subtitle="The tools I use to build web apps and AI agents."
        />

        {/* Skill Panel: replays its entrance each time it scrolls into view */}
        <motion.div
          ref={panelRef}
          onMouseMove={handlePanelMouseMove}
          variants={panelVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="group/panel animated-border glass-panel relative rounded-3xl px-5 sm:px-8 py-2"
        >
          {/* Cursor spotlight */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover/panel:opacity-100"
            style={{
              background:
                'radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(99, 102, 241, 0.14), transparent 45%)',
            }}
          />

          <div className="relative divide-y divide-slate-200/70 dark:divide-white/5">
            {skills.map((group, rowIdx) => {
              const CategoryIcon = categoryIcons[group.category] || Layers;

              return (
                <motion.div
                  key={group.category}
                  custom={rowIdx}
                  variants={rowVariants}
                  className="group/row relative flex flex-col md:flex-row md:items-center gap-3 md:gap-6 py-5"
                >
                  {/* Category Label */}
                  <div className="md:w-52 shrink-0 flex items-center gap-2.5">
                    <span
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover/row:scale-110 group-hover/row:-rotate-6 ${
                        group.highlight
                          ? 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-400'
                          : 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
                      }`}
                    >
                      <CategoryIcon className="w-4 h-4" />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold font-display text-slate-900 dark:text-white">
                        {group.category}
                      </h3>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {group.items.length} technologies
                      </span>
                    </div>
                  </div>

                  {/* Skill Chips */}
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((item) => {
                      const meta = skillDetails[item] || fallbackDetails;
                      const iconColor = meta.color || `#${meta.brand.hex}`;
                      const index = chipIndex++;
                      const scatter = reduceMotion ? { x: 0, y: 0, rotate: 0 } : scatterFor(index);

                      return (
                        <motion.span
                          key={item}
                          custom={{ index, scatter }}
                          variants={chipVariants}
                          className="relative block hover:z-20 focus-within:z-20"
                        >
                          <span
                            tabIndex={0}
                            style={{ '--skill': iconColor }}
                            className="group interactive-hover relative flex items-center gap-2 pl-1.5 pr-3.5 py-1.5 rounded-xl bg-white/80 dark:bg-slate-800/50 border border-slate-200/80 dark:border-white/10 text-sm font-semibold text-slate-800 dark:text-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:scale-110 focus:-translate-y-1.5 focus:scale-110 hover:border-[color:var(--skill)] dark:hover:border-[color:var(--skill)] focus:border-[color:var(--skill)] dark:focus:border-[color:var(--skill)] hover:shadow-[0_12px_30px_-10px_var(--skill)] focus:shadow-[0_12px_30px_-10px_var(--skill)] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
                          >
                            {/* Shine sweep on hover */}
                            <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
                              <span className="absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 -translate-x-full bg-gradient-to-r from-transparent via-white/50 dark:via-white/20 to-transparent transition-none group-hover:translate-x-[400%] group-hover:transition-transform group-hover:duration-700 group-hover:ease-out" />
                            </span>

                            {/* Brand logo tile with breathing glow; logo spins on hover */}
                            <span
                              className="w-7 h-7 rounded-lg bg-slate-900 dark:bg-slate-950/80 ring-1 ring-white/5 flex items-center justify-center animate-icon-glow"
                              style={{ color: iconColor, animationDelay: `-${(index * 0.4) % 3}s` }}
                            >
                              <SkillIcon
                                meta={meta}
                                className="w-4 h-4 transition-transform duration-700 ease-out group-hover:rotate-[360deg] group-hover:scale-110 group-focus:rotate-[360deg]"
                              />
                            </span>
                            <span>{meta.label || item}</span>
                          </span>
                        </motion.span>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
