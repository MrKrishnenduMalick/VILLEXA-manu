import React, { Suspense } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Factory,
  Globe2,
  Sparkles,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import WorldMapVisual from "@/components/WorldMapVisual";

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden pb-16">
      <section className="relative pt-6 sm:pt-10 lg:pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Heading, Subtitle, Contact Info & Logistics Visual (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-amber-400/40 backdrop-blur-2xl shadow-[0_0_20px_rgba(229,169,60,0.22)]">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-xs font-semibold text-amber-300 tracking-wide uppercase">
                  Contact Us
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15]">
                Let's Build a{" "}
                <span className="italic font-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 drop-shadow-[0_2px_15px_rgba(229,169,60,0.4)]">
                  Global Partnership
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                Get in touch with our team for product inquiries, custom manufacturing,
                bulk orders or export collaboration.
              </p>

              {/* 4 Contact Information Glass Tiles - Pure Transparent Glass */}
              <div className="space-y-3 pt-2">
                
                {/* 1. Call Us */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/20 hover:border-amber-400/40 backdrop-blur-2xl shadow-[0_4px_25px_rgba(0,0,0,0.3)] transition-all">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white block">Call Us</span>
                    <div className="text-xs text-slate-300 font-medium">
                      <a href="tel:+913345678900" className="hover:text-amber-300 transition-colors">
                        +91 33 4567 8900
                      </a>
                      <span className="mx-1 text-slate-500">|</span>
                      <a href="tel:+919876543210" className="hover:text-amber-300 transition-colors">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                </div>

                {/* 2. Email Us */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/20 hover:border-amber-400/40 backdrop-blur-2xl shadow-[0_4px_25px_rgba(0,0,0,0.3)] transition-all">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white block">Email Us</span>
                    <div className="text-xs text-slate-300 font-medium">
                      <a href="mailto:export@globaltex.com" className="hover:text-amber-300 transition-colors">
                        export@globaltex.com
                      </a>
                      <span className="mx-1 text-slate-500">|</span>
                      <a href="mailto:sales@globaltex.com" className="hover:text-amber-300 transition-colors">
                        sales@globaltex.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* 3. Head Office */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/20 hover:border-amber-400/40 backdrop-blur-2xl shadow-[0_4px_25px_rgba(0,0,0,0.3)] transition-all">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white block">Head Office</span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Plot No. 12, Newtown Business Park, Kolkata - 700156, India
                    </p>
                  </div>
                </div>

                {/* 4. Manufacturing Unit */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/20 hover:border-amber-400/40 backdrop-blur-2xl shadow-[0_4px_25px_rgba(0,0,0,0.3)] transition-all">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0 mt-0.5">
                    <Factory className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white block">Manufacturing Unit</span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Industrial Area, Kalyani, Nadia - 741235, India
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom Visual: Global Logistics Map & Ocean Container Terminal */}
              <div className="pt-2">
                <div className="relative rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-[0_15px_45px_rgba(0,0,0,0.65)] bg-white/[0.03] backdrop-blur-2xl">
                  <div className="p-3">
                    <WorldMapVisual showLabels={false} />
                  </div>
                  <div className="relative h-28 w-full overflow-hidden border-t border-white/10">
                    <img
                      src="/images/port-terminal.jpg"
                      alt="Ocean container freight vessel berthed at port"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-2.5 left-4 right-4 flex items-center justify-between text-[11px] text-slate-300 font-medium">
                      <span className="flex items-center gap-1.5 text-amber-300">
                        <Globe2 className="w-3.5 h-3.5" /> Worldwide Freight Logistics
                      </span>
                      <span className="text-slate-400">FOB & CIF Delivery</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Export Inquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <Suspense
                fallback={
                  <div className="p-12 text-center text-slate-400">
                    Loading inquiry form...
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
