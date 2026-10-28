# Developer handoff

Start with `README.md` for integration instructions. The current revision follows the exact owner-approved message and six-section structure: opening/course cover, curriculum connection, three rate-of-change capstones, course journey, purpose/people and confidence.

**Integrate:** Copy the entire `src/physics/` folder into the existing React/Next.js application and render `PhysicsLanding` from the desired route. Include `RateOfChange.tsx`, `CourseConnections.tsx`, all CSS Modules and licensed local fonts. The supplied `app/page.tsx` demonstrates metadata integration. Keep the site's existing root layout.

**Before outreach:** Set the actual public Google Calendar appointment booking URL and final canonical URL in `src/physics/site-config.ts`, then rebuild. Booking remains unavailable until connected. Configuration contains public values only; no credentials or server integration are required.

**Message:** `docs/MESSAGE_SOURCE.md` preserves the approved “shrine” verbatim. `docs/NARRATIVE_DESIGN.md` records the six sections, exact scope and restrained CTA. `docs/CONTENT.md` records the content hierarchy.

**Evidence:** `docs/EVIDENCE_MAP.md` traces concepts and claims. `docs/CONTENT_NOTES.md` distinguishes owner-supplied business statements from manuscript evidence. The rocket example is adapted to ask for rate of change of momentum, avoiding the manuscript's variable-mass force ambiguity. The full course and private links are excluded.

**Validation:** `docs/QA_REPORT.md` records checks and limitations for the packaged revision. Review the actual page after integration, especially the diagram reading order on mobile, keyboard access, base path and booking destination.

**Standalone:** `out/` is the compiled preview with booking unset. Rebuild for the final route/subdomain after configuration. Deploy the contents of that directory only when configured and reviewed.
