"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  Factory,
  Users,
} from "lucide-react";

const stats = [
  {
    number: "15+",
    title: "Years Experience",
    description:
      "Trusted industrial steel supplier with years of engineering excellence.",
    icon: ShieldCheck,
  },

  {
    number: "1000+",
    title: "Industrial Products",
    description:
      "Extensive range of premium industrial steel and piping products.",
    icon: Factory,
  },

  {
    number: "500+",
    title: "Satisfied Clients",
    description:
      "Serving industries and infrastructure projects across India.",
    icon: Users,
  },

  {
    number: "24/7",
    title: "Support Service",
    description:
      "Dedicated industrial support and fast customer assistance.",
    icon: Sparkles,
  },
];

const IndustriesStats = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fafafa] via-orange-50/30 to-white py-10 sm:py-14 lg:py-18">
      {/* PREMIUM GLOW */}
      <div className="absolute left-[-120px] top-[-80px] h-[340px] w-[340px] rounded-full bg-orange-300/20 blur-[120px]" />

      <div className="absolute bottom-[-80px] right-[-100px] h-[360px] w-[360px] rounded-full bg-orange-400/20 blur-[120px]" />

      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:70px_70px]" />

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
              Company Achievements
            </span>
          </div>

          {/* HEADING */}
          <h2 className="mt-7 text-4xl font-black leading-[1.05] tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            Trusted By
            <span className="block bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 bg-clip-text text-transparent">
              Industrial Leaders
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            Delivering premium industrial steel products, engineering materials
            and trusted industrial solutions with quality assurance and reliable
            service.
          </p>
        </motion.div>

        {/* STATS GRID */}
        <div className="relative mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {/* SIDE GLOW */}
          <div className="absolute -left-20 top-20 h-52 w-52 rounded-full bg-orange-300/10 blur-[100px]" />

          <div className="absolute -right-20 bottom-20 h-52 w-52 rounded-full bg-orange-400/10 blur-[100px]" />

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[34px] border border-orange-100/70 bg-white/80 p-8 shadow-[0_10px_50px_rgba(249,115,22,0.08)] backdrop-blur-2xl transition-all duration-700 hover:-translate-y-4 hover:border-orange-200 hover:shadow-[0_25px_80px_rgba(249,115,22,0.18)]"
              >
                {/* CARD GLOW */}
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-300/20 blur-[90px]" />

                <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-orange-400/10 blur-[90px]" />

                {/* GRID OVERLAY */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-[0.03] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:24px_24px]" />

                {/* ICON */}
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-[28px] bg-gradient-to-br from-orange-500 to-orange-400 text-white shadow-[0_15px_40px_rgba(249,115,22,0.35)] transition-all duration-700 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-10 w-10" />

                  <div className="absolute inset-0 rounded-[28px] bg-white/10" />
                </div>

                {/* CONTENT */}
                <div className="relative z-10 mt-8">
                  {/* NUMBER */}
                  <h3 className="text-5xl font-black tracking-tight text-orange-500 transition-all duration-500 group-hover:scale-105">
                    {item.number}
                  </h3>

                  {/* TITLE */}
                  <h4 className="mt-5 text-2xl font-black tracking-tight text-zinc-900 transition-colors duration-300 group-hover:text-orange-500">
                    {item.title}
                  </h4>

                  {/* DESCRIPTION */}
                  <p className="mt-4 text-[15px] leading-7 text-zinc-600">
                    {item.description}
                  </p>
                </div>

                {/* BOTTOM LINE */}
                <div className="relative z-10 mt-8 flex items-center gap-2">
                  <div className="h-[4px] w-16 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-28" />

                  <div className="h-[4px] w-4 rounded-full bg-orange-300" />
                </div>

                {/* HOVER BORDER */}
                <div className="pointer-events-none absolute inset-0 rounded-[34px] border border-transparent transition-all duration-700 group-hover:border-orange-300/40" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesStats;