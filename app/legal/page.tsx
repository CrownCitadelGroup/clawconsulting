import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Legal",
  description: "Terms and privacy policy template for Openclaw & AI Consulting."
};

export default function LegalPage() {
  return (
    <Section tone="mid" eyebrow="Legal" title="Terms and Privacy" description="Template legal language. Update this page with your final policies.">
      <div className="grid gap-5 lg:grid-cols-2 lg:[grid-auto-rows:1fr]">
        <Reveal className="h-full">
          <article className="card-mid flex h-full flex-col space-y-4 border border-mist/14 p-6">
            <h2 className="text-xl font-semibold text-white">Terms of Service</h2>
            <p className="text-sm leading-relaxed text-mist/76">
              Services are provided according to the agreed scope, timeline, and pricing communicated before work begins. The base local install is
              <strong className="text-white"> {siteConfig.localInstallPrice}</strong> and includes up to 1 hour on-site plus 1 hour of follow-up support.
            </p>
            <p className="text-sm leading-relaxed text-mist/76">
              Additional support beyond the included hour is optional and billed at{" "}
              <strong className="text-white">{siteConfig.addOnSupportRate}</strong>
              unless otherwise agreed in writing.
            </p>
            <p className="text-sm leading-relaxed text-mist/76">
              {siteConfig.legalDisclaimers.affiliation} {siteConfig.legalDisclaimers.credentials}
            </p>
            <p className="text-sm leading-relaxed text-mist/76">
              Refunds and cancellations are handled case-by-case based on notice and completed work. Completed labor and consumed support time may be
              non-refundable.
            </p>
            <p className="text-sm leading-relaxed text-mist/76">
              OpenClaw can run commands, access files, and automate actions based on configuration. Using dedicated hardware with no valuable personal
              or business data is strongly recommended. While we do our best to educate clients, set guardrails, and explain safer deployment
              practices, clients accept operational risk when using self-hosted AI tooling and we cannot be liable for software behavior, data loss,
              or other downstream risks tied to client environments.
            </p>
          </article>
        </Reveal>

        <Reveal delay={90} className="h-full">
          <article className="card-mid flex h-full flex-col space-y-4 border border-mist/14 p-6">
            <h2 className="text-xl font-semibold text-white">Privacy Policy</h2>
            <p className="text-sm leading-relaxed text-mist/76">
              {siteConfig.name} collects only information needed to communicate, schedule, invoice, and deliver services (for example: name, phone,
              email, city, and project notes).
            </p>
            <p className="text-sm leading-relaxed text-mist/76">
              {siteConfig.legalDisclaimers.dataHandling} We do not sell lead data. We keep retained information limited to operational needs.
            </p>
            <p className="text-sm leading-relaxed text-mist/76">
              Clients are responsible for account credentials and licensing tied to their own systems. Sensitive access should be shared only through
              secure channels.
            </p>
            <p className="text-sm leading-relaxed text-mist/76">
              Contact us at{" "}
              <a className="font-semibold text-white underline decoration-brand/60 underline-offset-2" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>{" "}
              for privacy requests.
            </p>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
