# Suraj Ingale — Premium Full Stack Developer Portfolio

A futuristic developer portfolio blending cyberpunk aesthetics, glassmorphism, 3D particle waves, and smooth Framer Motion animations — built with React + Vite, Three.js, and Tailwind CSS v4.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- Portfolio frontend: `artifacts/portfolio/src/`
- Theme & CSS variables: `artifacts/portfolio/src/index.css`
- Section components: `artifacts/portfolio/src/components/`
- Aura-inspired components: `Logo.tsx`, `VoiceWaves.tsx`, `FloatingWaves.tsx`, `ThreeDWave.tsx`, `ParallaxBackground.tsx`
- Vite config (PORT + BASE_PATH): `artifacts/portfolio/vite.config.ts`
- Artifact manifest: `artifacts/portfolio/.replit-artifact/artifact.toml`

## Architecture decisions

- **Design merge approach**: Aura's futuristic design language is overlaid on the portfolio's content and structure — not a full rewrite. Colors, glassmorphism, animations, and 3D backgrounds from Aura are blended with portfolio's own sections/branding.
- **Spotlight hover pattern**: `useSpring` + `useMotionTemplate` radial gradient mask (from Aura Features/HowItWorks) applied to Skills, Projects, About cards for interactive glow on mouse movement.
- **Active nav tracking**: IntersectionObserver watches each section; active pill indicator uses Framer Motion `layoutId="activeNavTab"` spring for smooth slide transitions.
- **Wave layers**: Hero stacks ThreeDWave (Three.js particles) + VoiceWaves (canvas strokes) + scanlines for depth without Spline dependency.
- **Tailwind v4 theme**: Extended with `--color-primary-light` and `--color-primary-dark` tokens for Aura gradient compatibility.

## Product

A premium dark-mode developer portfolio for Suraj Ingale (Full Stack Software Developer). Features: animated boot sequence, 3D rotating tech model, particle wave backgrounds, active-section navbar, spotlight-hover cards, glassmorphism HUD panels, and sections covering About, Experience, Skills, Projects, Architecture, Terminal, and Contact.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
