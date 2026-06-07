
// /components/product/ProductFeatures.jsx

"use client";

import { motion } from "framer-motion";

import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function ProductFeatures({ product }) {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-20 sm:py-24 lg:py-32">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:70px_70px]" />

      {/* GLOW EFFECTS */}
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[360px] w-[360px] rounded-full bg-orange-400/10 blur-[130px]" />

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
              Product Features
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
            Designed For
            <span className="block bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 bg-clip-text text-transparent">
              Industrial Excellence
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
            Premium industrial engineering products manufactured with superior
            quality standards, long operational durability and reliable
            industrial performance.
          </motion.p>
        </div>

        {/* FEATURES GRID */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {product.features?.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[32px] border border-orange-100 bg-white p-6 shadow-lg shadow-orange-100/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-orange-200/40 sm:p-8"
            >
              {/* HOVER GLOW */}
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-orange-500/10 opacity-0 blur-[80px] transition-all duration-500 group-hover:opacity-100" />

              {/* CONTENT */}
              <div className="relative z-10 flex flex-col gap-6 sm:flex-row">
                {/* ICON */}
                <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-3xl bg-orange-500/10 transition-all duration-500 group-hover:bg-orange-500">
                  <CheckCircle2 className="h-9 w-9 text-orange-500 transition-all duration-500 group-hover:text-white" />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-2xl font-black text-slate-900">
                    {feature}
                  </h3>

                  <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                    Premium industrial engineering standards with superior
                    operational efficiency, durability and reliable industrial
                    applications.
                  </p>

                  {/* MINI TAGS */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    {[
                      "Industrial Grade",
                      "Premium Quality",
                      "Reliable",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2"
                      >
                        <span className="text-xs font-bold uppercase tracking-[1px] text-orange-600">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

