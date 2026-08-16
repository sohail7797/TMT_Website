# Client Quote / Proposal Deck — Standard Format

How The Mahir Tech builds a client proposal. Follow this and every quote comes out
consistent, on-brand, and defensible in front of a government or enterprise buyer.

Reference build: `public/quotes/faisalabad-public-transport/index.html`
(Faisalabad Public Transport, August 2026). Copy it as the starting point.

---

## 1. What gets delivered

| Deliverable | Where | When to use |
|---|---|---|
| **Interactive HTML deck** (primary) | `themahirtech.com/quotes/<slug>` | Always. Send the link to the client. |
| **PDF** | Client clicks *Download PDF* on the deck | Client wants a file / needs to circulate internally. |
| **PPTX** (optional) | Generated separately | Only when the client explicitly needs an editable PowerPoint. |

The HTML deck is the product. PDF and PPTX are fallbacks.

---

## 2. Brand system — do not improvise

**Colours** (exact hex, nothing else):

| Role | Hex |
|---|---|
| Page ground | `#050505` |
| Card / panel | `#0a0a0b` |
| Secondary surface | `#101012` |
| Raised surface | `#16161a` |
| Hairline border | `rgba(255,255,255,.08)` |
| Primary accent (gold) | `#d4a017` |
| Bright gold (highlights) | `#e6b43c` |
| Light gold (small text) | `#edc14f` |
| Heading text | `#fafaf8` |
| Body text | `#b4b4ad` |
| Muted / caption | `#8a8a82` |

**Diagram-only colours** — never page decoration, only inside charts, diagrams and status chips:
`#2fa36b` (live / ok), `#2f6fed` (data), `#c9762f` (warning).

**Type**
- Display / headings: `"Space Grotesk", "Segoe UI Variable Display", "Segoe UI", system-ui`
- Body: `"Inter", "Segoe UI Variable Text", "Segoe UI", system-ui`
- Utility / data: **monospace** (`ui-monospace, "Cascadia Mono", Consolas`) — this carries the
  identity. Eyebrows, IDs, figures, timestamps, frame counter, table headers are all mono.

> For PPTX only: use **Segoe UI + Consolas**. Space Grotesk and Inter are not installed on
> client machines and a missing font breaks the layout.

**Layout rules**
- Single dark theme, committed. Paint every colour explicitly — never rely on a light fallback.
- Gold is an accent: eyebrows, key numbers, one highlighted word per title, icon strokes.
  Never large gold text blocks, never gold backgrounds behind body copy.
- Max 6 bullets per slide, max 14 words per bullet. Over that, split the slide.
- Every slide: gold eyebrow → title → content. Persistent top console bar + left progress rail.

---

## 3. Slide structure

**Section A — company (keep tight, max 7 slides).** The client should understand who we are fast.

1. **Cover** — animated city/network map, headline, four pillar tiles with icons, a device mockup, prepared-for / prepared-by / date
2. **About us** — four stat cards + four capability tiles, two short lines of prose
3. **Vision, mission, values** — three icon cards
4. **What we do** — eight service tiles with icons
5. **Selected work, domain-relevant** — six expandable cards, each with its own SVG thumbnail
6. **Selected work, everything else** — six expandable cards
7. **Public sector credentials + leadership** — credential tiles, isometric server render, two leadership profiles

**Section B — the proposal (the detail lives here).**

8. Requirement snapshot — what the client asked for, grouped by user type, as chips
9. Our understanding — their problems restated, with what each one costs them
10. Solution overview — the products, with 3D phone mockups
11. **Client-facing dashboard mockup** — the showpiece slide
12. Technical feasibility — options compared as a diagram that shows *the difference*
13. Domain approach (GIS / data / integration) — with interactive layer toggles
14. Technology stack — isometric exploded 3D stack, labels both sides
15. System architecture — 5-stage pipeline strip + interactive node diagram
16. Scale, security and ownership
17. Delivery roadmap — Gantt bars with the validation gate flagged
18. MVP validation gate — the single most persuasive slide
19. Phase 1 vs complete — toggle that swaps the feature matrix
20. Commercial framework — cost blocks as tabs
21. Cost engineering — how we keep their running cost down
22. Support model — warranty vs AMC vs SLA
23. Discovery decisions + thank you / contact

Adjust the middle for the domain. Keep the shape.

---

## 4. Reusable components

All hand-authored SVG. No external images, no CDN, no libraries — the file must be
self-contained so it works offline and inside a strict CSP.

| Component | What it does |
|---|---|
| **Icon sprite** | ~30 line icons in one hidden `<svg><defs>`, used via `<use href="#i-name">` |
| **Phone mockups** | `.phone` + inline SVG screen. 3D tilt via `rotateY`, straightens on hover |
| **Dashboard mockup** | Full admin UI: sidebar, live map, KPI tiles, donut, charts, alerts table |
| **Animated vehicles** | `offset-path: path(...)` + `@keyframes run` — markers move along real routes |
| **Ping / pulse** | Expanding circle for live location and active stops |
| **Isometric stack** | Four glassy rhombus plates; hover lifts a plate and highlights its labels |
| **Pipeline strip** | Five stages, big glowing icons, gold connector line between cells |
| **Interactive diagram** | `.node` groups; hover/focus/click fills a detail panel |
| **Layer toggles** | Switch SVG layer groups on/off to show composition |
| **Gantt** | Absolute-positioned bars on a track, with a flag for the key milestone |
| **Toggle / tabs** | Swap a comparison matrix or cost block panes |
| **Project cards** | Thumbnail + title collapsed; click expands the full case detail |
| **Counters** | `data-count` animates up on reveal — **never on years**, they render with a comma |

**Interaction budget:** every slide gets a visual; roughly a third get a real interaction.
More than that and it reads as a toy rather than a proposal.

**Accessibility / robustness:** `prefers-reduced-motion` respected, keyboard nav
(arrows, space, Home/End), visible focus states, print stylesheet for the PDF path.

---

## 5. Hard rules — these protect us commercially

1. **Never invent a price, rate or figure.** Use `[PKR ______]` or `[TBD — confirm after Discovery]`.
   A blank field is safer than a number we later have to revise in front of a government buyer.
2. **Never put internal numbers in a client deck** — internal burn baselines, staffing model,
   margins, office overheads. Those are internal only.
3. **Never attribute work to an individual.** No "led by <name>". All work is
   **The Mahir Tech's**. Team members may appear in the leadership section with their role,
   nothing more.
4. **Never fabricate** client names, metrics, awards, certifications or years of experience.
   Confidential clients are described, never named.
5. **Scope-sensitive features** (anything not yet agreed) are shown as "confirmed in Discovery",
   never as committed.
6. **British English.** Formal, plain, confident. No hype, no exclamation marks, no emoji.
7. **Every deck is `noindex`** and `/quotes/` stays disallowed in `robots.txt`.
   Shareable by link, never on Google.
8. **Date on the cover is the real date** the quote was prepared.

---

## 6. Build and deploy

```
public/quotes/<slug>/index.html     the self-contained deck
next.config.ts                      rewrite /quotes/:slug -> /quotes/:slug/index.html
src/app/robots.ts                   /quotes/ disallowed
```

The deck body is authored as a fragment, then wrapped into a standalone document with:
`<!doctype>`, viewport, `noindex`, title/OG tags, favicon, the **Download PDF** button
(fixed top-right, calls `window.print()` against landscape print styles), and
`@page { size: A4 landscape }`.

Deploy: commit and push to `main`. Coolify builds from the Dockerfile, which already copies
`public/`. **Coolify auto-deploy has not been reliable — check the deploy actually ran**
by fetching `https://themahirtech.com/robots.txt` and confirming the newest changes are live,
rather than assuming the push deployed.

Verify before sending the link:
- `curl -s -o /dev/null -w "%{http_code}" https://themahirtech.com/quotes/<slug>` returns `200`
- the Download PDF button is present
- no placeholder text was left unfilled that should have been completed

---

## 7. Starting a new quote

Give me the requirement — email, RFP, notes, an existing deck, whatever you have. I will
come back with the questions I need answered before writing anything, typically:

- **Client & audience** — organisation, who reads the deck, government or private
- **Scope** — what they asked for verbatim, and anything they hinted at but did not specify
- **Commercials** — which figures we are quoting now vs deferring to Discovery, and what
  is internal-only and must not appear
- **Timeline** — how long, and where the early validation milestone sits
- **Proof** — which of our past projects are most relevant to their sector
- **Confidentiality** — any client or figure that must not be named
- **Deliverable** — link only, or PDF / PPTX as well

Then I build it in this format, with the same visual language: hand-built SVG mockups
of *their* product, isometric 3D elements, animated live data, and interactive diagrams —
sized to the project, never copied wholesale from the last one.
