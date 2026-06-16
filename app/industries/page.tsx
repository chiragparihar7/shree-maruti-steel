// app/industries/page.tsx

import type { Metadata } from "next";

import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesStats from "@/components/industries/IndustriesStats";
import IndustriesApplications from "@/components/industries/IndustriesApplications";
import IndustriesWhyChoose from "@/components/industries/IndustriesWhyChoose";
import IndustriesProcess from "@/components/industries/IndustriesProcess";
import ProductCTA from "@/components/products/ProductCTA";

export const metadata: Metadata = {
  title: "Industries We Serve | Industrial Steel Solutions",

  description:
    "Shree Maruti Steel supplies stainless steel pipes, sheets, plates, fittings and industrial materials for oil & gas, petrochemical and manufacturing industries.",

  keywords: [
    "Industries We Serve",
    "Industrial Steel Solutions",
    "Industrial Steel Supplier",
    "Stainless Steel Products",
    "Oil and Gas Industry Supplier",
    "Petrochemical Industry Materials",
    "Power Plant Steel Products",
    "Construction Steel Supplier",
    "Railway Industry Materials",
    "Offshore Industry Supplier",
    "Engineering Industry Steel Products",
    "Industrial Raw Materials",
    "Steel Products India",
    "Industrial Applications",
    "Industrial Material Supplier",
  ],

  alternates: {
    canonical: "https://www.shreemarutisteel.in/industries",
  },

  openGraph: {
    title: "Industries We Serve | Shree Maruti Steel",

    description:
      "Premium stainless steel and industrial raw material solutions for oil & gas, petrochemical, railway, power, construction and engineering sectors.",

    url: "https://www.shreemarutisteel.in/industries",

    siteName: "Shree Maruti Steel",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Industries Served by Shree Maruti Steel",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Industries We Serve | Shree Maruti Steel",

    description:
      "Trusted supplier of industrial steel products for oil & gas, petrochemical, railway, power and construction sectors.",

    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const IndustriesPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.shreemarutisteel.in/industries",
        url: "https://www.shreemarutisteel.in/industries",
        name: "Industries We Serve",
        description:
          "Industrial steel solutions for oil & gas, petrochemical, railway, power, construction and manufacturing industries.",
      },

      {
        "@type": "Organization",
        "@id": "https://www.shreemarutisteel.in/#organization",
        name: "Shree Maruti Steel",
        url: "https://www.shreemarutisteel.in",
        logo: "https://www.shreemarutisteel.in/logo.png",
        email: "shreemarutisteel7@gmail.com",
        telephone: "+91-8373912012",
      },

      {
        "@type": "Service",
        name: "Industrial Steel Solutions",

        provider: {
          "@id": "https://www.shreemarutisteel.in/#organization",
        },

        areaServed: "India",

        serviceType: [
          "Oil & Gas Industry Materials",
          "Petrochemical Industry Materials",
          "Power Plant Steel Products",
          "Railway Industry Materials",
          "Construction Industry Materials",
          "Offshore Industry Products",
          "Engineering Industry Materials",
          "Manufacturing Industry Solutions",
          "Refinery Industry Materials",
          "Industrial Raw Materials",
        ],
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

        {/* SEO CONTENT SECTION */}

        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Industries We Serve
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                Shree Maruti Steel is a trusted supplier of stainless steel
                pipes, tubes, sheets, plates, flanges, fittings, valves and
                industrial raw materials serving a wide range of industries
                across India. We provide reliable material solutions that meet
                the demanding requirements of industrial, infrastructure and
                engineering projects.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                Our extensive product portfolio supports critical applications
                in oil & gas, petrochemical processing, refineries, power
                generation, railway infrastructure, construction projects,
                offshore facilities, shipbuilding and manufacturing industries.
                We are committed to delivering high-quality products that ensure
                safety, durability and long-term operational performance.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-5">
                Industrial Applications
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                Our stainless steel and industrial products are widely used in
                process plants, pressure systems, structural applications,
                industrial pipelines, fabrication projects, engineering systems,
                utility networks and large-scale infrastructure developments.
                We help industries source dependable materials that comply with
                quality and performance standards.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-5">
                Major Industries We Support
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Oil & Gas Industries",
                  "Petrochemical Industries",
                  "Chemical Processing Plants",
                  "Refineries",
                  "Power Generation Plants",
                  "Nuclear Power Facilities",
                  "Construction & Infrastructure",
                  "Railway Projects",
                  "Shipbuilding Industries",
                  "Offshore Projects",
                  "Steel Manufacturing Plants",
                  "Engineering Companies",
                  "Fertilizer Industries",
                  "Cement Industries",
                  "Sugar Mills",
                  "Paper Mills",
                  "Government Organizations",
                  "Manufacturing Facilities",
                ].map((industry) => (
                  <div
                    key={industry}
                    className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md"
                  >
                    <span className="font-medium text-gray-800">
                      {industry}
                    </span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-5">
                Why Industries Choose Shree Maruti Steel
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Premium Quality Stainless Steel Products",
                  "Reliable Industrial Material Supply",
                  "Wide Product Inventory",
                  "Competitive Pricing",
                  "Bulk Order Capability",
                  "Fast Delivery Across India",
                  "Experienced Technical Support",
                  "Trusted Supplier Network",
                  "Quality Assurance Standards",
                  "Customer-Centric Approach",
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
                Delivering Industrial Excellence
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                At Shree Maruti Steel, we understand that every industry has
                unique operational challenges and material requirements. Our
                goal is to provide dependable stainless steel and industrial raw
                material solutions that contribute to project success,
                operational efficiency and long-term reliability. Through
                quality products, timely delivery and dedicated customer
                support, we continue to build strong partnerships with clients
                across diverse industrial sectors.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default IndustriesPage;