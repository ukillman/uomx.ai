"use client";

import { motion } from "framer-motion";

const nodes = [
  { cx: 120, cy: 120, r: 6 },
  { cx: 270, cy: 180, r: 8 },
  { cx: 430, cy: 115, r: 7 },
  { cx: 620, cy: 230, r: 8 },
  { cx: 810, cy: 135, r: 6 },
  { cx: 940, cy: 280, r: 7 },
  { cx: 180, cy: 340, r: 7 },
  { cx: 350, cy: 460, r: 8 },
  { cx: 560, cy: 400, r: 6 },
  { cx: 760, cy: 500, r: 7 },
  { cx: 980, cy: 430, r: 8 }
];

const links = [
  [120, 120, 270, 180],
  [270, 180, 430, 115],
  [430, 115, 620, 230],
  [620, 230, 810, 135],
  [810, 135, 940, 280],
  [270, 180, 180, 340],
  [180, 340, 350, 460],
  [350, 460, 560, 400],
  [560, 400, 760, 500],
  [760, 500, 980, 430],
  [620, 230, 560, 400],
  [430, 115, 560, 400],
  [620, 230, 760, 500]
];

export function BackgroundNetwork() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="hero-grid-mask absolute inset-0 opacity-50" />
      <motion.div
        className="float-slow absolute left-[6%] top-[10%] h-72 w-72 rounded-full bg-blue-500/15 blur-[120px]"
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="float-reverse absolute right-[2%] top-[15%] h-80 w-80 rounded-full bg-indigo-500/15 blur-[130px]"
        animate={{ opacity: [0.18, 0.3, 0.18] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[-10%] top-[40%] h-px w-[40%] -rotate-6 bg-gradient-to-r from-transparent via-sky-400/45 to-transparent blur-sm"
        animate={{ x: ["0%", "105%"] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "linear" }}
      />
      <svg
        viewBox="0 0 1080 620"
        className="absolute inset-x-0 top-0 h-full w-full opacity-65"
        aria-hidden="true"
      >
        {links.map(([x1, y1, x2, y2], index) => (
          <motion.line
            key={`${x1}-${y1}-${x2}-${y2}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#umobLine)"
            strokeWidth="1.2"
            initial={{ pathLength: 0, opacity: 0.25 }}
            animate={{ pathLength: 1, opacity: [0.22, 0.6, 0.22] }}
            transition={{
              duration: 2.4,
              delay: index * 0.08,
              repeat: Infinity,
              repeatDelay: 3.2,
              ease: "easeInOut"
            }}
          />
        ))}
        {nodes.map((node, index) => (
          <motion.g key={`${node.cx}-${node.cy}`}>
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r={node.r * 2.2}
              fill="rgba(59, 130, 246, 0.12)"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{
                duration: 3.6,
                delay: index * 0.18,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill="rgba(147, 197, 253, 0.96)"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2.8,
                delay: index * 0.15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.g>
        ))}
        <defs>
          <linearGradient id="umobLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(125, 211, 252, 0.15)" />
            <stop offset="50%" stopColor="rgba(96, 165, 250, 0.9)" />
            <stop offset="100%" stopColor="rgba(129, 140, 248, 0.2)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
