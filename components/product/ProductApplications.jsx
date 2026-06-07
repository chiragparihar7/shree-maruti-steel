
// /components/product/ProductApplications.jsx

"use client";

import { motion } from "framer-motion";

import {
  Factory,
  Building2,
  Shield,
  Settings,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const icons = [
  Factory,
  Building2,
  Shield,
  Settings,
];

export default function ProductApplications({ product }) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-32">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:70px_70px]" />

      {/* GLOW EFFECTS */}
      <div className="absolute left-[-120px] top-[-120px] h-[340px] w-[340px] rounded-full bg-orange-500/20 blur-[130px]" />

      <div className="absolute bottom-[-140px] right-[-120px] h-[380px] w-[380px] rounded-full bg-orange-400/20 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-4xl text-center">
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 rounded-full border border-orange-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl"
          >
            <Sparkles className="h-5 w-5 text-orange-500" />

            <span className="text-xs font-bold uppercase tracking-[3px] text-orange-300">
              Industrial Applications
            </span>
          </motion.div>

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Industries
            <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              We Serve
            </span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9"
          >
            Our premium industrial products are widely used across multiple
            engineering sectors, manufacturing industries and heavy-duty
            industrial applications.
          </motion.p>
        </div>

        {/* APPLICATION GRID */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {product.applications?.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-orange-500/40 sm:p-8"
              >
                {/* HOVER GLOW */}
                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-orange-500/10 opacity-0 blur-[90px] transition-all duration-500 group-hover:opacity-100" />

                {/* ICON */}
                <div className="relative z-10 flex h-18 w-18 items-center justify-center rounded-3xl bg-orange-500/10 transition-all duration-500 group-hover:bg-orange-500">
                  <Icon className="h-9 w-9 text-orange-500 transition-all duration-500 group-hover:text-white" />
                </div>

                {/* TITLE */}
                <h3 className="relative z-10 mt-8 text-2xl font-black leading-tight text-white">
                  {item}
                </h3>

                {/* DESCRIPTION */}
                <p className="relative z-10 mt-5 text-sm leading-8 text-slate-300 sm:text-base">
                  High-performance industrial applications with superior
                  engineering standards and durable operational support.
                </p>

                {/* FOOTER */}
                <div className="relative z-10 mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                  <span className="text-xs font-bold uppercase tracking-[2px] text-orange-400">
                    Industrial Use
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 transition-all duration-500 group-hover:bg-orange-500">
                    <ArrowRight className="h-5 w-5 text-white transition-all duration-500 group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

