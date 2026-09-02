import React from 'react';
import { FileText, ChevronRight, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HeroBackground3D } from './canvas/HeroBackground3D';
import { scrollToElement } from '../hooks/useSmoothScroll';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToSection = (sectionId: string) => {
    scrollToElement(`#${sectionId}`, { offset: -40, duration: 1.2 });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden cyber-grid"
    >
      {/* 3D WebGL Background Scene */}
      <HeroBackground3D />

      {/* Radial lighting glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-6 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          <span>{PERSONAL_INFO.status}</span>
          <span className="text-gray-600">•</span>
          <span className="flex items-center gap-1 text-gray-400">
            <MapPin className="w-3 h-3 text-cyan-400" />
            {PERSONAL_INFO.location}
          </span>
        </div>

        {/* Primary Name Display */}
        <div className="text-xs font-mono uppercase tracking-[0.25em] text-gray-400 mb-2 font-semibold">
          Software Developer & AI Enthusiast
        </div>
        <h1
          id="hero-name-heading"
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter text-white mb-4 uppercase drop-shadow-sm"
        >
          {PERSONAL_INFO.name}
        </h1>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 max-w-4xl leading-tight">
          Building Digital Experiences with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Code & AI
          </span>
        </h2>

        {/* Supporting text */}
        <p className="text-sm sm:text-base md:text-lg text-gray-400 font-normal leading-relaxed mb-8 max-w-2xl">
          Specializing in high-performance web applications, machine learning architectures, and generative AI systems with Python, React, and Gemini.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
          <button
            id="hero-explore-btn"
            onClick={() => scrollToSection('projects')}
            className="w-full sm:w-auto px-8 py-4 bg-cyan-500 text-black font-bold rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:bg-cyan-400 hover:scale-105 transition-all flex items-center justify-center gap-2 group cursor-pointer tracking-wide text-sm"
          >
            <span>Explore My Work</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="hero-resume-btn"
            onClick={onOpenResume}
            className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl backdrop-blur-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Get Resume / CV</span>
          </button>
        </div>

        {/* Tech Stacks Indicator Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 mb-10">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full border border-white/10 bg-[#111111] flex items-center justify-center text-[10px] font-mono text-cyan-300 font-bold">
              PY
            </div>
            <div className="w-8 h-8 rounded-full border border-white/10 bg-[#141414] flex items-center justify-center text-[10px] font-mono text-indigo-300 font-bold">
              JS
            </div>
            <div className="w-8 h-8 rounded-full border border-white/10 bg-[#171717] flex items-center justify-center text-[10px] font-mono text-emerald-300 font-bold">
              AI
            </div>
            <div className="w-8 h-8 rounded-full border border-white/10 bg-[#1a1a1a] flex items-center justify-center text-[10px] font-mono text-amber-300 font-bold">
              AWS
            </div>
          </div>
          <span className="text-xs text-gray-500 font-mono italic">
            Stacks: Python • React • AWS • LLMs • Firebase
          </span>
        </div>

        {/* Quick metrics banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 w-full max-w-3xl pt-6 border-t border-white/5">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 p-4 rounded-2xl text-center flex flex-col items-center justify-center hover:border-cyan-500/30 transition-all"
            >
              <span className="text-xl sm:text-2xl font-bold font-mono text-white">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-[11px] text-gray-400 uppercase tracking-wider font-mono mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center gap-2">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors group cursor-pointer focus:outline-none"
            aria-label="Scroll to explore About section"
          >
            <span className="tracking-widest uppercase text-[11px] mb-1 font-semibold">
              SCROLL TO EXPLORE ↓
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-slate-600 group-hover:border-cyan-400 flex items-start justify-center p-1.5 transition-colors">
              <div className="w-1.5 h-2 bg-cyan-400 rounded-full animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
