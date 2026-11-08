"use client";

import React from "react";
import { useTheme } from "./ThemeContext";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  hoverGlow?: boolean;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className = "",
  glow = false,
  hoverGlow = true,
  onClick,
}: GlassCardProps) {
  const { theme } = useTheme();
  const isWhiteMarble = theme === "white-marble";

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden rounded-3xl transition-all duration-300 ${
        isWhiteMarble
          ? `bg-white/80 backdrop-blur-2xl border ${
              glow
                ? "border-amber-400/60 shadow-[0_12px_40px_rgba(15,23,42,0.08),0_0_30px_rgba(229,169,60,0.25)]"
                : "border-amber-400/30 shadow-[0_10px_35px_rgba(15,23,42,0.06),0_0_15px_rgba(229,169,60,0.12)]"
            } ${
              hoverGlow
                ? "hover:bg-white/95 hover:border-amber-500/70 hover:shadow-[0_16px_45px_rgba(15,23,42,0.12),0_0_35px_rgba(229,169,60,0.35)] hover:-translate-y-0.5"
                : ""
            }`
          : `bg-white/[0.04] backdrop-blur-2xl border ${
              glow
                ? "border-amber-400/40 shadow-[0_12px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(229,169,60,0.22),inset_0_1px_1px_rgba(255,255,255,0.2)]"
                : "border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.15)]"
            } ${
              hoverGlow
                ? "hover:bg-white/[0.07] hover:border-amber-400/45 hover:shadow-[0_16px_50px_rgba(0,0,0,0.6),0_0_35px_rgba(229,169,60,0.25)] hover:-translate-y-0.5"
                : ""
            }`
      } ${className}`}
    >
      {/* Top glossy refraction highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
      
      {/* Corner subtle gold flare */}
      <div className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl" />

      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
