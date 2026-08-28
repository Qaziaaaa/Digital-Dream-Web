import type { CSSProperties } from "react";

export function LogoStrip() {
  const logos = [
    "68d25330b01bba41673186a3_Logo (1).svg",
    "68d25330d070d05c6d18d307_Logo (3).svg",
    "68d253302b60f325552035a1_Logo (2).svg",
    "68d253300f87b6205fff9049_Logo (4).svg",
    "68d25330d19ea221f0d4fda4_Logo (5).svg",
    "68d2533082188ef43cc1b4e6_Logo.svg",
    "68d25331fed7f946306aa435_Logo (6).svg",
    "68d2533123b02165634935b9_Logo (7).svg",
    "68d2533170dca4466a5164b8_Logo (8).svg",
  ];
  return (
    <section className="section-logo">
      <div className="w-layout-blockcontainer container w-container">
        <div className="logo-main-wrapper">
          <div className="logo-header" data-reveal>
            <div className="logo-title">Trusted by the world&rsquo;s most innovative teams</div>
          </div>
          <div className="logo-wrapper" data-reveal style={{ "--d": "0.08s" } as CSSProperties}>
            {logos.map((l, i) => (
              <img
                key={l}
                src={`/axiolance/${l}`}
                loading="lazy"
                alt="Client logo"
                className={i === logos.length - 1 ? "trust-logo is-sm" : "trust-logo"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}