import type { Metadata } from "next";

import ProjectCaseLayout from "@/components/ProjectCaseLayout";
import { matheusAlexandreCase, mesaFlowCurrentCase } from "@/data/current-cases";
import { agendaNodeCase } from "@/data/product-cases";
import { caseMetadata } from "@/lib/seo";

export const metadata: Metadata = caseMetadata(mesaFlowCurrentCase);

export default function MesaFlowPage() {
  return (
    <ProjectCaseLayout
      project={mesaFlowCurrentCase}
      previousProject={agendaNodeCase}
      nextProject={matheusAlexandreCase}
    />
  );
}
