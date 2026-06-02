"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  BadgeCheck,
  Factory,
  ShieldCheck,
} from "lucide-react";

const features = [
  "Premium Quality Products",
  "Trusted Industrial Supplier",
  "Fast Nationwide Delivery",
  "Reliable Customer Support",
];

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 right-0 w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] bg-orange-100/40 blur-[100px] sm:blur-[120px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[220px] sm:w-[300px] h-[220px] sm:h-[300px] bg-orange-50 blur-[100px] sm:blur-[120px] rounded-full" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative order-1"
          >
            {/* MAIN IMAGE */}
            <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] shadow-2xl">
              <Image
                src="/Home/about_img.webp"
                alt="Shree Maruti Steel"
                width={1400}
                height={1600}
                priority
                className="w-full h-[420px] sm:h-[520px] lg:h-[680px] object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* TOP BADGE */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-2 sm:gap-3 border border-zinc-100">
              <BadgeCheck
                size={18}
                className="text-orange-500 sm:w-[22px] sm:h-[22px]"
              />

              <span className="text-[10px] sm:text-sm font-bold uppercase tracking-[1px] sm:tracking-[2px] text-[#111111]">
                Trusted Supplier
              </span>
            </div>

            {/* FLOATING EXPERIENCE CARD */}
            {/* <div className="absolute -bottom-8 sm:-bottom-10 left-1/2 lg:left-auto lg:right-6 -translate-x-1/2 lg:translate-x-0 bg-white border border-zinc-200 rounded-[24px] sm:rounded-[32px] shadow-2xl p-5 sm:p-8 w-[90%] sm:max-w-[320px]">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-orange-500 flex items-center justify-center shrink-0">
                  <Factory
                    size={26}
                    className="text-white sm:w-[30px] sm:h-[30px]"
                  />
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#111111]">
                    15+
                  </h3>

                  <p className="text-zinc-500 uppercase tracking-[1px] sm:tracking-[2px] text-[10px] sm:text-xs font-semibold">
                    Years Experience
                  </p>
                </div>
              </div>

              <p className="text-zinc-500 text-sm leading-relaxed mt-4 sm:mt-5">
                Delivering premium industrial steel products with trust,
                quality & commitment across India.
              </p>
            </div> */}
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-2"
          >
            {/* SECTION TAG */}
            <span className="inline-flex items-center gap-3 bg-orange-50 border border-orange-200 rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-orange-600 uppercase tracking-[2px] sm:tracking-[4px] text-[11px] sm:text-sm font-bold">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-orange-500" />
              About Company
            </span>

            {/* HEADING */}
            <h2 className="text-3xl sm:text-5xl xl:text-6xl font-black uppercase leading-[1.1] text-[#111111] mt-6 sm:mt-8">
              Trusted
              <br />

              <span className="text-orange-500">
                Industrial Steel
              </span>{" "}
              Supplier
            </h2>

            {/* DESCRIPTION */}
            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed mt-6 sm:mt-8">
              Shree Maruti Steel is one of the leading manufacturers,
              suppliers & stockists of stainless steel pipes, fittings,
              flanges, valves and industrial raw materials serving industries
              across India with quality, trust and commitment.
            </p>

            <p className="text-zinc-500 text-sm sm:text-base leading-relaxed mt-5 sm:mt-6">
              We provide premium quality steel solutions for petrochemical,
              construction, railway, oil & gas, engineering and industrial
              sectors with reliable service and competitive pricing.
            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mt-8 sm:mt-10">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 bg-white border border-zinc-200 hover:border-orange-300 rounded-2xl p-4 sm:p-5 shadow-lg hover:shadow-orange-100 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                    <ShieldCheck
                      size={18}
                      className="text-orange-500 sm:w-5 sm:h-5"
                    />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#111111] uppercase text-xs sm:text-sm tracking-[1px] leading-relaxed">
                      {item}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-10 sm:mt-12">
              {/* BUTTON */}
              <Link
                href="/about"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 px-7 sm:px-8 py-4 sm:py-5 rounded-2xl text-white text-sm sm:text-base font-bold uppercase tracking-[1px] sm:tracking-[2px] transition-all duration-300 shadow-[0_15px_40px_rgba(249,115,22,0.35)]"
              >
                <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-all duration-300" />

                <span className="relative z-10">Read More</span>

                <ArrowRight
                  size={18}
                  className="relative z-10 group-hover:translate-x-1 transition-all duration-300"
                />
              </Link>

              {/* EXPERIENCE BOX */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#111111] flex items-center justify-center shrink-0">
                  <Factory
                    size={24}
                    className="text-orange-500 sm:w-[26px] sm:h-[26px]"
                  />
                </div>

                <div>
                  <h4 className="text-lg sm:text-xl font-black text-[#111111]">
                    Industrial Excellence
                  </h4>

                  <p className="text-zinc-500 text-[11px] sm:text-sm uppercase tracking-[1px] sm:tracking-[2px]">
                    Strength • Quality • Trust
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;