# Vogue Dental Aesthetics — frontend concept

A four-page responsive Next.js App Router demo using Tailwind CSS and AOS.

Run `npm install`, then `npm run dev`. Open http://localhost:3000. On Windows PowerShell, use `npm.cmd install` and `npm.cmd run dev` if script execution is restricted. Use the npm script rather than calling `next dev` directly; npm adds the local Next.js executable to PATH.

`npm run build` validates the production build. `npm start` serves it.

Pages: Home (7 content sections), About (5), Services (6), Contact (3). A shared full-screen closing/footer follows the content on every page; Home has 8 sections including that footer.
Interactions: mobile navigation, an auto-playing three-slide hero with previous/next, slide selectors and pause controls, treatment tabs, before/after range control, testimonial navigation, validated demo booking form, and FAQ accordion.

No backend is connected. Booking details are neither sent nor stored. AI-generated imagery, simulated results, testimonials, specialist profiles, opening hours, and map are explicitly illustrative. Replace these with approved clinic material before launch. All seven images are optimized WebP assets served locally from `public/images/`; no external image service is required. The generation prompts are recorded in `public/images/generation-prompts.json`.

The palette is olive green `#5A712F`, black, and warm white, with heavier small text. Every page shares a fixed navigation/contact bar and a full-screen closing/footer. Section height is fixed to `100svh`, with compact layouts for shorter screens. Branches draw in on section entry, circular outlines breathe, and rounded image frames reveal on scroll. Reduced-motion preferences are respected.

The official Instagram handle supplied in the brief is linked in the contact bar and footer. Phone, WhatsApp, email, and street address are omitted because they could not be confirmed from Instagram.
