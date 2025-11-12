# Image Replacement Guide

This guide will help you replace placeholder images with your own high-quality design images.

## Current Image Sources

All images currently use Unsplash URLs. You'll need to replace these with your own images.

## Where to Find Quality Images

### Free Resources:
1. **Unsplash** (https://unsplash.com) - Search for: "interior design", "architecture", "modern home", "office design"
2. **Pexels** (https://pexels.com) - Search for: "interior", "architecture", "design"
3. **Pixabay** (https://pixabay.com) - Free stock photos

### Premium Resources:
1. **Shutterstock** (https://shutterstock.com)
2. **Getty Images** (https://gettyimages.com)
3. **Adobe Stock** (https://stock.adobe.com)

## Image Replacement Checklist

### 1. Logo
- **Location**: `components/Header.tsx`
- **Current**: Text-based logo "DND"
- **Action**: Add your logo file to `public/` and update the component
- **Recommended size**: 200x60px (or proportional)

### 2. Hero Section Images
- **File**: `components/Hero.tsx`
- **Current URL**: `https://images.unsplash.com/photo-1600607687939-ce8a6c25118c`
- **Recommended**: Large, high-quality interior or architectural image (2000x1200px minimum)
- **Action**: Replace with your own hero image

### 3. Features Section Images
- **File**: `components/Features.tsx`
- **8 images** for different features/services
- **Recommended**: 800x600px, square or landscape
- **Categories to replace**:
  - Residential Design
  - Commercial Spaces
  - Interior Design
  - Architectural Services
  - Kitchen Design
  - Living Room Design
  - Bathroom Design
  - Restaurant & Bar

### 4. Project Images
- **Files**: 
  - `components/ProjectsPreview.tsx` (homepage preview)
  - `components/ProjectsGallery.tsx` (full gallery)
  - `components/ProjectDetail.tsx` (project detail pages)
- **Recommended**: 1200x800px for thumbnails, 2000x1200px for hero images
- **Action**: Replace all project images with your actual project photos

### 5. Story/About Page Images
- **Files**: 
  - `components/StoryHero.tsx`
  - `components/StoryContent.tsx`
- **Recommended**: Professional studio/team images or design process images

### 6. Process Page Images
- **File**: `components/ProcessHero.tsx`
- **Recommended**: Image representing the design process or workspace

### 7. Contact Page Images
- **File**: `components/ContactHero.tsx`
- **Recommended**: Professional office or design space image

### 8. CTA Section Images
- **File**: `components/CTA.tsx`
- **Recommended**: Inspiring design image for call-to-action

## How to Replace Images

### Option 1: Using Local Files (Recommended)

1. Place images in `public/images/` directory
2. Update component code:

```tsx
// Before
<Image
  src="https://images.unsplash.com/photo-..."
  alt="Description"
  fill
/>

// After
<Image
  src="/images/your-image.jpg"
  alt="Description"
  fill
/>
```

### Option 2: Using External URLs

1. Upload images to your hosting/CDN
2. Update component code with your image URLs

```tsx
<Image
  src="https://your-cdn.com/images/your-image.jpg"
  alt="Description"
  fill
/>
```

## Image Optimization Tips

1. **Format**: Use WebP or JPEG for photos, PNG for graphics
2. **Size**: Compress images before uploading (use tools like TinyPNG or ImageOptim)
3. **Dimensions**: 
   - Hero images: 2000x1200px
   - Thumbnails: 800x600px
   - Gallery images: 1200x800px
4. **Quality**: Balance file size and quality (aim for 80-90% quality)

## Specific Image Requirements

### Homepage Hero
- **Aspect Ratio**: 16:9 or 21:9
- **Size**: 2000x1200px minimum
- **Content**: Should be dramatic, high-impact interior or architectural shot
- **Style**: Should have good contrast for text overlay

### Project Thumbnails
- **Aspect Ratio**: 4:3 or 16:9
- **Size**: 800x600px
- **Content**: Best shot from each project
- **Style**: Consistent lighting and style across all thumbnails

### Project Detail Hero
- **Aspect Ratio**: 16:9
- **Size**: 2000x1200px
- **Content**: Main showcase image of the project
- **Style**: High quality, well-lit, professional photography

## Quick Replace Script

You can use find-and-replace in your code editor to quickly update all Unsplash URLs:

1. Search for: `https://images.unsplash.com`
2. Replace with: `/images/` (if using local files)
3. Or replace with your CDN URL

## Image Naming Convention

Recommended naming:
- `hero-home.jpg`
- `feature-residential.jpg`
- `project-luxury-residence-1.jpg`
- `project-luxury-residence-2.jpg`
- `story-hero.jpg`
- `process-hero.jpg`
- `contact-hero.jpg`
- `cta-section.jpg`

## Testing After Replacement

1. Check all images load correctly
2. Verify responsive behavior on mobile/tablet
3. Test image lazy loading
4. Check image quality at different screen sizes
5. Verify alt text is descriptive and accurate

