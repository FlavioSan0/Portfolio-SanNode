import type { MetadataRoute } from "next";

import { currentCases } from "@/data/current-cases";
import { projectCases } from "@/data/project-cases";
import { productCases } from "@/data/product-cases";
import { siteUrl } from "@/data/site";

const replacedLegacySlugs = new Set([
  "controle-estoque-mecanica",
  "mesaflow-sistema-garcom",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const legacyCases = projectCases.filter(
    (project) => !replacedLegacySlugs.has(project.slug),
  );

  const projects: MetadataRoute.Sitemap = [
    ...legacyCases,
    ...productCases,
    ...currentCases,
  ].map((project) => ({
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
