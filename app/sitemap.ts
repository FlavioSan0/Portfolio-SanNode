import type { MetadataRoute } from "next";

import { projectCases } from "@/data/project-cases";
import { siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects: MetadataRoute.Sitemap = projectCases.map((project) => ({
    url: `${siteUrl}/projetos/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projects,
  ];
}
