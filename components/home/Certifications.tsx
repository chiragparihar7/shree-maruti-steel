"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  ShieldCheck,
  Building2,
  ArrowRight,
} from "lucide-react";

const certifications = [
  {
    title: "GST Certified",
    description:
      "Fully registered and compliant with industrial taxation and government regulations.",
    icon: BadgeCheck,
    number: "01",
  },
  {
    title: "Vendor Registered",
    description:
      "Trusted supplier registered with multiple industrial and corporate organizations.",
    icon: ShieldCheck,
    number: "02",
  },
  {
    title: "Industrial Supplier",
    description:
      "Reliable stockist and supplier serving diverse industries across India.",
    icon: Building2,
    number: "03",
  },
];

const Certifications = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/40 to-white py-14 lg:py-12">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[300px] w-[300px] bg-orange-300/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[320px] w-[320px] bg-orange-400/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-5 py-2 shadow-lg shadow-orange-100 backdrop-blur-xl">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-orange-500" />

            <span className="text-sm font-semibold uppercase tracking-[3px] text-orange-600">
              Certifications
            </span>
          </div>

          {/* Title */}
          <h2 className="mt-7 text-4xl font-black leading-[1.1] text-zinc-900 sm:text-5xl lg:text-6xl">
            Trusted &{" "}
            <span className="relative inline-block text-orange-500">
              Certified
              <span className="absolute bottom-2 left-0 -z-10 h-3 w-full rounded-full bg-orange-200/60" />
            </span>
          </h2>

          {/* Description */}
          <p className="mt-8 text-lg leading-8 text-zinc-600">
            Shree Maruti Steel is committed to delivering trusted industrial
            products with verified certifications, reliable supply standards,
            and professional business compliance.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[32px] border border-orange-100 bg-white/80 p-8 shadow-xl shadow-orange-100/40 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-200/60"
              >
                {/* Glow */}
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-orange-200/30 blur-3xl transition-all duration-500 group-hover:bg-orange-300/40" />

                {/* Number */}
                <span className="absolute right-6 top-5 text-5xl font-black text-zinc-100">
                  {item.number}
                </span>

                {/* Icon */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 text-white shadow-lg shadow-orange-300/40 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-8 w-8" />
                </div>

                {/* Content */}
                <div className="relative z-10 mt-8">
                  <h3 className="text-2xl font-bold leading-snug text-zinc-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-zinc-600">
                    {item.description}
                  </p>
                </div>

                {/* Bottom CTA */}
                <div className="relative z-10 mt-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-orange-500">
                  Verified Certification
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>

                {/* Bottom Line */}
                <div className="relative z-10 mt-5 h-[4px] w-16 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Trust Box */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[35px] border border-orange-100 bg-white/80 p-8 shadow-2xl shadow-orange-100/40 backdrop-blur-xl lg:p-10"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-3xl font-black text-zinc-900">
                Reliable Industrial Partner
              </h3>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">
                We ensure trusted sourcing, premium quality standards, fast
                supply chain management, and dependable industrial service for
                every project requirement.
              </p>
            </div>

            <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-semibold text-white shadow-2xl shadow-orange-300/40 transition-all duration-300 hover:scale-105 hover:bg-orange-600">
              Download Profile

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;