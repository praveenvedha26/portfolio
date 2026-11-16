import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#030304] border-t border-white/8 py-8 sm:py-10 px-5 sm:px-8 lg:px-12 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Monogram and Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-gradient-to-b from-[#FF4522] to-[#D92B04] p-[1px]">
            <div className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center">
              <span className="font-display font-bold text-[9px] text-[#FF4522]">
                PV
              </span>
            </div>
          </div>
          <p className="font-mono-code text-[11px] sm:text-xs text-[#A1A1AA] tracking-wider uppercase text-center sm:text-left">
            © 2026 PRAVEEN VEDANAYAGAM • BUILT WITH REACT & TAILWIND
          </p>
        </div>

        {/* Back to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#FF4522]/15 border border-white/5 hover:border-[#FF4522]/40 text-xs font-mono-code text-[#A1A1AA] hover:text-[#FF4522] transition-all duration-200 active:scale-95"
          aria-label="Scroll back to top"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
