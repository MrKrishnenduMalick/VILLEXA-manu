import React from "react";
import Link from "next/link";
import {
  Sparkles,
  Cog,
  ShieldCheck,
  Search,
  Cpu,
  PackageCheck,
  Truck,
  ArrowUpRight,
  FileCheck,
} from "lucide-react";
import GlassCard from "@/components/GlassCard";
import ProductCarousel3D from "@/components/ProductCarousel3D";

export default function ProductsPage() {
  return (
    <div className="relative overflow-hidden pb-20">
      {/* Deep Midnight Navy Industrial Loom Perspective Background with Golden Light Trails */}
      <div className="absolute top-0 inset-x-0 h-[860px] pointer-events-none overflow-hidden select-none z-0">
        <img
          src="/images/textile-loom.jpg"
          alt="High-Tech Textile Loom Machinery Background"
          className="w-full h-full object-cover object-center opacity-35 filter saturate-60 contrast-125"
        />
        
        {/* Golden laser ribbon light wave swooping across the carousel stage */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="prodGoldRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0" />
              <stop offset="25%" stopColor="#f59e0b" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#fef08a" stopOpacity="1" />
              <stop offset="75%" stopColor="#d97706" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </linearGradient>
            <filter id="ribbonBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Fluid golden wave ribbons passing under the 3D carousel */}
          <path
            d="M -50 550 C 300 450, 600 620, 1000 480 C 1200 410, 1380 500, 1500 460"
            stroke="url(#prodGoldRibbon)"
            strokeWidth="3.5"
            filter="url(#ribbonBlur)"
          />
          <path
            d="M -50 580 C 350 490, 750 630, 1100 520 C 1300 460, 1400 530, 1500 500"
            stroke="#fde68a"
            strokeWidth="1.5"
            strokeOpacity="0.75"
          />
        </svg>

        {/* Midnight navy gradient mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#040c1a]/65 to-[#030712]" />
      </div>

      {/* Main Content Area */}
      <section className="relative z-10 pt-6 sm:pt-10 lg:pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] border border-amber-400/40 backdrop-blur-xl shadow-[0_0_20px_rgba(229,169,60,0.25)]">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs font-semibold text-amber-300 tracking-wide uppercase">
                Our Products
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
              Products &{" "}
              <span className="italic font-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 drop-shadow-[0_2px_15px_rgba(229,169,60,0.4)]">
                Manufacturing
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
              A diverse range of high-quality products, backed by modern manufacturing
              facilities, advanced technology and strict quality standards.
            </p>
          </div>

          {/* 3D Coverflow Carousel (Appears exclusively on this page) */}
          <div className="mt-4 sm:mt-6">
            <ProductCarousel3D />
          </div>

          {/* Lower Section (2 Large Transparent Glass Cards) */}
          <div className="mt-14 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Card: Our Manufacturing Process (7 cols) */}
            <div className="lg:col-span-7">
              <GlassCard glow hoverGlow className="p-6 sm:p-8 h-full flex flex-col justify-between">
                <div>
                  {/* Header */}
                  <div className="flex items-center gap-3 pb-5 border-b border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                      <Cog className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                        Our Manufacturing Process
                      </h3>
                      <p className="text-xs text-slate-400">
                        Synchronized 5-stage precision production cycle
                      </p>
                    </div>
                  </div>

                  {/* 5-Step Process Flow with connecting arrows */}
                  <div className="grid grid-cols-5 gap-2 sm:gap-3 my-8 relative">
                    
                    {/* Step 1: Sourcing Raw Material */}
                    <div className="flex flex-col items-center text-center group">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/[0.05] border border-amber-400/40 group-hover:border-amber-400 flex items-center justify-center text-amber-300 shadow-[0_0_15px_rgba(229,169,60,0.2)] backdrop-blur-xl transition-all">
                        <Search className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-[10px] sm:text-xs font-semibold text-white mt-3 block leading-tight">
                        Sourcing Raw Material
                      </span>
                      <span className="text-[9px] text-slate-400 mt-1 hidden sm:block">
                        100% Traceable
                      </span>
                    </div>

                    {/* Step 2: Processing & Production */}
                    <div className="flex flex-col items-center text-center group">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/[0.05] border border-amber-400/40 group-hover:border-amber-400 flex items-center justify-center text-amber-300 shadow-[0_0_15px_rgba(229,169,60,0.2)] backdrop-blur-xl transition-all">
                        <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-[10px] sm:text-xs font-semibold text-white mt-3 block leading-tight">
                        Processing & Production
                      </span>
                      <span className="text-[9px] text-slate-400 mt-1 hidden sm:block">
                        Automated Looms
                      </span>
                    </div>

                    {/* Step 3: Quality Inspection */}
                    <div className="flex flex-col items-center text-center group">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/[0.05] border border-amber-400/40 group-hover:border-amber-400 flex items-center justify-center text-amber-300 shadow-[0_0_15px_rgba(229,169,60,0.2)] backdrop-blur-xl transition-all">
                        <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-[10px] sm:text-xs font-semibold text-white mt-3 block leading-tight">
                        Quality Inspection
                      </span>
                      <span className="text-[9px] text-slate-400 mt-1 hidden sm:block">
                        AQL 2.5 Standard
                      </span>
                    </div>

                    {/* Step 4: Packaging & Labeling */}
                    <div className="flex flex-col items-center text-center group">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/[0.05] border border-amber-400/40 group-hover:border-amber-400 flex items-center justify-center text-amber-300 shadow-[0_0_15px_rgba(229,169,60,0.2)] backdrop-blur-xl transition-all">
                        <PackageCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-[10px] sm:text-xs font-semibold text-white mt-3 block leading-tight">
                        Packaging & Labeling
                      </span>
                      <span className="text-[9px] text-slate-400 mt-1 hidden sm:block">
                        Barcode & Poly
                      </span>
                    </div>

                    {/* Step 5: Global Export */}
                    <div className="flex flex-col items-center text-center group">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/[0.05] border border-amber-400/40 group-hover:border-amber-400 flex items-center justify-center text-amber-300 shadow-[0_0_15px_rgba(229,169,60,0.2)] backdrop-blur-xl transition-all">
                        <Truck className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-[10px] sm:text-xs font-semibold text-white mt-3 block leading-tight">
                        Global Export
                      </span>
                      <span className="text-[9px] text-slate-400 mt-1 hidden sm:block">
                        Port Clearance
                      </span>
                    </div>

                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>Custom OEM / ODM private label processing available.</span>
                  <Link
                    href="/contact"
                    className="text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1"
                  >
                    Request Sample Run <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </GlassCard>
            </div>

            {/* Right Card: Certifications & Compliance (5 cols) */}
            <div className="lg:col-span-5">
              <GlassCard glow hoverGlow className="p-6 sm:p-8 h-full flex flex-col justify-between">
                <div>
                  {/* Header */}
                  <div className="flex items-center gap-3 pb-5 border-b border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                      <FileCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                        Certifications & Compliance
                      </h3>
                      <p className="text-xs text-slate-400">
                        Accredited for global retail & institutional tenders
                      </p>
                    </div>
                  </div>

                  {/* 3 Prominent Certificate Badges */}
                  <div className="grid grid-cols-3 gap-3 my-6">
                    {/* ISO Badge */}
                    <div className="p-3 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/15 backdrop-blur-xl flex flex-col items-center text-center justify-center hover:border-amber-400/40 transition-colors">
                      <div className="w-12 h-12 rounded-full border-2 border-white/40 flex flex-col items-center justify-center text-white mb-2 shadow-inner">
                        <span className="text-xs font-black tracking-tighter">ISO</span>
                        <span className="text-[8px] text-amber-300 leading-none">9001:2015</span>
                      </div>
                      <span className="text-[11px] font-semibold text-white">
                        ISO 9001:2015
                      </span>
                      <span className="text-[9px] text-slate-400">
                        Quality Management
                      </span>
                    </div>

                    {/* OEKO-TEX Badge */}
                    <div className="p-3 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/15 backdrop-blur-xl flex flex-col items-center text-center justify-center hover:border-amber-400/40 transition-colors">
                      <div className="w-12 h-12 rounded-full border-2 border-amber-400/40 flex flex-col items-center justify-center text-amber-300 mb-2 shadow-inner">
                        <span className="text-[9px] font-bold">OEKO</span>
                        <span className="text-[8px] text-white leading-none">TEX®</span>
                      </div>
                      <span className="text-[11px] font-semibold text-white">
                        OEKO-TEX®
                      </span>
                      <span className="text-[9px] text-slate-400">
                        STANDARD 100
                      </span>
                    </div>

                    {/* BSCI Badge */}
                    <div className="p-3 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/15 backdrop-blur-xl flex flex-col items-center text-center justify-center hover:border-amber-400/40 transition-colors">
                      <div className="w-12 h-12 rounded-full border-2 border-blue-400/40 flex flex-col items-center justify-center text-blue-300 mb-2 shadow-inner">
                        <span className="text-xs font-black tracking-wider">BSCI</span>
                        <span className="text-[7px] text-slate-300 leading-none">Compliant</span>
                      </div>
                      <span className="text-[11px] font-semibold text-white">
                        BSCI Audit
                      </span>
                      <span className="text-[9px] text-slate-400">
                        Social Compliance
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Our facilities are periodically audited by third-party testing agencies (SGS, Intertek, TÜV SÜD) ensuring 100% adherence to worker welfare, zero hazardous chemicals, and zero discharge of hazardous wastewater (ZDHC).
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-amber-300/90 font-medium">Test reports furnished upon order</span>
                  <Link
                    href="/contact"
                    className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1"
                  >
                    Request Audit Copy <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </GlassCard>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
