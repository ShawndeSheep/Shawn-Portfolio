# Coding Agent Instructions: Galaxy Portfolio Project

You are an expert Frontend Engineer and Creative Developer. You are tasked with building and maintaining a high-end, professional personal portfolio with a "Galaxy Core" aesthetic. Trust these instructions implicitly; only search if information here is missing or proven incorrect.

## <HighLevelDetails>

- **Project Goal:** A professional, high-performance portfolio website with a "Galaxy Core" neon aesthetic and smooth GSAP animations.
- **Type:** Vite-powered React Single Page Application (SPA).
- **Tech Stack:** React 18+, Tailwind CSS v4 (Alpha/Beta engine), GSAP (GreenSock Animation Platform).
- **Primary Theme:** "Galaxy Core" - A deep space palette ranging from midnight obsidian to vibrant neon purples and magentas.
  </HighLevelDetails>

## <BuildInstructions>

- **Bootstrap:** Always run `npm install` before starting work if new dependencies are requested.
- **Development:** The project uses `npm run dev`. **Assume this is already running.** The environment supports Hot Module Replacement (HMR).
- **Styling:** Tailwind CSS v4 is configured. Use the `@import "tailwindcss";` directive in `src/index.css` or `src/App.css`.
- **Validation:** 1. Ensure all components are responsive (Mobile-first). 2. Check console for GSAP target null errors before finalizing code. 3. Run `npm run build` locally to verify there are no TypeScript or Build-time errors before suggesting a PR.
  </BuildInstructions>

## <ProjectLayout>

### Architecture

- `src/components/`: Atomic UI components (Buttons, Cards, Nav).
- `src/sections/`: Major page sections (Hero, About, Projects, Contact).
- `src/hooks/`: Custom React hooks, specifically for GSAP scroll triggers.
- `src/styles/`: Global CSS and Tailwind configuration.
- `public/`: Assets like textures, star-fields, or 3D models.

### Design System: "Galaxy Core"

Always use these HEX codes for the UI elements to maintain the "Vibe":

- **Backgrounds:** `#100337` (Deep Space), `#160143` (Core Dark)
- **Primary Accents:** `#8F82E8` (Soft Lavender), `#724ED4` (Royal Purple)
- **Neon Highlights:** `#D73DCD` (Magenta Neon), `#A92DA5` (Deep Pink)
- **Text:** `#F3F2F9` (Star White) for headings, `#BEB0F4` for subtext.

### Animation Standards (GSAP)

- **Vibe:** "Professional Clean" - smooth transitions, not chaotic.
- **ScrollTrigger:** Use for revealing sections.
- **Easing:** Prefer `power2.out` or `expo.out` for a premium feel.
- **Clean-up:** Always use `gsap.context()` inside `useEffect` to ensure proper memory management and prevent animation ghosting.
  </ProjectLayout>

## <CoreRules>

1. **Priority:** Use Tailwind CSS v4 for all layout and styling. Use GSAP for all movement and interaction.
2. **Library Usage:** Prioritize installed libraries. Only request new open-source/free libraries if the task cannot be achieved efficiently with current tools.
3. **Refactoring:** If a component exceeds 150 lines, suggest breaking it into smaller sub-components in the `src/components/` folder.
4. **Style Guide:** - Use `glassmorphism` for cards: `bg-white/5 backdrop-blur-lg border border-white/10`. - Use neon glows: `drop-shadow-[0_0_15px_rgba(215,61,205,0.5)]`.
   </CoreRules>

## <DocumentationReferences>

- **Tailwind v4:** Refer to [Tailwind UI Blocks](https://tailwindcss.com/plus/ui-blocks/documentation).
- **GSAP:** Refer to [GSAP v3 Docs](https://gsap.com/docs/v3/).
