import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ShieldCheck, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-amber-500/15 bg-[#040814]/90 backdrop-blur-2xl text-slate-400 overflow-hidden">
      {/* Decorative background glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Golden top accent line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="lg" />
            <p className="text-sm text-slate-300 leading-relaxed font-sans pt-2">
              GlobalTex Exports is a premier manufacturer and exporter delivering world-class
              textiles, garments, premium fabrics, leather craftsmanship and artisanal goods
              to global importers across 30+ countries.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-amber-300/80">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Govt. Recognized Star Export House & ISO Certified</span>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-sans border-l-2 border-amber-400 pl-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-300 transition-colors inline-flex items-center gap-1 group">
                  <span className="text-amber-400/50 group-hover:text-amber-400">›</span> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-300 transition-colors inline-flex items-center gap-1 group">
                  <span className="text-amber-400/50 group-hover:text-amber-400">›</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-300 transition-colors inline-flex items-center gap-1 group">
                  <span className="text-amber-400/50 group-hover:text-amber-400">›</span> Products & Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-300 transition-colors inline-flex items-center gap-1 group">
                  <span className="text-amber-400/50 group-hover:text-amber-400">›</span> Contact & Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Portfolio */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-sans border-l-2 border-amber-400 pl-2">
              Product Categories
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="hover:text-amber-300 transition-colors">
                  Home Textiles & Bed Linens
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-300 transition-colors">
                  Apparel & Fashion Garments
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-300 transition-colors">
                  Woven Fabrics, Denim & Yarns
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-300 transition-colors">
                  Genuine Leather Goods
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-300 transition-colors">
                  Artisanal Handicrafts & Décor
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Locations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-sans border-l-2 border-amber-400 pl-2">
              Contact & Facilities
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Head Office:</strong> Plot No. 12, Newtown Business Park, Kolkata - 700156, India
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Manufacturing Unit:</strong> Industrial Area, Kalyani, Nadia - 741235, India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:export@globaltex.com" className="hover:text-amber-300 transition-colors">
                  export@globaltex.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+913345678900" className="hover:text-amber-300 transition-colors">
                  +91 33 4567 8900 / +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Compliance Badges */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400">
            © {new Date().getFullYear()} <span className="text-slate-200 font-semibold">GlobalTex Exports</span>. All rights reserved. Exporting globally.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] text-amber-300/90 font-medium">
              ISO 9001:2015
            </span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] text-amber-300/90 font-medium">
              OEKO-TEX® STANDARD 100
            </span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] text-amber-300/90 font-medium">
              BSCI Compliant
            </span>
            <Link href="/contact" className="text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 ml-2">
              Export Inquiry <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

