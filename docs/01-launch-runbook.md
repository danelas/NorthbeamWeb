# Launch runbook — Northbeam Web

Do these in order. Each step has a "you need" list at the top so you can prep before sitting down.

---

## 1. Buy the domain (~5 min, $12/yr)

**You need:** credit card.

1. Go to [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) (cheapest, no markup, no upsells) or [Namecheap](https://www.namecheap.com).
2. Buy `northbeamweb.com` for 1 year ($10–$12 at Cloudflare; ~$13 at Namecheap).
3. **Turn on auto-renew.** Lapsed domains are the #1 cause of "ghost agency" horror stories — don't be that.
4. **Turn on WHOIS privacy** (free at Cloudflare, $5/yr at Namecheap). Otherwise your home address ends up in WHOIS lookups.

Backup domain options if you change your mind (all confirmed available as of today):
- `bedrocksites.com`, `plumblineweb.com`, `crestwebco.com`, `ironwoodwebco.com`, `foundrysites.com`, `cedarpixel.com`, `mainlinewebstudio.com`

To swap: edit `src/config/site.ts` — change `brand`, `domain`, `url`, `email`. Find/replace `northbeamweb.com` in `astro.config.mjs`.

---

## 2. Set up email (~10 min, $0–$7/mo)

**You need:** the domain from step 1, a credit card if going with Google.

You have three options, ordered by trust:

| Option | Cost | Trust signal | Setup |
|---|---|---|---|
| **Google Workspace** | $7/mo per user | Highest — clients recognize Gmail | Sign up at workspace.google.com, follow MX-record setup |
| **Cloudflare Email Routing** | Free | Forward only (you reply from gmail.com — looks unprofessional) | Free but visible to recipients |
| **Zoho Mail Free** | Free for 5 users | Mid — most clients won't notice | Free at zoho.com/mail |

**Recommended: Google Workspace.** $7/mo. Worth it. Set `hello@northbeamweb.com` as the primary alias. Add `dan@northbeamweb.com` for personal correspondence on calls.

After setup, update `src/config/site.ts`:
```ts
email: 'hello@northbeamweb.com',
```

---

## 3. Get a real phone number (~5 min, $0–$10/mo)

**You need:** a Google account OR a credit card.

Cold-calling from your personal cell is fine to start. But on the *receiving* side (when prospects call back the number on your site), you want:

- **Google Voice** (free, US-only): voice.google.com, pick a number with your area code. Forwards to your cell, separate voicemail, transcripts in email.
- **OpenPhone** ($15/mo): purpose-built for small business. Shared inbox, scheduled messages, SMS templates. Worth it once you have 2+ clients.

After getting a number, update `src/config/site.ts`:
```ts
phone: '(412) 555-0123',
phoneHref: 'tel:+14125550123',
```

---

## 4. Stripe — payment + subscriptions (~45 min)

See [docs/02-stripe-setup.md](02-stripe-setup.md). Detailed step-by-step with exact field values.

---

## 5. Formspree — contact form (~5 min, free for 50/mo)

**You need:** an email address.

1. Go to [formspree.io](https://formspree.io) → sign up.
2. New form → name it "Northbeam contact" → destination email = your `hello@northbeamweb.com`.
3. Copy the form ID (looks like `xkgjabcd`).
4. Set in `src/config/site.ts`:
   ```ts
   formspreeId: 'xkgjabcd',
   ```

Free plan allows 50 submissions/month. Upgrade to $10/mo if you outgrow it.

---

## 6. Cal.com — discovery call booking (~10 min, free)

**You need:** a Google account (for calendar sync).

1. Go to [cal.com](https://cal.com) → sign up with Google.
2. Pick a username (e.g., `dan-northbeam` or `northbeamweb`).
3. Create a single event type: "15-minute website audit" — 15 min, weekdays 9am–5pm ET, your timezone.
4. Connect your Google Calendar so it auto-blocks busy times.
5. Set in `src/config/site.ts`:
   ```ts
   calComUser: 'dan-northbeam',
   ```

This makes a "Pick a time directly" link appear on /contact.

---

## 7. Deploy to Vercel (~10 min, free)

**You need:** a GitHub account, your domain.

### First-time push to GitHub

```sh
cd C:\Users\dandu\Downloads\mainline-web
git init
git add .
git commit -m "Initial Northbeam Web site"
gh repo create northbeam-web --private --source=. --remote=origin --push
```

(If you don't have `gh` CLI: create the repo manually at github.com/new, then `git remote add origin <url>` and `git push -u origin main`.)

### Connect to Vercel

1. Go to [vercel.com/new](https://vercel.com/new) → sign in with GitHub.
2. Import `northbeam-web` repo.
3. Framework preset: **Astro** (auto-detected).
4. Click **Deploy**. Live in ~60 seconds at `northbeam-web.vercel.app`.

### Wire your custom domain

1. In Vercel project → Settings → Domains → add `northbeamweb.com` and `www.northbeamweb.com`.
2. Vercel shows the DNS records you need.
3. Go to Cloudflare DNS (or Namecheap) → add the A / CNAME records Vercel listed.
4. Wait 5–15 min. SSL auto-provisions.

After this, every `git push` to `main` redeploys in ~30 seconds.

---

## 8. Google Business Profile (~30 min + 1–2 weeks verification)

See [docs/03-google-business-profile.md](03-google-business-profile.md). Single biggest trust signal on cold calls — do it.

---

## 9. Real before/after assets

See [docs/04-prospecting-and-portfolio.md](04-prospecting-and-portfolio.md). How to find broken sites at scale, the ethical line on portfolio screenshots, and a tool list.

---

## What "done" looks like for v1

- [ ] Domain bought, auto-renew on, WHOIS privacy on
- [ ] `hello@northbeamweb.com` works (test it)
- [ ] Real phone number forwards to your cell
- [ ] Stripe Payment Links live, pricing page CTAs go to checkout
- [ ] Contact form posts to your inbox
- [ ] Cal.com booking link appears on /contact
- [ ] Site deployed at `https://northbeamweb.com` with valid SSL
- [ ] Google Business Profile submitted for verification
- [ ] At least 1 real before/after screenshot pair (replacing the placeholder mockups)

Once these are green, you're ready to cold-call.
