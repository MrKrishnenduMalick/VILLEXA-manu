import React from "react";
import Link from "next/link";
import {
  Award,
  Factory,
  Users2,
  Globe2,
  CheckCircle2,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import GlassCard from "@/components/GlassCard";
import WorldMapVisual from "@/components/WorldMapVisual";

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden pb-16">
      {/* Top Hero Section */}
      <section className="relative pt-6 sm:pt-10 lg:pt-14 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Subtitle & Stat Tiles */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-amber-400/40 backdrop-blur-2xl shadow-[0_0_20px_rgba(229,169,60,0.22)]">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-xs font-semibold text-amber-300 tracking-wide uppercase">
                  About Us
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15]">
                A Trusted Partner in{" "}
                <span className="italic font-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 drop-shadow-[0_2px_15px_rgba(229,169,60,0.4)]">
                  Global Manufacturing
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 font-sans max-w-xl leading-relaxed">
                We are a manufacturer and exporter delivering high-quality,
                customized products to global markets with a focus on quality,
                reliability and long-term partnerships.
              </p>

              {/* 4 Stat Tiles in a row - Transparent Glassmorphic */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                {/* Stat 1 */}
                <div className="p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/20 hover:border-amber-400/40 backdrop-blur-2xl shadow-[0_4px_25px_rgba(0,0,0,0.3)] transition-all">
                  <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 mb-2">
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-white">
                    15+
                  </div>
                  <div className="text-[11px] text-slate-300 leading-tight">
                    Years of Experience
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/20 hover:border-amber-400/40 backdrop-blur-2xl shadow-[0_4px_25px_rgba(0,0,0,0.3)] transition-all">
                  <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 mb-2">
                    <Factory className="w-4 h-4" />
                  </div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-white">
                    2
                  </div>
                  <div className="text-[11px] text-slate-300 leading-tight">
                    Manufacturing Units
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/20 hover:border-amber-400/40 backdrop-blur-2xl shadow-[0_4px_25px_rgba(0,0,0,0.3)] transition-all">
                  <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 mb-2">
                    <Users2 className="w-4 h-4" />
                  </div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-white">
                    300+
                  </div>
                  <div className="text-[11px] text-slate-300 leading-tight">
                    Skilled Professionals
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/20 hover:border-amber-400/40 backdrop-blur-2xl shadow-[0_4px_25px_rgba(0,0,0,0.3)] transition-all">
                  <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 mb-2">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-white">
                    30+
                  </div>
                  <div className="text-[11px] text-slate-300 leading-tight">
                    Export Destinations
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Industrial Loom Factory Perspective Photography */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-[0_25px_65px_rgba(0,0,0,0.75),0_0_40px_rgba(229,169,60,0.25)] bg-white/[0.03] backdrop-blur-2xl">
                <img
                  src="/images/textile-loom.jpg"
                  alt="High-tech textile spinning and weaving automated loom facility"
                  className="w-full h-[380px] object-cover object-center transform hover:scale-[1.02] transition-transform duration-700"
                />
                
                {/* Top glossy reflection line */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-amber-200/90 to-transparent pointer-events-none" />

                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-navy-950/75 border border-white/15 backdrop-blur-2xl text-xs text-slate-300 flex items-center justify-between shadow-xl">
                  <span className="text-amber-300 font-medium">Loom Automation Division</span>
                  <span className="text-slate-400">1.2M Meters Monthly Capacity</span>
                </div>
              </div>
            </div>

          </div>

          {/* Lower 3 Cards Grid - Pure Transparent Glass */}
          <div className="mt-12 sm:mt-18 grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Modern Factory Exterior Photo */}
            <GlassCard glow hoverGlow className="flex flex-col justify-between overflow-hidden">
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src="/images/factory-exterior.jpg"
                  alt="Modern industrial factory unit exterior"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3.5 py-1 rounded-full bg-navy-950/80 border border-amber-400/40 backdrop-blur-md text-[11px] font-semibold text-amber-300">
                  Unit 02 · Kalyani Industrial Complex
                </span>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-serif font-bold text-white">
                  Modern Production Infrastructure
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Spread over 150,000 sq. ft., our cutting-edge manufacturing facilities feature
                  automated air-jet looms, computerized embroidery CAD, precision dye labs, and
                  dust-free packaging suites adhering to ISO 9001 and BSCI norms.
                </p>
              </div>
            </GlassCard>

            {/* Card 2: Our Strengths */}
            <GlassCard glow hoverGlow className="p-6 sm:p-7 flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="flex items-center gap-2.5 pb-4 border-b border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white">
                    Our Strengths
                  </h3>
                </div>

                {/* Strength Checklist */}
                <ul className="space-y-3.5 pt-5">
                  <li className="flex items-start gap-3 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-amber-400/20 border border-amber-400/50 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-white block text-sm">In-house Manufacturing</strong>
                      <span className="text-xs text-slate-300">Complete vertical integration from raw fiber to packaged goods.</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-amber-400/20 border border-amber-400/50 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-white block text-sm">Custom Product Development</strong>
                      <span className="text-xs text-slate-300">Bespoke weaves, Pantone matching, private label branding.</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-amber-400/20 border border-amber-400/50 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-white block text-sm">Strict Quality Control</strong>
                      <span className="text-xs text-slate-300">Multi-stage 4-point inspection and certified lab verification.</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-amber-400/20 border border-amber-400/50 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-white block text-sm">Large-scale Production Capacity</strong>
                      <span className="text-xs text-slate-300">Reliable output capable of fulfilling high-volume retail chains.</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-amber-400/20 border border-amber-400/50 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-white block text-sm">End-to-End Export Support</strong>
                      <span className="text-xs text-slate-300">FOB, CIF, custom clearance, documentation & port dispatch.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10 mt-4">
                <Link
                  href="/products"
                  className="text-xs font-semibold text-amber-300 hover:text-amber-200 inline-flex items-center gap-1.5 group"
                >
                  <span>Explore Manufacturing Capabilities</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </GlassCard>

            {/* Card 3: Our Global Reach */}
            <GlassCard glow hoverGlow className="p-6 sm:p-7 flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="flex items-center gap-2.5 pb-4 border-b border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white">
                    Our Global Reach
                  </h3>
                </div>

                {/* World Map Visual with glowing hubs and export arcs */}
                <div className="my-4 rounded-2xl overflow-hidden bg-white/[0.03] border border-white/15 p-2">
                  <WorldMapVisual showLabels={false} />
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Headquartered in India with seamless freight shipping through Haldia and
                  Kolkata ports, GlobalTex regularly exports container consignments to wholesale distributors,
                  apparel labels, and institutional buyers in over 30 countries across 5 continents.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 mt-4">
                <span className="text-amber-300/90 font-medium">30+ Global Ports Served</span>
                <Link
                  href="/contact"
                  className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1"
                >
                  Inquire Now <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </GlassCard>

          </div>

        </div>
      </section>
    </div>
  );
}
