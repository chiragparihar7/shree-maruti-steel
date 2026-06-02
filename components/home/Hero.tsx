"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  ShieldCheck,
  BadgeCheck,
  Phone,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* HERO WRAPPER */}
      <div className=" relative w-full
      min-h-[600px]
      sm:min-h-[650px]
      lg:min-h-screen ">
        {/* BACKGROUND IMAGE */}
        <Image
          src="/Home/hero_banner.webp"
          alt="Shree Maruti Steel"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/15 z-10" />

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/90 z-10" />

        {/* CONTENT */}
        <div className="relative z-20 flex min-h-[100svh] items-center justify-center">
          <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-18">
            <div className="flex flex-col items-center text-center">
              {/* BADGE */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 backdrop-blur-xl px-4 sm:px-6 py-2.5 sm:py-3 mb-6 sm:mb-8"
              >
                <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 shrink-0" />

                <span className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[1px] sm:tracking-[3px] text-gray-100 font-semibold">
                  Trusted Industrial Raw Material Supplier
                </span>
              </motion.div>

              {/* HEADING */}
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="max-w-6xl text-4xl xs:text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black uppercase leading-[1.05] text-white"
              >
                Welcome To

                <span className="block text-orange-500 mt-2 sm:mt-4">
                  SHREE MARUTI STEEL
                </span>
              </motion.h1>

              {/* DESCRIPTION */}
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mt-6 sm:mt-8 max-w-3xl text-sm sm:text-base md:text-lg xl:text-xl leading-relaxed text-gray-300 px-1"
              >
                Leading Manufacturers, Importers, Stockists & Suppliers of
                Stainless Steel Pipes, Plates, Fittings, Valves & Industrial
                Raw Materials across India with premium quality standards.
              </motion.p>

              {/* FEATURES */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl"
              >
                {[
                  "15+ Years Experience",
                  "ASTM / IS Standard",
                  "PAN India Supply",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md px-4 sm:px-5 py-2.5 sm:py-3"
                  >
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 shrink-0" />

                    <span className="text-[11px] sm:text-sm font-medium text-white whitespace-nowrap">
                      {item}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* BUTTONS */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-10 sm:mt-12 flex w-full flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
              >
                {/* BUTTON 1 */}
                <Link
                  href="/products"
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-orange-500 hover:bg-orange-600 px-6 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all duration-300 shadow-[0_15px_40px_rgba(249,115,22,0.25)]"
                >
                  Explore Products

                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                {/* BUTTON 2 */}
                <a
                  href="https://wa.me/918373912012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 hover:bg-orange-500 hover:border-orange-500 px-6 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white backdrop-blur-md transition-all duration-300"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />

                  <span>Send Message</span>

                  <span className="hidden sm:block text-orange-300 group-hover:text-white transition-colors duration-300">
                    +91 83739 12012
                  </span>
                </a>
              </motion.div>

              {/* MOBILE PHONE TEXT */}
              <div className="sm:hidden mt-3 text-orange-300 text-sm font-medium">
                +91 83739 12012
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;