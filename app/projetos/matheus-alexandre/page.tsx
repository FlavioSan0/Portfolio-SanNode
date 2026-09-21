import type { Metadata } from "next";

import ProjectCaseLayout from "@/components/ProjectCaseLayout";
import { matheusAlexandreCase, mesaFlowCurrentCase } from "@/data/current-cases";
import { getProjectCaseBySlug } from "@/data/project-cases";
import { siteUrl } from "@/data/site";

const canonicalPath = "/projetos/matheus-alexandre";
const description = matheusAlexandreCase.seo?.description ?? matheusAlexandreCase.summary;

export const metadata: Metadata = {
  title: matheusAlexandreCase.seo?.title ?? `${matheusAlexandreCase.title} | Case San_Node`,
  description,
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: matheusAlexandreCase.seo?.title ?? `${matheusAlexandreCase.title} | Case San_Node`,
    description: matheusAlexandreCase.seo?.openGraphDescription ?? description,
    url: `${siteUrl}${canonicalPath}`,
    type: "article",
    locale: "pt_BR",
    images: [{ url: matheusAlexandreCase.coverImage, alt: matheusAlexandreCase.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: matheusAlexandreCase.seo?.title ?? `${matheusAlexandreCase.title} | Case San_Node`,
    description: matheusAlexandreCase.seo?.twitterDescription ?? description,
    images: [matheusAlexandreCase.coverImage],
  },
};

export default function MatheusAlexandrePage() {
  const nextProject = getProjectCaseBySlug("vem-voando")!;

  return (
    <ProjectCaseLayout
      project={matheusAlexandreCase}
      previousProject={mesaFlowCurrentCase}
      nextProject={nextProject}
    />
  );
}
