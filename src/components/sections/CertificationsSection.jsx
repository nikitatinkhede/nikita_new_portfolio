import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  MapPin, 
  Code, 
  FileCheck, 
  CheckCircle2, 
  Laptop 
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';

const certDetails = [
  {
    title: "Frontend Development Internship",
    issuer: "Cognifyz Technologies",
    location: "Nagpur, Maharashtra",
    icon: Laptop,
    accent: "text-indigo-600 dark:text-indigo-400",
    bgAccent: "bg-indigo-500/10",
    color: "from-indigo-500/20 to-cyan-500/20",
    description: "Hands-on internship working on responsive UI components, HTML5/CSS3 layouts, and JavaScript state synchronization.",
    tags: ["Frontend Engineering", "UI Components", "JavaScript"]
  },
  {
    title: "Frontend Development Internship",
    issuer: "Codetech",
    location: "Hyderabad, Telangana",
    icon: Code,
    accent: "text-cyan-700 dark:text-cyan-400",
    bgAccent: "bg-cyan-500/10",
    color: "from-cyan-500/20 to-indigo-500/20",
    description: "Intensive development internship focused on web component architecture, REST client communication, and cross-browser testing.",
    tags: ["React & Web", "REST APIs", "Component Architecture"]
  },
  {
    title: "Web Development Course",
    issuer: "Seven Mentors",
    location: "Pune, Maharashtra",
    icon: FileCheck,
    accent: "text-indigo-600 dark:text-indigo-400",
    bgAccent: "bg-indigo-500/10",
    color: "from-indigo-500/20 to-cyan-500/20",
    description: "Comprehensive software engineering program covering modern full-stack foundations, web standards, and database management.",
    tags: ["Web Standards", "Full-Stack Fundamentals", "SQL"]
  }
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="06"
          label="Certifications"
          icon={Award}
          title="Certifications & Internships"
          subtitle="Internships and courses that built my development foundation."
        />

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certDetails.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.issuer}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="glass-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between border border-slate-200/80 dark:border-white/5 relative group hover:border-cyan-500/40"
              >
                {/* Background glow */}
                <div className={`absolute -right-16 -top-16 w-36 h-36 rounded-full bg-gradient-to-br ${cert.color} blur-3xl opacity-35 group-hover:opacity-70 transition-opacity`} />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${cert.bgAccent} ${cert.accent} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="flex items-center gap-1 text-xs text-emerald-700 dark:text-emerald-400 font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">
                      {cert.title}
                    </h3>
                    <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                      {cert.issuer}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 relative z-10">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{cert.location}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Completed</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
