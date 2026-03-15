"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#home", label: "首页" },
  { href: "#agent-os", label: "算力基座" },
  { href: "#solutions", label: "最佳实践" },
  { href: "#about", label: "关于我们" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/75 backdrop-blur-xl"
    >
      <div className="section-shell flex h-20 items-center justify-between gap-6">
        <a href="#home" className="text-xl font-black tracking-[-0.04em] sm:text-2xl">
          <span className="gradient-text">Umob.AI™</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-white/65 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="glass-button">
            接入系统
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "关闭导航菜单" : "打开导航菜单"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="glass-button h-11 w-11 p-0 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden border-t border-white/10 md:hidden"
          >
            <nav className="section-shell flex flex-col gap-2 py-5">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition-all duration-300 hover:border-blue-500/30 hover:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="primary-button mt-2">
                接入系统
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
