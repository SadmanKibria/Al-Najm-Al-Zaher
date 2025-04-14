import Hero from "@/components/hero";
import AboutSection from "@/components/about-section";
import CommoditiesSection from "@/components/commodities-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <AboutSection />
      <CommoditiesSection />
      <ContactSection />
    </div>
  );
}
