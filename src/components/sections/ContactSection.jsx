import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare,
  Download,
  FileText,
  Eye,
  X,
  AlertCircle,
  Clock
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const ContactSection = () => {
  const { personalInfo } = portfolioData;
  const [copiedType, setCopiedType] = useState(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [showResumeModal, setShowResumeModal] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const response = await fetch('/api/edata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message. Please try again.');
      }

      setSubmitSuccess(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 8000);
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitError(error.message || 'Something went wrong. Please try again or email directly.');
      setTimeout(() => setSubmitError(null), 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Available for software developer positions, React/Next.js frontend engineering, and AI agent projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details & Resume Download Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Resume Download Feature Card */}
            <div className="glass-card p-6 rounded-3xl border border-indigo-500/30 dark:border-indigo-500/20 bg-gradient-to-br from-indigo-500/[0.06] via-transparent to-cyan-500/[0.04] space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-indigo-500/15 text-indigo-600 dark:text-indigo-400">
                  Verified PDF
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
                  Official Resume
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Complete documentation of experience at Valethi Technology, MCA, and AI projects.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href="/Nikita_Tinkhede_Resume.pdf"
                  download="Nikita_Tinkhede_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-500 transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-indigo-500/25 interactive-hover"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resume PDF</span>
                </a>

                <button
                  onClick={() => setShowResumeModal(true)}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors interactive-hover"
                  title="Preview Resume"
                  aria-label="Preview resume in modal"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Email Card */}
            <div className="glass-card p-5 rounded-2xl border border-slate-200/80 dark:border-white/5 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">Direct Email</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block truncate max-w-[210px] sm:max-w-xs"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  title="Copy Email"
                  aria-label="Copy email address"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Availability & Response Time Card */}
            <div className="glass-card p-5 rounded-2xl border border-slate-200/80 dark:border-white/5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">Response Time</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      Within 24 Hours
                    </div>
                  </div>
                </div>

                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  {personalInfo.availability}
                </span>
              </div>

              <div className="pt-1 flex items-center gap-2">
                <a
                  href={personalInfo.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-indigo-400 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-slate-200/60 dark:border-slate-700/60"
                >
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personalInfo.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-slate-200/60 dark:border-slate-700/60"
                >
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card p-5 rounded-2xl border border-slate-200/80 dark:border-white/5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] text-slate-400 font-medium">Location</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  {personalInfo.location}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Functional Message Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-white/5 relative">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-indigo-500" />
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Connect directly with Nikita for job offers, discussions, or projects.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-emerald-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active Inbox
                </span>
              </div>

              {submitSuccess && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm flex items-center gap-2.5">
                  <Check className="w-5 h-5 flex-shrink-0 text-emerald-500" />
                  <span>
                    Thank you! Your message has been sent directly to Nikita's inbox. She will get back to you soon.
                  </span>
                </div>
              )}

              {submitError && (
                <div className="mb-6 p-4 rounded-2xl bg-red-500/15 border border-red-500/30 text-red-700 dark:text-red-300 text-xs sm:text-sm flex items-center gap-2.5">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-500" />
                  <span>
                    {submitError} (You can also reach out directly to{' '}
                    <a href={`mailto:${personalInfo.email}`} className="underline font-semibold hover:text-red-800 dark:hover:text-red-200">
                      {personalInfo.email}
                    </a>)
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 text-sm transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="Software Developer Role / Project Consultation"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 text-sm transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell Nikita about your requirements, role details, or timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-70 shadow-lg shadow-indigo-500/25 transition-all duration-200 flex items-center justify-center gap-2 interactive-hover text-sm sm:text-base mt-2"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Direct Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* In-Browser Resume Preview Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-slate-900 w-full max-w-4xl h-[85vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-slate-200 dark:border-slate-800"
            >
              <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-indigo-500" />
                  <span className="font-bold text-slate-900 dark:text-white">
                    Nikita Tinkhede — Resume Preview
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="/Nikita_Tinkhede_Resume.pdf"
                    download="Nikita_Tinkhede_Resume.pdf"
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 text-white flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                  <button
                    onClick={() => setShowResumeModal(false)}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex-1 w-full bg-slate-100 dark:bg-slate-950 p-2">
                <iframe
                  src="/Nikita_Tinkhede_Resume.pdf#toolbar=0"
                  className="w-full h-full rounded-2xl border-0"
                  title="Nikita Tinkhede Resume"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
