import Link from "next/link";
import { processSteps } from "@/lib/data";
import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function ProcessSection({ id = "process", withCta = true }: { id?: string; withCta?: boolean }) {
  return (
    <section id={id} className="relative border-y border-line bg-bg-tinted py-20 md:py-28" aria-labelledby="process-heading">
      <div className="container-x">
        <SectionHeading
          eyebrow="How we work"
          title="A clear seven-step delivery process."
          lead="A proven workflow designed for quality delivery and smooth communication — so you always know what's happening and what comes next."
        />

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.no} as="li" delay={i * 60} className="flex">
              <article className="group relative flex w-full flex-col rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/60 hover:shadow-[0_22px_45px_-28px_rgba(38,132,252,0.45)]">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-500 transition-colors group-hover:bg-brand-500 group-hover:text-white dark:bg-brand-950 dark:text-brand-300">
                    <Icon name={step.icon} className="text-[18px]" />
                  </span>
                  <span className="font-display text-sm font-bold tracking-[0.16em] text-ink-300 transition-colors group-hover:text-brand-400">
                    STEP {step.no}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </ol>

        {withCta ? (
          <Reveal className="mt-12 text-center">
            <Link href="/work" className="btn-primary">
              See the full process
              <Icon name="arrowRight" className="text-[15px]" />
            </Link>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}