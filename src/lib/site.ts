export const site = {
  name: "Digital Dream Web",
  legalName: "Digital Dream Web",
  domain: process.env.NEXT_PUBLIC_SITE_URL || "https://digitaldreamweb.com",
  description:
    "Digital Dream Web is a software development company crafting websites, web apps, mobile apps, SaaS platforms, and AI-powered solutions that are fast, secure, and built to scale.",
  tagline: "Software, apps, and digital products built to perform.",
  email: "qazithekingston@gmail.com",
  phone: "+92 314 1935787",
  whatsapp: "923141935787",
  location: "Peshawar, Pakistan",
  founded: 2024,
  social: {
    linkedin: "https://www.linkedin.com/in/qazi-farhan-ahmad",
    github: "https://github.com/Qaziaaaa",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Web Development", href: "/services#web-development" },
    { label: "Mobile Development", href: "/services#mobile-development" },
    { label: "UI/UX Design", href: "/services#ui-ux-design" },
    { label: "AI & Automation", href: "/services#ai-and-automation" },
    { label: "SaaS & Product Engineering", href: "/services#saas-and-product-engineering" },
    { label: "Digital Marketing & SEO", href: "/services#digital-marketing-and-seo" },
  ],
  process: [
    { label: "How We Work", href: "/work" },
    { label: "Our Process", href: "/work#process" },
    { label: "Why Choose Us", href: "/#why-choose-us" },
    { label: "FAQ", href: "/#faq" },
  ],
} as const;