"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "./ThemeContext";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const { theme } = useTheme();
  const isWhiteMarble = theme === "white-marble";

  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const textSizes = {
    sm: "text-base",
    md: "text-lg md:text-xl",
    lg: "text-2xl",
  };

  const taglineSizes = {
    sm: "text-[8px] tracking-[0.18em]",
    md: "text-[9px] md:text-[10px] tracking-[0.22em]",
    lg: "text-xs tracking-[0.25em]",
  };

  return (
    <Link href="/" className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Globe & Export Symbol */}
      <div className={`relative flex items-center justify-center ${iconSizes[size]} rounded-full p-0.5 transition-transform duration-300 group-hover:scale-105`}>
        {/* Subtle glow backdrop */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/30 via-amber-400/10 to-transparent blur-sm" />

        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 drop-shadow-[0_0_8px_rgba(229,169,60,0.5)]"
        >
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fde68a" />
              <stop offset="50%" stopColor="#e5a93c" />
              <stop offset="100%" stopColor="#a16214" />
            </linearGradient>
            <linearGradient id="glowRing" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f5c056" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0.7" />
            </linearGradient>
          </defs>

          {/* Outer circle */}
          <circle cx="32" cy="32" r="28" stroke="url(#goldGrad)" strokeWidth="2.2" strokeOpacity="0.9" />

          {/* Latitude Lines */}
          <ellipse cx="32" cy="32" rx="28" ry="11" stroke="url(#goldGrad)" strokeWidth="1.4" strokeOpacity="0.75" />
          <ellipse cx="32" cy="32" rx="28" ry="21" stroke="url(#goldGrad)" strokeWidth="1.4" strokeOpacity="0.75" />

          {/* Longitude Lines */}
          <ellipse cx="32" cy="32" rx="14" ry="28" stroke="url(#goldGrad)" strokeWidth="1.4" strokeOpacity="0.75" />
          <line x1="32" y1="4" x2="32" y2="60" stroke="url(#goldGrad)" strokeWidth="1.4" strokeOpacity="0.8" />
          <line x1="4" y1="32" x2="60" y2="32" stroke="url(#goldGrad)" strokeWidth="1.4" strokeOpacity="0.8" />

          {/* Export orbital flight arc with arrowhead */}
          <path
            d="M 10 46 C 18 16, 46 14, 55 22"
            stroke="url(#glowRing)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Arrowhead */}
          <polygon
            points="55,17 58,24 51,24"
            fill="url(#goldGrad)"
          />

          {/* Center glowing core dot */}
          <circle cx="32" cy="32" r="2.5" fill="#fde68a" className="animate-pulse" />
        </svg>
      </div>

      {/* Brand Name & Tagline */}
      <div className="flex flex-col">
        <span
          className={`font-serif font-bold tracking-wide transition-colors duration-200 ${isWhiteMarble ? "text-slate-900 group-hover:text-amber-800" : "text-white group-hover:text-amber-200"
            } ${textSizes[size]}`}
        >
          GlobalTex{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600">
            Exports
          </span>
        </span>
        <span
          className={`font-sans font-semibold uppercase ${isWhiteMarble ? "text-amber-800" : "text-amber-300/80"
            } ${taglineSizes[size]}`}
        >
          MANUFACTURING | SOURCING | EXPORT
        </span>
      </div>
    </Link>
  );
}
