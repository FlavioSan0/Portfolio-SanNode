import Reveal from "@/components/Reveal";
import { ArrowDownRight, CheckCircle2 } from "lucide-react";

const principles = [
  "Visual limpo",
  "Lógica clara",
  "Uso real",
  "Evolução possível",
];

export default function Manifesto() {
  return (
    <section className="relative overflow-hidden border-y border-[#1E3654]/50 bg-[#07111F]/54">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,217,255,0.08),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(37,99,235,0.08),transparent_34%)]" />

      <div className="container-site responsive-section relative">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00D9FF]">
                Método SanNode
              </p>

              <h2 className="mt-4 max-w-xl text-4xl font-black leading-[0.98] tracking-[-0.05em] text-[#F5FBFF] md:text-6xl">
                Não é só deixar bonito.
              </h2>
            </div>

            <div>
              <p className="max-w-4xl text-3xl font-black leading-tight tracking-[-0.04em] text-[#F5FBFF] md:text-5xl">
                Um projeto digital precisa ser entendido, usado, mantido e
                evoluído depois da entrega.
              </p>

              <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.72fr]">
                <div className="rounded-[1.75rem] border border-[#1E3654]/70 bg-[#07111F]/58 p-6 backdrop-blur">
                  <p className="text-base leading-8 text-[#A9BDD3]">
                    Por isso eu penso em visual, fluxo, dados,
                    responsividade, organização e execução desde o início. A
                    ideia não é criar uma tela bonita isolada, mas construir uma
                    solução que faça sentido no uso real.
                  </p>

                  <p className="mt-5 text-base leading-8 text-[#A9BDD3]">
                    Antes do visual, vem a organização. Antes do código, vem o
                    fluxo. Antes da entrega, vem entender o que realmente
                    precisa funcionar.
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-[#1E3654]/70 bg-[#0C1B2E]/62 p-6 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
                    O que guia o projeto
                  </p>

                  <div className="mt-5 grid gap-3">
                    {principles.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-[#1E3654]/70 bg-[#07111F]/68 px-4 py-3"
                      >
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#00D9FF]" />

                        <span className="text-sm font-semibold text-[#D9F4FF]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 rounded-[1.75rem] border border-[#00D9FF]/18 bg-[#00D9FF]/[0.035] p-5 backdrop-blur md:flex-row md:items-center md:justify-between">
                <p className="max-w-3xl text-sm leading-7 text-[#A9BDD3]">
                  O objetivo é transformar ideias soltas em algo claro,
                  apresentável e funcional — sem perder personalidade, sem
                  parecer template e sem criar complexidade desnecessária.
                </p>

                <a
                  href="#processo"
                  className="group inline-flex shrink-0 items-center justify-center text-sm font-semibold text-[#00D9FF]"
                >
                  Ver meu processo
                  <ArrowDownRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1 group-hover:translate-y-1" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}