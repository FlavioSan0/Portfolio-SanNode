import CasesSliderSanNode from "@/components/ui/cases-slider-sannode";
import {
  getProjectCaseBySlug,
  shouldUsePublishedScreenPreview,
  type ProjectCase,
} from "@/data/project-cases";
import { agendaNodeCase, oficinaNodeCase } from "@/data/product-cases";
import { matheusAlexandreCase, mesaFlowCurrentCase } from "@/data/current-cases";

type FeaturedProject = {
  slug: string;
  category: string;
  imageMode?: "brand" | "screen";
  summary?: string;
};

type FeaturedProjectGroup = {
  label: string;
  projects: FeaturedProject[];
};

const supplementalCases = new Map<string, ProjectCase>([
  [oficinaNodeCase.slug, oficinaNodeCase],
  [agendaNodeCase.slug, agendaNodeCase],
  [mesaFlowCurrentCase.slug, mesaFlowCurrentCase],
  [matheusAlexandreCase.slug, matheusAlexandreCase],
]);

function resolveProject(slug: string) {
  return supplementalCases.get(slug) ?? getProjectCaseBySlug(slug);
}

const projectGroups: FeaturedProjectGroup[] = [
  {
    label: "Produtos e sistemas",
    projects: [
      {
        slug: "oficinanode",
        category: "Gestão para oficinas • Em operação",
        imageMode: "brand",
      },
      {
        slug: "agendanode",
        category: "SaaS de agendamento • Em evolução",
        imageMode: "brand",
      },
      {
        slug: "mesaflow-sistema-garcom",
        category: "Gestão para alimentação • Em evolução",
      },
    ],
  },
  {
    label: "Sites",
    projects: [
      { slug: "vem-voando", category: "Landing page comercial • Publicado" },
      {
        slug: "matheus-alexandre",
        category: "Site profissional • Publicado",
        imageMode: "brand",
      },
      { slug: "portfolio-daniel-felix", category: "Portfólio audiovisual • Publicado" },
      { slug: "paroquia-santuario", category: "Site institucional • Publicado" },
      { slug: "site-casamento", category: "Site + painel • Publicado" },
    ],
  },
  {
    label: "Design",
    projects: [
      {
        slug: "abf-representacoes",
        category: "Identidade visual + landing page",
        imageMode: "brand",
      },
    ],
  },
];

export default function ProjectEditorial() {
  return (
    <section id="projetos" className="border-y border-[#243B5A]/45 bg-[#0F1B3D]/18">
      <div className="container-site py-20 md:py-28">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#3FE3FF]">Projetos</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.045em] text-[#F7FBFF] md:text-5xl">
            Produtos em evolução e projetos construídos para uso real.
          </h2>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-20">
          {projectGroups.map((group) => {
            const projects = group.projects.flatMap((item) => {
              const project = resolveProject(item.slug);
              if (!project) return [];

              const usePublishedPreview =
                shouldUsePublishedScreenPreview(project) && Boolean(project.publishedPreviewImage);

              return [
                {
                  slug: project.slug,
                  title: project.title,
                  category: item.category,
                  summary: item.summary ?? project.summary,
                  stack: project.stack,
                  coverImage: usePublishedPreview
                    ? project.publishedPreviewImage ?? project.coverImage
                    : project.coverImage,
                  imageMode: item.imageMode,
                },
              ];
            });

            return (
              <div key={group.label} className="min-w-0">
                <div className="mb-7 border-b border-[#243B5A]/70 pb-4">
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#8ECFFF]">
                    {group.label}
                  </h3>
                </div>
                <CasesSliderSanNode groupLabel={group.label} projects={projects} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
