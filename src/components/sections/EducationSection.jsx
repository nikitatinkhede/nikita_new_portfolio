import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Calendar, 
  BookOpen, 
  Building2,
  CheckCircle2,
  Medal
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';

export const EducationSection = () => {

  const academicHighlights = [
    {
      degree: "MCA (Master of Computer Applications)",
      institution: "G.H. Raisoni Amravati University",
      period: "2022 – 2024",
      score: "CGPA: 9.54 / 10",
      status: "First Class with Distinction",
      icon: GraduationCap,
      color: "from-indigo-500/20 to-cyan-500/20",
      accent: "text-indigo-600 dark:text-indigo-400",
      border: "border-indigo-500/30",
      details: [
        "Specialized in advanced software development methodologies and distributed computing.",
        "Graduated with top academic standing (9.54/10 CGPA distinction).",
        "Completed comprehensive coursework in algorithms, database design, and web architectures."
      ]
    },
    {
      degree: "B.Sc. Information Technology",
      institution: "Prerna College, RTMNU, Nagpur",
      period: "2019 – 2022",
      score: "75.00%",
      status: "First Class",
      icon: BookOpen,
      color: "from-cyan-500/20 to-indigo-500/20",
      accent: "text-cyan-700 dark:text-cyan-400",
      border: "border-cyan-500/30",
      details: [
        "Core foundational computer science, relational databases (SQL), and programming paradigms.",
        "Object-oriented programming, data structures, and computer networking principles.",
        "Graduated First Class with 75.00% aggregate."
      ]
    }
  ];

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="05"
          label="Education"
          icon={GraduationCap}
          title="Education"
          subtitle="My degrees in computer applications and information technology."
        />

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {academicHighlights.map((edu, idx) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: idx * 0.15 }}
                className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between border border-slate-200/80 dark:border-white/5 group hover:border-indigo-500/40"
              >
                {/* Background glow */}
                <div className={`absolute -right-16 -top-16 w-40 h-40 rounded-full bg-gradient-to-br ${edu.color} blur-3xl opacity-40 group-hover:opacity-75 transition-opacity`} />

                <div className="space-y-5 relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 font-mono">
                        {edu.score}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                        {edu.status}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5 mt-1.5">
                      <Building2 className="w-4 h-4" />
                      <span>{edu.institution}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 pt-2 border-t border-slate-200/60 dark:border-slate-800/60 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {edu.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 mt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 relative z-10">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span>Academic Term: {edu.period}</span>
                  </div>
                  <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-semibold">
                    <Medal className="w-3.5 h-3.5" />
                    Verified Degree
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
