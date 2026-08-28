import type { ReactNode } from "react";
import { Reveal } from "./reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export function SectionHeading({ eyebrow, title, lead, align = "center", dark = false, className = "" }: SectionHeadingProps) {
  const alignCls = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <Reveal className={`max-w-2xl ${alignCls} ${className}`}>
      <p className={dark ? "eyebrow-on-dark" : "eyebrow"}>{eyebrow}</p>
      <h2
        className={`mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p className={`mt-4 text-base leading-relaxed ${dark ? "text-white/70" : "text-ink-soft"}`}>{lead}</p>
      ) : null}
    </Reveal>
  );
}