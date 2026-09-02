import React from 'react';
import { ShieldCheck, ExternalLink, Trophy } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const getIssuerBadge = (issuer: string) => {
    switch (issuer) {
      case 'Google':
        return (
          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-blue-500/15 text-blue-300 border border-blue-500/30">
            Google Verified
          </span>
        );
      case 'Microsoft':
        return (
          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
            Microsoft Verified
          </span>
        );
      default:
        return (
          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
            Official Award
          </span>
        );
    }
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/40 border border-white/10 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            05 // CREDENTIALS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            CERTIFICATIONS & <span className="text-cyan-400">ACHIEVEMENTS</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mt-3">
            Industry-recognized credentials in Generative AI, Gemini LLM Prompting, and Prompt Engineering.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="bg-white/5 p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all group flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl pointer-events-none" />

              <div>
                {/* Header info */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  {getIssuerBadge(cert.issuer)}
                  <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>

                {/* Issuing Organization */}
                <div className="text-xs sm:text-sm font-medium text-gray-300 mb-3 flex items-center gap-1.5">
                  <span className="text-gray-500 font-mono">Issuer:</span>
                  <span className="text-cyan-300 font-semibold">{cert.issuer}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-5">
                  {cert.description}
                </p>
              </div>

              {/* Skills tags footer */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsCovered.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-black/40 text-gray-300 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-gray-400 hover:text-cyan-300 hover:bg-white/5 transition-colors"
                    aria-label={`View ${cert.title} credential verification`}
                    title="View Credential"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Hackathon spotlight banner */}
        <div className="mt-8 p-6 rounded-3xl bg-white/5 border border-amber-500/30 bg-gradient-to-r from-amber-500/5 via-cyan-500/5 to-transparent flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-amber-500/15 text-amber-300 border border-amber-500/30 shrink-0">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-amber-300 uppercase tracking-wide">
                Competitive Achievement
              </div>
              <h4 className="text-base font-bold text-white">
                1st Prize Winner — Tech Titans 24-Hour Rapid Prototyping Hackathon
              </h4>
              <p className="text-xs text-gray-400 mt-0.5">
                Competed with top engineering cohorts to architect, develop, and present a live functional MVP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
