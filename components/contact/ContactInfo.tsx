"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-400 to-amber-500 py-16 sm:py-20 lg:py-24">
      {/* PREMIUM GLOW */}
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-white/20 blur-[120px]" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[360px] w-[360px] rounded-full bg-black/10 blur-[130px]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:72px_72px]" />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[40px] border border-white/15 bg-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.15)] backdrop-blur-3xl">
          <div className="grid items-center gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:p-12">
            {/* LEFT CONTENT */}
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
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 backdrop-blur-xl">
                <Sparkles className="h-4 w-4 text-white" />

                <span className="text-sm font-semibold tracking-wide text-white">
                  Premium Industrial Support
                </span>
              </div>

              {/* TITLE */}
              <h1 className="mt-7 text-4xl font-black leading-[1] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                Let’s Build
                <span className="mt-2 block text-orange-100">
                  Industrial Excellence
                </span>
              </h1>

              {/* DESCRIPTION */}
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                Connect with Shree Maruti Steel for premium industrial steel
                products, engineering materials and trusted supply solutions.
              </p>

              {/* MINI STATS */}
              <div className="mt-8 flex flex-wrap gap-4">
                {[
                  "Trusted Supplier",
                  "Premium Quality",
                  "Fast Response",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-xl"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT CONTACT CARDS */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              viewport={{ once: true }}
              className="grid gap-4"
            >
              {[
                {
                  icon: PhoneCall,
                  title: "Call Us",
                  value: "+91 8373912012",
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  value: "shreemarutisteel7@gmail.com",
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  value: "Surajpur, Greater Noida",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="group flex items-center gap-5 rounded-[28px] border border-white/15 bg-white/10 p-5 backdrop-blur-2xl transition-all duration-500 hover:bg-white/15 hover:shadow-[0_20px_50px_rgba(255,255,255,0.08)]"
                  >
                    {/* ICON */}
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-orange-500 shadow-[0_10px_30px_rgba(255,255,255,0.2)]">
                      <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.7),transparent_60%)]" />

                      <Icon className="relative z-10 h-7 w-7" />
                    </div>

                    {/* TEXT */}
                    <div>
                      <h3 className="text-lg font-black text-white">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-7 text-white/80">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;