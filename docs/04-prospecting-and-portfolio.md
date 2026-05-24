# Prospecting + the portfolio ethics line

## The hard line first

**You asked me to "find real broken sites and put them on the portfolio."** I want to flag the legal/ethical gotcha before you do that:

Putting a screenshot of `[Real Local Business].com` on `/work` with a "BROKEN" stamp on it, **without their written permission**, can get you:

- A cease-and-desist letter (their lawyer will be cheaper than yours)
- A defamation claim if "broken" can be argued to harm their reputation
- A trademark complaint if their logo/name is visible
- A Google penalty if they file a DMCA

This is true even if everything you say is factually accurate.

### The two safe paths

1. **Concept rebuilds (what's in the portfolio now).** Generic names like "Marco's Auto Body" with mocked-up screenshots. Looks like real work, no legal exposure. Stays there until you have...

2. **Real before/after with written permission.** Once you have a paying client, take a screenshot of their *old* site (right when they sign), build the new one, then ask them: *"Mind if I use the before/after on our portfolio? It really helps us land more clients like you."* 90%+ will say yes if you ask after launch when they're happy. Get the yes in writing (an email reply is enough).

The portfolio you have now is fine for v1. Don't substitute real-business screenshots without permission.

---

## Where the prospects actually come from

The point of "finding broken sites" is to generate a **call list for outreach**, not to populate the portfolio. Here's how to build that list, ethically and at scale.

### Tier 1 — Free, manual (week 1)

The fastest start with zero spend:

1. **Google Maps search** for `[your category] near [your city]`. E.g., `auto body Cleveland`, `nail salon Pittsburgh`.
2. Click each listing → click "Website" → look for any of:
   - "Not Secure" warning in the URL bar (no SSL)
   - Site doesn't load on mobile (open Chrome DevTools → Toggle device toolbar)
   - Last copyright year ≥ 2 years stale
   - Broken images / 404s on internal links
   - No contact form OR form that just opens `mailto:` (looks broken to non-tech people)
3. Note: business name, phone, website URL, **one specific broken thing**.
4. Target: 20 leads/day = 100/week.

The "one specific broken thing" is gold for your opener: *"Hey, this is Dan from Northbeam — I was looking at your site and noticed the booking form goes to a 2018 PDF. Got 60 seconds?"*

### Tier 2 — Tools that find broken sites at scale ($0–$50/mo)

| Tool | Cost | What it gives you |
|---|---|---|
| [GMB Everywhere](https://chromewebstore.google.com/detail/gmb-everywhere) (Chrome extension) | Free | Bulk-exports Google Maps results to CSV |
| [Local Falcon](https://www.localfalcon.com) | $25/mo | See which local businesses rank where + their site URLs |
| [BuiltWith](https://builtwith.com) | Free | Tells you what a site is built on. Filter for `WordPress 3.x`, `Flash`, `jQuery 1.x` → all flag old sites |
| [Wappalyzer](https://www.wappalyzer.com) | Free Chrome ext | Same as BuiltWith but inline as you browse |
| [Google PageSpeed Insights](https://pagespeed.web.dev) | Free | Anything scoring under 50 is a great lead — and you have a quantifiable "your site is failing" number for the call |

### Tier 3 — Bulk + automation ($50–$200/mo)

Once you've proven the script works manually:

- **Apify "Google Maps Scraper"** (~$30/mo) — pulls hundreds of leads with website URLs into a CSV. Run it for each (vertical × city) you want to target.
- **HTTPie / curl + a 30-line script** to mass-check the URLs for: SSL valid, mobile viewport, last-modified date, broken links. I can write you this script if you want — it'd give you a CSV like:

  ```
  business, url, ssl_ok, mobile_friendly, last_modified, broken_links, score
  ```

  Sorted by score = your call list.

### Tier 4 — Don't bother (yet)

Skip these until you have 10+ paying clients:

- Cold email tools (Apollo, Lemlist) — way harder to land than calls for $149/mo small-biz pricing
- LinkedIn outreach — wrong audience (B2B SaaS lives there, not local salons)
- Paid ads — your CAC will eat your margin alive at $149/mo MRR

---

## The cold-call script (refined)

The README has the short version. Here's the full call flow:

### Opener (10 seconds)
> "Hey, is this [owner name]? This is Dan from Northbeam Web. I'm not calling to sell you anything — I was actually just looking at [business name]'s website to book a [haircut/repair/dinner] and noticed [the specific broken thing]. Wanted to give you a heads up. You got 60 seconds?"

The "not calling to sell you anything" is true *for the next 60 seconds.* Don't lie.

### Diagnose (30 seconds)
> "Yeah so when I clicked on [contact form / menu link / book now button] it [went to a 404 / opened a PDF from 2018 / asked me to call a disconnected number]. How many calls a week do you think you're losing from people who hit that and bounce?"

Make them put a number on the problem. Even "5 a week" multiplied by their average sale = real money.

### Bridge (10 seconds)
> "I actually do this for a living — I rebuild broken small-business sites for a flat monthly fee. $299 to build it, $149 a month after that. Hosting, security, monthly updates included. Month-to-month, you can cancel anytime."

### Close (one of two)

If interested:
> "Want to grab 15 minutes this week so I can show you a mockup of what yours could look like? Tuesday at 2 or Thursday at 10?"

If not interested *today*:
> "Totally fair. Mind if I shoot you a one-pager with screenshots of stuff we've done so you have it if it ever comes up? What's the best email?"

That email goes into a 6-week follow-up. ~30% of "no for now" turn into "yes" by call #3.

---

## Targets for the first 30 days

| Week | Calls | Booked discovery calls | Closed | Reason |
|---|---|---|---|---|
| 1 | 50 | 3–5 | 0 | Learning the script |
| 2 | 80 | 6–10 | 0–1 | Voice getting steady |
| 3 | 100 | 10–15 | 1–2 | Script tightening |
| 4 | 100 | 12–18 | 2–4 | Compounding referrals start |

Industry benchmark: 1–3% of cold calls book a meeting, 20–40% of meetings close at this price point. So 100 calls/week → 1–3 discovery calls/week closed → ~1 new client/week = $149 MRR + $299 setup = ~$450 in week 1 revenue per client.

By month 6 at this pace: ~20 clients × $149 = **$2,980 MRR**, plus setup fees on new closes (~$1,200/mo). $50k/year run-rate, ~5 hrs/week per active client. That's the model.

---

## What to do with the leads you find

Don't keep them in your head. Track in:

- **Google Sheet** (free, fine for the first 200 leads) with columns: business, owner, phone, website, broken thing, last contact date, next action date, status (cold/contacted/booked/closed/lost)
- **Or Notion** if you like databases
- Or **Streak** ($15/mo) if you want Gmail-integrated CRM with reminders

Whatever you pick, the rule is: **every lead has a next-action date.** Otherwise they evaporate.

---

## One last thing

The temptation when you're hustling is to skip the script and just wing it. Don't. Write the script down (yours, not mine — adapt it), put it on a sticky note next to your monitor, and read it on every call for the first month. After 200 calls, you can riff. Before that, the script is the difference between "I made 50 calls and got 0 meetings" and "I made 50 calls and got 4."
