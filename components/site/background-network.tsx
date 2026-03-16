"use client";

import { motion } from "framer-motion";

const nodes = [
  { cx: 260, cy: 138, r: 5 },
  { cx: 430, cy: 180, r: 6 },
  { cx: 610, cy: 132, r: 5 },
  { cx: 760, cy: 214, r: 6 },
  { cx: 910, cy: 178, r: 5 },
  { cx: 520, cy: 344, r: 5 },
  { cx: 760, cy: 392, r: 5 }
];

const links = [
  [260, 138, 430, 180],
  [430, 180, 610, 132],
  [610, 132, 760, 214],
  [760, 214, 910, 178],
  [430, 180, 520, 344],
  [520, 344, 760, 392],
  [610, 132, 760, 392]
];

export function BackgroundNetwork() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="hero-grid-mask absolute inset-0 opacity-45" />
      <motion.div
        className="float-slow absolute left-[10%] top-[10%] h-64 w-64 rounded-full bg-cyan-300/7 blur-[120px]"
        animate={{ opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="float-reverse absolute right-[4%] top-[18%] h-72 w-72 rounded-full bg-violet-400/7 blur-[130px]"
        animate={{ opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[14%] top-[18%] h-px w-[24%] bg-gradient-to-r from-transparent via-white/30 to-transparent"
        animate={{ opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <svg
        viewBox="0 0 1080 560"
        className="absolute inset-x-0 top-0 h-full w-full opacity-40"
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
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0.12 }}
            animate={{ pathLength: 1, opacity: [0.1, 0.34, 0.1] }}
            transition={{
              duration: 2.8,
              delay: index * 0.12,
              repeat: Infinity,
              repeatDelay: 4.4,
              ease: "easeInOut"
            }}
          />
        ))}
        {nodes.map((node, index) => (
          <motion.g key={`${node.cx}-${node.cy}`}>
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r={node.r * 2.1}
              fill="rgba(255, 255, 255, 0.05)"
              animate={{ scale: [1, 1.28, 1] }}
              transition={{
                duration: 4.6,
                delay: index * 0.22,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill="rgba(255, 255, 255, 0.82)"
              animate={{ opacity: [0.34, 0.8, 0.34] }}
              transition={{
                duration: 3.8,
                delay: index * 0.18,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.g>
        ))}
        <defs>
          <linearGradient id="umobLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.04)" />
            <stop offset="45%" stopColor="rgba(255, 255, 255, 0.28)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.06)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
