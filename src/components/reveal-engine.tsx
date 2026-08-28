"use client";

import { useLayoutEffect } from "react";

import { INITIAL_TRANSFORM, OUT_QUART, REVEAL, REVEAL_DURATION } from "@/lib/interactions";

export function RevealEngine() {
  useLayoutEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const els = Object.keys(REVEAL)
      .map((id) => document.querySelector<HTMLElement>(`[data-w-id="${id}"]`))
      .filter((el): el is HTMLElement => Boolean(el));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          const id = el.getAttribute("data-w-id") ?? "";
          const cfg = REVEAL[id];
          el.style.transition = `opacity ${REVEAL_DURATION}ms ${OUT_QUART} ${cfg.d}ms, transform ${REVEAL_DURATION}ms ${OUT_QUART} ${cfg.d}ms`;
          el.style.opacity = "1";
          el.style.transform = "none";
          el.style.willChange = "auto";
          io.unobserve(el);
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px -10% 0px" }
    );

    els.forEach((el) => {
      const id = el.getAttribute("data-w-id") ?? "";
      const cfg = REVEAL[id];
      el.style.opacity = "0";
      el.style.transform = INITIAL_TRANSFORM[cfg.fx];
      el.style.willChange = "opacity, transform";
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return null;
}