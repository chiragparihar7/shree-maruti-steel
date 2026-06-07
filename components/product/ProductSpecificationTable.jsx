
// /components/product/ProductSpecificationTable.jsx

"use client";

import { motion } from "framer-motion";

import {
  Database,
  FileCheck2,
  Sparkles,
} from "lucide-react";

export default function ProductSpecificationTable({ product }) {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:70px_70px]" />

      {/* GLOW */}
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[360px] w-[360px] rounded-full bg-orange-400/10 blur-[130px]" />

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
              Technical Specifications
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
            Product
            <span className="block bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 bg-clip-text text-transparent">
              Specifications
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
            Detailed industrial specifications, technical properties and
            engineering standards for reliable industrial applications.
          </motion.p>
        </div>

        {/* MAIN GRID */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* SPECIFICATION TABLE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[34px] border border-orange-100 bg-white shadow-[0_20px_70px_rgba(249,115,22,0.10)]"
          >
            {/* TABLE HEADER */}
            <div className="flex items-center gap-4 border-b border-orange-100 bg-gradient-to-r from-slate-950 to-slate-900 px-6 py-5 sm:px-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10">
                <Database className="h-7 w-7 text-orange-500" />
              </div>

              <div>
                <h3 className="text-2xl font-black text-white">
                  Product Details
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Industrial Engineering Specifications
                </p>
              </div>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <tbody>
                  {product.specifications?.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-orange-50 transition-all duration-300 hover:bg-orange-50/50"
                    >
                      {/* LABEL */}
                      <td className="w-[40%] bg-slate-950 px-5 py-5 text-sm font-bold uppercase tracking-[1px] text-white sm:px-6">
                        {item.label}
                      </td>

                      {/* VALUE */}
                      <td className="px-5 py-5 text-sm font-semibold leading-7 text-slate-700 sm:px-6 sm:text-base">
                        {item.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* TECHNICAL TABLE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[34px] border border-orange-100 bg-white shadow-[0_20px_70px_rgba(249,115,22,0.10)]"
          >
            {/* TABLE HEADER */}
            <div className="flex items-center gap-4 border-b border-orange-100 bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-5 sm:px-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xl">
                <FileCheck2 className="h-7 w-7 text-white" />
              </div>

              <div>
                <h3 className="text-2xl font-black text-white">
                  Technical Data
                </h3>

                <p className="mt-1 text-sm text-orange-100">
                  Engineering & Industrial Standards
                </p>
              </div>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead className="border-b border-orange-100 bg-orange-50">
                  <tr>
                    <th className="px-5 py-5 text-left text-sm font-black uppercase tracking-[1px] text-slate-900 sm:px-6">
                      Property
                    </th>

                    <th className="px-5 py-5 text-left text-sm font-black uppercase tracking-[1px] text-slate-900 sm:px-6">
                      Details
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {product.technicalTable?.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-orange-50 transition-all duration-300 hover:bg-orange-50/40"
                    >
                      {/* PROPERTY */}
                      <td className="px-5 py-5 text-sm font-bold text-slate-900 sm:px-6 sm:text-base">
                        {item.property}
                      </td>

                      {/* VALUE */}
                      <td className="px-5 py-5 text-sm leading-7 text-slate-600 sm:px-6 sm:text-base">
                        {item.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

