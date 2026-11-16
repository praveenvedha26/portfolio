import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Copy, Sparkles, X } from 'lucide-react';

export default function Toast({ message, visible, onClose }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-[#0F0F14]/95 backdrop-blur-xl border border-[#FF4522]/40 shadow-[0_12px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(255,69,34,0.25)] text-[#F5F5F5]"
        >
          <div className="p-1 rounded-full bg-[#FF4522]/20 text-[#FF4522]">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <span className="font-mono-code text-xs font-medium tracking-wide">
            {message}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-[#A1A1AA] hover:text-white transition-colors"
            aria-label="Dismiss toast"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
