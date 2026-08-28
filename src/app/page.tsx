import { Navbar } from "@/components/navbar";
import { Hero, DashbordOverlay } from "@/components/hero";
import { LogoStrip } from "@/components/logo-strip";
import { AboutSection } from "@/components/about-section";
import { FeaturesTabs } from "@/components/features-tabs";
import { ModulesSection } from "@/components/modules-section";
import { Testimonials } from "@/components/testimonials";
import { PricingSection } from "@/components/pricing-section";
import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="main-werapper">
        <Hero />
        <DashbordOverlay />
        <LogoStrip />
        <AboutSection />
        <FeaturesTabs />
        <ModulesSection />
        <Testimonials />
        <PricingSection />
        <ContactSection />
        <FaqSection />
      </div>
      <Footer />
    </div>
  );
}