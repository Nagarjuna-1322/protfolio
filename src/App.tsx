import React, { useState, useEffect } from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Certifications } from './components/Certifications';
import { GitHubSection } from './components/GitHubSection';
import { ResumeCTA } from './components/ResumeCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);

  // Initialize Lenis smooth inertial scrolling
  useSmoothScroll({
    duration: 1.2,
    smoothWheel: true,
  });

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'journey', 'certifications', 'github', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0] font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <ExperienceTimeline />
        <Certifications />
        <GitHubSection />
        <ResumeCTA onOpenResume={() => setResumeModalOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* ATS Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
