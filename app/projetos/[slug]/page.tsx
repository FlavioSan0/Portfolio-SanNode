import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProjectCaseLayout from "@/components/ProjectCaseLayout";
import { getProjectCaseBySlug, projectCases } from "@/data/project-cases";
import { caseMetadata } from "@/lib/seo";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projectCases.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectCaseBySlug(slug);

  if (!project) return { title: "Projeto não encontrado" };

  return caseMetadata(project);
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
