"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Calculator,
} from "lucide-react";

interface CalculatorCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const CalculatorCard = ({
  title,
  description,
  icon: Icon,
}: CalculatorCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-[36px] border border-orange-100/70 bg-white/80 p-8 shadow-[0_15px_60px_rgba(249,115,22,0.08)] backdrop-blur-2xl transition-all duration-700 hover:-translate-y-4 hover:border-orange-200 hover:shadow-[0_30px_100px_rgba(249,115,22,0.18)]"
    >
      {/* PREMIUM GLOW */}
      <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-orange-300/20 blur-[90px]" />

      <div className="absolute -bottom-10 right-0 h-40 w-40 rounded-full bg-orange-400/20 blur-[90px]" />

      {/* GRID OVERLAY */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-[0.03] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* TOP */}
      <div className="relative z-10 flex items-start justify-between">
        {/* ICON */}
        <div className="relative flex h-20 w-20 items-center justify-center rounded-[28px] bg-gradient-to-br from-orange-500 via-orange-400 to-orange-500 text-white shadow-[0_15px_40px_rgba(249,115,22,0.35)] transition-all duration-700 group-hover:scale-110 group-hover:rotate-3">
          <Icon className="h-10 w-10" />

          {/* INNER SHINE */}
          <div className="absolute inset-0 rounded-[28px] bg-white/10" />
        </div>

        {/* MINI BADGE */}
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50/80 px-3 py-2 backdrop-blur-xl">
          <Sparkles className="h-3.5 w-3.5 text-orange-500" />

          <span className="text-[11px] font-bold uppercase tracking-[2px] text-orange-600">
            Premium
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mt-8">
        {/* SMALL TOP TEXT */}
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white/70 px-3 py-2 shadow-sm backdrop-blur-xl">
          <Calculator className="h-4 w-4 text-orange-500" />

          <span className="text-[11px] font-bold uppercase tracking-[2px] text-zinc-600">
            Steel Calculator
          </span>
        </div>

        {/* TITLE */}
        <h3 className="mt-5 text-3xl font-black leading-tight tracking-tight text-zinc-900 transition-all duration-500 group-hover:text-orange-500">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-5 text-[15px] leading-7 text-zinc-600">
          {description}
        </p>
      </div>

      {/* BOTTOM */}
      <div className="relative z-10 mt-10 flex items-center justify-between">
        {/* LEFT */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[3px] text-zinc-400">
            Instant Result
          </p>

          <div className="mt-3 flex items-center gap-2">
            <div className="h-[4px] w-16 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-28" />

            <div className="h-[4px] w-4 rounded-full bg-orange-300" />
          </div>
        </div>

        {/* BUTTON */}
        <div className="group/btn flex h-14 w-14 items-center justify-center rounded-[22px] bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-[0_15px_40px_rgba(249,115,22,0.35)] transition-all duration-500 hover:scale-110">
          <ArrowUpRight className="h-6 w-6 transition-transform duration-500 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
        </div>
      </div>

      {/* HOVER BORDER */}
      <div className="pointer-events-none absolute inset-0 rounded-[36px] border border-transparent transition-all duration-700 group-hover:border-orange-300/40" />
    </motion.div>
  );
};

export default CalculatorCard;