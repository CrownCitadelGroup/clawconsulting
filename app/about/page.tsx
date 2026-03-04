import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Openclaw & AI Consulting, a local service focused on private AI setup, clear guidance, and practical support."
};

export default function AboutPage() {
  return (
    <Section
      tone="dark"
      eyebrow="About"
      title="Local setup, plain-English guidance, no AI hype"
      description="The goal is simple: install it correctly, explain it clearly, and leave you with a setup you can actually use."
    >
      <Reveal>
        <article className="card-dark space-y-5 border border-mist/14 p-6 sm:p-8">
          <p className="text-sm leading-relaxed text-mist/78">
            Hi, I&apos;m <strong className="text-white">{siteConfig.ownerName}</strong>, based in <strong className="text-white">{siteConfig.location}</strong>. I
            started {siteConfig.name} to provide practical local installation help for people who want more than a chatbot tab and do not want to
            learn every technical step themselves.
          </p>
          <p className="text-sm leading-relaxed text-mist/78">
            Every appointment focuses on secure baseline configuration, plain-language walkthroughs, and minimal data handling. You should leave
            knowing what was installed, what it can do, and where the guardrails are.
          </p>
          <p className="text-sm leading-relaxed text-mist/78">
            If your setup is unique, we scope the work before we start so there are no surprises on install day.
          </p>
        </article>
      </Reveal>
    </Section>
  );
}
