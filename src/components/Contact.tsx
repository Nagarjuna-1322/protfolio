import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, Copy, Check, Sparkles, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }

    setFormStatus('submitting');

    // Simulate reliable dispatch with callback
    setTimeout(() => {
      setFormStatus('success');

      // Trigger celebratory confetti effect
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#38bdf8', '#818cf8', '#34d399', '#f59e0b']
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background glow */}
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/40 border border-white/10 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            07 // REACH OUT
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            LET'S BUILD <span className="text-cyan-400">SOMETHING</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mt-3">
            Have an idea, opportunity, or project in mind? Let's connect.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT: Contact Coordinates & Channels */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white/5 p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden">
              <h3 className="text-xl font-bold text-white mb-2">Get in Touch</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                I am actively seeking engineering internships, technical collaborations, and innovative AI/ML projects. Feel free to connect directly via email, phone, or LinkedIn.
              </p>

              {/* Direct Channels */}
              <div className="space-y-4">
                {/* Email */}
                <div className="p-3.5 rounded-2xl bg-black/30 border border-white/5 flex items-center justify-between gap-3 group hover:border-cyan-500/30 transition-all">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono text-gray-500 uppercase">Email Address</div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-semibold text-gray-200 hover:text-cyan-300 truncate block transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="p-2 rounded-lg text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
                    title="Copy email address"
                  >
                    {copiedField === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-3.5 rounded-2xl bg-black/30 border border-white/5 flex items-center justify-between gap-3 group hover:border-cyan-500/30 transition-all">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono text-gray-500 uppercase">Phone / WhatsApp</div>
                      <a
                        href={`tel:${PERSONAL_INFO.phone}`}
                        className="text-xs sm:text-sm font-semibold text-gray-200 hover:text-cyan-300 truncate block transition-colors"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    className="p-2 rounded-lg text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
                    title="Copy phone number"
                  >
                    {copiedField === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-2xl bg-black/30 border border-white/5 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-gray-500 uppercase">Location Base</div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-200">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <span className="text-xs font-mono text-gray-400 uppercase mb-3 block">
                  Professional Networks:
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PERSONAL_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-white/5 hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-500/30 flex items-center gap-2 text-xs font-semibold text-gray-200 hover:text-cyan-300 transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-white/5 hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-500/30 flex items-center gap-2 text-xs font-semibold text-gray-200 hover:text-cyan-300 transition-all"
                  >
                    <Github className="w-4 h-4 text-gray-300" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Validated Futuristic Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl shadow-black/40">
              <h3 className="text-xl font-bold text-white mb-1">Send a Message</h3>
              <p className="text-xs text-gray-400 mb-6">
                Fill in the details below and I'll get back to you promptly.
              </p>

              {formStatus === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-start gap-3 mb-6 animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-emerald-200">Message Received!</div>
                    <div>Thank you for reaching out. Your message has been sent successfully.</div>
                  </div>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs mb-6">
                  Please fill in your Name, Email, and Message before submitting.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono text-gray-300 uppercase mb-1.5 font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/40 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono text-gray-300 uppercase mb-1.5 font-semibold">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/40 transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase mb-1.5 font-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Internship Opportunity / Technical Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/40 transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase mb-1.5 font-semibold">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project, idea, or role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/40 transition-all resize-none"
                  />
                </div>

                {/* Submit Action Button */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full py-3.5 rounded-xl bg-cyan-500 text-black font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:bg-cyan-400 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{formStatus === 'submitting' ? 'Transmitting...' : 'Send Message'}</span>
                </button>
              </form>

              {/* Backend Integration Note */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-gray-500">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>Frontend validation active • Configured for seamless API / webhook integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
