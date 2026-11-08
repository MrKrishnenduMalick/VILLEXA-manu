"use client";

import React from "react";
import { useTheme } from "./ThemeContext";

export default function GoldenRibbonBackground() {
  const { theme } = useTheme();
  const isWhiteMarble = theme === "white-marble";

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none transition-colors duration-700">
      {/* BASE BACKGROUND CANVAS */}
      {isWhiteMarble ? (
        // Luminous White Calacatta Marble Canvas
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbfcfd] via-[#f1f5f9] to-[#e2e8f0]" />
      ) : (
        // Deep Midnight Navy Canvas
        <div className="absolute inset-0 bg-gradient-to-b from-[#020612] via-[#051126] to-[#02050f]" />
      )}

      {/* AMBIENT SPOTLIGHTS */}
      {isWhiteMarble ? (
        <>
          {/* Subtle warm gold and alabaster glows for White Marble */}
          <div className="absolute -top-32 left-1/4 w-[800px] h-[500px] bg-amber-400/15 rounded-full blur-[140px]" />
          <div className="absolute top-1/3 right-10 w-[700px] h-[500px] bg-amber-300/20 rounded-full blur-[160px]" />
          <div className="absolute bottom-10 left-1/3 w-[850px] h-[450px] bg-yellow-400/15 rounded-full blur-[150px]" />
        </>
      ) : (
        <>
          {/* Royal blue and amber spotlights for Midnight */}
          <div className="absolute -top-32 left-1/3 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[150px]" />
          <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] bg-amber-500/15 rounded-full blur-[170px]" />
          <div className="absolute bottom-20 right-1/4 w-[750px] h-[450px] bg-amber-400/20 rounded-full blur-[160px]" />
        </>
      )}

      {/* HIGH DEFINITION PROCEDURAL WHITE CALACATTA MARBLE & FLUID WATER-STYLE GOLDEN RIBBONS */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Crystalline Marble Grain Filter */}
          <filter id="marbleGrain" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.015 0.03"
              numOctaves="4"
              result="noise"
            />
            <feColorMatrix
              type="matrix"
              values={
                isWhiteMarble
                  ? "0 0 0 0 0.85  0 0 0 0 0.88  0 0 0 0 0.92  0 0 0 0.08 0"
                  : "0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.04 0"
              }
              result="coloredNoise"
            />
            <feComposite in="SourceGraphic" in2="coloredNoise" operator="over" />
          </filter>

          {/* Golden Ribbon Glow Filters */}
          <filter id="goldWaveGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur1" />
            <feGaussianBlur stdDeviation="16" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="marbleVeinSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradients */}
          {/* Liquid Water-Style Golden Ribbon Primary */}
          <linearGradient id="liquidGoldWater" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d97706" stopOpacity="0" />
            <stop offset="12%" stopColor="#f59e0b" stopOpacity="0.9" />
            <stop offset="35%" stopColor="#fef08a" stopOpacity="1" />
            <stop offset="60%" stopColor="#e5a93c" stopOpacity="0.95" />
            <stop offset="85%" stopColor="#d97706" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#b45309" stopOpacity="0" />
          </linearGradient>

          {/* Secondary Liquid Gold Ribbon */}
          <linearGradient id="liquidGoldWaterSecondary" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b45309" stopOpacity="0" />
            <stop offset="20%" stopColor="#fbbf24" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#fffbeb" stopOpacity="1" />
            <stop offset="80%" stopColor="#f59e0b" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
          </linearGradient>

          {/* Calacatta Gold Seam Gradient */}
          <linearGradient id="calacattaGoldSeam" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isWhiteMarble ? "#94a3b8" : "#ffffff"} stopOpacity="0.2" />
            <stop offset="30%" stopColor="#f59e0b" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#fef08a" stopOpacity="1" />
            <stop offset="70%" stopColor="#d97706" stopOpacity="0.8" />
            <stop offset="100%" stopColor={isWhiteMarble ? "#64748b" : "#ffffff"} stopOpacity="0.3" />
          </linearGradient>

          {/* Soft Alabaster Marble Cloud Gradient */}
          <radialGradient id="alabasterCloud" cx="50%" cy="50%" r="50%">
            <stop
              offset="0%"
              stopColor={isWhiteMarble ? "#ffffff" : "#ffffff"}
              stopOpacity={isWhiteMarble ? "0.6" : "0.25"}
            />
            <stop
              offset="60%"
              stopColor={isWhiteMarble ? "#f1f5f9" : "#e2e8f0"}
              stopOpacity={isWhiteMarble ? "0.3" : "0.1"}
            />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* --- 1. NATURAL WHITE CALACATTA MARBLE VEINING SYSTEM --- */}
        {/* Soft Alabaster Marble Texture Blooms */}
        <g>
          <ellipse cx="450" cy="280" rx="420" ry="220" fill="url(#alabasterCloud)" />
          <ellipse cx="1450" cy="380" rx="500" ry="260" fill="url(#alabasterCloud)" />
          <ellipse cx="980" cy="780" rx="600" ry="300" fill="url(#alabasterCloud)" />
        </g>

        {/* Primary Calacatta Marble Fissures (Thick, Organic, Branching) */}
        <g filter="url(#marbleVeinSoft)">
          {/* Main diagonal sweeping marble fissure */}
          <path
            d="M -50 180 Q 220 320 480 210 T 880 340 T 1320 220 T 1760 380 T 2050 290"
            stroke={isWhiteMarble ? "#64748b" : "#ffffff"}
            strokeWidth={isWhiteMarble ? "3.5" : "2.8"}
            strokeOpacity={isWhiteMarble ? "0.55" : "0.65"}
            strokeDasharray="500 20 250 15 120 10"
          />
          {/* Tributary branches from main fissure */}
          <path
            d="M 480 210 Q 560 120 720 80"
            stroke={isWhiteMarble ? "#94a3b8" : "#f1f5f9"}
            strokeWidth="1.8"
            strokeOpacity={isWhiteMarble ? "0.6" : "0.5"}
          />
          <path
            d="M 880 340 Q 940 460 1100 520"
            stroke={isWhiteMarble ? "#94a3b8" : "#e2e8f0"}
            strokeWidth="2"
            strokeOpacity={isWhiteMarble ? "0.55" : "0.5"}
          />
          <path
            d="M 1320 220 Q 1420 140 1600 160"
            stroke={isWhiteMarble ? "#cbd5e1" : "#ffffff"}
            strokeWidth="1.5"
            strokeOpacity={isWhiteMarble ? "0.6" : "0.45"}
          />

          {/* Second major Calacatta Gold mineral seam */}
          <path
            d="M 80 580 Q 380 440 720 620 T 1200 510 T 1680 660 T 2050 560"
            stroke="url(#calacattaGoldSeam)"
            strokeWidth={isWhiteMarble ? "3.2" : "2.6"}
            strokeOpacity={isWhiteMarble ? "0.85" : "0.9"}
            strokeDasharray="420 25 180 18"
          />
          {/* Gold seam branch capillary cracks */}
          <path
            d="M 720 620 Q 820 740 980 810"
            stroke="url(#calacattaGoldSeam)"
            strokeWidth="1.6"
            strokeOpacity="0.75"
          />
          <path
            d="M 1200 510 Q 1310 400 1480 430"
            stroke="url(#calacattaGoldSeam)"
            strokeWidth="1.8"
            strokeOpacity="0.75"
          />

          {/* Third lower marble fissure */}
          <path
            d="M -50 820 Q 320 710 650 860 T 1140 750 T 1620 900 T 2050 810"
            stroke={isWhiteMarble ? "#64748b" : "#f8fafc"}
            strokeWidth="2.5"
            strokeOpacity={isWhiteMarble ? "0.45" : "0.55"}
            strokeDasharray="360 30 140 20"
          />
        </g>

        {/* Fine Crystalline Hairline Fractures across the marble slab */}
        <g opacity={isWhiteMarble ? "0.4" : "0.35"}>
          <path
            d="M 240 140 Q 320 240 440 210"
            stroke={isWhiteMarble ? "#475569" : "#ffffff"}
            strokeWidth="1"
          />
          <path
            d="M 1020 280 Q 1120 380 1260 330"
            stroke={isWhiteMarble ? "#475569" : "#ffffff"}
            strokeWidth="1"
          />
          <path
            d="M 540 680 Q 640 780 780 730"
            stroke={isWhiteMarble ? "#475569" : "#ffffff"}
            strokeWidth="1"
          />
          <path
            d="M 1520 720 Q 1640 840 1780 790"
            stroke={isWhiteMarble ? "#475569" : "#ffffff"}
            strokeWidth="1"
          />
        </g>

        {/* --- 2. FLUID WATER-STYLE GOLDEN RIBBON STRIPS --- */}
        {/* Semi-transparent liquid gold base water wave */}
        <path
          d="M -100 890 C 350 730, 750 970, 1220 800 C 1580 670, 1860 830, 2080 720 L 2080 1100 L -100 1100 Z"
          fill="url(#calacattaGoldSeam)"
          opacity={isWhiteMarble ? "0.14" : "0.18"}
        />

        {/* High-Intensity 3D Fluid Golden Light Ribbon (Primary Water Wave) */}
        <path
          d="M -100 850 C 320 690, 710 940, 1180 770 C 1540 640, 1840 810, 2080 700"
          stroke="url(#liquidGoldWater)"
          strokeWidth={isWhiteMarble ? "5.5" : "4.8"}
          filter="url(#goldWaveGlow)"
        />

        {/* Secondary Interlaced Fluid Ribbon Wave */}
        <path
          d="M -100 790 C 400 960, 840 720, 1310 880 C 1640 980, 1880 730, 2080 850"
          stroke="url(#liquidGoldWaterSecondary)"
          strokeWidth={isWhiteMarble ? "4" : "3.4"}
          filter="url(#goldWaveGlow)"
        />

        {/* Razor-sharp Specular Water Crest Line (Pure White Crystal Sheen) */}
        <path
          d="M -100 838 C 360 710, 760 928, 1230 782 C 1580 660, 1850 788, 2080 712"
          stroke="#ffffff"
          strokeWidth="2.2"
          strokeOpacity={isWhiteMarble ? "0.95" : "0.9"}
        />

        {/* Mid-Canvas Ambient Golden Water Ribbon */}
        <path
          d="M -100 490 C 440 340, 960 620, 1460 430 C 1760 320, 1950 460, 2080 390"
          stroke="url(#liquidGoldWaterSecondary)"
          strokeWidth={isWhiteMarble ? "3" : "2.6"}
          strokeOpacity={isWhiteMarble ? "0.6" : "0.55"}
          filter="url(#goldWaveGlow)"
        />

        {/* Floating Golden Luminous Water Droplets & Light Particles */}
        <g fill="#ffffff">
          <circle cx="280" cy="750" r="3.5" fill="#fef08a" filter="url(#goldWaveGlow)" />
          <circle cx="480" cy="820" r="2.5" fill="#fffbeb" />
          <circle cx="720" cy="800" r="4" fill="#fef08a" filter="url(#goldWaveGlow)" />
          <circle cx="940" cy="740" r="2.5" fill="#fffbeb" />
          <circle cx="1180" cy="780" r="3.5" fill="#fef08a" filter="url(#goldWaveGlow)" />
          <circle cx="1420" cy="725" r="3.8" fill="#fef08a" filter="url(#goldWaveGlow)" />
          <circle cx="1640" cy="770" r="2.5" fill="#fffbeb" />
          <circle cx="1820" cy="720" r="3" fill="#fef08a" filter="url(#goldWaveGlow)" />
        </g>
      </svg>
    </div>
  );
}
