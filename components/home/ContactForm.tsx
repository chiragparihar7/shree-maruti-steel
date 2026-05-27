"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const contactDetails = [
  {
    title: "Phone Number",
    value: "+91 8373912012",
    icon: Phone,
  },
  {
    title: "Email Address",
    value: "shreemarutisteel7@gmail.com",
    icon: Mail,
  },
  {
    title: "Location",
    value: "Greater Noida, Uttar Pradesh",
    icon: MapPin,
  },
];

const ContactForm = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white py-20 sm:py-24 lg:py-32">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[280px] w-[280px] bg-orange-300/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[320px] w-[320px] bg-orange-400/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex h-full flex-col justify-between overflow-hidden rounded-[32px] border border-orange-100 bg-gradient-to-br from-orange-500 via-orange-400 to-orange-600 p-6 shadow-2xl shadow-orange-200/40 sm:rounded-[40px] sm:p-8 lg:p-12"
          >
            {/* TOP CONTENT */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl sm:px-5">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-white" />

                <span className="text-xs font-semibold uppercase tracking-[3px] text-white sm:text-sm">
                  Contact Us
                </span>
              </div>

              {/* Heading */}
              <h2 className="mt-6 text-3xl font-black leading-[1.1] text-white sm:text-4xl lg:text-5xl">
                Let’s Discuss Your Industrial Requirements
              </h2>

              {/* Description */}
              <p className="mt-6 text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                Connect with Shree Maruti Steel for premium stainless steel
                products, pipes, flanges, fittings, industrial raw materials,
                and customized supply solutions.
              </p>

              {/* Contact Cards */}
              <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
                {contactDetails.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="group flex items-start gap-4 rounded-[24px] border border-white/15 bg-white/10 p-4 backdrop-blur-xl transition-all duration-300 hover:bg-white/15 sm:rounded-[28px] sm:p-5"
                    >
                      {/* Icon */}
                      <div className="flex h-14 w-14 min-w-[56px] items-center justify-center rounded-2xl bg-white text-orange-500 shadow-lg transition-all duration-300 group-hover:scale-110 sm:h-16 sm:w-16 sm:min-w-[64px]">
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <p className="text-xs uppercase tracking-[2px] text-white/60 sm:text-sm">
                          {item.title}
                        </p>

                        <h3 className="mt-1 break-words text-sm font-bold leading-6 text-white sm:text-lg">
                          {item.value}
                        </h3>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Box */}
            <div className="mt-8 rounded-[24px] border border-white/15 bg-white/10 p-5 backdrop-blur-xl sm:mt-10 sm:rounded-[30px] sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 min-w-[48px] items-center justify-center rounded-2xl bg-white text-orange-500 sm:h-14 sm:w-14 sm:min-w-[56px]">
                  <ShieldCheck className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white sm:text-xl">
                    Trusted Industrial Supplier
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                    Reliable quality, competitive pricing, and fast delivery
                    solutions for industrial projects across India.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex h-full flex-col justify-between overflow-hidden rounded-[32px] border border-orange-100 bg-white/80 p-6 shadow-2xl shadow-orange-100/40 backdrop-blur-2xl sm:rounded-[40px] sm:p-8 lg:p-12"
          >
            {/* Heading */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[3px] text-orange-500 sm:text-sm">
                Send Inquiry
              </p>

              <h3 className="mt-3 text-2xl font-black text-zinc-900 sm:mt-4 sm:text-3xl lg:text-4xl">
                Request a Quote
              </h3>

              <p className="mt-4 text-base leading-7 text-zinc-600 sm:mt-5 sm:text-lg sm:leading-8">
                Fill out the form below and our team will contact you shortly
                with the best industrial steel solutions.
              </p>
            </div>

            {/* Form */}
            <form className="mt-8 flex flex-1 flex-col justify-between sm:mt-10">
              <div className="space-y-5 sm:space-y-6">
                {/* Name */}
                <div>
                  <label className="mb-3 block text-xs font-semibold uppercase tracking-[2px] text-zinc-700 sm:text-sm">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="h-14 w-full rounded-2xl border border-zinc-200 bg-white px-5 text-sm text-zinc-900 outline-none transition-all duration-300 placeholder:text-zinc-400 focus:border-orange-400 focus:shadow-lg focus:shadow-orange-100 sm:h-16 sm:px-6 sm:text-base"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-3 block text-xs font-semibold uppercase tracking-[2px] text-zinc-700 sm:text-sm">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="h-14 w-full rounded-2xl border border-zinc-200 bg-white px-5 text-sm text-zinc-900 outline-none transition-all duration-300 placeholder:text-zinc-400 focus:border-orange-400 focus:shadow-lg focus:shadow-orange-100 sm:h-16 sm:px-6 sm:text-base"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-3 block text-xs font-semibold uppercase tracking-[2px] text-zinc-700 sm:text-sm">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="h-14 w-full rounded-2xl border border-zinc-200 bg-white px-5 text-sm text-zinc-900 outline-none transition-all duration-300 placeholder:text-zinc-400 focus:border-orange-400 focus:shadow-lg focus:shadow-orange-100 sm:h-16 sm:px-6 sm:text-base"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="mb-3 block text-xs font-semibold uppercase tracking-[2px] text-zinc-700 sm:text-sm">
                    Your Requirement
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Write your requirement..."
                    className="w-full rounded-[24px] border border-zinc-200 bg-white p-5 text-sm text-zinc-900 outline-none transition-all duration-300 placeholder:text-zinc-400 focus:border-orange-400 focus:shadow-lg focus:shadow-orange-100 sm:rounded-[28px] sm:p-6 sm:text-base"
                  />
                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="group mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-4 text-sm font-semibold uppercase tracking-[2px] text-white shadow-2xl shadow-orange-200/50 transition-all duration-300 hover:scale-[1.02] hover:from-orange-600 hover:to-orange-500 sm:mt-8 sm:px-8 sm:py-5 sm:text-base"
              >
                Submit Inquiry

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;