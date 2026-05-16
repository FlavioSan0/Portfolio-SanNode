import Reveal from "@/components/Reveal";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const problems = [
  {
    number: "01",
    question: "Minha marca ainda parece improvisada.",
    answer:
      "Organizo identidade, presença visual e comunicação para a marca se apresentar com mais clareza, consistência e profissionalismo.",
    outcome: "Identidade mais clara",
  },
  {
    number: "02",
    question: "Tenho um serviço, mas não tenho uma página boa.",
    answer:
      "Crio sites e landing pages que explicam o que você faz, mostram valor e facilitam o contato com quem pode virar cliente.",
    outcome: "Página publicada",
  },
  {
    number: "03",
    question: "Meu processo está manual demais.",
    answer:
      "Estruturo sistemas, painéis e automações para reduzir retrabalho, organizar informações e dar mais controle à rotina.",
    outcome: "Fluxo mais organizado",
  },
  {
    number: "04",
    question: "Tenho uma ideia, mas não sei por onde começar.",
    answer:
      "Ajudo a transformar ideias soltas em fluxo, estrutura, tela, conteúdo e entrega funcional, começando pelo que faz mais sentido agora.",
    outcome: "Caminho definido",
  },
];

export default function Problems() {
  return (
    <section
      id="problemas"
      className="relative overflow-hidden border-b border-[#1E3654]/40 bg-[#040B14]/28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(0,217,255,0.08),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(37,99,235,0.08),transparent_34%)]" />

      <div className="container-site responsive-section relative">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
                O que eu resolvo
              </p>

              <h2 className="responsive-title-lg mt-3 max-w-3xl font-black text-[#F5FBFF] text-balance">
                Nem todo projeto começa sabendo exatamente o que precisa.
              </h2>
            </div>

            <p className="responsive-copy max-w-2xl text-[#A9BDD3] text-pretty">
              Às vezes começa com uma ideia bagunçada, uma marca sem padrão, uma
              página faltando ou um processo manual que poderia ser mais simples.
              O primeiro passo é organizar o problema.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-[#1E3654]/70 bg-[#07111F]/58 backdrop-blur">
          {problems.map((item, index) => {
            const isLast = index === problems.length - 1;

            return (
              <Reveal key={item.number} delay={index * 90}>
                <article
                  className={[
                    "group relative grid gap-6 p-6 transition hover:bg-[#0C1B2E]/55 md:p-8 lg:grid-cols-[0.22fr_0.88fr_0.42fr] lg:items-center",
                    !isLast ? "border-b border-[#1E3654]/55" : "",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between gap-4 lg:block">
                    <p className="text-5xl font-black leading-none text-white/10 transition group-hover:text-[#00D9FF]/20 md:text-6xl">
                      {item.number}
                    </p>

                    <span className="rounded-full border border-[#1E3654]/70 bg-[#040B14]/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#7F96AD] lg:mt-5 lg:inline-flex">
                      Dor real
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black tracking-tight text-[#F5FBFF] md:text-3xl">
                      {item.question}
                    </h3>

                    <p className="mt-3 max-w-3xl text-sm leading-7 text-[#A9BDD3]">
                      {item.answer}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-[#1E3654]/70 bg-[#040B14]/58 px-4 py-3 lg:justify-self-end">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#00D9FF]" />

                    <span className="text-sm font-semibold text-[#D9F4FF]">
                      {item.outcome}
                    </span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={180}>
          <div className="mt-8 grid gap-6 rounded-[2rem] border border-[#00D9FF]/18 bg-[#00D9FF]/[0.035] p-6 backdrop-blur md:p-8 lg:grid-cols-[1fr_0.38fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00D9FF]">
                O ponto de partida pode ser simples
              </p>

              <p className="mt-3 max-w-3xl text-base leading-8 text-[#A9BDD3]">
                Não precisa chegar com tudo definido. Pode chegar com a ideia do
                jeito que ela está. A primeira parte do trabalho é entender,
                filtrar e transformar isso em um caminho viável.
              </p>
            </div>

            <a
              href="#contato"
              className="tech-button inline-flex items-center justify-center rounded-2xl bg-[#0B2A5B] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#2563EB]"
            >
              Organizar minha ideia
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}