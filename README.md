# METALEDGE Metal Creation

A premium, responsive website for **METALEDGE Metal Creation** — a custom metal fabrication workshop. Built with a clean, minimal, industrial design language (black & white theme) and direct WhatsApp ordering for customers.

**Live Site:** https://metaledge-ss.vercel.app/

> **Version 1** was a fully static React site — all product data was hardcoded, with product images stored locally in the assets folder.
>
> **Version 2** adds a full backend — Firebase Authentication, Firestore, and Cloudinary — powering a protected admin dashboard. The client can now add, view, and manage the entire product catalogue without touching code. WhatsApp remains the primary ordering channel.

## Tech Stack

- React
- Vite
- React Router
- CSS Modules
- Lucide Icons
- Firebase Authentication (Admin login)
- Firebase Firestore (Product database)
- Cloudinary (Image upload & delivery)

## Features

### Version 1 (Static)
- Fully responsive — mobile, tablet, and desktop
- Dynamic product pages with image galleries (main image + thumbnails)
- One-click WhatsApp ordering, pre-filled with product details
- Clean, reusable component structure
- Google Maps integration on the Contact page

### Version 2 (Backend + Admin)
- **Protected admin dashboard** (`/admin/dashboard`) for full product management — create and view products
- **Firebase Authentication** login (`/admin/login`) — sign-up is disabled; admin credentials are pre-provisioned for security
- **Cloudinary integration** for direct image uploads from the dashboard, no manual asset handling
- **Firestore database** — products are stored and fetched dynamically instead of being hardcoded
- Real-time catalogue updates — no code changes or redeployment needed to add a new product

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/Nabeel-8090/metaledge.git
cd metaledge
npm install
```

Create a `.env` file in the root directory with the following variables:

```dotenv
VITE_FIREBASE_API_KEY=""
VITE_FIREBASE_AUTH_DOMAIN=""
VITE_FIREBASE_PROJECT_ID=""
VITE_FIREBASE_STORAGE_BUCKET=""
VITE_FIREBASE_MESSAGING_SENDER_ID=""
VITE_FIREBASE_APP_ID=""
VITE_CLOUDINARY_CLOUD_NAME=""
VITE_CLOUDINARY_API_KEY=""
VITE_CLOUDINARY_API_SECRET=""
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
  assets/         Logo and static images
  components/     Navbar, Footer, ProductCard, ProductBlueprint, etc.
  data/           siteConfig.js (business info)
  pages/
    Home, About, Products, ProductDetails, Services, Contact
    admin/        AdminLogin, AdminDashboard (protected)
  firebase/       Firebase config, auth helpers, Firestore queries
  styles/         Global design tokens and base styles
```

## Admin Panel

- `/admin/login` — Firebase Authentication-based login (sign-up is disabled; credentials are pre-provisioned by the developer for security)
- `/admin/dashboard` — Protected route for:
  - Creating new products (name, descriptions, features, sizes, material, finish, customization, delivery info)
  - Uploading product images directly to Cloudinary
  - Viewing all existing products fetched live from Firestore

## Adding Products

**Version 1:** Product data lived in `src/data/products.js`. Adding a product meant importing images into `src/assets/products/` and manually editing the file.

**Version 2:** No code required. Log in at `/admin/login`, and use the dashboard at `/admin/dashboard` to create a new product — it's saved to Firestore and instantly reflected on the live site.

## Roadmap

- [x] Backend integration (Firebase)
- [x] Cloudinary for image/catalogue management
- [x] Protected admin dashboard for the client
- [x] Keep WhatsApp as the core ordering method
- [x] Edit/update existing products from the dashboard

## License

This project was built for a client and is shared here for portfolio purposes.
