import { NextResponse } from "next/server";

import { sendDiscordLeadAlert } from "@/lib/discord";
import { sendLeadEmail } from "@/lib/email";

type SupportedFormType = "install-request" | "business-quote";
type LeadPayload = Parameters<typeof sendLeadEmail>[0];

function isSupportedFormType(value: unknown): value is SupportedFormType {
  return value === "install-request" || value === "business-quote";
}

function isFilled(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function requiredFieldsByType(formType: SupportedFormType): string[] {
  if (formType === "business-quote") {
    return ["name", "email", "phone", "companyName", "teamSize", "currentSetup", "timeline"];
  }

  return ["name", "email", "phone", "city", "preferredDateTime", "customerType"];
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const formType = body.formType;

    if (!isSupportedFormType(formType)) {
      return NextResponse.json({ ok: false, error: "Unsupported form type" }, { status: 400 });
    }

    const missingFields = requiredFieldsByType(formType).filter((field) => !isFilled(body[field]));
    if (missingFields.length > 0) {
      return NextResponse.json(
        { ok: false, error: `Missing required fields: ${missingFields.join(", ")}` },
        {
          status: 400
        }
      );
    }

    const payload: LeadPayload = {
      ...body,
      formType,
      submittedAt: new Date().toISOString()
    };

    console.log("[lead] New submission", payload);

    const delivery = await sendLeadEmail(payload);

    let discordAlertSent = false;
    try {
      discordAlertSent = await sendDiscordLeadAlert(payload);
    } catch (error) {
      console.error("[lead] Discord alert error", error);
    }

    return NextResponse.json({ ok: true, delivery, discordAlertSent });
  } catch (error) {
    console.error("[lead] Submission error", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Unable to process submission"
      },
      {
        status: 500
      }
    );
  }
}
