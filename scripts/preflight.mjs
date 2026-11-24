import { readFileSync, existsSync } from "node:fs";

const config = readFileSync(new URL("../src/physics/site-config.ts", import.meta.url), "utf8");
const setting = (name) => config.match(new RegExp(`${name}:\\s*"([^"\\n]*)"`))?.[1] || "";
let failed = false;
const isHttps = (value) => {
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
};
const bookingConfigured = isHttps(setting("bookingUrl"));
const formConfigured = isHttps(process.env.NEXT_PUBLIC_SCHOOL_WALKTHROUGH_ENDPOINT || "");
if (!bookingConfigured && !formConfigured) {
  console.error("REQUIRED: Set bookingUrl or NEXT_PUBLIC_SCHOOL_WALKTHROUGH_ENDPOINT to a public HTTPS URL.");
  failed = true;
} else {
  console.log(formConfigured ? "PASS walkthrough form endpoint configured" : "PASS walkthrough calendar configured");
}
if (!isHttps(setting("canonicalUrl"))) {
  console.error("REQUIRED: Set canonicalUrl to the real public HTTPS URL in src/physics/site-config.ts.");
  failed = true;
}
for (const file of ["../src/physics/PhysicsLanding.tsx", "../src/physics/course-content.ts", "../src/physics/CurriculumMap.tsx", "../src/physics/RateOfChange.tsx", "../src/physics/CourseConnections.tsx", "../src/physics/physics.module.css", "../app/page.tsx", "../README.md"]) {
  if (!existsSync(new URL(file, import.meta.url))) {
    console.error(`MISSING: ${file}`);
    failed = true;
  }
}
if (!setting("logoSrc")) console.warn("ASSET NOTE: Plain-text brand name in use. Set logoSrc to the approved logo artwork when available.");
console.log("Check the walkthrough destination manually before launch. This command validates URL format only.");
process.exitCode = failed ? 1 : 0;
