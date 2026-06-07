
// /components/product/ProductFAQ.jsx

"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  ChevronDown,
  Sparkles,
  MessageCircleQuestion,
} from "lucide-react";

export default function ProductFAQ({ product }) {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:70px_70px]" />

      {/* GLOW */}
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="absolute bottom-[-140px] right-[-120px] h-[360px] w-[360px] rounded-full bg-orange-400/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-4xl text-center">
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 rounded-full border border-orange-200 bg-orange-50 px-5 py-3 shadow-lg shadow-orange-100/40"
          >
            <Sparkles className="h-5 w-5 text-orange-500" />

            <span className="text-xs font-bold uppercase tracking-[3px] text-orange-600">
              Frequently Asked Questions
            </span>
          </motion.div>

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 text-4xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Questions About
            <span className="block bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 bg-clip-text text-transparent">
              Our Products
            </span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9"
          >
            Find answers to commonly asked questions related to industrial
            products, specifications, quality standards and supply support.
          </motion.p>
        </div>

        {/* FAQ LIST */}
        <div className="mx-auto mt-16 max-w-5xl space-y-5">
          {product.faqs?.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className={`group overflow-hidden rounded-[30px] border transition-all duration-500
              
              ${
                active === index
                  ? "border-orange-500 bg-gradient-to-r from-orange-50 to-white shadow-[0_20px_60px_rgba(249,115,22,0.15)]"
                  : "border-slate-200 bg-white shadow-lg shadow-slate-100/60 hover:border-orange-300"
              }`}
            >
              {/* BUTTON */}
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="flex w-full items-center justify-between gap-5 p-5 text-left sm:p-7"
              >
                {/* LEFT */}
                <div className="flex items-start gap-4 sm:gap-5">
                  {/* ICON */}
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-all duration-500
                    ${
                      active === index
                        ? "bg-orange-500 text-white"
                        : "bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white"
                    }`}
                  >
                    <MessageCircleQuestion className="h-7 w-7" />
                  </div>

                  {/* QUESTION */}
                  <div>
                    <h3 className="text-lg font-black leading-7 text-slate-900 sm:text-xl sm:leading-8">
                      {faq.question}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      Click to view detailed answer
                    </p>
                  </div>
                </div>

                {/* ARROW */}
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all duration-500
                  ${
                    active === index
                      ? "bg-orange-500 text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  <ChevronDown
                    className={`h-6 w-6 transition-transform duration-500 ${
                      active === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {/* ANSWER */}
              <AnimatePresence initial={false}>
                {active === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                  >
                    <div className="border-t border-orange-100 px-5 pb-6 pt-5 sm:px-7 sm:pb-7">
                      <div className="rounded-2xl bg-orange-50/60 p-5 sm:p-6">
                        <p className="text-sm leading-8 text-slate-700 sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
