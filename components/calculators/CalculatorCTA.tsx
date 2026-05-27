"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CalculatorCTA = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-orange-500 to-orange-600 p-10 text-center text-white shadow-2xl shadow-orange-300/30 sm:p-14">
          <h2 className="text-4xl font-black sm:text-5xl">
            Need Industrial Steel Products?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/80 sm:text-lg">
            Contact Shree Maruti Steel for premium industrial products and
            engineering solutions.
          </p>

          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-sm font-bold uppercase tracking-[1px] text-orange-500 transition-all duration-500 hover:scale-105"
          >
            Send Inquiry

            <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CalculatorCTA;