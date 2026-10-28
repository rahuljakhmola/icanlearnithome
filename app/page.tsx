import type { Metadata } from "next";
import PhysicsLanding from "../src/physics/PhysicsLanding";
import { isHttpsUrl, siteConfig } from "../src/physics/site-config";

export const metadata: Metadata = {
  title: "Class 10–11 Physics Bridge Course for Schools | icanlearnit",
  description: "Connect mathematics with Class 11 Physics through icanlearnit’s one-month bridge course. Explore the teaching approach and discuss a no-cost school pilot.",
  ...(isHttpsUrl(siteConfig.canonicalUrl) ? { alternates: { canonical: siteConfig.canonicalUrl } } : {}),
};

export default function Page() {
  return <PhysicsLanding />;
}
