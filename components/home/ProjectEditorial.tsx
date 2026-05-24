import Reveal from "@/components/Reveal";
import CasesSliderSanNode, {
  type CaseSliderItem,
} from "@/components/ui/cases-slider-sannode";
import { Code2, MonitorSmartphone, Palette } from "lucide-react";

type ProjectGroup = {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: typeof Palette;
  projects: CaseSliderItem[];
};

const projectGroups: ProjectGroup[] = [
  {
    id: "design",
    label: "Design",
    title: "Marcas com presença, direção e aplicação real.",
    description:
      "Identidades visuais pensadas para organizar a imagem da marca e deixar sua comunicação mais profissional.",
    icon: Palette,
    projects: [
      {
        number: "01",
        title: "ABF Representações",
        category: "Identidade visual + landing page",
        slug: "abf-representacoes",
        image: "/projetos/abf-case/logo-principal.png",
        imageMode: "brand",
        context:
          "Identidade visual e landing page para fortalecer a presença comercial da ABF.",
        decision:
          "A marca evoluiu para uma landing page institucional com foco em apresentação comercial.",
        result: "Marca mais consistente e presença digital mais profissional.",
        deliverables: ["Logo", "Identidade", "Landing"],
        liveUrl: "https://abf-representacao.vercel.app/#",
      },
    ],
  },
  {
    id: "sites",
    label: "Sites",
    title: "Páginas publicadas com visual, clareza e objetivo.",
    description:
      "Sites e landing pages criados para apresentar ideias, serviços e projetos de forma direta, responsiva e fácil de acessar.",
    icon: MonitorSmartphone,
    projects: [
      {
        number: "02",
        title: "Site de Casamento",
        category: "Site + painel",
        slug: "site-casamento",
        image: "/projetos/site-casamento/mobile-home.png",
        imageMode: "screen",
        context:
          "Convite digital com experiência para convidados e painel administrativo para organização do evento.",
        decision:
          "Estrutura com RSVP, lista de presentes, cotas, PIX, galeria e área de gestão para o casal.",
        result: "Evento apresentado e administrado em um ambiente digital próprio.",
        deliverables: ["RSVP", "Painel", "Mobile"],
        liveUrl: "https://site-casamento-chi.vercel.app",
      },
    ],
  },
  {
    id: "sistemas",
    label: "Sistemas",
    title: "Soluções para organizar processos, dados e rotina.",
    description:
      "Sistemas web construídos para transformar controles manuais em fluxos mais claros, práticos e fáceis de acompanhar.",
    icon: Code2,
    projects: [
      {
        number: "03",
        title: "Controle de Estoque Mecânica",
        category: "Sistema web",
        slug: "controle-estoque-mecanica",
        image: "/projetos/estoque-case/dashboard.png",
        imageMode: "screen",
        context:
          "Sistema privado para organizar produtos, entradas, saídas e movimentações em uma rotina real de oficina.",
        decision:
          "Base operacional com dashboard, cadastros, histórico e estrutura para evoluir para gestão mecânica.",
        result: "Mais controle sobre estoque, registros e movimentações.",
        deliverables: ["Dashboard", "Estoque", "Gestão"],
      },
    ],
  },
];

export default function ProjectEditorial() {
  return (
    <section
      id="projetos"
      className="relative overflow-hidden border-y border-[#1E3654]/10 bg-[#07111F]/38"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(0,217,255,0.07),transparent_30%),radial-gradient(circle_at_84%_72%,rgba(37,99,235,0.07),transparent_34%)]" />

      <div className="container-site responsive-section relative">
        <Reveal>
          <div className="mx-auto mb-14 grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
                Projetos reais
              </p>

              <h2 className="responsive-title-lg mt-3 max-w-3xl font-black text-[#F5FBFF] text-balance">
                Uma vitrine do que já saiu do papel.
              </h2>
            </div>

            <p className="responsive-copy max-w-2xl text-[#A9BDD3] text-pretty">
              Cada case mostra uma entrega prática da SanNode: identidade,
              site, sistema ou automação com foco em apresentação, organização e
              uso real.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-6xl gap-16">
          {projectGroups.map((group, groupIndex) => {
            const Icon = group.icon;

            return (
              <Reveal key={group.id} delay={groupIndex * 100}>
                <div className="grid gap-6">
                  <div className="flex flex-col gap-4 border-b border-[#1E3654]/25 pb-5 md:flex-row md:items-end md:justify-between">
                    <div>
                      <div className="inline-flex items-center gap-3 rounded-full border border-[#1E3654]/70 bg-[#07111F]/70 px-4 py-2 backdrop-blur">
                        <Icon className="h-4 w-4 text-[#00D9FF]" />

                        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#00D9FF]">
                          {group.label}
                        </span>
                      </div>

                      <h3 className="mt-4 max-w-2xl text-3xl font-black tracking-[-0.04em] text-[#F5FBFF] md:text-4xl">
                        {group.title}
                      </h3>
                    </div>

                    <p className="max-w-xl text-sm leading-7 text-[#A9BDD3]">
                      {group.description}
                    </p>
                  </div>

                  <CasesSliderSanNode projects={group.projects} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}