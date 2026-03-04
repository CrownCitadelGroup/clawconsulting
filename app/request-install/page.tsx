import type { Metadata } from "next";
import { Sparkles } from "lucide-react";

import { LeadForm } from "@/components/lead-form";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Request Install",
  description: "Request an OpenClaw installation appointment and share your setup details."
};

export default function RequestInstallPage() {
  return (
    <Section
      tone="dark"
      eyebrow="Request an Install"
      title="Tell us what you need"
      description="No commitment. Tell us what you are thinking and we will follow up with scope and next steps."
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <article className="card-dark border border-mist/14 p-6 sm:p-8">
            <p className="section-eyebrow border-amber/40 bg-amber/10 text-amber">No commitment</p>
            <h3 className="mt-5 text-3xl font-semibold leading-tight text-white">Start the conversation</h3>
            <p className="mt-4 text-sm leading-relaxed text-mist/76">
              We will review your goals, your current setup, and your preferred timeline before recommending next steps. You get a practical scope,
              not a generic package.
            </p>
            <div className="mt-6 space-y-3 text-sm text-mist/76">
              <p className="flex items-start gap-2">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                Response with scope and options based on your environment
              </p>
              <p className="flex items-start gap-2">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                Local install availability across Fuquay-Varina and the Triangle
              </p>
              <p className="flex items-start gap-2">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                Remote setup available when on-site is not required
              </p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={80}>
          <LeadForm />
        </Reveal>
      </div>
    </Section>
  );
}
