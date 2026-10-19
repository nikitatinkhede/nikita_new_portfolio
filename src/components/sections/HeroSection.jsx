import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  Briefcase, 
  Code,
  GraduationCap,
  Terminal,
  Copy,
  Check,
  Bot,
  Download
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { SocialLinks } from '../common/SocialLinks';

const CODE_SNIPPETS = {
  agent: {
    filename: "assessment_agent.py",
    language: "python",
    code: `# Multi-Agent Candidate Evaluation Graph
from langgraph.graph import StateGraph, END
from langchain_core.prompts import ChatPromptTemplate
from fastapi import FastAPI

app = FastAPI(title="CandidateAssessmentEngine")

def evaluate_candidate(state: CandidateState):
    """Reason over resume & interview responses with LLMs"""
    reasoning_agent = state.llm_model.bind_tools([screen_resume, test_interview])
    assessment = reasoning_agent.invoke(state.transcript)
    return {"score": assessment.rating, "verdict": assessment.summary}

workflow = StateGraph(CandidateState)
workflow.add_node("evaluator", evaluate_candidate)
workflow.set_entry_point("evaluator")
assessment_pipeline = workflow.compile()`,
  },
  frontend: {
    filename: "AIAnalyticsDashboard.jsx",
    language: "javascript",
    code: `// Next.js 14 + React 18 + Material UI Analytics
import { useEffect, useState } from 'react';
import { Grid, Card, Typography } from '@mui/material';
import axios from 'axios';

export default function AIAnalyticsDashboard() {
  const [metrics, setMetrics] = useState({ providerUsage: 99.8, latency: '142ms' });

  // REST API dynamic integration with Token Expiry Handling
  useEffect(() => {
    fetchAIProviderMetrics().then(data => setMetrics(data));
  }, []);

  return (
    <Card elevation={3} sx={{ borderRadius: 4, backdropFilter: 'blur(16px)' }}>
      <Typography variant="h6">AI Test Buddy Analytics</Typography>
      <PromptDiffView provider="OpenAI/Anthropic" />
    </Card>
  );
}`,
  },
  profile: {
    filename: "developer_spec.json",
    language: "json",
    code: `{
  "developer": "Nikita Tinkhede",
  "title": "Software Developer",
  "location": "Nagpur, Maharashtra",
  "experience": "1.5 Years (Valethi Technology)",
  "education": "MCA (9.54/10 CGPA)",
  "frontend": ["React.js", "Next.js", "Material UI"],
  "backend_and_api": ["FastAPI", "REST API", "PostgreSQL"],
  "ai_stack": ["LLMs", "LangChain", "LangGraph", "RAG"]
}`,
  }
};

export const HeroSection = () => {
  const { personalInfo } = portfolioData;
  const [activeTab, setActiveTab] = useState('agent');
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(CODE_SNIPPETS[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Top Hero Text Intro */}
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            {/* Live Availability & Location Pill */}
            <motion.div variants={itemVariants} className="inline-flex items-center">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel shadow-sm border border-indigo-200/50 dark:border-indigo-500/20">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {personalInfo.role} • 1.5 Years Exp
                </span>
                <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">|</span>
                <span className="text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {personalInfo.location}
                </span>
              </div>
            </motion.div>

            {/* Bold Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-display text-slate-900 dark:text-white leading-[1.08]">
                Crafting Modern Web Apps &{' '}
                <span className="gradient-text-indigo drop-shadow-sm inline-block">
                  Agentic AI Systems
                </span>
              </h1>
              <p className="text-base sm:text-xl md:text-2xl font-light text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                I am <span className="font-semibold text-slate-900 dark:text-white">{personalInfo.name}</span>, a developer specializing in responsive web applications with{' '}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">React.js, Next.js, Material UI</span>, REST APIs, and multi-agent AI workflows using{' '}
                <span className="font-semibold text-cyan-700 dark:text-cyan-400">LLMs, LangChain, & LangGraph</span>.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center gap-3.5 pt-2"
            >
              <a
                href="#projects"
                data-cursor-text="VIEW"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/30 transition-all duration-200 interactive-hover hover:scale-105 active:scale-95 text-sm sm:text-base group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                data-cursor-text="HELLO"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 glass-card hover:border-indigo-500/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 interactive-hover hover:scale-105 active:scale-95 text-sm sm:text-base group"
              >
                <span>Get in Touch</span>
                <Mail className="w-4 h-4 text-indigo-500 group-hover:-rotate-12 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="/Nikita_Tinkhede_Resume.pdf"
                download="Nikita_Tinkhede_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="RESUME"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 glass-card hover:border-cyan-500/50 hover:text-cyan-700 dark:hover:text-cyan-400 transition-all duration-200 interactive-hover hover:scale-105 active:scale-95 text-sm sm:text-base group"
              >
                <span>Resume PDF</span>
                <Download className="w-4 h-4 text-cyan-500 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* Social Profiles */}
            <motion.div variants={itemVariants}>
              <SocialLinks
                className="flex items-center justify-center gap-3"
                linkClassName="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-white/10"
                showLabel
              />
            </motion.div>
          </div>

          {/* Interactive Code Preview Terminal & Metrics Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-6xl mx-auto"
          >
            {/* Left 4 Cols: Quick Verified Resume Metric Badges */}
            <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-3.5">
              <div className="glass-card p-5 rounded-2xl border border-slate-200/80 dark:border-white/5 shadow-sm flex items-center gap-4 group hover:border-indigo-500/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
                    1.5 Years
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Software Developer at Valethi Tech
                  </div>
                </div>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-slate-200/80 dark:border-white/5 shadow-sm flex items-center gap-4 group hover:border-cyan-500/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
                    React & Next.js
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Material UI & REST API Integration
                  </div>
                </div>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-slate-200/80 dark:border-white/5 shadow-sm flex items-center gap-4 group hover:border-indigo-500/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
                    Multi-Agent AI
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    LangGraph, LangChain & RAG
                  </div>
                </div>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-slate-200/80 dark:border-white/5 shadow-sm flex items-center gap-4 group hover:border-cyan-500/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
                    9.54 CGPA
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    MCA Distinction (2022–2024)
                  </div>
                </div>
              </div>
            </div>

            {/* Right 8 Cols: Interactive Code Console */}
            <div className="lg:col-span-8 glass-card rounded-2xl border border-slate-200/80 dark:border-white/10 overflow-hidden shadow-2xl flex flex-col justify-between">
              {/* Terminal Window Top Bar */}
              <div className="px-4 py-3 bg-slate-100/90 dark:bg-slate-900/90 border-b border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-mono font-medium text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5" />
                    nikita@portfolio-workspace
                  </span>
                </div>

                {/* Tab Switchers */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab('agent')}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${
                      activeTab === 'agent'
                        ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm font-semibold'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    agent_graph.py
                  </button>
                  <button
                    onClick={() => setActiveTab('frontend')}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${
                      activeTab === 'frontend'
                        ? 'bg-white dark:bg-slate-800 text-cyan-700 dark:text-cyan-400 shadow-sm font-semibold'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    AIAnalytics.jsx
                  </button>
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${
                      activeTab === 'profile'
                        ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm font-semibold'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    spec.json
                  </button>
                </div>
              </div>

              {/* Code Content Body */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto bg-slate-900/95 text-slate-200 flex-1">
                <pre className="text-slate-300">
                  <code>{CODE_SNIPPETS[activeTab].code}</code>
                </pre>
              </div>

              {/* Terminal Bottom Status Bar */}
              <div className="px-4 py-2 bg-slate-950 text-xs font-mono text-slate-400 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>UTF-8 • {CODE_SNIPPETS[activeTab].language.toUpperCase()}</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
