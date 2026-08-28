import { whyChoose } from "@/lib/data";
import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function WhySection({ id = "why-choose-us" }: { id?: string }) {
  return (
    <section id={id} className="py-20 md:py-28" aria-labelledby="why-heading">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why choose us"
          title="Why growing teams choose Digital Dream Web."
          lead="We combine strategy, design, and engineering to deliver reliable digital products with measurable business impact."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((w, i) => (
            <Reveal key={w.title} delay={i * 60}>
              <article className="h-full rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/60 hover:shadow-[0_22px_45px_-28px_rgba(38,132,252,0.45)]">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-500/25 bg-brand-50 text-brand-500 dark:bg-brand-950 dark:text-brand-300">
                  <Icon name={w.icon} className="text-[19px]" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{w.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}