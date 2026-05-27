"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  Truck,
  Building2,
} from "lucide-react";

const stats = [
  {
    title: "Premium Quality",
    icon: ShieldCheck,
  },
  {
    title: "Fast Delivery",
    icon: Truck,
  },
  {
    title: "Trusted Supplier",
    icon: Building2,
  },
];

const CTA = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-400 to-orange-600" />

      {/* Glow Effects */}
      <div className="absolute -left-20 top-0 h-[300px] w-[300px] rounded-full bg-white/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-black/10 blur-[120px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:70px_70px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-2xl sm:p-10 lg:p-16"
        >
          {/* Floating Glow */}
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-xl">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-white" />

            <span className="text-sm font-semibold uppercase tracking-[3px] text-white">
              Get In Touch
            </span>
          </div>

          {/* Main Content */}
          <div className="mt-8 grid items-center gap-14 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <h2 className="text-4xl font-black leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                Need Premium Industrial Steel Products?
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">
                Contact Shree Maruti Steel today for premium quality stainless
                steel products, pipes, flanges, fittings, valves, industrial raw
                materials, and reliable supply solutions for your business.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-orange-600 shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-zinc-100"
                >
                  Contact Now

                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="tel:+918373912012"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
                >
                  <PhoneCall className="h-5 w-5" />
                  Call Us
                </Link>
              </div>
            </div>

            {/* RIGHT */}
            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.12,
                    }}
                    viewport={{ once: true }}
                    className="group flex items-center gap-5 rounded-[28px] border border-white/15 bg-white/10 p-5 backdrop-blur-xl transition-all duration-300 hover:bg-white/15"
                  >
                    {/* Icon */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-orange-500 shadow-lg transition-all duration-300 group-hover:scale-110">
                      <Icon className="h-8 w-8" />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm text-white/70">
                        Trusted Industrial Solutions
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom Strip */}
          <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[3px] text-white/60">
                Shree Maruti Steel
              </p>

              <h4 className="mt-2 text-2xl font-bold text-white">
                Manufacturing • Stockist • Supplier
              </h4>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl">
                Stainless Steel
              </div>

              <div className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl">
                Pipes & Fittings
              </div>

              <div className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl">
                Industrial Raw Materials
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;