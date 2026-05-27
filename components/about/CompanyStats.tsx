"use client";

import { motion } from "framer-motion";
import {
  Factory,
  ShieldCheck,
  Boxes,
  Building2,
} from "lucide-react";

const stats = [
  {
    number: "15+",
    title: "Years Experience",
    icon: Factory,
    description: "Industrial Expertise",
  },
  {
    number: "1000+",
    title: "Industrial Products",
    icon: Boxes,
    description: "Premium Quality Materials",
  },
  {
    number: "25+",
    title: "Industries Served",
    icon: Building2,
    description: "PAN India Supply Network",
  },
  {
    number: "100%",
    title: "Quality Commitment",
    icon: ShieldCheck,
    description: "Trusted Industrial Standards",
  },
];

const CompanyStats = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white py-10 sm:py-14 lg:py-18">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[300px] w-[300px] bg-orange-300/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[320px] w-[320px] bg-orange-400/20 blur-[120px]" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:70px_70px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Top Heading */}
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
              Company Achievements
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-7 text-4xl font-black leading-[1.1] text-zinc-900 sm:text-5xl lg:text-6xl">
            Built On{" "}
            <span className="relative inline-block text-orange-500">
              Quality
              <span className="absolute bottom-2 left-0 -z-10 h-3 w-full rounded-full bg-orange-200/60" />
            </span>{" "}
            & Industrial Trust
          </h2>

          {/* Description */}
          <p className="mt-7 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            Delivering premium industrial steel products with trusted service,
            modern supply solutions, and long-term industrial partnerships.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[35px] border border-orange-100 bg-white/80 p-7 shadow-xl shadow-orange-100/40 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-200/50"
              >
                {/* Gradient Glow */}
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-orange-200/30 blur-3xl transition-all duration-500 group-hover:bg-orange-300/40" />

                {/* Number Watermark */}
                <span className="absolute right-5 top-5 text-6xl font-black text-zinc-100 transition-all duration-500 group-hover:text-orange-50">
                  {index + 1}
                </span>

                {/* Icon */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 text-white shadow-lg shadow-orange-300/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-8 w-8" />
                </div>

                {/* Number */}
                <h3 className="relative z-10 mt-8 text-5xl font-black leading-none text-zinc-900 transition-all duration-300 group-hover:text-orange-500">
                  {item.number}
                </h3>

                {/* Title */}
                <h4 className="relative z-10 mt-5 text-2xl font-bold text-zinc-900">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="relative z-10 mt-3 text-sm leading-6 text-zinc-500 sm:text-base">
                  {item.description}
                </p>

                {/* Bottom Line */}
                <div className="relative z-10 mt-8 h-[4px] w-16 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
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
                Shree Maruti Steel
              </p>

              <h3 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                Premium Industrial Steel Solutions
              </h3>

              <p className="mt-4 max-w-3xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                Trusted manufacturer, stockist, and supplier delivering
                industrial raw materials with quality assurance and reliable
                service across India.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-wrap gap-4">
              <div className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl">
                Stainless Steel
              </div>

              <div className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl">
                Pipes & Fittings
              </div>

              <div className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl">
                Industrial Supply
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyStats;