import React, { useRef, useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Sparkles, Cpu } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowX, setGlowX] = useState(50);
  const [glowY, setGlowY] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 7;
    const rotY = ((x - centerX) / centerX) * 7;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlowX((x / rect.width) * 100);
    setGlowY((y / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className={`relative rounded-3xl bg-white/5 p-6 sm:p-7 flex flex-col justify-between group overflow-hidden border transition-all ${
        project.featured
          ? 'border-cyan-500/40 shadow-xl shadow-cyan-950/30'
          : 'border-white/10 hover:border-cyan-500/30'
      }`}
    >
      {/* Dynamic Specular Lighting Gradient on Hover */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 250px at ${glowX}% ${glowY}%, rgba(6, 182, 212, 0.12), transparent 70%)`,
        }}
      />

      <div>
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-black/40 text-cyan-400 border border-white/10">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Featured
              </span>
            )}
          </div>
          <div className="text-xs font-mono text-gray-500">
            <Cpu className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
          </div>
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>

        {/* Short Tagline */}
        <p className="text-xs sm:text-sm font-medium text-gray-300 mb-3 leading-snug">
          {project.tagline}
        </p>

        {/* Description snippet */}
        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-3 mb-6">
          {project.description}
        </p>

        {/* Metric Badges if present */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-5">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="px-2.5 py-1.5 rounded-lg bg-black/30 border border-white/5 text-center"
              >
                <div className="text-[10px] text-gray-500 font-mono">{m.label}</div>
                <div className="text-xs font-semibold text-cyan-300 font-mono">{m.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Technologies Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded text-xs font-mono bg-black/30 text-gray-300 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
        <button
          onClick={() => onOpenDetails(project)}
          className="px-4 py-2 rounded-xl bg-cyan-500 text-black hover:bg-cyan-400 text-xs font-bold tracking-wide transition-all flex items-center gap-1.5 cursor-pointer shadow-[0_0_12px_rgba(6,182,212,0.25)]"
        >
          <span>View Details</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-gray-400 hover:text-white bg-black/30 hover:bg-white/10 border border-white/10 transition-all"
              aria-label={`View ${project.title} on GitHub`}
              title="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-gray-400 hover:text-cyan-300 bg-black/30 hover:bg-white/10 border border-white/10 transition-all"
              aria-label={`View Live Demo of ${project.title}`}
              title="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
