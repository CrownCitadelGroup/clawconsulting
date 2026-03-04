import Image from "next/image";
import Link from "next/link";

import { navigation, siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-mist/12 bg-coal-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Image src="/openclaw.png" alt="OpenClaw logo" width={28} height={28} className="h-7 w-7" />
              <p className="text-base font-semibold text-white">{siteConfig.name}</p>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-mist/75">
              Private, self-hosted OpenClaw setup with practical training, chat app integration, and local support across the Raleigh Triangle.
            </p>
          </div>

          <div className="grid gap-2 text-sm text-mist/72">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="font-medium hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-mist/12 pt-5 text-xs text-mist/60 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) {new Date().getFullYear()} Crown Citadel Group LLC. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-mist">
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
