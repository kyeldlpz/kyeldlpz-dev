# Kzyrell Dela Paz — Portfolio

An editorial engineering portfolio built with Next.js App Router, React, TypeScript, and plain CSS.

## Customize the first build

- Edit `data/portfolio.ts` to change the name, introduction, links, disciplines, projects, and timeline.
- Replace the original visual treatments in `components/ProjectVisual.tsx` with your final project screenshots when ready.
- Keep final images in `public/projects/` and reference them from the project data if the visual component is changed to use `next/image`.
- Adjust the visual system in `app/globals.css`; the main palette and typography tokens are at the top of the file.

Run `npm run dev` for development. Run `npm run build` to generate the static `out/` folder, then use `npm run preview` to inspect that export locally.

The liquid-chrome hero is an original canvas treatment inspired by the supplied reference direction. It pauses when off-screen and responds to reduced-motion preferences.
