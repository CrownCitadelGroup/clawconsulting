import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  ClipboardCheck,
  FileCode2,
  Globe,
  Handshake,
  MessagesSquare,
  Network,
  Puzzle,
  ScanSearch,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Terminal,
  UserRound,
  UsersRound,
  Wrench
} from "lucide-react";

import { FaqAccordion } from "@/components/faq-accordion";
import { LeadForm } from "@/components/lead-form";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site-config";

const trustPoints = [
  "Runs on hardware you control (MacBook, PC, or VPS)",
  "Works from chat apps you already use",
  "Keeps context with persistent memory",
  "Can take real actions with guardrails you set"
];

const chatConnectors = ["WhatsApp", "Telegram", "Slack", "Discord", "Signal", "iMessage"];

const openClawCapabilities = [
  {
    title: "Works from your chat apps",
    description:
      "Message it from WhatsApp or Slack the same way you would text a coworker. Ask it to check something, draft a reply, or pull a document without switching apps.",
    icon: MessagesSquare
  },
  {
    title: "Remembers everything you tell it",
    description:
      "Persistent memory means it knows your preferences, your projects, and your recurring asks. You do not start from zero every conversation.",
    icon: Brain
  },
  {
    title: "Browses the web for you",
    description:
      "It can visit sites, pull information, and work through form-heavy tasks. Useful for price checks, vendor research, and routine online admin work.",
    icon: Globe
  },
  {
    title: "Handles files and scripts",
    description: "Read documents, write files, and run shell commands with configurable guardrails. You decide how much system access is allowed.",
    icon: Terminal
  },
  {
    title: "Extensible with skills and plugins",
    description:
      "Use community skills or custom tools to create repeatable workflows. If your team repeats the same process every week, it can become one command.",
    icon: Puzzle
  },
  {
    title: "Runs on your hardware",
    description: "Install on a MacBook, PC, or VPS. Pick your model and provider. No dependency on a single hosted platform.",
    icon: ServerCog
  }
];

const differences = [
  {
    limitation: "ChatGPT forgets you. Every new chat starts from zero.",
    openClaw: "OpenClaw keeps persistent memory so it learns your projects, style, and recurring tasks over time."
  },
  {
    limitation: "ChatGPT lives in a browser tab that you have to visit.",
    openClaw: "OpenClaw meets you where you already message: WhatsApp, Telegram, Slack, Discord, Signal, and more."
  },
  {
    limitation: "ChatGPT mostly gives answers, not completed work.",
    openClaw:
      "OpenClaw can browse sites, collect information, read and write files, and run scripts inside the permissions you approve."
  },
  {
    limitation: "ChatGPT runs on someone else's stack with fixed boundaries.",
    openClaw: "OpenClaw runs on yours. You choose the hardware, provider, privacy settings, and guardrails."
  }
];

const installProcess = [
  {
    title: "Before the appointment",
    description: "We confirm your goals, your device, and your setup. You know the scope before we arrive.",
    icon: ClipboardCheck
  },
  {
    title: "On-site installation (up to 1 hour)",
    description:
      "We install OpenClaw, connect your chat apps, configure security settings (least privilege and sandboxing where appropriate), and verify everything works.",
    icon: Wrench
  },
  {
    title: "Hands-on walkthrough",
    description:
      "We do not install and leave. We walk through your first commands, common use cases, and where the guardrails are.",
    icon: Handshake
  },
  {
    title: "Post-install support (1 hour included)",
    description: "Use your included support hour any time after install for troubleshooting, usage questions, or workflow guidance.",
    icon: ShieldCheck
  }
];

const businessIntegration = [
  {
    title: "Workflow automation",
    description:
      "We identify repetitive, high-friction tasks and design AI automation for small business teams, from inbox triage and scheduling to document generation and data extraction.",
    icon: Network
  },
  {
    title: "Team deployment",
    description:
      "Set up OpenClaw for multiple team members with role-based access, shared skills, and consistent configuration, plus onboarding notes for future hires.",
    icon: UsersRound
  },
  {
    title: "Custom skills and integrations",
    description:
      "If your team runs the same sequence of steps every week, we can turn it into a single command with custom OpenClaw skills and integrations.",
    icon: FileCode2
  },
  {
    title: "AI strategy consultation",
    description:
      "Not sure where AI fits yet? We audit your current workflows, identify highest-impact opportunities, and recommend what actually works now.",
    icon: ScanSearch
  },
  {
    title: "Ongoing support plans",
    description:
      "Monthly support options are available for teams that want regular updates, troubleshooting, and workflow refinement as operations evolve.",
    icon: ShieldCheck
  }
];

const faqs = [
  {
    question: "How is this different from ChatGPT?",
    answer:
      "OpenClaw is self-hosted, can keep persistent memory, works from your chat apps, and can take real actions like browsing, file work, and scripts. You control the data and the guardrails."
  },
  {
    question: "Do I need to be technical?",
    answer: "No. We handle installation and configuration, then walk you through day-to-day usage so you know how to use it confidently."
  },
  {
    question: "What kind of AI model does it use?",
    answer:
      "OpenClaw supports multiple providers and models. During setup, we help you choose the option that matches your budget, privacy needs, and task types."
  },
  {
    question: "Can you help my business figure out where to use AI?",
    answer:
      "Yes. We offer AI strategy consultations and workflow audits for businesses, then recommend a practical rollout path based on what will save time first."
  },
  {
    question: "What is included in the $250 local installation?",
    answer:
      "The $250 service includes up to 1 hour on-site installation plus 1 hour of free post-install technical support after your appointment."
  },
  {
    question: "What is not included?",
    answer:
      "Major hardware changes, advanced custom development, and support beyond the included hour are not included. Extra support is optional and billed at the posted add-on rate."
  },
  {
    question: "What areas do you serve locally?",
    answer:
      "We're based in Fuquay-Varina, NC. Primary service areas are listed below. If you are nearby, contact us and we will confirm whether on-site service is available."
  },
  {
    question: "Do you offer remote support?",
    answer: "Yes. Remote setup and troubleshooting are available when on-site service is not required."
  },
  {
    question: "Can I use OpenClaw from WhatsApp, Telegram, or Slack?",
    answer:
      "Yes. OpenClaw can be connected to popular chat apps so you can interact with it in DMs or group chats. We will confirm what platforms you want to use and set it up with the right permissions."
  },
  {
    question: "Can you install OpenClaw on a MacBook or any PC?",
    answer:
      "Yes. OpenClaw can be installed on a MacBook, Windows PC, or Linux machine, and we can also deploy it to a VPS. For security, using your main computer is not recommended. Bring a dedicated laptop or spare PC when possible so it runs in a cleaner, separated environment."
  },
  {
    question: "Do you offer VPS installation?",
    answer:
      "Yes. We can install and configure OpenClaw on a VPS for remote access or multi-user needs, then lock down access, document the setup, and explain ongoing maintenance."
  },
  {
    question: "Can you integrate AI into my business?",
    answer:
      "Yes. We offer AI strategy consultations and workflow audits, then help with deployment, custom skills, and team rollout. See the AI Integration section above."
  },
  {
    question: "How do you handle privacy and security?",
    answer:
      "We collect only the information needed to schedule and deliver service. We apply least-privilege configuration, avoid unnecessary data handling, and can recommend safer install options (dedicated device, separate user account, or VPS) depending on your needs."
  },
  {
    question: "What is your refund policy?",
    answer:
      "If you cancel with reasonable notice, we can reschedule or discuss refunds case-by-case. Completed on-site labor and consumed time are non-refundable."
  },
  {
    question: "How soon can I schedule?",
    answer: "Most installs are scheduled within a few business days, depending on location and calendar availability."
  },
  {
    question: "Can businesses get invoicing and documentation?",
    answer: "Yes. Business engagements can include invoices, scoped deliverables, and handoff documentation."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="section-block hero-surface border-b border-mist/10 pt-16 sm:pt-20">
        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div className="hero-stagger space-y-6 pb-2">
            <p className="section-eyebrow border-amber/55 bg-amber/10 text-amber">OpenClaw Installation Fuquay-Varina</p>
            <h1 className="max-w-3xl text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Your AI should not live in someone else&apos;s browser tab.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-mist/84 sm:text-lg">
              OpenClaw is a private, self-hosted AI system installed on your own hardware or VPS, connected to chat apps like WhatsApp, Telegram,
              and Slack, with persistent memory and real automation.
            </p>
            <p className="max-w-2xl text-sm leading-relaxed text-mist/64">
              If you have searched for &quot;AI assistant setup near me&quot; or private AI setup North Carolina, this is the local service designed for
              that exact use case.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/#contact-form" className="btn-primary">
                Request an Install
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/business#quote-form" className="btn-ghost-dark">
                Get a Business Quote
              </Link>
              <a href="#capabilities" className="btn-ghost-dark">
                See What It Can Do
              </a>
            </div>
            <ul className="grid gap-2 text-sm text-mist/76 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <Reveal className="self-end">
            <div className="card-mid border border-mist/18 p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mist/62">Desktop and Mobile Chat</p>
                <span className="rounded-full border border-brand/45 bg-brand/12 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-brand">
                  Live Assistant
                </span>
              </div>

              <div className="mt-4 overflow-hidden rounded-xl border border-mist/12 bg-coal-950/70 p-2">
                <Image
                  src="/discordchat.png"
                  alt="OpenClaw assistant chat interface on desktop and mobile"
                  width={1224}
                  height={768}
                  className="h-auto w-full rounded-lg border border-mist/10"
                  priority
                />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {chatConnectors.map((connector) => (
                  <div
                    key={connector}
                    className="flex items-center justify-center gap-1.5 rounded-lg border border-mist/18 bg-white/5 px-2.5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-mist/76"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand/80" />
                    {connector}
                  </div>
                ))}
              </div>

            </div>
          </Reveal>
        </div>
      </section>

      <Section
        id="why-different"
        tone="mid"
        eyebrow="Why This Is Different"
        title="Not another chatbot tab"
        description="Most people already know what consumer AI chatbots feel like. OpenClaw fixes the exact limits people run into first."
      >
        <div className="space-y-4">
          {differences.map((difference, index) => (
            <Reveal key={difference.limitation} delay={index * 80}>
              <article className="overflow-hidden rounded-2xl border border-mist/15 md:grid md:grid-cols-2">
                <div className="bg-coal-900/75 p-5 sm:p-6">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-mist/44">Typical limitation</p>
                  <p className="mt-2 text-base leading-relaxed text-mist/72">{difference.limitation}</p>
                </div>
                <div className="bg-gradient-to-br from-brand/20 via-brand/10 to-amber/10 p-5 sm:p-6">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-amber">OpenClaw answer</p>
                  <p className="mt-2 text-base leading-relaxed text-white">{difference.openClaw}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={220}>
          <p className="mt-6 rounded-2xl border border-amber/35 bg-gradient-to-r from-amber/15 via-amber/10 to-transparent p-6 text-center text-2xl font-semibold leading-snug text-white sm:text-3xl">
            OpenClaw is not a chatbot. It is an AI rig, and you own the whole thing.
          </p>
        </Reveal>
      </Section>

      <Section
        id="capabilities"
        tone="dark"
        eyebrow="Capabilities"
        title="What OpenClaw actually does"
        description="Practical AI assistant setup near me should feel useful on day one. These are real tasks people hand off immediately."
      >
        <div className="grid gap-5 md:grid-cols-2 md:[grid-auto-rows:1fr]">
          {openClawCapabilities.map((capability, index) => (
            <Reveal key={capability.title} delay={index * 70} className="h-full">
              <article className="card-mid card-hover flex h-full min-h-[15.5rem] flex-col border border-mist/14 p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand/35 bg-brand/15 text-brand">
                  <capability.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{capability.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist/76">{capability.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        tone="mid"
        eyebrow="What You Get"
        title="What a local install includes"
        description="Clear scope, hands-on setup, and support after install day."
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            {installProcess.map((step, index) => (
              <Reveal key={step.title} delay={index * 85}>
                <article className="card-mid border border-mist/14 p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-mist/20 bg-white/5 text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <step.icon className="h-4 w-4 text-brand" aria-hidden />
                        <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-mist/76">{step.description}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <article className="card-dark border border-mist/15 p-6 sm:p-8">
              <p className="section-eyebrow border-mist/22 bg-white/5 text-mist/82">Pricing</p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-mist/66">Standard local install</p>
              <p className="mt-1 text-5xl font-semibold text-white">{siteConfig.localInstallPrice}</p>
              <p className="mt-4 text-sm leading-relaxed text-mist/76">Includes up to 1 hour on-site installation plus 1 hour of post-install support.</p>
              <ul className="mt-5 space-y-3 text-sm text-mist/78">
                {siteConfig.localInstallIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-xl border border-mist/18 bg-white/5 px-4 py-3 text-sm text-mist/74">
                Additional support is available at an hourly rate. Contact us for current pricing.
              </p>
            </article>
          </Reveal>
        </div>
      </Section>

      <Section
        tone="dark"
        eyebrow="AI Integration for Business"
        title="Beyond the install: AI that works inside your business"
        description="For owners and operators who know AI matters but want practical deployment, not hype."
      >
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <article className="card-dark border border-mist/14 p-6 sm:sticky sm:top-24">
              <p className="text-sm leading-relaxed text-mist/78">
                We provide OpenClaw local support Raleigh Triangle businesses can rely on, including AI business integration Wake County engagements
                and OpenClaw VPS installation for distributed teams.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-mist/78">
                Most engagements start with one team, one process, and clear success criteria before expanding.
              </p>
              <Link href="/business#quote-form" className="btn-primary mt-6">
                Get a Business Quote
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </article>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {businessIntegration.map((service, index) => (
              <Reveal key={service.title} delay={index * 75}>
                <article className="card-mid card-hover border border-mist/14 p-5">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-amber/35 bg-amber/12 text-amber">
                    <service.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist/74">{service.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="mid" eyebrow="Who This Is For" title="Built for people who want more than a chat window" centered>
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <article className="card-mid border border-mist/14 p-6 sm:p-7">
              <div className="flex items-center gap-2">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand/35 bg-brand/15 text-brand">
                  <UserRound className="h-4 w-4" aria-hidden />
                </div>
                <h3 className="text-xl font-semibold text-white">Individuals and home users</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-mist/76">
                You have tried ChatGPT and want something more capable, more private, and more integrated into daily life. You want an assistant
                that remembers you, works from your phone, and can do real tasks. We set it up on your MacBook or PC, walk through everything
                hands-on, and make sure you are comfortable before we leave.
              </p>
            </article>
          </Reveal>

          <Reveal delay={90}>
            <article className="card-mid border border-mist/14 p-6 sm:p-7">
              <div className="flex items-center gap-2">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-amber/35 bg-amber/12 text-amber">
                  <UsersRound className="h-4 w-4" aria-hidden />
                </div>
                <h3 className="text-xl font-semibold text-white">Small businesses and teams</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-mist/76">
                You know AI can help operations, but there is no dedicated IT team to run the project. We install OpenClaw, configure it for your
                team, build workflows around your real processes, and document everything so it is maintainable. We support solo operators up through
                teams of 20+.
              </p>
            </article>
          </Reveal>
        </div>
      </Section>

      <Section tone="mid" eyebrow="FAQ" title="Common questions before booking" description="Straight answers so you know exactly what to expect.">
        <Reveal>
          <FaqAccordion items={faqs} tone="dark" />
        </Reveal>
      </Section>

      <Section
        id="contact-form"
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
    </>
  );
}
