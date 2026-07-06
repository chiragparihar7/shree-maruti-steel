"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  ShieldCheck,
  ArrowRight,
  FileCheck2,
  Download,
} from "lucide-react";

const certifications = [
  {
    title: "Business Registration Certificate",
    description:
      "Official certificate validating Shree Maruti Steel as a trusted, registered, and compliant industrial business.",
    icon: BadgeCheck,
    number: "01",
    file: "/certificates/shree-maruti-steel-certificate.pdf",
    label: "View Certificate",
    tag: "Verified Document",
  },
  {
    title: "MSME Certified",
    description:
      "Recognized under MSME registration, strengthening our credibility as a dependable industrial supplier.",
    icon: ShieldCheck,
    number: "02",
    file: "/certificates/shree-maruti-steel-msme.pdf",
    label: "View MSME",
    tag: "Government Registered",
  },
];

const Certifications = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/50 to-white py-16 lg:py-20">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[300px] w-[300px] bg-orange-300/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[320px] w-[320px] bg-orange-400/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/85 px-5 py-2 shadow-lg shadow-orange-100 backdrop-blur-xl">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-orange-500" />

            <span className="text-sm font-semibold uppercase tracking-[3px] text-orange-600">
              Certifications
            </span>
          </div>

          <h2 className="mt-7 text-4xl font-black leading-[1.1] text-zinc-900 sm:text-5xl lg:text-6xl">
            Trusted &{" "}
            <span className="relative inline-block text-orange-500">
              Certified
              <span className="absolute bottom-2 left-0 -z-10 h-3 w-full rounded-full bg-orange-200/60" />
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-600">
            Shree Maruti Steel is committed to delivering trusted industrial
            products with verified certifications, reliable supply standards,
            and professional business compliance.
          </p>
        </motion.div>

        {/* Certificate Cards */}
        <div className="mx-auto mt-20 grid max-w-5xl gap-7 md:grid-cols-2">
          {certifications.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[32px] border border-orange-100 bg-white/85 p-7 shadow-xl shadow-orange-100/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-200/60"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400" />

                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-orange-200/30 blur-3xl transition-all duration-500 group-hover:bg-orange-300/50" />

                <span className="absolute right-6 top-6 text-5xl font-black text-zinc-100">
                  {item.number}
                </span>

                <div className="relative z-10 flex items-start justify-between gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 text-white shadow-lg shadow-orange-300/40 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-8 w-8" />
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-orange-600">
                    <FileCheck2 className="h-3.5 w-3.5" />
                    {item.tag}
                  </div>
                </div>

                <div className="relative z-10 mt-8">
                  <h3 className="text-2xl font-bold leading-snug text-zinc-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-zinc-600">
                    {item.description}
                  </p>
                </div>

                <div className="relative z-10 mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-zinc-200 transition-all duration-300 hover:bg-orange-500 hover:shadow-orange-200"
                  >
                    {item.label}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>

                  <a
                    href={item.file}
                    download
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-orange-100 bg-white text-orange-500 shadow-sm transition-all duration-300 hover:border-orange-300 hover:bg-orange-50"
                    aria-label={`Download ${item.title}`}
                  >
                    <Download className="h-4 w-4" />
                  </a>
                </div>

                <div className="relative z-10 mt-6 h-[4px] w-16 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Trust Box */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-[35px] border border-orange-100 bg-white/85 shadow-2xl shadow-orange-100/50 backdrop-blur-xl"
        >
          <div className="grid gap-8 p-8 lg:grid-cols-[1.5fr_0.8fr] lg:items-center lg:p-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-bold uppercase tracking-wide text-orange-600">
                <BadgeCheck className="h-4 w-4" />
                Quality You Can Verify
              </div>

              <h3 className="mt-5 text-3xl font-black text-zinc-900">
                Reliable Industrial Partner
              </h3>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">
                We ensure trusted sourcing, premium quality standards, fast
                supply chain management, and dependable industrial service for
                every project requirement.
              </p>
            </div>

            <div className="rounded-[28px] bg-gradient-to-br from-zinc-950 to-zinc-800 p-6 text-white shadow-2xl shadow-zinc-200">
              <p className="text-sm font-semibold uppercase tracking-[3px] text-orange-300">
                Documentation
              </p>

              <h4 className="mt-4 text-2xl font-black">
                Certificates Available
              </h4>

              <p className="mt-3 text-sm leading-6 text-zinc-300">
                View or download our official business and MSME certificates for
                quick verification.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="/certificates/shree-maruti-steel-certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600"
                >
                  Business Certificate
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="/certificates/shree-maruti-steel-msme.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-orange-300 hover:text-orange-300"
                >
                  MSME Certificate
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;