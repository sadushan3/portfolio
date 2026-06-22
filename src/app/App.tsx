import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { NeuralNetworkSection } from './components/NeuralNetworkSection';
import { CertificationsSection } from './components/CertificationsSection';
import { TechnologyMarquee } from './components/TechnologyMarquee';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <NeuralNetworkSection />
        <ProjectsSection />
        <CertificationsSection />
        <TechnologyMarquee />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
