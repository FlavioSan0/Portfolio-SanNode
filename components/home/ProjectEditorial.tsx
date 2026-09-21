import CasesSliderSanNode from "@/components/ui/cases-slider-sannode";
import {
  getProjectCaseBySlug,
  shouldUsePublishedScreenPreview,
} from "@/data/project-cases";

const projectGroups = [
  {
    label: "Design",
    projects: [
      { slug: "abf-representacoes", category: "Identidade visual + landing page", imageMode: "brand" },
    ],
  },
  {
    label: "Sites",
    projects: [
      { slug: "portfolio-daniel-felix", category: "Portfólio audiovisual • Publicado" },
      { slug: "site-casamento", category: "Site + painel • Publicado" },
      { slug: "paroquia-santuario", category: "Site institucional • Publicado" },
      { slug: "banda-praise", category: "Site artístico • Em desenvolvimento" },
      { slug: "vem-voando", category: "Landing page • Publicado" },
    ],
  },
  {
    label: "Sistemas",
    projects: [
      { slug: "painel-do-dia", category: "Aplicativo desktop • MVP funcional" },
      { slug: "mesaflow-sistema-garcom", category: "Sistema SaaS • MVP funcional" },
      { slug: "controle-estoque-mecanica", category: "Sistema web" },
      { slug: "gestao-financeira", category: "Sistema financeiro • Em desenvolvimento" },
      { slug: "dashboard-comercial-leads-vem-voando", category: "Dashboards & Automações" },
      { slug: "painel-controle-relatorios-operacionais", category: "Dashboards & Automações" },
    ],
  },
] as const;

export default function ProjectEditorial() {
  return (
    <section id="projetos" className="border-y border-[#243B5A]/45 bg-[#0F1B3D]/18">
      <div className="container-site py-20 md:py-28">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#3FE3FF]">Projetos</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.045em] text-[#F7FBFF] md:text-5xl">
            Trabalho publicado, produto em uso e sistema em evolução.
          </h2>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-20">
          {projectGroups.map((group) => {
            const projects = group.projects.map((item) => {
              const project = getProjectCaseBySlug(item.slug)!;
              const usePublishedPreview =
                shouldUsePublishedScreenPreview(project) && Boolean(project.publishedPreviewImage);

              return {
                slug: project.slug,
                title: project.title,
                category: item.category,
                summary: project.summary,
                stack: project.stack,
                coverImage: usePublishedPreview
                  ? project.publishedPreviewImage ?? project.coverImage
                  : project.coverImage,
                imageMode: "imageMode" in item ? item.imageMode : undefined,
              };
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
