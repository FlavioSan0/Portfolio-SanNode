import type { Metadata } from "next";

import ProjectCaseLayout from "@/components/ProjectCaseLayout";
import { agendaNodeCase, oficinaNodeCase } from "@/data/product-cases";
import { getProjectCaseBySlug } from "@/data/project-cases";
import { caseMetadata } from "@/lib/seo";

export const metadata: Metadata = caseMetadata(agendaNodeCase);

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
