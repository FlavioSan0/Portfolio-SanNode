import Reveal from "@/components/Reveal";
import CasesSliderSanNode from "@/components/ui/cases-slider-sannode";
import {
  getProjectCaseBySlug,
  shouldUsePublishedScreenPreview,
} from "@/data/project-cases";

const projectGroups = [
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
  {
    label: "Sites",
    projects: [
      {
        slug: "portfolio-daniel-felix",
        category: "Portfólio audiovisual • Publicado",
      },
      { slug: "site-casamento", category: "Site + painel • Publicado" },
      {
        slug: "paroquia-santuario",
        category: "Site institucional • Publicado",
      },
      {
        slug: "banda-praise",
        category: "Site artístico • Em desenvolvimento",
      },
      {
        slug: "vem-voando",
        category: "Landing page • Publicado",
      },
    ],
  },
  {
    label: "Sistemas",
    projects: [
      {
        slug: "painel-do-dia",
        category: "Aplicativo desktop • MVP funcional",
      },
      {
        slug: "mesaflow-sistema-garcom",
        category: "Sistema SaaS • MVP funcional",
      },
      { slug: "controle-estoque-mecanica", category: "Sistema web" },
      {
        slug: "gestao-financeira",
        category: "Sistema financeiro • Em desenvolvimento",
      },
      {
        slug: "dashboard-comercial-leads-vem-voando",
        category: "Dashboards & Automações",
      },
      {
        slug: "painel-controle-relatorios-operacionais",
        category: "Dashboards & Automações",
      },
    ],
  },
] as const;

export default function ProjectEditorial() {
  return (
    <section id="projetos" className="relative border-b border-[#1E3654]/25">
      <div className="container-site py-20 md:py-28">
        <div className="mb-14 max-w-2xl">
          <Reveal direction="none" duration={520}>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
              Projetos
            </p>
          </Reveal>
          <Reveal delay={80} duration={650}>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.045em] text-[#F5FBFF] md:text-5xl">
              Trabalhos selecionados.
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-20">
          {projectGroups.map((group) => (
            <div key={group.label}>
              <Reveal duration={560} distance={20}>
                <div className="mb-7 flex items-center justify-between gap-4 border-b border-[#1E3654]/35 pb-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#74C7FF]">
                    {group.label}
                  </h3>
                  {group.projects.length > 1 ? (
                    <span className="shrink-0 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#6F879F] sm:hidden">
                      Deslize →
                    </span>
                  ) : null}
                </div>
              </Reveal>

              <CasesSliderSanNode
                projects={group.projects.map((item) => {
                  const project = getProjectCaseBySlug(item.slug)!;
                  const imageMode =
                    ("imageMode" in item ? item.imageMode : undefined) ??
                    (shouldUsePublishedScreenPreview(project) && project.liveUrl
                      ? "screen"
                      : undefined);

                  return {
                    ...project,
                    ...item,
                    imageMode,
                  };
                })}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
