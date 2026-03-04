"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Menu, X } from "lucide-react";

import { navigation, siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const emailLink = `mailto:${siteConfig.email}`;

  return (
    <header className="sticky top-0 z-50 border-b border-mist/15 bg-coal-950/90 backdrop-blur-lg">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-wide text-mist sm:text-base" onClick={() => setIsOpen(false)}>
          <Image src="/openclaw.png" alt="OpenClaw logo" width={28} height={28} className="h-7 w-7" priority />
          <span>{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-mist/76 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="font-medium hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href={emailLink} className="btn-ghost-dark !gap-2.5 !px-3 !py-2 !text-xs">
            <Mail className="h-4 w-4" aria-hidden />
            <span>{siteConfig.email}</span>
          </a>
          <Link href="/request-install" className="btn-primary !px-3 !py-2 !text-xs">
            Request Install
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-xl border border-mist/20 bg-white/5 p-2 text-mist md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      <div
        className={`border-t border-mist/10 bg-coal-900/96 px-4 py-4 sm:px-6 md:hidden ${isOpen ? "block" : "hidden"}`}
        role="dialog"
        aria-modal="false"
      >
        <nav className="flex flex-col gap-2 text-sm text-mist/84">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-2 font-medium hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-4 flex flex-col gap-2">
          <a href={emailLink} className="btn-ghost-dark !w-full !gap-2.5" onClick={() => setIsOpen(false)}>
            <Mail className="h-4 w-4" aria-hidden />
            <span>{siteConfig.email}</span>
          </a>
          <Link href="/request-install" className="btn-primary !w-full" onClick={() => setIsOpen(false)}>
            Request Install
          </Link>
        </div>
      </div>
    </header>
  );
}
