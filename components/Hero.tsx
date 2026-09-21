import { ArrowRight, MessageCircle } from "lucide-react";

import { contact } from "@/data/contact";

const process = [
  ["01", "Entender", "Mapeamos a necessidade, a rotina e o que realmente precisa ser resolvido."],
  ["02", "Construir", "Transformamos o diagnóstico em uma solução clara, responsiva e utilizável."],
  ["03", "Colocar em uso", "Validamos, publicamos e deixamos uma base preparada para continuar evoluindo."],
] as const;

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="container-site grid gap-14 pb-20 pt-24 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pb-28 md:pt-32 lg:gap-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#3FE3FF]">
            San_Node • Soluções digitais
          </p>

          <h1 className="mt-5 max-w-4xl text-[clamp(2.75rem,5.2vw,5.35rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-[#F7FBFF] text-balance">
            Sites, sistemas e automações para
            <span className="block text-[#3FE3FF]">organizar a operação e vender melhor.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#B7C5D9] md:text-lg">
            A San_Node desenvolve presença digital e ferramentas sob medida para
            negócios que precisam sair do improviso, centralizar processos e
            trabalhar com mais clareza.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#servicos"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#1E90FF] px-6 py-3 font-bold text-white transition hover:bg-[#1679D8]"
            >
              Ver soluções
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#3FE3FF]/35 bg-[#0F1B3D]/70 px-6 py-3 font-bold text-[#F7FBFF] transition hover:border-[#3FE3FF] hover:text-[#3FE3FF]"
            >
              Conversar sobre meu projeto
              <MessageCircle className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>

        <aside className="border-l border-[#243B5A] pl-6 sm:pl-8 lg:pl-10">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#7F93AD]">
            Do diagnóstico ao deploy
          </p>
          <div className="mt-6 divide-y divide-[#243B5A]/70 border-y border-[#243B5A]/70">
            {process.map(([number, title, description]) => (
              <div key={number} className="grid grid-cols-[auto_1fr] gap-4 py-6">
                <span className="text-xs font-bold tabular-nums text-[#3FE3FF]">{number}</span>
                <div>
                  <h2 className="text-lg font-bold text-[#F7FBFF]">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-[#9EADC2]">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
