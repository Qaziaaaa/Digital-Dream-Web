import Link from "next/link";
import { site } from "@/lib/site";

type LogoProps = {
  invert?: boolean;
  href?: string;
};

export function Logo({ invert = false, href = "/" }: LogoProps) {
  return (
    <Link
      href={href}
      aria-label={`${site.name} — home`}
      className="flex items-center gap-2.5"
    >
      {/* The transparent wordmark reads best on a light tile, so we keep it on one in both themes. */}
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-[0_6px_16px_-6px_rgba(23,38,58,0.35)]">
        <img
          src="/logo.png"
          alt={`${site.name} logo`}
          width={40}
          height={40}
          className="h-9 w-9 object-contain"
        />
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display text-[15px] font-bold tracking-tight ${
            invert ? "text-white" : "text-ink"
          }`}
        >
          Digital Dream
        </span>
        <span
          className={`block font-display text-[11px] font-semibold uppercase tracking-[0.22em] ${
            invert ? "text-brand-300" : "text-brand-500"
          }`}
        >
          Web
        </span>
      </span>
    </Link>
  );
}