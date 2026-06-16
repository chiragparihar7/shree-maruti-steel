import AboutHero from "@/components/about/AboutHero";
import CompanyOverview from "@/components/about/CompanyOverview";
import CompanyStats from "@/components/about/CompanyStats";
import MissionVision from "@/components/about/MissionVision";
import WhyChooseAbout from "@/components/about/WhyChooseAbout";
import IndustriesServe from "@/components/about/IndustriesServe";
import Infrastructure from "@/components/about/Infrastructure";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Shree Maruti Steel | Steel Products Supplier",

  description:
    "Learn about Shree Maruti Steel, a trusted supplier of stainless steel pipes, sheets, plates, fittings, flanges and industrial raw materials across India.",

  keywords: [
    "About Shree Maruti Steel",
    "Steel Supplier India",
    "Stainless Steel Supplier",
    "Industrial Raw Materials",
    "Steel Stockist",
    "Steel Manufacturer",
    "SS Pipes Supplier",
    "SS Sheets Supplier",
    "Pipe Fittings Supplier",
    "Industrial Steel Products",
    "Steel Company India",
    "Carbon Steel Supplier",
    "Alloy Steel Products",
  ],

  alternates: {
    canonical: "https://www.shreemarutisteel.in/about",
  },

  openGraph: {
    title: "About Shree Maruti Steel | Steel Products Supplier",

    description:
      "Trusted manufacturer, stockist and supplier of stainless steel pipes, sheets, plates, fittings and industrial materials.",

    url: "https://www.shreemarutisteel.in/about",

    siteName: "Shree Maruti Steel",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Shree Maruti Steel",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "About Shree Maruti Steel",

    description:
      "Leading supplier of stainless steel pipes, sheets, plates and industrial raw materials.",

    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://www.shreemarutisteel.in/about",
        name: "About Shree Maruti Steel",
        description:
          "Learn about Shree Maruti Steel, a trusted manufacturer, stockist and supplier of stainless steel and industrial raw materials.",
      },

      {
        "@type": "Organization",
        "@id": "https://www.shreemarutisteel.in/#organization",

        name: "Shree Maruti Steel",

        url: "https://www.shreemarutisteel.in",

        logo: "https://www.shreemarutisteel.in/logo.png",

        email: "shreemarutisteel7@gmail.com",

        telephone: "+91-8373912012",

        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Shop No. 01, Jindal Colony, Opp. JK Dharam Kata, Main Dadri Road",

          addressLocality: "Surajpur",

          addressRegion: "Uttar Pradesh",

          postalCode: "201306",

          addressCountry: "IN",
        },
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

        {/* SEO Content Section */}

        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                About Shree Maruti Steel
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                Shree Maruti Steel is a trusted manufacturer, stockist,
                importer and supplier of premium quality stainless steel,
                carbon steel, alloy steel, ferrous and non-ferrous metal
                products. We are committed to delivering superior quality
                industrial materials and engineering solutions to clients
                across India.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                Our extensive product range includes Stainless Steel Pipes,
                Tubes, Sheets, Plates, Coils, Rods, Flanges, Pipe Fittings,
                Valves, Hydraulic Tube Fittings, Fasteners and Industrial Raw
                Materials. Every product is sourced and supplied according to
                industry standards to ensure reliability, durability and
                long-term performance.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-5">
                Our Expertise
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                With extensive experience in the steel and industrial supply
                sector, we have built a reputation for quality products,
                competitive pricing and dependable service. Our team focuses on
                understanding customer requirements and providing the most
                suitable material solutions for industrial and infrastructure
                projects.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-5">
                Industries We Support
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                We proudly serve a wide range of industries including Oil &
                Gas, Petrochemical, Chemical Processing, Refineries, Power
                Plants, Nuclear Facilities, Construction, Shipbuilding,
                Railways, Steel Plants, Fertilizer Industries, Cement Plants,
                Sugar Mills, Engineering Companies, Government Organizations
                and Manufacturing Units.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-5">
                Our Commitment
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                At Shree Maruti Steel, customer satisfaction remains our
                highest priority. We are committed to supplying premium quality
                materials, maintaining timely deliveries and building lasting
                business relationships through trust, transparency and
                exceptional service.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-5">
                Why Businesses Choose Us
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Premium Quality Products",
                  "Large Product Inventory",
                  "Competitive Pricing",
                  "Fast Delivery",
                  "Trusted Industrial Supplier",
                  "Experienced Team",
                  "Reliable Material Sourcing",
                  "Customer-Focused Approach",
                  "Pan India Supply Capability",
                  "Strong Industry Experience",
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
            </div>
          </div>
        </section>
      </main>
    </>
  );
}