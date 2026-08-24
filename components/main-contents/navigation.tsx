"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`navigation_container fixed top-0 left-0 w-full z-50 h-[80px] px-6 lg:px-12 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-2xl bg-black/80 border-b border-green-500/30 shadow-[0_4px_30px_rgba(0,255,102,0.05)]"
            : "backdrop-blur-md bg-transparent border-b border-transparent"
        }`}
      >
        <div className="logo-container flex-1 flex justify-start">
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src="/assets/logo.webp"
              alt="Logo"
              className="logo w-[40px] h-[40px] cursor-pointer object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-[0_0_10px_rgba(0,255,102,0.5)]"
            />
          </Link>
        </div>

        <div className="links-container hidden md:flex items-center justify-center flex-1">
          <div
            className={`flex items-center gap-1 transition-all duration-300 ${
              scrolled
                ? "bg-transparent p-0 border-none shadow-none"
                : "bg-zinc-900/60 p-1.5 rounded-full border border-zinc-800/80 backdrop-blur-sm"
            }`}
          >
            <Link
              href="/"
              className={`nav-link text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                scrolled
                  ? "text-zinc-300 hover:text-green-400 bg-transparent"
                  : "text-zinc-300 hover:text-white hover:bg-green-600/80"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`nav-link text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                scrolled
                  ? "text-zinc-300 hover:text-green-400 bg-transparent"
                  : "text-zinc-300 hover:text-white hover:bg-green-600/80"
              }`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`nav-link text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                scrolled
                  ? "text-zinc-300 hover:text-green-400 bg-transparent"
                  : "text-zinc-300 hover:text-white hover:bg-green-600/80"
              }`}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={`nav-link text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                scrolled
                  ? "text-zinc-300 hover:text-green-400 bg-transparent"
                  : "text-zinc-300 hover:text-white hover:bg-green-600/80"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="button-container hidden md:flex flex-1 justify-end">
          <button className="contactButton relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-black bg-green-500 rounded-full overflow-hidden transition-all duration-300 hover:bg-green-400 shadow-[0_0_15px_rgba(0,255,102,0.4)] hover:shadow-[0_0_25px_rgba(0,255,102,0.7)] active:scale-95">
            Get Quote
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-300 hover:text-green-400 p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="md:hidden fixed top-[80px] left-0 w-full bg-zinc-950/95 backdrop-blur-2xl border-b border-green-500/20 py-6 px-6 z-40 flex flex-col gap-4"
          >
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-zinc-300 hover:text-green-400 p-3 rounded-xl transition-all"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-zinc-300 hover:text-green-400 p-3 rounded-xl transition-all"
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className="text-zinc-300 hover:text-green-400 p-3 rounded-xl transition-all"
            >
              Services
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-zinc-300 hover:text-green-400 p-3 rounded-xl transition-all"
            >
              Contact
            </Link>
            <button className="mt-2 w-full py-3 text-sm font-semibold text-black bg-green-500 rounded-xl hover:bg-green-400 transition-all shadow-[0_0_15px_rgba(0,255,102,0.4)]">
              Get Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}