"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  BadgeCheck,
} from "lucide-react";
import CertificateCard from "./CertificateCard";
import { certifications } from "./certificationsData";

const CertificationsGrid = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/40 to-white py-10 sm:py-14 lg:py-12">
      {/* PREMIUM BACKGROUND GLOWS */}
      <div className="absolute left-[-140px] top-[-100px] h-[420px] w-[420px] rounded-full bg-orange-300/25 blur-[140px]" />

      <div className="absolute right-[-160px] top-[20%] h-[360px] w-[360px] rounded-full bg-amber-300/20 blur-[120px]" />

      <div className="absolute bottom-[-120px] left-[20%] h-[380px] w-[380px] rounded-full bg-orange-400/20 blur-[130px]" />

      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:72px_72px]" />

      {/* PREMIUM TOP BLUR */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-orange-100/40 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
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
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl text-center"
        >
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200/60 bg-white/70 px-5 py-2.5 backdrop-blur-xl shadow-[0_8px_30px_rgba(249,115,22,0.12)]"
          >
            <ShieldCheck className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-semibold tracking-wide text-orange-600">
              Certified Industrial Excellence
            </span>
          </motion.div>

          <h2 className="text-4xl font-black leading-[1.05] tracking-[-0.03em] text-zinc-900 sm:text-5xl lg:text-7xl">
            Trusted Quality &
            <span className="relative mt-2 block bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              Global Certifications
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-zinc-600 sm:text-lg">
            Shree Maruti Steel delivers premium industrial-grade steel products
            backed by internationally recognized certifications, strict quality
            standards, and engineering precision trusted across industries.
          </p>

          {/* PREMIUM STATS */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                title: "100%",
                subtitle: "Quality Assured",
                icon: ShieldCheck,
              },
              {
                title: "ISO",
                subtitle: "Certified Standards",
                icon: BadgeCheck,
              },
              {
                title: "Premium",
                subtitle: "Industrial Grade",
                icon: Sparkles,
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-[28px] border border-white/60 bg-white/70 p-6 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(249,115,22,0.18)]"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-[0_10px_30px_rgba(249,115,22,0.35)]">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <div className="relative z-10 mt-5">
                    <h3 className="text-3xl font-black text-zinc-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm font-medium tracking-wide text-zinc-500">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CERTIFICATION CARDS */}
        <div className="mt-20 grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
          {certifications.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 70,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="group relative"
            >
              {/* OUTER PREMIUM GLOW */}
              <div className="absolute -inset-[1px] rounded-[36px] bg-gradient-to-br from-orange-400/40 via-orange-200/10 to-transparent opacity-0 blur-xl transition-all duration-700 group-hover:opacity-100" />

              {/* CARD WRAPPER */}
              <div className="relative rounded-[36px] border border-white/60 bg-white/70 p-[1px] backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group-hover:shadow-[0_25px_70px_rgba(249,115,22,0.18)]">
                <div className="rounded-[34px] bg-gradient-to-br from-white via-orange-50/30 to-white">
                  <CertificateCard
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM PREMIUM STRIP */}
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
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="relative mt-24 overflow-hidden rounded-[40px] border border-orange-100 bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 p-8 shadow-[0_20px_80px_rgba(249,115,22,0.25)] sm:p-10"
        >
          {/* OVERLAY */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.35),transparent_35%)]" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-black leading-tight text-white sm:text-4xl">
                Industrial Quality You Can Trust
              </h3>

              <p className="mt-4 text-base leading-7 text-orange-50/90 sm:text-lg">
                Every product undergoes strict inspection and quality validation
                to ensure world-class industrial performance and long-term
                reliability.
              </p>
            </div>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-4 text-sm font-bold tracking-wide text-orange-600 shadow-[0_12px_35px_rgba(255,255,255,0.25)] transition-all duration-300 hover:bg-orange-50"
            >
              View Certifications
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsGrid;