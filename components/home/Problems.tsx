import Reveal from "@/components/Reveal";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const problems = [
  {
    question: "Sua marca ainda parece improvisada?",
    answer:
      "Eu organizo identidade, presença visual e comunicação para sua marca se apresentar com mais clareza e profissionalismo.",
  },
  {
    question: "Seu serviço precisa de uma página melhor?",
    answer:
      "Eu crio sites e landing pages que explicam o que você faz, mostram valor e facilitam o contato com o cliente.",
  },
  {
    question: "Seu processo está manual demais?",
    answer:
      "Eu estruturo sistemas, painéis e automações para reduzir retrabalho, organizar informações e dar mais controle à rotina.",
  },
  {
    question: "Você tem uma ideia, mas não sabe por onde começar?",
    answer:
      "Eu ajudo a transformar ideias soltas em fluxo, tela, conteúdo, visual e entrega funcional.",
  },
];

export default function Problems() {
  return (
    <section className="container-site responsive-section">
      <Reveal>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
              O que eu resolvo
            </p>

            <h2 className="responsive-title-lg mt-3 max-w-3xl font-black text-[#F5FBFF] text-balance">
              Antes de criar uma tela, eu organizo o problema.
            </h2>
          </div>

          <p className="responsive-copy max-w-2xl text-[#A9BDD3] text-pretty">
            A SanNode trabalha na ponte entre visual, lógica e uso real. A ideia
            é sair do improviso e construir algo que tenha clareza, função e boa
            apresentação.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {problems.map((item, index) => (
          <Reveal key={item.question} delay={index * 90}>
            <article className="group relative overflow-hidden rounded-3xl border border-[#1E3654] bg-[#0C1B2E]/80 p-6 backdrop-blur transition hover:border-[#00D9FF]/70">
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-[#00D9FF]/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

              <div className="relative flex gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#1E3654] bg-[#10233B] text-[#00D9FF]">
                  <CheckCircle2 className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#F5FBFF]">
                    {item.question}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#A9BDD3]">
                    {item.answer}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={180}>
        <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-[#1E3654] bg-[#07111F]/70 p-6 backdrop-blur md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-[#A9BDD3]">
            Se o projeto ainda está confuso, esse é justamente o ponto de
            partida: organizar a ideia antes de transformar em visual, site,
            sistema ou automação.
          </p>

          <a
            href="#contato"
            className="tech-button inline-flex items-center justify-center rounded-2xl bg-[#0B2A5B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB]"
          >
            Conversar sobre uma ideia
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}