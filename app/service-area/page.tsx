import type { Metadata } from "next";
import { MapPin } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Service Area",
  description: "Local OpenClaw installation service areas across the Raleigh Triangle, plus remote setup support."
};

export default function ServiceAreaPage() {
  return (
    <Section
      tone="mid"
      eyebrow="Service Area"
      title="Fuquay-Varina and surrounding areas"
      description="On-site service in the Triangle, plus remote support when needed."
    >
      <Reveal>
        <div className="card-mid border border-mist/14 p-6">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
    </Section>
  );
}
