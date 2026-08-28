import Link from "next/link";
import { site } from "@/lib/site";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";

export function CtaSection({ id = "contact" }: { id?: string }) {
  return (
    <section id={id} className="relative overflow-hidden bg-ink-950 py-20 text-white md:py-24" aria-labelledby="cta-heading">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-[640px] -translate-x-1/2 rounded-full bg-brand-500/25 blur-3xl"
      />
      <div className="container-x relative mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="eyebrow-on-dark">Let&apos;s build together</p>
          <h2
            id="cta-heading"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Have a project in mind? Let&apos;s make it real.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
            Tell us where you want to go — we&apos;ll map the route, scope the work, and give you a fixed
            price with no surprises. Free consultation, reply within one business day.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
            <Link href="/contact" className="btn-primary !px-7 !py-3.5">
              Start your project
              <Icon name="arrowRight" className="text-[16px]" />
            </Link>
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-ghost-light !px-7 !py-3.5">
              <Icon name="whatsapp" className="text-[16px]" />
              Message us on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}