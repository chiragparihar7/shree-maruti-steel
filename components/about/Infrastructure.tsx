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
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/40 via-white to-white py-10 sm:py-14 lg:py-12">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[320px] w-[320px] bg-orange-300/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] bg-orange-400/20 blur-[120px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:70px_70px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex h-full flex-col justify-between overflow-hidden rounded-[35px] border border-orange-100 bg-white/80 p-7 shadow-2xl shadow-orange-100/40 backdrop-blur-2xl sm:rounded-[45px] sm:p-10"
          >
            {/* Top Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50/80 px-5 py-2 shadow-lg shadow-orange-100">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-orange-500" />

                <span className="text-xs font-semibold uppercase tracking-[3px] text-orange-600 sm:text-sm">
                  Infrastructure
                </span>
              </div>

              {/* Heading */}
              <h2 className="mt-7 text-4xl font-black leading-[1.1] text-zinc-900 sm:text-5xl lg:text-6xl">
                Modern{" "}
                <span className="relative inline-block text-orange-500">
                  Industrial Infrastructure
                  <span className="absolute bottom-2 left-0 -z-10 h-3 w-full rounded-full bg-orange-200/60" />
                </span>
              </h2>

              {/* Description */}
              <p className="mt-7 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
                Our infrastructure is equipped with organized storage systems,
                modern logistics support, bulk inventory management, and
                reliable industrial supply operations for seamless project
                execution.
              </p>

              {/* Features Grid */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
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
                      className="group rounded-[28px] border border-orange-100 bg-orange-50/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-orange-100/40"
                    >
                      {/* Icon */}
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 text-white shadow-lg shadow-orange-300/40 transition-all duration-300 group-hover:scale-110">
                        <Icon className="h-7 w-7" />
                      </div>

                      {/* Content */}
                      <h3 className="mt-5 text-xl font-black text-zinc-900">
                        {item.title}
                      </h3>

                      <div className="mt-4 h-[4px] w-14 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-full" />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Highlight */}
            <div className="mt-10 flex items-center justify-between rounded-[30px] border border-orange-100 bg-gradient-to-r from-orange-500 to-orange-400 p-5 shadow-xl shadow-orange-200/50">
              <div>
                <h3 className="text-3xl font-black text-white">
                  PAN India
                </h3>

                <p className="mt-1 text-sm text-white/80">
                  Reliable Industrial Supply Network
                </p>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-orange-500 shadow-lg">
                <ArrowUpRight className="h-8 w-8" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative flex h-full flex-col overflow-hidden rounded-[35px] border border-orange-100 bg-white p-4 shadow-2xl shadow-orange-100/50 sm:rounded-[45px] sm:p-5"
          >
            {/* Main Image */}
            <div className="relative h-[320px] overflow-hidden rounded-[30px] sm:h-[450px] lg:h-full lg:min-h-[720px]">
              <Image
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop"
                alt="Industrial Infrastructure"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-[28px] border border-white/15 bg-white/10 p-5 backdrop-blur-xl sm:p-6">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  {/* Left */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-orange-500 shadow-lg">
                      <Warehouse className="h-8 w-8" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-black text-white sm:text-3xl">
                        Modern Warehouse
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-white/80 sm:text-base">
                        Organized industrial storage & supply operations.
                      </p>
                    </div>
                  </div>

                  {/* Right Number */}
                  <div>
                    <h3 className="text-5xl font-black text-white">
                      24/7
                    </h3>

                    <p className="mt-1 text-sm text-white/70">
                      Supply Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;