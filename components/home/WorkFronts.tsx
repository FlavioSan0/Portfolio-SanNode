import Reveal from "@/components/Reveal";
import { ArrowUpRight, Code2, MonitorSmartphone, Palette } from "lucide-react";

const fronts = [
  {
    number: "01",
    icon: Palette,
    title: "Visual",
    description:
      "Identidade visual, peças digitais, apresentações, interfaces e organização de presença visual.",
    items: ["Marca", "Paleta", "Social media", "UI visual"],
  },
  {
    number: "02",
    icon: MonitorSmartphone,
    title: "Web",
    description:
      "Sites, landing pages, páginas de case, experiências responsivas e presença digital publicada.",
    items: ["Landing page", "Site institucional", "Portfólio", "Painel"],
  },
  {
    number: "03",
    icon: Code2,
    title: "Sistemas",
    description:
      "Sistemas web, cadastros, dashboards, fluxos internos, automações e organização operacional.",
    items: ["Dashboard", "CRUD", "Automação", "Gestão"],
  },
];

export default function WorkFronts() {
  return (
    <section id="servicos" className="border-y border-[#1E3654] bg-[#07111F]/80">
      <div className="container-site responsive-section">
        <Reveal>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
                Frentes de trabalho
              </p>

              <h2 className="responsive-title-lg mt-3 max-w-3xl font-black text-[#F5FBFF] text-balance">
                Menos serviço solto, mais solução conectada.
              </h2>
            </div>

            <p className="responsive-copy max-w-2xl text-[#A9BDD3] text-pretty">
              Cada projeto pode começar por uma marca, uma página, uma interface
              ou um sistema. O importante é construir com clareza, coerência e
              possibilidade de evolução.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {fronts.map((front, index) => {
            const Icon = front.icon;

            return (
              <Reveal key={front.title} delay={index * 120}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#1E3654] bg-[#0C1B2E]/80 p-7 backdrop-blur transition hover:border-[#00D9FF]/70">
                  <div className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-[#00D9FF]/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#10233B] text-[#00D9FF]">
                      <Icon className="h-7 w-7" />
                    </div>

                    <span className="text-5xl font-black text-white/10">
                      {front.number}
                    </span>
                  </div>

                  <div className="relative mt-7">
                    <h3 className="text-3xl font-black text-[#F5FBFF]">
                      {front.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#A9BDD3]">
                      {front.description}
                    </p>
                  </div>

                  <div className="relative mt-6 flex flex-wrap gap-2">
                    {front.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#1E3654] bg-[#10233B] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#A9BDD3]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="mt-8 flex flex-col gap-5 rounded-[2rem] border border-[#1E3654] bg-[#0C1B2E]/80 p-6 backdrop-blur md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00D9FF]">
                Não sabe em qual frente seu projeto entra?
              </p>

              <p className="mt-2 max-w-2xl text-sm leading-7 text-[#A9BDD3]">
                Me chama com a ideia do jeito que ela está. A primeira parte do
                trabalho é justamente organizar o caminho.
              </p>
            </div>

            <a
              href="#contato"
              className="tech-button inline-flex items-center justify-center rounded-2xl bg-[#0B2A5B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB]"
            >
              Falar comigo
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}