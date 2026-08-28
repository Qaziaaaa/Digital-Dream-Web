import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { FaqSection } from "@/components/sections/faq-section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a free consultation and a fixed-price quote for your website, app, or software project. Digital Dream Web replies within one business day.",
  alternates: { canonical: "/contact" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.domain },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${site.domain}/contact` },
  ],
};

const contactDetails = [
  {
    icon: "mail",
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: "phone",
    label: "Phone / WhatsApp",
    value: site.phone,
    href: `https://wa.me/${site.whatsapp}`,
  },
  {
    icon: "clock",
    label: "Availability",
    value: "Mon – Sat, 9am – 9pm (PKT)",
    href: null,
  },
  {
    icon: "map",
    label: "Location",
    value: site.location,
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project."
        lead="Tell us what you're building — we'll respond within one business day with next steps and a clear estimate."
      />

      <section className="border-t border-line bg-bg-tinted py-16 md:py-24" aria-labelledby="contact-form-heading">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <Reveal>
            <div className="card p-8">
              <p className="eyebrow">Get in touch</p>
              <h2 id="contact-form-heading" className="mt-3 text-2xl font-bold tracking-tight text-ink">
                Start your project
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                The more you share up front, the sharper your estimate will be. Shares are always
                confidential.
              </p>

              <div className="mt-8 space-y-5">
                {contactDetails.map((d) => {
                  const content = (
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-500 dark:bg-brand-950 dark:text-brand-300">
                        <Icon name={d.icon} className="text-[18px]" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-ink">{d.label}</p>
                        <p className="mt-0.5 text-sm text-ink-soft">{d.value}</p>
                      </div>
                    </div>
                  );
                  return d.href ? (
                    <a key={d.label} href={d.href} target={d.href.startsWith("http") ? "_blank" : undefined} rel={d.href.startsWith("http") ? "noopener noreferrer" : undefined} className="block transition-opacity hover:opacity-75">
                      {content}
                    </a>
                  ) : (
                    <div key={d.label}>{content}</div>
                  );
                })}
              </div>

              <div className="mt-8 rounded-2xl border border-brand-500/25 bg-brand-50 p-5 dark:bg-brand-950/50">
                <p className="text-sm font-semibold text-brand-700 dark:text-brand-200">No matter the size</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  From a one-page site to a multi-module SaaS — every inquiry gets the same senior
                  attention and a straight answer.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card h-full p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection />
    </>
  );
}