# Developer handoff

The redesigned page is built. Start with `README.md` for integration instructions. It preserves the visual style and layout, uses a source-based teaching example and course outline, and focuses on a school feedback meeting.

**Fastest route:** Copy the entire `src/physics/` folder into the existing React/Next.js application and render `PhysicsLanding` from the site's Physics route. The component includes its CSS Module and licensed local fonts. The supplied `app/page.tsx` shows a complete Next.js metadata example.

**Before outreach:** Set the actual public Google Calendar appointment booking URL and final canonical URL in `src/physics/site-config.ts`, then rebuild. Booking is intentionally unavailable until connected. No credentials or server integration are required.

**Review:** `previews/desktop.jpg` and `previews/mobile.jpg` show the full page; `*-opening.jpg` show the opening view. `docs/CONTENT.md` contains editable copy. `docs/CONTENT_NOTES.md` lists factual boundaries and missing assets. `docs/QA_REPORT.md` records tests and limits.

**Content evidence:** `docs/EVIDENCE_MAP.md` connects teaching claims to the source material and separates them from owner-supplied business and platform statements. `docs/EDITORIAL_REVIEW.md` records the ten copy checks. These are internal handoff documents. Course data and FAQ text are editable in `src/physics/course-content.ts`.

**Standalone alternative:** `pnpm build` generates the static `out/` preview. Generated output is not committed to this repository. Use the source instructions to rebuild it for `/physics/` or a subdomain after configuration. Do not publish the pending-booking preview as though it accepts meetings.

No production website was changed, no site was published, and no school demo was built.
