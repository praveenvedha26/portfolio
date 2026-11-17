import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingCursorBadge({
  name,
  color,
  top,
  left,
  right,
  bottom,
  delay = 0,
  dx = 10,
  dy = -10,
  mousePosition = { x: 0, y: 0 }
}) {
  // Parallax offset based on normalized mouse position (-1 to 1)
  const parallaxX = mousePosition.x * dx * 1.3;
  const parallaxY = mousePosition.y * dy * 1.3;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 15 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: parallaxX,
        y: parallaxY
      }}
      exit={{ opacity: 0, scale: 0.6 }}
      transition={{
        type: 'spring',
        stiffness: 90,
        damping: 15,
        delay: delay * 0.3
      }}
      style={{
        position: 'absolute',
        top,
        left,
        right,
        bottom,
        zIndex: 45
      }}
      className="hidden sm:block pointer-events-auto select-none group cursor-pointer"
    >
      {/* Floating gentle bounce container */}
      <motion.div
        animate={{
          y: [0, dy, 0],
          x: [0, dx * 0.5, 0]
        }}
        transition={{
          duration: 4.0 + delay * 0.9,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut'
        }}
        className="relative flex flex-col items-start"
      >
        {/* Figma Cursor Arrow Pointer */}
        <div className="relative -mb-1 z-10 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transform transition-transform duration-200 group-hover:scale-115"
          >
            <path
              d="M3 3L10.07 21L13.59 13.59L21 10.07L3 3Z"
              fill={color}
              stroke="#050505"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Multiplayer Pill Label */}
        <div
          style={{
            backgroundColor: color,
            boxShadow: `0 4px 16px ${color}50, 0 2px 6px rgba(0,0,0,0.6)`
          }}
          className="ml-3 px-2.5 py-0.5 rounded-full rounded-tl-sm flex items-center gap-1.5 transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 border border-black/15"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-black/40"></span>
          <span className="font-mono-code font-bold text-[11px] tracking-tight text-black whitespace-nowrap">
            {name}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
