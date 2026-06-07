
// /components/product/ProductOverview.jsx

"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import {
  ShieldCheck,
  Factory,
  BadgeCheck,
  CheckCircle2,
  Truck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function ProductOverview({ product }) {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-20 sm:py-24 lg:py-32">
      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:70px_70px]" />

      {/* GLOW */}
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="absolute bottom-[-150px] right-[-120px] h-[380px] w-[380px] rounded-full bg-orange-400/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* TOP HEADER */}
        <div className="mx-auto max-w-4xl text-center">
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 rounded-full border border-orange-200 bg-white px-5 py-3 shadow-lg shadow-orange-100/40"
          >
            <Sparkles className="h-5 w-5 text-orange-500" />

            <span className="text-xs font-bold uppercase tracking-[3px] text-orange-600">
              Product Overview
            </span>
          </motion.div>

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 text-4xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Premium Industrial
            <span className="block bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 bg-clip-text text-transparent">
              Engineering Products
            </span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9"
          >
            {product.overview}
          </motion.p>
        </div>

        {/* MAIN GRID */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            {/* MAIN IMAGE CARD */}
            <div className="relative overflow-hidden rounded-[34px] border border-white bg-white shadow-[0_25px_80px_rgba(15,23,42,0.12)]">
              {/* IMAGE */}
              <div className="relative h-[320px] sm:h-[420px] lg:h-[560px] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* BOTTOM INFO */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                  <div className="rounded-[28px] border border-white/10 bg-black/40 p-5 backdrop-blur-xl sm:p-7">
                    <p className="text-xs font-bold uppercase tracking-[3px] text-orange-400">
                      Industrial Product
                    </p>

                    <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                      {product.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      Premium industrial engineering products with superior quality and reliable performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MINI STATS */}
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                {
                  title: "100%",
                  sub: "Quality Tested",
                },

                {
                  title: "ISO",
                  sub: "Certified",
                },

                {
                  title: "PAN",
                  sub: "India Supply",
                },

                {
                  title: "24/7",
                  sub: "Support",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-orange-100 bg-white p-5 text-center shadow-lg shadow-orange-100/20"
                >
                  <h4 className="text-2xl font-black text-slate-900 sm:text-3xl">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-xs font-semibold uppercase tracking-[2px] text-slate-500">
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            {/* FEATURES */}
            <div className="grid gap-5 sm:grid-cols-2">
              {/* CARD */}
              <div className="group rounded-[30px] border border-orange-100 bg-white p-6 shadow-lg shadow-orange-100/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-orange-200/50 sm:p-7">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 transition-all duration-500 group-hover:bg-orange-500">
                  <ShieldCheck className="h-8 w-8 text-orange-500 transition-all duration-500 group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-black text-slate-900">
                  Premium Quality
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Manufactured with superior industrial-grade materials for long-lasting performance.
                </p>
              </div>

              {/* CARD */}
              <div className="group rounded-[30px] border border-orange-100 bg-white p-6 shadow-lg shadow-orange-100/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-orange-200/50 sm:p-7">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 transition-all duration-500 group-hover:bg-orange-500">
                  <BadgeCheck className="h-8 w-8 text-orange-500 transition-all duration-500 group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-black text-slate-900">
                  Certified Products
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Industrial products tested and certified according to international standards.
                </p>
              </div>

              {/* CARD */}
              <div className="group rounded-[30px] border border-orange-100 bg-white p-6 shadow-lg shadow-orange-100/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-orange-200/50 sm:p-7">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 transition-all duration-500 group-hover:bg-orange-500">
                  <Factory className="h-8 w-8 text-orange-500 transition-all duration-500 group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-black text-slate-900">
                  Industrial Supply
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Bulk stock availability with reliable industrial project support.
                </p>
              </div>

              {/* CARD */}
              <div className="group rounded-[30px] border border-orange-100 bg-white p-6 shadow-lg shadow-orange-100/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-orange-200/50 sm:p-7">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 transition-all duration-500 group-hover:bg-orange-500">
                  <Truck className="h-8 w-8 text-orange-500 transition-all duration-500 group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-black text-slate-900">
                  Fast Delivery
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  PAN India delivery support with timely dispatch and logistics assistance.
                </p>
              </div>
            </div>

            {/* BRANDS SECTION */}
            <div className="mt-10 rounded-[34px] bg-gradient-to-r from-slate-900 to-slate-800 p-7 text-white shadow-[0_20px_80px_rgba(15,23,42,0.22)] sm:p-10">
              {/* TITLE */}
              <div className="flex items-center justify-between gap-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[3px] text-orange-400">
                    Trusted Manufacturers
                  </p>

                  <h3 className="mt-3 text-3xl font-black">
                    Available Brands
                  </h3>
                </div>

                <div className="hidden h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-white sm:flex">
                  <Sparkles className="h-8 w-8" />
                </div>
              </div>

              {/* BRANDS */}
              <div className="mt-8 flex flex-wrap gap-4">
                {product.brands?.map((brand, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl transition-all duration-300 hover:bg-orange-500"
                  >
                    <span className="text-sm font-bold uppercase tracking-[1px] text-white">
                      {brand}
                    </span>
                  </div>
                ))}
              </div>

              {/* ADVANTAGES */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  "High Performance Engineering",
                  "Corrosion Resistant Materials",
                  "Bulk Quantity Available",
                  "Competitive Industrial Pricing",
                  "Long Operational Life",
                  "Reliable Quality Assurance",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 text-orange-500" />

                    <span className="text-sm leading-7 text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="group mt-10 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-7 py-4 text-sm font-bold uppercase tracking-[1px] text-white shadow-[0_15px_50px_rgba(249,115,22,0.35)] transition-all duration-500 hover:scale-[1.02]">
                Request Quotation

                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-all duration-500 group-hover:bg-white/20">
                  <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

