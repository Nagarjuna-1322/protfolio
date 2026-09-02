import React from 'react';
import { Github, Star, GitFork, ArrowUpRight, Code2, Terminal, FolderGit2 } from 'lucide-react';
import { PERSONAL_INFO, GITHUB_REPOS } from '../data/portfolioData';

export const GitHubSection: React.FC = () => {
  // Realistic contributions matrix (7 days x 20 weeks)
  const weeks = 20;
  const days = 7;
  const contributionGrid: number[][] = [];

  for (let w = 0; w < weeks; w++) {
    const weekDays: number[] = [];
    for (let d = 0; d < days; d++) {
      // Deterministic realistic activity pattern
      const val = (w * 7 + d * 3) % 5;
      weekDays.push(val);
    }
    contributionGrid.push(weekDays);
  }

  const getHeatmapColor = (level: number) => {
    switch (level) {
      case 0:
        return 'bg-white/[0.04] border-white/5';
      case 1:
        return 'bg-cyan-950/80 border-cyan-800/40';
      case 2:
        return 'bg-cyan-800/80 border-cyan-700/50';
      case 3:
        return 'bg-cyan-600/90 border-cyan-500/60';
      case 4:
        return 'bg-cyan-400 border-cyan-300';
      default:
        return 'bg-white/[0.04]';
    }
  };

  const languages = [
    { name: 'Python', percent: 45, color: 'bg-cyan-400' },
    { name: 'JavaScript / React', percent: 35, color: 'bg-indigo-400' },
    { name: 'HTML / CSS', percent: 12, color: 'bg-emerald-400' },
    { name: 'Java', percent: 8, color: 'bg-amber-400' }
  ];

  return (
    <section id="github" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/40 border border-white/10 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            06 // OPEN SOURCE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            CODE • BUILD • <span className="text-cyan-400">LEARN</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mt-3">
            Open-source repositories, experiments, and code activity on GitHub.
          </p>
        </div>

        {/* GitHub Profile Overview Card */}
        <div className="bg-white/5 p-6 sm:p-8 rounded-3xl border border-white/10 mb-10 relative overflow-hidden shadow-2xl shadow-black/40">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            {/* User Profile */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 p-0.5 shadow-[0_0_15px_rgba(6,182,212,0.3)] flex items-center justify-center">
                <div className="w-full h-full bg-[#050505] rounded-2xl flex items-center justify-center">
                  <Github className="w-7 h-7 text-cyan-400" />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white font-display">
                    {PERSONAL_INFO.fullName}
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    Prototyper
                  </span>
                </div>
                <div className="text-xs font-mono text-gray-400 mt-0.5">
                  @{PERSONAL_INFO.githubUsername} • Hyderabad, India
                </div>
              </div>
            </div>

            {/* View Profile Action */}
            <a
              id="github-view-profile-btn"
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-bold text-xs tracking-wide shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:bg-cyan-400 hover:scale-105 flex items-center gap-2 group transition-all cursor-pointer"
            >
              <Github className="w-4 h-4" />
              <span>View GitHub Profile</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Activity Heatmap Grid */}
          <div className="pt-6">
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono text-gray-300 font-semibold flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" /> Commit Activity Visualization
              </span>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-gray-500">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-sm bg-white/[0.04] border border-white/5" />
                <span className="w-2.5 h-2.5 rounded-sm bg-cyan-950/80 border border-cyan-800/40" />
                <span className="w-2.5 h-2.5 rounded-sm bg-cyan-800/80 border border-cyan-700/50" />
                <span className="w-2.5 h-2.5 rounded-sm bg-cyan-600/90 border border-cyan-500/60" />
                <span className="w-2.5 h-2.5 rounded-sm bg-cyan-400 border border-cyan-300" />
                <span>More</span>
              </div>
            </div>

            <div className="overflow-x-auto pb-2">
              <div className="flex gap-1.5 min-w-[500px]">
                {contributionGrid.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1.5">
                    {week.map((level, dIdx) => (
                      <div
                        key={dIdx}
                        className={`w-3 h-3 rounded-sm border ${getHeatmapColor(level)} transition-colors hover:scale-125`}
                        title={`Contribution activity day`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Language Breakdown Bar */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <span className="text-xs font-mono text-gray-400 uppercase mb-2 block">
              Language Ecosystem:
            </span>
            <div className="w-full h-2.5 rounded-full overflow-hidden bg-black/40 flex gap-0.5 border border-white/5">
              {languages.map((lang, idx) => (
                <div
                  key={idx}
                  style={{ width: `${lang.percent}%` }}
                  className={`${lang.color} h-full transition-all`}
                  title={`${lang.name}: ${lang.percent}%`}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-4 mt-3">
              {languages.map((lang, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-300 font-mono">
                  <span className={`w-2 h-2 rounded-full ${lang.color}`} />
                  <span>{lang.name}</span>
                  <span className="text-gray-500">({lang.percent}%)</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GITHUB_REPOS.map((repo, idx) => (
            <a
              key={idx}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-cyan-400" />
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors font-mono">
                      {repo.name}
                    </h4>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                </div>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
                  {repo.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {repo.topics.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/40 text-gray-400 border border-white/5"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
                <span className="flex items-center gap-1 text-cyan-300">
                  <Code2 className="w-3.5 h-3.5" />
                  {repo.language}
                </span>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-gray-400" />
                    {repo.forks}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
