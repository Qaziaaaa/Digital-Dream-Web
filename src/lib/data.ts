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
    twitter: "",
  },
} as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  icon: string;
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    short:
      "Modern websites and web applications with clean code, fast load times, and secure foundations.",
    description:
      "From marketing websites to complex web applications, we build with modern frameworks like Next.js and React to deliver fast, SEO-ready experiences. Every build is performance-tuned, secure by default, and ready to scale with your traffic.",
    features: [
      "Corporate & marketing websites",
      "E-commerce & web applications",
      "Admin dashboards & portals",
      "SEO-ready, high-speed builds",
      "API design & integrations",
    ],
    icon: "globe",
  },
  {
    slug: "mobile-development",
    title: "Mobile Development",
    short:
      "Android and iOS apps designed for smooth user experience and long-term maintenance.",
    description:
      "We design and build cross-platform mobile apps that feel native on every device. From product planning to App Store and Play Store releases, you get ongoing updates and stable, maintainable code.",
    features: [
      "Cross-platform iOS & Android apps",
      "React Native & Expo builds",
      "Push notifications & offline sync",
      "App store submission & updates",
      "Analytics & crash monitoring",
    ],
    icon: "smartphone",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    short:
      "Clear user journeys and practical interfaces that make products intuitive from day one.",
    description:
      "Good design removes friction. We research your users, map clear journeys, and prototype clickable interfaces that your team can test before a single line of code is written.",
    features: [
      "User research & journey mapping",
      "Wireframes & clickable prototypes",
      "Design systems & component libraries",
      "Mobile-first responsive layouts",
      "Accessibility & usability audits",
    ],
    icon: "pen",
  },
  {
    slug: "ai-and-automation",
    title: "AI & Automation",
    short:
      "RAG chatbots, AI agents, and workflow automation that cut costs and unlock new capabilities.",
    description:
      "We ship practical AI that earns its keep — grounding LLMs in your own documents, building workflow automations, and integrating intelligence into products in ways that produce measurable results.",
    features: [
      "RAG chatbots & document assistants",
      "Custom AI agents & copilots",
      "Workflow & process automation",
      "LLM API integration & fine-tuning",
      "AI-powered product features",
    ],
    icon: "sparkles",
  },
  {
    slug: "saas-and-product-engineering",
    title: "SaaS & Product Engineering",
    short:
      "Scalable SaaS platforms with secure architecture, subscriptions, and reliable performance.",
    description:
      "MVPs in weeks, products that scale through months of growth. We handle real authentication, real billing, and real operations — Stripe subscriptions, role-based access, and dashboards included.",
    features: [
      "MVP development in weeks",
      "Subscription & billing (Stripe)",
      "Authentication & multi-tenancy",
      "Real-time data & analytics",
      "API-first, cloud-ready architecture",
    ],
    icon: "layers",
  },
  {
    slug: "digital-marketing-and-seo",
    title: "Digital Marketing & SEO",
    short:
      "Data-led campaigns focused on visibility, quality traffic, and measurable growth.",
    description:
      "Visibility compounds. We pair technically excellent build quality with on-page SEO, structured data, and measurement so your site grows in rankings and converts visitors into customers.",
    features: [
      "Technical SEO & structured data",
      "On-page & content optimization",
      "Performance & Core Web Vitals",
      "Analytics & conversion tracking",
      "Lead generation funnels",
    ],
    icon: "chart",
  },
];

export type ProcessStep = {
  no: string;
  title: string;
  description: string;
  icon: string;
};

export const processSteps: ProcessStep[] = [
  {
    no: "01",
    title: "Discovery & Consultation",
    description:
      "Project goals, users, and business needs are mapped before any execution begins.",
    icon: "search",
  },
  {
    no: "02",
    title: "Strategy & Planning",
    description:
      "A practical roadmap is prepared with timelines, priorities, and technical direction.",
    icon: "map",
  },
  {
    no: "03",
    title: "Design & Prototyping",
    description:
      "First interfaces and clickable prototypes are finalized before development begins.",
    icon: "pen",
  },
  {
    no: "04",
    title: "Development",
    description:
      "Development focuses on clean code, secure systems, and scalable architecture.",
    icon: "code",
  },
  {
    no: "05",
    title: "Testing & Quality Assurance",
    description:
      "Quality checks cover devices and browsers, with bug fixes and performance tuning.",
    icon: "shield",
  },
  {
    no: "06",
    title: "Deployment & Launch",
    description:
      "Deployment is managed with production checks for a stable, low-risk launch.",
    icon: "rocket",
  },
  {
    no: "07",
    title: "Ongoing Support & Growth",
    description:
      "Post-launch support includes updates, enhancements, and growth-focused maintenance.",
    icon: "heart",
  },
];

export type Why = {
  title: string;
  description: string;
  icon: string;
};

export const whyChoose: Why[] = [
  {
    title: "Business-first execution",
    description:
      "Every decision is aligned to your business goals, timelines, and measurable outcomes — not just what looks impressive.",
    icon: "target",
  },
  {
    title: "Dedicated delivery team",
    description:
      "You work with one accountable team across planning, design, development, and support from kickoff to launch.",
    icon: "users",
  },
  {
    title: "Transparent communication",
    description:
      "Weekly updates, clear milestones, and direct collaboration keep every project on track and you in the loop.",
    icon: "message",
  },
  {
    title: "Modern, AI-ready stack",
    description:
      "We build on next-generation frameworks and bake AI, analytics, and automation in from the first sprint.",
    icon: "zap",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Digital Dream Web rebuilt our site and it honestly feels like a different company now. Load times dropped by half and Google lists us well above where we were before.",
    name: "Product Manager",
    role: "E-commerce",
    company: "NOVA Storefront",
  },
  {
    quote:
      "They took a vague idea and shipped a working MVP in weeks — real billing, real dashboards. The weekly updates meant zero surprises. Easiest vendor decision we made.",
    name: "Founder",
    role: "AI Agency",
    company: "xTRAI",
  },
  {
    quote:
      "The team thinks like product owners, not contractors. They flagged technical risks early and delivered an app our users genuinely enjoy using.",
    name: "Operations Lead",
    role: "Consumer App",
    company: "HIKI",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

export const team: TeamMember[] = [
  {
    name: "Qazi Farhan Ahmad",
    role: "Founder & Lead Developer",
    bio: "AI web developer and MERN-stack expert shipping production-ready products — e-commerce, AI platforms, and everything in between.",
    initials: "QF",
  },
  {
    name: "Design & Product",
    role: "UI/UX & Product Strategy",
    bio: "Research-driven designers who map clear user journeys and prototype interfaces before development starts.",
    initials: "DP",
  },
  {
    name: "Engineering Network",
    role: "Full-Stack & DevOps",
    bio: "A trusted network of senior engineers for testing, cloud infrastructure, and around-the-clock support.",
    initials: "EN",
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  stack: string;
  href: string;
  accent: string;
};

export const projects: Project[] = [
  {
    title: "NOVA E-Commerce",
    category: "Full-Stack Platform",
    description:
      "Production e-commerce with OTP authentication, Stripe payments, real-time stock, and a full admin panel.",
    stack: "React · Node.js · MongoDB · Stripe",
    href: "https://ecommerce-store-one-ochre.vercel.app/",
    accent: "#2684FC",
  },
  {
    title: "xTRAI AI Agency",
    category: "AI Platform",
    description:
      "AI automation platform landing experience with cinematic Framer Motion animations and a conversion-first layout.",
    stack: "React · TypeScript · Framer Motion",
    href: "https://agencyxai.netlify.app",
    accent: "#3B4D66",
  },
  {
    title: "OLIPOP Creative",
    category: "AI Commerce",
    description:
      "AI-enhanced product page with Genkit AI and Firebase — personalized copy and smarter shopping moments.",
    stack: "Next.js · Genkit AI · Firebase",
    href: "https://oliipop.netlify.app/",
    accent: "#2684FC",
  },
  {
    title: "HIKI Hiking App",
    category: "Consumer App",
    description:
      "Full-stack hiking guide with secure authentication, interactive maps, and an admin dashboard.",
    stack: "MERN · Cloudinary",
    href: "https://hiking-app-puce.vercel.app/",
    accent: "#3B4D66",
  },
];

export const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "Stripe",
  "Firebase",
  "AWS",
  "Vercel",
  "OpenAI",
  "Python",
  "Docker",
  "GraphQL",
  "Redis",
  "Figma",
];

export const faqs = [
  {
    question: "How much does a website cost?",
    answer:
      "Every project is scoped individually, so we can give fixed prices with no surprises. Contact us with your goals and we'll respond with a clear estimate, timeline, and a breakdown of what's included.",
  },
  {
    question: "How long does it take to build a website or app?",
    answer:
      "A marketing website typically ships in 2–4 weeks, while MVPs and mobile apps usually take 6–12 weeks depending on complexity. You'll receive a milestone plan before we start.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. Every project includes post-launch support — updates, bug fixes, performance tuning, and growth-focused enhancements. Ongoing maintenance plans are available.",
  },
  {
    question: "Will my website rank on Google?",
    answer:
      "We build every site SEO-first: semantic HTML, fast Core Web Vitals, structured data, sitemaps, and metadata — plus optional digital marketing and content support to grow rankings over time.",
  },
  {
    question: "Can you work with my existing team or systems?",
    answer:
      "Absolutely. We integrate with existing stacks, follow your processes, and can slot into your team for dedicated sprints or long-term product work.",
  },
];