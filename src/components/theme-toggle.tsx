"use client";

import { useEffect, useState } from "react";
import { Icon } from "./icons";

function getInitial(): "dark" | "light" {
  if (typeof document === "undefined") return "light";
  const stored = localStorage.getItem("ddw-theme");
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const initial = getInitial();
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("ddw-theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-ink-soft transition-colors hover:border-brand-400 hover:text-brand-500"
    >
      {theme === "dark" ? <Icon name="sun" className="text-[15px]" /> : <Icon name="moon" className="text-[15px]" />}
    </button>
  );
}