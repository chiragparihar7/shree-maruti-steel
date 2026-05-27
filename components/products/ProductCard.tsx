"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
}

const ProductCard = ({
  title,
  description,
  image,
  icon: Icon,
}: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-[34px] border border-orange-100/70 bg-white/80 backdrop-blur-xl shadow-[0_10px_60px_rgba(249,115,22,0.08)] transition-all duration-700 hover:-translate-y-3 hover:border-orange-200 hover:shadow-[0_25px_80px_rgba(249,115,22,0.18)]"
    >
      {/* PREMIUM GLOW */}
      <div className="absolute -left-20 top-0 h-40 w-40 rounded-full bg-orange-300/20 blur-[90px]" />

      <div className="absolute -right-16 bottom-0 h-44 w-44 rounded-full bg-orange-400/15 blur-[90px]" />

      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* IMAGE */}
      <div className="relative h-[280px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-[1600ms] group-hover:scale-110"
        />

        {/* IMAGE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* TOP BADGE */}
        <div className="absolute right-5 top-5">
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-orange-300" />

            <span className="text-[11px] font-semibold uppercase tracking-[2px] text-white">
              Premium Quality
            </span>
          </div>
        </div>

        {/* ICON */}
        <div className="absolute left-6 top-6">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/90 text-orange-500 shadow-[0_10px_40px_rgba(249,115,22,0.25)] backdrop-blur-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
            <Icon className="h-8 w-8" />

            {/* ICON GLOW */}
            <div className="absolute inset-0 rounded-2xl bg-orange-400/10 blur-xl" />
          </div>
        </div>

        {/* BOTTOM TITLE OVER IMAGE */}
        <div className="absolute bottom-0 left-0 w-full p-6">
          <div className="max-w-[85%]">
            <h3 className="text-2xl font-black leading-tight text-white sm:text-3xl">
              {title}
            </h3>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 p-7">
        {/* SMALL LINE */}
        <div className="mb-5 flex items-center gap-3">
          <div className="h-[4px] w-14 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-24" />

          <div className="h-[4px] w-4 rounded-full bg-orange-300" />
        </div>

        {/* DESCRIPTION */}
        <p className="text-[15px] leading-7 text-zinc-600 sm:text-base">
          {description}
        </p>

        {/* BOTTOM */}
        <div className="mt-8 flex items-center justify-between">
          {/* BUTTON */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[1px] text-zinc-900 transition-all duration-300 group-hover:text-orange-500"
          >
            Request Quote

            <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-orange-50 text-orange-500 transition-all duration-500 group-hover:bg-orange-500 group-hover:text-white">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />

              {/* BUTTON GLOW */}
              <div className="absolute inset-0 bg-orange-400/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            </span>
          </Link>

          {/* MINI GLASS CARD */}
          <div className="rounded-2xl border border-orange-100 bg-orange-50/70 px-4 py-2 backdrop-blur-xl">
            <span className="text-xs font-semibold uppercase tracking-[2px] text-orange-600">
              Industrial
            </span>
          </div>
        </div>
      </div>

      {/* HOVER BORDER EFFECT */}
      <div className="pointer-events-none absolute inset-0 rounded-[34px] border border-transparent transition-all duration-500 group-hover:border-orange-300/40" />
    </motion.div>
  );
};

export default ProductCard;