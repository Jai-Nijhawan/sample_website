# DESIGN.md — The Barns Resort

Editorial, earth-toned, cinematic. Every screen should read like a spread in a travel magazine. Luxury is expressed through restraint, scale, real photography, and slow motion — never through ornament.

## Palette (exact — no others)
Warm, muted, of-the-earth. No pure black, no pure white, no gradients, no saturated brand hues.

| Token            | Hex       | Use |
|------------------|-----------|-----|
| `--sand`         | `#F4EEE2` | primary light background (warm paper) |
| `--sand-deep`    | `#EBE3D2` | alternating section / cards |
| `--ink`          | `#211C16` | primary text on light |
| `--espresso`     | `#14110D` | dark sections background |
| `--cream`        | `#F0E9DA` | text on dark |
| `--bronze`       | `#9A7B4F` | primary accent (rules, eyebrows, hovers) |
| `--bronze-soft`  | `#B79A6E` | accent on dark grounds |
| `--sage`         | `#6E7A63` | secondary accent, sparing |
| `--stone`        | `#8B8275` | muted captions / metadata |
| `--line`         | `rgba(33,28,22,0.14)` | hairline rules on light |
| `--line-cream`   | `rgba(240,233,218,0.18)` | hairline rules on dark |

## Type
Two families only. Self-hosted via `next/font/google`.
- **Display — Fraunces** (variable, opsz + soft). Headlines, room names, pull-quotes. Used at huge sizes (clamp 2.5rem → 8rem), tight leading (1.0–1.06), with single italic words as accents. Light/normal weights at large sizes; never heavy.
- **Text — Hanken Grotesk.** Body, nav, buttons, labels, captions. Quiet humanist grotesque.
- **Eyebrows / labels:** Hanken Grotesk, 11–12px, uppercase, letter-spacing 0.18–0.24em, in `--bronze` or `--stone`. Pattern: `EST. BHIMTAL`, `THE SUITES`, `01 — STAY`.
- Never Inter, Poppins, or system-ui as a brand voice.

## Layout
- Editorial **asymmetry** — offset images of varying width/height, columns that break the grid, captions hung in margins. Never three equal cards in a row.
- Generous air: section vertical padding `clamp(6rem, 14vh, 14rem)`. Content max-width ~1320px; text measure ~62ch.
- **Hairline 1px rules** (`--line`) instead of borders/shadows. Border-radius 0–2px only. No drop shadows on cards.
- Numbered sections (01, 02, 03…) and small captions give an editorial, curated feel.
- Mobile: everything reflows to a single elegant column; type scales down via clamp; horizontal-scroll sections become swipe or stack.

## Motion (GSAP + ScrollTrigger + Lenis)
Slow, weighted, intentional. Easing `power3.out` / `expo.out`, durations 0.8–1.4s. Nothing bouncy, nothing fast.
- **Preloader:** logo/wordmark mask reveal + subtle counter, ~1.2s, then lifts to expose the hero.
- **Headline reveals:** line-by-line mask (translateY 100%→0, staggered) on scroll-in.
- **Image reveals:** clip-path wipe + inner scale 1.12→1 inside `overflow:hidden` frame as it enters.
- **Hero:** background video with gentle parallax (media drifts at ~0.9× scroll); fixed nav goes transparent → solid on scroll.
- **Pinned horizontal suites showcase** on home (ScrollTrigger pin + horizontal translate).
- **Marquee strip:** slow continuous "STAY · DINE · UNWIND · EXPLORE".
- **Reviews:** one large serif pull-quote at a time, slow crossfade.
- **Custom cursor** (desktop only): small bronze dot that grows to "VIEW" / "DRAG" over galleries.
- Always honour `prefers-reduced-motion`: content appears, no transforms.

## Imagery
Only the resort's own photography (in `/public/media`). The dusk/night exteriors with string lighting and the A-frame skylit rooms are the signature shots — lead with them. Full-bleed where possible. Never mix in stock or AI imagery; consistency of the real photography is the luxury signal.

## Components keep
Hairline-bordered text "Reserve" button (fills bronze on hover), underline-grow text links, numbered eyebrows, thin vertical dividers, slow image-zoom on hover. No glass cards, no gradient buttons, no icon badges, no emoji.
