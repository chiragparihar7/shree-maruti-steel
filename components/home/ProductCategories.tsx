"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const products = [
  {
    title: "Stainless Steel Pipes",
    image: "/Product/product1.jpg",
  },
  {
    title: "M.S. / G.I. ERW Pipes",
    image: "/Product/product2.jpg",
  },
  {
    title: "C.S. Seamless Pipes",
    image: "/Product/product3.jpg",
  },
  {
    title: "Alloy Steel Pipes",
    image: "/Product/product4.jpg",
  },
  {
    title: "Stainless Steel Plates",
    image: "/Product/product5.jpg",
  },
  {
    title: "Boiler Steel Plates",
    image: "/Product/product6.jpg",
  },
  {
    title: "S.S. Pipe Fittings",
    image: "/Product/product7.jpg",
  },
  {
    title: "C.S. Pipe Fittings",
    image: "/Product/product8.jpg",
  },
  {
    title: "Industrial Valves",
    image: "/Product/product9.jpg",
  },
  {
    title: "Hydraulic Tube Fittings",
    image: "/Product/product10.jpg",
  },
  {
    title: "Nut Bolt & Washer",
    image: "/Product/product11.jpg",
  },
  {
    title: "Fire Safety Equipment",
    image: "/Product/product12.jpg",
  },
  {
    title: "Hand Tools",
    image: "/Product/product13.jpg",
  },
  {
    title: "Brass Fittings",
    image: "/Product/product14.jpg",
  },
  {
    title: "Copper Fittings",
    image: "/Product/product15.jpg",
  },
  {
    title: "Pressure Gauges",
    image: "/Product/product16.jpg",
  },
  {
    title: "Temperature Gauges",
    image: "/Product/product17.jpg",
  },
  {
    title: "Gauge Accessories",
    image: "/Product/product18.jpg",
  },
  {
    title: "Bearings",
    image: "/Product/product19.jpg",
  },
  {
    title: "Bushings",
    image: "/Product/product20.jpg",
  },
  {
    title: "Threaded Rod",
    image: "/Product/product21.jpg",
  },
  {
    title: "Rivets",
    image: "/Product/product22.jpg",
  },
  {
    title: "Wire Products",
    image: "/Product/product23.jpg",
  },
];

const ProductCategories = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8f8f8] py-16 sm:py-20 lg:py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* BLUR */}
      <div className="absolute top-0 right-0 w-[320px] h-[320px] bg-orange-100 blur-[120px] rounded-full" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-14 mb-14 sm:mb-16 lg:mb-20">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-3 bg-white border border-orange-200 shadow-lg rounded-full px-5 sm:px-6 py-2.5 sm:py-3 mb-6 sm:mb-8">
              <span className="w-2.5 h-2.5 bg-orange-500 rounded-full animate-pulse" />

              <span className="text-orange-600 uppercase tracking-[2px] sm:tracking-[3px] text-[11px] sm:text-sm font-bold">
                Product Categories
              </span>
            </div>

            {/* HEADING */}
            <h2 className="text-3xl sm:text-5xl xl:text-7xl font-black uppercase leading-[1.05] text-[#111111]">
              Industrial
              <br />

              <span className="text-orange-500">
                Raw Materials
              </span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="max-w-[520px]">
            <p className="text-zinc-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Explore our complete range of industrial steel products,
              fittings, valves, gauges, safety equipment and engineering
              materials with premium quality and industrial standards.
            </p>
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {products.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* CARD */}
              <div className="relative overflow-hidden rounded-[28px] sm:rounded-[35px] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.14)] transition-all duration-500 h-full">
                {/* IMAGE */}
                <div className="relative overflow-hidden h-[260px] sm:h-[320px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-all duration-700"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/20 to-transparent" />
                </div>

                {/* NUMBER */}
                <div className="absolute top-5 left-5 sm:top-6 sm:left-6 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                  <span className="text-white font-black text-base sm:text-lg">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 w-full p-5 sm:p-7">
                  {/* LABEL */}
                  <span className="text-orange-400 uppercase tracking-[2px] sm:tracking-[3px] text-[10px] sm:text-xs font-bold">
                    Industrial Product
                  </span>

                  {/* TITLE */}
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-white leading-tight mt-3">
                    {item.title}
                  </h3>

                  {/* BUTTONS */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-5">
                    {/* VIEW */}
                   
                    {/* MESSAGE */}
                    <a
                      href={`https://wa.me/918373912012?text=Hello%20I%20want%20information%20about%20${item.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 hover:bg-white hover:text-orange-500 backdrop-blur-xl px-4 py-3 text-white text-xs sm:text-sm font-bold uppercase tracking-[1px] transition-all duration-300"
                    >
                      <MessageCircle size={16} />

                      Message
                    </a>
                  </div>
                </div>

                {/* HOVER BORDER */}
                <div className="absolute inset-0 rounded-[28px] sm:rounded-[35px] border-2 border-transparent group-hover:border-orange-300 transition-all duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 sm:mt-16 lg:mt-20 flex justify-center">
          <Link
            href="/products"
            className="group relative overflow-hidden inline-flex items-center gap-3 sm:gap-4 bg-[#111111] hover:bg-orange-500 px-7 sm:px-10 py-4 sm:py-5 rounded-2xl text-white uppercase tracking-[1px] sm:tracking-[2px] text-sm sm:text-base font-bold transition-all duration-300 shadow-xl"
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