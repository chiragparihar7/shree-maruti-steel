// app/industries/page.tsx

import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesStats from "@/components/industries/IndustriesStats";
import IndustriesApplications from "@/components/industries/IndustriesApplications";
import IndustriesWhyChoose from "@/components/industries/IndustriesWhyChoose";
import IndustriesProcess from "@/components/industries/IndustriesProcess";
import ProductCTA from "@/components/products/ProductCTA";

export const metadata = {
  title: "Industries | Shree Maruti Steel",
  description:
    "Shree Maruti Steel delivers premium industrial steel products and engineering solutions for oil & gas, petrochemical, railway, construction, offshore and heavy industries.",
};

const IndustriesPage = () => {
  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <IndustriesHero />

      {/* STATS */}
      <IndustriesStats />


      {/* APPLICATIONS */}
      <IndustriesApplications />

      {/* WHY CHOOSE */}
      <IndustriesWhyChoose />

      {/* PROCESS */}
      <IndustriesProcess />

      {/* CTA */}
      <ProductCTA />
    </main>
  );
};

export default IndustriesPage;