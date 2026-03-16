"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, ChevronDown, Globe, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#home", label: "首页" },
  { href: "#agent-os", label: "算力基座" },
  { href: "#solutions", label: "最佳实践" },
  { href: "#about", label: "关于我们" }
];

function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!ref.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  const triggerClass = mobile
    ? "glass-button h-11 px-3 text-xs"
    : "glass-button px-3.5 py-2.5 text-sm";

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => {
        if (!mobile) setOpen(true);
      }}
      onMouseLeave={() => {
        if (!mobile) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className={`${triggerClass} inline-flex items-center gap-2 font-medium text-white/90`}
      >
        <Globe className="h-4 w-4 text-white/72" />
        <span>🇨🇳 中文</span>
        <ChevronDown className={`h-4 w-4 text-white/55 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className={`absolute right-0 z-50 mt-3 w-56 rounded-2xl border border-gray-100 bg-white/90 p-2 shadow-[0_18px_48px_rgba(0,0,0,0.2)] backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/90 ${
              mobile ? "top-full" : "top-full"
            }`}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-slate-900 transition-colors hover:bg-black/[0.03] dark:text-white dark:hover:bg-white/[0.04]"
            >
              <span>🇨🇳 中文 (Chinese)</span>
              <Check className="h-4 w-4 text-slate-500 dark:text-slate-300" />
            </button>
            <button
              type="button"
              className="mt-1 flex w-full items-center rounded-xl px-3 py-2.5 text-left text-sm text-slate-600 transition-colors hover:bg-black/[0.03] dark:text-slate-300 dark:hover:bg-white/[0.04]"
            >
              🇺🇸 English
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-white/8 bg-[#0a0a0a]/76 backdrop-blur-2xl"
    >
      <div className="section-shell flex h-20 items-center justify-between gap-6">
        <a href="#home" className="text-xl font-semibold tracking-[-0.04em] text-white sm:text-2xl">
          Umob<span className="gradient-text">.AI™</span>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm text-white/60 transition-all duration-300 hover:bg-white/[0.04] hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <a href="#contact" className="primary-button px-5 py-2.5">
            接入系统
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher mobile />
          <button
            type="button"
            aria-label={open ? "关闭导航菜单" : "打开导航菜单"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="glass-button h-11 w-11 p-0"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
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
                  className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-white/82 transition-all duration-300 hover:bg-white/[0.05]"
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
