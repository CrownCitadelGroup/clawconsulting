"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type LeadFormState = {
  name: string;
  email: string;
  phone: string;
  city: string;
  preferredDateTime: string;
  customerType: "Individual" | "Business";
  notes: string;
};

const initialState: LeadFormState = {
  name: "",
  email: "",
  phone: "",
  city: "",
  preferredDateTime: "",
  customerType: "Individual",
  notes: ""
};

export function LeadForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<LeadFormState>(initialState);
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
          formType: "install-request",
          ...formData
        })
      });

      if (!response.ok) {
        throw new Error("Unable to submit your request right now.");
      }

      setFormData(initialState);
      router.push("/thanks?type=install");
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card-mid space-y-6 border border-mist/15 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="form-label-dark space-y-1.5">
          Name
          <input
            required
            type="text"
            value={formData.name}
            onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
            className="input-dark"
          />
        </label>

        <label className="form-label-dark space-y-1.5">
          Email
          <input
            required
            type="email"
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
            value={formData.phone}
            onChange={(event) => setFormData((prev) => ({ ...prev, phone: event.target.value }))}
            className="input-dark"
          />
        </label>

        <label className="form-label-dark space-y-1.5">
          City
          <input
            required
            type="text"
            value={formData.city}
            onChange={(event) => setFormData((prev) => ({ ...prev, city: event.target.value }))}
            className="input-dark"
          />
        </label>

        <label className="form-label-dark space-y-1.5">
          Preferred date and time
          <input
            required
            type="datetime-local"
            value={formData.preferredDateTime}
            onChange={(event) => setFormData((prev) => ({ ...prev, preferredDateTime: event.target.value }))}
            className="input-dark [color-scheme:dark]"
          />
        </label>

        <label className="form-label-dark space-y-1.5">
          Individual or Business?
          <select
            value={formData.customerType}
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, customerType: event.target.value as LeadFormState["customerType"] }))
            }
            className="input-dark"
          >
            <option value="Individual">Individual</option>
            <option value="Business">Business</option>
          </select>
        </label>
      </div>

      <label className="form-label-dark space-y-1.5">
        Notes
        <textarea
          value={formData.notes}
          onChange={(event) => setFormData((prev) => ({ ...prev, notes: event.target.value }))}
          rows={5}
          placeholder="Tell us what you want installed and any constraints (internet, device type, timeline)."
          className="input-dark min-h-28"
        />
      </label>

      {error ? <p className="text-sm font-medium text-red-300">{error}</p> : null}

      <button type="submit" disabled={isSubmitting} className="btn-primary disabled:cursor-not-allowed disabled:opacity-70">
        {isSubmitting ? "Submitting..." : "Request an Install"}
      </button>
    </form>
  );
}
