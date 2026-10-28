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
  AlertCircle
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { SocialLinks } from '../common/SocialLinks';
import { SectionHeader } from '../common/SectionHeader';

export const ContactSection = () => {
  const { personalInfo } = portfolioData;
  const [copiedType, setCopiedType] = useState(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const validateField = (field, value) => {
    const v = (value || '').trim();
    if (field === 'name') {
      if (!v) return 'Please enter your name.';
      if (v.length < 2) return 'Name must be at least 2 characters.';
    }
    if (field === 'email') {
      if (!v) return 'Please enter your email.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'Please enter a valid email address.';
    }
    if (field === 'subject') {
      if (!v) return 'Please enter a subject.';
    }
    if (field === 'message') {
      if (!v) return 'Please enter your message.';
      if (v.length < 10) return 'Message should be at least 10 characters.';
    }
    return '';
  };

  const handleFieldChange = (field, value) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    if (touched[field] || errors[field]) {
      const err = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: err }));
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const err = validateField(field, formState[field]);
    setErrors((prev) => ({ ...prev, [field]: err }));
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });

    const newErrors = {};
    ['name', 'email', 'subject', 'message'].forEach((field) => {
      const err = validateField(field, formState[field]);
      if (err) newErrors[field] = err;
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const firstInvalid = ['name', 'email', 'subject', 'message'].find((f) => newErrors[f]);
      if (firstInvalid) {
        document.getElementById(firstInvalid)?.focus();
      }
      return;
    }

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

      // The response may be empty or HTML (e.g. a 404 page), so don't assume JSON
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || 'The message service is unavailable right now. Please try again later.');
      }

      setSubmitSuccess(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTouched({});
      setErrors({});
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
        <SectionHeader
          number="07"
          label="Contact"
          icon={Mail}
          title="Get In Touch"
          subtitle="Available for software developer roles, React/Next.js frontend work, and AI agent projects."
        />

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
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-indigo-500/15 text-indigo-600 dark:text-indigo-400">
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

              <div className="pt-1">
                <a
                  href="/Nikita_Tinkhede_Resume.pdf"
                  download="Nikita_Tinkhede_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-500 transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-indigo-500/25 interactive-hover"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resume PDF</span>
                </a>
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
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Direct Email</div>
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

            {/* Location Card */}
            <div className="glass-card p-5 rounded-2xl border border-slate-200/80 dark:border-white/5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 flex items-center justify-center">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Location</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  {personalInfo.location}
                </div>
              </div>
            </div>

            {/* Social Profiles Card */}
            <div className="glass-card p-5 rounded-2xl border border-slate-200/80 dark:border-white/5 space-y-3">
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Social Profiles</div>
              <SocialLinks
                className="grid grid-cols-2 gap-2"
                linkClassName="py-2 px-3 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-center gap-2"
                iconClassName="w-3.5 h-3.5"
                showLabel
              />
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

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Your Name <span className="text-red-600 dark:text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formState.name}
                      onChange={(e) => handleFieldChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none text-sm transition-all ${
                        errors.name
                          ? 'border-rose-500/80 dark:border-rose-500/70 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 bg-rose-500/[0.03] dark:bg-rose-500/[0.06]'
                          : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 bg-slate-50 dark:bg-slate-900/60'
                      }`}
                    />
                    <AnimatePresence>
                      {errors.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -4, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: 'auto' }}
                          exit={{ opacity: 0, y: -4, height: 0 }}
                          className="flex items-center gap-1.5 text-xs font-medium text-rose-600 dark:text-rose-400 pt-0.5"
                        >
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{errors.name}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Your Email <span className="text-red-600 dark:text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formState.email}
                      onChange={(e) => handleFieldChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-xl border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none text-sm transition-all ${
                        errors.email
                          ? 'border-rose-500/80 dark:border-rose-500/70 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 bg-rose-500/[0.03] dark:bg-rose-500/[0.06]'
                          : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 bg-slate-50 dark:bg-slate-900/60'
                      }`}
                    />
                    <AnimatePresence>
                      {errors.email && (
                        <motion.div
                          initial={{ opacity: 0, y: -4, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: 'auto' }}
                          exit={{ opacity: 0, y: -4, height: 0 }}
                          className="flex items-center gap-1.5 text-xs font-medium text-rose-600 dark:text-rose-400 pt-0.5"
                        >
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{errors.email}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Subject <span className="text-red-600 dark:text-red-400">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formState.subject}
                    onChange={(e) => handleFieldChange('subject', e.target.value)}
                    onBlur={() => handleBlur('subject')}
                    placeholder="Software Developer Role / Project Consultation"
                    className={`w-full px-4 py-3 rounded-xl border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none text-sm transition-all ${
                      errors.subject
                        ? 'border-rose-500/80 dark:border-rose-500/70 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 bg-rose-500/[0.03] dark:bg-rose-500/[0.06]'
                        : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 bg-slate-50 dark:bg-slate-900/60'
                    }`}
                  />
                  <AnimatePresence>
                    {errors.subject && (
                      <motion.div
                        initial={{ opacity: 0, y: -4, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -4, height: 0 }}
                        className="flex items-center gap-1.5 text-xs font-medium text-rose-600 dark:text-rose-400 pt-0.5"
                      >
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.subject}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Message <span className="text-red-600 dark:text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => handleFieldChange('message', e.target.value)}
                    onBlur={() => handleBlur('message')}
                    placeholder="Tell Nikita about your requirements, role details, or timeline..."
                    className={`w-full px-4 py-3 rounded-xl border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none text-sm transition-all resize-none ${
                      errors.message
                        ? 'border-rose-500/80 dark:border-rose-500/70 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 bg-rose-500/[0.03] dark:bg-rose-500/[0.06]'
                        : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 bg-slate-50 dark:bg-slate-900/60'
                    }`}
                  />
                  <AnimatePresence>
                    {errors.message && (
                      <motion.div
                        initial={{ opacity: 0, y: -4, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -4, height: 0 }}
                        className="flex items-center gap-1.5 text-xs font-medium text-rose-600 dark:text-rose-400 pt-0.5"
                      >
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.message}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
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


    </section>
  );
};
