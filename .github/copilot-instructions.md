# Copilot & AI Agent Instructions for DND Website

## Project Overview
- **Framework:** Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Purpose:** Responsive, multi-page portfolio for a design/architecture firm
- **Key Features:**
  - Home, Our Story, Our Process, Projects, Contact, and category pages
  - Interactive UI: scroll animations (Framer Motion), modals, parallax, filterable galleries
  - SEO, accessibility, and performance optimizations

## Architecture & Patterns
- **Pages:**
  - All routes/pages live in `app/` (App Router). Each subfolder with `page.tsx` is a route.
  - Dynamic project detail pages: `app/projects/[slug]/page.tsx`
- **Components:**
  - Reusable UI in `components/` (e.g., `Header`, `Footer`, `Hero`, `ProjectsGallery`, `Scroll.tsx` for animation utilities)
  - Home-specific components in `components/home/`
- **Data:**
  - Category/product data in `src/data/categoryProducts.ts`
  - Project data is hardcoded in `components/ProjectsGallery.tsx` and `components/ProjectDetail.tsx`
- **Styling:**
  - Tailwind CSS, with customizations in `tailwind.config.js` and global styles in `app/globals.css`
- **Animations:**
  - Use `ScrollReveal` and `Parallax` from `components/Scroll.tsx` for scroll-based effects

## Developer Workflows
- **Install:** `npm install` or `yarn install`
- **Dev server:** `npm run dev` or `yarn dev` (http://localhost:3000)
- **Build:** `npm run build` or `yarn build`
- **Production:** `npm start` or `yarn start`
- **Deployment:** Vercel (auto-detects Next.js), or any Node.js-compatible host

## Project-Specific Conventions
- **Images:**
  - Place in `public/assets/` or `public/images/`, reference as `/assets/...` or `/images/...`
  - Replace Unsplash placeholders in components as needed
- **Content Updates:**
  - Company info: `components/Footer.tsx`, `components/ContactForm.tsx`, `components/StoryContent.tsx`, `components/Values.tsx`
  - Features/services: `components/Features.tsx`
  - Process steps: `components/ProcessSteps.tsx`
  - Projects: `components/ProjectsGallery.tsx`, `components/ProjectDetail.tsx`
- **Adding Pages:**
  - Create a folder in `app/`, add `page.tsx`, link in `components/Header.tsx`
- **Animations:**
  - Use `ScrollReveal`/`Parallax` for new sections, see `README.md` for prop examples

## Integration & External Dependencies
- **Framer Motion** for animations
- **Next.js Image** for image optimization
- **No backend integration by default:** Contact form/newsletter are placeholders

## References
- See `README.md` for detailed guides and customization
- See `components/Scroll.tsx` for animation utilities and usage
- See `tailwind.config.js` for styling conventions

---
**When in doubt, prefer patterns already used in `components/` and `app/`.**
