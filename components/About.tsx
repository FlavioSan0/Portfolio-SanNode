import { Code2, Layers3, Palette, ShieldCheck, Workflow } from "lucide-react";
import Reveal from "@/components/Reveal";
import { skills } from "@/data/skills";

const aboutCards = [
  {
    icon: Palette,
    title: "Design com intenção",
    description:
      "Criação visual com foco em clareza, identidade, organização e aplicação real em diferentes formatos.",
  },
  {
    icon: Code2,
    title: "Desenvolvimento funcional",
    description:
      "Construção de sites, interfaces, sistemas e painéis pensados para funcionar de verdade, não apenas parecer bonitos.",
  },
  {
    icon: Workflow,
    title: "Processos organizados",
    description:
      "Estruturação de etapas, fluxos e prioridades para transformar ideias em projetos mais claros e evolutivos.",
  },
];

const profileHighlights = [
  {
    icon: ShieldCheck,
    title: "Perfil operacional",
    description:
      "Minha vivência com organização, rotina e processos me ajuda a pensar soluções digitais com lógica prática.",
  },
  {
    icon: Layers3,
    title: "Visão completa",
    description:
      "Consigo olhar para identidade visual, experiência do usuário, estrutura técnica e evolução do projeto em conjunto.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="container-site py-20">
      <Reveal>
        <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00D9FF]">
              Sobre mim
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#F5FBFF] md:text-5xl">
              Design, programação e organização para criar soluções digitais.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#A9BDD3]">
            <p>
              Sou Flávio Santos, criador da SanNode. Minha atuação une design,
              programação e organização de processos para criar identidades
              visuais, sites, sistemas e automações com estrutura.
            </p>

            <p>
              Gosto de transformar ideias em projetos claros, bem apresentados e
              funcionais. Meu foco é construir soluções que tenham boa aparência,
              façam sentido para o usuário e possam evoluir com o tempo.
            </p>

            <p>
              A SanNode representa essa combinação: visual limpo, lógica técnica
              e execução prática para marcas, negócios e projetos digitais.
            </p>
          </div>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {aboutCards.map((card, index) => {
          const Icon = card.icon;

          return (
            <Reveal key={card.title} delay={index * 90}>
              <div className="tech-card tech-glow h-full rounded-3xl border border-[#1E3654] bg-[#0C1B2E] p-6">
                <Icon className="h-7 w-7 text-[#00D9FF]" />

                <h3 className="mt-5 text-xl font-bold text-[#F5FBFF]">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#A9BDD3]">
                  {card.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {profileHighlights.map((item, index) => {
          const Icon = item.icon;

          return (
            <Reveal key={item.title} delay={index * 100}>
              <div className="tech-card h-full rounded-3xl border border-[#1E3654] bg-[#091728] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#10233B] text-[#00D9FF]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#F5FBFF]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#A9BDD3]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={160}>
        <div className="mt-10 rounded-[2rem] border border-[#1E3654] bg-[#0C1B2E] p-6 md:p-8">
          <div className="mb-5">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
              Ferramentas e habilidades
            </p>

            <h3 className="mt-3 text-2xl font-black text-[#F5FBFF] md:text-3xl">
              Tecnologias e recursos que uso para tirar projetos do papel.
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#1E3654] bg-[#10233B] px-4 py-2 text-sm text-[#A9BDD3] transition hover:border-[#00D9FF] hover:text-[#00D9FF]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}