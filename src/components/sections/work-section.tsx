import { projects } from "@/lib/data";
import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function WorkSection({ id = "work", withCta = true }: { id?: string; withCta?: boolean }) {
  return (
    <section id={id} className="relative overflow-hidden bg-ink-950 py-20 text-white md:py-28" aria-labelledby="work-heading">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-brand-500/20 blur-3xl"
      />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects we've shipped, and loved."
          lead="A snapshot of applications, platforms, and AI experiences built by the Digital Dream Web team."
          dark
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/50 hover:bg-white/[0.08]"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-400 to-brand-600"
                />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">{p.category}</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">{p.title}</h3>
                  </div>
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all group-hover:border-brand-400 group-hover:bg-brand-500 group-hover:text-white">
                    <Icon name="arrowUpRight" className="text-[16px]" />
                  </span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">{p.description}</p>
                <p className="mt-5 text-xs font-medium text-white/45">{p.stack}</p>
              </a>
            </Reveal>
          ))}
        </div>

        {withCta ? (
          <Reveal className="mt-12 text-center">
            <a href="mailto:qazithekingston@gmail.com" className="btn-ghost-light">
              Have a project like these?
              <Icon name="arrowRight" className="text-[15px]" />
            </a>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}