import type { Metadata } from "next";

import ProjectCaseLayout from "@/components/ProjectCaseLayout";
import { agendaNodeCase, oficinaNodeCase } from "@/data/product-cases";
import { getProjectCaseBySlug } from "@/data/project-cases";
import { siteUrl } from "@/data/site";

const canonicalPath = "/projetos/agendanode";
const description = agendaNodeCase.seo?.description ?? agendaNodeCase.summary;

export const metadata: Metadata = {
  title: agendaNodeCase.seo?.title ?? `${agendaNodeCase.title} | Case San_Node`,
  description,
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: agendaNodeCase.seo?.title ?? `${agendaNodeCase.title} | Case San_Node`,
    description: agendaNodeCase.seo?.openGraphDescription ?? description,
    url: `${siteUrl}${canonicalPath}`,
    type: "article",
    locale: "pt_BR",
    images: [{ url: agendaNodeCase.coverImage, alt: agendaNodeCase.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: agendaNodeCase.seo?.title ?? `${agendaNodeCase.title} | Case San_Node`,
    description: agendaNodeCase.seo?.twitterDescription ?? description,
    images: [agendaNodeCase.coverImage],
  },
};

export default function AgendaNodePage() {
  const nextProject = getProjectCaseBySlug("mesaflow-sistema-garcom")!;

  return (
    <ProjectCaseLayout
      project={agendaNodeCase}
      previousProject={oficinaNodeCase}
      nextProject={nextProject}
    />
  );
}
