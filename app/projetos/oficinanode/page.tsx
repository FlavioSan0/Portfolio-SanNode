import type { Metadata } from "next";

import ProjectCaseLayout from "@/components/ProjectCaseLayout";
import { agendaNodeCase, oficinaNodeCase } from "@/data/product-cases";
import { getProjectCaseBySlug } from "@/data/project-cases";
import { caseMetadata } from "@/lib/seo";

export const metadata: Metadata = caseMetadata(oficinaNodeCase);

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
