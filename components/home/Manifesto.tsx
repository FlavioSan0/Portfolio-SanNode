import Reveal from "@/components/Reveal";
import { ArrowDownRight } from "lucide-react";

export default function Manifesto() {
  return (
    <section className="border-y border-[#1E3654] bg-[#07111F]/70">
      <div className="container-site responsive-section">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00D9FF]">
                Método SanNode
              </p>

              <h2 className="responsive-title-lg mt-4 max-w-3xl font-black text-[#F5FBFF] text-balance">
                Não é só deixar bonito.
              </h2>
            </div>

            <div className="rounded-[2rem] border border-[#1E3654] bg-[#0C1B2E]/78 p-6 backdrop-blur md:p-8">
              <p className="text-2xl font-black leading-tight text-[#F5FBFF] md:text-4xl">
                Um projeto digital precisa ser claro para quem vê, simples para
                quem usa e possível de evoluir depois da entrega.
              </p>

              <p className="mt-6 text-base leading-8 text-[#A9BDD3]">
                Por isso eu penso em visual, fluxo, dados, responsividade,
                organização e execução desde o início. A ideia não é criar uma
                tela bonita isolada, mas construir algo que faça sentido no uso
                real.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {["Visual limpo", "Lógica clara", "Uso real"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#1E3654] bg-[#07111F]/80 px-4 py-4"
                  >
                    <p className="text-sm font-bold text-[#00D9FF]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-[#1E3654] bg-[#07111F]/60 p-5 backdrop-blur md:flex-row md:items-center md:justify-between">
            <p className="max-w-3xl text-sm leading-7 text-[#A9BDD3]">
              Antes do visual, vem a organização. Antes do código, vem o fluxo.
              Antes da entrega, vem entender o que realmente precisa funcionar.
            </p>

            <a
              href="#processo"
              className="group inline-flex items-center justify-center text-sm font-semibold text-[#00D9FF]"
            >
              Ver meu processo
              <ArrowDownRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1 group-hover:translate-y-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}