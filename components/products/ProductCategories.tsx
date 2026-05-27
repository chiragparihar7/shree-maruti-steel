"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Cylinder,
  LayoutPanelTop,
  Settings2,
  CircleGauge,
  Wrench,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    title: "Pipes",
    icon: Cylinder,
    count: "250+ Products",
    description:
      "Premium industrial seamless, ERW & stainless steel pipe solutions.",
  },

  {
    title: "Plates & Sheets",
    icon: LayoutPanelTop,
    count: "180+ Products",
    description:
      "Heavy-duty stainless steel plates, coils and engineering sheets.",
  },

  {
    title: "Fittings & Flanges",
    icon: Settings2,
    count: "320+ Products",
    description:
      "Industrial fittings, flanges and piping connection systems.",
  },

  {
    title: "Industrial Valves",
    icon: CircleGauge,
    count: "150+ Products",
    description:
      "Precision engineered industrial valves for critical operations.",
  },

  {
    title: "Hydraulic Fittings",
    icon: Wrench,
    count: "120+ Products",
    description:
      "Hydraulic and pneumatic tube fittings for industrial systems.",
  },

  {
    title: "Raw Materials",
    icon: ShieldCheck,
    count: "200+ Products",
    description:
      "Industrial raw materials including alloy, copper & brass metals.",
  },
];

const ProductCategories = () => {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-10 sm:py-14 lg:py-18">
      {/* PREMIUM GLOW */}
      <div className="absolute left-[-120px] top-[-60px] h-[320px] w-[320px] rounded-full bg-orange-300/20 blur-[120px]" />

      <div className="absolute bottom-[-80px] right-[-100px] h-[340px] w-[340px] rounded-full bg-orange-400/20 blur-[120px]" />

      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:70px_70px]" />

      {/* CENTER GLOW */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-200/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* BADGE */}
          <div className="inline-flex items-center gap-3 rounded-full border border-orange-200/70 bg-white/80 px-5 py-2.5 shadow-[0_10px_40px_rgba(249,115,22,0.10)] backdrop-blur-xl">
            <div className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />

              <span className="relative inline-flex h-3 w-3 rounded-full bg-orange-500" />
            </div>

            <span className="text-xs font-bold uppercase tracking-[4px] text-orange-600 sm:text-sm">
              Industrial Product Categories
            </span>
          </div>

          {/* HEADING */}
          <h2 className="mt-7 text-4xl font-black leading-[1.05] tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            Premium Steel
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Product Categories
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            Discover our extensive range of industrial steel products,
            engineering materials and premium industrial supply solutions for
            modern infrastructure and heavy industries.
          </p>
        </motion.div>

        {/* CATEGORY GRID */}
        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[34px] border border-orange-100/70 bg-white/80 p-8 backdrop-blur-xl shadow-[0_10px_50px_rgba(249,115,22,0.08)] transition-all duration-700 hover:-translate-y-3 hover:border-orange-200 hover:shadow-[0_25px_80px_rgba(249,115,22,0.18)]"
              >
                {/* HOVER GLOW */}
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-200/20 blur-[90px] transition-all duration-700 group-hover:bg-orange-300/30" />

                <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-orange-300/10 blur-[90px]" />

                {/* GRID OVERLAY */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-[0.03] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:24px_24px]" />

                {/* TOP */}
                <div className="relative z-10 flex items-start justify-between">
                  {/* ICON */}
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-[28px] bg-gradient-to-br from-orange-500 to-orange-400 text-white shadow-[0_15px_40px_rgba(249,115,22,0.35)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-10 w-10" />

                    {/* ICON SHINE */}
                    <div className="absolute inset-0 rounded-[28px] bg-white/10" />
                  </div>

                  {/* MINI TAG */}
                  <div className="flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50/80 px-3 py-2 backdrop-blur-xl">
                    <Sparkles className="h-3.5 w-3.5 text-orange-500" />

                    <span className="text-[11px] font-bold uppercase tracking-[2px] text-orange-600">
                      Premium
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="relative z-10 mt-8">
                  <h3 className="text-2xl font-black tracking-tight text-zinc-900 transition-colors duration-300 group-hover:text-orange-500">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-zinc-600">
                    {item.description}
                  </p>

                  {/* COUNT */}
                  <div className="mt-6 inline-flex rounded-2xl border border-orange-100 bg-orange-50/70 px-4 py-2 backdrop-blur-xl">
                    <span className="text-sm font-bold tracking-wide text-orange-600">
                      {item.count}
                    </span>
                  </div>
                </div>

                {/* BOTTOM */}
                <div className="relative z-10 mt-8 flex items-center justify-between">
                  {/* LINE */}
                  <div className="flex items-center gap-2">
                    <div className="h-[4px] w-16 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-28" />

                    <div className="h-[4px] w-4 rounded-full bg-orange-300" />
                  </div>

                  {/* BUTTON */}
                  <Link
                    href="/products"
                    className="group/btn flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-100 bg-orange-50 text-orange-500 transition-all duration-500 hover:scale-110 hover:bg-orange-500 hover:text-white"
                  >
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
                  </Link>
                </div>

                {/* HOVER BORDER */}
                <div className="pointer-events-none absolute inset-0 rounded-[34px] border border-transparent transition-all duration-500 group-hover:border-orange-300/40" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;