# Homepage Interactive Hero Modifications (DND)

This document explains how the new interactive homepage hero for **DND (Drishti Nimawat Designs)** is wired and how to customize it.

## 1. Files involved

- `app/page.tsx`  
  Uses the new hero component: `DndInteractiveHero`.

- `components/home/DndInteractiveHero.tsx`  
  Main hero layout (headline, tagline, layered interior scene, CTA).

- `components/home/InteractiveObject.tsx`  
  Reusable hotspot component for sofa, chandelier, curtains, armchair, coffee table, rug, shelving.

- `components/home/QuickViewPanel.tsx`  
  Accessible slide-in Quick View panel (used for the sofa).

- `app/globals.css`  
  Defines the hero interaction CSS variables on `:root`.

## 2. Editing tagline and subheading

Open `components/home/DndInteractiveHero.tsx`:

- Tagline (large heading line 1–2):
  - Text content inside the `<motion.h1>` element.

- Subheading (supporting copy):
  - Text inside the `<motion.p>` below the heading.

Search for these exact strings and replace as needed:

- `Designed for life, styled for Luxury`
- `Drishti Designs create to elevate daily living where life unfolds serine comfort`

## 3. Replacing the hero background & detail images

- Main hero background lives at:  
  `public/assets/hero/hero-bg.jpg`

  Replace this file with any premium interior render (landscape, 16:10 preferred). Keep filename identical so no code changes are required.

- Sofa quick view gallery images:  
  `public/assets/hero/sofa-detail-1.jpg`  
  `public/assets/hero/sofa-detail-2.jpg`  
  `public/assets/hero/sofa-detail-3.jpg`

  Swap these for your own detail shots if desired.

After replacing images, run `npm run dev` (or restart the dev server) so Next.js picks up the new static assets.

## 4. Hotspot coordinates / bounding boxes

Hotspot bounding boxes are defined inside `components/home/DndInteractiveHero.tsx` in the `hotspots` array. Example entry:

```tsx
{
  id: 'hero-sofa',
  type: 'sofa',
  label: 'Signature sofa',
  description: 'Modular velvet sofa',
  style: { left: '27%', top: '56%', width: '42%', height: '26%' },
  onClick: () => setSofaOpen(true),
},
```

- `style` uses percentage-based values so hotspots stay aligned as the card scales.
- Adjust `left`, `top`, `width`, and `height` to match new background imagery.
- Add or remove hotspots by editing this array. Each entry maps to `InteractiveObject`.

## 5. CSS variables and animation tuning

Variables are defined in `app/globals.css`:

```css
:root {
  --hover-scale: 1.03;
  --hover-scale-mid: 1.02;
  --hover-translate-y: -8px;
  --parallax-max-x: 10px;
  --parallax-max-y: 6px;
  --hover-ease: cubic-bezier(0.2, 0.9, 0.2, 1);
  --hover-duration: 0.35s;
  --quickview-width-desktop: 40%;
}
```

To adjust the overall feel:

- Increase `--hover-scale` or `--hover-scale-mid` for stronger zoom on hover.
- Adjust `--hover-translate-y` to change lift amount.
- Tune `--parallax-max-x` / `--parallax-max-y` to increase or reduce micro-parallax.
- Change `--hover-ease` and `--hover-duration` to tweak easing and timing.
- Set `--quickview-width-desktop` to control the Quick View panel width on desktop.

Individual objects can also override these via the `hoverConfig` prop in `DndInteractiveHero.tsx`.

## 6. Disabling interactions / reduced motion

The hero respects `prefers-reduced-motion` via Framer Motion’s `useReducedMotion`:

- When reduced motion is enabled:
  - Parallax is disabled.
  - Hover effects simplify to lighter transforms.

To completely disable interactions (for debugging or accessibility testing), you can:

- Replace `InteractiveObject` uses with plain `<img>` tags in `DndInteractiveHero.tsx`, or
- Add a simple guard:

```tsx
const disableInteractions = true;
if (disableInteractions) {
  // Render flat images instead of InteractiveObject instances.
}
```

## 7. Testing across breakpoints

- **Desktop (≥1280px)**:  
  Verify two-column layout, large heading on left, card-style hero image on right. Hover over each major element (sofa, chandelier, curtains, chair, rug, coffee table, shelving) and ensure:
  - Scale + lift + shadow changes.
  - Micro parallax follows cursor.
  - Sofa click opens Quick View; Escape and Close return focus correctly.

- **Tablet (768–1024px)**:  
  Layout remains two-column but slightly tighter; check hover works with pointer devices and Quick View panel animation remains smooth.

- **Mobile (<768px)**:  
  Heading stacks above hero image; hover interactions are lighter (tap/click still opens Quick View for sofa). Ensure scroll feels smooth and hero is readable.

## 8. Manual QA checklist

- Keyboard:
  - Tab through hotspots and CTA.
  - Sofa Quick View panel traps focus and returns it on close.
  - Escape closes the Quick View.
- Performance:
  - Hover and parallax transitions are smooth on modern hardware.
  - No layout shift when hovering.
- Accessibility:
  - Hotspots have `aria-label` and `role="button"` semantics via the interactive button wrapper.
  - `prefers-reduced-motion` is respected (no heavy parallax).


