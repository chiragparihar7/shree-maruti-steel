"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  PhoneCall,
  Mail,
  MapPin,
  ChevronRight,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50/40 to-white py-14 sm:py-18 lg:py-12">
      {/* PREMIUM GLOWS */}
      <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-orange-300/20 blur-[140px]" />

      <div className="absolute bottom-[-140px] right-[-140px] h-[460px] w-[460px] rounded-full bg-orange-400/20 blur-[150px]" />

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200/10 blur-[160px]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:72px_72px]" />

      {/* TOP BLUR */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-orange-100/40 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/60 bg-white/80 px-5 py-2.5 shadow-[0_8px_30px_rgba(249,115,22,0.12)] backdrop-blur-xl">
              <PhoneCall className="h-4 w-4 text-orange-500" />

              <span className="text-sm font-bold tracking-wide text-orange-600">
                Get In Touch With Us
              </span>
            </div>

            {/* HEADING */}
            <h1 className="mt-8 text-5xl font-black leading-[0.95] tracking-[-0.04em] text-zinc-900 sm:text-6xl lg:text-7xl xl:text-[84px]">
              Contact
              <span className="mt-2 block bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                Shree Maruti Steel
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-8 max-w-3xl text-base leading-8 text-zinc-600 sm:text-lg">
              Connect with Shree Maruti Steel for premium industrial steel
              products, engineering materials, piping solutions and industrial
              supply services trusted across India.
            </p>

            {/* TAGS */}
            <div className="mt-10 flex flex-wrap gap-4">
              {[
                "Industrial Supply",
                "Premium Quality",
                "Fast Response",
              ].map((item, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white/80 px-4 py-2 shadow-lg shadow-orange-100/20 backdrop-blur-xl"
                >
                  <Sparkles className="h-4 w-4 text-orange-500" />

                  <span className="text-sm font-semibold text-zinc-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* ACTIONS */}
            <div className="mt-12 flex flex-col gap-5 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-sm font-black text-white shadow-[0_18px_45px_rgba(249,115,22,0.35)] transition-all duration-300 hover:scale-105"
              >
                Send Inquiry

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="tel:+918373912012"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-orange-200 bg-white/80 px-8 py-4 text-sm font-black text-zinc-900 shadow-lg shadow-orange-100/20 backdrop-blur-xl transition-all duration-300 hover:border-orange-400 hover:text-orange-500"
              >
                <PhoneCall className="h-5 w-5" />

                Call Now
              </Link>
            </div>

            {/* BREADCRUMB */}
            <div className="mt-12 flex items-center gap-3 text-sm sm:text-base">
              <Link
                href="/"
                className="font-medium text-zinc-900 transition-colors duration-300 hover:text-orange-500"
              >
                Home
              </Link>

              <ChevronRight className="h-4 w-4 text-zinc-400" />

              <span className="font-semibold text-orange-500">
                Contact
              </span>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="relative"
          >
            {/* MAIN CARD */}
            <div className="relative overflow-hidden rounded-[42px] border border-white/60 bg-white/70 p-8 shadow-[0_25px_80px_rgba(249,115,22,0.12)] backdrop-blur-3xl">
              {/* CARD GLOW */}
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-orange-300/20 blur-[100px]" />

              <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-amber-300/20 blur-[110px]" />

              {/* HEADER */}
              <div className="relative z-10">
                <p className="text-sm font-bold uppercase tracking-[3px] text-orange-500">
                  Contact Information
                </p>

                <h3 className="mt-3 text-3xl font-black text-zinc-900">
                  Let’s Connect
                </h3>
              </div>

              {/* CONTACT ITEMS */}
              <div className="relative z-10 mt-10 space-y-5">
                {[
                  {
                    icon: PhoneCall,
                    title: "Phone Number",
                    value: "+91 8373912012",
                  },
                  {
                    icon: Mail,
                    title: "Email Address",
                    value: "shreemarutisteel7@gmail.com",
                  },
                  {
                    icon: MapPin,
                    title: "Office Location",
                    value: "Surajpur, Greater Noida, U.P.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 rounded-[24px] border border-orange-100/60 bg-orange-50/50 p-5"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-[0_15px_35px_rgba(249,115,22,0.25)]">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <h4 className="text-lg font-black text-zinc-900">
                          {item.title}
                        </h4>

                        <p className="mt-2 text-sm leading-7 text-zinc-600">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* BOTTOM BOX */}
              <div className="relative z-10 mt-8 rounded-[28px] border border-orange-100 bg-gradient-to-r from-orange-50 to-white p-6">
                <p className="text-sm leading-7 text-zinc-600">
                  Trusted manufacturer, supplier and stockist of stainless
                  steel, carbon steel, pipes, fittings, flanges and industrial
                  engineering materials across India.
                </p>
              </div>
            </div>

            {/* FLOATING CARD */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -bottom-6 -left-6 hidden rounded-[28px] border border-white/60 bg-white/80 p-5 shadow-[0_20px_60px_rgba(249,115,22,0.12)] backdrop-blur-2xl sm:block"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                  <Sparkles className="h-7 w-7" />
                </div>

                <div>
                  <h4 className="text-lg font-black text-zinc-900">
                    Quick Support
                  </h4>

                  <p className="text-sm text-zinc-600">
                    Fast Industrial Assistance
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;