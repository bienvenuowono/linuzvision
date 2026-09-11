import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "LinuZvision", short_name: "LinuZvision", description: "AI, automation and technology infrastructure.", start_url: "/", display: "standalone", background_color: "#f7f6f3", theme_color: "#111313" };
}
