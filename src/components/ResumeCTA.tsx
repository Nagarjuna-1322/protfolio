import React from 'react';
import { FileText, Download, Sparkles } from 'lucide-react';

interface ResumeCTAProps {
  onOpenResume: () => void;
}

export const ResumeCTA: React.FC<ResumeCTAProps> = ({ onOpenResume }) => {
  return (
    <section className="py-20 relative overflow-hidden bg-[#050505]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 p-8 sm:p-12 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/20 via-[#050505]/90 to-blue-950/20 relative overflow-hidden text-center flex flex-col items-center shadow-2xl shadow-cyan-950/30">
          {/* Subtle background glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/40 border border-white/10 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            RESUME & CREDENTIALS
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
            WANT TO KNOW <span className="text-cyan-400">MORE?</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mb-8 leading-relaxed">
            Explore my experience, skills, projects, and achievements in detail. Download my complete ATS-formatted resume or inspect it online.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              id="resume-cta-view-btn"
              onClick={onOpenResume}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-cyan-500 text-black font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:bg-cyan-400 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>

            <button
              id="resume-cta-preview-btn"
              onClick={onOpenResume}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white font-semibold text-sm tracking-wide border border-white/15 flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Preview ATS CV</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
