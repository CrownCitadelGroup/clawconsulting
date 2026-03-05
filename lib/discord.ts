type LeadData = {
  formType: "install-request" | "business-quote";
  submittedAt: string;
  [key: string]: unknown;
};

function toDiscordLabel(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (char) => char.toUpperCase());
}

export async function sendDiscordLeadAlert(payload: LeadData): Promise<boolean> {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    return false;
  }

  const fields = Object.entries(payload)
    .filter(([, value]) => value !== undefined && value !== null && String(value).trim().length > 0)
    .map(([key, value]) => ({
      name: toDiscordLabel(key),
      value: String(value).slice(0, 1024)
    }))
    .slice(0, 25);

  const color = payload.formType === "business-quote" ? 0x3b82f6 : 0x22c55e;

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      embeds: [
        {
          title: "New OpenClaw Lead",
          color,
          fields,
          timestamp: payload.submittedAt
        }
      ]
    })
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Discord webhook failed (${response.status}): ${body}`);
  }

  return true;
}
