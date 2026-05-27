// components/home/ProductCategories.tsx

"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { motion } from "framer-motion";

const products = [
  {
    title: "Stainless Steel Pipes",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Steel Plates",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Pipe Fittings",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Industrial Valves",
    image:
      "https://images.unsplash.com/photo-1581092919535-7146ff1a5905?q=80&w=1400&auto=format&fit=crop",
  },
];

const ProductCategories = () => {
  return (
    <section className="relative overflow-hidden py-28 bg-[#f8f8f8]">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:25px_25px]" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
          <div>
            {/* Tag */}
            <div className="inline-flex items-center gap-3 bg-white border border-orange-200 shadow-lg rounded-full px-6 py-3 mb-8">
              <span className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" />

              <span className="text-orange-600 uppercase tracking-[3px] text-sm font-bold">
                Product Categories
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl xl:text-7xl font-black uppercase leading-[1] text-[#111111]">
              Premium
              <br />

              <span className="text-orange-500">
                Steel Products
              </span>
            </h2>
          </div>

          {/* Right Text */}
          <div className="max-w-[520px]">
            <p className="text-zinc-600 text-lg leading-relaxed">
              Discover our extensive range of premium
              industrial steel products engineered for
              strength, durability and industrial
              performance.
            </p>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {products.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-[35px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.14)] transition-all duration-500">
                {/* Image */}
                <div className="relative overflow-hidden h-[380px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-all duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>

                {/* Floating Number */}
                <div className="absolute top-6 left-6 w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                  <span className="text-white font-black text-lg">
                    0{index + 1}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 w-full p-7">
                  {/* Small Label */}
                  <span className="text-orange-400 uppercase tracking-[3px] text-xs font-bold">
                    Industrial Products
                  </span>

                  {/* Title */}
                  <h3 className="text-3xl font-black uppercase text-white leading-tight mt-3">
                    {item.title}
                  </h3>

                  {/* Button */}
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-3 mt-6 group/link"
                  >
                    <span className="text-white uppercase tracking-[2px] text-sm font-bold">
                      Explore Product
                    </span>

                    <div className="w-11 h-11 rounded-full bg-orange-500 flex items-center justify-center group-hover/link:bg-white transition-all duration-300">
                      <ArrowRight
                        size={18}
                        className="text-white group-hover/link:text-orange-500 group-hover/link:translate-x-1 transition-all duration-300"
                      />
                    </div>
                  </Link>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 rounded-[35px] border-2 border-transparent group-hover:border-orange-300 transition-all duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 flex justify-center">
          <Link
            href="/products"
            className="group relative overflow-hidden inline-flex items-center gap-4 bg-[#111111] hover:bg-orange-500 px-10 py-5 rounded-2xl text-white uppercase tracking-[2px] font-bold transition-all duration-300 shadow-xl"
          >
            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-all duration-300" />

            <span className="relative z-10">
              View All Products
            </span>

            <ArrowRight
              size={18}
              className="relative z-10 group-hover:translate-x-1 transition-all duration-300"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;