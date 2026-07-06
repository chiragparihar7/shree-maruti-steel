"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  FileCheck2,
  Clock,
  LockKeyhole,
  ArrowRight,
  Download,
  Award,
  ClipboardCheck,
} from "lucide-react";

const certifications = [
  {
    title: "Business Registration Certificate",
    description:
      "Official certificate validating Shree Maruti Steel as a registered and compliant industrial business.",
    icon: BadgeCheck,
    status: "available",
    file: "/certificates/shree-maruti-steel-certificate.pdf",
    tag: "Available",
  },
  {
    title: "MSME Certificate",
    description:
      "Government-recognized MSME registration supporting our credibility as a dependable supplier.",
    icon: ShieldCheck,
    status: "available",
    file: "/certificates/shree-maruti-steel-msme.pdf",
    tag: "Available",
  },
  {
    title: "ISO Certification",
    description:
      "International quality certification documentation will be updated here once available.",
    icon: Award,
    status: "unavailable",
    file: null,
    tag: "Not Available Yet",
  },
  {
    title: "Material Test Certificate",
    description:
      "Product-specific testing and material validation documents are currently not available online.",
    icon: ClipboardCheck,
    status: "unavailable",
    file: null,
    tag: "Not Available Yet",
  },
  {
    title: "Vendor Registration Certificate",
    description:
      "Vendor approval and registration documents will be published after official verification.",
    icon: FileCheck2,
    status: "unavailable",
    file: null,
    tag: "Not Available Yet",
  },
];

const CertificationsGrid = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/50 to-white py-16 lg:py-20">
      <div className="absolute left-[-140px] top-[-120px] h-[420px] w-[420px] rounded-full bg-orange-300/25 blur-[140px]" />
      <div className="absolute right-[-160px] top-[18%] h-[360px] w-[360px] rounded-full bg-amber-300/20 blur-[120px]" />
      <div className="absolute bottom-[-140px] left-[20%] h-[380px] w-[380px] rounded-full bg-orange-400/20 blur-[130px]" />

      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/85 px-5 py-2.5 shadow-lg shadow-orange-100 backdrop-blur-xl">
            <ShieldCheck className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-semibold uppercase tracking-wide text-orange-600">
              Verified Documentation
            </span>
          </div>

          <h2 className="mt-7 text-4xl font-black leading-[1.08] text-zinc-900 sm:text-5xl lg:text-6xl">
            Certificates &{" "}
            <span className="relative inline-block text-orange-500">
              Compliance
              <span className="absolute bottom-2 left-0 -z-10 h-3 w-full rounded-full bg-orange-200/70" />
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-zinc-600 sm:text-lg">
            Currently, two official certificates are available for verification.
            Other documentation will be updated once it is officially available.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
          {certifications.map((item, index) => {
            const Icon = item.icon;
            const isAvailable = item.status === "available";

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-[32px] border p-7 shadow-xl backdrop-blur-xl transition-all duration-500 ${
                  isAvailable
                    ? "border-orange-100 bg-white/90 shadow-orange-100/50 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-200/60"
                    : "border-zinc-200 bg-white/65 shadow-zinc-100 grayscale-[0.15]"
                }`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 ${
                    isAvailable
                      ? "bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400"
                      : "bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200"
                  }`}
                />

                <div
                  className={`absolute right-0 top-0 h-32 w-32 rounded-full blur-3xl ${
                    isAvailable ? "bg-orange-200/35" : "bg-zinc-200/50"
                  }`}
                />

                <div className="relative z-10 flex items-start justify-between gap-5">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-500 group-hover:scale-110 ${
                      isAvailable
                        ? "bg-gradient-to-br from-orange-500 to-amber-500 shadow-orange-300/40"
                        : "bg-gradient-to-br from-zinc-400 to-zinc-500 shadow-zinc-200"
                    }`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>

                  <div
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-wide ${
                      isAvailable
                        ? "border-orange-100 bg-orange-50 text-orange-600"
                        : "border-zinc-200 bg-zinc-50 text-zinc-500"
                    }`}
                  >
                    {isAvailable ? (
                      <FileCheck2 className="h-3.5 w-3.5" />
                    ) : (
                      <Clock className="h-3.5 w-3.5" />
                    )}
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

                {isAvailable ? (
                  <div className="relative z-10 mt-8 flex flex-wrap items-center gap-3">
                    <a
                      href={item.file || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-zinc-200 transition-all duration-300 hover:bg-orange-500"
                    >
                      View Certificate
                      <ArrowRight className="h-4 w-4" />
                    </a>

                    <a
                      href={item.file || "#"}
                      download
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-orange-100 bg-white text-orange-500 shadow-sm transition-all duration-300 hover:border-orange-300 hover:bg-orange-50"
                      aria-label={`Download ${item.title}`}
                    >
                      <Download className="h-4 w-4" />
                    </a>
                  </div>
                ) : (
                  <div className="relative z-10 mt-8 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-zinc-500">
                    <LockKeyhole className="h-4 w-4" />
                    Currently Not Available
                  </div>
                )}

                <div
                  className={`relative z-10 mt-6 h-[4px] w-16 rounded-full transition-all duration-500 group-hover:w-full ${
                    isAvailable ? "bg-orange-500" : "bg-zinc-300"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsGrid;