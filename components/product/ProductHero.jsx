
// /components/product/ProductHero.jsx

"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Download,
  ShieldCheck,
  BadgeCheck,
  Factory,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function ProductHero({ product }) {
  return (
    <section className="relative overflow-hidden bg-[#050816]">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src={product.banner || product.image}
          alt={product.title}
          fill
          priority
          className="object-cover opacity-[0.08]"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#081120]/95 to-[#050816]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:70px_70px]" />

      {/* GLOW */}
      <div className="absolute left-[-120px] top-[-120px] h-[380px] w-[380px] rounded-full bg-orange-500/20 blur-[140px]" />

      <div className="absolute bottom-[-150px] right-[-120px] h-[420px] w-[420px] rounded-full bg-orange-400/20 blur-[150px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1280px] items-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full">
          {/* TOP BREADCRUMB */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="/"
              className="text-sm font-semibold uppercase tracking-[2px] text-orange-400 transition hover:text-orange-300"
            >
              Home
            </Link>

            <span className="text-orange-500">/</span>

            <Link
              href="/products"
              className="text-sm font-semibold uppercase tracking-[2px] text-orange-400 transition hover:text-orange-300"
            >
              Products
            </Link>

            <span className="text-orange-500">/</span>

            <span className="text-sm font-bold uppercase tracking-[2px] text-white">
              {product.title}
            </span>
          </motion.div>

          {/* CENTER TITLE */}
          <div className="mx-auto max-w-5xl text-center">
            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 rounded-full border border-orange-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl"
            >
              <Sparkles className="h-5 w-5 text-orange-500" />

              <span className="text-xs font-bold uppercase tracking-[3px] text-orange-300">
                Premium Industrial Product
              </span>
            </motion.div>

            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              {product.title}

              <span className="mt-4 block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                Industrial Solutions
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mx-auto mt-8 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9"
            >
              {product.description}
            </motion.p>

            {/* FEATURES */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {[
                "Industrial Grade",
                "ISO Certified",
                "Premium Quality",
                "Fast Delivery",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl"
                >
                  <CheckCircle2 className="h-5 w-5 text-orange-500" />

                  <span className="text-sm font-semibold text-white">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-5"
            >
              {/* DOWNLOAD */}
              <button className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-5 text-sm font-bold uppercase tracking-[1px] text-white shadow-[0_20px_60px_rgba(249,115,22,0.35)] transition-all duration-500 hover:scale-[1.03]">
                <span className="relative z-10 flex items-center gap-3">
                  Download Brochure

                  <Download className="h-5 w-5 transition-transform duration-500 group-hover:translate-y-1" />
                </span>

                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </button>

              {/* CONTACT */}
              <button className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 text-sm font-bold uppercase tracking-[1px] text-white backdrop-blur-xl transition-all duration-500 hover:border-orange-500 hover:bg-orange-500/10">
                Contact Us

                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 transition-all duration-500 group-hover:bg-orange-500">
                  <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" />
                </span>
              </button>
            </motion.div>
          </div>

          {/* BOTTOM IMAGE + STATS */}
          <div className="relative mt-20">
            {/* MAIN IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto max-w-6xl overflow-hidden rounded-[40px] border border-white/10 bg-white/5 shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent" />

              <Image
                src={product.image}
                alt={product.title}
                width={1400}
                height={800}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* OVERLAY CARD */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 sm:p-12">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[3px] text-orange-400">
                      Industrial Product
                    </p>

                    <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">
                      {product.title}
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl">
                      <ShieldCheck className="h-7 w-7 text-orange-500" />

                      <h4 className="mt-3 text-lg font-black text-white">
                        Premium Quality
                      </h4>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl">
                      <BadgeCheck className="h-7 w-7 text-orange-500" />

                      <h4 className="mt-3 text-lg font-black text-white">
                        Certified Material
                      </h4>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl">
                      <Factory className="h-7 w-7 text-orange-500" />

                      <h4 className="mt-3 text-lg font-black text-white">
                        Industrial Grade
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FLOATING STATS */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur-xl">
                <h3 className="text-4xl font-black text-white">
                  100%
                </h3>

                <p className="mt-3 text-sm font-medium uppercase tracking-[2px] text-slate-300">
                  Quality Tested
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur-xl">
                <h3 className="text-4xl font-black text-white">
                  ISO
                </h3>

                <p className="mt-3 text-sm font-medium uppercase tracking-[2px] text-slate-300">
                  Certified
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur-xl">
                <h3 className="text-4xl font-black text-white">
                  PAN
                </h3>

                <p className="mt-3 text-sm font-medium uppercase tracking-[2px] text-slate-300">
                  India Supply
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur-xl">
                <h3 className="text-4xl font-black text-white">
                  24/7
                </h3>

                <p className="mt-3 text-sm font-medium uppercase tracking-[2px] text-slate-300">
                  Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

