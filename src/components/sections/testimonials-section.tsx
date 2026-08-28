import { testimonials } from "@/lib/data";
import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="border-y border-line bg-bg-tinted py-20 md:py-28" aria-labelledby="testimonials-heading">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by teams that value quality delivery."
          lead="We measure success by the outcomes our clients feel — faster sites, higher rankings, and products users actually enjoy."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 70}>
              <figure className="card relative flex h-full flex-col p-7">
                <Icon name="quote" className="absolute right-6 top-6 text-[34px] text-brand-500/15" />
                <blockquote className="flex-1 text-sm leading-relaxed text-ink">“{t.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-500/15 font-display text-sm font-bold text-brand-500">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-ink-soft">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}