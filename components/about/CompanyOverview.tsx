"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Factory,
  CheckCircle2,
} from "lucide-react";

const points = [
  "Premium Quality Materials",
  "Trusted Industrial Supplier",
  "Fast Delivery Solutions",
  "PAN India Industrial Supply",
];

const CompanyOverview = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white py-10 sm:py-14 lg:py-12">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[300px] w-[300px] bg-orange-300/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[320px] w-[320px] bg-orange-400/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* MAIN GRID */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex h-full flex-col justify-between overflow-hidden rounded-[35px] border border-orange-100 bg-white/80 p-6 shadow-2xl shadow-orange-100/40 backdrop-blur-2xl sm:rounded-[45px] sm:p-8 lg:p-10"
          >
            {/* TOP */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50/80 px-5 py-2 shadow-lg shadow-orange-100">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-orange-500" />

                <span className="text-xs font-semibold uppercase tracking-[3px] text-orange-600 sm:text-sm">
                  Company Overview
                </span>
              </div>

              {/* Heading */}
              <h2 className="mt-7 text-4xl font-black leading-[1.1] text-zinc-900 sm:text-5xl lg:text-6xl">
                Trusted{" "}
                <span className="relative inline-block text-orange-500">
                  Industrial Steel
                  <span className="absolute bottom-2 left-0 -z-10 h-3 w-full rounded-full bg-orange-200/60" />
                </span>{" "}
                Supplier
              </h2>

              {/* Description */}
              <p className="mt-7 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
                Shree Maruti Steel is a leading manufacturer, stockist, and
                supplier of stainless steel products, pipes, fittings, flanges,
                valves, and industrial raw materials serving industries across
                India.
              </p>

              {/* Feature Points */}
              <div className="mt-8 space-y-4">
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
                    className="flex items-center gap-4 rounded-2xl border border-orange-100 bg-orange-50/50 p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>

                    <h3 className="font-semibold text-zinc-800">
                      {item}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="mt-10 grid grid-cols-2 gap-5">
              <div className="rounded-[28px] border border-orange-100 bg-gradient-to-br from-orange-500 to-orange-400 p-6 text-white shadow-xl shadow-orange-200/40">
                <h3 className="text-4xl font-black">15+</h3>

                <p className="mt-2 text-sm font-medium text-white/80">
                  Years Experience
                </p>
              </div>

              <div className="rounded-[28px] border border-orange-100 bg-zinc-900 p-6 text-white shadow-xl">
                <h3 className="text-4xl font-black text-orange-500">
                  PAN
                </h3>

                <p className="mt-2 text-sm font-medium text-zinc-300">
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
            className="flex h-full flex-col justify-between overflow-hidden rounded-[35px] border border-orange-100 bg-white p-4 shadow-2xl shadow-orange-100/50 sm:rounded-[45px] sm:p-5"
          >
            {/* Image */}
            <div className="relative h-[320px] overflow-hidden rounded-[28px] sm:h-[420px] lg:h-full lg:min-h-[620px]">
              <Image
                src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1600&auto=format&fit=crop"
                alt="Industrial Steel"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-[28px] border border-white/15 bg-white/15 p-5 backdrop-blur-xl sm:p-6">
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-orange-500 shadow-lg">
                    <Factory className="h-8 w-8" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-black text-white sm:text-3xl">
                      Manufacturing Excellence
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/80 sm:text-base">
                      Delivering premium industrial steel products with trusted
                      quality and modern supply solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Buttons */}
            <div className="mt-5 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-semibold text-white shadow-2xl shadow-orange-300/40 transition-all duration-300 hover:scale-[1.02] hover:bg-orange-600"
              >
                Contact Us

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/products"
                className="inline-flex flex-1 items-center justify-center rounded-full border border-zinc-200 bg-white px-7 py-4 font-semibold text-zinc-800 transition-all duration-300 hover:border-orange-300 hover:text-orange-600 hover:shadow-lg"
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