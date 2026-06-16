// app/certifications/page.tsx

import type { Metadata } from "next";

import CertificationsHero from "@/components/certifications/CertificationsHero";
import CertificationsGrid from "@/components/certifications/CertificationsGrid";
import CertificationsWhyChoose from "@/components/certifications/CertificationsWhyChoose";
import CertificationsCTA from "@/components/certifications/CertificationsCTA";

export const metadata: Metadata = {
  title: "Quality Certifications & Standards | Shree Maruti Steel",

  description:
    "Explore Shree Maruti Steel's commitment to quality, certifications, material standards, testing procedures and reliable industrial supply solutions.",

  keywords: [
    "Steel Certifications",
    "Quality Assurance",
    "Industrial Standards",
    "Steel Quality Control",
    "Material Test Certificate",
    "MTC Supplier",
    "Stainless Steel Standards",
    "Industrial Quality Products",
    "Certified Steel Supplier",
    "Industrial Material Supplier",
    "Steel Testing",
    "Quality Management",
    "Engineering Standards",
    "Steel Products India",
    "Shree Maruti Steel",
  ],

  alternates: {
    canonical: "https://www.shreemarutisteel.in/certifications",
  },

  openGraph: {
    title: "Quality Certifications & Standards | Shree Maruti Steel",

    description:
      "Committed to quality assurance, certified materials and industry standards for stainless steel and industrial products.",

    url: "https://www.shreemarutisteel.in/certifications",

    siteName: "Shree Maruti Steel",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Shree Maruti Steel Certifications",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Quality Certifications & Standards",

    description:
      "Trusted quality assurance and certified industrial steel products.",

    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const CertificationsPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.shreemarutisteel.in/certifications",

        url: "https://www.shreemarutisteel.in/certifications",

        name: "Quality Certifications & Standards",

        description:
          "Quality assurance, testing standards and certifications of Shree Maruti Steel.",
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
        <CertificationsHero />

        {/* Certifications Grid */}
        <CertificationsGrid />

        {/* Why Choose Us */}
        <CertificationsWhyChoose />

        {/* CTA */}
        <CertificationsCTA />

        {/* SEO Content Section */}

        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Quality Certifications & Industrial Standards
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                At Shree Maruti Steel, quality is at the core of everything we
                do. We are committed to supplying premium-grade stainless steel
                pipes, tubes, sheets, plates, fittings, flanges, valves and
                industrial raw materials that meet recognized industry
                standards and customer expectations.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                Our quality assurance processes focus on material verification,
                dimensional accuracy, performance reliability and compliance
                with applicable engineering and industrial specifications. We
                work with trusted manufacturers and suppliers to ensure
                consistent product quality across every order.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-5">
                Our Quality Commitment
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                We understand that industrial projects require dependable
                materials that perform under demanding operating conditions.
                Therefore, we maintain strict quality control practices and
                support customers with reliable documentation, technical
                specifications and material traceability wherever applicable.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-5">
                Products Covered Under Quality Standards
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Stainless Steel Pipes",
                  "Stainless Steel Tubes",
                  "Stainless Steel Sheets",
                  "Stainless Steel Plates",
                  "Carbon Steel Pipes",
                  "Alloy Steel Pipes",
                  "Industrial Flanges",
                  "Pipe Fittings",
                  "Hydraulic Tube Fittings",
                  "Industrial Valves",
                  "Fasteners",
                  "Industrial Raw Materials",
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
                Quality Assurance Process
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Material Verification",
                  "Dimensional Inspection",
                  "Quality Documentation",
                  "Supplier Evaluation",
                  "Technical Compliance",
                  "Performance Verification",
                  "Industry Standard Checks",
                  "Customer Satisfaction Focus",
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
                Industries That Trust Our Quality
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                Our products are supplied to various industries including Oil &
                Gas, Petrochemical, Refineries, Power Plants, Construction,
                Railway Infrastructure, Offshore Projects, Shipbuilding,
                Engineering Companies, Manufacturing Facilities, Cement Plants,
                Fertilizer Industries and Government Organizations.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-5">
                Reliable Materials for Critical Applications
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                Choosing Shree Maruti Steel means partnering with a supplier
                that values quality, reliability and customer satisfaction. Our
                dedication to quality standards helps clients achieve safer,
                more efficient and long-lasting industrial operations. We
                continuously strive to improve our services and maintain the
                trust of customers across diverse industrial sectors.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CertificationsPage;