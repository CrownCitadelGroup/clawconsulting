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
    <Section tone="light" eyebrow="Legal" title="Terms and Privacy" description="Template legal language. Update this page with your final policies.">
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal>
          <article className="card-light space-y-4 border border-ink/12 p-6">
            <h2 className="text-xl font-semibold text-ink">Terms of Service</h2>
            <p className="text-sm leading-relaxed text-slate">
              Services are provided according to the agreed scope, timeline, and pricing communicated before work begins. The base local install is
              <strong className="text-ink"> {siteConfig.localInstallPrice}</strong> and includes up to 1 hour on-site plus 1 hour of follow-up support.
            </p>
            <p className="text-sm leading-relaxed text-slate">
              Additional support beyond the included hour is optional and billed at <strong className="text-ink">{siteConfig.addOnSupportRate}</strong>
              unless otherwise agreed in writing.
            </p>
            <p className="text-sm leading-relaxed text-slate">
              {siteConfig.legalDisclaimers.affiliation} {siteConfig.legalDisclaimers.credentials}
            </p>
            <p className="text-sm leading-relaxed text-slate">
              Refunds and cancellations are handled case-by-case based on notice and completed work. Completed labor and consumed support time may be
              non-refundable.
            </p>
          </article>
        </Reveal>

        <Reveal delay={90}>
          <article className="card-light space-y-4 border border-ink/12 p-6">
            <h2 className="text-xl font-semibold text-ink">Privacy Policy</h2>
            <p className="text-sm leading-relaxed text-slate">
              {siteConfig.name} collects only information needed to communicate, schedule, invoice, and deliver services (for example: name, phone,
              email, city, and project notes).
            </p>
            <p className="text-sm leading-relaxed text-slate">
              {siteConfig.legalDisclaimers.dataHandling} We do not sell lead data. We keep retained information limited to operational needs.
            </p>
            <p className="text-sm leading-relaxed text-slate">
              Clients are responsible for account credentials and licensing tied to their own systems. Sensitive access should be shared only through
              secure channels.
            </p>
            <p className="text-sm leading-relaxed text-slate">
              Contact us at{" "}
              <a className="font-semibold text-ink underline decoration-brand/60 underline-offset-2" href={`mailto:${siteConfig.email}`}>
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
