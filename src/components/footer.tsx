import Link from "next/link";
import { footerLinks, site } from "@/lib/site";
import { Icon } from "./icons";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ink-800 bg-ink-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_80%_0%,rgba(38,132,252,0.22),transparent_60%)]" aria-hidden="true" />
      <div className="container-x relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo invert />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {site.description}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-brand-400 hover:text-brand-300"
              >
                <Icon name="linkedin" className="text-[17px]" />
              </a>
              <a
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-brand-400 hover:text-brand-300"
              >
                <Icon name="github" className="text-[17px]" />
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-brand-400 hover:text-brand-300"
              >
                <Icon name="whatsapp" className="text-[17px]" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <nav aria-label="Company">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">Company</h3>
              <ul className="mt-4 space-y-2.5">
                {footerLinks.company.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-white/70 transition-colors hover:text-brand-300">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Services">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">Services</h3>
              <ul className="mt-4 space-y-2.5">
                {footerLinks.services.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-white/70 transition-colors hover:text-brand-300">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Process">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">Explore</h3>
              <ul className="mt-4 space-y-2.5">
                {footerLinks.process.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-white/70 transition-colors hover:text-brand-300">
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-1">
                  <Link href="/privacy" className="text-sm text-white/70 transition-colors hover:text-brand-300">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <Icon name="map" className="text-[14px] text-brand-400" />
            <span>{site.location}</span>
            <span aria-hidden="true">·</span>
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-brand-300">
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}