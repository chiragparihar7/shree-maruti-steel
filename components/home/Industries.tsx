// components/home/Industries.tsx

"use client";

import Link from "next/link";

import {
  ArrowRight,
  Factory,
  Fuel,
  TrainFront,
  Building2,
  ShieldCheck,
  Hammer,
  Zap,
  Droplets,
} from "lucide-react";

import { motion } from "framer-motion";

const industries = [
  {
    title: "Oil & Gas",
    icon: Fuel,
    number: "01",
  },
  {
    title: "Petrochemical",
    icon: Factory,
    number: "02",
  },
  {
    title: "Power Plant",
    icon: Zap,
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
    icon: Droplets,
    number: "06",
  },
  {
    title: "Defence",
    icon: ShieldCheck,
    number: "07",
  },
  {
    title: "Cement",
    icon: Hammer,
    number: "08",
  },
];

const Industries = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 bg-white">
      {/* Background Effects */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-orange-100 blur-[120px] rounded-full opacity-60" />

      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-orange-50 blur-[120px] rounded-full opacity-60" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16 lg:mb-20">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-orange-50 border border-orange-200 rounded-full px-6 py-3 mb-8 shadow-lg">
              <span className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" />

              <span className="text-orange-600 uppercase tracking-[3px] text-sm font-bold">
                Industries We Serve
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl xl:text-7xl font-black uppercase leading-[1] text-[#111111]">
              Industrial
              <br />

              <span className="text-orange-500">
                Expertise
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-[520px]">
            <p className="text-zinc-600 text-lg leading-relaxed">
              Delivering premium industrial steel
              solutions across diverse industries with
              unmatched quality, reliability and
              engineering excellence.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                {/* Card */}
                <div className="relative h-full overflow-hidden rounded-[28px] lg:rounded-[36px] bg-white border border-zinc-200 hover:border-orange-300 p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_80px_rgba(249,115,22,0.12)] transition-all duration-500">
                  {/* Number */}
                  <div className="absolute top-6 right-6">
                    <h3 className="text-6xl lg:text-7xl font-black text-zinc-100 group-hover:text-orange-100 transition-all duration-500">
                      {item.number}
                    </h3>
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-[0_15px_35px_rgba(249,115,22,0.35)] group-hover:scale-110 transition-all duration-500">
                    <Icon
                      size={38}
                      className="text-white"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 mt-10">
                    <span className="text-orange-500 uppercase tracking-[3px] text-xs font-bold">
                      Industrial Sector
                    </span>

                    <h3 className="text-2xl lg:text-3xl font-black uppercase leading-tight text-[#111111] mt-4">
                      {item.title}
                    </h3>

                    <p className="text-zinc-500 leading-relaxed mt-5 text-sm">
                      High-quality industrial steel
                      solutions tailored for modern
                      industrial applications and
                      infrastructure projects.
                    </p>

                    {/* Button */}
                    <Link
                      href="/industries"
                      className="group/link inline-flex items-center gap-4 mt-8"
                    >
                      <span className="uppercase tracking-[2px] text-sm font-bold text-[#111111]">
                        Explore More
                      </span>

                      <div className="w-11 h-11 rounded-full border border-zinc-300 group-hover/link:border-orange-500 group-hover/link:bg-orange-500 flex items-center justify-center transition-all duration-300">
                        <ArrowRight
                          size={18}
                          className="text-[#111111] group-hover/link:text-white group-hover/link:translate-x-1 transition-all duration-300"
                        />
                      </div>
                    </Link>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 via-orange-50/0 to-orange-100/30 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;