"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X, ArrowUpRight, CheckCircle2, Sparkles, Layers, Shield, Globe } from "lucide-react";
import { useTheme } from "./ThemeContext";

export interface ProductItem {
  id: string;
  title: string;
  tagline: string;
  image: string;
  description: string;
  materials: string[];
  capacity: string;
  moq: string;
  leadTime: string;
  exportMarkets: string[];
  highlights: string[];
}

export const PRODUCTS: ProductItem[] = [
  {
    id: "home-textiles",
    title: "Home Textiles",
    tagline: "Luxury Linens & Bath Essentials",
    image: "/images/products/home-textiles.jpg",
    description: "Premium cotton bed linens, hotel-grade plush terry towels, duvets, and artisanal table linens manufactured with ring-spun combed yarns and eco-friendly reactive dyes.",
    materials: ["100% Organic Cotton", "Egyptian Long-Staple Cotton", "Bamboo Fiber Blend", "Linen-Cotton Weave"],
    capacity: "450,000 Pcs / Month",
    moq: "1,000 Sets / Style",
    leadTime: "30 - 45 Days",
    exportMarkets: ["USA", "Germany", "UK", "Australia", "UAE"],
    highlights: ["OEKO-TEX Standard 100 Certified", "Super Absorbent 600+ GSM Terry", "Color-Fast Reactive Dyeing", "Custom Packaging & Barcoding"],
  },
  {
    id: "apparel-garments",
    title: "Apparel & Garments",
    tagline: "Fashion, Casual & Workwear",
    image: "/images/products/apparel.jpg",
    description: "Export-grade knitted and woven apparel including premium polo shirts, corporate uniforms, activewear, and casual leisurewear with precision stitching and strict AQL 2.5 standards.",
    materials: ["Single Jersey Combed Cotton", "Pique Knit Cotton-Poly", "French Terry", "Performance Dry-Fit Spandex"],
    capacity: "600,000 Garments / Month",
    moq: "1,500 Pcs / Colorway",
    leadTime: "35 - 50 Days",
    exportMarkets: ["European Union", "North America", "Japan", "South Africa"],
    highlights: ["BSCI & SEDEX Compliant Facilities", "Computerized Pattern CAD/CAM", "Enzyme & Bio-Washed Softness", "Customized Embroidery & Screen Printing"],
  },
  {
    id: "fabrics-textiles",
    title: "Fabrics & Textiles",
    tagline: "Woven, Denim & Specialty Yarns",
    image: "/images/products/fabrics.jpg",
    description: "Extensive catalogue of yarn-dyed fabrics, heavy denims, dobby weaves, jacquards, poplin, and high-tenacity technical textiles woven on state-of-the-art air-jet looms.",
    materials: ["Combed Yarns (20s - 80s)", "Selvedge & Stretch Denim", "Dobby & Jacquard Cotton", "Recycled Polyester Blends"],
    capacity: "1.2 Million Meters / Month",
    moq: "3,000 Meters / Spec",
    leadTime: "25 - 40 Days",
    exportMarkets: ["Italy", "Spain", "Bangladesh", "Vietnam", "Turkey"],
    highlights: ["Air-Jet & Rapier Loom Weaving", "Continuous Bleaching & Mercerizing", "Tensile & Tear Strength Lab Tested", "Custom Shade Matching with Spectrophotometer"],
  },
  {
    id: "leather-goods",
    title: "Leather Goods",
    tagline: "Handcrafted Luxury Hides & Accessories",
    image: "/images/products/leather.jpg",
    description: "Finely crafted genuine leather rolls, fashion accessories, wallets, duffel bags, belts, and industrial leather workwear sourced from certified LWG tanneries with chromium-free tanning.",
    materials: ["Full Grain Cowhide", "Top Grain Buffalo Leather", "Suede & Nubuck", "Vegetable-Tanned Italian Finish"],
    capacity: "80,000 Units / Month",
    moq: "500 Pcs / Design",
    leadTime: "40 - 55 Days",
    exportMarkets: ["Germany", "France", "USA", "Canada", "Singapore"],
    highlights: ["LWG (Leather Working Group) Gold Certified", "YKK Solid Brass Hardware", "Hand-Burnished Edge Finishing", "Custom Embossing & Debossing"],
  },
  {
    id: "handicrafts",
    title: "Handicrafts",
    tagline: "Artisanal Heritage & Brass Décor",
    image: "/images/products/handicrafts.jpg",
    description: "Authentic Indian artisan handicrafts featuring hand-hammered brass lanterns, filigree candleholders, woven jute decorative baskets, and heirloom metallic artefacts celebrating heritage craftsmanship.",
    materials: ["Solid Cast Brass", "Antique Bronze Finish", "Natural Braided Jute & Cane", "Hand-Etched Copper"],
    capacity: "50,000 Pieces / Month",
    moq: "300 Pcs / Design",
    leadTime: "30 - 45 Days",
    exportMarkets: ["USA", "UK", "Netherlands", "Japan", "Saudi Arabia"],
    highlights: ["Master Artisan Crafted", "Anti-Tarnish Lacquer Coating", "Sustainably Sourced Raw Materials", "Export Drop-Test Certified Wooden Packaging"],
  },
];

export default function ProductCarousel3D() {
  const { theme } = useTheme();
  const isWhiteMarble = theme === "white-marble";

  const [activeIndex, setActiveIndex] = useState(2); // Center card (Fabrics & Textiles)
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = PRODUCTS.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "Escape") setSelectedProduct(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setDragOffset(0);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const diff = clientX - startX;
    setDragOffset(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset > 60) {
      prevSlide();
    } else if (dragOffset < -60) {
      nextSlide();
    }
    setDragOffset(0);
  };

  return (
    <div className="relative w-full py-6 sm:py-10 select-none">
      {/* 3D Perspective Stage Container */}
      <div
        ref={containerRef}
        className="relative mx-auto w-full max-w-6xl h-[500px] sm:h-[550px] flex items-center justify-center cursor-grab active:cursor-grabbing overflow-visible"
        style={{ perspective: "1300px" }}
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseMove={(e) => handleDragMove(e.clientX)}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
        onTouchEnd={handleDragEnd}
      >
        {/* WHITE CALACATTA MARBLE PLINTH & GOLDEN STAGE PEDESTAL */}
        <div className="absolute bottom-2 inset-x-0 mx-auto w-[92%] max-w-4xl h-44 pointer-events-none">
          {/* Polished White Marble Disc with Organic Golden Veins */}
          <div
            className={`absolute inset-0 rounded-[100%] border-2 border-amber-400 transform rotateX(75deg) overflow-hidden ${
              isWhiteMarble
                ? "bg-gradient-to-b from-white via-[#f8fafc] to-[#e2e8f0] shadow-[0_0_60px_rgba(229,169,60,0.45),0_20px_45px_rgba(15,23,42,0.15)]"
                : "bg-gradient-to-b from-white/[0.88] via-slate-100/[0.7] to-slate-200/[0.5] shadow-[0_0_50px_rgba(229,169,60,0.4),0_15px_40px_rgba(0,0,0,0.6)]"
            }`}
          >
            {/* Marble Veining SVG texture across the plinth */}
            <svg
              className="absolute inset-0 w-full h-full opacity-70"
              viewBox="0 0 600 200"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M 50 80 Q 180 50 320 90 T 520 70"
                stroke="#d97706"
                strokeWidth="2.8"
                strokeOpacity="0.8"
              />
              <path
                d="M 120 120 Q 250 90 380 130 T 550 110"
                stroke={isWhiteMarble ? "#475569" : "#94a3b8"}
                strokeWidth="1.8"
                strokeOpacity="0.6"
              />
              <path
                d="M 220 70 Q 340 110 460 75"
                stroke="#fef08a"
                strokeWidth="2.2"
                strokeOpacity="0.95"
              />
              <path
                d="M 80 100 Q 200 130 350 100 T 500 120"
                stroke={isWhiteMarble ? "#64748b" : "#cbd5e1"}
                strokeWidth="1.2"
                strokeOpacity="0.5"
              />
            </svg>
            {/* Top specular high-gloss marble shine */}
            <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/95 to-transparent" />
          </div>

          {/* Concentric Golden Halo Rings */}
          <div className="absolute inset-x-10 inset-y-2 rounded-[100%] border border-amber-300/80 transform rotateX(75deg)" />
          <div className="absolute inset-x-24 inset-y-4 rounded-[100%] border border-amber-200/90 bg-amber-400/10 blur-sm transform rotateX(75deg)" />

          {/* Stage floor radial gold glow */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-20 bg-gradient-to-t from-amber-500/35 via-amber-400/15 to-transparent blur-2xl" />
        </div>

        {/* 3D Curved Coverflow Cards */}
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {PRODUCTS.map((product, idx) => {
            let diff = idx - activeIndex;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const isCenter = diff === 0;
            const absDiff = Math.abs(diff);

            let translateX = diff * 225;
            let translateZ = -absDiff * 140;
            let rotateY = diff * -28;
            let scale = 1 - absDiff * 0.14;
            let zIndex = 30 - absDiff * 10;
            let opacity = absDiff > 2 ? 0 : 1 - absDiff * 0.2;

            if (isCenter) {
              translateZ = 90;
              scale = 1.08;
              zIndex = 40;
              opacity = 1;
            }

            if (typeof window !== "undefined" && window.innerWidth < 640) {
              translateX = diff * 145;
              scale = 1 - absDiff * 0.18;
              if (isCenter) scale = 1.02;
            }

            return (
              <div
                key={product.id}
                onClick={() => {
                  if (isCenter) {
                    setSelectedProduct(product);
                  } else {
                    setActiveIndex(idx);
                  }
                }}
                className={`absolute w-64 sm:w-72 h-[390px] sm:h-[440px] rounded-3xl transition-all duration-500 ease-out cursor-pointer select-none`}
                style={{
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  zIndex,
                  opacity,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Crystal-Clear Transparent Glass Card with Polished White Marble Accent */}
                <div
                  className={`relative w-full h-full rounded-3xl overflow-hidden flex flex-col transition-all duration-300 ${
                    isWhiteMarble
                      ? isCenter
                        ? "bg-white/85 backdrop-blur-md border-2 border-amber-500 shadow-[0_20px_60px_rgba(15,23,42,0.18),0_0_40px_rgba(229,169,60,0.4),inset_0_1px_3px_rgba(255,255,255,0.9)]"
                        : "bg-white/60 hover:bg-white/80 backdrop-blur-sm border border-amber-400/40 hover:border-amber-500/70 shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
                      : isCenter
                        ? "bg-white/[0.08] backdrop-blur-md border-2 border-amber-400 shadow-[0_20px_60px_rgba(0,0,0,0.65),0_0_40px_rgba(229,169,60,0.45),inset_0_1px_3px_rgba(255,255,255,0.8),inset_0_0_20px_rgba(255,255,255,0.06)]"
                        : "bg-white/[0.03] hover:bg-white/[0.07] backdrop-blur-sm border border-white/30 hover:border-amber-400/50 shadow-[0_15px_35px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.4)]"
                  }`}
                >
                  {/* Diagonal Specular Marble-Glass Light Sheen */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.12] to-transparent" />

                  {/* Top Specular Bevel Line */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />

                  {/* Left Specular Bevel Line */}
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-white/40 via-transparent to-transparent" />

                  {/* Product Real Life Image Container */}
                  <div className="relative w-full h-56 sm:h-64 p-3.5 flex items-center justify-center">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/25 shadow-xl group-hover:scale-[1.02] transition-transform duration-500">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover object-center"
                      />
                      {/* Subtle lower vignette to keep text readable */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Featured active badge */}
                    {isCenter && (
                      <span className="absolute top-5 right-5 px-3 py-1 rounded-full bg-black/60 border border-amber-300/70 backdrop-blur-md text-[10px] font-semibold text-amber-200 flex items-center gap-1 shadow-xl">
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Featured
                      </span>
                    )}
                  </div>

                  {/* See-Through Crystal-Clear Glass Shelf - Zero dark background so stage glows through */}
                  <div
                    className={`relative flex-1 p-4 sm:p-5 flex flex-col justify-between border-t ${
                      isWhiteMarble ? "border-slate-200 bg-white/40" : "border-white/15 bg-transparent"
                    }`}
                  >
                    <div>
                      <h3
                        className={`text-xl sm:text-2xl font-serif font-bold tracking-tight transition-colors ${
                          isWhiteMarble
                            ? isCenter
                              ? "text-amber-800"
                              : "text-slate-900"
                            : isCenter
                              ? "text-amber-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]"
                              : "text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]"
                        }`}
                      >
                        {product.title}
                      </h3>
                      <p
                        className={`text-xs line-clamp-1 mt-1 font-sans ${
                          isWhiteMarble
                            ? "text-slate-700"
                            : "text-slate-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]"
                        }`}
                      >
                        {product.tagline}
                      </p>
                    </div>

                    {/* Bottom Action Pill */}
                    <div
                      className={`flex items-center justify-between pt-2 border-t text-xs ${
                        isWhiteMarble ? "border-slate-200/80" : "border-white/15"
                      }`}
                    >
                      <span
                        className={`text-[11px] font-semibold ${
                          isWhiteMarble
                            ? "text-amber-800"
                            : "text-amber-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]"
                        }`}
                      >
                        Click to view details
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                          isCenter
                            ? "bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-navy-950 font-bold shadow-[0_0_18px_rgba(229,169,60,0.7)]"
                            : isWhiteMarble
                              ? "bg-amber-400/20 text-slate-800 hover:bg-amber-400 hover:text-navy-950"
                              : "bg-white/15 text-slate-200 hover:bg-amber-400 hover:text-navy-950"
                        }`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Floor Reflection Gradient in Glass */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-amber-400/20 to-transparent" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Navigation Arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 hover:border-amber-400/70 text-white hover:text-amber-300 backdrop-blur-2xl flex items-center justify-center shadow-[0_8px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(229,169,60,0.6)] transition-all active:scale-95"
          aria-label="Previous product"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 hover:border-amber-400/70 text-white hover:text-amber-300 backdrop-blur-2xl flex items-center justify-center shadow-[0_8px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(229,169,60,0.6)] transition-all active:scale-95"
          aria-label="Next product"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Pagination Dot Indicators */}
      <div className="flex items-center justify-center gap-2.5 mt-5">
        {PRODUCTS.map((p, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={p.id}
              onClick={() => setActiveIndex(idx)}
              className={`transition-all duration-300 rounded-full ${
                isActive
                  ? "w-9 h-2.5 bg-gradient-to-r from-amber-300 to-amber-500 shadow-[0_0_15px_rgba(229,169,60,0.8)]"
                  : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          );
        })}
      </div>

      {/* Product Detail Glass Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-2xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl rounded-3xl bg-white/[0.08] backdrop-blur-2xl border-2 border-amber-400/70 p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_50px_rgba(229,169,60,0.35)] max-h-[90vh] overflow-y-auto">
            {/* Top Gloss accent */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-amber-300 to-transparent pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-slate-300 hover:text-white flex items-center justify-center transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-full sm:w-48 h-48 rounded-2xl overflow-hidden border border-amber-400/40 shrink-0 shadow-lg">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2 flex-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-xs font-semibold text-amber-300">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Export Product Line</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  {selectedProduct.title}
                </h2>
                <p className="text-amber-200/90 text-sm font-medium">
                  {selectedProduct.tagline}
                </p>
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed pt-1">
                  {selectedProduct.description}
                </p>
              </div>
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
              <div className="p-3.5 rounded-xl bg-white/[0.05] border border-white/15 backdrop-blur-md">
                <span className="text-[11px] text-amber-300/90 font-medium block">
                  Production Capacity
                </span>
                <span className="text-sm font-semibold text-white mt-0.5 block">
                  {selectedProduct.capacity}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.05] border border-white/15 backdrop-blur-md">
                <span className="text-[11px] text-amber-300/90 font-medium block">
                  Minimum Order (MOQ)
                </span>
                <span className="text-sm font-semibold text-white mt-0.5 block">
                  {selectedProduct.moq}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.05] border border-white/15 backdrop-blur-md">
                <span className="text-[11px] text-amber-300/90 font-medium block">
                  Standard Lead Time
                </span>
                <span className="text-sm font-semibold text-white mt-0.5 block">
                  {selectedProduct.leadTime}
                </span>
              </div>
            </div>

            {/* Materials & Quality Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-amber-400" /> Materials & Compositions
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProduct.materials.map((mat, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/15 text-xs text-slate-200"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-amber-400" /> Export Quality Standards
                </h4>
                <ul className="space-y-1.5">
                  {selectedProduct.highlights.map((high, i) => (
                    <li key={i} className="text-xs text-slate-200 flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{high}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Primary Export Destinations */}
            <div className="mt-4 pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Globe className="w-4 h-4 text-amber-400" />
                <span className="text-slate-400">Key Export Markets:</span>
                <span className="text-white font-medium">
                  {selectedProduct.exportMarkets.join(", ")}
                </span>
              </div>

              <Link
                href={`/contact?category=${encodeURIComponent(selectedProduct.title)}`}
                onClick={() => setSelectedProduct(null)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 shadow-[0_0_20px_rgba(229,169,60,0.5)] hover:brightness-105 active:scale-95 transition-all"
              >
                <span>Request Quotation for {selectedProduct.title}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
