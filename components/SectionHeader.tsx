import React from "react";

interface SectionHeaderProps {
  badgeText: string;
  badgeIcon?: React.ReactNode;
  titlePrimary: string;
  titleHighlight: string;
  subtitle: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  badgeText,
  badgeIcon,
  titlePrimary,
  titleHighlight,
  subtitle,
  centered = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`space-y-3 ${centered ? "text-center mx-auto max-w-3xl" : "max-w-2xl"} ${className}`}>
      {/* Pill Badge */}
      <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-amber-400/30 backdrop-blur-md text-xs font-semibold text-amber-300 tracking-wide shadow-[0_0_15px_rgba(229,169,60,0.15)] ${centered ? "justify-center" : ""}`}>
        {badgeIcon && <span className="text-amber-400 shrink-0">{badgeIcon}</span>}
        <span>{badgeText}</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15]">
        {titlePrimary}{" "}
        <span className="italic font-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 drop-shadow-[0_2px_12px_rgba(229,169,60,0.3)]">
          {titleHighlight}
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-2xl">
        {subtitle}
      </p>
    </div>
  );
}

