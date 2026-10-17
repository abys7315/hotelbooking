# Antigravity Master Prompt — The Aurora Resort & Spa

Act as a senior creative developer and web animation engineer. Build a complete, working, premium hotel website inside THIS project folder. Do not create a static mockup or a video-only prototype.

## First: inspect and work locally
- Treat this folder as the project root and work only inside it.
- Inspect the supplied reference boards in `reference_boards/` and the visual-reference crops in `images/`.
- If this folder already contains a project, preserve it and adapt it rather than overwriting working code.
- If no project exists, scaffold a React + Vite + TypeScript app.
- Do not stop after planning. Implement, run, test, and refine the actual website.

## Objective
Create “The Aurora Resort & Spa”, a fictional luxury hotel website with custom-scroll storytelling inspired by an advanced cinematic restaurant website. The reference boards communicate the hotel art direction and scene order; they are not final website screenshots to use as backgrounds. The image crops are visual references only. Do not stretch a collage crop across a whole page or present a storyboard as a real hotel photograph.

## Art direction
- Cinematic luxury hospitality, deep ocean teal and charcoal, warm ivory, forest green, muted gold.
- Large elegant serif headlines paired with clean sans-serif body copy.
- High-quality full-bleed resort imagery, refined navigation, subtle grain, editorial layouts, atmospheric lighting.
- Minimal UI and intentional composition. Avoid generic hotel templates, repetitive cards, basic fade-in-only animations, and excessive rounded boxes.
- Use fictional hotel copy and make it easy to replace later for real clients.

## Core custom-scroll scenes
1. **Aerial arrival:** full-screen pinned hero with resort/coast imagery and scroll-scrubbed image sequence or video. Title, tagline, and scene indicators animate at precise scroll progress.
2. **Entrance reveal:** transform the aerial view into the hotel exterior using a mask, image-sequence transition, or shader when feasible.
3. **Lobby:** pinned cinematic architecture scene with layered parallax and animated editorial text.
4. **Rooms and suites:** a pinned room journey that reveals bedroom, balcony, and ocean view with synchronized room information and an inquiry/booking CTA.
5. **Experiences:** pool, spa, beach, and nature activities using distinct pinned or horizontal-scroll scenes.
6. **Dining:** immersive food photography, elegant typography, and a dining CTA.
7. **Gallery:** horizontal/perspective gallery with working controls and touch support.
8. **Booking finale:** sunset/resort scene revealing a booking inquiry form with check-in, check-out, and guest count.

## Animation implementation
- Use GSAP + ScrollTrigger for pinning, scrubbing, timelines, and reversible scroll animation.
- Use Lenis only if needed and synchronize it correctly with ScrollTrigger.
- Use Canvas image sequences, optimized video scrubbing, clip-path/mask transitions, parallax, SVG, and CSS transforms where appropriate.
- Use WebGL/GLSL only when it materially improves the transition and provide a fallback.
- Scroll up must reverse the animation naturally.
- Prevent pinning jumps and overlapping scroll controllers. Clean up listeners and animation contexts.
- Do not fake a camera journey with only a single background zoom when an actual sequence or video is feasible.
- Respect `prefers-reduced-motion`, support touch devices, and provide a lightweight mobile fallback.

## Images and asset handling
- Treat `images/` and `reference_boards/` as design guidance, not a library of individual production photos.
- Acquire or generate individual, properly licensed images for aerial resort, exterior, lobby, bedroom, balcony, infinity pool, spa, dining, beach, gallery, and sunset scenes.
- Do not use broken URLs, watermarked photos, duplicated images throughout the page, or the reference boards as page backgrounds.
- Prefer local optimized WebP/AVIF files when practical. Organize final assets under `public/images/` and create a simple asset manifest.
- If real individual images cannot be obtained automatically, create a clear asset checklist and use the best available legitimate fallback. Do not claim unavailable assets were downloaded.

## Functional requirements
- Responsive desktop/tablet/mobile layout.
- Working navigation and active section indicators.
- Working room exploration and gallery controls.
- Booking/inquiry form validation and a clear demo submission state.
- No claim that a real reservation was made unless a real booking integration is configured.
- Contact/location/footer content, keyboard access, accessible labels, and visible focus states.
- Configurable hotel content, images, palette, room data, and contact details so this can be customized for paying hotel clients.

## Performance and quality
- Lazy-load offscreen images; avoid decoding hundreds of full-size frames into memory.
- Use responsive image sizes and optimized formats.
- Keep animation smooth on integrated-GPU laptops and mobile devices.
- Test the entire page, reverse scrolling, navigation, form interactions, responsive layouts, reduced-motion behavior, and asset loading.
- Fix runtime/console errors and verify the site actually runs before reporting completion.

## Deliverables
1. A complete running website in this project.
2. Organized source code and local assets.
3. README with exact install/run commands and customization instructions.
4. A brief summary of implemented scenes and any remaining asset/integration limitations.

Final acceptance: this must be a real interactive website with scroll-controlled, reversible cinematic scenes—not a static design, not a collage, and not merely a video.
