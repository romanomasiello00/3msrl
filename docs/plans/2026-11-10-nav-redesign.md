# Header Navigation Capsules Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the ornate nav buttons and segmented language control with Italianno capsules (liquid hover, gold star + double rule) and an expanding-capsule language dropdown, per `2026-11-10-nav-redesign-design.md`.

**Architecture:** Pure CSS component classes in `src/styles.css` (`@layer components`), consumed by `Header.tsx` and a rewritten `LanguageSwitcher.tsx`. Active state via TanStack Router `activeProps`. Dropdown is React state + CSS grid rows, no new dependency.

**Tech Stack:** React 19, TanStack Router/Start, Tailwind v4 (`@layer components`), Google Fonts (Italianno). No test runner exists in this repo; verification is build + typecheck + lint + headless-Chrome screenshots. Adding vitest for a styling change is out of scope (YAGNI).

---

### Task 1: Load Italianno

**Files:** Modify `src/routes/__root.tsx` (Google Fonts `href`).

Step 1: Append `&family=Italianno` before `&display=swap`.
Step 2: `node_modules/.bin/tsc --noEmit` → no errors.

### Task 2: Capsule CSS

**Files:** Modify `src/styles.css`.

Step 1: Add `--font-nav: "Italianno", "Nothing You Could Do", cursive;` to `@theme inline`.
Step 2: Inside `@layer components` add `.nav-pill`, `.nav-pill-star`, `.nav-pill-label`, hover/active/focus rules, liquid `::before/::after`, and `.lang-pill`, `.lang-pill-trigger`, `.lang-pill-more`, `.lang-pill-item` rules (values from the design doc; copy from the approved mockup).
Step 3: Add reduced-motion override for the new classes.

### Task 3: Header

**Files:** Modify `src/components/Header.tsx`.

Step 1: Replace `linkCls` with a `NavPill` component: `<Link className="nav-pill" activeProps={{ className: "nav-pill is-active" }} activeOptions={{ exact: true }}><span class="nav-pill-star">✦</span><span class="nav-pill-label">{label}</span></Link>`.
Step 2: Use `NavPill` for desktop (left 3, right 2) and for the mobile list (`block w-full text-center`).
Step 3: Mobile: `<LanguageSwitcher expanded />`.

### Task 4: Language switcher

**Files:** Rewrite `src/components/LanguageSwitcher.tsx`.

Step 1: `NAMES: Record<Locale,string> = { en: "English", it: "Italiano", es: "Español" }`.
Step 2: `open` state; trigger button with `aria-expanded`, chevron svg; listbox with the other locales as `role="option"` buttons; `expanded` prop forces open and hides the trigger chevron.
Step 3: Close on outside pointerdown and Escape (one `useEffect`, only while open).

### Task 5: Verify

Step 1: `node_modules/.bin/tsc --noEmit`, `node_modules/.bin/eslint src/components src/routes/__root.tsx src/styles.css`.
Step 2: `node_modules/.bin/vite build` succeeds.
Step 3: `node_modules/.bin/vite dev` + headless Chrome screenshots at 1440 and 390 px (desktop header, mobile overlay). Fix anything that differs from the mockup.
Step 4: Commit `feat: redesign header nav as Italianno capsules with language dropdown` with the two docs.
