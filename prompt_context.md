1. Project Identity & Aesthetic

Persona: Expert Fullstack Developer and AI Engineer. The site should bridge the gap between robust software engineering and cutting-edge AI integration.

The Vibe: "Clean Neon"

Base: Deep, professional dark mode.

Accents: Vibrant neon glows purple neons used sparingly for focus points, buttons, and hover states.

Constraint: Avoid "chaotic" cyberpunk. This is a professional portfolio. It must remain readable, accessible, and structured. High contrast, clean lines, subtle glows.

Typography: Modern Sans-Serif for body/headers (e.g., Inter, Roboto). Monospace fonts (e.g., Fira Code, JetBrains Mono) for code snippets, tags, or "AI" technical elements.

2. Tech Stack & Environment

The code already run on npm run dev which is hot reload, so no need to rerun npm run dev or such command to restart the project again.

Framework: React.js (Vite/Next.js structure assumed).

Styling: Tailwind CSS.

Use utility classes for 95% of styling.

Animation: GSAP (GreenSock Animation Platform).

Library: @gsap/react (use the useGSAP hook).

Core Plugins: ScrollTrigger (likely for section reveals).

3. Development Guidelines (Vibe Coding Mode)

When generating code or suggesting changes, adhere to these rules:

A. Animation Philosophy (GSAP)

Smooth > Flashy: Animations should feel "expensive" and fluid.

Entry: Elements should fade in, slide up slightly, or stagger in. Avoid jarring "pop-ins."

Interactions: Micro-interactions on hover (buttons glowing, cards lifting) are essential.

Performance: Use transform and opacity for animations to avoid layout thrashing.

Pattern:

useGSAP(() => {
gsap.from(".element", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" });
}, { scope: containerRef });

B. Component Structure

Functional Components: Use modern React hooks (useRef, useEffect, useState).

Clean Code: Keep logic separate from UI where possible.

Responsive: Mobile-first approach. Ensure the "Neon" effects don't break mobile layouts (e.g., overflow issues with glow effects).

4. Section Strategy (Dynamic)

Current Mode: The user will guide the build section-by-section.

Instruction: Do not assume content. Wait for the user to define the specific content (Hero, About, Stack, Projects) before generating the full code for that section.

Consistency: Ensure the "Neon" glow effects and GSAP triggers are consistent across different sections to maintain flow.

5. Tone of Voice (Content)

Confident, technical, but concise.

Avoid fluff. Speak like an engineer solving problems.

End of Context
