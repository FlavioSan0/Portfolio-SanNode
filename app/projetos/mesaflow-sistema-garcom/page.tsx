import type { Metadata } from "next";

import ProjectCaseLayout from "@/components/ProjectCaseLayout";
import { matheusAlexandreCase, mesaFlowCurrentCase } from "@/data/current-cases";
import { agendaNodeCase } from "@/data/product-cases";
import { siteUrl } from "@/data/site";

const canonicalPath = "/projetos/mesaflow-sistema-garcom";
const description = mesaFlowCurrentCase.seo?.description ?? mesaFlowCurrentCase.summary;

export const metadata: Metadata = {
  title: mesaFlowCurrentCase.seo?.title ?? `${mesaFlowCurrentCase.title} | Case San_Node`,
  description,
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: mesaFlowCurrentCase.seo?.title ?? `${mesaFlowCurrentCase.title} | Case San_Node`,
    description: mesaFlowCurrentCase.seo?.openGraphDescription ?? description,
    url: `${siteUrl}${canonicalPath}`,
    type: "article",
    locale: "pt_BR",
    images: [{ url: mesaFlowCurrentCase.coverImage, alt: mesaFlowCurrentCase.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: mesaFlowCurrentCase.seo?.title ?? `${mesaFlowCurrentCase.title} | Case San_Node`,
    description: mesaFlowCurrentCase.seo?.twitterDescription ?? description,
    images: [mesaFlowCurrentCase.coverImage],
  },
};

export default function MesaFlowPage() {
  return (
    <ProjectCaseLayout
      project={mesaFlowCurrentCase}
      previousProject={agendaNodeCase}
      nextProject={matheusAlexandreCase}
    />
  );
}
