"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface CategoryCardProps {
  title: string;
}

const CategoryCard = ({ title }: CategoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-[30px] border border-orange-100/70 bg-white/80 p-[1px] shadow-[0_10px_40px_rgba(249,115,22,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-200 hover:shadow-[0_20px_60px_rgba(249,115,22,0.18)]"
    >
      {/* OUTER GLOW */}
      <div className="absolute -left-10 top-0 h-28 w-28 rounded-full bg-orange-300/20 blur-[70px]" />

      <div className="absolute -right-10 bottom-0 h-28 w-28 rounded-full bg-orange-400/20 blur-[70px]" />

      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-[0.03] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:22px_22px]" />

      {/* CARD CONTENT */}
      <div className="relative z-10 flex h-full items-center justify-between rounded-[29px] bg-gradient-to-br from-white via-white to-orange-50/40 px-6 py-5">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          {/* ICON */}
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 text-white shadow-[0_10px_30px_rgba(249,115,22,0.35)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
            <Sparkles className="h-6 w-6" />

            <div className="absolute inset-0 rounded-2xl bg-white/10" />
          </div>

          {/* TEXT */}
          <div>
            <h3 className="text-lg font-black tracking-tight text-zinc-900 transition-colors duration-300 group-hover:text-orange-500 sm:text-xl">
              {title}
            </h3>

            <p className="mt-1 text-sm text-zinc-500">
              Industrial Category
            </p>
          </div>
        </div>

        {/* RIGHT BUTTON */}
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-100 bg-orange-50 text-orange-500 transition-all duration-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
          <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </div>
      </div>

      {/* HOVER BORDER */}
      <div className="pointer-events-none absolute inset-0 rounded-[30px] border border-transparent transition-all duration-500 group-hover:border-orange-300/40" />
    </motion.div>
  );
};

export default CategoryCard;