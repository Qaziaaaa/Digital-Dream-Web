import Link from "next/link";
import { services } from "@/lib/data";
import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 md:py-28" aria-labelledby="services-heading">
      <div className="container-x">
        <SectionHeading
          eyebrow="What we do"
          title="End-to-end digital services for modern businesses."
          lead="Strategy, design, development, and support delivered under one team — so your product stays coherent from first sketch to long-term growth."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-7 shadow-[0_18px_45px_-32px_rgba(23,38,58,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(38,132,252,0.5)]">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-800 to-brand-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span
                  aria-hidden="true"
                  className="absolute -top-16 -left-16 h-48 w-48 rounded-full bg-brand-500/40 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-500 transition-colors duration-300 group-hover:bg-brand-500/25 group-hover:text-brand-200 dark:bg-brand-950 dark:text-brand-300">
                    <Icon name={s.icon} className="text-[22px]" />
                  </span>

                  <h3 className="mt-5 text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft transition-colors duration-300 group-hover:text-white/75">
                    {s.short}
                  </p>

                  <Link
                    href={`/services#${s.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500 transition-colors duration-300 group-hover:text-brand-200"
                  >
                    Learn more
                    <Icon name="arrowRight" className="text-[14px] transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link href="/services" className="btn-outline">
            Explore all services
            <Icon name="arrowRight" className="text-[15px]" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}