# icanlearnit — Physics Bridge for Schools

Source code for the school landing page: a four-week online Physics bridge for students entering Class 11.

Live website: https://icanlearnit-school-physics.forgivingflora.chatgpt.site

## Run locally

Requires Node.js 20.9+ and pnpm.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://127.0.0.1:3000.

## Build

```sh
pnpm typecheck
pnpm build
```

The build creates `out/`, ready for static hosting. To preview it:

```sh
python3 -m http.server 8787 --directory out
```

## Main files

- `src/physics/PhysicsLanding.tsx`: page sections and copy.
- `src/physics/school-visual.module.css`: page layout.
- `src/physics/BridgeTimeline.tsx`: course timeline.
- `src/physics/ExpertProfiles.tsx`: mentor names, countries, portraits and profile links.
- `src/physics/site-config.ts`: public booking and site configuration.
- `src/physics/assets/`: images and logos. Preserve these when integrating.
- `src/physics/fonts/`: bundled Inter fonts and license.

The page links to a public Google Calendar booking schedule. No publishing credentials or application secrets are required to run it. Set the canonical URL in `site-config.ts` for a different production domain. The optional preflight script checks public URL configuration.

The classroom readiness image is illustrative, not a screenshot of measured student results. Mentor affiliations identify individuals; they do not imply institutional sponsorship.
