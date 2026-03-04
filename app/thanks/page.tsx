import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thanks",
  description: "Thanks for contacting Openclaw & AI Consulting."
};

type ThanksPageProps = {
  searchParams?: {
    type?: string;
  };
};

export default function ThanksPage({ searchParams }: ThanksPageProps) {
  const isBusiness = searchParams?.type === "business";

  return (
    <section className="section-block section-dark">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <article className="card-dark border border-mist/15 p-8 text-center sm:p-10">
          <p className="section-eyebrow border-amber/45 bg-amber/10 text-amber">Submission received</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Thank you</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-mist/78 sm:text-base">
            {isBusiness
              ? "Your business quote request has been received. We will follow up with next steps and scope details."
              : "Your install request has been received. We will follow up to confirm schedule and requirements."}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
            <Link href="/services" className="btn-ghost-dark">
              View Services
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
