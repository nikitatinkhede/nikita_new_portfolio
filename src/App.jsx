import React from 'react';
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

export function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-slate-50 dark:bg-[#080B11] text-slate-900 dark:text-slate-100 transition-colors duration-300">
        {/* Custom Interactive Desktop Cursor */}
        <CustomCursor />

        {/* 3D Floating Particles & Wireframe Background */}
        <Background3D />

        {/* Floating Glassmorphic Header */}
        <Navbar />

        {/* Main Sectional Content */}
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <CertificationsSection />
          <ContactSection />
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
