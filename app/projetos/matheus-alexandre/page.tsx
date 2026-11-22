import type { Metadata } from "next";

import ProjectCaseLayout from "@/components/ProjectCaseLayout";
import { matheusAlexandreCase, mesaFlowCurrentCase } from "@/data/current-cases";
import { getProjectCaseBySlug } from "@/data/project-cases";
import { caseMetadata } from "@/lib/seo";

export const metadata: Metadata = caseMetadata(matheusAlexandreCase);

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
