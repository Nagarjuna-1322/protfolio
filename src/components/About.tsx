import React from 'react';
import { Code2, Sparkles, Brain, Rocket, GraduationCap, Languages } from 'lucide-react';
import { PERSONAL_INFO, ABOUT_CARDS } from '../data/portfolioData';
import { AboutHoloCore3D } from './canvas/AboutHoloCore3D';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-emerald-400" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-amber-400" />;
      default:
        return <Code2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/40 border border-white/10 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            01 // BACKGROUND
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            ABOUT <span className="text-cyan-400">ME</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3" />
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT: Professional Introduction & Biography */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-2">
                <span>Passionate AI & Software Engineering Student</span>
              </h3>

              <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4">
                I am <span className="text-cyan-300 font-semibold">{PERSONAL_INFO.fullName}</span>, 
                an Artificial Intelligence and Machine Learning (AI & ML) engineering student based in 
                <span className="text-white font-medium"> Hyderabad, India</span>. 
                My focus lies at the intersection of practical software engineering, generative AI orchestration, and cloud-backed web development.
              </p>

              <p className="text-gray-400 leading-relaxed text-sm sm:text-base mb-6">
                From developing intelligent assistants like <strong className="text-white">ScholarAI</strong> to constructing predictive ML career models, I enjoy translating complex technical concepts into intuitive, real-world digital applications. I actively hone my expertise in Python, React, Firebase, and prompt engineering with models like Gemini.
              </p>

              {/* Education Highlights */}
              <div className="pt-5 border-t border-white/10 flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0 mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Guru Nanak Institute of Technology (GNIT)
                    </div>
                    <div className="text-xs text-gray-400">
                      B.Tech in AI & ML (3rd Year) • CGPA: <span className="text-cyan-300 font-medium">7.75 / 10.0</span> • Graduating 2028
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0 mt-0.5">
                    <Languages className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Languages Known</div>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {PERSONAL_INFO.languagesSpoken.map((lang, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-black/30 text-gray-300 border border-white/10"
                        >
                          {lang.name} <span className="text-cyan-400">({lang.level})</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Interests bar */}
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                Career Interests:
              </div>
              <div className="flex flex-wrap gap-2">
                {['AI & ML Engineering', 'Full-Stack Development', 'GenAI Solutions', 'Cloud Computing'].map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: 3D Holographic Core & Focus Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* 3D Holo Core Display */}
            <div className="bg-white/5 border border-white/10 p-4 rounded-3xl relative flex flex-col items-center justify-center overflow-hidden group">
              <div className="absolute top-3 left-4 text-[10px] font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Holographic AI Core
              </div>
              <AboutHoloCore3D />
              <div className="text-center text-xs text-gray-400 mt-1 font-mono">
                Interactive Quantum Node • Hover to rotate
              </div>
            </div>

            {/* 4 Information Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ABOUT_CARDS.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:border-cyan-500/40 transition-all flex flex-col gap-1.5 hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-black/30 border border-white/10">
                      {getIcon(card.icon)}
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase">
                      0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mt-1">{card.title}</h4>
                  <div className="text-[11px] font-semibold text-cyan-400">{card.subtitle}</div>
                  <p className="text-xs text-gray-400 leading-snug">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
