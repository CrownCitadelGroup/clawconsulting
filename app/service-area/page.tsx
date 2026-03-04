import type { Metadata } from "next";
import { MapPin } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Service Area",
  description: "Local OpenClaw installation service areas across the Raleigh Triangle, plus remote setup support."
};

const mapMarkers = [
  { area: "Fuquay-Varina", position: "left-[46%] top-[56%]" },
  { area: "Raleigh", position: "left-[62%] top-[30%]" },
  { area: "Cary", position: "left-[53%] top-[38%]" },
  { area: "Holly Springs", position: "left-[43%] top-[42%]" },
  { area: "Apex", position: "left-[46%] top-[35%]" }
];

export default function ServiceAreaPage() {
  return (
    <Section
      tone="mid"
      eyebrow="Service Area"
      title="Fuquay-Varina and surrounding areas"
      description="On-site service in the Triangle, plus remote support when needed."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-mist/14 bg-coal-900/80 p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:22px_22px] opacity-25" />
            <div className="absolute inset-x-6 bottom-8 top-8 rounded-[30%] border border-mist/18" />
            {mapMarkers.map((marker) => (
              <div key={marker.area} className={`absolute ${marker.position}`}>
                <span className="absolute -left-1.5 -top-1.5 h-3 w-3 rounded-full bg-brand shadow-[0_0_0_4px_rgba(217,62,62,0.22)]" />
                <span className="ml-3 rounded-full border border-mist/16 bg-coal-900/92 px-2 py-0.5 text-[0.63rem] font-semibold uppercase tracking-[0.1em] text-mist/72">
                  {marker.area}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="card-mid border border-mist/14 p-6">
            <ul className="grid gap-3 sm:grid-cols-2">
              {siteConfig.serviceAreas.map((area) => (
                <li key={area} className="flex items-center gap-2 rounded-xl border border-mist/12 bg-white/5 px-3 py-2 text-sm text-mist/86">
                  <MapPin className="h-4 w-4 text-amber" aria-hidden />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-mist/72">
              We provide on-site service throughout Wake County and Harnett County, with remote installs available anywhere outside the local area.
              This includes self-hosted AI installation NC clients across the state.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
