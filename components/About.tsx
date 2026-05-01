import { Code2, Palette, Workflow } from "lucide-react";
import { skills } from "@/data/skills";

const aboutCards = [
  {
    icon: Palette,
    title: "Design funcional",
    description:
      "Visual limpo, objetivo e pensado para comunicar com clareza.",
  },
  {
    icon: Code2,
    title: "Desenvolvimento real",
    description:
      "Interfaces, sistemas e automações com foco em funcionamento e manutenção.",
  },
  {
    icon: Workflow,
    title: "Processos organizados",
    description:
      "Estruturação de etapas, fluxos e prioridades para projetos evoluírem sem bagunça.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="container-site py-20">
      <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00D9FF]">
            Sobre mim
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#F5FBFF] md:text-5xl">
            Design e programação com estrutura.
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-[#A9BDD3]">
          <p>
            Sou Flávio Santos, estudante de programação e design, e
            criador da SanNode. Minha atuação une visão visual, organização e
            tecnologia para criar soluções digitais funcionais.
          </p>

          <p>
            Trabalho com identidade visual, social media, interfaces, sites,
            automações e sistemas personalizados. O objetivo é sempre construir
            projetos claros, bem apresentados e fáceis de evoluir.
          </p>

          <p>
            Este portfólio reúne meus projetos criativos e técnicos, mostrando
            minha evolução como designer, desenvolvedor e criador de soluções.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {aboutCards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-3xl border border-[#1E3654] bg-[#0C1B2E] p-6"
            >
              <Icon className="h-7 w-7 text-[#00D9FF]" />

              <h3 className="mt-5 text-xl font-bold text-[#F5FBFF]">
                {card.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#A9BDD3]">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-[#1E3654] bg-[#0C1B2E] px-4 py-2 text-sm text-[#A9BDD3]"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}