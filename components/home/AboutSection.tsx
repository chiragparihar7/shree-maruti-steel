// components/home/AboutSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowRight, BadgeCheck, Factory, ShieldCheck } from "lucide-react";

import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-18">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-100/40 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-50 blur-[120px] rounded-full" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Images */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400&auto=format&fit=crop"
              alt="Industrial Steel"
              width={700}
              height={800}
              className="w-full h-[650px] object-cover rounded-3xl"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-10 right-6 bg-white border border-zinc-200 rounded-3xl shadow-2xl p-8 max-w-[280px]">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center">
                  <Factory size={30} className="text-white" />
                </div>

                <div>
                  <h3 className="text-3xl font-black text-[#111111]">15+</h3>

                  <p className="text-zinc-500 uppercase tracking-[2px] text-xs font-semibold">
                    Years Experience
                  </p>
                </div>
              </div>

              <p className="text-zinc-500 text-sm leading-relaxed mt-5">
                Delivering premium industrial steel products with trust, quality
                & commitment.
              </p>
            </div>

            {/* Small Badge */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl px-6 py-4 flex items-center gap-3">
              <BadgeCheck size={22} className="text-orange-500" />

              <span className="text-sm font-bold uppercase tracking-[2px] text-[#111111]">
                Trusted Supplier
              </span>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Section Tag */}
            <span className="inline-flex items-center gap-3 bg-orange-50 border border-orange-200 rounded-full px-6 py-3 text-orange-600 uppercase tracking-[4px] text-sm font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
              About Company
            </span>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-black uppercase leading-[1.1] text-[#111111] mt-8">
              Trusted
              <br />
              <span className="text-orange-500">Industrial Steel</span> Supplier
            </h2>

            {/* Description */}
            <p className="text-zinc-600 text-lg leading-relaxed mt-8">
              Shree Maruti Steel is one of the leading manufacturers, suppliers
              & stockists of stainless steel pipes, fittings, flanges, valves
              and industrial raw materials serving industries across India with
              quality, trust and commitment.
            </p>

            <p className="text-zinc-500 leading-relaxed mt-6">
              We provide premium quality steel solutions for petrochemical,
              construction, railway, oil & gas, engineering and industrial
              sectors with reliable service and competitive pricing.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              {[
                "Premium Quality Products",
                "Trusted Industrial Supplier",
                "Fast Nationwide Delivery",
                "Reliable Customer Support",
              ].map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 bg-white border border-zinc-200 hover:border-orange-300 rounded-2xl p-5 shadow-lg hover:shadow-orange-100 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                    <ShieldCheck size={20} className="text-orange-500" />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#111111] uppercase text-sm tracking-[1px] leading-relaxed">
                      {item}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-5 mt-12">
              <Link
                href="/about"
                className="group relative overflow-hidden flex items-center gap-3 bg-orange-500 hover:bg-orange-600 px-8 py-5 rounded-2xl text-white font-bold uppercase tracking-[2px] transition-all duration-300 shadow-[0_15px_40px_rgba(249,115,22,0.35)]"
              >
                <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-all duration-300" />

                <span className="relative z-10">Read More</span>

                <ArrowRight
                  size={18}
                  className="relative z-10 group-hover:translate-x-1 transition-all duration-300"
                />
              </Link>

              {/* Experience Box */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#111111] flex items-center justify-center">
                  <Factory size={26} className="text-orange-500" />
                </div>

                <div>
                  <h4 className="text-xl font-black text-[#111111]">
                    Industrial Excellence
                  </h4>

                  <p className="text-zinc-500 text-sm uppercase tracking-[2px]">
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
