import CertificationsHero from "@/components/certifications/CertificationsHero";
import CertificationsGrid from "@/components/certifications/CertificationsGrid";
import CertificationsWhyChoose from "@/components/certifications/CertificationsWhyChoose";
import CertificationsCTA from "@/components/certifications/CertificationsCTA";

export const metadata = {
  title: "Certifications | Shree Maruti Steel",
  description:
    "Industrial certifications, quality assurance and trusted supplier standards of Shree Maruti Steel.",
};

const CertificationsPage = () => {
  return (
    <main className="overflow-hidden bg-white">
      <CertificationsHero />

      <CertificationsGrid />

      <CertificationsWhyChoose />

      <CertificationsCTA />
    </main>
  );
};

export default CertificationsPage;