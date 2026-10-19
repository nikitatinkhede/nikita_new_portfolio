import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ArrowUpRight,
  Download
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { portfolioData } from '../../data/portfolioData';

export const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll for header blur depth
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Monitor sections using IntersectionObserver for active navigation highlight
  useEffect(() => {
    const sectionIds = portfolioData.navigation.map(item => item.href.substring(1));
    const observers = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-25% 0px -65% 0px', threshold: 0.1 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach(obs => obs.disconnect());
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/75 dark:bg-[#080B11]/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm dark:shadow-2xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group interactive-hover focus:outline-none"
            aria-label="Nikita Tinkhede Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 text-white font-bold shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
              <span className="font-mono text-base tracking-tighter">NT</span>
              {/* Online Pulse Indicator */}
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white dark:border-[#080B11]"></span>
              </span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white font-display flex items-center gap-1.5">
                Nikita Tinkhede
              </span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 -mt-0.5 tracking-wide flex items-center gap-1">
                <span>{portfolioData.personalInfo.role}</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav 
            className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-slate-200/50 dark:bg-slate-900/60 backdrop-blur-lg border border-slate-300/40 dark:border-white/10 shadow-inner"
            aria-label="Main Navigation"
          >
            {portfolioData.navigation.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 interactive-hover ${
                    isActive
                      ? 'text-indigo-600 dark:text-white font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-white dark:bg-indigo-600/30 border border-slate-300/60 dark:border-indigo-400/30 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Controls: Theme Toggle & Quick CTA & Mobile Hamburger */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 transition-all duration-200 interactive-hover focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: 90, scale: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-4 h-4 text-amber-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: -90, scale: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-4 h-4 text-indigo-600" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Resume Download CTA (Desktop) */}
            <a
              href="/Nikita_Tinkhede_Resume.pdf"
              download="Nikita_Tinkhede_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 glass-card hover:border-indigo-500/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 interactive-hover"
              title="Download Nikita Tinkhede's Resume"
            >
              <Download className="w-3.5 h-3.5 text-indigo-500" />
              <span>Resume</span>
            </a>

            {/* Quick Contact CTA (Desktop) */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 shadow-md shadow-indigo-500/25 transition-all duration-200 interactive-hover hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 transition-colors interactive-hover focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white/95 dark:bg-[#0B0F19]/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800/80 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-3">
              <nav className="grid grid-cols-2 gap-2" aria-label="Mobile Navigation">
                {portfolioData.navigation.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-semibold border border-indigo-200/50 dark:border-indigo-800/50'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                      }`}
                    >
                      <span>{item.name}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>}
                    </a>
                  );
                })}
              </nav>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
                <a
                  href="/Nikita_Tinkhede_Resume.pdf"
                  download="Nikita_Tinkhede_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 glass-card"
                >
                  <Download className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Resume PDF</span>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
