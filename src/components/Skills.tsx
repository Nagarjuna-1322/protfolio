import React, { useState } from 'react';
import { Terminal, Layout, BrainCircuit, Cloud, CheckCircle2, Sparkles, Orbit, Grid3X3, Search, Info } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { SkillOrbit3D } from './canvas/SkillOrbit3D';
import { SkillItem } from '../types';

export const Skills: React.FC = () => {
  const [viewMode, setViewMode] = useState<'3d' | 'grid'>('3d');
  const [selectedSkillName, setSelectedSkillName] = useState<string | null>('Python');
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal':
        return <Terminal className="w-4 h-4 text-cyan-400" />;
      case 'Layout':
        return <Layout className="w-4 h-4 text-indigo-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-4 h-4 text-emerald-400" />;
      case 'Cloud':
        return <Cloud className="w-4 h-4 text-amber-400" />;
      default:
        return <Terminal className="w-4 h-4 text-cyan-400" />;
    }
  };

  // Find active selected skill info
  const selectedSkillData = SKILL_CATEGORIES.flatMap((c) =>
    c.skills.map((s) => ({ ...s, categoryName: c.name, categoryId: c.id }))
  ).find((s) => s.name.toLowerCase() === selectedSkillName?.toLowerCase());

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/40 border border-white/10 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            02 // CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            TECHNICAL <span className="text-cyan-400">ARSENAL</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mt-3">
            Core technologies, AI frameworks, and development tooling applied across real projects.
          </p>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-2 mt-6 p-1 rounded-2xl bg-white/5 border border-white/10">
            <button
              onClick={() => setViewMode('3d')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                viewMode === '3d'
                  ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Orbit className="w-3.5 h-3.5" />
              <span>3D Orbit View</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Grid3X3 className="w-3.5 h-3.5" />
              <span>Matrix Grid View</span>
            </button>
          </div>
        </div>

        {/* 3D Orbit Mode */}
        {viewMode === '3d' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* 3D Orbit Container */}
            <div className="lg:col-span-8 bg-white/5 rounded-3xl border border-white/10 overflow-hidden relative p-4 flex flex-col justify-center">
              <SkillOrbit3D
                onSelectSkill={(name) => setSelectedSkillName(name)}
                selectedSkill={selectedSkillName}
              />
            </div>

            {/* Selected Skill Detail Inspector */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="bg-white/5 p-6 rounded-3xl border border-cyan-500/40 relative overflow-hidden shadow-xl shadow-cyan-950/20">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Tech Inspector
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    {selectedSkillData?.proficiency || 'Proficient'}
                  </span>
                </div>

                <div className="my-4">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {selectedSkillData?.name || 'Python'}
                  </h3>
                  <div className="text-xs text-gray-400 font-mono">
                    Category: {selectedSkillData?.categoryName || 'Programming'}
                  </div>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {selectedSkillData?.description ||
                    'Primary language for Machine Learning, data processing, AI experimentation, and backend scripting.'}
                </p>

                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-gray-400 uppercase">Tags & Applications:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {(selectedSkillData?.tags || ['Core', 'AI/ML']).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-black/40 text-gray-200 border border-white/10"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-gray-400">
                  <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Click any orbital node or select below to inspect details.</span>
                </div>
              </div>

              {/* Quick Select Chips */}
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                <span className="text-xs font-mono text-gray-400 uppercase mb-2 block">
                  Quick Select:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {SKILL_CATEGORIES.flatMap((c) => c.skills.map((s) => ({ ...s, catId: c.id }))).map((skill) => (
                    <button
                      key={`${skill.catId}-${skill.name}`}
                      onClick={() => setSelectedSkillName(skill.name)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                        selectedSkillName?.toLowerCase() === skill.name.toLowerCase()
                          ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/30'
                          : 'bg-black/30 text-gray-300 hover:bg-white/10 border border-white/5'
                      }`}
                    >
                      {skill.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Matrix Grid Mode */}
        {viewMode === 'grid' && (
          <div className="space-y-8 animate-fade-in">
            {/* Search filter */}
            <div className="max-w-md mx-auto relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search skills (e.g. Python, React, Gemini)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SKILL_CATEGORIES.map((category) => {
                const filteredSkills = category.skills.filter(
                  (s) =>
                    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    s.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
                );

                if (filteredSkills.length === 0 && searchQuery) return null;

                return (
                  <div
                    key={category.id}
                    className="bg-white/5 p-5 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-cyan-500/40 transition-all group"
                  >
                    <div>
                      {/* Category Header */}
                      <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-white/10">
                        <div className="p-2 rounded-lg bg-black/40 border border-white/10 group-hover:scale-105 transition-transform">
                          {getCategoryIcon(category.iconName)}
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-white">{category.name}</h3>
                          <span className="text-[11px] text-gray-400 font-mono">
                            {filteredSkills.length} Technologies
                          </span>
                        </div>
                      </div>

                      {/* Skills List */}
                      <div className="space-y-3">
                        {filteredSkills.map((skill) => (
                          <div
                            key={skill.name}
                            onClick={() => setSelectedSkillName(skill.name)}
                            className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-cyan-500/30 transition-all cursor-pointer"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-semibold text-white flex items-center gap-1.5">
                                {skill.name}
                                {skill.highlight && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                )}
                              </span>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                                {skill.proficiency}
                              </span>
                            </div>
                            <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                              {skill.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
