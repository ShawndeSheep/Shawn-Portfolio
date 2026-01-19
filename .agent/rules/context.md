---
trigger: always_on
---

# Portfolio Website - Copilot Instructions

## Project Overview

This is a personal portfolio website built with React (Vite), Tailwind CSS, and GSAP for animations. The project emphasizes elegant, professional design with a black/white/grayscale color theme, smooth animations, and full responsive support for desktop and mobile devices.

**Key Technologies:**

- **Framework:** React 18+ via Vite
- **Styling:** Tailwind CSS v4
- **Animations:** GSAP v3
- **Runtime:** Node.js (check `package.json` for exact version)

**Project Type:** Single-page application (SPA) portfolio
**Size:** Small to medium (~20-50 components expected)

## Critical Build & Development Information

### Development Server

**IMPORTANT:** The development server is ALWAYS running via `npm run dev` with hot module replacement (HMR) enabled. **DO NOT** run `npm run dev` in your commands - changes will automatically reflect in the browser.

### Installation & Setup

```bash
# Only needed on fresh clone or when dependencies change
npm install
```

### Build Commands (Validated)

```bash
# Production build - creates optimized bundle in /dist
npm run build

# Preview production build locally
npm run preview

# Lint check (if ESLint is configured)
npm run lint
```

**Build Time:** Production build typically completes in 5-15 seconds depending on project size.

### Common Issues & Workarounds

**Issue:** Build fails with Tailwind errors

- **Solution:** Ensure `tailwind.config.js` includes all content paths: `content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}']`

**Issue:** GSAP animations not working after build

- **Solution:** Verify GSAP is imported at component level, not globally. Check tree-shaking isn't removing unused GSAP modules.

**Issue:** Hot reload not working

- **Solution:** Check that files are saved in `/src` directory. Vite only watches configured directories.

## Design System & Styling Guidelines

### Theme Requirements (MUST FOLLOW)

- **Color Palette:** Strictly black (#000000), white (#ffffff), and grayscale tones only
- **Feel:** Elegant, professional, minimal - avoid flashy or excessive animations
- **Responsiveness:** ALWAYS implement both desktop (1024px+) and mobile (320px+) layouts

### Tailwind Usage Rules

✅ **DO:**

- Use Tailwind utility classes as primary styling method
- Use responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Use flexible spacing: `p-4`, `m-6`, `gap-8` (easily adjustable)
- Use Tailwind's built-in transitions: `transition-all`, `duration-300`, `ease-in-out`
- Reference [Tailwind v4 UI Blocks](https://tailwindcss.com/plus/ui-blocks/documentation) for patterns

❌ **AVOID:**

- Absolute positioning with hard-coded values (`absolute top-0 left-0`)
- Fixed pixel widths/heights that break on resize (`w-[500px]`, `h-[300px]`)
- Inline styles unless absolutely necessary
- Custom CSS files unless Tailwind cannot achieve the effect

### Vanilla CSS Usage

Only use vanilla CSS when:

- Complex animations require `@keyframes` that GSAP cannot handle efficiently
- Specific CSS properties aren't available in Tailwind
- **ALWAYS** use CSS modules or scoped styles to avoid conflicts

### GSAP Animation Guidelines

- **Reference:** [GSAP v3 Docs](https://gsap.com/docs/v3/)
- Use `gsap.to()`, `gsap.from()`, `gsap.fromTo()` for simple animations
- Use `ScrollTrigger` for scroll-based animations
- Keep animations subtle and professional (0.5s - 1.5s duration range)
- Always clean up GSAP instances in `useEffect` cleanup functions:
  ```javascript
  useEffect(() => {
    const tl = gsap.timeline();
    // animation code
    return () => tl.kill(); // REQUIRED
  }, []);
  ```

## Project Structure

```
portfolio-website/
├── .github/
│   └── copilot-instructions.md (this file)
├── public/              # Static assets (images, fonts, favicon)
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/          # Page/section components (if using routing)
│   ├── assets/         # Images, icons, media
│   ├── styles/         # Global CSS (minimal - prefer Tailwind)
│   ├── utils/          # Helper functions, constants
│   ├── hooks/          # Custom React hooks
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Tailwind imports + global styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
└── postcss.config.js   # PostCSS configuration
```

## Key Configuration Files

### `tailwind.config.js`

**Location:** Project root
**Purpose:** Tailwind theme customization, content paths
**Always Check:** Ensure `content` array includes all component files

### `vite.config.js`

**Location:** Project root
**Purpose:** Vite build configuration, plugins, aliases
**Common Settings:**

- `resolve.alias` for path shortcuts
- `base` for deployment path

### `package.json`

**Location:** Project root
**Critical Fields:**

- `dependencies`: React, GSAP, production libraries
- `devDependencies`: Vite, Tailwind, build tools
- `scripts`: Build commands

## Component Development Standards

### File Naming

- Components: PascalCase (`HeroSection.jsx`, `ProjectCard.jsx`)
- Utilities: camelCase (`formatDate.js`, `scrollToTop.js`)
- Styles: kebab-case (`custom-animations.css`)

### Component Structure Template

```jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ComponentName({ prop1, prop2 }) {
  const elementRef = useRef(null);

  useEffect(() => {
    // GSAP animations with cleanup
    const animation = gsap.to(elementRef.current, {
      opacity: 1,
      duration: 1,
    });

    return () => animation.kill();
  }, []);

  return (
    <section className="p-8 md:p-16 bg-black text-white">
      <div ref={elementRef} className="max-w-6xl mx-auto">
        {/* Content */}
      </div>
    </section>
  );
}
```

### Responsive Design Pattern

```jsx
// Always include mobile-first responsive classes
<div
  className="
  flex flex-col md:flex-row 
  gap-4 md:gap-8 
  p-4 md:p-8 lg:p-12
  text-sm md:text-base lg:text-lg
"
>
  {/* Content */}
</div>
```

## Validation Checklist

Before considering any component complete, verify:

1. **Responsive Design:** Test at 320px, 768px, 1024px, 1920px widths
2. **Color Compliance:** Only black/white/gray tones used
3. **Animation Smoothness:** All GSAP animations have cleanup functions
4. **Accessibility:** Semantic HTML, proper heading hierarchy, alt text on images
5. **Performance:** No unnecessary re-renders, images optimized
6. **Tailwind-First:** Vanilla CSS only used when necessary
7. **No Hard-Coded Positions:** Avoid `absolute`, `fixed` with pixel values
8. **Flexible Spacing:** Use Tailwind spacing scale, not fixed pixels

## Testing & Quality Assurance

### Manual Testing Steps

1. Open browser DevTools
2. Toggle device toolbar (responsive mode)
3. Test all breakpoints: 375px, 768px, 1024px, 1440px
4. Check console for errors/warnings
5. Test all interactive elements (buttons, links, forms)
6. Verify animations don't cause layout shifts

### Build Validation

```bash
# Run production build
npm run build

# If successful, preview it
npm run preview

# Check build output in /dist folder
ls -la dist/
```

**Expected Output:** Clean build with no errors, all assets in `/dist/assets/`

## Dependencies & Versions

Check `package.json` for exact versions. Common dependencies:

- `react` & `react-dom`: UI framework
- `gsap`: Animation library
- `tailwindcss`: Utility-first CSS
- `vite`: Build tool

**Adding New Dependencies:**

```bash
npm install <package-name>
# Server will auto-restart due to HMR
```

## Important Reminders

1. **Trust These Instructions:** Only search for additional information if these instructions are incomplete or incorrect
2. **No Server Restarts:** Changes auto-reload - don't run `npm run dev`
3. **Tailwind First:** Always attempt Tailwind solution before custom CSS
4. **Responsive Always:** Every component must work on mobile and desktop
5. **Grayscale Only:** Strict adherence to black/white/gray color scheme
6. **Clean Up Animations:** Every GSAP animation needs a cleanup function
7. **Flexible Layouts:** Use relative units and Tailwind spacing, avoid hard-coded pixels
8. **Professional Feel:** Subtle animations, clean code, elegant design

**Remember:** Development server is already running. Focus on writing clean, responsive, animated components that follow the design system.
