import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.name,
    description: siteConfig.description,
    lang: siteConfig.language,
    start_url: "/",
    display: "standalone",
    background_color: "#0A1020",
    theme_color: "#0A1020",
    icons: [{ src: "/logo-sannode.png", sizes: "1024x1024", type: "image/png", purpose: "any" }],
  };
}
