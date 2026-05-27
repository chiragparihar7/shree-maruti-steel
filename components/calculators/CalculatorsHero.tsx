"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calculator,
  ChevronRight,
} from "lucide-react";

const CalculatorsHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] pt-14 pb-16 sm:pt-18 sm:pb-20 lg:pt-16 lg:pb-24">
      {/* GLOW */}
      <div className="absolute left-[-100px] top-[-80px] h-[320px] w-[320px] rounded-full bg-orange-300/20 blur-[120px]" />

      <div className="absolute bottom-[-80px] right-[-100px] h-[320px] w-[320px] rounded-full bg-orange-400/20 blur-[120px]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:65px_65px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          {/* BADGE */}
          <div className="inline-flex items-center gap-3 rounded-full border border-orange-200 bg-white/80 px-5 py-2.5 shadow-lg shadow-orange-100/40 backdrop-blur-xl">
            <Calculator className="h-4 w-4 text-orange-500" />

            <span className="text-xs font-bold uppercase tracking-[4px] text-orange-600 sm:text-sm">
              Industrial Calculators
            </span>
          </div>

          {/* HEADING */}
          <h1 className="mt-7 text-5xl font-black leading-none tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl">
            Weight
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Calculators
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-7 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            Calculate industrial steel pipe, sheet, round bar and flat bar
            weight instantly with our premium engineering calculators.
          </p>

          {/* BREADCRUMB */}
          <div className="mt-10 flex items-center gap-3 text-sm sm:text-base">
            <Link
              href="/"
              className="font-medium text-zinc-900 transition-colors duration-300 hover:text-orange-500"
            >
              Home
            </Link>

            <ChevronRight className="h-4 w-4 text-zinc-400" />

            <span className="font-medium text-orange-500">
              Calculators
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CalculatorsHero;