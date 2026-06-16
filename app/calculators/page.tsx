// app/calculators/page.tsx

import type { Metadata } from "next";

import CalculatorsHero from "@/components/calculators/CalculatorsHero";
import CalculatorsGrid from "@/components/calculators/CalculatorsGrid";
import CalculatorsSection from "@/components/calculators/CalculatorsSection";
import CalculatorCTA from "@/components/calculators/CalculatorCTA";

export const metadata: Metadata = {
  title: "Steel Weight Calculators | Pipes, Sheets & Bars",

  description:
    "Free steel weight calculators for stainless steel pipes, sheets, plates, round bars, square bars, flat bars and industrial materials.",

  keywords: [
    "Steel Weight Calculator",
    "Pipe Weight Calculator",
    "SS Pipe Weight Calculator",
    "Steel Sheet Weight Calculator",
    "Steel Plate Weight Calculator",
    "Round Bar Weight Calculator",
    "Square Bar Weight Calculator",
    "Flat Bar Weight Calculator",
    "Industrial Weight Calculator",
    "Stainless Steel Calculator",
    "Metal Weight Calculator",
    "Pipe Weight Formula",
    "Steel Calculation Tool",
    "Engineering Calculator",
    "Industrial Calculator",
    "Shree Maruti Steel Calculator",
  ],

  alternates: {
    canonical: "https://www.shreemarutisteel.in/calculators",
  },

  openGraph: {
    title: "Industrial Steel Weight Calculators",

    description:
      "Calculate weights of stainless steel pipes, sheets, plates, bars and industrial materials with free online calculators.",

    url: "https://www.shreemarutisteel.in/calculators",

    siteName: "Shree Maruti Steel",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Industrial Steel Weight Calculators",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Steel Weight Calculators",

    description:
      "Free industrial steel weight calculators for pipes, sheets, plates and bars.",

    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const CalculatorsPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.shreemarutisteel.in/calculators",

        url: "https://www.shreemarutisteel.in/calculators",

        name: "Industrial Steel Weight Calculators",

        description:
          "Free online steel weight calculators for pipes, sheets, plates, round bars, square bars and flat bars.",
      },

      {
        "@type": "Organization",
        "@id": "https://www.shreemarutisteel.in/#organization",

        name: "Shree Maruti Steel",

        url: "https://www.shreemarutisteel.in",

        logo: "https://www.shreemarutisteel.in/logo.png",
      },

      {
        "@type": "SoftwareApplication",

        name: "Industrial Weight Calculator",

        applicationCategory: "BusinessApplication",

        operatingSystem: "Web",

        creator: {
          "@id": "https://www.shreemarutisteel.in/#organization",
        },

        description:
          "Online calculator for calculating stainless steel pipe, sheet, plate and bar weights.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <main className="overflow-hidden bg-white">
        {/* Hero */}
        <CalculatorsHero />

        {/* Calculator Cards */}
        <CalculatorsGrid />

        {/* Calculator Section */}
        <CalculatorsSection />

        {/* CTA */}
        <CalculatorCTA />

        {/* SEO CONTENT SECTION */}

        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Industrial Steel Weight Calculators
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                Shree Maruti Steel provides free online steel weight calculators
                designed for engineers, fabricators, contractors, manufacturers
                and industrial professionals. Our calculators help determine
                accurate material weights for stainless steel pipes, sheets,
                plates, round bars, square bars, flat bars and other industrial
                raw materials.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                Accurate weight calculations are essential for project planning,
                material estimation, transportation, fabrication and cost
                management. Our easy-to-use calculators provide quick and
                reliable results based on standard industry formulas.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-5">
                Available Weight Calculators
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Stainless Steel Pipe Weight Calculator",
                  "Steel Sheet Weight Calculator",
                  "Steel Plate Weight Calculator",
                  "Round Bar Weight Calculator",
                  "Square Bar Weight Calculator",
                  "Flat Bar Weight Calculator",
                  "Hexagonal Bar Weight Calculator",
                  "Copper Pipe Weight Calculator",
                  "Brass Pipe Weight Calculator",
                  "Aluminium Sheet Weight Calculator",
                  "Aluminium Pipe Weight Calculator",
                  "Industrial Material Calculator",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                  >
                    <span className="font-medium text-gray-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-5">
                Benefits of Using Our Calculators
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Fast & Accurate Results",
                  "Industry Standard Formulas",
                  "Easy Material Estimation",
                  "Project Cost Planning",
                  "Improved Procurement Decisions",
                  "Reduced Material Wastage",
                  "Engineering & Fabrication Support",
                  "Free Online Access",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border bg-white p-4 shadow-sm"
                  >
                    <div className="h-2 w-2 rounded-full bg-orange-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-5">
                Applications Across Industries
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                These calculators are widely used across oil & gas,
                petrochemical, construction, railway, power generation,
                shipbuilding, infrastructure, manufacturing and engineering
                industries. Accurate weight calculations help improve planning,
                logistics, budgeting and execution of industrial projects.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-5">
                Why Choose Shree Maruti Steel Calculators?
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our steel weight calculators are built using industry-recognized
                formulas and practical engineering requirements. Whether you
                need to calculate the weight of stainless steel pipes, sheets,
                plates or bars, our tools provide dependable results to support
                procurement, fabrication and project management activities.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CalculatorsPage;