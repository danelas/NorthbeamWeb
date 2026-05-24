# Northbeam Web

Portfolio + lead site for a productized web-rescue agency. Astro + Tailwind, static deploy.

> Folder is named `mainline-web/` (the original placeholder name) — feel free to rename it to `northbeam-web/`. The git repo and `package.json` already say `northbeam-web`.

## Quick start

```sh
cd C:\Users\dandu\Downloads\mainline-web
npm install
npm run dev
```
Open http://localhost:4321

## Launch in order

Everything you need to do, sequenced, with exact field values:

1. **[docs/01-launch-runbook.md](docs/01-launch-runbook.md)** — domain, email, phone, Vercel deploy, all the account signups
2. **[docs/02-stripe-setup.md](docs/02-stripe-setup.md)** — Stripe products, Payment Links, Customer Portal
3. **[docs/03-google-business-profile.md](docs/03-google-business-profile.md)** — GBP content brief (the #1 trust signal)
4. **[docs/04-prospecting-and-portfolio.md](docs/04-prospecting-and-portfolio.md)** — finding broken-site leads, cold-call script, the portfolio ethics line

## One file controls everything: `src/config/site.ts`

When you sign up for accounts, paste the values here and every page picks them up:

```ts
export const SITE = {
  brand: 'Northbeam Web',
  domain: 'northbeamweb.com',
  email: 'hello@northbeamweb.com',
  phone: '(555) 000-0000',          // ← swap when you get a real number
  phoneHref: 'tel:+15550000000',
  stripeLinks: {
    starter:  null,                  // ← paste Stripe Payment Link URLs here
    standard: null,
    pro:      null,
  },
  calComUser: null,                  // ← e.g., 'dan-northbeam'
  formspreeId: null,                 // ← e.g., 'xkgjabcd'
  stripePortal: null,                // ← Stripe Customer Portal login URL
};
```

While `stripeLinks` is `null`, pricing CTAs fall back to `/contact`. As soon as you paste a URL, the matching tier CTA goes straight to Stripe Checkout.

## Project shape

```
src/
  config/site.ts            ← single source of truth (brand, contact, payment links)
  layouts/Base.astro
  components/
    Nav.astro
    Footer.astro
    BeforeAfter.astro       ← upgraded "real-looking" browser mockups
    CTA.astro
  pages/
    index.astro             ← hero + process + sample work + FAQ
    work.astro              ← 6 concept rebuilds
    pricing.astro           ← 3 tiers, Stripe-link aware
    about.astro             ← principles + founder bio
    contact.astro           ← form + Cal.com-aware booking block
  styles/global.css
vercel.json                 ← cache headers + security headers, framework=astro
tailwind.config.mjs         ← ink (neutral) + accent (deep teal), Fraunces/Inter
astro.config.mjs
docs/                       ← launch + Stripe + GBP + prospecting runbooks
```

## Build / preview

```sh
npm run build        # → dist/
npm run preview
```

## Deploy

`vercel.json` is pre-configured. See [docs/01 §7](docs/01-launch-runbook.md#7-deploy-to-vercel-10-min-free) for the GitHub + Vercel + custom domain walkthrough.

## Brand swap (if you change your mind on the name)

The domains confirmed available as of build time:
- `bedrocksites.com`, `plumblineweb.com`, `crestwebco.com`, `ironwoodwebco.com`, `foundrysites.com`, `cedarpixel.com`, `mainlinewebstudio.com`

To swap:
1. Edit `brand`, `domain`, `url`, `email` in `src/config/site.ts`
2. Replace `northbeamweb.com` in `astro.config.mjs`
3. Rebuild + redeploy

The brand name is referenced from `SITE.brand` everywhere — no hardcoded strings.
