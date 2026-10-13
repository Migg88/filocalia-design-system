# Filocalia Design System

Filocalia (from Greek *philokalía*, "love of beauty") is an all-in-one beauty platform. Its core is **beauty education** — makeup, hair, nails and aesthetics courses — complemented by beauty services, business coaching for graduates, digital marketing and content management, and booking management for stylists who tour giving courses ("learning tourism"). Mission: bring beauty to people — accessible, shared and taught, never exclusive or distant.

**Sources.** Built from scratch in this project: the brand brief (palette, Modern Art Nouveau direction) and the logo exploration in `Filocalia Logo Concepts.dc.html` (final = Round 5: Arch symbol + Marcellus SC wordmark). No product codebase, Figma or existing UI was provided, so the UI kit in `ui_kits/platform/` is an original design built from these foundations, not a recreation.

## Index
- `styles.css` — entry point (imports only) → `tokens/` fonts, colors, typography, spacing, effects, base
- `fonts/` — Marcellus, Marcellus SC, Jost (variable + italic), DM Mono 400/500 (all SIL OFL, from Google Fonts)
- `assets/logo/` — SVG symbol (primary + small cut), wordmark, horizontal/stacked lockups (positive/reversed), app icon, avatar, favicon
- `export/` — production logo pack incl. PNGs and favicon.ico
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives
  - actions: **Button**, **IconButton**
  - forms: **Input**, **Select**, **Checkbox**, **Radio**, **Switch** (+ internal Field helper)
  - display: **Card**, **Badge**, **Tag**
  - navigation: **Tabs**
  - feedback: **Dialog**, **Toast**, **Tooltip**
- `ui_kits/platform/` — interactive web-platform prototype (catalogue, course, booking, confirmation, tour calendar)
- `SKILL.md` — agent-skill entry

## CONTENT FUNDAMENTALS
- **Voice:** a warm, expert teacher. Generous, encouraging, specific; never exclusive, never salesy luxury-speak.
- **Person:** speak to the reader as *you*; Filocalia is *we*. "We’ll send your booking here." "You’ll leave with a full kit."
- **Casing:** sentence case for everything — headings, buttons, tabs. Small caps / uppercase only via the Mono label style (eyebrows, metadata) and Marcellus SC section openers.
- **Buttons:** verb first, 1–3 words: "Enrol now", "Book a seat", "See dates". Not "Submit" or "Click here".
- **Concrete over adjectives:** "Six weeks · Madrid · kit included" beats "an amazing transformative journey".
- **Inclusive:** no beauty-standard language ("flawless", "fix", "anti-"); talk about skill, care, craft.
- **Bilingual-ready:** primary markets are Spanish/Portuguese-speaking; keep strings short (allow +30% length) and avoid idioms.
- **Emoji:** not used in UI. Use the keystone diamond or Lucide icons instead.
- **Numbers & meta:** middle dot ` · ` separators; dates "14 Nov"; prices "€ 480".

## VISUAL FOUNDATIONS
- **Concept:** Modern Art Nouveau — whiplash curves, botanical forms and arch framing, drawn with consistent line weights and crisp vectors. Rich but never busy: ornament lives in the logo, arch frames and keystone markers; UI chrome stays calm.
- **Colour:** only five hues — Plum #4A2C4F (text, line work, primary actions), Blush #E8B4B8 (soft accent, secondary actions), Deep coral #B4553F (warmth, booking/purchase CTA, errors), Champagne #D4B483 (tiny gilded highlights only — keystones, active markers, success), Nude #F7EDE6 (page). Approx. proportion 55 nude / 25 plum / 12 blush / 6 coral / 2 champagne. UI tints (hover, soft fills, raised/sunken nude) are derived from these five — never new hues. Flat fills, **no gradients**.
- **Contrast:** plum↔nude 10.3:1; plum on blush 6.6:1; plum on champagne 6.0:1; nude on coral 4.2:1 → coral grounds only for large/UI text (buttons, ≥18px). Links are plum with a coral underline.
- **Type:** Marcellus (display, 400 only) for headlines; Marcellus SC for the wordmark and very short section openers; Jost for all UI/body (400, 500 for emphasis/buttons); DM Mono uppercase +0.14em for eyebrows, metadata and badges. Never bold or italicise Marcellus.
- **Spacing:** 4px base — 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. Generous whitespace; content measure ~68ch; container 1200px.
- **Backgrounds:** nude page; plum full-bleed bands for emphasis (hero, footers, testimonial); blush for soft feature blocks. No textures, no patterns, no gradient washes. Photography sits in arch or soft-rect frames.
- **Imagery:** warm, natural light; real students and stylists at work, hands and materials in close-up; skin tones true, not retouched to plastic. Slight warm grade toward nude/blush; no cold blue, no heavy grain, no b&w as default.
- **Corner radii:** xs 4 (checkbox), sm 6 (inputs, tiles), md 10 (cards, toasts), lg 16 (dialogs), pill (buttons, tags, badges), **arch** (full-round top, 6px bottom) for portraits and featured cards — the signature shape.
- **Cards:** nude-raised (#FCF7F3) fill, 1px plum-16% border, radius 10, no shadow at rest; interactive cards lift 2px with shadow-md on hover. Inverse cards are flat plum.
- **Borders & lines:** 1px plum-16% for dividers, 1.5px plum-32% for controls; ornamental lines 2px. Never coloured left-border accents.
- **Shadows:** plum-tinted, soft and low (sm/md/lg). Reserved for raised/interactive things (dialog, toast, hovered card, app icon). No inner shadows.
- **Hover:** solid fills shift one step (plum → #5C3A62, blush → #E0A3A8, coral → #9E4935); transparent elements gain a plum-8% wash. **Press:** plum → #3B2240; no shrink/scale. **Focus:** 2px nude + 2px coral ring; inputs use plum border + blush halo.
- **Motion:** "unfurl" ease cubic-bezier(.22,.61,.36,1); 140 / 220 / 420ms. Fades and short rises (≤4px); no bounce, no spin, no parallax.
- **Transparency & blur:** only the plum 48% modal scrim. No glassmorphism.
- **Layout:** sticky top nav allowed (nude, 1px bottom border). Mobile-first; 44px minimum hit targets.
- **Keystone motif:** a small champagne diamond with plum outline marks active tabs, selected radios, toasts and badge dots. Max one cluster per view.

## ICONOGRAPHY
- **Logo:** use files from `assets/logo/` only; primary symbol at ≥48px, small cut at ≤32px. Clear space = 2× keystone height. Never recolour, redraw or retype the wordmark.
- **UI icons:** no proprietary set exists yet. **Substitution:** [Lucide](https://lucide.dev) via CDN, 1.5px stroke, 18–20px, round caps — matches the brand’s even line weight. Colour = currentColor (plum, or nude on plum).
- No icon font, no PNG icons, no emoji, no unicode pictographs (except × for close and · as separator).
- Do not use beauty clichés (lipstick, scissors, brush, mirror, face profile) as decorative illustration; acceptable only as small functional category icons.

## Intentional additions
- `Field` (forms) — shared label/hint/error wrapper used by Input and Select; not exported as a standalone primitive in docs.
