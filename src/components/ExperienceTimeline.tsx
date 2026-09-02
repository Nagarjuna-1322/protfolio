import React from 'react';
import { Calendar, GraduationCap, Trophy, Users, Award, MapPin } from 'lucide-react';
import { JOURNEY_MILESTONES } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Award':
        return <Trophy className="w-4 h-4 text-amber-400" />;
      case 'Leadership':
        return <Users className="w-4 h-4 text-cyan-400" />;
      case 'Education':
      default:
        return <GraduationCap className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/40 border border-white/10 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            04 // ROADMAP
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            MY <span className="text-cyan-400">JOURNEY</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mt-3">
            Academic milestones, hackathon achievements, and hands-on leadership experiences.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-cyan-500/20 ml-4 sm:ml-32 space-y-12 pb-6">
          {JOURNEY_MILESTONES.map((milestone, idx) => (
            <div key={milestone.id} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Illuminated Node */}
              <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-[#050505] border-2 border-cyan-500/50 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all">
                {getCategoryIcon(milestone.category)}
              </div>

              {/* Timestamp label on left for wider screens */}
              <div className="hidden sm:block absolute -left-36 top-1 text-right w-24">
                <span className="text-xs font-mono font-bold text-cyan-300">
                  {milestone.year}
                </span>
                <div className="text-[10px] text-gray-500 font-mono">
                  {milestone.period}
                </div>
              </div>

              {/* Milestone Card */}
              <div className="bg-white/5 p-6 sm:p-7 rounded-3xl border border-white/10 group-hover:border-cyan-500/40 transition-all relative overflow-hidden shadow-lg shadow-black/40">
                {/* Mobile timestamp banner */}
                <div className="sm:hidden flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    {milestone.period}
                  </span>
                  {milestone.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      {milestone.badge}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {milestone.title}
                  </h3>

                  {milestone.badge && (
                    <span className="hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm shadow-cyan-500/10">
                      {milestone.badge}
                    </span>
                  )}
                </div>

                {/* Organization & Location */}
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-300 font-medium mb-3">
                  <span className="text-cyan-300 font-semibold">{milestone.organization}</span>
                  {milestone.location && (
                    <>
                      <span className="text-gray-600">•</span>
                      <span className="flex items-center gap-1 text-gray-400">
                        <MapPin className="w-3 h-3 text-cyan-400" />
                        {milestone.location}
                      </span>
                    </>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
                  {milestone.description}
                </p>

                {/* Achievements List */}
                {milestone.achievements && milestone.achievements.length > 0 && (
                  <div className="space-y-1.5 pt-3 border-t border-white/5">
                    {milestone.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
