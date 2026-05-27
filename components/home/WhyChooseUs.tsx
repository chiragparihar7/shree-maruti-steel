"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  Truck,
  IndianRupee,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    title: "Premium Quality Materials",
    description:
      "High-grade industrial steel products with strict quality standards for long-lasting performance.",
    icon: ShieldCheck,
    number: "01",
  },
  {
    title: "Trusted Industrial Supplier",
    description:
      "Serving multiple industries with reliable supply solutions and trusted client relationships.",
    icon: BadgeCheck,
    number: "02",
  },
  {
    title: "Competitive Pricing",
    description:
      "Cost-effective pricing without compromising on premium quality and industrial durability.",
    icon: IndianRupee,
    number: "03",
  },
  {
    title: "Fast Delivery",
    description:
      "Efficient logistics and quick dispatch system ensuring timely project execution.",
    icon: Truck,
    number: "04",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/40 to-white py-14 lg:py-12">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[300px] w-[300px] bg-orange-400/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[320px] w-[320px] bg-orange-300/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-5 py-2 shadow-lg shadow-orange-100 backdrop-blur-xl">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-orange-500" />

              <span className="text-sm font-semibold uppercase tracking-[3px] text-orange-600">
                Why Choose Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-7 text-4xl font-black leading-[1.1] text-zinc-900 sm:text-5xl lg:text-6xl">
              Delivering{" "}
              <span className="text-orange-500">Quality</span> & Industrial{" "}
              <span className="relative inline-block">
                Trust
                <span className="absolute bottom-2 left-0 -z-10 h-3 w-full rounded-full bg-orange-200/60" />
              </span>
            </h2>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600">
              Shree Maruti Steel provides premium industrial raw materials,
              stainless steel products, pipes, fittings, flanges, valves, and
              engineering solutions with unmatched reliability and service
              excellence.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-5 sm:max-w-lg">
              <div className="rounded-[28px] border border-orange-100 bg-white/80 p-6 shadow-xl shadow-orange-100/40 backdrop-blur-xl">
                <h3 className="text-4xl font-black text-orange-500">15+</h3>

                <p className="mt-2 text-sm font-medium text-zinc-600">
                  Years Industrial Experience
                </p>
              </div>

              <div className="rounded-[28px] border border-orange-100 bg-white/80 p-6 shadow-xl shadow-orange-100/40 backdrop-blur-xl">
                <h3 className="text-4xl font-black text-orange-500">100%</h3>

                <p className="mt-2 text-sm font-medium text-zinc-600">
                  Quality Commitment
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-semibold text-white shadow-2xl shadow-orange-300/40 transition-all duration-300 hover:scale-105 hover:bg-orange-600">
                Explore Products

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button className="rounded-full border border-zinc-200 bg-white/80 px-7 py-4 font-semibold text-zinc-800 backdrop-blur-xl transition-all duration-300 hover:border-orange-300 hover:text-orange-600 hover:shadow-lg">
                Contact Us
              </button>
            </div>
          </motion.div>

          {/* RIGHT CARDS */}
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-[32px] border border-orange-100 bg-white/80 p-7 shadow-xl shadow-orange-100/40 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-200/60"
                >
                  {/* Glow */}
                  <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-orange-200/30 blur-3xl transition-all duration-500 group-hover:bg-orange-300/40" />

                  {/* Number */}
                  <span className="absolute right-5 top-5 text-5xl font-black text-zinc-100">
                    {item.number}
                  </span>

                  {/* Icon */}
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 text-white shadow-lg shadow-orange-300/40 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 mt-7">
                    <h3 className="text-2xl font-bold leading-snug text-zinc-900">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-base leading-7 text-zinc-600">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Line */}
                  <div className="relative z-10 mt-8 h-[4px] w-16 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-full" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;