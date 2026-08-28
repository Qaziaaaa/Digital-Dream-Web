import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { ServicesSection } from "@/components/sections/services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { WhySection } from "@/components/sections/why-section";
import { WorkSection } from "@/components/sections/work-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TeamSection } from "@/components/sections/team-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { services, faqs } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${site.name} — Website & Software Development Company`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  keywords: [
    "software development company",
    "web development agency",
    "mobile app development",
    "AI development",
    "SaaS development",
    "UI/UX design",
    "SEO services",
    site.name,
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${site.domain}/#webpage`,
      url: site.domain,
      name: `${site.name} — Website & Software Development Company`,
      description: site.description,
      isPartOf: { "@id": `${site.domain}/#website` },
      inLanguage: "en",
    },
    {
      "@type": "OfferCatalog",
      name: "Digital Dream Web services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.short,
          provider: { "@type": "Organization", name: site.name, url: site.domain },
        },
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Hero />
      <LogoMarquee />
      <ServicesSection />
      <ProcessSection />
      <WhySection />
      <WorkSection />
      <TestimonialsSection />
      <TeamSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}