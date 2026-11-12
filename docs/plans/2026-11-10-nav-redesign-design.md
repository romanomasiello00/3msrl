# Header navigation redesign — design

Date: 2026-11-10. Approved by the owner from the interactive mockup
(https://claude.ai/artifact/EnSr5MwhPKeZdxUrvVD7mB, v3). First shipped as option 8
(Italianno); the owner then switched to option 7 (Fraunces italic) the same day.

## Goal

Replace the ornate-cartouche nav buttons and the segmented EN/IT/ES control in
`src/components/Header.tsx` with a quieter, more interactive capsule system and a
real language dropdown. Hero CTAs are out of scope (second pass).

## Nav item: the capsule

- Typeface: **Fraunces** italic 500 (Google Fonts, variable: `opsz` auto,
  `SOFT 100`, `WONK 1`), 15.5 px, `letter-spacing: .01em`, `line-height: 1.15`,
  no text-transform. Labels stay as translated ("Tequila 1", "Shop", "Storia"...).
- Shape: pill, `border-radius: 999px`, 1 px border `--sand`, padding 9 px 20 px,
  text `--navy`.
- Hover: two liquid layers rise from the bottom (sand, then navy with 70 ms
  delay, 0.6 s ease-out, rounded tops rotated ±3° so the rim looks like a wave);
  text turns `--crema`; a gold `✦` rotates in at the left while `padding-left`
  grows 20 → 28 px; a double gold hairline draws under the label from the centre.
- Active route: no fill, border `--gold`, star and double rule shown, text navy.
  Distinct from hover at a glance.
- Focus-visible: 2 px gold outline, offset 3 px.
- Reduced motion: transitions disabled.

## Language switcher: the expanding capsule

- Same pill. Trigger shows the current language's **native name** in Fraunces
  ("English", "Italiano", "Español") plus a chevron that rotates 180° when open.
- Click: the pill grows downwards (`grid-template-rows: 0fr → 1fr`, 0.5 s) and
  reveals the other two names, separated by sand hairlines; hover row = navy fill,
  crema text. Border turns gold while open. Selecting a row sets the locale,
  closes the pill.
- Closes on outside click and Escape. `aria-expanded`, `role="listbox"`,
  `role="option"`, `aria-selected`.
- Implemented with React state + CSS, not Radix: the morphing border needs the
  menu in-flow inside the pill, not portalled.

## Mobile menu

- Same capsules stacked full-width in the existing crema overlay; same hover and
  active states. Language rendered as the capsule already extended (all three
  names, current one marked).

## Badges

The starred cartouches (hero "A house of tequila, born in Puglia", brand pages
"Coming soon", story "Hecho en México, Imported to Puglia", footer "18+, Drink
responsibly") drop the uppercase Cormorant label for `.badge-label`: the same
Fraunces italic at 17 px (18 px from `md`, 15 px in the footer), sentence case,
weight 400. Solid CTAs (age gate, reserve, contact, shop, 404) keep `.ornate-label`.

## Section names, footer, links and status (second text pass)

Approved from https://claude.ai/artifact/WRR7E6uDyaYJ2BgNTXzSuS (labels: option C text with
option B's double rules).

- `.section-label`: Fraunces italic 500, 14 px, uppercase, `letter-spacing: .2em`, gold-ink
  (`text-gold` on navy), with a 30 px double gold rule on each side. Used for Heritage, The
  story, The founders, Our brands and the footer's Navigation / Connect.
- `.font-signature` (Fraunces italic, SOFT 100 / WONK 1; size and weight from utilities):
  footer tagline 17 px, footer origin line 16 px with `.star-prefix`, "Coming soon" 16 px on
  the brand cards and 15 px on the bottle frames.
- `.signature-link`: footer links (16.5 px) and "Read the story" (18 px) draw the double gold
  rule on hover/focus; the arrow slides 4 px. Works from a `.group` parent.
- Footer columns wrap on narrow screens so the wider labels never overflow.
- Third pass: page-level names (The Collection, Contact, The Expression, Legal, The other
  expressions) use `.section-label`. The product subtitle is a gold `.font-signature` line with a
  star on the product page and 15 px grey italic on the cards. "Photography coming soon" is 14 px
  italic. Solid and outline CTAs (age gate, reserve, contact, 404) use Fraunces italic 17 px
  inside the same cartouche. The now-unused `.ornate-label` rule is removed.
- Left as they were: form labels, tasting-note labels, founder roles, small print under buttons
  and the brand names on the cards (Cormorant italic).

## Ornate frames (bronze variant)

Approved from https://claude.ai/artifact/DszXUpThMC59MKgA8FCjU7 (option B). The cartouche
border-images are drawn in bronze (`--gold-ink`) at about 1.5 px with a clear gap between the
two rules; small frames (buttons, footer badge) use a 14 px border-image width so their lines
are no longer half a pixel. Hover and focus switch to the same geometry in navy. The star
finials grow from 11 px to 22 px (gold, fuller rays) and the inner rules are 1.5 px bronze.
Starred badges get `py-7` so the larger stars do not touch the text; the solid CTA plate is
inset 6 px. The contact card hugs its content (`w-fit`, about 440 px wide) instead of 672 px.
The small star before labels (`.star-prefix`) is unchanged at 9 px.

## Code changes

- `src/routes/__root.tsx`: add `Fraunces` (ital, opsz, wght, SOFT, WONK) to the Google Fonts link.
- `src/styles.css`: `--font-nav` token; `.nav-pill`, `.nav-pill-star`,
  `.nav-pill-label`, `.lang-pill*`, `.badge-label` component classes. Keep `.ornate*` (hero CTAs
  still use them).
- `src/components/Header.tsx`: swap `linkCls` for `.nav-pill`, add star/label
  spans, TanStack `activeProps` for the active state; mobile list uses the same
  component.
- `src/components/LanguageSwitcher.tsx`: rewrite as the expanding capsule with an
  `expanded` prop for mobile.

## Verification

- `bun run build` and `bunx tsc --noEmit` pass; `bun run lint` clean.
- Headless screenshots at 1440 and 390 px: capsules, hover, active, open
  dropdown, mobile overlay.
