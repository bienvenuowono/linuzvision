// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  // Dev only: let `next dev` serve its scripts when the site is opened from the machine's
  // private network address (it changes with the Wi-Fi). Without this, pages render but no
  // button works, because Next answers 403 to its own JavaScript chunks.
  allowedDevOrigins: [
    "10.*.*.*",
    "192.168.*.*",
    ...Array.from({ length: 16 }, (_, index) => `172.${16 + index}.*.*`),
  ],
  async headers() {
    return [
      {
        // Baseline hardening for every response. A full Content-Security-Policy is not set
        // here: the Google Translate widget and Next's inline scripts need a nonce-based policy.
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
        ],
      },
      {
        source: "/images/:asset*\\.(mp4|webm)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, s-maxage=31536000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
