"use client";

import { useEffect, useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { Icon } from "./icons";

const inputCls =
  "w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-ink-300 transition-colors focus:border-brand-400 focus:outline-none dark:bg-ink-900/40";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  useEffect(() => {
    const service = new URLSearchParams(window.location.search).get("service");
    if (service) {
      const textarea = document.querySelector<HTMLTextAreaElement>('textarea[name="message"]');
      if (textarea && !textarea.value) {
        textarea.value = `Hi, I'm interested in ${service}. Here are the details of my project:`;
      }
    }
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "");
    const budget = String(data.get("budget") || "");
    const message = String(data.get("message") || "");

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(`New project inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nBudget: ${budget}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="flex h-full flex-col gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Your name <span aria-hidden="true" className="text-brand-500">*</span>
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" placeholder="John Carter" className={inputCls} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Work email <span aria-hidden="true" className="text-brand-500">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="john@company.com" className={inputCls} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="text-sm font-medium text-ink">
            Company
          </label>
          <input id="company" name="company" type="text" autoComplete="organization" placeholder="Company name" className={inputCls} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="budget" className="text-sm font-medium text-ink">
            Project budget
          </label>
          <select id="budget" name="budget" className={inputCls} defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            <option value="Under $1,000">Under $1,000</option>
            <option value="$1,000 – $5,000">$1,000 – $5,000</option>
            <option value="$5,000 – $15,000">$5,000 – $15,000</option>
            <option value="$15,000+">$15,000+</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Tell us about your project <span aria-hidden="true" className="text-brand-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you building? Goals, timeline, and anything else that helps."
          className={`${inputCls} resize-none`}
        />
      </div>

      <button type="submit" className="btn-primary mt-1 w-full">
        Send project inquiry
        <Icon name="arrowRight" />
      </button>

      <p className="text-xs leading-relaxed text-ink-soft" role={status === "error" ? "alert" : undefined}>
        {status === "sent" ? (
          <span className="font-medium text-emerald-600 dark:text-emerald-400">
            ✓ Check your email app — your inquiry is ready to send. We'll reply within one business day.
          </span>
        ) : status === "error" ? (
          <span className="font-medium text-red-600 dark:text-red-400">
            Please fill in your name, email, and message before sending.
          </span>
        ) : (
          `Prefer email? Write to ${site.email} directly — we reply within one business day.`
        )}
      </p>
    </form>
  );
}