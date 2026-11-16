import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, Terminal } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const selectedProject = projectsData.find((p) => p.id === selectedProjectId);

  const handleNext = () => {
    if (!selectedProjectId) return;
    const currentIndex = projectsData.findIndex((p) => p.id === selectedProjectId);
    const nextIndex = (currentIndex + 1) % projectsData.length;
    setSelectedProjectId(projectsData[nextIndex].id);
  };

  const handlePrev = () => {
    if (!selectedProjectId) return;
    const currentIndex = projectsData.findIndex((p) => p.id === selectedProjectId);
    const prevIndex = (currentIndex - 1 + projectsData.length) % projectsData.length;
    setSelectedProjectId(projectsData[prevIndex].id);
  };

  return (
    <section id="work" className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden">
      {/* Background radial accent glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#FF4522]/5 blur-[140px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono-code text-xs text-[#FF4522] tracking-widest uppercase font-semibold">
                // 01. SELECTED WORKS
              </span>
              <div className="h-[1px] w-12 bg-[#FF4522]/40" />
            </div>

            <h2 className="font-anton uppercase tracking-tight text-4xl sm:text-6xl md:text-7xl text-[#F5F5F5] leading-none">
              FEATURED <span className="text-gradient-fiery">PROJECTS</span>
            </h2>
          </div>

          <div className="flex flex-col md:items-end gap-2 text-left md:text-right">
            <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-sm font-normal">
              Click any project card to inspect the interactive case study, system architecture diagrams, and GitHub repository.
            </p>
            <a
              href="https://github.com/praveenvedha26"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono-code text-xs text-[#F5F5F5] hover:text-[#FF4522] transition-colors"
            >
              <span>EXPLORE ALL ON GITHUB</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FF4522]" />
            </a>
          </div>
        </div>

        {/* 2x3 Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-12 sm:pt-16">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              layoutId={`project-card-${project.id}`}
              onClick={() => setSelectedProjectId(project.id)}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group cursor-pointer relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#0B0B0E] hover:bg-[#0F0F14] border border-white/8 hover:border-[#FF4522]/50 shadow-[0_12px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_50px_rgba(255,69,34,0.12)] transition-all duration-300"
            >
              {/* Top Card Meta */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-anton text-2xl sm:text-3xl text-gradient-fiery tracking-wider">
                    {project.number}
                  </span>
                  <span className="font-mono-code text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#A1A1AA] uppercase tracking-wider group-hover:border-[#FF4522]/30 group-hover:text-white transition-colors">
                    {project.category}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-anton text-2xl sm:text-3xl text-[#F5F5F5] tracking-tight group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm font-medium text-[#FF4522] leading-snug line-clamp-2">
                  {project.tagline}
                </p>

                <p className="mt-3 text-xs sm:text-[13px] text-[#A1A1AA] leading-relaxed line-clamp-3">
                  {project.summary}
                </p>
              </div>

              {/* Bottom Card Stack & Action */}
              <div className="mt-6 pt-5 border-t border-white/5">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="font-mono-code text-[10px] px-2 py-0.5 rounded bg-[#16161C] text-[#A1A1AA] border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="font-mono-code text-[10px] px-2 py-0.5 rounded bg-[#16161C] text-[#71717A]">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Row */}
                <div className="flex items-center justify-between text-xs font-mono-code uppercase tracking-wider text-[#A1A1AA] group-hover:text-[#FF4522] transition-colors">
                  <span className="flex items-center gap-1 font-semibold">
                    <span>CASE STUDY</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  <span className="text-[10px] text-[#71717A] group-hover:text-[#A1A1AA]">
                    CLICK TO EXPAND
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cinematic Modal Transition via AnimatePresence & layoutId */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProjectId(null)}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
