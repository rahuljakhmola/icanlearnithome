import { readFileSync, existsSync } from "node:fs";

const config = readFileSync(new URL("../src/physics/site-config.ts", import.meta.url), "utf8");
const setting = (name) => config.match(new RegExp(`${name}:\\s*"([^"\\n]*)"`))?.[1] || "";
let failed = false;
for (const name of ["bookingUrl", "canonicalUrl"]) {
  try {
    const url = new URL(setting(name));
    if (url.protocol !== "https:") throw new Error("HTTPS required");
    console.log(`PASS ${name}: ${url.href}`);
  } catch {
    console.error(`REQUIRED: Set ${name} to the real public HTTPS URL in src/physics/site-config.ts.`);
    failed = true;
  }
}
for (const file of ["../src/physics/PhysicsLanding.tsx", "../src/physics/course-content.ts", "../src/physics/CurriculumMap.tsx", "../src/physics/RateOfChange.tsx", "../src/physics/CourseConnections.tsx", "../src/physics/physics.module.css", "../app/page.tsx", "../README.md"]) {
  if (!existsSync(new URL(file, import.meta.url))) {
    console.error(`MISSING: ${file}`);
    failed = true;
  }
}
if (!setting("logoSrc")) console.warn("ASSET NOTE: Plain-text brand name in use. Set logoSrc to the approved logo artwork when available.");
console.log("Check the booking destination manually before launch. This command does not verify scheduler availability.");
process.exitCode = failed ? 1 : 0;
