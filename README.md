# Sameer Waqar Metal Creation — Website

A premium, production-ready React website for a metal fabrication workshop. Built with React, Vite, React Router, CSS Modules and Lucide icons — no UI frameworks, no animation libraries.

## Getting Started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`) in your browser.

To build for production:

```bash
npm run build
npm run preview
```

The production build is output to `dist/`. Upload the contents of `dist/` to any static host (Netlify, Vercel, cPanel, etc.).

## Where to Edit Things

**Business details (phone, WhatsApp number, email, address, hours, map)**
`src/data/siteConfig.js` — every page pulls from this one file. Update it once and it updates everywhere (navbar, footer, contact page, WhatsApp links).

Important: `whatsappNumber` must be digits only, with country code and no leading `0` or `+` (e.g. Pakistan number `0300-1234567` becomes `923001234567`).

**Products (add, remove, edit)**
`src/data/products.js` — each product is one object. Fields:
- `name`, `shortDescription`, `description`
- `features` (array), `sizes` (array)
- `material`, `finish`, `customization`, `delivery`
- `image` — leave as `''` to use the built-in technical illustration placeholder, or set it to an image path/URL (e.g. `/products/jaffri-1.jpg`) once real product photography is ready. No other code changes are needed.

**Google Maps location**
Update `mapEmbedSrc` and `mapDirectionsUrl` in `src/data/siteConfig.js` with your real address or embed link from Google Maps ("Share" → "Embed a map").

**Logo**
Replace `src/assets/logo.png` and `public/favicon.png` with new files of the same name to update the logo across the whole site, including the browser tab icon.

## Structure

```
src/
  assets/         Logo
  components/     Navbar, Footer, ProductCard, ProductBlueprint, FloatingWhatsApp, ScrollToTop
  data/           siteConfig.js (business info), products.js (catalogue)
  pages/          Home, About, Products, ProductDetails, Services, Contact, NotFound
  styles/         global.css (design tokens, base styles)
```

## Notes

- Product photography: until real photos are supplied, each product displays a custom technical line-illustration (`ProductBlueprint.jsx`) so the site never shows broken images or generic stock photography. Swap in real photos any time by setting `image` in `products.js`.
- WhatsApp ordering: every "Order on WhatsApp" button opens WhatsApp with a pre-filled message containing the product name and page link, per `buildWhatsAppUrl()` in `siteConfig.js`.
- Fully responsive from desktop down to small mobile screens, with no horizontal scrolling.
