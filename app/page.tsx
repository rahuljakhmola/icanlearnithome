import type { Metadata } from "next";
import PhysicsLanding from "../src/physics/PhysicsLanding";
import { isHttpsUrl, siteConfig } from "../src/physics/site-config";

export const metadata: Metadata = {
  title: "Class 10–11 Physics Bridge Course for Schools | icanlearnit",
  description: "Explore icanlearnit’s one-month Physics bridge course for students entering Class 11. Share your perspective and discuss a no-cost school pilot.",
  ...(isHttpsUrl(siteConfig.canonicalUrl) ? { alternates: { canonical: siteConfig.canonicalUrl } } : {}),
};

export default function Page() {
  return <PhysicsLanding />;
}
