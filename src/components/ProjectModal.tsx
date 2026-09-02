import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Wrench, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        id="project-detail-modal-content"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0a0a0a] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl shadow-cyan-950/50 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-black/40 text-cyan-400 border border-white/10">
                {project.category}
              </span>
              {project.featured && (
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Featured Project
                </span>
              )}
            </div>
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-display font-bold text-white">
              {project.title}
            </h2>
            <p className="text-sm text-cyan-300 mt-1">{project.tagline}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-6 space-y-6 text-sm text-gray-300 leading-relaxed">
          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-black/40 border border-rose-500/20">
              <div className="text-xs font-mono font-bold text-rose-400 uppercase mb-1.5 flex items-center gap-1.5">
                <span>The Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300">{project.modalDetails.problem}</p>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-emerald-500/20">
              <div className="text-xs font-mono font-bold text-emerald-400 uppercase mb-1.5 flex items-center gap-1.5">
                <span>The Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300">{project.modalDetails.solution}</p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Key Features & Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.modalDetails.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-black/30 border border-white/5 flex items-start gap-2.5 text-xs text-gray-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Tech Stack Breakdown */}
          <div>
            <h3 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-blue-400" /> Technology Architecture
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.modalDetails.techStackDetails.map((techGroup, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xs font-bold text-gray-200 mb-2">{techGroup.category}</div>
                  <div className="flex flex-wrap gap-1">
                    {techGroup.tools.map((tool, toolIdx) => (
                      <span
                        key={toolIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-black/40 text-cyan-300 border border-white/10"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Development Process Highlights */}
          {project.modalDetails.developmentProcess.length > 0 && (
            <div>
              <h3 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Wrench className="w-4 h-4 text-amber-400" /> Engineering & Development Process
              </h3>
              <div className="space-y-2">
                {project.modalDetails.developmentProcess.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-black/30 border border-white/5 flex items-start gap-2.5 text-xs text-gray-300"
                  >
                    <span className="text-cyan-400 font-mono font-semibold">0{idx + 1}.</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white text-xs font-semibold border border-white/15 flex items-center gap-2 transition-all"
              >
                <Github className="w-4 h-4 text-gray-300" />
                <span>View GitHub Repository</span>
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 text-xs shadow-[0_0_12px_rgba(6,182,212,0.3)] flex items-center gap-2 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Project Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs font-medium text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
