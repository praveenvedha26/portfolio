import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'work', 'education', 'stack', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#work' },
    { name: 'Education', href: '#education' },
    { name: 'Stack', href: '#stack' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center px-4 pt-4 md:pt-6 pointer-events-none">
      {/* Floating Glassmorphic Pill */}
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto flex items-center justify-between gap-4 md:gap-8 px-4 md:px-6 py-2.5 rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0A0A]/85 backdrop-blur-xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.8)] shadow-[#FF4522]/5 py-2'
            : 'bg-[#0D0D0E]/60 backdrop-blur-md border border-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
        }`}
      >
        {/* Monogram Icon */}
        <a
          href="#home"
          onClick={(e) => scrollTo(e, '#home')}
          className="flex items-center gap-2.5 group"
          aria-label="Praveen Vedanayagam Home"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#FF4522] to-[#D92B04] p-[1.5px] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(255,69,34,0.5)]">
            <div className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center">
              <span className="font-display font-bold text-xs tracking-wider text-[#F5F5F5] group-hover:text-[#FF4522] transition-colors">
                PV
              </span>
            </div>
          </div>
          <span className="hidden sm:inline font-mono-code text-[11px] font-medium tracking-widest text-[#A1A1AA] uppercase group-hover:text-[#F5F5F5] transition-colors">
            Praveen MV
          </span>
        </a>

        {/* Center Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-[#141416]/50 p-1 rounded-full border border-white/5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className={`relative px-4 py-1 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-[#FF4522] shadow-[0_0_15px_rgba(255,69,34,0.4)]'
                    : 'text-[#A1A1AA] hover:text-[#F5F5F5] hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Right CTA & Status */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 pl-2 border-l border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4522] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4522]"></span>
            </span>
            <span className="font-mono-code text-[10px] tracking-wider text-[#A1A1AA] uppercase">
              Available 2026
            </span>
          </div>

          <a
            href="#contact"
            onClick={(e) => scrollTo(e, '#contact')}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-white/5 hover:bg-[#FF4522]/15 text-[#F5F5F5] hover:text-[#FF4522] border border-white/10 hover:border-[#FF4522]/40 transition-all duration-200"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-[#A1A1AA] hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF4522]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-20 inset-x-4 max-w-sm mx-auto p-4 rounded-2xl bg-[#0A0A0C]/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-2 md:hidden animate-in fade-in slide-in-from-top-3 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="px-4 py-2.5 rounded-xl text-sm font-medium tracking-wider uppercase text-[#F5F5F5] hover:bg-[#FF4522]/15 hover:text-[#FF4522] transition-colors flex items-center justify-between"
            >
              <span>{link.name}</span>
              <ArrowUpRight className="w-4 h-4 opacity-40" />
            </a>
          ))}
          <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between text-xs text-[#A1A1AA] px-2 font-mono-code">
            <span>BASED IN CHENNAI</span>
            <span className="text-[#FF4522]">OPEN TO FULL-TIME</span>
          </div>
        </div>
      )}
    </header>
  );
}
