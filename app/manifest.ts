import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LinuZvision",
    short_name: "LinuZvision",
    description: "Enterprise AI automation, cloud infrastructure, datacenter engineering, and cybersecurity.",
    start_url: "/",
    display: "standalone",
    background_color: "#eff2f2",
    theme_color: "#0000ff",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
