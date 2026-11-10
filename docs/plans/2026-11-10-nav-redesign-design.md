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
