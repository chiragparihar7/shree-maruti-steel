"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

const MissionVision = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white py-10 sm:py-14 lg:py-12">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[320px] w-[320px] bg-orange-300/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] bg-orange-400/20 blur-[120px]" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:70px_70px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* TOP HEADING */}
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
              Mission & Vision
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-7 text-4xl font-black leading-[1.1] text-zinc-900 sm:text-5xl lg:text-6xl">
            Building Industrial Growth With{" "}
            <span className="relative inline-block text-orange-500">
              Trust & Quality
              <span className="absolute bottom-2 left-0 -z-10 h-3 w-full rounded-full bg-orange-200/60" />
            </span>
          </h2>
        </motion.div>

        {/* MAIN GRID */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* MISSION CARD */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[35px] border border-orange-100 bg-gradient-to-br from-orange-500 via-orange-400 to-orange-600 p-7 shadow-2xl shadow-orange-200/50 sm:rounded-[45px] sm:p-10"
          >
            {/* Glow */}
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-all duration-500 group-hover:scale-125" />

            {/* Watermark */}
            <span className="absolute right-6 top-4 text-8xl font-black text-white/10">
              01
            </span>

            {/* Icon */}
            <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-orange-500 shadow-2xl shadow-orange-300/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              <Target className="h-10 w-10" />
            </div>

            {/* Content */}
            <div className="relative z-10 mt-10">
              <p className="text-sm font-semibold uppercase tracking-[3px] text-white/70">
                Our Mission
              </p>

              <h3 className="mt-4 text-4xl font-black text-white sm:text-5xl">
                Delivering Trusted Industrial Solutions
              </h3>

              <p className="mt-6 text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                To provide premium industrial steel products with trusted
                quality, competitive pricing, fast supply, and reliable service
                while building long-term industrial partnerships.
              </p>
            </div>

            {/* Bottom Feature */}
            <div className="relative z-10 mt-10 flex items-center gap-4 rounded-[28px] border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-orange-500">
                <ShieldCheck className="h-7 w-7" />
              </div>

              <div>
                <h4 className="text-lg font-bold text-white">
                  Premium Quality Focus
                </h4>

                <p className="mt-1 text-sm text-white/70">
                  Trusted industrial standards and supply excellence.
                </p>
              </div>
            </div>
          </motion.div>

          {/* VISION CARD */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[35px] border border-orange-100 bg-white/80 p-7 shadow-2xl shadow-orange-100/40 backdrop-blur-2xl sm:rounded-[45px] sm:p-10"
          >
            {/* Glow */}
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-orange-200/30 blur-3xl transition-all duration-500 group-hover:scale-125" />

            {/* Watermark */}
            <span className="absolute right-6 top-4 text-8xl font-black text-zinc-100">
              02
            </span>

            {/* Icon */}
            <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-500 to-orange-400 text-white shadow-2xl shadow-orange-200/40 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
              <Eye className="h-10 w-10" />
            </div>

            {/* Content */}
            <div className="relative z-10 mt-10">
              <p className="text-sm font-semibold uppercase tracking-[3px] text-orange-500">
                Our Vision
              </p>

              <h3 className="mt-4 text-4xl font-black leading-[1.1] text-zinc-900 sm:text-5xl">
                Becoming India’s Trusted Steel Partner
              </h3>

              <p className="mt-6 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
                To become one of India’s most reliable industrial steel
                suppliers by continuously improving quality, innovation,
                logistics, customer satisfaction, and industrial excellence.
              </p>
            </div>

            {/* Bottom CTA */}
            <div className="relative z-10 mt-10 flex items-center justify-between rounded-[28px] border border-orange-100 bg-orange-50/60 p-5">
              <div>
                <h4 className="text-lg font-bold text-zinc-900">
                  Industrial Growth & Innovation
                </h4>

                <p className="mt-1 text-sm text-zinc-500">
                  Reliable supply network with modern solutions.
                </p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-200/50 transition-all duration-300 group-hover:scale-110">
                <ArrowUpRight className="h-7 w-7" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;