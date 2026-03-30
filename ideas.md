# Gabi Car Detailing – Design Brainstorm

## Approach 1 – "Forge & Polish" (Industrial Brutalism)
<response>
<text>
**Design Movement:** Industrial Brutalism meets High-End Automotive
**Core Principles:**
- Raw materials aesthetics (concrete, steel, carbon fibre textures)
- Asymmetric layouts with heavy typographic blocks
- Contrast between rough textures and mirror-polished accents
- Information density balanced with dramatic negative space

**Color Philosophy:** Near-black (#0f0f0f) as the foundation — evoking a darkened workshop at night. Yellow (#ffd000) used as a single high-voltage accent, like the glow of a welding arc. Mid-greys (#1a1a1a, #2a2a2a) for surface layering.

**Layout Paradigm:** Staggered columns with oversized section numbers. Hero uses a full-bleed diagonal split. Sections alternate between left-heavy and right-heavy compositions.

**Signature Elements:**
- Hexagonal grid pattern in backgrounds (CSS clip-path honeycombs)
- Thick yellow left-border "rule" on section headings
- Carbon-fibre texture overlay on cards

**Interaction Philosophy:** Interactions feel mechanical — buttons have a "click-down" press effect, hover states reveal hidden details with a sliding panel.

**Animation:** Entrance animations use a fast ease-out (200ms). Counters animate on scroll. Price updates with a number-flip effect.

**Typography System:** `Bebas Neue` for display/headings (all-caps, wide tracking), `Poppins` for body text. Hierarchy: 72px → 48px → 24px → 16px.
</text>
<probability>0.08</probability>
</response>

---

## Approach 2 – "Obsidian Studio" (Dark Luxury Minimalism) ← SELECTED
<response>
<text>
**Design Movement:** Dark Luxury Minimalism — inspired by high-end car showrooms and watch boutiques
**Core Principles:**
- Extreme restraint: every element earns its place
- Gold/yellow as the only warm note in a cold, dark palette
- Geometric precision: hexagons, sharp edges, no unnecessary curves
- Cinematic proportions: tall sections, wide imagery, deliberate pacing

**Color Philosophy:** #0f0f0f is not just black — it's the colour of a darkened showroom floor, reflecting nothing, absorbing everything. #ffd000 is the single beam of a focused spotlight. Greys (#1a1a1a, #2a2a2a) create depth layers like polished obsidian surfaces.

**Layout Paradigm:** Asymmetric hero with large typographic anchor on the left, visual on the right. Sections use a 12-column grid broken intentionally — some elements bleed, some are inset. Sticky navbar with a translucent blur effect.

**Signature Elements:**
- Hexagonal honeycomb SVG pattern as a subtle background texture (low opacity)
- Yellow horizontal rule lines as section dividers
- Oversized section labels (e.g., "01 / USŁUGI") in small caps, yellow

**Interaction Philosophy:** Smooth, deliberate. Hover states use a slow glow (box-shadow with yellow). Buttons have a left-to-right fill animation on hover. Calculator options use card-flip or border-highlight selection.

**Animation:** Framer Motion for entrance animations (fade + translate-Y). Staggered children in grids. Price counter uses spring animation.

**Typography System:** `Poppins` (700/800) for headings, `Inter` (400/500) for body. Yellow accent on key words. Letter-spacing: wide on labels, tight on display text.
</text>
<probability>0.09</probability>
</response>

---

## Approach 3 – "Neon Garage" (Cyberpunk Workshop)
<response>
<text>
**Design Movement:** Cyberpunk Garage — neon-lit underground detailing studio
**Core Principles:**
- Glitch aesthetics with precision engineering
- Layered depth: multiple translucent panels stacked
- Neon glow effects on key UI elements
- Scanline and noise textures for grit

**Color Philosophy:** Deep black base with yellow (#ffd000) as the primary neon, supplemented by electric white highlights. Subtle red (#ff3333) for warnings/urgency. The palette evokes a garage lit by neon signs at 2am.

**Layout Paradigm:** Full-width panels with diagonal cuts (clip-path skew). Overlapping elements create a layered, dimensional feel. Calculator uses a terminal/HUD aesthetic.

**Signature Elements:**
- Neon glow text-shadow on headings
- Diagonal section dividers (skewed backgrounds)
- Scanline overlay texture on hero

**Interaction Philosophy:** Reactive and electric. Hover effects produce neon flicker. Buttons pulse with a glow animation. Form inputs have a neon underline focus state.

**Animation:** CSS keyframe glitch effects on hero text. Neon pulse on CTAs. Fast, snappy transitions (100ms) for a responsive feel.

**Typography System:** `Orbitron` for display (futuristic, geometric), `Rajdhani` for body (technical, condensed). All-caps labels with wide tracking.
</text>
<probability>0.07</probability>
</response>

---

## Decision: Approach 2 — "Obsidian Studio"
Chosen for its premium, timeless quality that positions Gabi Car Detailing as a high-end service provider. The hexagonal motifs directly reference the workshop aesthetic requested, while the dark luxury palette communicates exclusivity and craftsmanship.
