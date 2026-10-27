# Visual system

The source is `branding.md`. The redesign preserves the warm science-textbook aesthetic, technical illustration, generous spacing, and visual layout that the owner approved. Descriptive section titles and source-based course content replace generic promotional fragments.

| Role | Value | Use |
| --- | --- | --- |
| Paper | #F8F7F2 | Main background |
| White | #FFFFFF | Learning illustration and selected sections |
| Ink | #182337 | Headlines, structure, primary text |
| Slate | #697386 | Secondary metadata |
| Rule | #E2E0D9 | Fine dividers |
| Cape red | #D94B40 | Diagram, small brand accents |
| Action red | #B7352C | Derived darker red for accessible white button text |
| Cape blue | #7EA6C9 | Teacher accent |

Inter is self-hosted from the included `src/physics/fonts/` assets, sourced from @fontsource/inter 5.3.0 with the accompanying SIL Open Font License; no Google Fonts network requests are required. Weights 400, 500, 600, and 700 are loaded with font-display: swap. System fonts provide fallback. Georgia is used sparingly for editorial emphasis in the meeting heading, alongside Inter as the primary face.

Layout: 1184px maximum content width; desktop gutters 48px; mobile gutters 20px. Breakpoints at 1100px, 800px, and 480px. Main sections use 94px desktop spacing and 50–64px on smaller screens. Typography reduces for mobile; body text remains readable. All styles are inside a CSS Module. No Tailwind, global reset, icon library, or animation dependency is required.

The original cape artwork is not reconstructed. The approved horizontal logo can be connected through the configuration. Until then the name is plain text. Organization names are text, not borrowed sponsor logos.

The graph is code-native SVG with an accessible description and actual robot-exercise data: time 0, 2, 4, 6 s; position 5, 13, 21, 29 m. It represents x(t) = 5 + 4t. Its non-zero intercept is 5 m, and a change of 8 m over 2 s gives a slope and velocity of 4 m/s. Units, ticks, plotted points, slope construction, and text must agree. This is a static reconstruction of course data, not a working course demo or product screenshot. Exact source references and the distinction between this exercise and the separate conceptual question are in EVIDENCE_MAP.md.

Course topics use the existing column-and-rule visual language rather than a new named teaching framework. Expandable detail is a native disclosure, not hidden functionality. The student and teacher columns and pilot fact sheet are retained to make the offer easy to inspect. Affiliation names remain text and follow the teaching evidence in reading order.

Use the native FAQ disclosure and document anchors as implemented. The component has a keyboard skip link, visible focus, reduced-motion rules, semantic landmarks, and text alternatives for the diagram and optional assets.
