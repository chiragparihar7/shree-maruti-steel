"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  Cylinder,
  LayoutPanelTop,
  Circle,
  RectangleHorizontal,
  Sparkles,
} from "lucide-react";

const tabs = [
  {
    title: "Pipe Weight",
    icon: Cylinder,
    formula:
      "(OD - Thickness) × Thickness × 0.0248 × Length",
  },

  {
    title: "Sheet Weight",
    icon: LayoutPanelTop,
    formula:
      "Length × Width × Thickness × 0.000008",
  },

  {
    title: "Round Bar",
    icon: Circle,
    formula:
      "Dia × Dia × 0.00623 × Length",
  },

  {
    title: "Flat Bar",
    icon: RectangleHorizontal,
    formula:
      "Width × Thickness × 0.00798 × Length",
  },
];

const inputClass =
  "h-16 w-full rounded-2xl border border-orange-100 bg-orange-50/40 px-5 text-zinc-800 outline-none transition-all duration-300 focus:border-orange-400 focus:bg-white";

const CalculatorsSection = () => {
  const [active, setActive] =
    useState("Pipe Weight");

  // PIPE
  const [pipeOD, setPipeOD] = useState("");
  const [pipeThickness, setPipeThickness] =
    useState("");
  const [pipeLength, setPipeLength] =
    useState("");

  // SHEET
  const [sheetLength, setSheetLength] =
    useState("");
  const [sheetWidth, setSheetWidth] =
    useState("");
  const [sheetThickness, setSheetThickness] =
    useState("");

  // ROUND
  const [roundDia, setRoundDia] =
    useState("");
  const [roundLength, setRoundLength] =
    useState("");

  // FLAT
  const [flatWidth, setFlatWidth] =
    useState("");
  const [flatThickness, setFlatThickness] =
    useState("");
  const [flatLength, setFlatLength] =
    useState("");

  const result = useMemo(() => {
    // PIPE
    if (active === "Pipe Weight") {
      const od = Number(pipeOD);
      const th = Number(pipeThickness);
      const len = Number(pipeLength);

      if (!od || !th || !len) return 0;

      return (
        (od - th) * th * 0.0248 * len
      ).toFixed(2);
    }

    // SHEET
    if (active === "Sheet Weight") {
      const l = Number(sheetLength);
      const w = Number(sheetWidth);
      const t = Number(sheetThickness);

      if (!l || !w || !t) return 0;

      return (
        l * w * t * 0.000008
      ).toFixed(2);
    }

    // ROUND BAR
    if (active === "Round Bar") {
      const d = Number(roundDia);
      const len = Number(roundLength);

      if (!d || !len) return 0;

      return (
        d * d * 0.00623 * len
      ).toFixed(2);
    }

    // FLAT BAR
    if (active === "Flat Bar") {
      const w = Number(flatWidth);
      const t = Number(flatThickness);
      const len = Number(flatLength);

      if (!w || !t || !len) return 0;

      return (
        w * t * 0.00798 * len
      ).toFixed(2);
    }

    return 0;
  }, [
    active,
    pipeOD,
    pipeThickness,
    pipeLength,
    sheetLength,
    sheetWidth,
    sheetThickness,
    roundDia,
    roundLength,
    flatWidth,
    flatThickness,
    flatLength,
  ]);

  const currentFormula = tabs.find(
    (item) => item.title === active,
  )?.formula;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fafafa] via-orange-50/30 to-white py-20 sm:py-24 lg:py-32">
      {/* GLOW */}
      <div className="absolute left-[-100px] top-[-100px] h-[380px] w-[380px] rounded-full bg-orange-300/20 blur-[120px]" />

      <div className="absolute bottom-[-100px] right-[-100px] h-[380px] w-[380px] rounded-full bg-orange-400/20 blur-[120px]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [background-size:70px_70px]" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* BADGE */}
          <div className="inline-flex items-center gap-3 rounded-full border border-orange-200 bg-white/80 px-5 py-2.5 shadow-lg shadow-orange-100/30 backdrop-blur-xl">
            <Calculator className="h-4 w-4 text-orange-500" />

            <span className="text-xs font-bold uppercase tracking-[4px] text-orange-600 sm:text-sm">
              Industrial Calculators
            </span>
          </div>

          {/* HEADING */}
          <h2 className="mt-7 text-4xl font-black leading-[1.05] text-zinc-900 sm:text-5xl lg:text-6xl">
            Steel Weight
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Calculators
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            Calculate industrial steel
            product weight instantly using
            engineering formulas.
          </p>
        </motion.div>

        {/* TABS */}
        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;

            return (
              <button
                key={tab.title}
                onClick={() =>
                  setActive(tab.title)
                }
                className={`rounded-2xl border px-6 py-4 transition-all duration-300 ${
                  active === tab.title
                    ? "border-orange-500 bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-2xl shadow-orange-300/40"
                    : "border-orange-100 bg-white/80 text-zinc-700 hover:border-orange-300 hover:bg-orange-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5" />

                  <span className="text-sm font-bold uppercase tracking-[1px]">
                    {tab.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* MAIN CARD */}
        <motion.div
          key={active}
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="relative mt-14 overflow-hidden rounded-[40px] border border-orange-100 bg-white/80 p-8 shadow-[0_20px_80px_rgba(249,115,22,0.10)] backdrop-blur-2xl sm:p-10 lg:p-14"
        >
          {/* GLOW */}
          <div className="absolute -right-10 top-0 h-52 w-52 rounded-full bg-orange-300/20 blur-[100px]" />

          {/* TOP */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-4 py-2">
                <Sparkles className="h-4 w-4 text-orange-500" />

                <span className="text-xs font-bold uppercase tracking-[3px] text-orange-600">
                  Live Formula
                </span>
              </div>

              <h3 className="mt-5 text-4xl font-black text-zinc-900">
                {active}
              </h3>

              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600">
                Formula:
                <span className="ml-2 font-bold text-orange-500">
                  {currentFormula}
                </span>
              </p>
            </div>

            {/* RESULT */}
            <div className="rounded-[32px] bg-gradient-to-r from-orange-500 to-orange-600 px-10 py-8 text-center text-white shadow-[0_20px_60px_rgba(249,115,22,0.35)]">
              <p className="text-xs font-bold uppercase tracking-[3px] text-white/70">
                Calculated Weight
              </p>

              <h2 className="mt-3 text-5xl font-black tracking-tight">
                {result}
              </h2>

              <p className="mt-2 text-sm font-semibold text-white/80">
                KG
              </p>
            </div>
          </div>

          {/* INPUT SECTION */}
          <div className="mt-12">
            {/* PIPE */}
            {active === "Pipe Weight" && (
              <div className="grid gap-6 sm:grid-cols-3">
                <input
                  type="number"
                  placeholder="OD (MM)"
                  value={pipeOD}
                  onChange={(e) =>
                    setPipeOD(
                      e.target.value,
                    )
                  }
                  className={inputClass}
                />

                <input
                  type="number"
                  placeholder="Thickness (MM)"
                  value={pipeThickness}
                  onChange={(e) =>
                    setPipeThickness(
                      e.target.value,
                    )
                  }
                  className={inputClass}
                />

                <input
                  type="number"
                  placeholder="Length (MTR)"
                  value={pipeLength}
                  onChange={(e) =>
                    setPipeLength(
                      e.target.value,
                    )
                  }
                  className={inputClass}
                />
              </div>
            )}

            {/* SHEET */}
            {active === "Sheet Weight" && (
              <div className="grid gap-6 sm:grid-cols-3">
                <input
                  type="number"
                  placeholder="Length (MM)"
                  value={sheetLength}
                  onChange={(e) =>
                    setSheetLength(
                      e.target.value,
                    )
                  }
                  className={inputClass}
                />

                <input
                  type="number"
                  placeholder="Width (MM)"
                  value={sheetWidth}
                  onChange={(e) =>
                    setSheetWidth(
                      e.target.value,
                    )
                  }
                  className={inputClass}
                />

                <input
                  type="number"
                  placeholder="Thickness (MM)"
                  value={sheetThickness}
                  onChange={(e) =>
                    setSheetThickness(
                      e.target.value,
                    )
                  }
                  className={inputClass}
                />
              </div>
            )}

            {/* ROUND BAR */}
            {active === "Round Bar" && (
              <div className="grid gap-6 sm:grid-cols-2">
                <input
                  type="number"
                  placeholder="Diameter (MM)"
                  value={roundDia}
                  onChange={(e) =>
                    setRoundDia(
                      e.target.value,
                    )
                  }
                  className={inputClass}
                />

                <input
                  type="number"
                  placeholder="Length (MTR)"
                  value={roundLength}
                  onChange={(e) =>
                    setRoundLength(
                      e.target.value,
                    )
                  }
                  className={inputClass}
                />
              </div>
            )}

            {/* FLAT BAR */}
            {active === "Flat Bar" && (
              <div className="grid gap-6 sm:grid-cols-3">
                <input
                  type="number"
                  placeholder="Width (MM)"
                  value={flatWidth}
                  onChange={(e) =>
                    setFlatWidth(
                      e.target.value,
                    )
                  }
                  className={inputClass}
                />

                <input
                  type="number"
                  placeholder="Thickness (MM)"
                  value={flatThickness}
                  onChange={(e) =>
                    setFlatThickness(
                      e.target.value,
                    )
                  }
                  className={inputClass}
                />

                <input
                  type="number"
                  placeholder="Length (MTR)"
                  value={flatLength}
                  onChange={(e) =>
                    setFlatLength(
                      e.target.value,
                    )
                  }
                  className={inputClass}
                />
              </div>
            )}
          </div>

          {/* FORMULA BOX */}
          <div className="mt-12 rounded-[30px] border border-orange-100 bg-orange-50/50 p-8">
            <h4 className="text-lg font-black text-zinc-900">
              Formula Used
            </h4>

            <p className="mt-4 text-lg font-bold leading-8 text-orange-500">
              {currentFormula}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CalculatorsSection;