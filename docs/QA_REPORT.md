# Verification report — school outreach redesign

Reviewed 27 October 2026. This is a local developer handoff. No production website was changed or published.

## Build and hosting checks

- Root production export: Next.js 16.4.3 webpack build and built-in TypeScript checks pass with React 19.3.1.
- Separate `/physics/` basePath production build passes. It was served and inspected at `/physics/`: stylesheet URLs correctly use `/physics/_next/`, Inter loads, the source table renders, and there is no horizontal overflow.
- The included `out/` is the root export. The subpath build is a verification artifact, not a second public page.
- The source is reusable React with a CSS Module and local font assets; public course data is in `src/physics/course-content.ts`.

## Browser and interaction checks

- Reviewed desktop at 1158px, tablet at 768px, mobile at 390px, and narrow mobile at 320px. No horizontal overflow was observed.
- Reviewed full desktop page, mobile opening, lesson table, and expanded course outline. Graph, table, headings, and controls remain intact.
- Exactly one H1, semantic landmarks, accessible graph description, and row headers/caption for the position table.
- All internal anchor targets exist. The example link scrolls to the lesson; the hero meeting CTA scrolls to the meeting section while the calendar is unset.
- Course outline opens on click, exposes eight episodes and a separate capstone, and closes using Enter. Expanded layout checked on desktop and tablet.
- School-participation FAQ opens and closes through native disclosure controls.
- Keyboard Shift+Tab from the brand link reaches the skip link with a visible outline.
- Pending calendar state shows the disabled final button and visible explanatory copy.
- No browser console warnings or errors were observed in the reviewed flows.
- Desktop, mobile, opening, lesson, and expanded-outline captures are included under `previews/`.
- The existing color values were preserved. Previously checked text pairs remain: white/action red 5.90:1; body slate/paper 5.94:1; secondary slate/white 4.78:1; ink/paper 14.67:1.

## Content and illustration checks

- Source data is time 0, 2, 4, 6 s and position 5, 13, 21, 29 m. The hero graph and table use the same imported array.
- The graph passes through the 5 m starting position and 29 m endpoint, with a rise of 8 m for a 2 s interval and slope 4 m/s. The rendered accessible description matches.
- The worked-example calculations use 13 - 5 = 8 m; 2 - 0 = 2 s; 8 / 2 = 4 m/s.
- The conceptual meaning question is separately labelled; it is not passed off as part of a contiguous robot-source extract.
- Episode summaries and separate capstone were compared with the manuscript. No new five-stage framework, weekly schedule, or complete-syllabus promise was added.
- The source and email provenance received an independent read-only audit, with no material factual issues found.
- The ten editorial checks are recorded in `EDITORIAL_REVIEW.md`; claim origins are in `EVIDENCE_MAP.md`.
- No source manuscript, private group link, answer-key file, old biography, invented testimonial, measured outcome, or mock dashboard is included as visitor-facing content.

## Expected launch preflight result

`pnpm preflight` exits 1 because `bookingUrl` and `canonicalUrl` are intentionally blank. It also notes that the approved logo artwork has not been supplied separately. This is expected, not a production-ready booking configuration. Add the real Google Calendar appointment booking URL and final page URL, then rebuild and rerun preflight before outreach.

## Limits

- A real calendar URL was not supplied; appointment availability, booking form, and completed meeting creation remain unverified.
- Browser checks used the Codex in-app browser, rather than a full device/browser matrix. This is a focused manual accessibility review, not a certification.
- The optional original logo and current founder portrait can be connected through configuration. Plain-text branding is used in the preview.
- Founder/mentor and platform claims retain owner-email provenance; the course manuscript does not independently validate those statements.
- No analytics, lead collection, backend, accounts, course demo, or production hosting was added.

## Developer launch checks

1. Copy the complete `src/physics/` directory, including `course-content.ts` and local fonts, into the existing React/Next.js route, or use the standalone reference app.
2. Supply the real Google Calendar appointment booking URL, final canonical URL, and optional original logo/portrait.
3. Build for the chosen route and run preflight; test the real calendar experience and hosted asset paths.
4. Review current participation details and copy with the owner before outreach.
