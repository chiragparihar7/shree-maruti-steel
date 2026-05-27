"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

interface CertificateCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const CertificateCard = ({
  title,
  description,
  icon: Icon,
}: CertificateCardProps) => {
  return (
    <motion.div
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
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
      }}
      className="group relative h-full overflow-hidden rounded-[38px] border border-white/60 bg-white/70 p-7 backdrop-blur-2xl shadow-[0_15px_60px_rgba(0,0,0,0.06)] transition-all duration-700 hover:border-orange-200/70 hover:shadow-[0_30px_100px_rgba(249,115,22,0.18)] sm:p-8"
    >
      {/* PREMIUM BORDER GLOW */}
      <div className="absolute inset-0 rounded-[38px] border border-orange-100/40 opacity-0 transition-all duration-700 group-hover:opacity-100" />

      {/* TOP RIGHT GLOW */}
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-orange-300/20 blur-[120px] transition-all duration-700 group-hover:bg-orange-400/25" />

      {/* BOTTOM LEFT GLOW */}
      <div className="absolute -bottom-24 -left-24 h-60 w-60 rounded-full bg-amber-200/20 blur-[120px]" />

      {/* SHINE EFFECT */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <div className="absolute -left-[120%] top-0 h-full w-[120%] rotate-12 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-1000 group-hover:left-[120%]" />
      </div>

      {/* NOISE TEXTURE */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#f97316_1px,transparent_1px)] [background-size:18px_18px]" />

      {/* HEADER */}
      <div className="relative z-10 flex items-start justify-between gap-4">
        {/* ICON BOX */}
        <div className="relative">
          {/* ICON GLOW */}
          <div className="absolute inset-0 rounded-[30px] bg-orange-500/30 blur-2xl transition-all duration-700 group-hover:scale-125" />

          <div className="relative flex h-20 w-20 items-center justify-center rounded-[30px] border border-white/20 bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 text-white shadow-[0_20px_50px_rgba(249,115,22,0.35)] transition-all duration-500 group-hover:rotate-3 group-hover:scale-105 sm:h-24 sm:w-24">
            {/* INNER OVERLAY */}
            <div className="absolute inset-0 rounded-[30px] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_55%)]" />

            <Icon className="relative z-10 h-10 w-10 sm:h-11 sm:w-11" />
          </div>
        </div>

        {/* VERIFIED BADGE */}
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          className="inline-flex items-center gap-2 rounded-full border border-orange-100/70 bg-white/80 px-4 py-2 shadow-[0_8px_25px_rgba(249,115,22,0.08)] backdrop-blur-xl"
        >
          <ShieldCheck className="h-4 w-4 text-orange-500" />

          <span className="text-[11px] font-black uppercase tracking-[2px] text-orange-600">
            Certified
          </span>
        </motion.div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mt-10">
        {/* MINI LABEL */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-50/80 px-3 py-1.5">
          <Sparkles className="h-3.5 w-3.5 text-orange-500" />

          <span className="text-[10px] font-bold uppercase tracking-[2px] text-orange-600">
            Industrial Standard
          </span>
        </div>

        {/* TITLE */}
        <h3 className="text-2xl font-black leading-tight tracking-[-0.03em] text-zinc-900 transition-all duration-500 group-hover:text-orange-500 sm:text-3xl">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-5 text-[15px] leading-8 text-zinc-600 sm:text-base">
          {description}
        </p>
      </div>

      {/* DIVIDER */}
      <div className="relative z-10 mt-10">
        <div className="h-px w-full bg-gradient-to-r from-orange-200 via-orange-100 to-transparent" />
      </div>

      {/* FOOTER */}
      <div className="relative z-10 mt-7 flex items-center justify-between">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-4">
          {/* ANIMATED LINE */}
          <div className="relative h-[5px] w-16 overflow-hidden rounded-full bg-orange-100 transition-all duration-500 group-hover:w-28">
            <div className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500" />
          </div>

          <span className="text-xs font-bold uppercase tracking-[2px] text-zinc-400">
            Quality Assured
          </span>
        </div>

        {/* BUTTON */}
        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.05,
          }}
          className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-[22px] border border-orange-200/40 bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 text-white shadow-[0_18px_45px_rgba(249,115,22,0.35)]"
        >
          {/* BUTTON SHINE */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.4),transparent_45%)]" />

          <ArrowUpRight className="relative z-10 h-6 w-6 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </motion.div>
      </div>

      {/* BOTTOM HIGHLIGHT */}
      <div className="absolute inset-x-10 bottom-0 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-orange-500 via-amber-400 to-transparent transition-transform duration-700 group-hover:scale-x-100" />
    </motion.div>
  );
};

export default CertificateCard;