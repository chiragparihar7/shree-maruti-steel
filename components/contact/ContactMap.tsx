"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  PhoneCall,
  Mail,
} from "lucide-react";

const ContactMap = () => {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-14 lg:py-18">
      {/* GLOW */}
      <div className="absolute left-[-120px] top-0 h-[320px] w-[320px] rounded-full bg-orange-300/15 blur-[120px]" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[360px] w-[360px] rounded-full bg-orange-400/15 blur-[130px]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:72px_72px]" />

      {/* HEADER */}
      <div className="relative z-10 mx-auto mb-14 max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: true }}
        >
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/60 bg-orange-50/70 px-5 py-2.5 shadow-lg shadow-orange-100/20 backdrop-blur-xl">
            <MapPin className="h-4 w-4 text-orange-500" />

            <span className="text-sm font-bold tracking-wide text-orange-600">
              Visit Our Location
            </span>
          </div>

          {/* TITLE */}
          <h2 className="mt-7 text-4xl font-black leading-[1] tracking-[-0.03em] text-zinc-900 sm:text-5xl lg:text-6xl">
            Find Us On
            <span className="mt-2 block bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              Google Maps
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-zinc-600 sm:text-lg">
            Visit Shree Maruti Steel for premium industrial steel products,
            engineering materials and industrial supply solutions.
          </p>
        </motion.div>
      </div>

      {/* FULL WIDTH MAP */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
        }}
        viewport={{ once: true }}
        className="relative z-10 overflow-hidden border-y border-orange-100 shadow-[0_25px_80px_rgba(249,115,22,0.10)]"
      >
        {/* OVERLAY CARD */}
        <div className="absolute left-6 top-6 z-20 hidden max-w-sm rounded-[32px] border border-white/20 bg-white/80 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-2xl lg:block">
          {/* TOP */}
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-[0_15px_40px_rgba(249,115,22,0.35)]">
              <MapPin className="h-8 w-8" />
            </div>

            <div>
              <h3 className="text-2xl font-black text-zinc-900">
                Shree Maruti Steel
              </h3>

              <p className="mt-1 text-sm text-orange-500">
                Industrial Steel Supplier
              </p>
            </div>
          </div>

          {/* INFO */}
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-orange-500" />

              <p className="text-sm leading-7 text-zinc-600">
                Shop No. 01, Jindal Colony, Opp. JK Dharam Kata,
                Main Dadri Road, Surajpur, Greater Noida, U.P.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <PhoneCall className="h-5 w-5 text-orange-500" />

              <p className="text-sm font-medium text-zinc-700">
                +91 8373912012
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-orange-500" />

              <p className="text-sm font-medium text-zinc-700">
                shreemarutisteel7@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* MAP */}
        <iframe
          src="https://www.google.com/maps?q=Surajpur%20Greater%20Noida&output=embed"
          width="100%"
          height="650"
          loading="lazy"
          className="border-0 grayscale-[0.1]"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>
    </section>
  );
};

export default ContactMap;