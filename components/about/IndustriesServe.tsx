"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Flame,
  TrainFront,
  Building2,
  Ship,
  Fuel,
  Waves,
  ShieldCheck,
  Cpu,
  Hammer,
  Boxes,
  Drill,
} from "lucide-react";

const industries = [
  {
    title: "Oil & Gas",
    icon: Fuel,
    number: "01",
  },
  {
    title: "Petrochemical",
    icon: Flame,
    number: "02",
  },
  {
    title: "Power Plant",
    icon: Factory,
    number: "03",
  },
  {
    title: "Railway",
    icon: TrainFront,
    number: "04",
  },
  {
    title: "Construction",
    icon: Building2,
    number: "05",
  },
  {
    title: "Refineries",
    icon: Drill,
    number: "06",
  },
  {
    title: "Defence",
    icon: ShieldCheck,
    number: "07",
  },
  {
    title: "Cement",
    icon: Boxes,
    number: "08",
  },
  {
    title: "Shipbuilding",
    icon: Ship,
    number: "09",
  },
  {
    title: "Offshore",
    icon: Waves,
    number: "10",
  },
  {
    title: "Paper Mills",
    icon: Hammer,
    number: "11",
  },
  {
    title: "Engineering",
    icon: Cpu,
    number: "12",
  },
];

const IndustriesServe = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white py-10 sm:py-14 lg:py-12">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[320px] w-[320px] bg-orange-300/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] bg-orange-400/20 blur-[120px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:70px_70px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* TOP CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-5 py-2 shadow-lg shadow-orange-100 backdrop-blur-xl">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-orange-500" />

            <span className="text-xs font-semibold uppercase tracking-[3px] text-orange-600 sm:text-sm">
              Industries We Serve
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-7 text-4xl font-black leading-[1.1] text-zinc-900 sm:text-5xl lg:text-6xl">
            Trusted Across{" "}
            <span className="relative inline-block text-orange-500">
              Multiple Industries
              <span className="absolute bottom-2 left-0 -z-10 h-3 w-full rounded-full bg-orange-200/60" />
            </span>
          </h2>

          {/* Description */}
          <p className="mt-7 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            Delivering premium industrial steel products and engineering
            solutions for diverse industrial sectors across India.
          </p>
        </motion.div>

        {/* INDUSTRIES GRID */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[32px] border border-orange-100 bg-white/80 p-7 shadow-xl shadow-orange-100/40 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-200/50"
              >
                {/* Glow */}
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-orange-200/30 blur-3xl transition-all duration-500 group-hover:bg-orange-300/40" />

                {/* Watermark */}
                <span className="absolute right-5 top-4 text-6xl font-black text-zinc-100 transition-all duration-500 group-hover:text-orange-50">
                  {item.number}
                </span>

                {/* Icon */}
                <div className="relative z-10 flex h-18 w-18 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-500 to-orange-400 text-white shadow-2xl shadow-orange-300/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-9 w-9" />
                </div>

                {/* Content */}
                <div className="relative z-10 mt-8">
                  <h3 className="text-2xl font-black text-zinc-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-500 sm:text-base">
                    Reliable industrial supply and premium steel solutions for{" "}
                    {item.title.toLowerCase()} industries.
                  </p>
                </div>

                {/* Bottom Line */}
                <div className="relative z-10 mt-8 h-[4px] w-16 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Highlight Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-14 overflow-hidden rounded-[35px] border border-orange-100 bg-gradient-to-r from-orange-500 to-orange-400 p-8 shadow-2xl shadow-orange-200/50 lg:p-10"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Left */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[3px] text-white/70">
                Industrial Solutions
              </p>

              <h3 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                Serving Diverse Industrial Sectors
              </h3>

              <p className="mt-4 max-w-3xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                Shree Maruti Steel delivers trusted industrial steel products,
                engineering materials, pipes, fittings, flanges, and industrial
                raw materials for multiple sectors.
              </p>
            </div>

            {/* Right Tags */}
            <div className="flex flex-wrap gap-4">
              <div className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl">
                Stainless Steel
              </div>

              <div className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl">
                Industrial Supply
              </div>

              <div className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl">
                Engineering Solutions
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesServe;