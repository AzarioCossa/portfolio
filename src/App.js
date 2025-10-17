import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MatrixBackground from './components/MatrixBackground';


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
            <SkillsSection />
            <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}