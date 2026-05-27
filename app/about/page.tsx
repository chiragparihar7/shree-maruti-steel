import AboutHero from "@/components/about/AboutHero";
import CompanyOverview from "@/components/about/CompanyOverview";
import CompanyStats from "@/components/about/CompanyStats";
import MissionVision from "@/components/about/MissionVision";
import WhyChooseAbout from "@/components/about/WhyChooseAbout";
import IndustriesServe from "@/components/about/IndustriesServe";
import Infrastructure from "@/components/about/Infrastructure";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Shree Maruti Steel",
  description:
    "Shree Maruti Steel is a trusted manufacturer, stockist, importer, and supplier of stainless steel pipes, fittings, flanges, industrial raw materials, and engineering products across India.",
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero Section */}
      <AboutHero />

      {/* Company Overview */}
      <CompanyOverview />

      {/* Company Stats */}
      <CompanyStats />

      {/* Mission & Vision */}
      <MissionVision />

      {/* Why Choose Us */}
      <WhyChooseAbout />

      {/* Industries We Serve */}
      <IndustriesServe />

      {/* Infrastructure */}
      <Infrastructure />
    </main>
  );
}