// components/home/Hero.tsx

"use client";

import Link from "next/link";
import Image from "next/image";

import { ArrowRight, Phone } from "lucide-react";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fff7f2] via-white to-[#fff3eb] pt-22 lg:pt-20 pb-14">
      {/* Background Effects */}
      <div className="absolute top-[-120px] right-[-120px] w-[450px] h-[450px] bg-orange-200/40 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-100px] left-[-100px] w-[350px] h-[350px] bg-orange-100 blur-[120px] rounded-full" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 bg-white border border-orange-200 shadow-lg shadow-orange-100 rounded-full px-6 py-3 mb-8"
            >
              <span className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" />

              <span className="text-sm font-bold uppercase tracking-[3px] text-orange-600">
                Industrial Steel Supplier
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-5xl sm:text-6xl xl:text-7xl font-black uppercase leading-[1.05] text-[#111111]"
            >
              Premium
              <br />

              <span className="text-orange-500">
                Stainless
              </span>{" "}
              Steel
              <br />

              Products
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-zinc-600 text-lg lg:text-xl leading-relaxed mt-8 max-w-[650px]"
            >
              Leading manufacturers, suppliers &
              stockists of stainless steel pipes,
              fittings, flanges, valves and industrial
              raw materials delivering premium quality
              solutions across India.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap items-center gap-5 mt-10"
            >
              {/* Primary Button */}
              <Link
                href="/products"
                className="group relative overflow-hidden flex items-center gap-3 bg-orange-500 hover:bg-orange-600 px-8 py-5 rounded-2xl text-white font-bold uppercase tracking-[2px] transition-all duration-300 shadow-[0_15px_40px_rgba(249,115,22,0.35)]"
              >
                <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-all duration-300" />

                <span className="relative z-10">
                  Explore Products
                </span>

                <ArrowRight
                  size={18}
                  className="relative z-10 group-hover:translate-x-1 transition-all duration-300"
                />
              </Link>

              {/* Secondary Button */}
              <a
                href="tel:+918373912012"
                className="group flex items-center gap-3 border-2 border-zinc-300 hover:border-orange-500 bg-white hover:bg-orange-50 px-8 py-5 rounded-2xl text-[#111111] uppercase tracking-[2px] font-bold transition-all duration-300 shadow-lg"
              >
                <Phone
                  size={18}
                  className="text-orange-500"
                />

                Call Now
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-16"
            >
              {[
                ["15+", "Years Experience"],
                ["500+", "Industrial Clients"],
                ["1000+", "Products Available"],
              ].map((item, index) => (
                <div
                  key={index}
                  className="group bg-white border border-zinc-200 hover:border-orange-300 rounded-3xl p-7 shadow-lg hover:shadow-orange-100 transition-all duration-300"
                >
                  <h3 className="text-4xl font-black text-orange-500">
                    {item[0]}
                  </h3>

                  <p className="text-zinc-500 text-sm uppercase tracking-[2px] mt-3 leading-relaxed">
                    {item[1]}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Decorative Card */}
            <div className="absolute top-10 -left-8 bg-white border border-zinc-200 shadow-2xl rounded-3xl p-5 z-20 hidden lg:block">
              <p className="text-sm uppercase tracking-[3px] text-zinc-500 font-semibold">
                Premium Quality
              </p>

              <h4 className="text-2xl font-black text-orange-500 mt-2">
                Industrial Steel
              </h4>
            </div>

            {/* Image Wrapper */}
            <div className="relative rounded-[40px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)] border border-white/50">
              <Image
                src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1400&auto=format&fit=crop"
                alt="Industrial Steel Products"
                width={700}
                height={850}
                priority
                className="w-full h-[500px] lg:h-[700px] object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-8 right-8 bg-white backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl px-8 py-5">
              <h3 className="text-3xl font-black text-orange-500">
                100%
              </h3>

              <p className="text-zinc-500 uppercase tracking-[2px] text-sm font-semibold mt-1">
                Quality Assurance
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;