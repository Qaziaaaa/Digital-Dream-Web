import Link from "next/link";
import { Icon } from "@/components/icons";

const heroStats = [
  { value: "40+", label: "Projects delivered" },
  { value: "100%", label: "On-time launches" },
  { value: "24/7", label: "Support, when you need it" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white" aria-labelledby="hero-heading">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(38,132,252,0.45),transparent)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="animate-pulse-glow pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-brand-500/25 blur-3xl"
      />

      <div className="container-x relative grid items-center gap-14 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
        <div className="hero-copy-enter relative max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-300 backdrop-blur">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
            </span>
            Software development company
          </p>

          <h1
            id="hero-heading"
            className="mt-6 text-balance text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
          >
            Software, apps, and{" "}
            <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 bg-clip-text text-transparent">
              digital dreams
            </span>{" "}
            built to perform.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            {`Digital Dream Web delivers websites, web apps, mobile apps, SaaS platforms, and
            AI-powered solutions that are easy to use and ready to scale — designed, built, and
            supported under one team.`}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <Link href="/contact" className="btn-primary !px-7 !py-3.5">
              Start your project
              <Icon name="arrowRight" className="text-[16px]" />
            </Link>
            <Link href="/work" className="btn-ghost-light !px-7 !py-3.5">
              See our work
            </Link>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {heroStats.map((s) => (
              <div key={s.label} className="flex items-baseline gap-2">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-bold text-white">{s.value}</dd>
                <dd className="max-w-[9rem] text-xs leading-snug text-white/55">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Dashboard mock */}
        <div className="relative hidden lg:block" aria-hidden="true">
          <div className="animate-float">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-1.5 shadow-[0_40px_80px_-30px_rgba(15,38,71,0.9)] backdrop-blur">
              <div className="rounded-xl bg-ink-900/90 p-5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-3 h-5 w-40 rounded-md bg-white/10" />
                </div>
                <div className="mt-5 flex items-end justify-between gap-6">
                  <div className="space-y-2.5">
                    <div className="h-4 w-36 rounded bg-white/15" />
                    <div className="h-3 w-24 rounded bg-white/10" />
                    <div className="mt-4 flex gap-2">
                      <span className="rounded-full bg-brand-500 px-3 py-1.5 text-[10px] font-semibold text-white">+128%</span>
                      <span className="rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-semibold text-white/70">SEO rank</span>
                    </div>
                  </div>
                  <div className="flex h-20 items-end gap-1.5">
                    {[38, 62, 45, 78, 58, 92, 70].map((h, i) => (
                      <span key={i} className="w-3 rounded-t-md bg-gradient-to-t from-brand-600 to-brand-300" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2.5">
                  {["Web app", "Mobile app", "AI"].map((t, i) => (
                    <div key={t} className="rounded-lg bg-white/[0.07] p-2.5">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-brand-500/25 text-brand-300">
                        <Icon name={i === 0 ? "globe" : i === 1 ? "smartphone" : "sparkles"} className="text-[13px]" />
                      </span>
                      <p className="mt-1.5 text-[10px] font-medium text-white/70">{t}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="animate-float absolute -left-6 top-8 flex items-center gap-2.5 rounded-2xl border border-white/10 bg-ink-900/90 px-4 py-3 shadow-2xl backdrop-blur" style={{ animationDelay: "1.2s" }}>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
              <Icon name="check" className="text-[15px]" />
            </span>
            <div>
              <p className="text-xs font-semibold text-white">Project delivered</p>
              <p className="text-[10px] text-white/55">on time, on budget</p>
            </div>
          </div>
          <div className="animate-float absolute -right-4 bottom-10 flex items-center gap-2.5 rounded-2xl border border-white/10 bg-ink-900/90 px-4 py-3 shadow-2xl backdrop-blur" style={{ animationDelay: "2s" }}>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/25 text-brand-300">
              <Icon name="zap" className="text-[15px]" />
            </span>
            <div>
              <p className="text-xs font-semibold text-white">AI-powered</p>
              <p className="text-[10px] text-white/55">automation built-in</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-friendly hero visual */}
      <div className="container-x pb-16 lg:hidden" aria-hidden="true">
        <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-1.5 backdrop-blur">
          <div className="rounded-xl bg-ink-900/90 p-5">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <div className="mt-5 flex h-24 items-end gap-1.5">
              {[38, 62, 45, 78, 58, 92, 70].map((h, i) => (
                <span key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-brand-600 to-brand-300" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2.5">
              {["Web app", "Mobile app", "AI"].map((t, i) => (
                <div key={t} className="rounded-lg bg-white/[0.07] p-2.5 text-center">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-brand-500/25 text-brand-300">
                    <Icon name={i === 0 ? "globe" : i === 1 ? "smartphone" : "sparkles"} className="text-[13px]" />
                  </span>
                  <p className="mt-1.5 text-[10px] font-medium text-white/70">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}