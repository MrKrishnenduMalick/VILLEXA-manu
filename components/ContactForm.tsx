"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  product: string;
  message: string;
}

const COUNTRIES = [
  "United States",
  "United Kingdom",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Canada",
  "Australia",
  "United Arab Emirates",
  "Saudi Arabia",
  "Japan",
  "South Korea",
  "Singapore",
  "South Africa",
  "Brazil",
  "Netherlands",
  "Other International Market",
];

const PRODUCTS = [
  "Home Textiles & Linens",
  "Apparel & Garments",
  "Fabrics & Textiles",
  "Leather Goods",
  "Artisanal Handicrafts",
  "Custom Manufacturing / Private Label",
  "Bulk Yarn & Grey Fabrics",
];

export default function ContactForm() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    product: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (categoryParam) {
      const match = PRODUCTS.find((p) =>
        p.toLowerCase().includes(categoryParam.toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({ ...prev, product: match }));
      }
    }
  }, [categoryParam]);

  const validate = () => {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.company.trim()) errs.company = "Company / Organization name is required";
    if (!formData.email.trim()) {
      errs.email = "Business email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid business email";
    }
    if (!formData.phone.trim()) errs.phone = "Phone or WhatsApp is required";
    if (!formData.country) errs.country = "Please select country/region";
    if (!formData.product) errs.product = "Please select product category";
    if (!formData.message.trim()) {
      errs.message = "Please describe your specifications and requirements";
    } else if (formData.message.trim().length < 15) {
      errs.message = "Please provide more details (minimum 15 characters)";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      country: "",
      product: "",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="relative w-full rounded-3xl bg-gradient-to-b from-white/[0.08] via-slate-900/[0.25] to-navy-950/[0.45] backdrop-blur-2xl border-2 border-amber-400/50 p-6 sm:p-9 shadow-[0_20px_60px_rgba(0,0,0,0.65),0_0_40px_rgba(229,169,60,0.25),inset_0_1px_1px_rgba(255,255,255,0.25)]">
      {/* Top Gloss Refraction Line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-amber-200/90 to-transparent" />
      
      {/* Subtle corner golden aura */}
      <div className="pointer-events-none absolute -top-10 -right-10 w-44 h-44 bg-amber-400/15 rounded-full blur-3xl" />

      {isSubmitted ? (
        <div className="py-12 px-4 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 mx-auto rounded-full bg-amber-400/20 border-2 border-amber-400 flex items-center justify-center text-amber-300 shadow-[0_0_30px_rgba(229,169,60,0.5)]">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-300">
              Inquiry Dispatched Successfully
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Thank You, {formData.name}
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Your export inquiry for <strong className="text-amber-200">{formData.product}</strong> has been routed to our international trade division. A dedicated export account manager will review your specs and contact you within 24 business hours.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/15 max-w-md mx-auto text-left text-xs space-y-1.5 text-slate-300 backdrop-blur-md">
            <div><strong className="text-white">Organization:</strong> {formData.company}</div>
            <div><strong className="text-white">Destination:</strong> {formData.country}</div>
            <div><strong className="text-white">Contact Email:</strong> {formData.email}</div>
          </div>

          <div className="pt-2">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 shadow-lg hover:brightness-105 transition-all"
            >
              <span>Submit Another Inquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
          {/* Form Header */}
          <div className="flex items-center gap-3 pb-3 border-b border-white/10">
            <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
              <Send className="w-4 h-4" />
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Export Inquiry Form
            </h2>
          </div>

          {/* Row 1: Name & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-200 mb-1.5">
                Your Name <span className="text-amber-400">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Johnathan Miller"
                className={`w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border text-sm text-white placeholder-slate-400 backdrop-blur-md focus:outline-none focus:ring-1 transition-all ${
                  errors.name
                    ? "border-rose-500/80 focus:ring-rose-400"
                    : "border-white/20 focus:border-amber-400 focus:ring-amber-400/40 focus:bg-white/[0.08]"
                }`}
              />
              {errors.name && (
                <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 shrink-0" /> {errors.name}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-200 mb-1.5">
                Company Name <span className="text-amber-400">*</span>
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. Global Imports Ltd."
                className={`w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border text-sm text-white placeholder-slate-400 backdrop-blur-md focus:outline-none focus:ring-1 transition-all ${
                  errors.company
                    ? "border-rose-500/80 focus:ring-rose-400"
                    : "border-white/20 focus:border-amber-400 focus:ring-amber-400/40 focus:bg-white/[0.08]"
                }`}
              />
              {errors.company && (
                <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 shrink-0" /> {errors.company}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-200 mb-1.5">
                Email Address <span className="text-amber-400">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@company.com"
                className={`w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border text-sm text-white placeholder-slate-400 backdrop-blur-md focus:outline-none focus:ring-1 transition-all ${
                  errors.email
                    ? "border-rose-500/80 focus:ring-rose-400"
                    : "border-white/20 focus:border-amber-400 focus:ring-amber-400/40 focus:bg-white/[0.08]"
                }`}
              />
              {errors.email && (
                <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 shrink-0" /> {errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-200 mb-1.5">
                Phone / WhatsApp <span className="text-amber-400">*</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 (555) 000-0000"
                className={`w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border text-sm text-white placeholder-slate-400 backdrop-blur-md focus:outline-none focus:ring-1 transition-all ${
                  errors.phone
                    ? "border-rose-500/80 focus:ring-rose-400"
                    : "border-white/20 focus:border-amber-400 focus:ring-amber-400/40 focus:bg-white/[0.08]"
                }`}
              />
              {errors.phone && (
                <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 shrink-0" /> {errors.phone}
                </p>
              )}
            </div>
          </div>

          {/* Row 3: Country / Region & Product Interest */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-200 mb-1.5">
                Country / Region <span className="text-amber-400">*</span>
              </label>
              <div className="relative">
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#081226] border text-sm text-white focus:outline-none focus:ring-1 appearance-none cursor-pointer transition-all ${
                    errors.country
                      ? "border-rose-500/80 focus:ring-rose-400"
                      : "border-white/20 focus:border-amber-400 focus:ring-amber-400/40"
                  }`}
                >
                  <option value="" disabled className="bg-[#081226] text-slate-400">
                    Select Destination Country
                  </option>
                  {COUNTRIES.map((c) => (
                    <option key={c} value={c} className="bg-[#081226] text-white">
                      {c}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
                  ▼
                </div>
              </div>
              {errors.country && (
                <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 shrink-0" /> {errors.country}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-200 mb-1.5">
                Product Interest <span className="text-amber-400">*</span>
              </label>
              <div className="relative">
                <select
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#081226] border text-sm text-white focus:outline-none focus:ring-1 appearance-none cursor-pointer transition-all ${
                    errors.product
                      ? "border-rose-500/80 focus:ring-rose-400"
                      : "border-white/20 focus:border-amber-400 focus:ring-amber-400/40"
                  }`}
                >
                  <option value="" disabled className="bg-[#081226] text-slate-400">
                    Select Product Category
                  </option>
                  {PRODUCTS.map((p) => (
                    <option key={p} value={p} className="bg-[#081226] text-white">
                      {p}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
                  ▼
                </div>
              </div>
              {errors.product && (
                <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 shrink-0" /> {errors.product}
                </p>
              )}
            </div>
          </div>

          {/* Row 4: Message / Requirements */}
          <div>
            <label className="block text-xs font-medium text-slate-200 mb-1.5">
              Tell us your requirement (Product, Quantity, Specifications, etc.) <span className="text-amber-400">*</span>
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Please provide details such as expected order volume, target delivery timeframe, fabric weight / composition, private label requirements..."
              className={`w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border text-sm text-white placeholder-slate-400 backdrop-blur-md focus:outline-none focus:ring-1 transition-all resize-none ${
                errors.message
                  ? "border-rose-500/80 focus:ring-rose-400"
                  : "border-white/20 focus:border-amber-400 focus:ring-amber-400/40 focus:bg-white/[0.08]"
              }`}
            />
            {errors.message && (
              <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" /> {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 shadow-[0_0_20px_rgba(229,169,60,0.4)] hover:shadow-[0_0_30px_rgba(229,169,60,0.6)] hover:brightness-105 active:scale-95 disabled:opacity-60 transition-all duration-200"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-navy-950 border-t-transparent rounded-full animate-spin" />
                  <span>Processing Inquiry...</span>
                </>
              ) : (
                <>
                  <span>Send Inquiry</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
