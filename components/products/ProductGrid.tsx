"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import ProductCard from "./ProductCard";
import { products } from "./ProductData";

const ProductGrid = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fffdfb] via-orange-50/40 to-white py-20 sm:py-24 lg:py-32">
      {/* PREMIUM GLOWS */}
      <div className="absolute left-[-100px] top-[-80px] h-[380px] w-[380px] rounded-full bg-orange-300/20 blur-[130px]" />

      <div className="absolute bottom-[-100px] right-[-120px] h-[420px] w-[420px] rounded-full bg-orange-400/20 blur-[130px]" />

      {/* CENTER LIGHT */}
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-200/10 blur-[140px]" />

      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:70px_70px]" />

      {/* TOP FADE */}
      <div className="absolute left-0 top-0 h-40 w-full bg-gradient-to-b from-white to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl text-center"
        >
          {/* PREMIUM BADGE */}
          <div className="inline-flex items-center gap-3 rounded-full border border-orange-200/70 bg-white/80 px-5 py-2.5 shadow-[0_10px_40px_rgba(249,115,22,0.10)] backdrop-blur-xl">
            <div className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />

              <span className="relative inline-flex h-3 w-3 rounded-full bg-orange-500" />
            </div>

            <span className="text-xs font-bold uppercase tracking-[4px] text-orange-600 sm:text-sm">
              Our Industrial Products
            </span>
          </div>

          {/* MAIN HEADING */}
          <h2 className="mt-7 text-4xl font-black leading-[1.05] tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl xl:text-7xl">
            Premium Industrial
            <span className="block bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 bg-clip-text text-transparent">
              Product Collection
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-8 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            Manufacturing, importing, stocking and supplying premium industrial
            steel products, piping systems, engineering materials and industrial
            solutions across India with trusted quality standards.
          </p>

          {/* MINI STATS */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-white/80 px-5 py-3 shadow-lg shadow-orange-100/40 backdrop-blur-xl">
              <ShieldCheck className="h-5 w-5 text-orange-500" />

              <span className="text-sm font-semibold text-zinc-700">
                Trusted Industrial Quality
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-white/80 px-5 py-3 shadow-lg shadow-orange-100/40 backdrop-blur-xl">
              <Sparkles className="h-5 w-5 text-orange-500" />

              <span className="text-sm font-semibold text-zinc-700">
                1000+ Industrial Products
              </span>
            </div>
          </div>
        </motion.div>

        {/* PRODUCT GRID */}
        <div className="relative mt-16">
          {/* SIDE BLUR */}
          <div className="absolute -left-24 top-20 h-60 w-60 rounded-full bg-orange-300/10 blur-[120px]" />

          <div className="absolute -right-24 bottom-20 h-60 w-60 rounded-full bg-orange-400/10 blur-[120px]" />

          <div className="relative z-10 grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                image={product.image}
                icon={product.icon}
              />
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative mt-20 overflow-hidden rounded-[36px] border border-orange-100 bg-white/80 p-8 shadow-[0_20px_80px_rgba(249,115,22,0.10)] backdrop-blur-xl sm:p-10 lg:p-14"
        >
          {/* CARD GLOW */}
          <div className="absolute left-0 top-0 h-52 w-52 rounded-full bg-orange-300/20 blur-[100px]" />

          <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-orange-400/20 blur-[100px]" />

          {/* GRID */}
          <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:28px_28px]" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* LEFT */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2">
                <Sparkles className="h-4 w-4 text-orange-500" />

                <span className="text-xs font-bold uppercase tracking-[3px] text-orange-600">
                  Premium Industrial Supply
                </span>
              </div>

              <h3 className="mt-5 text-3xl font-black leading-tight text-zinc-900 sm:text-4xl">
                Looking for Custom Industrial Products?
              </h3>

              <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg">
                We provide premium industrial steel materials, piping systems,
                fittings and engineering solutions tailored for heavy-duty
                industrial applications.
              </p>
            </div>

            {/* BUTTON */}
            <div className="flex-shrink-0">
              <button className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-7 py-4 text-sm font-bold uppercase tracking-[1px] text-white shadow-[0_15px_50px_rgba(249,115,22,0.35)] transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(249,115,22,0.45)]">
                Request Quotation

                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-xl transition-all duration-500 group-hover:bg-white/20">
                  <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGrid;