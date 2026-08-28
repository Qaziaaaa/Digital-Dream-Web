import { Reveal } from "@/components/reveal";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, lead, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-bg pb-14 pt-28 md:pb-20 md:pt-36">
      <div className="grid-bg-light pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(38,132,252,0.14),transparent)]"
      />
      <div className="container-x relative">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl">{title}</h1>
          {lead ? <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">{lead}</p> : null}
          {children}
        </Reveal>
      </div>
    </section>
  );
}