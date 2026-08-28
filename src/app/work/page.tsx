import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { ProcessSection } from "@/components/sections/process-section";
import { WorkSection } from "@/components/sections/work-section";
import { CtaSection } from "@/components/sections/cta-section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Work & Process",
  description:
    "Explore Digital Dream Web's seven-step delivery process, flexible engagement models, and a selection of shipped projects.",
  alternates: { canonical: "/work" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.domain },
    { "@type": "ListItem", position: 2, name: "Our Work & Process", item: `${site.domain}/work` },
  ],
};

const engagementModels = [
  {
    title: "Fixed-price projects",
    description:
      "A clear scope, a fixed price, and a milestone-based timeline. On-time and on-budget with satisfaction guaranteed — ideal for launch-ready products.",
    icon: "target",
  },
  {
    title: "Dedicated teams",
    description:
      "A senior team embedded into your product as an extension of yours — monthly sprint planning, daily standups, and direct collaboration.",
    icon: "users",
  },
  {
    title: "Support & growth",
    description:
      "Post-launch monitoring, updates, performance tuning, and ongoing enhancements that compound your product's value over time.",
    icon: "heart",
  },
];

export default function WorkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        eyebrow="How we work"
        title="A predictable process. Transparent pricing. No surprises."
        lead="From first consultation to post-launch growth, you'll always know what's happening, who's accountable, and what comes next."
      />

      {/* Engagement models */}
      <section className="border-t border-line bg-bg-tinted py-16 md:py-24" aria-labelledby="models-heading">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">How you engage</p>
            <h2 id="models-heading" className="mt-3 text-2xl font-bold tracking-tight text-ink md:text-3xl">
              Three ways to work with us.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {engagementModels.map((m, i) => (
              <Reveal key={m.title} delay={i * 60}>
                <article className="card h-full p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/60">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-500 dark:bg-brand-950 dark:text-brand-300">
                    <Icon name={m.icon} className="text-[19px]" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{m.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection withCta={false} />

      <WorkSection withCta={false} />

      {/* Commitments band */}
      <section className="border-t border-line py-16 md:py-20" aria-labelledby="commitments-heading">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Our commitment</p>
            <h2 id="commitments-heading" className="mt-3 text-2xl font-bold tracking-tight text-ink md:text-3xl">
              On-time and satisfaction guaranteed.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Every project ships with weekly updates, clear milestones, and a delivery date we commit
              to in writing. If we miss it, you'll know before it happens — not after.
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Start your project
              <Icon name="arrowRight" className="text-[15px]" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaSection id="work-cta" />
    </>
  );
}