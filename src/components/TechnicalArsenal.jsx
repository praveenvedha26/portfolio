import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Cpu, Sparkles, Check, Database, Terminal, Shield } from 'lucide-react';
import { skillsPillars } from '../data/skillsData';

export default function TechnicalArsenal() {
  const [activePillar, setActivePillar] = useState('all');

  const getPillarIcon = (iconName) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#FF4522]" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#38BDF8]" />;
      case 'Server':
        return <Server className="w-5 h-5 text-[#10B981]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#F59E0B]" />;
      default:
        return <Terminal className="w-5 h-5 text-[#FF4522]" />;
    }
  };

  const filteredPillars = activePillar === 'all'
    ? skillsPillars
    : skillsPillars.filter((p) => p.id === activePillar);

  return (
    <section id="stack" className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#FF4522]/5 blur-[150px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono-code text-xs text-[#FF4522] tracking-widest uppercase font-semibold">
                // 02. TECHNICAL ARSENAL
              </span>
              <div className="h-[1px] w-12 bg-[#FF4522]/40" />
            </div>

            <h2 className="font-anton uppercase tracking-tight text-4xl sm:text-6xl md:text-7xl text-[#F5F5F5] leading-none">
              ENGINEERING <span className="text-gradient-fiery">STACK</span>
            </h2>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Pillars' },
              { id: 'languages', label: 'Languages' },
              { id: 'frontend', label: 'Frontend' },
              { id: 'backend', label: 'Backend & DB' },
              { id: 'tools', label: 'Tools & DevOps' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActivePillar(tab.id)}
                className={`font-mono-code text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider transition-all duration-200 ${
                  activePillar === tab.id
                    ? 'bg-[#FF4522] text-[#050505] font-bold shadow-[0_0_15px_rgba(255,69,34,0.4)]'
                    : 'bg-[#111115] text-[#A1A1AA] hover:text-white hover:bg-white/5 border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-12 sm:pt-16">
          {filteredPillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative p-6 sm:p-8 rounded-2xl bg-[#0A0A0D] border border-white/8 hover:border-[#FF4522]/40 shadow-[0_12px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between transition-all duration-300 group"
            >
              {/* Pillar Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-200">
                      {getPillarIcon(pillar.icon)}
                    </div>
                    <div>
                      <h3 className="font-anton text-2xl sm:text-3xl text-[#F5F5F5] tracking-tight group-hover:text-white transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="font-mono-code text-xs text-[#A1A1AA] tracking-wide">
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills List in Pillar */}
                <div className="space-y-2.5 mt-6">
                  {pillar.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-3 rounded-xl bg-[#121217] hover:bg-[#16161D] border border-white/5 hover:border-white/10 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF4522]" />
                        <span className="font-mono-code text-xs sm:text-sm font-semibold text-[#F5F5F5]">
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 pl-3.5 sm:pl-0">
                        <span className="text-[11px] text-[#71717A] italic">
                          {skill.note}
                        </span>
                        <span className="font-mono-code text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-[#A1A1AA] border border-white/5 shrink-0">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Pillar Highlight */}
              <div className="mt-6 pt-5 border-t border-white/5 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-[#FF4522] shrink-0 mt-0.5" />
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  {pillar.highlight}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Engineering Philosophy Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#111116] via-[#141212] to-[#0A0A0D] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono-code text-xs text-[#FF4522] uppercase font-bold tracking-widest">
              SYSTEM DESIGN & ARCHITECTURE PHILOSOPHY
            </span>
            <p className="text-sm sm:text-base text-[#F5F5F5] font-medium max-w-2xl">
              "Prefer clean abstractions, deterministic concurrency controls, and optimal asymptotic complexity over over-engineered microservices."
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="text-right font-mono-code">
              <div className="text-xs font-bold text-[#F5F5F5]">100% COMMITTED</div>
              <div className="text-[10px] text-[#A1A1AA]">TO PRODUCTION QUALITY</div>
            </div>
            <div className="w-3 h-3 rounded-full bg-[#FF4522] animate-pulse shadow-[0_0_10px_#FF4522]" />
          </div>
        </div>
      </div>
    </section>
  );
}
