import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative grid min-h-[70vh] place-items-center overflow-hidden bg-bg py-24">
      <div className="grid-bg-light pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(38,132,252,0.15),transparent)]"
      />
      <div className="container-x relative text-center">
        <p className="font-display text-7xl font-bold text-brand-500 sm:text-8xl">404</p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-ink sm:text-3xl">This page drifted out of scope.</h1>
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-ink-soft">
          The page you're looking for doesn't exist or has moved. Let's get you back on track.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3.5">
          <Link href="/" className="btn-primary">
            Back to home
            <Icon name="arrowRight" className="text-[15px]" />
          </Link>
          <Link href="/contact" className="btn-outline">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}