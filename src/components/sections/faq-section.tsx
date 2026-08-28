import { faqs } from "@/lib/data";
import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function FaqSection({ id = "faq", showAll = false }: { id?: string; showAll?: boolean }) {
  const items = showAll ? faqs : faqs.slice(0, 5);
  return (
    <section id={id} className="border-t border-line bg-bg-tinted py-20 md:py-28" aria-labelledby="faq-heading">
      <div className="container-x">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions."
          lead="Straight answers about cost, timelines, support, and SEO — the questions every project starts with."
        />

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_18px_45px_-32px_rgba(23,38,58,0.35)]">
            {items.map((f, i) => (
              <details
                key={f.question}
                className="group border-b border-line last:border-b-0"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold text-ink transition-colors hover:bg-bg-tinted sm:text-base">
                  {f.question}
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-ink-soft transition-all group-open:rotate-45 group-open:border-brand-400 group-open:text-brand-500">
                    <Icon name="close" className="text-[12px]" />
                  </span>
                </summary>
                <p className="px-6 pb-6 text-sm leading-relaxed text-ink-soft">{f.answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}