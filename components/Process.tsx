import Reveal from "@/components/Reveal";

const processSteps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Entendo o objetivo do projeto, o público, o problema real e o que precisa ser entregue primeiro.",
  },
  {
    number: "02",
    title: "Estrutura",
    description:
      "Organizo as seções, funcionalidades, hierarquia visual, fluxo do usuário e prioridades de desenvolvimento.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Crio a direção visual com paleta, componentes, cards, tipografia e layout responsivo.",
  },
  {
    number: "04",
    title: "Desenvolvimento",
    description:
      "Transformo a ideia em interface funcional, conectando dados, formulários, painéis e integrações quando necessário.",
  },
];

export default function Process() {
  return (
    <section id="processo" className="container-site py-20">
      <Reveal>
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
              Processo
            </p>

            <h2 className="responsive-title-lg mt-3 max-w-3xl font-black text-[#F5FBFF] text-balance">
              Do planejamento ao projeto publicado.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-[#A9BDD3]">
            Uma boa entrega depende de organização. Por isso, o site também
            comunica método, não apenas resultado visual.
          </p>
        </div>
      </Reveal>

      <div className="relative">
        <div className="absolute left-5 top-0 hidden h-full w-px bg-[#1E3654] md:block xl:left-1/2 xl:-translate-x-1/2" />

        <div className="grid gap-6">
          {processSteps.map((step, index) => (
            <Reveal
              key={step.number}
              delay={index * 120}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div
                className={[
                  "relative grid gap-5 md:grid-cols-[auto_1fr] md:items-start xl:grid-cols-[1fr_auto_1fr]",
                ].join(" ")}
              >
                <div
                  className={[
                    "hidden xl:block",
                    index % 2 === 0 ? "" : "xl:order-3",
                  ].join(" ")}
                >
                  <div className="tech-card rounded-3xl border border-[#1E3654] bg-[#0C1B2E] p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00D9FF]">
                      Etapa {step.number}
                    </p>
                    <h3 className="mt-4 text-2xl font-bold text-[#F5FBFF]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#A9BDD3]">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#00D9FF]/40 bg-[#07111F] text-sm font-black text-[#00D9FF] shadow-[0_0_30px_rgba(0,217,255,0.16)] md:mt-2 xl:order-2">
                  {step.number}
                </div>

                <div className="xl:hidden">
                  <div className="tech-card rounded-3xl border border-[#1E3654] bg-[#0C1B2E] p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00D9FF]">
                      Etapa {step.number}
                    </p>
                    <h3 className="mt-4 text-2xl font-bold text-[#F5FBFF]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#A9BDD3]">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div
                  className={[
                    "hidden xl:block",
                    index % 2 === 0 ? "xl:order-3" : "",
                  ].join(" ")}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}