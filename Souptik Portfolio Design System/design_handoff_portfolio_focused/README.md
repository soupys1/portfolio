# Handoff: Portfolio — "Focused Mix" Redesign

## Overview
This is a visual redesign of **souptik sinha's portfolio** (repo: `soupys1/portfolio` — React 19 + Vite + Tailwind + framer-motion). It keeps the existing **dark, monochrome** identity but reworks the layout and voice into a tighter, more editorial, *work-forward* direction — distilled from three reference portfolios:

- **Dash Creative** → light-**italic emphasis** inside large display headlines, and a work list of **title → one-line description → arrow** rows.
- **Parinaz Kassemi** → **all-lowercase** voice, **numbered navigation** (`01 work / 02 about / 03 contact`), and **live timezone clocks**.
- **Rick Allan** → calm, dark creative-director confidence; minimal chrome.

The redesign is the same site, restyled — not a new IA. The section order stays: **Nav → Hero → Selected Work → About → Contact → Footer**.

## About the Design Files
The files in `reference/` are a **design reference built in HTML/React (Babel-in-browser)** — a prototype showing the intended look and behavior, **not production code to copy verbatim**. Your task is to **recreate this design inside the existing repo** using its established stack: **Tailwind utility classes + framer-motion**, matching the current component structure in `src/components/`. Lift exact values (colors, type, spacing, copy) from this README; adapt the implementation to the repo's patterns.

- `reference/index.html` — page shell + global CSS (tokens, keyframes, responsive rules).
- `reference/app.jsx` — all sections as React components (Nav, Hero, Work, About, Contact, Footer) + the `useClock` hook and the cursor-follow reveal. Read this for exact markup, inline styles, and copy.

## Fidelity
**High-fidelity.** Colors, typography, spacing, copy, and interactions are final. Recreate pixel-faithfully with Tailwind + framer-motion. Where the reference uses inline styles, translate to Tailwind utilities (or `style={{}}` for one-off fluid `clamp()` values).

---

## Design Tokens

These already exist in the repo's `src/index.css` / Tailwind theme — reuse them; don't invent new ones. There is **no chromatic accent** — contrast *is* the accent.

**Color**
| Token | Value | Use |
|---|---|---|
| canvas | `#000000` | page background |
| ink | `#ffffff` | primary text, buttons |
| body gray | `#a1a1aa` (zinc-400) | body copy, descriptions |
| translucent white ladder | `rgba(255,255,255, .05 / .10 / .20 / .30 / .40 / .50 / .60 / .70 / .80 / .90)` | borders, hovers, text tiers, glass |
| text gradient | `linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)` | big display headings |

Tailwind for the gradient heading: `bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent`.

**Type**
- Family: **Inter** (already loaded). Mono: `ui-monospace, SFMono-Regular, Menlo, "Roboto Mono", monospace`.
- Display weights: **900** (black) for primary words; **300 italic** for the emphasized word (the signature contrast). Section titles **800**. Body **400**.
- Tracking: display `-0.035em`; the italic word `-0.02em`; mono labels `+0.04em`.
- Fluid sizes (`clamp`): hero `clamp(3rem, 11vw, 10rem)`; contact headline `clamp(2.6rem, 9vw, 8rem)`; work item title `clamp(1.7rem, 4.6vw, 3.4rem)`; about statement `clamp(1.4rem, 3.2vw, 2.4rem)`; section h2 `clamp(2rem, 6vw, 3.5rem)`.
- Line-heights: hero `0.92`; body `1.6`; about statement `1.34`.
- **Mono labels are lowercase**, 12px, `letter-spacing:.04em`, color `white/50`, `font-variant-numeric: tabular-nums`.

**Casing — IMPORTANT:** This redesign is **all lowercase** (including the wordmark and nav). Write copy in lowercase rather than relying on `text-transform`, so screen-reader output stays natural. Keep tech names readable (`react`, `next.js`, `flask`).

**Spacing & layout**
- Content rail: `max-width: 1400px; margin: 0 auto; padding: 0 48px` (`24px` ≤900px).
- Section vertical padding: `130px` top/bottom.
- 8px rhythm otherwise.

**Radius / shadow / motion**
- Radius: `12px` (thumbnails), `14px` (cursor reveal), `99px` (pill button/dots).
- Shadow (cursor reveal/cards): `0 25px 50px -12px rgba(0,0,0,0.6)`.
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)` → framer array `[0.4, 0, 0.2, 1]`.
- Entrance: fade + **26px** rise, `duration 0.8s`, staggered `index * 0.08s`.

---

## Screens / Views

Single page. Fixed navbar over a full-height hero, then stacked sections separated by `1px solid white/10` top borders.

### 1. Navbar (`src/components/Navbar.jsx`)
- **Layout:** fixed, full width, `z-50`, height `74px`, rail-padded. Three groups via flex `justify-between`: wordmark / center links / clock+status.
- **Left:** wordmark `souptik sinha` — `#fff`, weight 600, `-0.01em`, 15px, links to `#top`.
- **Center (`.nav-links`, hidden ≤900px):** three links, `gap:40px`, each is mono 12px showing a dim index + label:
  - `01 work` → `#work`, `02 about` → `#about`, `03 contact` → `#contact`.
  - Index number colored `white/30`; label `white/60` → `#fff` on hover (200–300ms).
- **Right (`.nav-time`):** `ind HH:MM` (live, Asia/Kolkata) + a `6px` white dot (gentle float) + `available`. Hide the `ind HH:MM` span ≤560px.
- **Scroll state:** when `scrollY > 24`, fade in `background: rgba(0,0,0,.55)`, `backdrop-filter: blur(14px)`, and a `1px` `white/10` bottom border. Transition `.4s`.

### 2. Hero (`src/components/Hero.jsx`)
- **Layout:** `position:relative; min-height:100vh`, flex column centered, `overflow:hidden`. Content in the rail, `padding-top:110px`.
- **Backdrop (3 layers, absolute):**
  1. Radial glow: `radial-gradient(circle at 50% 44%, #151515 0%, #000 60%)`.
  2. Grid overlay: `linear-gradient(white/.05 1px, transparent 1px)` + the 90° version, `background-size:72px 72px`, `opacity:.4`, masked by `radial-gradient(circle at 50% 44%, #000 0%, transparent 68%)`.
  3. 4 "motes": `4px` dots, `white/30`, each `animation: float 6s ease-in-out infinite` with staggered delays at scattered positions.
- **Eyebrow (mono row, `margin-bottom:38px`):** `full-stack developer  /  selected work — 2026  /  ind HH:MM  lon HH:MM  nyc HH:MM`. Slashes `white/20`; clocks `white/40`, **live** (see hook).
- **Headline (`<h1>`):** three stacked blocks, `line-height:.92`, `letter-spacing:-0.035em`, all using the white→zinc gradient clip:
  - `crafting` — weight **900**
  - `digital` — weight **300**, `font-style:italic`, `letter-spacing:-0.02em`  ← the signature contrast
  - `experiences` — weight **900**
- **Sub row (flex, `space-between`, `align-end`, `margin-top:54px`):**
  - Left (`max-width:460px`): `i'm souptik sinha — a developer building modern, impactful web applications where ` + `<em>` `engineering meets craft` `</em>` (`em` colored `white/90`, italic). Body `clamp(1rem,2.2vw,1.2rem)`, `zinc-400`, line-height 1.6.
  - Right: mono link `view selected work →`, `#fff`, `border-bottom:1px solid white/30`, `padding-bottom:8px`.

### 3. Selected Work (`src/components/Projects.jsx`)
Replaces the old card grid with a **numbered index** (the centerpiece).
- **Header (flex baseline, `space-between`):** `selected work` (h2, weight 800, `-0.025em`) + mono `03 projects` on the right.
- **List:** top border `white/10`; each row separated by `1px white/10`. Each row is an `<a>` with `display:grid; grid-template-columns: 56px 1fr auto; gap: clamp(16px,3vw,48px); align-items:start; padding: clamp(26px,3.6vw,46px) 0`.
  - **Col 1:** mono index `01/02/03`, 13px, `white/40`, `padding-top:10px`.
  - **Col 2:** title block —
    - title: `clamp(1.7rem,4.6vw,3.4rem)`, weight 800, `-0.03em`, `#fff`.
    - description: `margin-top:14px`, `max-width:460px`, 14.5px, line-height 1.55, `zinc-400`.
  - **Col 3:** mono `year` (`white/40`) + arrow `→` (`white/40`), `padding-top:10px`.
- **Hover behavior (per row):**
  - The hovered row stays `opacity:1`; **all other rows dim to `opacity:0.3`** (`transition:.4s`).
  - Hovered row's title **and** description slide right `translateX(16px)` (desc delayed `.03s`).
  - Arrow turns `#fff` and nudges `translateX(6px)`.
- **Cursor-follow image reveal (desktop only):** a `position:fixed` card (`width:clamp(260px,24vw,400px)`, `aspect-ratio:16/10`, radius 14, `1px white/20` border, the deep shadow) that follows the cursor and cross-fades to the hovered project's screenshot. `opacity:0` when no row active. **Hide ≤900px** and instead show an inline thumbnail under each row (`.work-thumb`, full-width, radius 12, `1px white/10`).
- **Content (exact copy):**
  | # | title | description | year | image |
  |---|---|---|---|---|
  | 01 | `ml football predictions` | `full-stack ml app predicting match outcomes — a python flask backend serving the model, react front end for live stats.` | 2025 | `football.png` |
  | 02 | `joinahack` | `social platform to showcase projects and find hackathon teammates — realtime messaging, jwt auth, supabase + postgres.` | 2024 | `joinahack.png` |
  | 03 | `converso` | `ai learning app with personalised real-time voice tutors, built on next.js and vapi with a responsive, accessible ui.` | 2024 | `converso.png` |

### 4. About (`src/components/About.jsx`)
- **Layout:** rail, `display:grid; grid-template-columns: minmax(0,1.55fr) minmax(0,1fr); gap: clamp(40px,6vw,100px)`. Collapses to 1 column ≤900px. Top border `white/10`.
- **Left:** mono eyebrow `02 — about` (`margin-bottom:38px`), then a large statement, `clamp(1.4rem,3.2vw,2.4rem)`, weight 500, line-height 1.34, `-0.02em`, color `white/90`:
  `i design and build at the seam where ` `<em>`engineering meets craft`</em>` ` — from python and flask backends serving ml models to responsive, accessible react interfaces. i care about the details that make software feel ` `<em>`considered`</em>` `.`  (the two `<em>` words are italic, `#fff`.)
- **Right:** a definition list, top border `white/10`, each row `grid-template-columns:96px 1fr; padding:18px 0; border-bottom:1px white/10`. Mono key `white/40`, value `white/80` 15px:
  - `currently` → `building full-stack products`
  - `focus` → `web apps · ml · real-time`
  - `stack` → `react · next.js · python · flask`
  - `based in` → `india — open to remote`

### 5. Contact (`src/components/Contact.jsx`)
- **Layout:** rail, top border `white/10`, `padding:130px 0 110px`.
- Mono eyebrow `03 — let's connect` (`margin-bottom:30px`).
- **Headline (`<h2>`):** `clamp(2.6rem,9vw,8rem)`, `-0.035em`, gradient clip: `let's build ` (weight 900) + `something` (weight **300 italic**).
- **Sub row (flex `space-between`, `align-end`, `margin-top:64px`):**
  - Left: pill button `send me a message →` — mono 13px, `#fff`, `padding:16px 26px`, `border:1px white/30`, `border-radius:99px`; hover fills `white/10`. Links to `mailto:hello@souptik.dev`.
  - Right (`min-width:280px`): social rows, each `grid-template-columns:94px 1fr auto; padding:12px 0; border-bottom:1px white/10`; mono key `white/40`, value `white/70`→`#fff` on hover, trailing arrow:
    - `email` → `hello@souptik.dev` (`mailto:`)
    - `github` → `github.com/soupys1`
    - `linkedin` → `in/souptik-sinha`
    - `dribbble` → `@souptik`
  *(Swap to the real handles/links — placeholders shown.)*

### 6. Footer (`src/components/Footer.jsx`)
- Top border `white/10`, `padding:30px 0`, rail. Flex `space-between`, mono:
  - `© 2026 souptik sinha`
  - `back to top ↑` (link `#top`, `white/60`→`#fff`)
  - `designed & built with care`

---

## Interactions & Behavior

**Live clocks** — one `setInterval`-driven hook, shared by Nav + Hero:
```jsx
import { useState, useEffect } from 'react';
export function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}
export const fmt = (now, tz) =>
  now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: tz });
// zones: ind = 'Asia/Kolkata', lon = 'Europe/London', nyc = 'America/New_York'
```

**Entrance motion (framer-motion)** — replace the reference's CSS keyframe with proper variants:
```jsx
const rise = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: i * 0.08 },
  }),
};
// usage
<motion.div variants={rise} custom={i} initial="hidden"
  whileInView="show" viewport={{ once: true, margin: '-12%' }} />
```
Honor reduced motion with framer's `useReducedMotion()` → skip `y`/stagger when true.

**Cursor-follow reveal (framer-motion, desktop):**
```jsx
const mx = useMotionValue(0), my = useMotionValue(0);
const x = useSpring(mx, { stiffness: 300, damping: 30 });
const y = useSpring(my, { stiffness: 300, damping: 30 });
// on the <section> onMouseMove: mx.set(e.clientX); my.set(e.clientY);
<motion.div
  style={{ x, y, translateX: '-50%', translateY: '-50%' }}
  className="fixed left-0 top-0 z-40 pointer-events-none ..."
  animate={{ opacity: active !== null ? 1 : 0 }}>
  {projects.map((p, i) => (
    <motion.img key={i} src={p.image} animate={{ opacity: active === i ? 1 : 0 }}
      className="absolute inset-0 h-full w-full object-cover" />
  ))}
</motion.div>
```
Gate the whole reveal behind a `matchMedia('(pointer:fine)')` / `min-width:900px` check; on touch/mobile render the inline `.work-thumb` instead.

**Nav scroll state:** track `scrollY > 24` with a passive scroll listener (or framer `useScroll`), toggling the blur/background/border classes.

**Hover states summary:** nav links + social rows `white/60-70 → #fff`; work rows dim siblings to `0.3` + slide active `16px`; pill button fills `white/10`; arrows brighten + nudge.

**Responsive:**
- ≤900px: hide center nav links and cursor reveal; show inline work thumbnails; collapse About to 1 column; rail padding 24px. (Add a mobile menu if the repo already has one — keep the numbered lowercase style.)
- ≤560px: hide the nav `ind HH:MM`; tighten hero line-height to `0.96`.

## State Management
- `useClock()` → ticking `Date` (Nav, Hero).
- `Projects`: `active` (hovered index | null) for dim/slide/reveal; two `MotionValue`s for cursor position.
- `Navbar`: `scrolled` boolean.
No data fetching — project data is static (keep it in `src/data` / a `projects` array; shape: `{ n, title, desc, year, image, href }`).

## Assets
Existing project screenshots (already in the repo): `football.png`, `joinahack.png`, `converso.png`. Shown sharp, `object-fit:cover` inside the 16:10 reveal card and full-width inline thumbnails. No new assets required. Inter + the system mono stack only.

## Files
- `reference/index.html` — shell, design tokens (`:root`), keyframes (`dsRise`, `float`), and all responsive rules. Mirror these into `src/index.css` / Tailwind theme where not already present.
- `reference/app.jsx` — the full React reference: `Nav`, `Hero`, `Work`, `About`, `Contact`, `Footer`, `useClock`, `fmt`, cursor reveal, exact copy and inline styles. **Primary source of truth for layout and content.**

## Implementation order (suggested)
1. Confirm tokens in `src/index.css` / `tailwind.config` (gradient util, white-alpha ladder, mono family).
2. Add `useClock` hook + a shared `rise` motion variant.
3. Navbar (numbered lowercase links + clock/status + scroll blur).
4. Hero (backdrop layers, italic-emphasis headline, clock eyebrow).
5. Projects → numbered work index + cursor reveal + mobile thumbs.
6. About + Contact (lowercase, italic emphasis, mono detail/social rows).
7. Footer; then a pass for reduced-motion + responsive breakpoints.
