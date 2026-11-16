import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, ExternalLink, Code, Send, Loader2, ArrowUpRight } from 'lucide-react';

function GithubIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.4 9.74v-8.37H5.06v8.37h2.8z" />
    </svg>
  );
}

function LeetCodeIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.212 5.212 0 0 0-3.85-1.547 5.212 5.212 0 0 0-3.85 1.547l-4.321 4.38c-1.026 1.026-1.547 2.378-1.547 3.82 0 1.442.521 2.794 1.547 3.82l4.334 4.363c1.026 1.026 2.408 1.547 3.85 1.547 1.442 0 2.824-.521 3.85-1.547l2.609-2.636c.514-.514.496-1.365-.039-1.901-.535-.535-1.386-.553-1.9-.038zM10.811 13.086h7.904c.732 0 1.325-.593 1.325-1.325 0-.731-.593-1.325-1.325-1.325h-7.904c-.732 0-1.325.594-1.325 1.325 0 .732.593 1.325 1.325 1.325z" />
    </svg>
  );
}

export default function ContactSection({ onShowToast }) {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const email = 'mvpraveenmng@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (onShowToast) {
        onShowToast(`Copied ${email} to clipboard!`);
      }
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      setCopied(true);
      if (onShowToast) onShowToast(`Email: ${email}`);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSending(true);

    // Simulate sending dispatch
    setTimeout(() => {
      setIsSending(false);
      setSentSuccess(true);
      if (onShowToast) {
        onShowToast('Message dispatched! Praveen will reply soon.');
      }
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSentSuccess(false), 5000);
    }, 900);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      handle: 'praveenvedha26',
      url: 'https://github.com/praveenvedha26',
      icon: <GithubIcon className="w-5 h-5 text-white" />,
      desc: '6 Repositories, Daily DSA streak'
    },
    {
      name: 'LinkedIn',
      handle: 'in/praveenvedanayagam',
      url: 'https://www.linkedin.com/in/praveenvedanayagam',
      icon: <LinkedinIcon className="w-5 h-5 text-[#38BDF8]" />,
      desc: 'Professional network & experience'
    },
    {
      name: 'LeetCode',
      handle: 'u/S6sDRAvcKS',
      url: 'https://leetcode.com/u/S6sDRAvcKS',
      icon: <LeetCodeIcon className="w-5 h-5 text-[#F59E0B]" />,
      desc: 'Optimal algorithmic problem solver'
    }
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#FF4522]/8 blur-[180px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="pb-12 sm:pb-16 border-b border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono-code text-xs text-[#FF4522] tracking-widest uppercase font-semibold">
              // 03. INITIATE CONTACT
            </span>
            <div className="h-[1px] w-12 bg-[#FF4522]/40" />
          </div>

          <h2 className="font-anton uppercase tracking-tight text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-gradient-fiery leading-none">
            LET'S BUILD TOGETHER
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#A1A1AA] max-w-xl font-normal">
            Whether you have an open software engineering role, a high-concurrency systems challenge, or want to discuss full-stack architecture, my inbox is open.
          </p>
        </div>

        {/* Content Grid: Social Cards on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-12 sm:pt-16">
          
          {/* LEFT: Direct Contact & Social Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Email Card with One-Click Copy */}
            <div className="p-6 rounded-2xl bg-[#0D0D11] border border-white/10 hover:border-[#FF4522]/40 shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#FF4522]/10 text-[#FF4522]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-mono-code text-xs text-[#A1A1AA] uppercase tracking-wider">
                    Direct Email
                  </span>
                </div>
                <span className="font-mono-code text-[11px] text-[#22C55E] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                  Fast Response
                </span>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#131318] p-3 rounded-xl border border-white/5">
                <span className="font-mono-code text-xs sm:text-sm text-[#F5F5F5] font-semibold truncate select-all">
                  {email}
                </span>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FF4522]/15 hover:bg-[#FF4522] text-[#FF4522] hover:text-[#050505] font-mono-code text-xs font-bold transition-all duration-200 active:scale-95 shrink-0"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Profile Cards */}
            <div className="space-y-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl bg-[#0B0B0E] hover:bg-[#121218] border border-white/8 hover:border-[#FF4522]/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 text-white group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-anton text-lg text-[#F5F5F5] group-hover:text-[#FF4522] transition-colors">
                        {item.name}
                      </div>
                      <div className="font-mono-code text-xs text-[#A1A1AA]">
                        {item.desc}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 font-mono-code text-xs text-[#71717A] group-hover:text-white transition-colors">
                    <span className="hidden sm:inline">{item.handle}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#FF4522] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: Clean Minimal Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0A0A0D] border border-white/10 shadow-2xl relative">
              <h3 className="font-anton text-2xl sm:text-3xl text-[#F5F5F5] tracking-tight mb-2">
                SEND A DIRECT MESSAGE
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1AA] mb-6 font-normal">
                Fill in your details below and I'll receive your inquiry right away.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-mono-code text-xs uppercase tracking-wider text-[#A1A1AA] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alex Henderson"
                    className="w-full px-4 py-3 rounded-xl bg-[#121217] border border-white/10 focus:border-[#FF4522] focus:ring-1 focus:ring-[#FF4522] text-[#F5F5F5] text-sm placeholder:text-[#52525B] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-mono-code text-xs uppercase tracking-wider text-[#A1A1AA] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#121217] border border-white/10 focus:border-[#FF4522] focus:ring-1 focus:ring-[#FF4522] text-[#F5F5F5] text-sm placeholder:text-[#52525B] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono-code text-xs uppercase tracking-wider text-[#A1A1AA] mb-1.5">
                    Message / Project Details *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your team, role opportunities, or engineering requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-[#121217] border border-white/10 focus:border-[#FF4522] focus:ring-1 focus:ring-[#FF4522] text-[#F5F5F5] text-sm placeholder:text-[#52525B] outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#FF4522] to-[#D92B04] text-[#050505] font-anton text-base tracking-wider uppercase rounded hover:brightness-110 shadow-[0_0_25px_rgba(255,69,34,0.4)] transition-all duration-200 active:scale-95 disabled:opacity-60"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>DISPATCHING...</span>
                    </>
                  ) : sentSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>MESSAGE SENT!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>SEND MESSAGE</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
