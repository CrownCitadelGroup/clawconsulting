import type { Metadata } from "next";
import { ArrowRight, FileCode2, Network, ScanSearch, ServerCog, ShieldCheck, UsersRound } from "lucide-react";

import { BusinessQuoteForm } from "@/components/business-quote-form";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "AI for Business",
  description:
    "AI business integration Wake County and Raleigh Triangle. OpenClaw deployment, workflow automation, custom skills, and practical AI strategy for teams."
};

const offerings = [
  {
    title: "Workflow automation",
    icon: Network,
    description: "We map the repetitive work slowing your team down and build practical AI automation for small business operations."
  },
  {
    title: "Team deployment",
    icon: UsersRound,
    description: "Set up OpenClaw across team members with role-based access, shared skills, and standardized configuration."
  },
  {
    title: "Custom skills and integrations",
    icon: FileCode2,
    description: "Turn recurring multi-step work into reusable commands tailored to your internal processes and tools."
  },
  {
    title: "AI strategy consultation",
    icon: ScanSearch,
    description: "Not sure where to begin? We audit your current workflows and recommend a practical rollout plan based on impact."
  },
  {
    title: "Ongoing support plans",
    icon: ShieldCheck,
    description: "Monthly support is available for updates, troubleshooting, and continuous improvement as your team evolves."
  },
  {
    title: "OpenClaw VPS installation",
    icon: ServerCog,
    description: "Deploy on managed cloud infrastructure when you need centralized access, better separation, or multi-user operations."
  }
];

const rolloutSteps = [
  {
    title: "Workflow audit",
    description: "We review your current operations and identify high-friction tasks where AI can remove repeated manual effort."
  },
  {
    title: "Pilot implementation",
    description: "We implement one to two priority workflows first, validate outcomes with your team, and document what is working."
  },
  {
    title: "Team rollout",
    description:
      "Once the pilot is stable, we expand to additional users and processes with clear guardrails, onboarding notes, and support."
  }
];

export default function BusinessPage() {
  return (
    <>
      <section className="section-block hero-surface border-b border-mist/10 pb-12 pt-16 sm:pt-20">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="hero-stagger space-y-5">
            <p className="section-eyebrow border-amber/50 bg-amber/10 text-amber">AI Business Integration Wake County</p>
            <h1 className="text-4xl leading-tight text-white sm:text-5xl">Beyond the install: AI that works inside your business</h1>
            <p className="text-base leading-relaxed text-mist/82 sm:text-lg">
              If you know AI is relevant but do not have time to test every tool, this is built for you. We focus on operations, implementation, and
              training that your team can actually maintain.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#quote-form" className="btn-primary">
                Get a Business Quote
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>

          <Reveal>
            <div className="card-mid border border-mist/14 p-6">
              <p className="section-eyebrow border-mist/24 bg-white/5 text-mist/76">How engagements start</p>
              <p className="mt-4 text-sm leading-relaxed text-mist/76">
                We do not sell generic AI packages. We review your current workflow, identify where time is being lost, then scope the smallest useful
                deployment first.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-mist/76">
                Most teams start with one team, one process, and clear success criteria before expanding.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Section
        tone="dark"
        eyebrow="What We Build"
        title="Business services focused on operations"
        description="OpenClaw local support Raleigh Triangle teams can use as a one-time project or an ongoing partnership."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {offerings.map((offering, index) => (
            <Reveal key={offering.title} delay={index * 70}>
              <article className="card-mid card-hover border border-mist/14 p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand/35 bg-brand/12 text-brand">
                  <offering.icon className="h-5 w-5" aria-hidden />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-white">{offering.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-mist/74">{offering.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        tone="mid"
        eyebrow="How It Starts"
        title="A practical rollout plan"
        description="Most teams get better results by starting narrow, validating value, and then scaling."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {rolloutSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 90}>
              <article className="card-mid border border-mist/14 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mist/62">Step {index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist/76">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        tone="dark"
        eyebrow="Request Quote"
        title="Tell us about your current workflow"
        description="No commitment. Share your current setup and we will follow up with scope, timeline, and next steps."
      >
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <Reveal>
            <article className="card-dark border border-mist/14 p-6 sm:p-8">
              <p className="text-sm leading-relaxed text-mist/74">
                We focus on practical deployment, guardrails your team can maintain, and measurable operational wins.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-mist/74">
                After the first scope call, you get a concrete proposal: phases, timeline, and what success looks like.
              </p>
            </article>
          </Reveal>

          <Reveal delay={90}>
            <BusinessQuoteForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
