// components/layout/Footer.tsx

import Image from "next/image";
import Link from "next/link";

import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#070707] text-white overflow-hidden border-t border-orange-500/10">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-500/10 blur-[140px] rounded-full" />

      <div className="relative max-w-[1280px] mx-auto px-4  sm:px-8 ">
        {/* Top CTA */}
        <div className="border-b border-zinc-800 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-orange-500 uppercase tracking-[4px] text-sm font-semibold">
              Industrial Steel Supplier
            </span>

            <h2 className="text-3xl lg:text-5xl font-black uppercase mt-3 leading-tight">
              Ready To Build Your <br />
              Next Industrial Project?
            </h2>
          </div>

          <a
            href="tel:+918373912012"
            className="group flex items-center gap-3 bg-orange-500 hover:bg-orange-600 px-8 py-5 rounded-2xl text-white font-bold uppercase tracking-[2px] transition-all duration-300 shadow-[0_0_40px_rgba(249,115,22,0.25)]"
          >
            Get Free Quote
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-all duration-300"
            />
          </a>
        </div>

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <div>
            {/* Logo */}
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-4">
                <Image
                  src="/logo.png"
                  alt="Shree Maruti Steel"
                  width={130}
                  height={110}
                  className="object-contain bg-white rounded-xl p-1"
                />
              </div>
            </Link>

            {/* Description */}
            <p className="text-zinc-400 leading-relaxed mt-8 text-[15px]">
              Leading manufacturers, suppliers & stockists of stainless steel
              pipes, fittings, flanges, industrial valves, hardware tools & raw
              materials across India.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-8">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="group w-11 h-11 rounded-full border border-zinc-700 hover:border-orange-500 bg-zinc-900 hover:bg-orange-500 transition-all duration-300 flex items-center justify-center"
                >
                  <Icon
                    size={16}
                    className="text-zinc-300 group-hover:text-white transition-all duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="relative mb-8 inline-block text-xl font-bold uppercase">
              Quick Links
              <span className="absolute -bottom-2 left-0 h-[3px] w-14 rounded-full bg-orange-500"></span>
            </h3>

            <div className="flex flex-col gap-5">
              {[
                {
                  name: "Home",
                  href: "/",
                },
                {
                  name: "About Us",
                  href: "/about",
                },
                {
                  name: "Products",
                  href: "/products",
                },
                {
                  name: "Industries",
                  href: "/industries",
                },
                {
                  name: "Calculators",
                  href: "/calculators",
                },
                {
                  name: "Certifications",
                  href: "/certifications",
                },
                {
                  name: "Contact",
                  href: "/contact",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="group flex items-center gap-3 text-zinc-400 transition-all duration-300 hover:text-orange-500"
                >
                  <ArrowRight
                    size={15}
                    className="transition-all duration-300 group-hover:translate-x-1"
                  />

                  <span className="text-sm font-medium uppercase tracking-[2px]">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold uppercase mb-8 relative inline-block">
              Products
              <span className="absolute -bottom-2 left-0 w-14 h-[3px] bg-orange-500 rounded-full"></span>
            </h3>

            <div className="flex flex-col gap-5">
              {[
                "Stainless Steel Pipes",
                "ERW Pipes",
                "Steel Plates",
                "Pipe Fittings",
                "Flanges",
                "Industrial Valves",
                "Fire Safety Equipment",
              ].map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-3 text-zinc-400 hover:text-orange-500 transition-all duration-300 cursor-pointer"
                >
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-all duration-300"
                  />

                  <span className="text-sm uppercase tracking-[1.5px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold uppercase mb-8 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-14 h-[3px] bg-orange-500 rounded-full"></span>
            </h3>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="min-w-[50px] h-[50px] rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <MapPin size={20} className="text-orange-500" />
                </div>

                <div>
                  <h4 className="font-semibold uppercase text-sm tracking-[2px] mb-2">
                    Office Address
                  </h4>

                  <p className="text-zinc-400 leading-relaxed text-sm">
                    Shop No. 01, Jindal Colony, Opp. JK Dharam Kata, Main Dadri
                    Road, Surajpur, Greater Noida, U.P.
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="min-w-[50px] h-[50px] rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <Phone size={20} className="text-orange-500" />
                </div>

                <div>
                  <h4 className="font-semibold uppercase text-sm tracking-[2px] mb-2">
                    Phone Number
                  </h4>

                  <div className="text-zinc-400 text-sm space-y-1">
                    <p>+91 8373912012</p>
                    <p>+91 9205681154</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="min-w-[50px] h-[50px] rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <Mail size={20} className="text-orange-500" />
                </div>

                <div>
                  <h4 className="font-semibold uppercase text-sm tracking-[2px] mb-2">
                    Email Address
                  </h4>

                  <p className="text-zinc-400 text-sm break-all">
                    shreemarutisteel7@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-800 py-6 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm text-center lg:text-left tracking-[1px]">
            © {new Date().getFullYear()} Shree Maruti Steel. All Rights
            Reserved.
          </p>

          <p className="text-zinc-600 text-sm uppercase tracking-[3px]">
            Designed & Developed Professionally
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
