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
  title: "Shree Maruti Steel",
  description:
    "Leading Manufacturers, Suppliers & Stockists of Stainless Steel Pipes, Plates, Fittings, Flanges, Valves & Industrial Raw Materials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="bg-[#0b0b0b] text-white min-h-screen flex flex-col antialiased overflow-x-hidden">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1 pt-20">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}