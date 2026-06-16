import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shreemarutisteel.in"),

  title: {
    default: "Shree Maruti Steel | Industrial Steel Products Supplier",
    template: "%s | Shree Maruti Steel",
  },

  description:
    "Leading supplier of Stainless Steel Pipes, Pipe Fittings, Valves, Fasteners, Plates, Instrumentation Products, Bearings, Bushings and Industrial Engineering Products in India.",

  keywords: [
    "stainless steel pipes",
    "ss pipe fittings",
    "industrial valves",
    "fasteners",
    "stainless steel plates",
    "instrumentation products",
    "pressure gauges",
    "temperature gauges",
    "hydraulic tube fittings",
    "industrial hardware",
    "engineering products supplier",
    "shree maruti steel",
  ],

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.shreemarutisteel.in",
    siteName: "Shree Maruti Steel",
    title: "Shree Maruti Steel | Industrial Steel Products Supplier",
    description:
      "Leading supplier of Stainless Steel Pipes, Pipe Fittings, Valves, Fasteners, Plates, Instrumentation Products and Industrial Engineering Products.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shree Maruti Steel",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Shree Maruti Steel",
    description:
      "Industrial Steel Products, Pipe Fittings, Fasteners, Valves and Engineering Products Supplier.",
    images: ["/og-image.jpg"],
  },

  verification: {
    google: "google-site-verification=df7iFRp35X7B0gC6VFMrW9WxKmk6vFr_8GLph4DyLuM",
  },

  category: "Industrial Supplies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Shree Maruti Steel",
    url: "https://www.shreemarutisteel.in",
    logo: "https://www.shreemarutisteel.in/logo.png",
    description:
      "Leading supplier of Stainless Steel Pipes, Pipe Fittings, Valves, Fasteners, Plates and Industrial Engineering Products.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="bg-[#0b0b0b] text-white min-h-screen flex flex-col antialiased overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <Header />

        <main className="flex-1 pt-20">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}