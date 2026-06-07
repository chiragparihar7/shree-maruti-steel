
// /components/product/ProductCTA.jsx

"use client";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  ShieldCheck,
  Truck,
  BadgeCheck,
} from "lucide-react";

export default function ProductCTA() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-20 sm:py-24 lg:py-32">
      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:70px_70px]" />

      {/* GLOW */}
      <div className="absolute left-[-120px] top-[-120px] h-[340px] w-[340px] rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="absolute bottom-[-140px] right-[-120px] h-[380px] w-[380px] rounded-full bg-orange-400/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-[0_30px_100px_rgba(15,23,42,0.35)]"
        >
          {/* INNER GRID */}
          <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
            {/* LEFT SIDE */}
            <div className="relative overflow-hidden p-8 text-white sm:p-10 lg:p-16">
              {/* ORANGE GLOW */}
              <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-orange-500/20 blur-[120px]" />

              {/* BADGE */}
              <div className="relative z-10 inline-flex items-center gap-3 rounded-full border border-orange-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl">
                <Sparkles className="h-5 w-5 text-orange-500" />

                <span className="text-xs font-bold uppercase tracking-[3px] text-orange-300">
                  Industrial Product Supplier
                </span>
              </div>

              {/* TITLE */}
              <h2 className="relative z-10 mt-8 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Need Industrial Products
                <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  For Your Project?
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p className="relative z-10 mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
                Contact us today for premium industrial materials, competitive
                pricing, bulk supply support and fast PAN India delivery for
                engineering and industrial applications.
              </p>

              {/* FEATURES */}
              <div className="relative z-10 mt-10 grid gap-5 sm:grid-cols-3">
                {/* CARD */}
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <ShieldCheck className="h-10 w-10 text-orange-500" />

                  <h4 className="mt-5 text-lg font-black text-white">
                    Premium Quality
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    Industrial-grade certified products.
                  </p>
                </div>

                {/* CARD */}
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <Truck className="h-10 w-10 text-orange-500" />

                  <h4 className="mt-5 text-lg font-black text-white">
                    Fast Delivery
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    PAN India logistics support available.
                  </p>
                </div>

                {/* CARD */}
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <BadgeCheck className="h-10 w-10 text-orange-500" />

                  <h4 className="mt-5 text-lg font-black text-white">
                    Certified Material
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    ASTM & ISO standard industrial supply.
                  </p>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="relative z-10 mt-10 flex flex-col gap-5 sm:flex-row">
                {/* BUTTON */}
                <button className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-7 py-4 text-sm font-bold uppercase tracking-[1px] text-white shadow-[0_15px_50px_rgba(249,115,22,0.35)] transition-all duration-500 hover:scale-[1.03]">
                  Request Quotation

                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-all duration-500 group-hover:bg-white/20">
                    <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                </button>

                {/* BUTTON */}
                <button className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-[1px] text-white backdrop-blur-xl transition-all duration-500 hover:border-orange-500 hover:bg-orange-500/10">
                  Contact Sales Team

                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-all duration-500 group-hover:bg-orange-500">
                    <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative border-t border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10 lg:border-l lg:border-t-0 lg:p-16">
              {/* CONTACT HEADER */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[3px] text-orange-500">
                  Contact Information
                </p>

                <h3 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl">
                  Let’s Discuss Your
                  <span className="block text-orange-500">
                    Industrial Requirements
                  </span>
                </h3>
              </div>

              {/* CONTACT LIST */}
              <div className="mt-10 space-y-6">
                {/* PHONE */}
                <div className="group flex items-start gap-5 rounded-[30px] border border-white/10 bg-slate-900/60 p-6 transition-all duration-500 hover:border-orange-500/40 hover:bg-slate-900">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10 transition-all duration-500 group-hover:bg-orange-500">
                    <Phone className="h-8 w-8 text-orange-500 transition-all duration-500 group-hover:text-white" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[2px] text-slate-400">
                      Call Us
                    </p>

                    <h4 className="mt-2 text-xl font-black text-white">
                      +91 98765 43210
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      Speak directly with our industrial sales team.
                    </p>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="group flex items-start gap-5 rounded-[30px] border border-white/10 bg-slate-900/60 p-6 transition-all duration-500 hover:border-orange-500/40 hover:bg-slate-900">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10 transition-all duration-500 group-hover:bg-orange-500">
                    <Mail className="h-8 w-8 text-orange-500 transition-all duration-500 group-hover:text-white" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[2px] text-slate-400">
                      Email Address
                    </p>

                    <h4 className="mt-2 break-all text-xl font-black text-white">
                      info@yourcompany.com
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      Send your product inquiries and quotation requests.
                    </p>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="group flex items-start gap-5 rounded-[30px] border border-white/10 bg-slate-900/60 p-6 transition-all duration-500 hover:border-orange-500/40 hover:bg-slate-900">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10 transition-all duration-500 group-hover:bg-orange-500">
                    <MapPin className="h-8 w-8 text-orange-500 transition-all duration-500 group-hover:text-white" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[2px] text-slate-400">
                      Office Location
                    </p>

                    <h4 className="mt-2 text-xl font-black text-white">
                      Ahmedabad, Gujarat
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      Serving industrial projects and engineering sectors across India.
                    </p>
                  </div>
                </div>
              </div>

              {/* BOTTOM BUTTON */}
              <button className="group mt-10 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-7 py-5 text-sm font-bold uppercase tracking-[1px] text-white shadow-[0_15px_50px_rgba(249,115,22,0.30)] transition-all duration-500 hover:scale-[1.02]">
                Get Instant Quotation

                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-all duration-500 group-hover:bg-white/20">
                  <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

