# Quick Start Guide

Get your DND website up and running in minutes!

## Step 1: Install Dependencies

```bash
cd dnd-website
npm install
```

## Step 2: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

## Step 3: Customize Content

### Essential Updates:

1. **Logo** - Update `components/Header.tsx` with your logo
2. **Contact Info** - Update email/phone in:
   - `components/Footer.tsx`
   - `components/ContactForm.tsx`
3. **Company Story** - Edit `components/StoryContent.tsx`
4. **Images** - Replace Unsplash URLs with your images (see `IMAGE_REPLACEMENT_GUIDE.md`)

## Step 4: Build for Production

```bash
npm run build
npm start
```

## Key Files to Customize

- **Branding**: `components/Header.tsx`, `components/Footer.tsx`
- **Content**: `components/StoryContent.tsx`, `components/Values.tsx`
- **Projects**: `components/ProjectsGallery.tsx`, `components/ProjectDetail.tsx`
- **Process**: `components/ProcessSteps.tsx`
- **Features**: `components/Features.tsx`

## Next Steps

1. Read `README.md` for detailed documentation
2. Follow `IMAGE_REPLACEMENT_GUIDE.md` to replace placeholder images
3. Customize colors in `tailwind.config.js`
4. Add your actual project data and images

## Need Help?

Refer to the main `README.md` for comprehensive documentation on customization, deployment, and more.

