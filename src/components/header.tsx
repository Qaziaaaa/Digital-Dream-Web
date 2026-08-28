"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { Icon } from "./icons";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";

function useScrolled(offset = 10) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);
  return scrolled;
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "border-line bg-bg/85 backdrop-blur-xl" : "border-transparent bg-bg/60 backdrop-blur-md"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive(item.href) ? "text-brand-500" : "text-ink-soft hover:text-brand-500"
              }`}
            >
              {item.label}
              {isActive(item.href) ? (
                <span className="absolute inset-x-4 -bottom-px h-0.5 rounded-full bg-brand-500" aria-hidden="true" />
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <Link href="/contact" className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
            Let's talk
            <Icon name="arrowRight" className="text-[15px]" />
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink md:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="text-[18px]" />
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-x-0 top-16 bottom-0 z-40 bg-bg transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="container-x flex flex-col gap-1 pt-6">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`rounded-2xl px-5 py-4 text-lg font-semibold transition-colors ${
                isActive(item.href) ? "bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-300" : "text-ink hover:bg-bg-tinted"
              }`}
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-4">
            Let's talk about your project
            <Icon name="arrowRight" />
          </Link>
        </nav>
      </div>
    </header>
  );
}