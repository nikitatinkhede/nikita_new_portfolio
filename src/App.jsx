import React, { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { ThemeProvider } from './context/ThemeContext';
import { CustomCursor } from './components/common/CustomCursor';
import { Background3D } from './components/common/Background3D';
import { Navbar } from './components/navigation/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { EducationSection } from './components/sections/EducationSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/common/Footer';
import { SectionDivider } from './components/common/SectionHeader';

export function App() {
  useEffect(() => {
    // Ultra-smooth momentum scroll with Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.8,
    });

    window.__lenis = lenis;

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-slate-50 dark:bg-[#0B1020] text-slate-900 dark:text-slate-100 transition-colors duration-300">
        {/* Custom Interactive Desktop Cursor */}
        <CustomCursor />

        {/* 3D Floating Particles & Wireframe Background */}
        <Background3D />

        {/* Floating Glassmorphic Header */}
        <Navbar />

        {/* Main Sectional Content */}
        <main className="relative z-10">
          <HeroSection />
          <SectionDivider />
          <AboutSection />
          <SectionDivider />
          <SkillsSection />
          <SectionDivider />
          <ExperienceSection />
          <SectionDivider />
          <ProjectsSection />
          <SectionDivider />
          <EducationSection />
          <SectionDivider />
          <CertificationsSection />
          <SectionDivider />
          <ContactSection />
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
