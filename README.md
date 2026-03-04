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

## Environment variables

Use `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://www.openclawinstallations.com

LEAD_TO_EMAIL=you@example.com
LEAD_FROM_EMAIL=no-reply@openclawinstallations.com

RESEND_API_KEY=

SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
SMTP_SECURE=false
```

## Deploy to Vercel

1. Push repository to GitHub.
2. In Vercel, import the repo.
3. Set framework preset to **Next.js** (auto-detected).
4. Add environment variables from `.env.local` in Vercel Project Settings.
5. Deploy.

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
