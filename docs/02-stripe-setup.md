# Stripe setup — exact field values

Time: ~45 min start to finish. Cost: free until you take payment (then 2.9% + 30¢ per transaction).

**You need:** SSN/EIN, bank account, business address (a home address is fine for now).

---

## Step 1 — Create your Stripe account

1. Go to [stripe.com](https://stripe.com) → "Start now."
2. Email = `hello@northbeamweb.com`, business name = `Northbeam Web` (or "Daniel [Lastname] DBA Northbeam Web" if not LLC).
3. Country = US, business type = Individual / Sole proprietor (unless you've formed an LLC).
4. Add bank account (for payouts) and SSN (for tax reporting). Stripe is required by law to collect this — it's safe.
5. **Skip the API integration step** — you don't need code; Payment Links are no-code.

---

## Step 2 — Create the 3 monthly subscription products

For each tier, go to Dashboard → **Products** → **Add product**.

### Starter
- **Name:** `Northbeam Web — Starter`
- **Description:** `Up to 5 pages, hosting, SSL, daily backups, 1 content update/month.`
- **Pricing model:** Standard pricing
- **Price:** `$99.00 USD` / Recurring / Monthly
- **Statement descriptor:** `NORTHBEAM STARTER` (max 22 chars)

### Standard
- **Name:** `Northbeam Web — Standard`
- **Description:** `Up to 10 pages, monthly performance report, 3 content updates/month, on-page SEO basics.`
- **Price:** `$149.00 USD` / Recurring / Monthly
- **Statement descriptor:** `NORTHBEAM STANDARD`

### Pro
- **Name:** `Northbeam Web — Pro`
- **Description:** `Unlimited pages, weekly updates, blog setup + 1 post/month, analytics dashboard, priority support.`
- **Price:** `$249.00 USD` / Recurring / Monthly
- **Statement descriptor:** `NORTHBEAM PRO`

---

## Step 3 — Create the 2 setup fee products (one-time)

### Setup fee — Standard tier ($299)
- **Name:** `Northbeam Web — Setup Fee`
- **Description:** `One-time site build and launch.`
- **Pricing model:** Standard pricing
- **Price:** `$299.00 USD` / **One-time** (not recurring)

### Setup fee — Pro tier ($499)
- **Name:** `Northbeam Web — Pro Setup Fee`
- **Description:** `One-time site build and launch (Pro tier).`
- **Price:** `$499.00 USD` / One-time

(Starter and Standard share the same $299 setup fee — you only need one of these for both.)

---

## Step 4 — Create 3 Payment Links (bundled)

Dashboard → **Payment Links** → **+ New**.

For each link, you'll add **two prices to the same checkout**:

### Starter link
1. Click "Add another product" — add `Northbeam Web — Setup Fee` ($299, one-time)
2. Add `Northbeam Web — Starter` ($99/mo, recurring)
3. **Customer can adjust quantity:** off for both
4. **After payment:** "Show confirmation page"
5. **Confirmation message:** `Welcome to Northbeam! We'll be in touch within one business day to start your site.`
6. **Collect billing address:** yes
7. **Collect phone number:** yes
8. **Save & copy the URL** — looks like `https://buy.stripe.com/abc123...`

### Standard link
- Setup Fee ($299, one-time) + Standard ($149/mo, recurring)
- Same confirmation settings as above

### Pro link
- Pro Setup Fee ($499, one-time) + Pro ($249/mo, recurring)
- Same confirmation settings

---

## Step 5 — Paste links into the site

Edit `src/config/site.ts`:

```ts
stripeLinks: {
  starter:  'https://buy.stripe.com/REPLACE_ME_STARTER',
  standard: 'https://buy.stripe.com/REPLACE_ME_STANDARD',
  pro:      'https://buy.stripe.com/REPLACE_ME_PRO',
},
```

Save, redeploy. Pricing page CTAs now go straight to Stripe Checkout.

---

## Step 6 — Customer Portal (so clients can self-cancel)

This is critical for the "month-to-month, cancel anytime" trust pitch.

1. Dashboard → **Settings** → **Customer Portal** → **Activate test link / live link**.
2. Configure:
   - **Allow customers to update payment method:** yes
   - **Allow customers to cancel subscriptions:** yes
   - **Cancellation reason:** ask (optional, helpful for you)
   - **Update subscription quantity:** off
   - **Switch plans:** yes — let them upgrade Starter → Standard → Pro themselves
   - **Allow invoice history:** yes
3. Save. Copy the **Login link** Stripe gives you.
4. Set in `src/config/site.ts`:
   ```ts
   stripePortal: 'https://billing.stripe.com/p/login/REPLACE_ME',
   ```

A "Billing" link will appear in the site footer.

---

## Step 7 — Enable wallets (Apple Pay / Google Pay)

Dashboard → **Settings** → **Payment methods** → toggle on:
- Apple Pay ✓
- Google Pay ✓
- Link (Stripe's wallet) ✓

Zero code, zero cost. Adds a one-tap payment option to your Checkout. Huge trust + conversion lift on mobile.

---

## Step 8 — Set up the receipt + first-client email

Dashboard → **Settings** → **Emails**:
- **Send receipts for one-time payments:** on
- **Send invoices for subscription payments:** on
- **Customize footer** with: `Questions? Reply to hello@northbeamweb.com or call (your number). Manage your subscription anytime at [portal link].`

---

## Step 9 — Test it once with your own card

1. Open the Starter Payment Link in incognito.
2. Use a real card with $1 stuck on a virtual card (you can refund yourself in 1 click).
3. Confirm you receive the email receipt.
4. Confirm the subscription appears in Dashboard → Subscriptions.
5. Refund yourself (one button in Stripe).

---

## What this costs you

- **Stripe fee:** 2.9% + 30¢ per charge. On a $149/mo subscription that's $4.62. On the $299 setup it's $8.97. Net to you: ~$435 in the first month from one Standard client.
- **No monthly fee, no minimums.**

---

## When you should NOT use Payment Links

For your first 5–10 clients, Payment Links are perfect — fast, no code, easy to swap. But:

- **Custom pricing** (e.g., "$199/mo because they have weird requirements") → use Stripe Invoices, not Payment Links.
- **Annual prepay discount** (`$1,490/yr saves you 2 months`) → create an annual price too, give them a different link.
- **Coupon for the cold call** ("first month free if you sign up this week") → add a coupon code in Stripe and enable "Allow promo codes" on the Payment Link.
