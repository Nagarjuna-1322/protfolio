import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Clock } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateISTTime = () => {
      const now = new Date();
      // Formatted in IST
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateISTTime();
    const interval = setInterval(updateISTTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="border-t border-white/10 bg-[#050505] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/5">
          {/* Brand & Slogan */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-black font-mono font-extrabold text-xs shadow-md shadow-cyan-500/20">
                NR
              </div>
              <span className="font-display font-bold text-base tracking-wider text-white">
                NAGARJUNA REDDY
              </span>
            </div>
            <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
              Building. Learning. Creating.
            </p>
          </div>

          {/* Local IST Clock */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 font-mono">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Hyderabad, IN:</span>
            <span className="text-cyan-300 font-semibold">{time || 'IST Time'}</span>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 text-gray-400 hover:text-white border border-white/10 hover:border-cyan-500/40 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 text-gray-400 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/40 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-white/5 text-gray-400 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/40 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-cyan-500 text-black hover:bg-cyan-400 font-bold transition-all ml-2 cursor-pointer shadow-[0_0_12px_rgba(6,182,212,0.3)]"
              aria-label="Scroll to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono text-center">
          <div>
            © 2026 Nagarjuna Reddy. All rights reserved.
          </div>
          <div>
            Designed with 3D WebGL, React & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};
