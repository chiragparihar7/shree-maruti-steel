"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const ProductCTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-400 to-orange-600 py-20 sm:py-24 lg:py-28">
      {/* PREMIUM GLOW */}
      <div className="absolute left-[-120px] top-[-80px] h-[380px] w-[380px] rounded-full bg-white/10 blur-[130px]" />

      <div className="absolute bottom-[-100px] right-[-100px] h-[400px] w-[400px] rounded-full bg-black/10 blur-[130px]" />

      {/* CENTER LIGHT */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[140px]" />

      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:70px_70px]" />

      {/* TOP FADE */}
      <div className="absolute left-0 top-0 h-40 w-full bg-gradient-to-b from-white/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] border border-white/15 bg-white/10 p-8 shadow-[0_25px_100px_rgba(0,0,0,0.15)] backdrop-blur-2xl sm:p-10 lg:p-14"
        >
          {/* INNER GLOW */}
          <div className="absolute left-0 top-0 h-52 w-52 rounded-full bg-white/10 blur-[100px]" />

          <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-black/10 blur-[100px]" />

          {/* INNER GRID */}
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />

          <div className="relative z-10 flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
            {/* LEFT */}
            <div className="max-w-3xl">
              {/* BADGE */}
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 shadow-lg backdrop-blur-xl">
                <div className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />

                  <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
                </div>

                <span className="text-xs font-bold uppercase tracking-[4px] text-white sm:text-sm">
                  Premium Industrial Products
                </span>
              </div>

              {/* HEADING */}
              <h2 className="mt-7 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Need Premium
                <span className="block">
                  Industrial Steel Products?
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-7 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                Contact Shree Maruti Steel for high-quality pipes, fittings,
                flanges, valves, raw materials and complete industrial
                engineering supply solutions across India.
              </p>

              {/* FEATURES */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl">
                  <CheckCircle2 className="h-5 w-5 text-white" />

                  <span className="text-sm font-medium text-white">
                    Trusted Industrial Quality
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl">
                  <Sparkles className="h-5 w-5 text-white" />

                  <span className="text-sm font-medium text-white">
                    Fast Delivery Support
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex w-full max-w-sm flex-col gap-5">
              {/* PRIMARY BUTTON */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-white px-8 py-5 text-sm font-bold uppercase tracking-[1px] text-orange-500 shadow-[0_15px_50px_rgba(255,255,255,0.25)] transition-all duration-500 hover:scale-[1.03]"
              >
                {/* BUTTON GLOW */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-100 via-white to-orange-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="relative z-10">
                  Send Inquiry
                </span>

                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 transition-all duration-500 group-hover:bg-orange-500 group-hover:text-white">
                  <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" />
                </span>
              </Link>

              {/* CALL BUTTON */}
              <a
                href="tel:+918373912012"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-8 py-5 text-sm font-bold uppercase tracking-[1px] text-white backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:bg-white/20"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-all duration-500 group-hover:bg-white/20">
                  <PhoneCall className="h-5 w-5" />
                </span>

                Call Now
              </a>

              {/* MINI CARD */}
              <div className="rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
                    <ShieldCheck className="h-7 w-7" />
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white">
                      Trusted Supplier
                    </h4>

                    <p className="mt-1 text-sm text-white/70">
                      Premium industrial supply solutions across India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM BORDER */}
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCTA;