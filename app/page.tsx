// app/page.tsx

import type { Metadata } from "next";

import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ProductCategories from "@/components/home/ProductCategories";
import Industries from "@/components/home/Industries";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Certifications from "@/components/home/Certifications";
import CTA from "@/components/home/CTA";
import ContactForm from "@/components/home/ContactForm";

export const metadata: Metadata = {
  title:
    "Shree Maruti Steel | Stainless Steel Pipes & Fittings",

  description:
    "Leading supplier of stainless steel pipes, sheets, plates, fittings, flanges and industrial steel products across India with quality assurance.",

  keywords: [
    "Shree Maruti Steel",
    "Stainless Steel Pipes",
    "SS Pipes Supplier",
    "Stainless Steel Tubes",
    "Stainless Steel Sheets",
    "Stainless Steel Plates",
    "Pipe Fittings Supplier",
    "Industrial Flanges",
    "Carbon Steel Pipes",
    "Alloy Steel Pipes",
    "MS GI ERW Pipes",
    "Industrial Valves",
    "Hydraulic Tube Fittings",
    "Industrial Raw Materials",
    "Ferrous Metal Supplier",
    "Non Ferrous Metal Supplier",
    "Steel Supplier India",
    "Industrial Steel Products",
    "Engineering Materials",
    "Steel Stockist",
  ],

  alternates: {
    canonical: "https://www.shreemarutisteel.in",
  },

  openGraph: {
    title:
      "Shree Maruti Steel | Premium Stainless Steel & Industrial Raw Materials Supplier",

    description:
      "Trusted Manufacturer, Stockist & Supplier of Stainless Steel Pipes, Tubes, Sheets, Plates, Flanges, Fittings, Carbon Steel, Alloy Steel and Industrial Products.",

    url: "https://www.shreemarutisteel.in",

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

    title:
      "Shree Maruti Steel | Stainless Steel & Industrial Products Supplier",

    description:
      "Manufacturer, Stockist & Supplier of Stainless Steel Pipes, Sheets, Plates, Tubes, Flanges and Industrial Raw Materials.",

    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.shreemarutisteel.in/#organization",
        name: "Shree Maruti Steel",
        url: "https://www.shreemarutisteel.in",
        logo: "https://www.shreemarutisteel.in/logo.png",
        email: "shreemarutisteel7@gmail.com",
        telephone: "+91-8373912012",
        description:
          "Manufacturer, Stockist & Supplier of Stainless Steel Pipes, Tubes, Sheets, Plates, Flanges, Fittings and Industrial Raw Materials.",
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://www.shreemarutisteel.in/#localbusiness",
        name: "Shree Maruti Steel",
        image: "https://www.shreemarutisteel.in/logo.png",
        url: "https://www.shreemarutisteel.in",
        telephone: "+91-8373912012",
        email: "shreemarutisteel7@gmail.com",

        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Shop No. 01, Jindal Colony, Opp. JK Dharam Kata, Main Dadri Road",
          addressLocality: "Surajpur",
          addressRegion: "Uttar Pradesh",
          postalCode: "201306",
          addressCountry: "IN",
        },

        areaServed: "India",

        priceRange: "₹₹",
      },

      {
        "@type": "WebSite",
        "@id": "https://www.shreemarutisteel.in/#website",
        url: "https://www.shreemarutisteel.in",
        name: "Shree Maruti Steel",
        publisher: {
          "@id": "https://www.shreemarutisteel.in/#organization",
        },
      },

      {
        "@type": "Service",
        name: "Industrial Steel Products Supply",
        provider: {
          "@id": "https://www.shreemarutisteel.in/#organization",
        },

        serviceType: [
          "Stainless Steel Pipes",
          "Stainless Steel Tubes",
          "Stainless Steel Sheets",
          "Stainless Steel Plates",
          "Pipe Fittings",
          "Industrial Flanges",
          "Carbon Steel Pipes",
          "Alloy Steel Pipes",
          "Industrial Valves",
          "Hydraulic Tube Fittings",
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
        <Hero />

        <AboutSection />

        <ProductCategories />

        <Industries />

        <WhyChooseUs />

        <Certifications />

        <CTA />

        <ContactForm />

        {/* SEO CONTENT SECTION */}

        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Leading Stainless Steel & Industrial Raw Material Supplier in
                India
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                Shree Maruti Steel is one of the trusted manufacturers,
                stockists and suppliers of premium quality Stainless Steel
                Pipes, Stainless Steel Tubes, Stainless Steel Sheets,
                Stainless Steel Plates, Coils, Rods, Flanges, Pipe Fittings,
                Carbon Steel Products, Alloy Steel Products and Industrial Raw
                Materials for a wide range of industrial applications across
                India.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                With years of industry expertise and a commitment to quality,
                we provide reliable solutions for engineering, construction,
                petrochemical, refinery, power generation, shipbuilding,
                railway, infrastructure and manufacturing sectors. Our products
                are sourced and supplied according to international quality
                standards to ensure superior performance, durability and long
                service life.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-5">
                Our Product Range
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                We offer an extensive range of industrial steel products
                including Stainless Steel Seamless Pipes, Stainless Steel ERW
                Pipes, Carbon Steel Seamless Pipes, Alloy Steel Pipes, MS & GI
                ERW Pipes, Stainless Steel Sheets, Stainless Steel Plates,
                Boiler Quality Plates, Pipe Fittings, Industrial Flanges,
                Hydraulic Tube Fittings, Industrial Valves, Fasteners, Nuts,
                Bolts, Washers, Engineering Tools, Fire Safety Equipment and
                various Ferrous & Non-Ferrous Metal Products.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-5">
                Industries We Serve
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                Our products are widely used in Oil & Gas Industries,
                Petrochemical Plants, Chemical Processing Units, Refineries,
                Fertilizer Plants, Power Plants, Nuclear Facilities,
                Construction Projects, Shipbuilding Industries, Steel Plants,
                Railway Infrastructure, Cement Industries, Sugar Mills,
                Engineering Companies, Government Organizations, Offshore
                Projects and Manufacturing Facilities.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-5">
                Why Choose Shree Maruti Steel?
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                {[
                  "Premium Quality Industrial Materials",
                  "Wide Product Inventory",
                  "Competitive Market Pricing",
                  "Reliable Supply Chain",
                  "Bulk Order Capability",
                  "Fast Delivery Across India",
                  "Experienced Technical Team",
                  "Customer-Focused Service",
                  "Trusted Industrial Supplier",
                  "Quality Assurance Standards",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border"
                  >
                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-5">
                Trusted Supplier of Industrial Steel Products
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you require Stainless Steel Pipes, Tubes, Sheets,
                Plates, Flanges, Pipe Fittings, Carbon Steel Products, Alloy
                Steel Products or Industrial Raw Materials, Shree Maruti Steel
                is committed to delivering superior quality products and
                exceptional service. Our mission is to build long-term business
                relationships through reliability, quality assurance and timely
                delivery for every project and industrial requirement.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}