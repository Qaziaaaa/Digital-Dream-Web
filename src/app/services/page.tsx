import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { services } from "@/lib/data";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { ProcessSection } from "@/components/sections/process-section";
import { site as siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, mobile apps, UI/UX design, AI & automation, SaaS engineering, and digital marketing — end-to-end software services under one team.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Digital Dream Web",
    description:
      "Web development, mobile apps, UI/UX design, AI & automation, SaaS engineering, and digital marketing — end-to-end software services under one team.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.domain },
    { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.domain}/services` },
  ],
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.title,
    description: s.short,
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />

      <PageHero
        eyebrow="Services"
        title={
          <>
            Everything it takes to ship a{" "}
            <span className="bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">
              great digital product.
            </span>
          </>
        }
        lead="Strategy, design, development, and support under one team — so your product stays coherent from first sketch to long-term growth."
      />

      <div className="container-x">
        <nav aria-label="On this page" className="flex flex-wrap gap-2">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="rounded-full border border-line bg-surface px-4 py-2 text-xs font-semibold text-ink-soft transition-colors hover:border-brand-400 hover:text-brand-500"
            >
              {s.title}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-6">
        {services.map((s, i) => {
          const reverse = i % 2 === 1;
          return (
            <section
              key={s.slug}
              id={s.slug}
              className={`scroll-mt-20 border-t border-line py-16 md:py-24 ${i % 2 === 1 ? "bg-bg-tinted" : "bg-bg"}`}
              aria-labelledby={`${s.slug}-title`}
            >
              <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div className={reverse ? "lg:order-2" : ""}>
                  <Reveal>
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-[0_14px_30px_-12px_rgba(38,132,252,0.6)]">
                      <Icon name={s.icon} className="text-[26px]" />
                    </span>
                    <p className="eyebrow mt-5">Service {String(i + 1).padStart(2, "0")}</p>
                    <h2 id={`${s.slug}-title`} className="mt-2 text-2xl font-bold tracking-tight text-ink md:text-3xl">
                      {s.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-ink-soft">{s.description}</p>
                    <Link href={`/contact?service=${encodeURIComponent(s.title)}`} className="btn-primary mt-7">
                      Discuss this service
                      <Icon name="arrowRight" className="text-[15px]" />
                    </Link>
                  </Reveal>
                </div>

                <div className={reverse ? "lg:order-1" : ""}>
                  <Reveal delay={120}>
                    <div className="card overflow-hidden p-2">
                      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-300/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
                        <span className="ml-3 h-4 flex-1 rounded bg-bg-tinted" />
                      </div>
                      <div className="p-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-500">What&apos;s included</p>
                        <ul className="mt-4 space-y-3">
                          {s.features.map((f) => (
                            <li key={f} className="flex items-start gap-3 text-sm text-ink">
                              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-brand-500">
                                <Icon name="check" className="text-[11px]" />
                              </span>
                              {f}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-6 flex items-center gap-2 border-t border-line pt-5 text-xs text-ink-soft">
                          <Icon name="clock" className="text-[14px] text-brand-500" />
                          Timelines & fixed pricing shared after a free consultation with {siteConfig.name}.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <ProcessSection id="services-process" />
      <FaqSection showAll />
      <CtaSection id="services-cta" />
    </>
  );
}