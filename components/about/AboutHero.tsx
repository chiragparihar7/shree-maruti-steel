"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] pt-14 pb-14 sm:pt-18 sm:pb-16 lg:pt-12 lg:pb-20">
      {/* Soft Glow */}
      <div className="absolute left-0 top-0 h-[220px] w-[220px] bg-orange-300/15 blur-[90px]" />

      <div className="absolute right-0 bottom-0 h-[240px] w-[240px] bg-orange-400/15 blur-[90px]" />

      {/* Minimal Grid */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:65px_65px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {/* Small Top Text */}
          <p className="text-xs font-semibold uppercase tracking-[5px] text-orange-500 sm:text-sm">
            Industrial Steel Supplier
          </p>

          {/* Main Heading */}
          <h1 className="mt-5 text-5xl font-black leading-none text-zinc-900 sm:text-6xl lg:text-7xl">
            About Us
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            Delivering premium industrial steel products with trusted quality,
            reliable supply, and modern industrial solutions.
          </p>

          {/* Breadcrumb */}
          <div className="mt-7 flex items-center gap-3 text-sm sm:text-base">
            <Link
              href="/"
              className="font-medium text-zinc-900 transition-all duration-300 hover:text-orange-500"
            >
              Home
            </Link>

            <span className="text-zinc-400">/</span>

            <span className="text-orange-500">
              About
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-orange-100" />
    </section>
  );
};

export default AboutHero;