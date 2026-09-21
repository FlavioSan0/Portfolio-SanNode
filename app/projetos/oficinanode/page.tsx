import type { Metadata } from "next";

import ProjectCaseLayout from "@/components/ProjectCaseLayout";
import { agendaNodeCase, oficinaNodeCase } from "@/data/product-cases";
import { getProjectCaseBySlug } from "@/data/project-cases";
import { siteUrl } from "@/data/site";

const canonicalPath = "/projetos/oficinanode";
const description = oficinaNodeCase.seo?.description ?? oficinaNodeCase.summary;

export const metadata: Metadata = {
  title: oficinaNodeCase.seo?.title ?? `${oficinaNodeCase.title} | Case San_Node`,
  description,
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: oficinaNodeCase.seo?.title ?? `${oficinaNodeCase.title} | Case San_Node`,
    description: oficinaNodeCase.seo?.openGraphDescription ?? description,
    url: `${siteUrl}${canonicalPath}`,
    type: "article",
    locale: "pt_BR",
    images: [{ url: oficinaNodeCase.coverImage, alt: oficinaNodeCase.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: oficinaNodeCase.seo?.title ?? `${oficinaNodeCase.title} | Case San_Node`,
    description: oficinaNodeCase.seo?.twitterDescription ?? description,
    images: [oficinaNodeCase.coverImage],
  },
};

export default function OficinaNodePage() {
  const previousProject = getProjectCaseBySlug("vem-voando")!;

  return (
    <ProjectCaseLayout
      project={oficinaNodeCase}
      previousProject={previousProject}
      nextProject={agendaNodeCase}
    />
  );
}
