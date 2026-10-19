import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  CheckCircle2, 
  BrainCircuit, 
  Workflow, 
  Activity, 
  KeyRound, 
  FileCheck2, 
  Play 
} from 'lucide-react';

export const ProjectsSection = () => {

  // State for AI Test Buddy interactive simulation
  const [testBuddyTab, setTestBuddyTab] = useState('analytics'); // 'analytics', 'prompt-diff', 'rbac'
  
  // State for Candidate Assessment Agent simulation
  const [agentStep, setAgentStep] = useState(1);
  const [isSimulatingAgent, setIsSimulatingAgent] = useState(false);

  const runAgentSimulation = () => {
    setIsSimulatingAgent(true);
    setAgentStep(1);
    setTimeout(() => setAgentStep(2), 800);
    setTimeout(() => setAgentStep(3), 1600);
    setTimeout(() => {
      setAgentStep(4);
      setIsSimulatingAgent(false);
    }, 2400);
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Innovations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Production & AI Engineering Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Real-world enterprise analytics platforms and multi-agent AI orchestration systems built with modern engineering practices.
          </p>
        </div>

        {/* Projects Deep Dive Stack */}
        <div className="space-y-16">
          {/* ========================================================= */}
          {/* PROJECT 1: AI Test Buddy */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65 }}
            className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-white/5 relative overflow-hidden"
          >
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Metadata & Architecture Highlights */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                      Frontend Developer
                    </span>
                    <span className="px-3 py-1 rounded-lg text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800">
                      Aug 2025 – Present
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white">
                    AI Test Buddy
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-cyan-600 dark:text-cyan-400 mt-1">
                    Internal AI Performance-Analytics Platform
                  </p>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  Enterprise performance-analytics platform engineered to monitor LLM provider usage, test prompt iterations across domains, and enhance developer team productivity with real-time telemetry.
                </p>

                {/* Key Architectural Achievements from Resume */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Key Features & Technical Scope:
                  </h4>
                  <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>
                        <strong className="text-slate-900 dark:text-white font-medium">Analytics & KPI Dashboards:</strong> Designed responsive Material UI dashboards, KPI cards, visual charts, date filters, and prompt comparison/diff views.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>
                        <strong className="text-slate-900 dark:text-white font-medium">CRUD & Management Modules:</strong> Engineered complete management workflows for providers, domains, users, and granular access permissions.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>
                        <strong className="text-slate-900 dark:text-white font-medium">SSO, Security & CI/CD:</strong> Implemented Single Sign-On (SSO), token-expiry handling, role-based access control (RBAC), and automated Azure DevOps CI/CD pipelines.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Technologies Stack Badges */}
                <div className="pt-2">
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                    Technologies & Frameworks:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Next.js 14',
                      'React 18',
                      'TypeScript',
                      'Material UI (MUI)',
                      'Axios/REST APIs',
                      'Azure DevOps CI/CD',
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border border-cyan-200/50 dark:border-cyan-800/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive UI Simulation / Preview */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 text-slate-100 overflow-hidden shadow-2xl">
                  {/* Top Mock Window Header */}
                  <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                      <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                      <span className="ml-2 text-xs font-mono text-slate-400">AI Test Buddy Console</span>
                    </div>

                    {/* Interactive Tab Switcher */}
                    <div className="flex items-center gap-1 bg-slate-800/80 p-0.5 rounded-lg text-xs">
                      <button
                        onClick={() => setTestBuddyTab('analytics')}
                        className={`px-2.5 py-1 rounded-md transition-colors ${
                          testBuddyTab === 'analytics'
                            ? 'bg-cyan-500 text-slate-950 font-bold'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        KPI Dashboard
                      </button>
                      <button
                        onClick={() => setTestBuddyTab('prompt-diff')}
                        className={`px-2.5 py-1 rounded-md transition-colors ${
                          testBuddyTab === 'prompt-diff'
                            ? 'bg-cyan-500 text-slate-950 font-bold'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Diff View
                      </button>
                      <button
                        onClick={() => setTestBuddyTab('rbac')}
                        className={`px-2.5 py-1 rounded-md transition-colors ${
                          testBuddyTab === 'rbac'
                            ? 'bg-cyan-500 text-slate-950 font-bold'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        RBAC & SSO
                      </button>
                    </div>
                  </div>

                  {/* Interactive Screen Display */}
                  <div className="p-5 space-y-4">
                    {testBuddyTab === 'analytics' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-xs text-slate-400">
                          <span className="flex items-center gap-1.5 font-medium text-slate-200">
                            <Activity className="w-4 h-4 text-cyan-400" />
                            Live AI Telemetry & Usage
                          </span>
                          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[11px] font-mono">
                            Status: HEALTHY
                          </span>
                        </div>

                        {/* 3 Metric Cards */}
                        <div className="grid grid-cols-3 gap-3">
                          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                            <div className="text-[11px] text-slate-400">Provider Up</div>
                            <div className="text-lg font-bold text-cyan-400 font-mono">99.8%</div>
                            <div className="text-[10px] text-emerald-400">+0.4% SLA</div>
                          </div>
                          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                            <div className="text-[11px] text-slate-400">Prompt Tests</div>
                            <div className="text-lg font-bold text-indigo-400 font-mono">14,280</div>
                            <div className="text-[10px] text-slate-400">This Month</div>
                          </div>
                          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                            <div className="text-[11px] text-slate-400">Avg Latency</div>
                            <div className="text-lg font-bold text-amber-400 font-mono">142ms</div>
                            <div className="text-[10px] text-emerald-400">-18ms diff</div>
                          </div>
                        </div>

                        {/* Visual Bar Graph Simulation */}
                        <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                          <div className="text-xs font-semibold text-slate-300">Provider Usage Breakdown</div>
                          <div className="space-y-1.5 text-xs">
                            <div>
                              <div className="flex justify-between text-[11px] text-slate-400">
                                <span>OpenAI (GPT-4o)</span>
                                <span>62%</span>
                              </div>
                              <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                                <div className="h-full bg-cyan-400 rounded-full" style={{ width: '62%' }} />
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-[11px] text-slate-400">
                                <span>Anthropic (Claude 3.5)</span>
                                <span>28%</span>
                              </div>
                              <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                                <div className="h-full bg-indigo-500 rounded-full" style={{ width: '28%' }} />
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-[11px] text-slate-400">
                                <span>Mistral / Custom LLM</span>
                                <span>10%</span>
                              </div>
                              <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                                <div className="h-full bg-purple-500 rounded-full" style={{ width: '10%' }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {testBuddyTab === 'prompt-diff' && (
                      <div className="space-y-3 font-mono text-xs">
                        <div className="text-xs text-slate-300 font-sans font-semibold flex items-center justify-between">
                          <span>Prompt Comparison & Diff Engine</span>
                          <span className="text-[11px] text-cyan-400">v2.1 vs v2.2</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[11px]">
                          <div className="p-3 rounded-xl bg-red-950/20 border border-red-800/40 space-y-1">
                            <div className="text-red-400 font-bold">Baseline Prompt (v2.1)</div>
                            <div className="text-slate-400 leading-relaxed">
                              - Extract candidate skills as comma-separated list.<br />
                              - Return general evaluation score out of 10.
                            </div>
                          </div>
                          <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-800/40 space-y-1">
                            <div className="text-emerald-400 font-bold">Optimized Prompt (v2.2)</div>
                            <div className="text-slate-300 leading-relaxed">
                              + Output structured JSON with validated schema.<br />
                              + Calculate multidimensional rubric with citation tags.
                            </div>
                          </div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between font-sans">
                          <span>Latency Reduction: <strong className="text-emerald-400 font-mono">28%</strong></span>
                          <span>Output Accuracy: <strong className="text-cyan-400 font-mono">98.4%</strong></span>
                        </div>
                      </div>
                    )}

                    {testBuddyTab === 'rbac' && (
                      <div className="space-y-3 text-xs">
                        <div className="text-xs text-slate-300 font-semibold flex items-center justify-between">
                          <span className="flex items-center gap-1.5">
                            <KeyRound className="w-4 h-4 text-purple-400" />
                            Role-Based Access Control & SSO
                          </span>
                          <span className="text-emerald-400 font-mono text-[11px]">SSO: ACTIVE</span>
                        </div>

                        <div className="space-y-2">
                          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-slate-200">Admin Role</div>
                              <div className="text-[11px] text-slate-400">Full CRUD: Providers, Domains, Users, Billing</div>
                            </div>
                            <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[10px]">Level 3</span>
                          </div>

                          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-slate-200">Developer Role</div>
                              <div className="text-[11px] text-slate-400">Prompt Testing, Diff Views, Metrics Telemetry</div>
                            </div>
                            <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px]">Level 2</span>
                          </div>

                          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-slate-200">Token Management</div>
                              <div className="text-[11px] text-slate-400">Auto Token-Expiry Detection & Silent Refresh</div>
                            </div>
                            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">Active</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* PROJECT 2: AI-Powered Candidate Assessment Agent */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65 }}
            className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-white/5 relative overflow-hidden"
          >
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Metadata & Architecture Highlights */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
                      AI & Full-Stack Developer
                    </span>
                    <span className="px-3 py-1 rounded-lg text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800">
                      Multi-Agent System
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white">
                    AI-Powered Candidate Assessment Agent
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-violet-600 dark:text-violet-400 mt-1">
                    Multi-Agent Candidate Screening & Reasoning Engine
                  </p>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  Autonomous multi-agent architecture designed to screen candidates by reasoning over structured resumes and unscripted interview responses using LLMs, orchestrated through FastAPI and LangGraph.
                </p>

                {/* Key Architectural Achievements from Resume */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Key Features & Technical Scope:
                  </h4>
                  <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>
                        <strong className="text-slate-900 dark:text-white font-medium">Multi-Agent Screening:</strong> Built a multi-agent system that autonomously evaluates candidates by reasoning over resumes, skill depth, and interview transcripts using LLMs.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>
                        <strong className="text-slate-900 dark:text-white font-medium">LangGraph & FastAPI Orchestration:</strong> Developed stateful agent orchestration with FastAPI, LangChain, and LangGraph with state persistence and LangSmith tracing.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>
                        <strong className="text-slate-900 dark:text-white font-medium">Recruiter Review UI:</strong> Built an intuitive React user interface for human recruiters to audit AI reasoning paths, inspect breakdown scores, and make final decisions.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Technologies Stack Badges */}
                <div className="pt-2">
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                    Technologies & Frameworks:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Python',
                      'FastAPI',
                      'LangChain',
                      'LangGraph',
                      'LangSmith',
                      'LLMs',
                      'React',
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 border border-violet-200/50 dark:border-violet-800/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Multi-Agent Interactive Pipeline Simulation */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 text-slate-100 overflow-hidden shadow-2xl">
                  {/* Top Window Bar */}
                  <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                      <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                      <span className="ml-2 text-xs font-mono text-slate-400">LangGraph Agent Pipeline</span>
                    </div>

                    <button
                      onClick={runAgentSimulation}
                      disabled={isSimulatingAgent}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-violet-600 hover:bg-violet-500 text-white disabled:opacity-60 transition-colors"
                    >
                      <Play className="w-3 h-3" />
                      <span>{isSimulatingAgent ? 'Simulating...' : 'Run Simulation'}</span>
                    </button>
                  </div>

                  {/* Flow Steps Visualization */}
                  <div className="p-5 space-y-4">
                    {/* Node 1 */}
                    <div className={`p-3.5 rounded-xl border transition-all ${
                      agentStep >= 1
                        ? 'bg-slate-900 border-violet-500/50 text-white'
                        : 'bg-slate-900/40 border-slate-800 text-slate-500'
                    }`}>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold flex items-center gap-2">
                          <FileCheck2 className={`w-4 h-4 ${agentStep >= 1 ? 'text-violet-400' : 'text-slate-600'}`} />
                          Node 1: Resume Screening Agent
                        </span>
                        <span className="font-mono text-[11px] text-emerald-400">
                          {agentStep >= 1 ? 'Completed' : 'Pending'}
                        </span>
                      </div>
                      <p className="mt-1 text-[11px] text-slate-400 font-mono">
                        Extracts verified experience, tech stack proficiency, and educational credentials.
                      </p>
                    </div>

                    {/* Node 2 */}
                    <div className={`p-3.5 rounded-xl border transition-all ${
                      agentStep >= 2
                        ? 'bg-slate-900 border-indigo-500/50 text-white'
                        : 'bg-slate-900/40 border-slate-800 text-slate-500'
                    }`}>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold flex items-center gap-2">
                          <BrainCircuit className={`w-4 h-4 ${agentStep >= 2 ? 'text-indigo-400' : 'text-slate-600'}`} />
                          Node 2: Interview Response Reasoning
                        </span>
                        <span className="font-mono text-[11px] text-indigo-400">
                          {agentStep >= 2 ? 'Reasoning with LLM' : 'Waiting'}
                        </span>
                      </div>
                      <p className="mt-1 text-[11px] text-slate-400 font-mono">
                        Evaluates semantic coherence, technical depth, and contextual problem-solving ability.
                      </p>
                    </div>

                    {/* Node 3 */}
                    <div className={`p-3.5 rounded-xl border transition-all ${
                      agentStep >= 3
                        ? 'bg-slate-900 border-cyan-500/50 text-white'
                        : 'bg-slate-900/40 border-slate-800 text-slate-500'
                    }`}>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold flex items-center gap-2">
                          <Workflow className={`w-4 h-4 ${agentStep >= 3 ? 'text-cyan-400' : 'text-slate-600'}`} />
                          Node 3: FastAPI Orchestration & LangSmith
                        </span>
                        <span className="font-mono text-[11px] text-cyan-400">
                          {agentStep >= 3 ? 'Traced & Synchronized' : 'Waiting'}
                        </span>
                      </div>
                      <p className="mt-1 text-[11px] text-slate-400 font-mono">
                        FastAPI routes orchestrate LangGraph execution state and log traces to LangSmith.
                      </p>
                    </div>

                    {/* Node 4 (Outcome) */}
                    <div className={`p-3.5 rounded-xl border transition-all ${
                      agentStep >= 4
                        ? 'bg-emerald-950/30 border-emerald-500/60 text-white'
                        : 'bg-slate-900/40 border-slate-800 text-slate-500'
                    }`}>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold flex items-center gap-2">
                          <CheckCircle2 className={`w-4 h-4 ${agentStep >= 4 ? 'text-emerald-400' : 'text-slate-600'}`} />
                          Node 4: Recruiter Review UI Assessment
                        </span>
                        <span className="font-mono text-[11px] text-emerald-400">
                          {agentStep >= 4 ? 'Verdict Ready: 9.4/10' : 'Waiting'}
                        </span>
                      </div>
                      <div className="mt-2 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-sans">
                        <span className="text-slate-300">Technical Depth: <strong className="text-cyan-400 font-mono">High</strong></span>
                        <span className="text-slate-300">Decision: <strong className="text-emerald-400 font-mono">Recommend Interview</strong></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
