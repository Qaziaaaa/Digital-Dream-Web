import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects your information.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lead={`Last updated: August 2026. This policy explains what information ${site.name} collects when you use our website and how we handle it.`}
      />

      <section className="border-t border-line bg-bg-tinted py-16 md:py-24">
        <div className="container-x mx-auto max-w-3xl space-y-10">
          {sections.map((s) => (
            <div key={s.title} className="card p-8">
              <h2 className="text-xl font-bold tracking-tight text-ink">{s.title}</h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-soft">{s.body}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

const sections = [
  {
    title: "Information we collect",
    body: (
      <>
        <p>
          When you use the contact form or reach out by email or WhatsApp, we collect the information
          you choose to share: your name, email address, company, project details, and any message you
          send us.
        </p>
        <p>
          We may collect basic usage data (such as pages visited and device type) through cookies and
          analytics tools to understand how visitors use our site and to improve it.
        </p>
      </>
    ),
  },
  {
    title: "How we use your information",
    body: (
      <>
        <p>We use the information you provide to:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Respond to your inquiries and prepare project proposals.</li>
          <li>Deliver the services you request.</li>
          <li>Improve our website, services, and client experience.</li>
          <li>Send occasional updates or news only if you have asked to receive them.</li>
        </ul>
        <p>We do not sell, rent, or trade your personal information to third parties.</p>
      </>
    ),
  },
  {
    title: "Cookies & analytics",
    body: (
      <p>
        Our website uses cookies for essential functionality and may use privacy-respecting analytics
        to measure traffic. You can disable cookies in your browser settings at any time; the site
        remains fully usable without them.
      </p>
    ),
  },
  {
    title: "Data security",
    body: (
      <p>
        We treat project information as confidential. Access is limited to the team members who need
        it to complete your work, and we follow standard security practices including secure
        connections, encrypted storage where applicable, and safe handling of credentials.
      </p>
    ),
  },
  {
    title: "Data retention & your rights",
    body: (
      <p>
        We keep inquiry data only as long as needed to serve you. You may request access to, correction
        of, or deletion of your personal information at any time by contacting us at {site.email}.
      </p>
    ),
  },
  {
    title: "Contact us",
    body: (
      <p>
        Questions about this policy? Reach us at{" "}
        <a href={`mailto:${site.email}`} className="font-semibold text-brand-500 underline underline-offset-4">
          {site.email}
        </a>{" "}
        or via WhatsApp at {site.phone}.
      </p>
    ),
  },
];