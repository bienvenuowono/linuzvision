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
