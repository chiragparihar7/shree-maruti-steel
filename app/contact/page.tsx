// app/contact/page.tsx

import type { Metadata } from "next";

import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata: Metadata = {
  title: "Contact Shree Maruti Steel | Get a Free Quote",

  description:
    "Contact Shree Maruti Steel for stainless steel pipes, sheets, plates, fittings, flanges and industrial raw materials. Request a quote today.",

  keywords: [
    "Contact Shree Maruti Steel",
    "Steel Supplier Contact",
    "Get Steel Quote",
    "Stainless Steel Supplier India",
    "Industrial Steel Supplier",
    "Steel Products Inquiry",
    "Pipe Supplier Contact",
    "Industrial Raw Materials",
    "SS Pipes Supplier",
    "Steel Company Contact",
    "Industrial Materials Supplier",
    "Steel Stockist India",
    "Contact Steel Supplier",
    "Industrial Product Inquiry",
  ],

  alternates: {
    canonical: "https://www.shreemarutisteel.in/contact",
  },

  openGraph: {
    title: "Contact Shree Maruti Steel | Get a Free Quote",

    description:
      "Get in touch with Shree Maruti Steel for stainless steel pipes, sheets, plates, fittings, flanges and industrial raw materials.",

    url: "https://www.shreemarutisteel.in/contact",

    siteName: "Shree Maruti Steel",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Shree Maruti Steel",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Contact Shree Maruti Steel",

    description:
      "Request a quote for stainless steel pipes, fittings, flanges and industrial raw materials.",

    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://www.shreemarutisteel.in/contact",

        url: "https://www.shreemarutisteel.in/contact",

        name: "Contact Shree Maruti Steel",

        description:
          "Contact Shree Maruti Steel for product inquiries, quotations and industrial material requirements.",
      },

      {
        "@type": "Organization",
        "@id": "https://www.shreemarutisteel.in/#organization",

        name: "Shree Maruti Steel",

        url: "https://www.shreemarutisteel.in",

        logo: "https://www.shreemarutisteel.in/logo.png",

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

        contactPoint: {
          "@type": "ContactPoint",

          telephone: "+91-8373912012",

          contactType: "customer service",

          areaServed: "IN",

          availableLanguage: ["English", "Hindi"],
        },
      },

      {
        "@type": "LocalBusiness",

        name: "Shree Maruti Steel",

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
        <ContactHero />

        {/* Contact Information */}
        <ContactInfo />

        {/* Contact Form */}
        <ContactForm />

        {/* Google Map */}
        <ContactMap />

        {/* CTA */}
        <ContactCTA />

        {/* SEO CONTENT SECTION */}

        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Contact Shree Maruti Steel
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                Looking for premium quality stainless steel pipes, tubes,
                sheets, plates, flanges, fittings, valves or industrial raw
                materials? Contact Shree Maruti Steel today for expert
                assistance, competitive pricing and reliable supply solutions
                for your industrial requirements.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                Our experienced team is ready to help you select the right
                products for construction projects, manufacturing facilities,
                engineering applications, petrochemical plants, refineries,
                power plants and infrastructure developments.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-5">
                Get a Quick Quotation
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                Whether you need bulk quantities or customized industrial
                material solutions, our team can provide prompt quotations,
                technical guidance and product recommendations tailored to your
                project requirements.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-5">
                Products We Supply
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Stainless Steel Pipes",
                  "Stainless Steel Tubes",
                  "Stainless Steel Sheets",
                  "Stainless Steel Plates",
                  "Carbon Steel Pipes",
                  "Alloy Steel Pipes",
                  "Pipe Fittings",
                  "Industrial Flanges",
                  "Industrial Valves",
                  "Hydraulic Tube Fittings",
                  "Fasteners & Hardware",
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
                Industries We Serve
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Oil & Gas",
                  "Petrochemical",
                  "Refineries",
                  "Power Plants",
                  "Construction",
                  "Railways",
                  "Shipbuilding",
                  "Offshore Projects",
                  "Steel Plants",
                  "Engineering Industries",
                  "Manufacturing Units",
                  "Government Projects",
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
                Why Contact Shree Maruti Steel?
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Premium Quality Products",
                  "Competitive Pricing",
                  "Fast Response Time",
                  "Technical Product Support",
                  "Bulk Order Capability",
                  "Pan India Supply Network",
                  "Trusted Industrial Supplier",
                  "Customer-Focused Service",
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
                Partner With a Trusted Industrial Supplier
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                Shree Maruti Steel is committed to delivering high-quality
                industrial products with dependable service and timely
                delivery. Contact our team today to discuss your requirements,
                request a quotation and discover how we can support your next
                industrial project with reliable material solutions.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}