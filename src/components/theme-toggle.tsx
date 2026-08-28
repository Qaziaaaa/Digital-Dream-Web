"use client";

import { useSyncExternalStore } from "react";
import { Icon } from "./icons";

type Theme = "light" | "dark";

let listeners: (() => void)[] = [];

function subscribe(cb: () => void) {
  listeners.push(cb);
  if (typeof window !== "undefined") window.addEventListener("storage", cb);
  return () => {
    listeners = listeners.filter((l) => l !== cb);
    if (typeof window !== "undefined") window.removeEventListener("storage", cb);
  };
}

function getSnapshot(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerSnapshot(): Theme {
  return "light";
}

function emit() {
  listeners.forEach((l) => l());
}

function toggleTheme() {
  const root = document.documentElement;
  const next: Theme = root.classList.contains("dark") ? "light" : "dark";
  root.classList.toggle("dark", next === "dark");
  localStorage.setItem("ddw-theme", next);
  emit();
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-ink-soft transition-colors hover:border-brand-400 hover:text-brand-500"
    >
      {theme === "dark" ? <Icon name="sun" className="text-[15px]" /> : <Icon name="moon" className="text-[15px]" />}
    </button>
  );
}