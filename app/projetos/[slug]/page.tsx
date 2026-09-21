import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProjectCaseLayout from "@/components/ProjectCaseLayout";
import { getProjectCaseBySlug, projectCases } from "@/data/project-cases";
import { siteUrl } from "@/data/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projectCases.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectCaseBySlug(slug);

  if (!project) return { title: "Projeto não encontrado | San_Node" };

  const title = project.seo?.title ?? `${project.title} | Case San_Node`;
  const description = project.seo?.description ?? project.summary;
  const canonicalPath = `/projetos/${project.slug}`;

  return {
    title,
    description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title,
      description: project.seo?.openGraphDescription ?? description,
      url: `${siteUrl}${canonicalPath}`,
      type: "article",
      locale: "pt_BR",
      images: [{ url: project.coverImage, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.seo?.twitterDescription ?? description,
      images: [project.coverImage],
    },
  };
}

export default async function ProjectCasePage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projectCases.findIndex((item) => item.slug === slug);

  if (projectIndex === -1) notFound();

  const project = projectCases[projectIndex];
  const previousProject = projectCases[(projectIndex - 1 + projectCases.length) % projectCases.length];
  const nextProject = projectCases[(projectIndex + 1) % projectCases.length];

  return <ProjectCaseLayout project={project} previousProject={previousProject} nextProject={nextProject} />;
}
