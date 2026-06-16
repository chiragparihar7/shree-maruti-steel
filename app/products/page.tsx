// app/products/page.tsx

import type { Metadata } from "next";

import ProductHero from "@/components/products/ProductHero";
import ProductCategories from "@/components/products/ProductCategories";
import ProductGrid from "@/components/products/ProductGrid";
import ProductCTA from "@/components/products/ProductCTA";

export const metadata: Metadata = {
  title: "Steel Products | Pipes, Sheets, Plates & Fittings",

  description:
    "Explore stainless steel pipes, sheets, plates, flanges, fittings, valves, carbon steel and industrial raw materials from Shree Maruti Steel.",

  keywords: [
    "Steel Products",
    "Stainless Steel Pipes",
    "SS Pipes Supplier",
    "Stainless Steel Sheets",
    "Stainless Steel Plates",
    "Steel Tubes",
    "Pipe Fittings",
    "Industrial Flanges",
    "Industrial Valves",
    "Carbon Steel Pipes",
    "Alloy Steel Pipes",
    "MS GI ERW Pipes",
    "Hydraulic Tube Fittings",
    "Industrial Raw Materials",
    "Steel Supplier India",
    "Ferrous Metals",
    "Non Ferrous Metals",
    "Industrial Steel Products",
    "Shree Maruti Steel",
  ],

  alternates: {
    canonical: "https://www.shreemarutisteel.in/products",
  },

  openGraph: {
    title: "Steel Products | Shree Maruti Steel",

    description:
      "Premium stainless steel pipes, sheets, plates, fittings, flanges, valves and industrial raw materials for industrial applications.",

    url: "https://www.shreemarutisteel.in/products",

    siteName: "Shree Maruti Steel",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Shree Maruti Steel Products",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Industrial Steel Products",

    description:
      "Explore stainless steel pipes, sheets, plates, fittings, flanges and industrial materials.",

    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ProductsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.shreemarutisteel.in/products",

        url: "https://www.shreemarutisteel.in/products",

        name: "Industrial Steel Products",

        description:
          "Complete range of stainless steel pipes, sheets, plates, fittings, flanges and industrial raw materials.",
      },

      {
        "@type": "Organization",
        "@id": "https://www.shreemarutisteel.in/#organization",

        name: "Shree Maruti Steel",

        url: "https://www.shreemarutisteel.in",

        logo: "https://www.shreemarutisteel.in/logo.png",

        telephone: "+91-8373912012",

        email: "shreemarutisteel7@gmail.com",
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
        <ProductHero />

        {/* CATEGORIES */}
        <ProductCategories />

        {/* PRODUCT GRID */}
        <ProductGrid />

        {/* CTA */}
        <ProductCTA />

        {/* SEO CONTENT SECTION */}

        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Industrial Steel Products Supplier in India
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                Shree Maruti Steel is a trusted manufacturer, stockist and
                supplier of premium stainless steel products, carbon steel
                materials, alloy steel products and industrial raw materials.
                We offer a comprehensive range of industrial products designed
                to meet the requirements of engineering, construction,
                manufacturing, oil & gas, petrochemical and infrastructure
                sectors.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                Our extensive inventory includes stainless steel pipes, tubes,
                sheets, plates, flanges, fittings, valves, hydraulic tube
                fittings, fasteners and industrial hardware. Every product is
                sourced and supplied with a focus on quality, durability and
                performance for critical industrial applications.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-5">
                Our Product Categories
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Stainless Steel Pipes",
                  "Stainless Steel Tubes",
                  "Stainless Steel Sheets",
                  "Stainless Steel Plates",
                  "MS / GI ERW Pipes",
                  "Carbon Steel Pipes",
                  "Alloy Steel Pipes",
                  "Pipe Fittings",
                  "Industrial Flanges",
                  "Industrial Valves",
                  "Hydraulic Tube Fittings",
                  "Fasteners & Hardware",
                  "Steel Rods & Bars",
                  "Ferrous Metals",
                  "Non-Ferrous Metals",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-all"
                  >
                    <span className="font-medium text-gray-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-5">
                Stainless Steel Products
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                We supply stainless steel pipes, seamless pipes, welded pipes,
                tubes, sheets and plates in various grades including 304, 304L,
                316, 316L, 309, 310, 310S, 321 and other industrial grades.
                These products are widely used in chemical plants,
                petrochemical industries, power plants and engineering
                applications.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-5">
                Carbon Steel & Alloy Steel Products
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                Our carbon steel and alloy steel products are suitable for
                industrial piping systems, pressure applications, fabrication
                projects and infrastructure developments. We provide reliable
                material solutions that meet industrial performance
                requirements.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-5">
                Industries Using Our Products
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Oil & Gas Industries",
                  "Petrochemical Plants",
                  "Chemical Industries",
                  "Refineries",
                  "Power Plants",
                  "Railway Infrastructure",
                  "Construction Projects",
                  "Shipbuilding Industries",
                  "Offshore Facilities",
                  "Engineering Companies",
                  "Steel Plants",
                  "Manufacturing Industries",
                ].map((industry) => (
                  <div
                    key={industry}
                    className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                  >
                    <span className="font-medium text-gray-800">
                      {industry}
                    </span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-5">
                Why Choose Shree Maruti Steel?
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Premium Quality Products",
                  "Large Product Inventory",
                  "Competitive Pricing",
                  "Fast Delivery Across India",
                  "Reliable Supply Chain",
                  "Bulk Order Support",
                  "Industry Expertise",
                  "Customer-Focused Service",
                  "Trusted Supplier Network",
                  "Technical Product Support",
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
                Complete Industrial Material Solutions
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you need stainless steel pipes, industrial fittings,
                flanges, valves, sheets, plates or specialized industrial raw
                materials, Shree Maruti Steel provides dependable solutions for
                projects of every scale. Our commitment to quality, timely
                delivery and customer satisfaction makes us a preferred partner
                for industries across India.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}