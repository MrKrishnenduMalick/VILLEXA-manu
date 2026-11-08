import React from "react";
import Link from "next/link";
import {
  Factory,
  Globe2,
  ShieldCheck,
  Clock,
  ArrowUpRight,
  Play,
  Award,
  Layers,
  Users2,
  Building2,
  Sparkles,
} from "lucide-react";
import GlassCard from "@/components/GlassCard";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden pb-16">
      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-10 lg:pt-14 pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 z-10">
              
              {/* Badge: Manufacturer & Exporter */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-amber-400/40 backdrop-blur-2xl shadow-[0_0_20px_rgba(229,169,60,0.22)]">
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-xs font-semibold text-amber-300 tracking-wide uppercase">
                  Manufacturer & Exporter
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.12]">
                Global Manufacturing <br className="hidden sm:inline" />
                for a{" "}
                <span className="italic font-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 drop-shadow-[0_2px_15px_rgba(229,169,60,0.4)]">
                  Connected World
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 font-sans max-w-xl leading-relaxed">
                Premium quality products, world-class manufacturing and reliable
                export solutions for global buyers.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 shadow-[0_0_25px_rgba(229,169,60,0.45)] hover:shadow-[0_0_35px_rgba(229,169,60,0.65)] hover:brightness-105 active:scale-95 transition-all duration-200"
                >
                  <span>Get a Quote</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-200 bg-white/[0.05] border border-white/20 hover:border-amber-400/50 hover:bg-white/[0.09] hover:text-white backdrop-blur-2xl shadow-lg transition-all duration-200"
                >
                  <div className="w-4 h-4 rounded-full bg-amber-400/25 flex items-center justify-center text-amber-400">
                    <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                  </div>
                  <span>Our Company</span>
                </Link>
              </div>

              {/* 4 Feature Badges in Horizontal Row - Transparent Glassmorphism */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6">
                {/* Feature 1 */}
                <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/15 hover:border-amber-400/40 backdrop-blur-2xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all">
                  <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
                    <Factory className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white block">
                      Own
                    </span>
                    <span className="text-[11px] text-slate-300 block -mt-0.5">
                      Manufacturing
                    </span>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/15 hover:border-amber-400/40 backdrop-blur-2xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all">
                  <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white block">
                      Export
                    </span>
                    <span className="text-[11px] text-slate-300 block -mt-0.5">
                      Worldwide
                    </span>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/15 hover:border-amber-400/40 backdrop-blur-2xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all">
                  <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white block">
                      Quality
                    </span>
                    <span className="text-[11px] text-slate-300 block -mt-0.5">
                      Assured
                    </span>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/15 hover:border-amber-400/40 backdrop-blur-2xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all">
                  <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white block">
                      On-time
                    </span>
                    <span className="text-[11px] text-slate-300 block -mt-0.5">
                      Delivery
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Cinematic Factory Headquarters Visual */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-[0_25px_65px_rgba(0,0,0,0.75),0_0_40px_rgba(229,169,60,0.25)] bg-white/[0.03] backdrop-blur-2xl">
                <img
                  src="/images/hero-factory.jpg"
                  alt="GlobalTex Exports Modern Headquarters and Manufacturing Facility"
                  className="w-full h-[400px] object-cover object-center transform hover:scale-[1.02] transition-transform duration-700"
                />

                {/* Top glossy reflection line */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-amber-200/90 to-transparent pointer-events-none" />

                {/* Floating pill badge on image */}
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-navy-950/75 border border-amber-400/50 backdrop-blur-2xl text-[11px] text-amber-300 font-medium flex items-center gap-1.5 shadow-xl">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>State-of-the-Art Production Facility</span>
                </div>
              </div>
            </div>
          </div>

          {/* Large Transparent Glass Statistics Bar (Below Hero) */}
          <div className="mt-14 sm:mt-18">
            <div className="relative rounded-3xl sm:rounded-full bg-white/[0.04] backdrop-blur-2xl border-2 border-amber-400/40 px-6 sm:px-10 py-6 sm:py-7 shadow-[0_15px_45px_rgba(0,0,0,0.55),0_0_35px_rgba(229,169,60,0.22),inset_0_1px_1px_rgba(255,255,255,0.25)]">
              {/* Gloss line */}
              <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-300/80 to-transparent pointer-events-none" />

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
                
                {/* Stat 1 */}
                <div className="flex items-center gap-4 sm:justify-center pt-3 md:pt-0">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0 shadow-[0_0_15px_rgba(229,169,60,0.3)]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                      15+
                    </div>
                    <div className="text-xs text-slate-300 font-medium">
                      Years of Excellence
                    </div>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-center gap-4 sm:justify-center pt-3 md:pt-0 md:pl-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0 shadow-[0_0_15px_rgba(229,169,60,0.3)]">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                      500+
                    </div>
                    <div className="text-xs text-slate-300 font-medium">
                      Product Variants
                    </div>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-center gap-4 sm:justify-center pt-3 md:pt-0 md:pl-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0 shadow-[0_0_15px_rgba(229,169,60,0.3)]">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                      30+
                    </div>
                    <div className="text-xs text-slate-300 font-medium">
                      Countries Served
                    </div>
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="flex items-center gap-4 sm:justify-center pt-3 md:pt-0 md:pl-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0 shadow-[0_0_15px_rgba(229,169,60,0.3)]">
                    <Users2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                      1,000+
                    </div>
                    <div className="text-xs text-slate-300 font-medium">
                      Global Clients
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Quick Inquiry / Sourcing CTA Banner */}
          <div className="mt-14 sm:mt-18">
            <GlassCard glow hoverGlow className="p-8 sm:p-10 border-amber-400/40">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2 text-center md:text-left">
                  <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                    Direct Export Manufacturing & Custom Sourcing
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                    Looking for High-Volume Manufacturing & Reliable Export?
                  </h3>
                  <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                    Partner directly with GlobalTex Exports. Benefit from custom product engineering,
                    end-to-end containerized export logistics, and guaranteed international quality standards.
                  </p>
                </div>

                <div className="shrink-0 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 shadow-md hover:brightness-105 active:scale-95 transition-all"
                  >
                    <span>Request Quotation</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all"
                  >
                    <span>View Infrastructure</span>
                  </Link>
                </div>
              </div>
            </GlassCard>
          </div>

        </div>
      </section>
    </div>
  );
}
