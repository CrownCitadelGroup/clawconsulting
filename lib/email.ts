import nodemailer from "nodemailer";
import { Resend } from "resend";

type LeadData = {
  formType: "install-request" | "business-quote";
  submittedAt: string;
  [key: string]: unknown;
};

function toPrettyLines(payload: LeadData): string[] {
  return Object.entries(payload).map(([key, value]) => {
    const label = key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (char) => char.toUpperCase());

    return `${label}: ${String(value ?? "")}`;
  });
}

function toHtml(lines: string[]): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 680px;">
      <h2 style="margin-bottom: 16px;">New OpenClaw Lead</h2>
      <ul style="padding-left: 18px; line-height: 1.5;">
        ${lines.map((line) => `<li>${line}</li>`).join("")}
      </ul>
    </div>
  `;
}

export async function sendLeadEmail(payload: LeadData): Promise<"resend" | "smtp" | "console"> {
  const toEmail = process.env.LEAD_TO_EMAIL;
  const fromEmail = process.env.LEAD_FROM_EMAIL || "no-reply@openclawinstallations.local";
  const subjectPrefix = payload.formType === "business-quote" ? "Business Quote" : "Install Request";
  const subject = `${subjectPrefix}: ${String(payload.name ?? "New lead")}`;

  const lines = toPrettyLines(payload);
  const textBody = lines.join("\n");
  const htmlBody = toHtml(lines);

  if (!toEmail) {
    console.info("LEAD_TO_EMAIL is not configured. Skipping email send.");
    return "console";
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (resendApiKey) {
    const resend = new Resend(resendApiKey);
    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject,
      text: textBody,
      html: htmlBody
    });
    return "resend";
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (smtpHost && smtpUser && smtpPass) {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: String(process.env.SMTP_SECURE || "false") === "true",
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      subject,
      text: textBody,
      html: htmlBody
    });

    return "smtp";
  }

  console.info("No email provider configured. Lead was logged only.");
  return "console";
}
