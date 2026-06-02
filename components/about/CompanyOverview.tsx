"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Factory,
  CheckCircle2,
  Phone,
} from "lucide-react";

const points = [
  "Premium Quality Materials",
  "Trusted Industrial Supplier",
  "Fast Delivery Solutions",
  "PAN India Industrial Supply",
];

const CompanyOverview = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white py-14 sm:py-18 lg:py-24">
      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-[220px] w-[220px] sm:h-[300px] sm:w-[300px] bg-orange-300/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[240px] w-[240px] sm:h-[320px] sm:w-[320px] bg-orange-400/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* MAIN GRID */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex h-full flex-col justify-between overflow-hidden rounded-[28px] sm:rounded-[40px] border border-orange-100 bg-white/90 p-5 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(249,115,22,0.08)] backdrop-blur-xl"
          >
            {/* TOP CONTENT */}
            <div>
              {/* BADGE */}
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50/80 px-4 sm:px-5 py-2 shadow-lg shadow-orange-100">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-orange-500" />

                <span className="text-[10px] sm:text-sm font-semibold uppercase tracking-[2px] sm:tracking-[3px] text-orange-600">
                  Company Overview
                </span>
              </div>

              {/* HEADING */}
              <h2 className="mt-6 sm:mt-7 text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.1] text-zinc-900">
                Trusted{" "}

                <span className="relative inline-block text-orange-500">
                  Industrial Steel

                  <span className="absolute bottom-1 sm:bottom-2 left-0 -z-10 h-2 sm:h-3 w-full rounded-full bg-orange-200/60" />
                </span>{" "}

                Supplier
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-6 sm:mt-7 text-sm sm:text-lg leading-7 sm:leading-8 text-zinc-600">
                Shree Maruti Steel is a leading manufacturer, stockist, and
                supplier of stainless steel products, pipes, fittings, flanges,
                valves, and industrial raw materials serving industries across
                India.
              </p>

              {/* FEATURE POINTS */}
              <div className="mt-7 sm:mt-8 space-y-4">
                {points.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 rounded-2xl border border-orange-100 bg-orange-50/50 p-4"
                  >
                    {/* ICON */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>

                    {/* TEXT */}
                    <h3 className="text-sm sm:text-base font-semibold leading-6 text-zinc-800">
                      {item}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* STATS */}
            <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-4 sm:gap-5">
              {/* CARD 1 */}
              <div className="rounded-[24px] sm:rounded-[28px] border border-orange-100 bg-gradient-to-br from-orange-500 to-orange-400 p-5 sm:p-6 text-white shadow-xl shadow-orange-200/40">
                <h3 className="text-3xl sm:text-4xl font-black">
                  15+
                </h3>

                <p className="mt-2 text-xs sm:text-sm font-medium text-white/80">
                  Years Experience
                </p>
              </div>

              {/* CARD 2 */}
              <div className="rounded-[24px] sm:rounded-[28px] border border-orange-100 bg-zinc-900 p-5 sm:p-6 text-white shadow-xl">
                <h3 className="text-3xl sm:text-4xl font-black text-orange-500">
                  PAN
                </h3>

                <p className="mt-2 text-xs sm:text-sm font-medium text-zinc-300">
                  India Supply
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex h-full flex-col overflow-hidden rounded-[28px] sm:rounded-[40px] border border-orange-100 bg-white p-4 sm:p-5 shadow-[0_20px_60px_rgba(249,115,22,0.08)]"
          >
            {/* IMAGE */}
            <div className="relative h-[280px] sm:h-[420px] lg:h-full lg:min-h-[620px] overflow-hidden rounded-[24px] sm:rounded-[32px]">
              <Image
                src="/Home/company_img.jpg"
                alt="Industrial Steel"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

             
            </div>

            {/* BUTTONS */}
            <div className="mt-5 flex flex-col sm:flex-row gap-4">
              {/* CONTACT */}
              <a
                href="https://wa.me/918373912012"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-orange-500 px-6 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-2xl shadow-orange-300/40 transition-all duration-300 hover:scale-[1.02] hover:bg-orange-600"
              >
                <Phone className="h-5 w-5" />

                Send Message

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* PRODUCTS */}
              <Link
                href="/products"
                className="inline-flex flex-1 items-center justify-center rounded-full border border-zinc-200 bg-white px-6 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-zinc-800 transition-all duration-300 hover:border-orange-300 hover:text-orange-600 hover:shadow-lg"
              >
                Explore Products
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;