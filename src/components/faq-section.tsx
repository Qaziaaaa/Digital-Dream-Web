"use client";

import type { CSSProperties } from "react";

import { useState } from "react";

const faqs = [
  {
    q: "What services does Digital Dream Web offer?",
    a: "We design and build websites, web apps, mobile apps, e-commerce stores, SaaS platforms, and AI-powered solutions.",
  },
  {
    q: "How much does a project cost?",
    a: "Every project is quoted individually. Simple sites start around $500, while larger apps and SaaS products range from $2,500 and up.",
  },
  {
    q: "How long does a project take?",
    a: "A marketing site typically takes 1–3 weeks, while complex apps and SaaS platforms take 4–12 weeks depending on scope.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. Every project includes free post-launch support, plus optional monthly care and maintenance plans.",
  },
  {
    q: "Can you build a custom SaaS or AI product?",
    a: "Absolutely. We work with founders to turn MVPs into full multi-tenant products with billing, dashboards, and AI features.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="Faq" className="section-faq">
      <div className="padding-global">
        <div className="w-layout-blockcontainer container w-container">
          <div className="section-main-wrapper">
            <div className="section-header is-max" data-reveal>
              <div className="section-tag-wrapper">
                <img
                  src="/axiolance/690f74385894ecf58abef4d1_68bfb430481fa3c0e8610f39_Vector (3) 1.svg"
                  loading="lazy"
                  alt=""
                  className="star-tag"
                />
                <div className="tag-text">Trending FAQs</div>
              </div>
              <h2 className="sub-heading">Frequently Asked Questions</h2>
            </div>
            <div className="faq-main-wrapper">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={f.q}
                    data-reveal
                    className={isOpen ? "faq-items-wrapper open" : "faq-items-wrapper"}
                    style={{ height: isOpen ? "auto" : "70px", "--d": `${i * 0.08}s` } as CSSProperties}
                  >
                    <div
                      className="question-wrapper"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setOpen(isOpen ? -1 : i);
                        }
                      }}
                    >
                      <div className="question-text">Q{i + 1}</div>
                      <div className="question-cover">
                        <div className="question-text">{f.q}</div>
                      </div>
                    </div>
                    <div className="answear-wrapper">
                      <div className="answear-cover">
                        <div className="text-regular">{f.a}</div>
                      </div>
                      <div className="question-text">Ans</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}