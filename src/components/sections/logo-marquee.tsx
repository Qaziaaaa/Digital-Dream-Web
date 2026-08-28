import { technologies } from "@/lib/data";

export function LogoMarquee() {
  const items = [...technologies, ...technologies];
  return (
    <section className="border-b border-line bg-bg-tinted py-10" aria-label="Technologies we build with">
      <div className="container-x">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
          We build with the technologies your business already runs on
        </p>
        <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="marquee-track flex w-max gap-3">
            {items.map((t, i) => (
              <span
                key={`${t}-${i}`}
                className="whitespace-nowrap rounded-full border border-line bg-surface px-5 py-2 text-sm font-medium text-ink-soft"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}