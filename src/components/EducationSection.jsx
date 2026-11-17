import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Compass, Code, Terminal, CheckCircle2 } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="relative py-24 sm:py-28 bg-[#050505] overflow-hidden">
      {/* Background ambient crimson glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-[#FF4522]/5 blur-[160px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="pb-10 sm:pb-14 border-b border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono-code text-xs text-[#FF4522] tracking-widest uppercase font-semibold">
              // 02. ACADEMIC FOUNDATION
            </span>
            <div className="h-[1px] w-12 bg-[#FF4522]/40" />
          </div>

          <h2 className="font-anton uppercase tracking-tight text-4xl sm:text-6xl md:text-7xl text-[#F5F5F5] leading-none">
            EDUCATION & <span className="text-gradient-fiery">BACKGROUND</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#A1A1AA] max-w-xl font-normal">
            Rigorous engineering rigor coupled with deep dedication to scalable distributed backend systems.
          </p>
        </div>

        {/* Education Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 sm:mt-12 rounded-2xl bg-[#0A0A0E] border border-[#FF4522]/30 hover:border-[#FF4522]/60 p-6 sm:p-10 shadow-[0_16px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(255,69,34,0.06)] relative overflow-hidden transition-all duration-300"
        >
          {/* Decorative Corner Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#FF4522]/15 via-transparent to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left Column: Degree & Institution */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#FF4522]/10 border border-[#FF4522]/30 text-[#FF4522]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="font-mono-code text-xs px-3 py-1 rounded-full bg-[#14141A] border border-white/10 text-[#FF4522] uppercase tracking-wider font-semibold">
                  CLASS OF 2026
                </span>
                <span className="font-mono-code text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#A1A1AA] uppercase tracking-wider">
                  Full-Time Undergraduate
                </span>
              </div>

              <div>
                <h3 className="font-anton text-2xl sm:text-3xl md:text-4xl text-[#F5F5F5] tracking-tight leading-tight">
                  Bachelor of Engineering in Electronics and Communication Engineering (B.E. ECE)
                </h3>
                <p className="mt-2 text-base sm:text-lg font-medium text-gradient-fiery">
                  Thanthai Periyar Government Institute of Technology
                </p>
              </div>

              {/* Context Note */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#121217] border border-white/8 space-y-2 mt-4">
                <div className="flex items-center gap-2 text-xs font-mono-code uppercase font-bold text-[#FF4522] tracking-wider">
                  <Compass className="w-4 h-4" />
                  <span>Engineering Transition & Focus</span>
                </div>
                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                  Leveraging a strong foundation in core engineering, mathematics, and digital systems logic, transitioned into high-performance software engineering, enterprise backend development with <strong className="text-[#F5F5F5] font-semibold">Java and Spring Boot</strong>, and rigorous algorithmic problem-solving (<strong className="text-[#F5F5F5] font-semibold">DSA</strong>).
                </p>
              </div>
            </div>

            {/* Right Column: Key Pillars of Technical Discipline */}
            <div className="lg:col-span-5 space-y-3.5 pt-2 lg:pt-0">
              <div className="p-4 rounded-xl bg-[#121217] border border-white/5 hover:border-[#FF4522]/30 transition-colors">
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4522] shrink-0" />
                  <span className="font-mono-code text-xs font-bold text-[#F5F5F5] uppercase tracking-wider">
                    Enterprise Java & Spring Boot
                  </span>
                </div>
                <p className="text-xs text-[#A1A1AA] pl-6 leading-relaxed">
                  Architecting multi-tier REST APIs, role-based JWT security, and relational persistence using Spring Boot, Hibernate, and MySQL/PostgreSQL.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#121217] border border-white/5 hover:border-[#FF4522]/30 transition-colors">
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4522] shrink-0" />
                  <span className="font-mono-code text-xs font-bold text-[#F5F5F5] uppercase tracking-wider">
                    Algorithmic Mastery (DSA)
                  </span>
                </div>
                <p className="text-xs text-[#A1A1AA] pl-6 leading-relaxed">
                  100+ consecutive days solving complex algorithmic challenges in C++ and Python with strict asymptotic time and space bounds.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#121217] border border-white/5 hover:border-[#FF4522]/30 transition-colors">
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4522] shrink-0" />
                  <span className="font-mono-code text-xs font-bold text-[#F5F5F5] uppercase tracking-wider">
                    Containerized Systems
                  </span>
                </div>
                <p className="text-xs text-[#A1A1AA] pl-6 leading-relaxed">
                  Multi-container orchestration via Docker Compose, isolated network bridges, and distributed Redis temporary locking mechanisms.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
