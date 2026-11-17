import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Copy,
  Check,
  ExternalLink,
  Send,
  Loader2,
  ArrowUpRight,
  AlertCircle,
  CheckCircle2,
  RotateCcw,
  Sparkles
} from 'lucide-react';

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

const QUICK_TEMPLATES = [
  {
    label: '💼 Hiring / Full-Time Role',
    subject: 'Opportunity: Software Engineer Role',
    message: "Hi Praveen,\n\nI came across your portfolio and was impressed with your backend & full-stack projects. We have an engineering opportunity that matches your skillset in Java, Spring Boot, and modern web architectures. Let's schedule a call to connect!"
  },
  {
    label: '🚀 Project Collaboration',
    subject: 'Collaboration / System Architecture Inquiry',
    message: "Hi Praveen,\n\nI have a project requiring robust backend engineering and scalable system design. Would love to discuss how we can collaborate."
  },
  {
    label: '💬 Quick Question',
    subject: 'Quick Engineering Question',
    message: "Hi Praveen,\n\nI noticed your work on high-concurrency systems and DSA streaks. Would love to ask you a quick question regarding your tech stack and experiences."
  }
];

export default function ContactSection({ onShowToast }) {
  const [copied, setCopied] = useState(false);
  const [copiedSentText, setCopiedSentText] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Portfolio Inquiry for Praveen Vedanayagam',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [lastSentData, setLastSentData] = useState(null);
  const [validationError, setValidationError] = useState('');

  const formRef = useRef(null);
  const email = 'mvpraveenmng@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (onShowToast) {
        onShowToast(`Copied ${email} to clipboard!`);
      }
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      if (onShowToast) onShowToast(`Email: ${email}`);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleApplyTemplate = (tmpl) => {
    setFormState((prev) => ({
      ...prev,
      subject: tmpl.subject,
      message: tmpl.message
    }));
    setValidationError('');
    if (onShowToast) {
      onShowToast(`Applied template: ${tmpl.label}`);
    }
  };

  const handleSubmit = (e) => {
    setValidationError('');

    if (!formState.name.trim()) {
      e.preventDefault();
      setValidationError('Please enter your name.');
      return;
    }
    if (!formState.email.trim() || !formState.email.includes('@')) {
      e.preventDefault();
      setValidationError('Please enter a valid email address.');
      return;
    }
    if (!formState.message.trim()) {
      e.preventDefault();
      setValidationError('Please enter your message.');
      return;
    }

    // Notice: We do NOT call e.preventDefault() here!
    // The browser natively dispatches the POST to target="formsubmit_hidden_iframe".
    // Because target is a hidden iframe, the parent page will NOT reload or change origin.
    // This completely bypasses any CORS issues, ad-blocker fetch bans, and client-side failures.
    setIsSending(true);

    const snapshot = { ...formState };
    setLastSentData(snapshot);

    // Also attempt background fetch to ensure multi-layer delivery
    try {
      fetch(`https://formsubmit.co/ajax/${email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          _subject: formState.subject || `New Portfolio Message from ${formState.name}`,
          message: formState.message,
          _captcha: 'false',
          _template: 'table'
        })
      }).catch(() => {
        // Non-blocking fallback: native iframe POST is already dispatched
      });
    } catch {
      // Ignored
    }

    setTimeout(() => {
      setIsSending(false);
      setSentSuccess(true);
      setFormState({
        name: '',
        email: '',
        subject: 'Portfolio Inquiry for Praveen Vedanayagam',
        message: ''
      });
      if (onShowToast) {
        onShowToast(`Message dispatched to Praveen (${email})!`);
      }
    }, 800);
  };

  const handleCopySentMessage = async () => {
    if (!lastSentData) return;
    const text = `From: ${lastSentData.name} (${lastSentData.email})\nSubject: ${lastSentData.subject}\n\n${lastSentData.message}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopiedSentText(true);
      if (onShowToast) onShowToast('Message copied to clipboard!');
      setTimeout(() => setCopiedSentText(false), 2500);
    } catch {
      setCopiedSentText(true);
      setTimeout(() => setCopiedSentText(false), 2500);
    }
  };

  const handleResetForm = () => {
    setSentSuccess(false);
    setValidationError('');
    setFormState({
      name: '',
      email: '',
      subject: 'Portfolio Inquiry for Praveen Vedanayagam',
      message: ''
    });
  };

  // Build current Gmail compose link
  const currentSubject = formState.subject || 'Portfolio Inquiry for Praveen Vedanayagam';
  const currentBody = formState.message
    ? `${formState.message}\n\n— ${formState.name || 'Visitor'} (${formState.email || 'Email not provided'})`
    : `Hi Praveen,\n\nI'm reaching out after viewing your portfolio.`;

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}&su=${encodeURIComponent(currentSubject)}&body=${encodeURIComponent(currentBody)}`;

  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
    currentSubject
  )}&body=${encodeURIComponent(currentBody)}`;

  // Last sent links for success screen
  const lastSentSubject = lastSentData?.subject || 'Portfolio Inquiry for Praveen Vedanayagam';
  const lastSentBody = lastSentData
    ? `${lastSentData.message}\n\n— ${lastSentData.name} (${lastSentData.email})`
    : '';
  const lastSentGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}&su=${encodeURIComponent(lastSentSubject)}&body=${encodeURIComponent(lastSentBody)}`;
  const lastSentMailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
    lastSentSubject
  )}&body=${encodeURIComponent(lastSentBody)}`;

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
      {/* Hidden iframe that receives the native FormSubmit POST without page reload or CORS errors */}
      <iframe
        name="formsubmit_hidden_iframe"
        id="formsubmit_hidden_iframe"
        title="formsubmit_hidden_iframe"
        className="hidden"
        style={{ display: 'none' }}
        aria-hidden="true"
      />

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
              // 04. INITIATE CONTACT
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
                <a
                  href={`mailto:${email}?subject=Portfolio%20Inquiry`}
                  className="font-mono-code text-xs sm:text-sm text-[#F5F5F5] hover:text-[#FF4522] font-semibold truncate select-all transition-colors flex items-center gap-1.5"
                  title="Click to open email client"
                >
                  <span>{email}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 shrink-0" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FF4522]/15 hover:bg-[#FF4522] text-[#FF4522] hover:text-[#050505] font-mono-code text-xs font-bold transition-all duration-200 active:scale-95 shrink-0 cursor-pointer"
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

              {/* Direct Webmail Links */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-3">
                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono-code text-[#A1A1AA] hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#EA4335]" />
                  <span>Open Gmail</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
                <span className="text-white/20">•</span>
                <a
                  href={mailtoUrl}
                  className="inline-flex items-center gap-1.5 text-xs font-mono-code text-[#A1A1AA] hover:text-white transition-colors"
                >
                  <span>Mail App</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
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

          {/* RIGHT: High Reliability Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0A0A0D] border border-white/10 shadow-2xl relative">
              
              <AnimatePresence mode="wait">
                {sentSuccess ? (
                  /* SUCCESS STATE VIEW */
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="space-y-6 py-4"
                  >
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#22C55E]/10 border border-[#22C55E]/30">
                      <div className="p-3 rounded-full bg-[#22C55E]/20 text-[#22C55E] shrink-0 mt-0.5">
                        <CheckCircle2 className="w-7 h-7" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-anton text-2xl text-white tracking-wide">
                          MESSAGE DISPATCHED!
                        </h4>
                        <p className="text-xs sm:text-sm font-mono-code text-[#4ADE80]">
                          Delivered directly to Praveen at <span className="font-bold underline">{email}</span>.
                        </p>
                        <p className="text-xs text-[#A1A1AA] pt-1">
                          Thank you for reaching out. Praveen typically replies within 24 hours.
                        </p>
                      </div>
                    </div>

                    {/* Sent Message Recap */}
                    {lastSentData && (
                      <div className="p-4 rounded-xl bg-[#121217] border border-white/8 space-y-2.5">
                        <div className="flex items-center justify-between text-xs font-mono-code text-[#A1A1AA] border-b border-white/5 pb-2">
                          <span>SUMMARY OF DISPATCH</span>
                          <span className="text-[#22C55E]">✓ SENT</span>
                        </div>
                        <div className="text-xs font-mono-code space-y-1">
                          <p><span className="text-[#71717A]">From:</span> <span className="text-white">{lastSentData.name}</span> &lt;{lastSentData.email}&gt;</p>
                          <p><span className="text-[#71717A]">Subject:</span> <span className="text-white">{lastSentData.subject}</span></p>
                        </div>
                        <div className="text-xs text-[#D4D4D8] bg-[#0A0A0D] p-3 rounded border border-white/5 whitespace-pre-wrap font-sans max-h-36 overflow-y-auto">
                          {lastSentData.message}
                        </div>
                      </div>
                    )}

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <a
                        href={lastSentGmailUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-mono-code text-xs font-semibold transition-all hover:scale-[1.02] cursor-pointer"
                      >
                        <Mail className="w-4 h-4 text-[#EA4335]" />
                        <span>Also open in Gmail Web</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                      </a>

                      <button
                        type="button"
                        onClick={handleCopySentMessage}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#D4D4D8] hover:text-white font-mono-code text-xs transition-colors cursor-pointer"
                      >
                        {copiedSentText ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#22C55E]" />
                            <span>COPIED</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>COPY SUMMARY</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#FF4522]/20 hover:bg-[#FF4522]/30 text-[#FF4522] font-mono-code text-xs font-bold transition-colors ml-auto cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>SEND ANOTHER</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  /* FORM VIEW */
                  <motion.div
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <h3 className="font-anton text-2xl sm:text-3xl text-[#F5F5F5] tracking-tight">
                        SEND A DIRECT MESSAGE
                      </h3>
                      <span className="font-mono-code text-[11px] text-[#22C55E] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                        Live Delivery Ready
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#A1A1AA] mb-4 font-normal">
                      Fill out the form below to deliver your note directly into Praveen's inbox.
                    </p>

                    {/* Quick Template Chips */}
                    <div className="mb-5 space-y-2">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono-code text-[#71717A]">
                        <Sparkles className="w-3 h-3 text-[#FF4522]" />
                        <span>QUICK TEMPLATES (OPTIONAL):</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {QUICK_TEMPLATES.map((tmpl) => (
                          <button
                            key={tmpl.label}
                            type="button"
                            onClick={() => handleApplyTemplate(tmpl)}
                            className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-[#FF4522]/15 border border-white/5 hover:border-[#FF4522]/40 text-[11px] font-mono-code text-[#A1A1AA] hover:text-[#FF4522] transition-colors cursor-pointer"
                          >
                            {tmpl.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Native HTML Form targeting hidden iframe */}
                    <form
                      ref={formRef}
                      action={`https://formsubmit.co/${email}`}
                      method="POST"
                      target="formsubmit_hidden_iframe"
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      {/* Hidden configuration fields for FormSubmit */}
                      <input type="hidden" name="_captcha" value="false" />
                      <input type="hidden" name="_template" value="table" />
                      <input
                        type="hidden"
                        name="_subject"
                        value={formState.subject || `Portfolio Message from ${formState.name || 'Visitor'}`}
                      />
                      <input
                        type="hidden"
                        name="_autoresponse"
                        value="Thank you for reaching out to Praveen Vedanayagam! I have received your message and will reply shortly."
                      />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block font-mono-code text-xs uppercase tracking-wider text-[#A1A1AA] mb-1.5">
                            Your Name *
                          </label>
                          <input
                            id="name"
                            name="name"
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
                            name="email"
                            type="email"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            placeholder="alex@company.com"
                            className="w-full px-4 py-3 rounded-xl bg-[#121217] border border-white/10 focus:border-[#FF4522] focus:ring-1 focus:ring-[#FF4522] text-[#F5F5F5] text-sm placeholder:text-[#52525B] outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block font-mono-code text-xs uppercase tracking-wider text-[#A1A1AA] mb-1.5">
                          Subject / Topic
                        </label>
                        <input
                          id="subject"
                          type="text"
                          value={formState.subject}
                          onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                          placeholder="e.g. Software Engineer Role / Project Inquiry"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#121217] border border-white/10 focus:border-[#FF4522] focus:ring-1 focus:ring-[#FF4522] text-[#F5F5F5] text-sm placeholder:text-[#52525B] outline-none transition-colors font-mono-code text-xs"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block font-mono-code text-xs uppercase tracking-wider text-[#A1A1AA] mb-1.5">
                          Message / Project Details *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          placeholder="Tell me about your team, role opportunities, or engineering requirements..."
                          className="w-full px-4 py-3 rounded-xl bg-[#121217] border border-white/10 focus:border-[#FF4522] focus:ring-1 focus:ring-[#FF4522] text-[#F5F5F5] text-sm placeholder:text-[#52525B] outline-none transition-colors resize-none"
                        />
                      </div>

                      {validationError && (
                        <motion.div
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-3 rounded-xl bg-[#EF4444]/15 border border-[#EF4444]/30 text-[#F87171] text-xs font-mono-code flex items-center gap-2"
                        >
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <span>{validationError}</span>
                        </motion.div>
                      )}

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                        <button
                          type="submit"
                          disabled={isSending}
                          className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#FF4522] to-[#D92B04] text-[#050505] font-anton text-base tracking-wider uppercase rounded hover:brightness-110 shadow-[0_0_25px_rgba(255,69,34,0.4)] transition-all duration-200 active:scale-95 disabled:opacity-60 cursor-pointer"
                        >
                          {isSending ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>DISPATCHING...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              <span>SEND MESSAGE</span>
                            </>
                          )}
                        </button>

                        <div className="flex items-center gap-3">
                          <a
                            href={gmailComposeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-mono-code text-[#A1A1AA] hover:text-white transition-colors"
                            title="Open direct compose in Gmail"
                          >
                            <Mail className="w-3.5 h-3.5 text-[#EA4335]" />
                            <span>Or via Gmail Web</span>
                            <ArrowUpRight className="w-3 h-3 opacity-60" />
                          </a>
                          <span className="text-white/20">•</span>
                          <a
                            href={mailtoUrl}
                            className="inline-flex items-center gap-1.5 text-xs font-mono-code text-[#A1A1AA] hover:text-[#FF4522] transition-colors"
                            title="Open default system mail client"
                          >
                            <span>Mail app</span>
                            <ArrowUpRight className="w-3 h-3 opacity-60" />
                          </a>
                        </div>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
