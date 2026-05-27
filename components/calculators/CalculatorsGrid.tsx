"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Calculator,
  ArrowRight,
} from "lucide-react";

import CalculatorCard from "./CalculatorCard";
import { calculators } from "./calculatorsData";

const CalculatorsGrid = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white py-10 sm:py-14 lg:py-12">
      {/* PREMIUM GLOW */}
      <div className="absolute left-[-120px] top-[-80px] h-[360px] w-[360px] rounded-full bg-orange-300/20 blur-[120px]" />

      <div className="absolute bottom-[-100px] right-[-120px] h-[380px] w-[380px] rounded-full bg-orange-400/20 blur-[120px]" />

      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:70px_70px]" />

      {/* CENTER GLOW */}
      <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-200/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl text-center"
        >
          {/* BADGE */}
          <div className="inline-flex items-center gap-3 rounded-full border border-orange-200/70 bg-white/80 px-5 py-2.5 shadow-[0_10px_40px_rgba(249,115,22,0.10)] backdrop-blur-xl">
            <div className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />

              <span className="relative inline-flex h-3 w-3 rounded-full bg-orange-500" />
            </div>

            <span className="text-xs font-bold uppercase tracking-[4px] text-orange-600 sm:text-sm">
              Engineering Calculators
            </span>
          </div>

          {/* HEADING */}
          <h2 className="mt-7 text-4xl font-black leading-[1.05] tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl xl:text-7xl">
            Industrial Weight
            <span className="block bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 bg-clip-text text-transparent">
              Calculators
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-8 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            Premium industrial calculators for steel pipes, sheets, round bars
            and flat bars with instant engineering weight calculations.
          </p>

          {/* MINI FEATURES */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-xl">
              <Calculator className="h-4 w-4 text-orange-500" />

              <span className="text-xs font-bold uppercase tracking-[2px] text-zinc-700">
                Instant Calculation
              </span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-orange-500" />

              <span className="text-xs font-bold uppercase tracking-[2px] text-zinc-700">
                Industrial Formula
              </span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-xl">
              <ArrowRight className="h-4 w-4 text-orange-500" />

              <span className="text-xs font-bold uppercase tracking-[2px] text-zinc-700">
                Fast Engineering Tools
              </span>
            </div>
          </div>
        </motion.div>

        {/* GRID */}
        <div className="relative mt-16 grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {/* SIDE GLOW */}
          <div className="absolute -left-20 top-20 h-52 w-52 rounded-full bg-orange-300/10 blur-[100px]" />

          <div className="absolute -right-20 bottom-20 h-52 w-52 rounded-full bg-orange-400/10 blur-[100px]" />

          {calculators.map((item, index) => (
            <CalculatorCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CalculatorsGrid;