// Single source of truth for brand, contact, and payment links.
// When you sign up for Stripe, Formspree, Cal.com, etc., update the values here
// and every page picks up the change automatically.

export const SITE = {
  brand: 'Northbeam Web',
  domain: 'northbeamweb.com',
  url: 'https://northbeamweb.com',

  email: 'hello@northbeamweb.com',
  phone: '(555) 000-0000',
  phoneHref: 'tel:+15550000000',
  hours: 'Mon–Fri, 9–5 ET',

  // Set these to Stripe Payment Link URLs once you create them in
  // https://dashboard.stripe.com/payment-links. While null, CTAs route to /contact.
  stripeLinks: {
    starter: null as string | null,
    standard: null as string | null,
    pro: null as string | null,
  },

  // Cal.com username for embedded booking (optional). e.g. "dan-northbeam"
  calComUser: null as string | null,

  // Formspree form id (e.g. "xkgjabcd"). The contact form posts here.
  formspreeId: null as string | null,

  // Stripe Customer Portal link (one URL for all customers to manage billing).
  // Get from Stripe Dashboard → Settings → Billing → Customer portal → "Login link"
  stripePortal: null as string | null,
};
