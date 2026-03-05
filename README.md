# OpenClaw Installations Marketing Website

Production-ready marketing website for **OpenClaw Installations** built with **Next.js App Router + TypeScript + Tailwind CSS**.

## What this site includes

- Lead-generation homepage with:
  - Hero and clear CTAs
  - Pricing section with `$250` local install details
  - Individuals vs Businesses messaging
  - FAQ (8+ items)
  - Testimonials
  - Service Area section
  - Lead form
- Additional pages:
  - `/services`
  - `/business`
  - `/about`
  - `/legal`
  - `/thanks`
- API route for form submissions:
  - `POST /api/leads`
  - Logs to console by default
  - Optional email delivery via **Resend** or **SMTP (nodemailer)** via env vars
- SEO setup:
  - Metadata + Open Graph
  - `LocalBusiness` JSON-LD
  - `sitemap.xml`
  - `robots.txt`

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide icons
- Optional: `resend` and `nodemailer`

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Copy env template:

```bash
cp .env.example .env.local
```

3. Start development server:

```bash
npm run dev
```

4. Open:

```text
http://localhost:3011
```

## Form handling behavior

- If no email provider env vars are set, submissions are still accepted and logged in the server console.
- If `RESEND_API_KEY` is set (and `LEAD_TO_EMAIL` is set), Resend is used.
- Otherwise, if SMTP vars are set, nodemailer SMTP is used.
- If `DISCORD_WEBHOOK_URL` is set, each lead is also posted to Discord via webhook.

## Environment variables

Use `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://claw.humanityfirst.ai

LEAD_TO_EMAIL=you@example.com
LEAD_FROM_EMAIL=no-reply@claw.humanityfirst.ai

RESEND_API_KEY=
DISCORD_WEBHOOK_URL=

SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
SMTP_SECURE=false
```

## Discord webhook setup

1. In Discord, open server settings -> Integrations -> Webhooks.
2. Create a webhook for your target channel and copy the webhook URL.
3. Set `DISCORD_WEBHOOK_URL` in `.env.local` (and in Vercel env vars for production).
4. Submit a form. You should see a "New OpenClaw Lead" embed in Discord.

## Deploy to Vercel

1. Push repository to GitHub.
2. In Vercel, import the repo.
3. Set framework preset to **Next.js** (auto-detected).
4. Add environment variables from `.env.local` in Vercel Project Settings.
5. Ensure `NEXT_PUBLIC_SITE_URL` is `https://claw.humanityfirst.ai` for Production.
6. Deploy.
7. In Vercel Project Settings -> Domains, add `claw.humanityfirst.ai`.
8. In your DNS provider for `humanityfirst.ai`, create a CNAME record:
   - Name/Host: `claw`
   - Target/Value: `cname.vercel-dns.com`
9. Add `www.humanityfirst.ai` as a second domain in Vercel Project Settings -> Domains.
10. In your DNS provider for `humanityfirst.ai`, create a CNAME record:
   - Name/Host: `www`
   - Target/Value: `cname.vercel-dns.com`
11. Wait for domain verification, then mark both domains as Production domains in Vercel.

### Domain behavior

- `claw.humanityfirst.ai` serves the full OpenClaw marketing site.
- `www.humanityfirst.ai` is host-routed by `vercel.json` to a minimal static page (`public/humanityfirst.html`) showing the centered Humanity First logo on white.
- For `www.humanityfirst.ai`, `/favicon.ico` is rewritten to `public/humanityfirstlogobadge.png`.

### CLI deployment (optional)

```bash
vercel login
vercel link
vercel env add NEXT_PUBLIC_SITE_URL production
# value: https://claw.humanityfirst.ai
vercel env add LEAD_TO_EMAIL production
vercel env add LEAD_FROM_EMAIL production
vercel --prod
vercel domains add claw.humanityfirst.ai
vercel domains add www.humanityfirst.ai
```

## Customization guide

Primary customization file:

- `lib/site-config.ts`

Update these values:

- **Service area**: `siteConfig.serviceAreas`
- **Phone**: `siteConfig.phone`
- **Email**: `siteConfig.email`
- **Add-on hourly rate**: `siteConfig.addOnSupportRate`
- **OpenClaw definition paragraph**: `siteConfig.openClawDefinition`
- **Owner name + location placeholders**: `siteConfig.ownerName`, `siteConfig.location`

Branding colors:

- `tailwind.config.ts` (`colors` map: `ink`, `slate`, `sky`, `sand`, `accent`, `line`)

Typography:

- `app/layout.tsx` (`Manrope` + `Fraunces`)
- `app/globals.css`

Legal disclaimers:

- `siteConfig.legalDisclaimers` in `lib/site-config.ts`
- `/legal` page content in `app/legal/page.tsx`

LocalBusiness schema placeholders:

- `app/layout.tsx` (`localBusinessSchema.address`)

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```
