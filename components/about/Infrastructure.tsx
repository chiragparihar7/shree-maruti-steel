"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import {
  Warehouse,
  Truck,
  ShieldCheck,
  Boxes,
  ArrowUpRight,
} from "lucide-react";

const infrastructurePoints = [
  {
    title: "Modern Storage",
    icon: Warehouse,
  },
  {
    title: "Fast Logistics",
    icon: Truck,
  },
  {
    title: "Quality Control",
    icon: ShieldCheck,
  },
  {
    title: "Bulk Inventory",
    icon: Boxes,
  },
];

const Infrastructure = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/40 via-white to-white py-14 sm:py-18 lg:py-24">
      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-[220px] w-[220px] sm:h-[320px] sm:w-[320px] bg-orange-300/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[240px] w-[240px] sm:h-[350px] sm:w-[350px] bg-orange-400/20 blur-[120px]" />

      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:70px_70px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          {/* LEFT CONTENT */}
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
                  Infrastructure
                </span>
              </div>

              {/* HEADING */}
              <h2 className="mt-6 sm:mt-7 text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.1] text-zinc-900">
                Modern{" "}

                <span className="relative inline-block text-orange-500">
                  Industrial Infrastructure

                  <span className="absolute bottom-1 sm:bottom-2 left-0 -z-10 h-2 sm:h-3 w-full rounded-full bg-orange-200/60" />
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-6 sm:mt-7 text-sm sm:text-lg leading-7 sm:leading-8 text-zinc-600">
                Our infrastructure is equipped with organized storage systems,
                modern logistics support, bulk inventory management, and
                reliable industrial supply operations for seamless project
                execution.
              </p>

              {/* FEATURES GRID */}
              <div className="mt-8 sm:mt-10 grid gap-4 sm:grid-cols-2">
                {infrastructurePoints.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="group rounded-[24px] sm:rounded-[28px] border border-orange-100 bg-orange-50/50 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-orange-100/40"
                    >
                      {/* ICON */}
                      <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 text-white shadow-lg shadow-orange-300/40 transition-all duration-300 group-hover:scale-110">
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                      </div>

                      {/* TITLE */}
                      <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-black text-zinc-900">
                        {item.title}
                      </h3>

                      {/* LINE */}
                      <div className="mt-4 h-[4px] w-12 sm:w-14 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-full" />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* BOTTOM HIGHLIGHT */}
            <div className="mt-8 sm:mt-10 flex items-center justify-between rounded-[24px] sm:rounded-[30px] border border-orange-100 bg-gradient-to-r from-orange-500 to-orange-400 p-4 sm:p-5 shadow-xl shadow-orange-200/50">
              {/* LEFT */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  PAN India
                </h3>

                <p className="mt-1 text-xs sm:text-sm text-white/80">
                  Reliable Industrial Supply Network
                </p>
              </div>

              {/* ICON */}
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white text-orange-500 shadow-lg">
                <ArrowUpRight className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative flex h-full flex-col overflow-hidden rounded-[28px] sm:rounded-[40px] border border-orange-100 bg-white p-4 sm:p-5 shadow-[0_20px_60px_rgba(249,115,22,0.08)]"
          >
            {/* MAIN IMAGE */}
            <div className="relative h-[280px] sm:h-[450px] lg:h-full lg:min-h-[720px] overflow-hidden rounded-[24px] sm:rounded-[32px]">
              <Image
                src="/Home/infrastrcuture_img.jpg"
                alt="Industrial Infrastructure"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            \
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;