import { team } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-28" aria-labelledby="team-heading">
      <div className="container-x">
        <SectionHeading
          eyebrow="The team"
          title="People behind the product delivery."
          lead="A focused team of strategists, designers, and engineers working as one delivery unit."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 70}>
              <article className="card h-full p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/60">
                <span className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 font-display text-2xl font-bold text-white shadow-[0_14px_30px_-12px_rgba(38,132,252,0.6)]">
                  {member.initials}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">{member.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-500">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{member.bio}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}