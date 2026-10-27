/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  // For a standalone build hosted under /physics, build with NEXT_PUBLIC_BASE_PATH=/physics.
  // When copying this component into an existing Next app route, leave this unset.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: { unoptimized: true },
};
export default nextConfig;
