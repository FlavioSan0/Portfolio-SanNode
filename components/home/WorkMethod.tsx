import Reveal from "@/components/Reveal";
import { Code2, Compass, Layers3, Rocket, Search } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Entender",
    description:
      "Começo entendendo o objetivo, o público, o problema real e o que precisa funcionar na prática.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Organizar",
    description:
      "Transformo ideias soltas em estrutura: páginas, fluxos, prioridades, dados e próximos passos.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Desenhar",
    description:
      "Crio uma direção visual limpa, coerente e alinhada ao que a marca ou solução precisa comunicar.",
  },
  {
    number: "04",
    icon: Code2,
    title: "Construir",
    description:
      "Desenvolvo a interface, as funcionalidades, integrações e ajustes necessários para a solução sair do papel.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Evoluir",
    description:
      "Publico, testo, ajusto e preparo a solução para melhorar com base no uso real e nas próximas necessidades.",
  },
];

export default function WorkMethod() {
  return (
    <section id="processo" className="container-site responsive-section">
      <Reveal>
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
              Como eu trabalho
            </p>

            <h2 className="responsive-title-lg mt-3 max-w-3xl font-black text-[#F5FBFF] text-balance">
              Processo simples, mas com intenção em cada etapa.
            </h2>
          </div>

          <p className="responsive-copy max-w-2xl text-[#A9BDD3] text-pretty">
            O objetivo não é só entregar uma tela bonita. É organizar o caminho
            entre problema, visual, uso e entrega funcional.
          </p>
        </div>
      </Reveal>

      <div className="relative">
        <div className="absolute left-5 top-0 hidden h-full w-px bg-[#1E3654] lg:block" />

        <div className="grid gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal key={step.number} delay={index * 100}>
                <article className="relative grid gap-5 rounded-3xl border border-[#1E3654] bg-[#0C1B2E]/80 p-6 backdrop-blur transition hover:border-[#00D9FF]/70 lg:grid-cols-[auto_0.35fr_1fr] lg:items-center">
                  <div className="hidden h-11 w-11 items-center justify-center rounded-2xl border border-[#00D9FF]/35 bg-[#07111F] text-sm font-black text-[#00D9FF] shadow-[0_0_30px_rgba(0,217,255,0.12)] lg:flex">
                    {step.number}
                  </div>

                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#10233B] text-[#00D9FF]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#7F96AD]">
                      Etapa {step.number}
                    </p>

                    <h3 className="mt-1 text-2xl font-black text-[#F5FBFF]">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-7 text-[#A9BDD3]">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}