# DND (Drishti Nimawat Designs) Website

A fully responsive, multi-page website for DND (Drishti Nimawat Designs) built with Next.js, React, TypeScript, and Tailwind CSS. This website mirrors the design and functionality of modern design/architecture company websites with smooth animations, interactive elements, and a professional aesthetic.

## Features

- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Multi-page Structure**: Home, Our Story, Our Process, Projects, and Contact pages
- **Interactive Elements**: Hover effects, scroll animations, dropdown menus, and modals
- **Project Gallery**: Filterable project portfolio with detailed project pages
- **Newsletter Integration**: Newsletter signup modal and footer subscription
- **SEO Optimized**: Semantic HTML, meta tags, and proper structure
- **Performance**: Image optimization, lazy loading, and efficient code splitting
- **Accessibility**: ARIA labels, keyboard navigation, and semantic markup

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Image Optimization**: Next.js Image component
- **Icons**: SVG icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd dnd-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
dnd-website/
├── app/
│   ├── layout.tsx          # Root layout with Header and Footer
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── our-story/
│   │   └── page.tsx        # Our Story page
│   ├── our-process/
│   │   └── page.tsx        # Our Process page
│   ├── projects/
│   │   ├── page.tsx        # Projects gallery page
│   │   └── [slug]/
│   │       └── page.tsx    # Individual project detail pages
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── Header.tsx          # Navigation header with mobile menu
│   ├── Footer.tsx          # Footer with newsletter and links
│   ├── Hero.tsx            # Homepage hero section
│   ├── Features.tsx        # Features/services section
│   ├── ProcessPreview.tsx  # Process preview on homepage
│   ├── ProjectsPreview.tsx # Projects preview on homepage
│   ├── CTA.tsx             # Call-to-action section
│   ├── StoryHero.tsx       # Our Story page hero
│   ├── StoryContent.tsx    # Our Story content
│   ├── Values.tsx          # Company values section
│   ├── ProcessHero.tsx     # Our Process page hero
│   ├── ProcessSteps.tsx    # Process steps detail
│   ├── ProjectsGallery.tsx # Full projects gallery
│   ├── ProjectDetail.tsx  # Individual project page
│   ├── ContactHero.tsx     # Contact page hero
│   ├── ContactForm.tsx     # Contact form
│   └── NewsletterModal.tsx # Newsletter subscription modal
├── public/                 # Static assets (images, logos, etc.)
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## Customization Guide

### Replacing Images

1. **Logo**: Place your logo file in the `public/` directory and update the logo reference in `components/Header.tsx`:
```tsx
<Image src="/logo.png" alt="DND Logo" width={150} height={50} />
```

2. **Project Images**: Replace the Unsplash image URLs in:
   - `components/Hero.tsx` - Hero background image
   - `components/Features.tsx` - Feature images
   - `components/ProjectsGallery.tsx` - Project thumbnails
   - `components/ProjectDetail.tsx` - Project detail images
   - Other components using images

   You can either:
   - Place images in `public/images/` and reference them as `/images/filename.jpg`
   - Use your own image hosting service URLs
   - Keep using Unsplash URLs but replace with your own images

3. **Background Images**: Update background images in hero sections and CTA sections throughout the site.

### Updating Content

1. **Company Information**:
   - Update contact information in `components/Footer.tsx` and `components/ContactForm.tsx`
   - Modify company description in `components/StoryContent.tsx`
   - Update values in `components/Values.tsx`

2. **Services/Features**:
   - Edit the `features` array in `components/Features.tsx`
   - Update categories as needed
   - Modify descriptions and titles

3. **Process Steps**:
   - Update the `steps` array in `components/ProcessSteps.tsx`
   - Modify step descriptions and titles to match your actual process

4. **Projects**:
   - Add/edit projects in `components/ProjectsGallery.tsx`
   - Add corresponding project detail data in `components/ProjectDetail.tsx`
   - Update project categories as needed

### Adding New Pages

1. Create a new directory in `app/` (e.g., `app/new-page/`)
2. Create a `page.tsx` file in that directory
3. Add navigation link in `components/Header.tsx`
4. Create any necessary components in `components/`

### Styling Customization

1. **Colors**: Update the color palette in `tailwind.config.js`:
```js
colors: {
  primary: '#000000',    // Your primary color
  secondary: '#ffffff',   // Your secondary color
  accent: '#f5f5f5',     // Your accent color
}
```

2. **Typography**: Modify font families in `tailwind.config.js` and `app/globals.css`

3. **Spacing**: Adjust spacing scales in Tailwind config or directly in components

### Adding New Projects

1. Add project data to the `projects` array in `components/ProjectsGallery.tsx`:
```tsx
{
  slug: 'your-project-slug',
  title: 'Your Project Title',
  category: 'Residential', // or 'Commercial', 'Hotels', etc.
  location: 'City, Country',
  year: '2024',
  size: 'X,XXX sq ft',
  image: '/images/project-image.jpg',
  description: 'Project description',
}
```

2. Add corresponding detail data in `components/ProjectDetail.tsx`:
```tsx
'your-project-slug': {
  title: 'Your Project Title',
  category: 'Residential',
  location: 'City, Country',
  year: '2024',
  size: 'X,XXX sq ft',
  description: 'Detailed project description...',
  heroImage: '/images/project-hero.jpg',
  gallery: [
    '/images/project-1.jpg',
    '/images/project-2.jpg',
    // ... more images
  ],
}
```

## Building for Production

1. Build the production version:
```bash
npm run build
# or
yarn build
```

2. Start the production server:
```bash
npm start
# or
yarn start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted with Node.js

## Performance Optimization

- Images are automatically optimized using Next.js Image component
- Lazy loading is implemented for images and components
- Code splitting is handled automatically by Next.js
- CSS is optimized and minified in production

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## SEO Features

- Semantic HTML structure
- Meta tags in `app/layout.tsx`
- Proper heading hierarchy
- Alt text for all images
- Descriptive page titles and descriptions

## Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Proper color contrast

## Notes

- All images currently use Unsplash URLs as placeholders. Replace these with your own images.
- The contact form currently shows an alert on submission. Integrate with your backend/email service.
- Newsletter subscription is currently a placeholder. Integrate with your email marketing service.
- Update all placeholder text and content with your actual company information.

## Scroll Interaction Guide

Premium, smooth scroll-triggered animations are implemented with Framer Motion. Utilities live in `components/Scroll.tsx`:

- `ScrollReveal`: Fade + slight slide-in when an element enters the viewport
- `Parallax`: Subtle, GPU-accelerated parallax tied to scroll position
- `useScrubProgress`: Hook to drive advanced timelines from scroll progress

### Adjusting Animation Timings and Easing

`ScrollReveal` props:
```tsx
<ScrollReveal
  delay={0.2}       // seconds
  duration={0.7}    // seconds
  distance={30}     // px to move before settling
  direction="up"    // 'up' | 'down' | 'left' | 'right'
  threshold={0.15}  // portion of element visible to trigger
  mobileLight       // use lighter motion on small screens
/>
```

`Parallax` props:
```tsx
<Parallax
  offset={-120}     // total px shift across the scroll window
  start={-150}      // when the motion begins relative to viewport
  end={350}         // when the motion ends
  fade              // optional: subtly reduce opacity while parallaxing
/>
```

You can tune the global "feel" by changing the default easing/spring values inside `components/Scroll.tsx`.

### Where Animations Are Applied

- `components/Hero.tsx`: Background parallax + headline/cta reveal
- `components/Features.tsx`: Section title/description reveal + card reveals
- `components/ProcessPreview.tsx`: Section reveal + staggered step items
- `components/ProjectsPreview.tsx`: Section reveal + staggered project cards

For new sections, import and wrap elements using `ScrollReveal` or `Parallax` while preserving existing styling.

## Support

For questions or issues, please refer to the Next.js documentation or contact your development team.

## License

This project is proprietary and confidential.

