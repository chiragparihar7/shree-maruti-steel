"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  PhoneCall,
  Mail,
  User,
  MessageSquare,
  Sparkles,
} from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white py-10 sm:py-14 lg:py-18">
      {/* PREMIUM GLOW */}
      <div className="absolute left-[-120px] top-0 h-[320px] w-[320px] rounded-full bg-orange-300/20 blur-[120px]" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[360px] w-[360px] rounded-full bg-orange-400/20 blur-[140px]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[42px] border border-white/60 bg-white/70 shadow-[0_25px_80px_rgba(249,115,22,0.10)] backdrop-blur-3xl"
        >
          {/* CARD GLOW */}
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-orange-300/20 blur-[120px]" />

          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-300/20 blur-[130px]" />

          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            {/* LEFT SIDE */}
            <div className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 p-8 sm:p-10 lg:p-14">
              {/* OVERLAY */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%)]" />

              {/* GRID */}
              <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:60px_60px]" />

              <div className="relative z-10">
                {/* BADGE */}
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 backdrop-blur-xl">
                  <Sparkles className="h-4 w-4 text-white" />

                  <span className="text-sm font-semibold tracking-wide text-white">
                    Contact Our Team
                  </span>
                </div>

                {/* TITLE */}
                <h2 className="mt-8 text-4xl font-black leading-[1] tracking-[-0.03em] text-white sm:text-5xl">
                  Send Your
                  <span className="mt-2 block text-orange-100">
                    Inquiry
                  </span>
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-7 max-w-md text-base leading-8 text-white/85">
                  Contact Shree Maruti Steel for premium industrial steel
                  products, piping solutions and engineering materials.
                </p>

                {/* CONTACT BOXES */}
                <div className="mt-10 space-y-4">
                  {[
                    {
                      icon: PhoneCall,
                      title: "Phone Number",
                      value: "+91 8373912012",
                    },
                    {
                      icon: Mail,
                      title: "Email Address",
                      value: "shreemarutisteel7@gmail.com",
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        className="flex items-center gap-4 rounded-[24px] border border-white/15 bg-white/10 p-5 backdrop-blur-xl"
                      >
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-orange-500 shadow-[0_10px_30px_rgba(255,255,255,0.2)]">
                          <Icon className="h-6 w-6" />
                        </div>

                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-[2px] text-white/70">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-sm font-medium text-white">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="p-8 sm:p-10 lg:p-14">
              {/* TOP */}
              <div>
                <h3 className="text-3xl font-black text-zinc-900 sm:text-4xl">
                  Get In Touch
                </h3>

                <p className="mt-4 text-base leading-8 text-zinc-600">
                  Fill out the form and our industrial team will contact you
                  shortly.
                </p>
              </div>

              {/* FORM */}
              <form className="mt-10 grid gap-6">
                {/* NAME */}
                <div className="group relative">
                  <User className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-orange-400 transition-colors duration-300 group-focus-within:text-orange-500" />

                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="h-16 w-full rounded-[24px] border border-orange-100 bg-orange-50/40 pl-14 pr-5 text-zinc-900 outline-none transition-all duration-300 placeholder:text-zinc-400 focus:border-orange-400 focus:bg-white focus:shadow-[0_10px_35px_rgba(249,115,22,0.12)]"
                  />
                </div>

                {/* PHONE */}
                <div className="group relative">
                  <PhoneCall className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-orange-400 transition-colors duration-300 group-focus-within:text-orange-500" />

                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                    className="h-16 w-full rounded-[24px] border border-orange-100 bg-orange-50/40 pl-14 pr-5 text-zinc-900 outline-none transition-all duration-300 placeholder:text-zinc-400 focus:border-orange-400 focus:bg-white focus:shadow-[0_10px_35px_rgba(249,115,22,0.12)]"
                  />
                </div>

                {/* EMAIL */}
                <div className="group relative">
                  <Mail className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-orange-400 transition-colors duration-300 group-focus-within:text-orange-500" />

                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="h-16 w-full rounded-[24px] border border-orange-100 bg-orange-50/40 pl-14 pr-5 text-zinc-900 outline-none transition-all duration-300 placeholder:text-zinc-400 focus:border-orange-400 focus:bg-white focus:shadow-[0_10px_35px_rgba(249,115,22,0.12)]"
                  />
                </div>

                {/* MESSAGE */}
                <div className="group relative">
                  <MessageSquare className="absolute left-5 top-6 h-5 w-5 text-orange-400 transition-colors duration-300 group-focus-within:text-orange-500" />

                  <textarea
                    rows={6}
                    placeholder="Write Your Message..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    className="w-full rounded-[24px] border border-orange-100 bg-orange-50/40 pl-14 pr-5 pt-5 text-zinc-900 outline-none transition-all duration-300 placeholder:text-zinc-400 focus:border-orange-400 focus:bg-white focus:shadow-[0_10px_35px_rgba(249,115,22,0.12)]"
                  />
                </div>

                {/* BUTTON */}
                <motion.button
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  type="submit"
                  className="group relative inline-flex h-16 items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-base font-black text-white shadow-[0_20px_45px_rgba(249,115,22,0.35)] transition-all duration-300"
                >
                  {/* SHINE */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -left-[120%] top-0 h-full w-[120%] rotate-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-1000 group-hover:left-[120%]" />
                  </div>

                  <span className="relative z-10">
                    Send Inquiry
                  </span>

                  <Send className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;