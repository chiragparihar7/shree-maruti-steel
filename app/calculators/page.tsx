// app/calculators/page.tsx

import CalculatorsHero from "@/components/calculators/CalculatorsHero";
import CalculatorsGrid from "@/components/calculators/CalculatorsGrid";
import CalculatorsSection from "@/components/calculators/CalculatorsSection";
import CalculatorCTA from "@/components/calculators/CalculatorCTA";

export const metadata = {
  title: "Industrial Weight Calculators | Shree Maruti Steel",
  description:
    "Industrial steel weight calculators for pipes, sheets, round bars and flat bars.",
};

const CalculatorsPage = () => {
  return (
    <main className="overflow-hidden bg-white">
      <CalculatorsHero />

      <CalculatorsGrid />

      <CalculatorsSection />

      <CalculatorCTA />
    </main>
  );
};

export default CalculatorsPage;