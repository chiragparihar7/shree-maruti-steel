"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Building2,
  Factory,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    title: "Industrial Standards",
    description:
      "Products conforming to ASTM, IS and international industrial quality standards.",
    icon: ShieldCheck,
  },

  {
    title: "Trusted Quality",
    description:
      "Premium-grade industrial materials backed by strict quality assurance processes.",
    icon: Award,
  },

  {
    title: "Government Supply",
    description:
      "Trusted supplier for Government, Semi-Government and private industrial sectors.",
    icon: Building2,
  },

  {
    title: "Engineering Solutions",
    description:
      "Reliable industrial steel and engineering material solutions for critical industries.",
    icon: Factory,
  },
];

const CertificationsWhyChoose = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white py-10 sm:py-14 lg:py-12">
      {/* PREMIUM GLOW */}
      <div className="absolute left-[-120px] top-[-120px] h-[380px] w-[380px] rounded-full bg-orange-300/20 blur-[120px]" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[420px] w-[420px] rounded-full bg-orange-400/20 blur-[130px]" />

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:70px_70px]" />

      {/* TOP BLUR */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-orange-100/40 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl text-center"
        >
          {/* BADGE */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200/60 bg-white/80 px-5 py-2.5 shadow-[0_8px_30px_rgba(249,115,22,0.12)] backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-orange-500" />

            <span className="text-sm font-bold tracking-wide text-orange-600">
              Industrial Excellence & Reliability
            </span>
          </div>

          {/* TITLE */}
          <h2 className="text-4xl font-black leading-[1.05] tracking-[-0.03em] text-zinc-900 sm:text-5xl lg:text-7xl">
            Why Industries
            <span className="mt-2 block bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              Trust Us
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-zinc-600 sm:text-lg">
            Shree Maruti Steel proudly serves industries including Oil & Gas,
            Refineries, Petrochemical, Railway, Defence and Power Plants with
            certified industrial-grade steel and engineering materials.
          </p>
        </motion.div>

        {/* FEATURES GRID */}
        <div className="mt-20 grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 70,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="group relative h-full overflow-hidden rounded-[38px] border border-white/60 bg-white/70 p-7 backdrop-blur-2xl shadow-[0_15px_60px_rgba(0,0,0,0.06)] transition-all duration-700 hover:border-orange-200 hover:shadow-[0_30px_100px_rgba(249,115,22,0.18)] sm:p-8"
              >
                {/* CARD GLOW */}
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-orange-300/20 blur-[120px] transition-all duration-700 group-hover:bg-orange-400/25" />

                <div className="absolute -bottom-24 -left-24 h-60 w-60 rounded-full bg-amber-200/20 blur-[120px]" />

                {/* SHINE EFFECT */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <div className="absolute -left-[120%] top-0 h-full w-[120%] rotate-12 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-1000 group-hover:left-[120%]" />
                </div>

                {/* NOISE TEXTURE */}
                <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#f97316_1px,transparent_1px)] [background-size:18px_18px]" />

                {/* TOP */}
                <div className="relative z-10 flex items-start justify-between">
                  {/* ICON */}
                  <div className="relative">
                    {/* ICON GLOW */}
                    <div className="absolute inset-0 rounded-[30px] bg-orange-500/30 blur-2xl transition-all duration-700 group-hover:scale-125" />

                    <div className="relative flex h-20 w-20 items-center justify-center rounded-[30px] border border-white/20 bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 text-white shadow-[0_20px_50px_rgba(249,115,22,0.35)] transition-all duration-500 group-hover:rotate-3 group-hover:scale-105 sm:h-24 sm:w-24">
                      {/* OVERLAY */}
                      <div className="absolute inset-0 rounded-[30px] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_55%)]" />

                      <Icon className="relative z-10 h-10 w-10 sm:h-11 sm:w-11" />
                    </div>
                  </div>

                  {/* BADGE */}
                  <div className="inline-flex items-center gap-2 rounded-full border border-orange-100/70 bg-white/80 px-3 py-2 shadow-[0_8px_25px_rgba(249,115,22,0.08)] backdrop-blur-xl">
                    <span className="text-[10px] font-black uppercase tracking-[2px] text-orange-600">
                      Trusted
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="relative z-10 mt-10">
                  {/* SMALL LABEL */}
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-50/80 px-3 py-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-orange-500" />

                    <span className="text-[10px] font-bold uppercase tracking-[2px] text-orange-600">
                      Premium Industrial
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-2xl font-black leading-tight tracking-[-0.03em] text-zinc-900 transition-all duration-500 group-hover:text-orange-500">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-5 text-[15px] leading-8 text-zinc-600">
                    {item.description}
                  </p>
                </div>

                {/* DIVIDER */}
                <div className="relative z-10 mt-10 h-px w-full bg-gradient-to-r from-orange-200 via-orange-100 to-transparent" />

                {/* FOOTER */}
                <div className="relative z-10 mt-7 flex items-center justify-between">
                  {/* LEFT */}
                  <div className="flex items-center gap-4">
                    <div className="relative h-[5px] w-16 overflow-hidden rounded-full bg-orange-100 transition-all duration-500 group-hover:w-28">
                      <div className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500" />
                    </div>

                    <span className="text-xs font-bold uppercase tracking-[2px] text-zinc-400">
                      Certified
                    </span>
                  </div>

                  {/* ACTION */}
                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.05,
                    }}
                    className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-[22px] border border-orange-200/40 bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 text-white shadow-[0_18px_45px_rgba(249,115,22,0.35)]"
                  >
                    {/* SHINE */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.4),transparent_45%)]" />

                    <ArrowUpRight className="relative z-10 h-6 w-6 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </motion.div>
                </div>

                {/* BOTTOM HIGHLIGHT */}
                <div className="absolute inset-x-10 bottom-0 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-orange-500 via-amber-400 to-transparent transition-transform duration-700 group-hover:scale-x-100" />
              </motion.div>
            );
          })}
        </div>

        {/* PREMIUM BOTTOM STRIP */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="relative mt-24 overflow-hidden rounded-[40px] border border-orange-100 bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 p-8 shadow-[0_20px_80px_rgba(249,115,22,0.25)] sm:p-10"
        >
          {/* OVERLAY */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.35),transparent_35%)]" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-black leading-tight text-white sm:text-4xl">
                Delivering Industrial Excellence Since Day One
              </h3>

              <p className="mt-4 text-base leading-7 text-orange-50/90 sm:text-lg">
                We combine premium quality materials, certified standards and
                engineering expertise to support critical industrial operations.
              </p>
            </div>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-4 text-sm font-bold tracking-wide text-orange-600 shadow-[0_12px_35px_rgba(255,255,255,0.25)] transition-all duration-300 hover:bg-orange-50"
            >
              Explore Industries
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsWhyChoose;