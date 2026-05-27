"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Boxes, ChevronRight } from "lucide-react";

const ProductHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] pt-14 pb-14 sm:pt-18 sm:pb-16 lg:pt-12 lg:pb-20">
      {/* Premium Orange Glow */}
      <div className="absolute left-[-60px] top-[-40px] h-[260px] w-[260px] rounded-full bg-orange-300/20 blur-[110px]" />

      <div className="absolute bottom-[-70px] right-[-50px] h-[280px] w-[280px] rounded-full bg-orange-400/20 blur-[120px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:65px_65px]" />

      {/* Floating Gradient Blur */}
      <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-orange-200/20 to-orange-400/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/70 px-4 py-2 shadow-[0_8px_30px_rgba(249,115,22,0.08)] backdrop-blur-xl">
            <Boxes className="h-4 w-4 text-orange-500" />

            <span className="text-xs font-semibold uppercase tracking-[4px] text-orange-500 sm:text-sm">
              Premium Steel Products
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mt-6 text-5xl font-black leading-none tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl">
            Industrial Steel
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Product Range
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            Explore our premium range of industrial steel products engineered
            for durability, precision, and performance across multiple
            industries and heavy-duty applications.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(249,115,22,0.35)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_14px_50px_rgba(249,115,22,0.45)]"
            >
              Request Quotation

              <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-2xl border border-orange-200 bg-white/80 px-7 py-4 text-sm font-semibold text-zinc-800 backdrop-blur-xl transition-all duration-300 hover:border-orange-300 hover:bg-orange-50"
            >
              Learn More
            </Link>
          </div>

          {/* Breadcrumb */}
          <div className="mt-10 flex flex-wrap items-center gap-2 text-sm sm:text-base">
            <Link
              href="/"
              className="font-medium text-zinc-900 transition-all duration-300 hover:text-orange-500"
            >
              Home
            </Link>

            <ChevronRight className="h-4 w-4 text-zinc-400" />

            <span className="font-medium text-orange-500">
              Products
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
    </section>
  );
};

export default ProductHero;