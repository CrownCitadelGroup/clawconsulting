import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
  description:
    "OpenClaw installation Fuquay-Varina, remote support, OpenClaw VPS installation, and AI automation for small business teams in NC."
};

const services = [
  {
    name: "Local Installation",
    price: siteConfig.localInstallPrice,
    included: [
      "Up to 1 hour on-site install with validation",
      "1 hour of post-install support included",
      "Chat app setup, guardrail configuration, and hands-on walkthrough"
    ]
  },
  {
    name: "Remote Setup",
    price: `Starting at ${siteConfig.remoteSetupStartingPrice}`,
    included: [
      "Live remote setup session and configuration support",
      "Environment checks plus troubleshooting",
      "Follow-up notes with next-step recommendations"
    ]
  },
  {
    name: "VPS / Server Installation",
    price: "Custom quote",
    included: [
      "Deploy OpenClaw on a VPS or existing server",
      "Security hardening for users, firewall, and access control",
      "Operational handoff notes for updates, backups, and maintenance"
    ]
  },
  {
    name: "Business Deployment",
    price: "Custom quote",
    included: [
      "Team rollout planning and phased implementation",
      "Standardized configuration and role-based access model",
      "Documentation and onboarding guidance for long-term maintainability"
    ]
  },
  {
    name: "AI Workflow Integration",
    price: "Custom quote",
    included: [
      "Identify high-impact workflows and define practical scope",
      "Build templates, skills, and internal usage standards",
      "Integrations and automations aligned with your existing tools"
    ]
  },
  {
    name: "Training Session",
    price: "Optional add-on",
    included: [
      "Live walkthrough for new users",
      "Role-specific usage examples for daily work",
      "Q&A session focused on practical operating guidance"
    ]
  },
  {
    name: "Ongoing Support",
    price: `Optional add-on (${siteConfig.addOnSupportRate})`,
    included: [
      "Issue triage and troubleshooting",
      "Maintenance and iterative workflow improvements",
      "Priority response options for recurring clients"
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      <section className="section-block hero-surface border-b border-mist/10 pb-12 pt-16 sm:pt-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="hero-stagger max-w-3xl space-y-5">
            <p className="section-eyebrow border-amber/50 bg-amber/10 text-amber">Services</p>
            <h1 className="text-4xl leading-tight text-white sm:text-5xl">OpenClaw support options for local and remote clients</h1>
            <p className="text-base leading-relaxed text-mist/80 sm:text-lg">
              Choose a one-time install or an ongoing support partnership depending on your environment and team needs.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/#contact-form" className="btn-primary">
                Request an Install
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/business#quote-form" className="btn-ghost-dark">
                Get Business Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section tone="light" eyebrow="Packages" title="Services built around real deployment" description="Clear scope, clear outcomes, and support that matches your setup.">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.name} delay={index * 70}>
              <article className="card-light border border-ink/12 p-6">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-xl font-semibold text-ink">{service.name}</h2>
                  <p className="rounded-full border border-ink/16 bg-ink/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-slate">
                    {service.price}
                  </p>
                </div>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate">
                  {service.included.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
