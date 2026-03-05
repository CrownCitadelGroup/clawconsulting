"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type BusinessFormState = {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  teamSize: string;
  currentSetup: string;
  timeline: string;
  notes: string;
};

const initialState: BusinessFormState = {
  name: "",
  email: "",
  phone: "",
  companyName: "",
  teamSize: "",
  currentSetup: "",
  timeline: "",
  notes: ""
};

export function BusinessQuoteForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<BusinessFormState>(initialState);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          formType: "business-quote",
          ...formData
        })
      });

      if (!response.ok) {
        throw new Error("Unable to submit quote request right now.");
      }

      setFormData(initialState);
      router.push("/thanks?type=business");
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form id="quote-form" onSubmit={handleSubmit} autoComplete="on" className="card-mid space-y-6 border border-mist/15 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="form-label-dark space-y-1.5">
          Contact name
          <input
            required
            type="text"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
            className="input-dark"
          />
        </label>

        <label className="form-label-dark space-y-1.5">
          Work email
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            inputMode="email"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            value={formData.email}
            onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
            className="input-dark"
          />
        </label>

        <label className="form-label-dark space-y-1.5">
          Phone
          <input
            required
            type="tel"
            name="tel"
            autoComplete="tel"
            inputMode="tel"
            value={formData.phone}
            onChange={(event) => setFormData((prev) => ({ ...prev, phone: event.target.value }))}
            className="input-dark"
          />
        </label>

        <label className="form-label-dark space-y-1.5">
          Company name
          <input
            required
            type="text"
            value={formData.companyName}
            onChange={(event) => setFormData((prev) => ({ ...prev, companyName: event.target.value }))}
            className="input-dark"
          />
        </label>

        <label className="form-label-dark space-y-1.5">
          Team size
          <input
            required
            type="text"
            value={formData.teamSize}
            onChange={(event) => setFormData((prev) => ({ ...prev, teamSize: event.target.value }))}
            placeholder="Example: 8 users"
            className="input-dark"
          />
        </label>

        <label className="form-label-dark space-y-1.5">
          Timeline
          <input
            required
            type="text"
            value={formData.timeline}
            onChange={(event) => setFormData((prev) => ({ ...prev, timeline: event.target.value }))}
            placeholder="Example: Need rollout in 3 weeks"
            className="input-dark"
          />
        </label>
      </div>

      <label className="form-label-dark space-y-1.5">
        Current setup
        <textarea
          required
          value={formData.currentSetup}
          onChange={(event) => setFormData((prev) => ({ ...prev, currentSetup: event.target.value }))}
          rows={4}
          placeholder="Describe your current tools, constraints, and support process."
          className="input-dark min-h-28"
        />
      </label>

      <label className="form-label-dark space-y-1.5">
        Additional notes
        <textarea
          value={formData.notes}
          onChange={(event) => setFormData((prev) => ({ ...prev, notes: event.target.value }))}
          rows={4}
          placeholder="Compliance needs, documentation format, training preferences, etc."
          className="input-dark min-h-28"
        />
      </label>

      {error ? <p className="text-sm font-medium text-red-300">{error}</p> : null}

      <button type="submit" disabled={isSubmitting} className="btn-primary disabled:cursor-not-allowed disabled:opacity-70">
        {isSubmitting ? "Submitting..." : "Request Quote"}
      </button>
    </form>
  );
}
