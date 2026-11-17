import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, ChevronLeft, ChevronRight, Layers, CheckCircle2, Cpu, ShieldCheck } from 'lucide-react';

export default function ProjectModal({ project, onClose, onNext, onPrev }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNext, onPrev]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-5 md:p-8 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="fixed inset-0 bg-[#050505]/90 backdrop-blur-2xl cursor-pointer"
        aria-hidden="true"
      />

      {/* Morphing Case Study Card Container */}
      <motion.div
        layoutId={`project-card-${project.id}`}
        transition={{ type: 'spring', stiffness: 260, damping: 28 }}
        className="relative z-10 w-full max-w-4xl max-h-[95vh] sm:max-h-[92vh] overflow-y-auto bg-[#0C0C0E] border border-white/15 rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.95)] p-4 sm:p-8 md:p-10 my-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Ambient Red Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF4522]/10 blur-3xl rounded-full pointer-events-none" />

        {/* Top Action Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-anton text-xl sm:text-2xl text-gradient-fiery tracking-wider">
              {project.number}
            </span>
            <span className="font-mono-code text-[11px] sm:text-xs px-2.5 py-0.5 sm:py-1 rounded-full bg-white/5 border border-white/10 text-[#A1A1AA] uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Prev / Next controls */}
            <div className="flex items-center gap-1 bg-[#141418] p-1 rounded-lg border border-white/10">
              <button
                type="button"
                onClick={onPrev}
                className="min-h-[36px] min-w-[36px] flex items-center justify-center p-1.5 rounded text-[#A1A1AA] hover:text-white hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
                title="Previous Project (←)"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-[10px] font-mono-code text-[#71717A] px-1 select-none">
                {project.number}/06
              </span>
              <button
                type="button"
                onClick={onNext}
                className="min-h-[36px] min-w-[36px] flex items-center justify-center p-1.5 rounded text-[#A1A1AA] hover:text-white hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
                title="Next Project (→)"
                aria-label="Next project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Easy-to-tap ✕ Close Button (Min 44x44px touch target) */}
            <button
              type="button"
              onClick={onClose}
              className="group min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-xl bg-white/10 hover:bg-[#FF4522]/20 border border-white/15 hover:border-[#FF4522]/50 text-white hover:text-[#FF4522] transition-all duration-200 active:scale-90 cursor-pointer"
              aria-label="Close project modal (ESC)"
            >
              <X className="w-5 h-5 transition-transform group-hover:rotate-90" />
            </button>
          </div>
        </div>

        {/* Project Header */}
        <div className="space-y-2 sm:space-y-3">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <h2 className="font-anton text-2xl sm:text-4xl md:text-5xl text-[#F5F5F5] tracking-tight">
              {project.title}
            </h2>
            <span className="px-2.5 sm:px-3 py-0.5 rounded-full text-[10px] sm:text-xs font-mono-code font-bold uppercase tracking-wider bg-[#FF4522]/20 text-[#FF4522] border border-[#FF4522]/40">
              {project.featuredBadge}
            </span>
          </div>

          <p className="font-medium text-sm sm:text-lg text-gradient-fiery leading-snug">
            {project.tagline}
          </p>

          <p className="text-[#A1A1AA] text-xs sm:text-base leading-relaxed pt-1 sm:pt-2">
            {project.summary}
          </p>
        </div>

        {/* Quick Metrics Cards */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 my-5 sm:my-6">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-[#121216] border border-white/8 rounded-xl p-2.5 sm:p-4 text-center"
            >
              <div className="font-anton text-lg sm:text-2xl text-gradient-fiery leading-tight truncate">
                {metric.value}
              </div>
              <div className="font-mono-code text-[9px] sm:text-xs text-[#A1A1AA] uppercase tracking-wider mt-1 truncate">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Breakdown Section */}
        <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#FF4522]" />
            <h4 className="font-anton text-base sm:text-lg tracking-wider text-[#F5F5F5] uppercase">
              Architecture Breakdown
            </h4>
            <span className="text-[11px] sm:text-xs font-mono-code text-[#71717A] ml-2">
              ({project.architecture.type})
            </span>
          </div>

          <div className="space-y-2 sm:space-y-2.5">
            {project.architecture.diagram.map((tier) => (
              <div
                key={tier.layer}
                className="bg-[#141418] hover:bg-[#18181E] border border-white/8 hover:border-[#FF4522]/30 rounded-xl p-3 sm:p-3.5 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <span className="font-mono-code text-xs font-bold text-[#F5F5F5] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4522]" />
                    {tier.layer}
                  </span>
                  <span className="font-mono-code text-[10px] sm:text-[11px] text-[#FF4522] uppercase tracking-wider bg-[#FF4522]/10 px-2 py-0.5 rounded w-fit">
                    {tier.tech}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#A1A1AA] pl-3.5 leading-relaxed">
                  {tier.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Highlights Callout */}
          <div className="bg-[#161212] border-l-2 border-[#FF4522] p-3.5 sm:p-4 rounded-r-xl space-y-1.5 mt-3 sm:mt-4">
            <span className="font-mono-code text-[11px] sm:text-xs font-bold text-[#FF4522] uppercase tracking-wider block">
              Core Engineering Highlights
            </span>
            <ul className="space-y-1">
              {project.architecture.highlights.map((item, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-[#A1A1AA] flex items-start gap-2">
                  <span className="text-[#FF4522] mt-0.5">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Features List */}
        <div className="mt-6 sm:mt-8 space-y-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#FF4522]" />
            <h4 className="font-anton text-base sm:text-lg tracking-wider text-[#F5F5F5] uppercase">
              Key Features & Capabilities
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
            {project.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-lg bg-[#111114] border border-white/5"
              >
                <CheckCircle2 className="w-4 h-4 text-[#FF4522] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#A1A1AA] leading-snug">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10 space-y-3">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#FF4522]" />
            <h4 className="font-anton text-xs sm:text-sm tracking-wider text-[#A1A1AA] uppercase">
              Technology Stack
            </h4>
          </div>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="font-mono-code text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full bg-[#16161B] text-[#F5F5F5] border border-white/10 hover:border-[#FF4522]/50 hover:text-[#FF4522] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <span className="font-mono-code text-[11px] sm:text-xs text-[#71717A] text-center sm:text-left">
            Use <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white text-[10px]">ESC</kbd> or tap ✕ to close
          </span>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 min-h-[46px] px-6 py-3 bg-gradient-to-r from-[#FF4522] to-[#D92B04] text-[#050505] font-anton text-sm sm:text-base tracking-wider uppercase rounded-xl hover:brightness-110 shadow-[0_0_20px_rgba(255,69,34,0.4)] transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <span>View Source on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
