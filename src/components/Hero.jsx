import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, MousePointer2, MessageSquare, Menu, Sliders } from 'lucide-react';
import FloatingCursorBadge from './FloatingCursorBadge';
import { floatingBadges } from '../data/skillsData';

export default function Hero({ onOpenContact }) {
  const [showCursors, setShowCursors] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize to range [-1, 1]
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToWork = (e) => {
    e.preventDefault();
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#050505]"
    >
      {/* Ambient Crimson-Orange Radial Glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0 ambient-crimson-glow opacity-95"
        aria-hidden="true"
      />

      {/* Subtle Grid Backdrop Lines */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-15"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 69, 34, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 69, 34, 0.08) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
        aria-hidden="true"
      />

      {/* ========================================================================= */}
      {/* DESKTOP HERO VIEW (lg: and above) — 100% PRESERVED EXACT ORIGINAL LAYOUT  */}
      {/* ========================================================================= */}
      <div className="hidden lg:flex relative min-h-screen w-full flex-col justify-between overflow-hidden">
        {/* DESKTOP LAYER 1 (Background): Massive Condensed "PORTFOLIO" Text */}
        <div
          className="pointer-events-none absolute top-[7%] md:top-[11%] left-0 right-0 z-[1] select-none flex justify-center items-center overflow-hidden w-full px-2"
          aria-hidden="true"
        >
          <h1
            className="font-anton uppercase tracking-tighter text-center leading-[0.82] text-gradient-portfolio opacity-95 transition-transform duration-700"
            style={{
              fontSize: 'clamp(5.5rem, 19.5vw, 25rem)',
              letterSpacing: '-0.035em',
              filter: 'drop-shadow(0 20px 40px rgba(217, 43, 4, 0.3))'
            }}
          >
            PORTFOLIO
          </h1>
        </div>

        {/* DESKTOP LAYER 2 (Center Foreground): Cutout Portrait with Suit */}
        <div className="absolute inset-0 z-[10] pointer-events-none flex items-end justify-center">
          <div className="relative w-full max-w-[620px] lg:max-w-[740px] xl:max-w-[780px] h-[86vh] lg:h-[91vh] flex items-end justify-center">
            {/* Subtle back illumination glow ring */}
            <div className="absolute bottom-[25%] w-[380px] h-[380px] rounded-full bg-gradient-to-t from-[#FF4522]/25 via-[#D92B04]/12 to-transparent blur-3xl pointer-events-none" />

            {/* High-Contrast Editorial Cutout Portrait */}
            <motion.img
              src="/portrait.png"
              alt="Praveen Vedanayagam"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="w-full h-full object-contain object-bottom portrait-mask select-none filter contrast-[1.08] brightness-[1.02] drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
            />
          </div>
        </div>

        {/* DESKTOP LAYER 3: Interactive Floating Figma-Style Cursor Tags (hidden < md) */}
        <AnimatePresence>
          {showCursors && (
            <div className="hidden md:block absolute inset-0 z-[25] pointer-events-none max-w-7xl mx-auto">
              {floatingBadges.map((badge) => (
                <FloatingCursorBadge
                  key={`${badge.name}-${badge.top}-${badge.left || badge.right}`}
                  name={badge.name}
                  color={badge.color}
                  top={badge.top}
                  left={badge.left}
                  right={badge.right}
                  bottom={badge.bottom}
                  delay={badge.delay}
                  dx={badge.dx}
                  dy={badge.dy}
                  icon={badge.icon}
                  mousePosition={mousePos}
                />
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* DESKTOP FOREGROUND CONTENT: Left Column & Right Column Overlays */}
        <div className="relative z-[30] w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-12 gap-8 items-center">

            {/* LEFT COLUMN OVERLAY */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-7 xl:col-span-6 flex flex-col items-start text-left pointer-events-auto"
            >
              {/* Greeting */}
              <div className="mb-2">
                <span className="font-serif-italic text-2xl text-[#E5E5E5] font-light">
                  Hello, I'm
                </span>
              </div>

              {/* Massive condensed white display name */}
              <h2 className="font-anton uppercase tracking-tight text-[#F5F5F5] leading-[0.88] text-[5.4rem] xl:text-[6.2rem] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
                PRAVEEN<br />
                VEDANAYAGAM
              </h2>

              {/* Bold uppercase condensed red-orange subtitle */}
              <div className="mt-4">
                <h3 className="font-anton uppercase tracking-wider text-2xl md:text-3xl text-gradient-fiery drop-shadow-sm">
                  FULL-STACK SOFTWARE ENGINEER
                </h3>
              </div>

              {/* Bio: Exact content from user specification */}
              <p className="mt-5 max-w-xl text-[#A1A1AA] text-base leading-relaxed font-normal">
                I build scalable full-stack web applications, containerized backends, and AI-powered workflows using Java, Spring Boot, and modern web tech. Focused on clean enterprise architecture, robust backend systems, and high-performance engineering.
              </p>

              {/* Dual Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {/* Primary solid fiery red-orange button */}
                <a
                  href="#work"
                  onClick={scrollToWork}
                  className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-gradient-to-r from-[#FF4522] to-[#D92B04] text-[#050505] font-anton tracking-wider text-base uppercase rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_30px_rgba(255,69,34,0.6)] active:scale-[0.98]"
                >
                  <span>VIEW WORK</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>

                {/* Secondary sleek dark glass button */}
                <a
                  href="/resume.pdf"
                  download="Praveen_MV_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#0D0D10]/80 backdrop-blur-md text-[#F5F5F5] font-anton tracking-wider text-base uppercase rounded-lg border border-white/15 hover:border-[#FF4522]/70 hover:bg-[#FF4522]/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,69,34,0.2)] active:scale-[0.98]"
                >
                  <span>DOWNLOAD RESUME</span>
                  <Download className="w-4 h-4 text-[#FF4522] transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
              </div>

              {/* Status line underneath in uppercase monospace */}
              <div className="mt-7 flex items-center gap-2 font-mono-code text-xs tracking-widest text-[#A1A1AA]/80 uppercase">
                <span className="text-[#F5F5F5] font-semibold">BASED IN CHENNAI</span>
                <span className="text-[#FF4522] font-bold">•</span>
                <span className="text-[#FF4522] font-medium">OPEN TO FULL-TIME ROLES</span>
              </div>
            </motion.div>

            {/* RIGHT COLUMN OVERLAY (Vertical Stats Stack) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="col-span-5 xl:col-span-6 flex flex-col justify-center items-end gap-10 pointer-events-auto"
            >
              {/* Stat 1: 06 / FEATURED BUILDS */}
              <div className="flex flex-col items-end group">
                <span className="font-anton text-7xl xl:text-8xl text-gradient-fiery leading-none tracking-tight transition-transform duration-300 group-hover:scale-105">
                  06
                </span>
                <span className="font-mono-code text-xs tracking-widest text-[#A1A1AA] uppercase mt-1">
                  / FEATURED BUILDS
                </span>
              </div>

              {/* Stat 2: 100 DAYS OF DSA */}
              <div className="flex flex-col items-end group">
                <span className="font-anton text-7xl xl:text-8xl text-gradient-fiery leading-none tracking-tight transition-transform duration-300 group-hover:scale-105">
                  100
                </span>
                <span className="font-mono-code text-xs tracking-widest text-[#A1A1AA] uppercase mt-1">
                  DAYS OF DSA
                </span>
              </div>

              {/* Stat 3: 2026 B.E. ECE GRAD */}
              <div className="flex flex-col items-end group">
                <span className="font-anton text-7xl xl:text-8xl text-gradient-fiery leading-none tracking-tight transition-transform duration-300 group-hover:scale-105">
                  2026
                </span>
                <span className="font-mono-code text-xs tracking-widest text-[#A1A1AA] uppercase mt-1">
                  B.E. ECE GRAD
                </span>
              </div>
            </motion.div>

          </div>
        </div>

        {/* BOTTOM FLOATING CONTROL DOCK (Desktop) */}
        <div className="relative z-[40] w-full flex justify-center items-center pb-8 px-4 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pointer-events-auto flex items-center gap-3 px-4 py-2 rounded-2xl bg-[#0D0D11]/90 backdrop-blur-xl border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.85)]"
          >
            <button
              type="button"
              onClick={() => setShowCursors(!showCursors)}
              className={`p-2 rounded-xl transition-all duration-200 cursor-pointer ${showCursors
                ? 'bg-[#FF4522]/20 text-[#FF4522] border border-[#FF4522]/40'
                : 'text-[#71717A] hover:text-white hover:bg-white/5'
                }`}
              title="Toggle Cursors"
              aria-label="Toggle floating skill cursors"
            >
              <MousePointer2 className="w-4 h-4" />
            </button>

            <a
              href="#work"
              onClick={scrollToWork}
              className="p-2 rounded-xl text-[#71717A] hover:text-white hover:bg-white/5 transition-colors"
              title="View Works Grid"
              aria-label="Scroll to projects"
            >
              <Menu className="w-4 h-4" />
            </a>

            <a
              href="#stack"
              className="p-2 rounded-xl text-[#71717A] hover:text-white hover:bg-white/5 transition-colors"
              title="Technical Arsenal"
              aria-label="Scroll to stack"
            >
              <Sliders className="w-4 h-4" />
            </a>

            <div className="w-[1px] h-4 bg-white/10 mx-1" />

            <a
              href="#contact"
              onClick={scrollToContact}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#FF4522] to-[#D92B04] text-[#050505] font-anton text-xs tracking-wider uppercase hover:brightness-110 transition-all duration-200 hover:shadow-[0_0_15px_rgba(255,69,34,0.5)] active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>LET'S TALK</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE & TABLET HERO VIEW (< lg) — CLEAN NATURAL VERTICAL STACKING ORDER  */}
      {/* ========================================================================= */}
      <div className="flex flex-col lg:hidden w-full px-4 sm:px-6 pt-20 pb-12 relative z-20">

        {/* Subtle Watermark in Background */}
        <div
          className="pointer-events-none absolute top-12 left-0 right-0 z-0 flex justify-center items-center overflow-hidden opacity-20 select-none"
          aria-hidden="true"
        >
          <span
            className="font-anton uppercase text-gradient-portfolio text-7xl sm:text-9xl leading-none"
            style={{ filter: 'blur(2px)' }}
          >
            PORTFOLIO
          </span>
        </div>

        {/* 1. Centered Black-and-White Portrait */}
        <div className="relative z-10 w-full flex items-center justify-center pt-2 pb-4">
          {/* Back Glow */}
          <div className="absolute w-[220px] sm:w-[280px] h-[220px] sm:h-[280px] rounded-full bg-gradient-to-t from-[#FF4522]/25 via-[#D92B04]/10 to-transparent blur-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-[270px] sm:max-w-[340px] h-[340px] sm:h-[400px] flex items-end justify-center"
          >
            <img
              src="/portrait.png"
              alt="Praveen Vedanayagam"
              className="w-full h-full object-contain object-bottom portrait-mask select-none filter contrast-[1.08] brightness-[1.02] drop-shadow-[0_16px_36px_rgba(0,0,0,0.95)]"
            />
          </motion.div>
        </div>

        {/* 2. Name & Title (Fluid Responsive Sizing) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative z-10 mt-2 text-center sm:text-left space-y-1"
        >
          <span className="font-serif-italic text-lg sm:text-xl text-[#E5E5E5] font-light">
            Hello, I'm
          </span>
          <h1 className="font-anton uppercase tracking-tight text-[#F5F5F5] text-4xl sm:text-6xl leading-[0.9] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
            PRAVEEN<br />
            VEDANAYAGAM
          </h1>
          <h2 className="font-anton uppercase tracking-wider text-lg sm:text-2xl text-gradient-fiery pt-1">
            FULL-STACK SOFTWARE ENGINEER
          </h2>
        </motion.div>

        {/* 3. Bio Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative z-10 mt-4 text-[#A1A1AA] text-xs sm:text-sm leading-relaxed text-center sm:text-left"
        >
          I build scalable full-stack web applications, containerized backends, and AI-powered workflows using Java, Spring Boot, and modern web tech. Focused on clean enterprise architecture, robust backend systems, and high-performance engineering.
        </motion.p>

        {/* 4. Action Buttons (Comfortable Touch Targets, Min-Height 44px) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="relative z-10 mt-6 flex flex-col sm:flex-row gap-3 w-full"
        >
          <a
            href="#work"
            onClick={scrollToWork}
            className="w-full inline-flex items-center justify-center gap-2.5 min-h-[46px] px-6 py-3.5 bg-gradient-to-r from-[#FF4522] to-[#D92B04] text-[#050505] font-anton tracking-wider text-sm sm:text-base uppercase rounded-xl transition-all duration-200 active:scale-95 shadow-[0_0_20px_rgba(255,69,34,0.4)] cursor-pointer"
          >
            <span>VIEW WORK</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="/resume.pdf"
            download="Praveen_MV_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 min-h-[46px] px-5 py-3.5 bg-[#0D0D10] text-[#F5F5F5] font-anton tracking-wider text-sm sm:text-base uppercase rounded-xl border border-white/15 hover:border-[#FF4522]/50 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span>DOWNLOAD RESUME</span>
            <Download className="w-4 h-4 text-[#FF4522]" />
          </a>
        </motion.div>

        {/* Status Line */}
        <div className="relative z-10 mt-4 flex items-center justify-center sm:justify-start gap-2 font-mono-code text-[10px] sm:text-xs tracking-wider text-[#A1A1AA] uppercase">
          <span className="text-[#F5F5F5] font-semibold">BASED IN CHENNAI</span>
          <span className="text-[#FF4522]">•</span>
          <span className="text-[#FF4522] font-semibold">OPEN TO FULL-TIME ROLES</span>
        </div>

        {/* 5. Mobile Horizontal Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="relative z-10 mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-3 w-full"
        >
          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#0D0D11] border border-white/8 text-center shadow-lg">
            <span className="font-anton text-3xl sm:text-4xl text-gradient-fiery leading-none">
              06
            </span>
            <span className="font-mono-code text-[9px] sm:text-[10px] tracking-wider text-[#A1A1AA] uppercase mt-1">
              / BUILDS
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#0D0D11] border border-white/8 text-center shadow-lg">
            <span className="font-anton text-3xl sm:text-4xl text-gradient-fiery leading-none">
              100
            </span>
            <span className="font-mono-code text-[9px] sm:text-[10px] tracking-wider text-[#A1A1AA] uppercase mt-1">
              DAYS DSA
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#0D0D11] border border-white/8 text-center shadow-lg">
            <span className="font-anton text-3xl sm:text-4xl text-gradient-fiery leading-none">
              2026
            </span>
            <span className="font-mono-code text-[9px] sm:text-[10px] tracking-wider text-[#A1A1AA] uppercase mt-1">
              B.E. ECE
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
