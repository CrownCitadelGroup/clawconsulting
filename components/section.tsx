import type { ReactNode } from "react";

import { Reveal } from "@/components/reveal";

type SectionTone = "dark" | "mid" | "light";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  containerClassName?: string;
  contentClassName?: string;
  tone?: SectionTone;
  centered?: boolean;
  children: ReactNode;
};

const toneClassMap: Record<SectionTone, string> = {
  dark: "section-dark text-mist",
  mid: "section-mid text-mist",
  light: "section-light text-ink"
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  className = "",
  containerClassName = "",
  contentClassName = "",
  tone = "mid",
  centered = false,
  children
}: SectionProps) {
  const headingColor = tone === "light" ? "text-ink" : "text-white";
  const descriptionColor = tone === "light" ? "text-slate" : "text-mist/80";

  return (
    <section id={id} className={`section-block ${toneClassMap[tone]} ${className}`.trim()}>
      <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${containerClassName}`.trim()}>
        {title || description || eyebrow ? (
          <Reveal>
            <div className={`mb-10 max-w-3xl space-y-4 ${centered ? "mx-auto text-center" : ""}`.trim()}>
              {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
              {title ? <h2 className={`text-3xl leading-tight sm:text-4xl ${headingColor}`}>{title}</h2> : null}
              {description ? <p className={`text-base leading-relaxed sm:text-lg ${descriptionColor}`}>{description}</p> : null}
            </div>
          </Reveal>
        ) : null}
        <div className={contentClassName}>{children}</div>
      </div>
    </section>
  );
}
