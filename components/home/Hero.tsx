"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Phone,
  ShieldCheck,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* HERO */}
      <div className="relative min-h-[70svh] sm:min-h-screen flex items-center">
        
        {/* BACKGROUND */}
        <Image
          src="/Home/hero_banner.webp"
          alt="Shree Maruti Steel"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 z-10" />

        {/* CONTENT */}
        <div className="relative z-20 w-full">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl py-10 sm:py-10">
              
              {/* TOP TAG */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 backdrop-blur-md px-4 py-2 mb-5"
              >
                <ShieldCheck className="w-4 h-4 text-orange-500" />

                <span className="text-[11px] sm:text-xs font-medium tracking-[2px] uppercase text-gray-200">
                  Trusted Steel Supplier
                </span>
              </motion.div>

              {/* HEADING */}
              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="
                  text-4xl
                  sm:text-5xl
                  lg:text-7xl
                  font-black
                  leading-[1.05]
                  uppercase
                  text-white
                "
              >
                Shree Maruti
                <span className="block text-orange-500">
                  Steel
                </span>
              </motion.h1>

              {/* DESCRIPTION */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="
                  mt-5
                  max-w-2xl
                  text-sm
                  sm:text-base
                  lg:text-lg
                  leading-relaxed
                  text-gray-300
                "
              >
                Premium Stainless Steel Pipes, Sheets, Fittings &
                Industrial Raw Materials Supplier Across India.
              </motion.p>

              {/* MINI FEATURES */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="flex flex-wrap gap-3 mt-6"
              >
                {[
                  "15+ Years",
                  "PAN India",
                  "ISO Certified",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="
                      px-4 py-2
                      rounded-full
                      bg-white/10
                      border border-white/10
                      backdrop-blur-md
                      text-xs sm:text-sm
                      text-white
                    "
                  >
                    {item}
                  </div>
                ))}
              </motion.div>

              {/* BUTTONS */}
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 mt-8"
              >
                {/* BUTTON */}
                <Link
                  href="/products"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-orange-500
                    hover:bg-orange-600
                    px-6
                    py-3.5
                    text-sm
                    sm:text-base
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                  "
                >
                  Explore Products

                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* WHATSAPP */}
                <a
                  href="https://wa.me/918373912012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-white/15
                    bg-white/5
                    hover:bg-white/10
                    px-6
                    py-3.5
                    text-sm
                    sm:text-base
                    font-semibold
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                  "
                >
                  <Phone className="w-4 h-4" />

                  Contact Now
                </a>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;