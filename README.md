# METALEDGE Metal Creation

A premium, responsive website for **METALEDGE Metal Creation** — a custom metal fabrication workshop. Built with a clean, minimal, industrial design language (black & white theme) and direct WhatsApp ordering for customers.

**Live Site:** https://metaledge.vercel.app/

> This is **Version 1**. Product data is currently managed through code. A future version will add a backend, Cloudinary-based image management, and a protected admin dashboard so the client can manage the catalogue without touching code — WhatsApp will remain the primary ordering channel.

## Tech Stack

- React
- Vite
- React Router
- CSS Modules
- Lucide Icons

## Features

- Fully responsive — mobile, tablet, and desktop
- Dynamic product pages with image galleries (main image + thumbnails)
- One-click WhatsApp ordering, pre-filled with product details
- Clean, reusable component structure
- Google Maps integration on the Contact page

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/Nabeel-8090/metaledge.git
cd metaledge
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  assets/         Logo and product images
  components/     Navbar, Footer, ProductCard, ProductBlueprint, etc.
  data/           siteConfig.js (business info), products.js (catalogue)
  pages/          Home, About, Products, ProductDetails, Services, Contact
  styles/         Global design tokens and base styles
```

## Adding Products

All product data lives in `src/data/products.js`. Add product images to `src/assets/products/`, import them at the top of the file, and list them under the `images` array for that product.

## Roadmap

- [ ] Backend integration
- [ ] Cloudinary for image/catalogue management
- [ ] Protected admin dashboard for the client
- [ ] Keep WhatsApp as the core ordering method

## License

This project was built for a client and is shared here for portfolio purposes.
