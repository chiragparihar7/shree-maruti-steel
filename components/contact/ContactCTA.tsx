"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  PhoneCall,
} from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-400 to-amber-500 py-10 sm:py-14 lg:py-18">
      {/* PREMIUM GLOWS */}
      <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-white/15 blur-[140px]" />

      <div className="absolute bottom-[-140px] right-[-120px] h-[460px] w-[460px] rounded-full bg-black/10 blur-[160px]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:72px_72px]" />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-[42px] border border-white/15 bg-white/10 shadow-[0_25px_100px_rgba(0,0,0,0.18)] backdrop-blur-3xl"
        >
          {/* SHINE EFFECT */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
            <div className="absolute -left-[120%] top-0 h-full w-[120%] rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 group-hover:left-[120%]" />
          </div>

          {/* CARD GLOW */}
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-[120px]" />

          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-orange-200/10 blur-[140px]" />

          <div className="relative z-10 flex flex-col items-center px-8 py-14 text-center sm:px-10 lg:px-16 lg:py-16">
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 backdrop-blur-xl">
              <ShieldCheck className="h-4 w-4 text-white" />

              <span className="text-sm font-semibold tracking-wide text-white">
                Premium Industrial Solutions
              </span>
            </div>

            {/* TITLE */}
            <h2 className="mt-8 max-w-5xl text-4xl font-black leading-[1] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
              Trusted Steel &
              <span className="mt-2 block text-orange-100">
                Engineering Solutions
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
              Shree Maruti Steel supplies premium industrial steel products,
              piping materials, fittings, flanges and engineering solutions for
              Oil & Gas, Power Plants, Petrochemical and multiple industries.
            </p>

            {/* MINI TAGS */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {[
                "Industrial Supply",
                "Certified Products",
                "Premium Quality",
              ].map((item, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-xl"
                >
                  <Sparkles className="h-4 w-4 text-orange-100" />

                  <span className="text-sm font-semibold text-white/90">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-12 flex flex-col gap-5 sm:flex-row">
              {/* PRIMARY */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                <Link
                  href="/products"
                  className="group/button relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-black text-orange-500 shadow-[0_18px_50px_rgba(255,255,255,0.18)] transition-all duration-500 hover:bg-orange-50 sm:px-10"
                >
                  {/* BUTTON SHINE */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/button:opacity-100">
                    <div className="absolute -left-[120%] top-0 h-full w-[120%] rotate-12 bg-gradient-to-r from-transparent via-orange-100/70 to-transparent transition-all duration-1000 group-hover/button:left-[120%]" />
                  </div>

                  <span className="relative z-10">
                    Explore Products
                  </span>

                  <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover/button:translate-x-1" />
                </Link>
              </motion.div>

              {/* SECONDARY */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-xl transition-all duration-500 hover:bg-white/15 sm:px-10"
                >
                  <PhoneCall className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />

                  Contact Us
                </Link>
              </motion.div>
            </div>

            {/* BOTTOM STRIP */}
            <div className="mt-14 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8">
              {[
                "ASTM Standards",
                "Industrial Grade Materials",
                "Pan India Supply",
                "Trusted Engineering Partner",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-white/80" />

                  <span className="text-sm font-medium tracking-wide text-white/80">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;