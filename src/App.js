import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Header from './views/components/Header';
import HeroSection from './views/components/HeroSection';
import AboutSection from './views/components/AboutSection';
import ProjectsSection from './views/components/ProjectsSection';
import ExperienceSection from './views/components/ExperienceSection';
import EducationSection from './views/components/EducationSection';
import SkillsSection from './views/components/SkillsSection';
import SoftSkillsSection from './views/components/SoftSkillsSection';
import ContactSection from './views/components/ContactSection';
import Footer from './views/components/Footer';
import MatrixBackground from './views/components/MatrixBackground';


export default function App() {
  return (
    <>
      <GlobalStyles />
      <div className="antialiased">
        <div className="scanline"></div>
        <MatrixBackground />
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <SkillsSection />
          <SoftSkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}