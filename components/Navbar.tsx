"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import Logo from "./Logo";
import { useTheme } from "./ThemeContext";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products & Manufacturing", href: "/products" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const isWhiteMarble = theme === "white-marble";

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isWhiteMarble
          ? scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-amber-400/30 py-3 shadow-[0_4px_25px_rgba(15,23,42,0.06)]"
            : "bg-white/60 backdrop-blur-md border-b border-amber-400/20 py-4"
          : scrolled
            ? "bg-[#060d1b]/85 backdrop-blur-xl border-b border-amber-500/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-[#060d1b]/50 backdrop-blur-md border-b border-white/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Logo size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-200 px-4 py-1.5 rounded-full ${
                    isWhiteMarble
                      ? isActive
                        ? "text-amber-900 bg-amber-400/20 border border-amber-500/50 shadow-sm font-semibold"
                        : "text-slate-700 hover:text-navy-950 hover:bg-black/5 border border-transparent"
                      : isActive
                        ? "text-amber-200 bg-white/5 border border-amber-400/40 shadow-[0_0_15px_rgba(229,169,60,0.2)] font-semibold"
                        : "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Cluster: Theme Toggle + Send Inquiry CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* White Marble / Midnight Theme Toggle Pill */}
            <button
              onClick={toggleTheme}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 shadow-sm active:scale-95 ${
                isWhiteMarble
                  ? "bg-amber-400/20 hover:bg-amber-400/30 text-amber-900 border border-amber-500/50"
                  : "bg-white/10 hover:bg-white/15 text-amber-300 border border-amber-400/40 shadow-[0_0_15px_rgba(229,169,60,0.25)]"
              }`}
              title="Switch theme background"
              aria-label="Toggle White Marble or Midnight Navy background"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>{isWhiteMarble ? "White Marble" : "Midnight Navy"}</span>
            </button>

            {/* Send Inquiry Gold Button */}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 shadow-[0_0_20px_rgba(229,169,60,0.35)] hover:shadow-[0_0_25px_rgba(229,169,60,0.55)] hover:brightness-105 active:scale-95 transition-all duration-200"
            >
              <span>Send Inquiry</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu & Theme Buttons */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg text-xs font-semibold transition-colors border ${
                isWhiteMarble
                  ? "bg-amber-400/20 text-amber-900 border-amber-500/40"
                  : "bg-white/10 text-amber-300 border-amber-400/40"
              }`}
              aria-label="Toggle White Marble effect"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors border ${
                isWhiteMarble
                  ? "text-slate-800 bg-black/5 border-black/10"
                  : "text-slate-300 hover:text-white bg-white/5 border-white/10 hover:border-amber-400/30"
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden px-4 pt-3 pb-6 backdrop-blur-2xl border-b shadow-2xl animate-in slide-in-from-top duration-200 ${
            isWhiteMarble
              ? "bg-white/95 border-amber-400/30 text-slate-800"
              : "bg-[#060d1b]/95 border-amber-500/20 text-slate-100"
          }`}
        >
          <div className="flex flex-col space-y-2 max-w-md mx-auto">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isWhiteMarble
                      ? isActive
                        ? "text-amber-900 bg-amber-400/20 border border-amber-500/40 font-semibold"
                        : "text-slate-700 hover:text-navy-950 hover:bg-black/5"
                      : isActive
                        ? "text-amber-200 bg-amber-400/10 border border-amber-400/40 shadow-sm"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-3">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 shadow-md hover:brightness-105 transition-all"
              >
                <span>Send Inquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
