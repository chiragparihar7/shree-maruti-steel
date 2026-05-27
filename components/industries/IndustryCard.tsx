"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

interface IndustryCardProps {
  title: string;
  description: string;
  image?: string;
  icon: React.ElementType;
}

const fallbackImage =
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop";

const IndustryCard = ({
  title,
  description,
  image,
  icon: Icon,
}: IndustryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-[36px] border border-orange-100/70 bg-white/80 shadow-[0_15px_60px_rgba(249,115,22,0.08)] backdrop-blur-2xl transition-all duration-700 hover:-translate-y-4 hover:border-orange-200 hover:shadow-[0_30px_100px_rgba(249,115,22,0.18)]"
    >
      {/* PREMIUM GLOW */}
      <div className="absolute -left-16 top-0 h-40 w-40 rounded-full bg-orange-300/20 blur-[90px]" />

      <div className="absolute -bottom-16 right-0 h-44 w-44 rounded-full bg-orange-400/20 blur-[90px]" />

      {/* GRID OVERLAY */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-[0.03] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* IMAGE AREA */}
      <div className="relative h-[320px] overflow-hidden">
        <Image
          src={image?.trim() ? image : fallbackImage}
          alt={title}
          fill
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw
          "
          className="object-cover transition-transform duration-[1800ms] group-hover:scale-110"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/10" />

        {/* TOP BADGE */}
        <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-xl">
          <Sparkles className="h-4 w-4 text-white" />

          <span className="text-[11px] font-bold uppercase tracking-[2px] text-white">
            Premium Industry
          </span>
        </div>

        {/* ICON */}
        <div className="absolute right-6 top-6 flex h-16 w-16 items-center justify-center rounded-[24px] border border-white/10 bg-white/10 text-white shadow-2xl backdrop-blur-2xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-6">
          <Icon className="h-8 w-8" />
        </div>

        {/* BOTTOM CONTENT */}
        <div className="absolute bottom-0 left-0 w-full p-7">
          {/* MINI LINE */}
          <div className="mb-5 flex items-center gap-2">
            <div className="h-[4px] w-14 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-24" />

            <div className="h-[4px] w-4 rounded-full bg-orange-300" />
          </div>

          {/* TITLE */}
          <h3 className="max-w-[90%] text-3xl font-black leading-tight tracking-tight text-white transition-all duration-500 group-hover:translate-x-1">
            {title}
          </h3>
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 p-7">
        {/* DESCRIPTION */}
        <p className="text-[15px] leading-7 text-zinc-600">
          {description}
        </p>

        {/* FEATURES */}
        <div className="mt-6 flex flex-wrap gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50/70 px-4 py-2 backdrop-blur-xl">
            <ShieldCheck className="h-4 w-4 text-orange-500" />

            <span className="text-xs font-bold uppercase tracking-[1px] text-orange-600">
              Trusted Quality
            </span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50/70 px-4 py-2 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-orange-500" />

            <span className="text-xs font-bold uppercase tracking-[1px] text-orange-600">
              Industrial Grade
            </span>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-8 flex items-center justify-between">
          {/* LEFT TEXT */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[2px] text-zinc-400">
              Explore Industry
            </p>

            <h4 className="mt-1 text-lg font-black text-zinc-900">
              Engineering Solutions
            </h4>
          </div>

          {/* BUTTON */}
          <Link
            href="/contact"
            className="group/btn flex h-14 w-14 items-center justify-center rounded-[22px] bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-[0_15px_40px_rgba(249,115,22,0.35)] transition-all duration-500 hover:scale-110"
          >
            <ArrowUpRight className="h-6 w-6 transition-transform duration-500 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* HOVER BORDER */}
      <div className="pointer-events-none absolute inset-0 rounded-[36px] border border-transparent transition-all duration-700 group-hover:border-orange-300/40" />
    </motion.div>
  );
};

export default IndustryCard;