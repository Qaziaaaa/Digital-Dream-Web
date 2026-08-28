import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TeamSection } from "@/components/sections/team-section";
import { CtaSection } from "@/components/sections/cta-section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Digital Dream Web is a software studio from Peshawar, Pakistan building websites, apps, SaaS platforms, and AI solutions that perform and scale.",
  alternates: { canonical: "/about" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.domain },
    { "@type": "ListItem", position: 2, name: "About Us", item: `${site.domain}/about` },
  ],
};

const values = [
  {
    title: "Craft over shortcuts",
    description: "Clean code, thoughtful design, and honest timelines. We'd rather do fewer things well than many things poorly.",
    icon: "pen",
  },
  {
    title: "Business outcomes first",
    description: "Every feature we build has a job: more leads, more conversions, simpler operations — and we measure it.",
    icon: "target",
  },
  {
    title: "Ownership",
    description: "One accountable team from discovery to support. Your project has an owner, not just a handoff.",
    icon: "users",
  },
  {
    title: "AI as a force multiplier",
    description: "We ship practical AI — chatbots, automation, intelligent features — where it clearly pays for itself.",
    icon: "sparkles",
  },
];

const milestones = [
  { year: "2019", text: "Started web development and graphic design, shipping marketing sites for local businesses." },
  { year: "2022", text: "Expanded into full-stack and MERN development — e-commerce, dashboards, and web apps." },
  { year: "2024", text: "Founded Digital Dream Web as a studio, delivering end-to-end design and engineering." },
  { year: "2026", text: "Doubled down on AI — RAG chatbots, AI agents, and intelligent product features." },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        eyebrow="About us"
        title="A small team with big ideas, building software that performs."
        lead="Digital Dream Web began a simple translation of our name: we help businesses turn digital dreams — and ambitions — into working software."
      />

      {/* Story */}
      <section className="border-t border-line bg-bg-tinted py-16 md:py-24" aria-labelledby="story-heading">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow">Our story</p>
            <h2 id="story-heading" className="mt-3 text-2xl font-bold tracking-tight text-ink md:text-3xl">
              We build like owners, because we are.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-soft">
              <p>
                Digital Dream Web is a software studio based in Peshawar, Pakistan, founded by web
                developer Qazi Farhan Ahmad. What started as a freelance web and graphic design
                practice grew into a full delivery team covering strategy, design, development, AI,
                and ongoing support.
              </p>
              <p>
                We've shipped e-commerce platforms with real payments, AI agency experiences,
                consumer apps, and AI-powered product features. Every project is treated as a
                product we're proud to put our name on — because it is.
              </p>
              <p>
                Today we work with startups and growing businesses that want a partner who thinks
                like a product owner: technically rigorous, commercially aware, and committed to
                on-time, on-budget delivery.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link href="/services" className="btn-primary">
                See what we do
                <Icon name="arrowRight" className="text-[15px]" />
              </Link>
              <Link href="/contact" className="btn-outline">
                Work with us
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card overflow-hidden p-6 sm:p-8">
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-brand-500">Milestones</h3>
              <ol className="mt-6 space-y-0">
                {milestones.map((m, i) => (
                  <li key={m.year} className="relative flex gap-5 pb-8 last:pb-0">
                    {i < milestones.length - 1 ? (
                      <span aria-hidden="true" className="absolute left-[15px] top-8 h-full w-px bg-line" />
                    ) : null}
                    <span className="relative z-10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-500/30 bg-surface font-display text-[10px] font-bold text-brand-500">
                      {m.year.slice(2)}
                    </span>
                    <div>
                      <p className="font-display text-sm font-bold text-ink">{m.year}</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">{m.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24" aria-labelledby="values-heading">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our values"
            title="What we stand for."
            lead="The principles that guide every decision we make — on screen and off."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <article className="card flex h-full gap-5 p-7">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-500 dark:bg-brand-950 dark:text-brand-300">
                    <Icon name={v.icon} className="text-[22px]" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />

      {/* Numbers */}
      <section className="border-t border-line bg-ink-950 py-16 text-white md:py-20" aria-labelledby="numbers-heading">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow-on-dark">By the numbers</p>
            <h2 id="numbers-heading" className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              A track record of delivery.
            </h2>
          </Reveal>
          <dl className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {[
              { value: "40+", label: "Projects delivered" },
              { value: "5+", label: "Industries served" },
              { value: "100%", label: "On-time launches" },
              { value: "24/7", label: "Support availability" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 60}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-7 text-center">
                  <dd className="font-display text-3xl font-bold text-brand-300">{s.value}</dd>
                  <dt className="mt-2 text-sm text-white/60">{s.label}</dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <CtaSection id="about-cta" />
    </>
  );
}