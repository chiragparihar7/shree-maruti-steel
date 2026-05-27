// components/layout/Navbar.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Industries", href: "/industries" },
  { name: "Calculators", href: "/calculators" },
  { name: "Certifications", href: "/certifications" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <nav className="h-20 flex items-center justify-center">
        <div className="w-full max-w-[1280px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <Image
              src="/logo.png"
              alt="Shree Maruti Steel"
              width={130}
              height={110}
              priority
              className="object-contain rounded-xl group-hover:scale-105 transition-all duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-[13px] uppercase tracking-[1.5px] text-zinc-300 hover:text-orange-500 transition-all duration-300 font-semibold after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+918373912012"
              className="group relative overflow-hidden flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition-all duration-300 px-6 py-3 rounded-full text-sm font-bold text-white shadow-lg shadow-orange-500/20"
            >
              <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-all duration-300"></span>

              <Phone size={16} className="relative z-10" />

              <span className="relative z-10">Call Now</span>
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-white"
          >
            {mobileMenu ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenu(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 right-0 w-[82%] sm:w-[420px] h-screen bg-[#111111] border-l border-orange-500/20 z-50 p-6 flex flex-col"
            >
              {/* Top */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-5">
                <div className="flex items-center gap-3">
                  <div className="relative w-[45px] h-[45px]">
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <h2 className="text-lg font-black uppercase text-white">
                      Shree <span className="text-orange-500">Maruti</span>
                    </h2>

                    <p className="text-[10px] tracking-[3px] uppercase text-zinc-500">
                      Industrial Steel
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenu(false)}
                  className="text-white"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-2 mt-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenu(false)}
                      className="group flex items-center justify-between border border-zinc-800 hover:border-orange-500/30 bg-zinc-900/40 hover:bg-orange-500/10 rounded-xl px-5 py-4 text-white transition-all duration-300"
                    >
                      <span className="uppercase tracking-[2px] text-sm font-semibold group-hover:text-orange-500 transition-all duration-300">
                        {link.name}
                      </span>

                      <span className="text-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        →
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-auto">
                <a
                  href="tel:+918373912012"
                  className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 transition-all duration-300 py-4 rounded-2xl text-white font-bold shadow-lg shadow-orange-500/20"
                >
                  <Phone size={18} />
                  Call Now
                </a>

                <p className="text-center text-zinc-500 text-xs mt-5 tracking-[2px] uppercase">
                  Strength • Quality • Trust
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
