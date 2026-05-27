// app/page.tsx

import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ProductCategories from "@/components/home/ProductCategories";
import Industries from "@/components/home/Industries";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Certifications from "@/components/home/Certifications";
import CTA from "@/components/home/CTA";
import ContactForm from "@/components/home/ContactForm";

export default function Home() {
  return (
    <div className="overflow-hidden bg-white">
      <Hero />

      <AboutSection />

      <ProductCategories />

      <Industries />

      <WhyChooseUs />

      <Certifications />

      <CTA />

      <ContactForm />
    </div>
  );
}