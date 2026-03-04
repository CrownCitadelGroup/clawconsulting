"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
  tone?: "light" | "dark";
};

export function FaqAccordion({ items, tone = "light" }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isDark = tone === "dark";

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article
            key={item.question}
            className={
              isDark
                ? "card-mid rounded-xl border border-mist/14 bg-coal-900/65 px-4 py-3 sm:px-5"
                : "card-light rounded-xl border border-ink/12 bg-white/80 px-4 py-3 sm:px-5"
            }
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex((prev) => (prev === index ? null : index))}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className={`text-sm font-semibold sm:text-base ${isDark ? "text-white" : "text-ink"}`}>{item.question}</span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 transition ${isOpen ? "rotate-180" : "rotate-0"} ${isDark ? "text-mist/70" : "text-slate"}`}
                aria-hidden
              />
            </button>
            <div className={`faq-panel ${isOpen ? "open" : "closed"}`}>
              <div className="faq-panel-inner">
                <p className={`text-sm leading-relaxed ${isDark ? "text-mist/76" : "text-slate"}`}>{item.answer}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
