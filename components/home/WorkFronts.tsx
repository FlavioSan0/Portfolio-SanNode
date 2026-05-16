import Reveal from "@/components/Reveal";
import {
  ArrowUpRight,
  Code2,
  MonitorSmartphone,
  Palette,
  Workflow,
} from "lucide-react";

const fronts = [
  {
    number: "01",
    icon: Palette,
    title: "Visual",
    subtitle: "Quando a marca precisa parecer mais profissional.",
    description:
      "Aqui entram identidade visual, organização de presença digital, peças para redes sociais, apresentações, interfaces e materiais que ajudam uma marca a se comunicar melhor.",
    items: ["Identidade visual", "Paleta", "Social media", "UI visual"],
  },
  {
    number: "02",
    icon: MonitorSmartphone,
    title: "Web",
    subtitle: "Quando a ideia precisa virar uma página clara e publicada.",
    description:
      "Criação de sites, landing pages, páginas de apresentação, portfólios, páginas de case e experiências responsivas pensadas para funcionar bem no celular e no desktop.",
    items: ["Landing pages", "Sites", "Portfólios", "Páginas de case"],
  },
  {
    number: "03",
    icon: Code2,
    title: "Sistemas",
    subtitle: "Quando o processo precisa sair do improviso.",
    description:
      "Desenvolvimento de sistemas web, dashboards, cadastros, filtros, painéis administrativos e estruturas digitais para organizar rotinas, dados e operações.",
    items: ["Dashboards", "CRUD", "Gestão", "Painéis"],
  },
  {
    number: "04",
    icon: Workflow,
    title: "Automações",
    subtitle: "Quando uma tarefa repetitiva pode virar fluxo automático.",
    description:
      "Automação de processos com ferramentas como Google Forms, Sheets, Drive, Apps Script e fluxos personalizados para reduzir retrabalho e organizar informações.",
    items: ["Google Workspace", "Apps Script", "Planilhas", "Fluxos"],
  },
];

export default function WorkFronts() {
  return (
    <section id="servicos" className="border-y border-[#1E3654] bg-[#07111F]/78">
      <div className="container-site responsive-section">
        <Reveal>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
                Frentes de trabalho
              </p>

              <h2 className="responsive-title-lg mt-3 max-w-3xl font-black text-[#F5FBFF] text-balance">
                O projeto pode começar por uma marca, uma tela ou um processo.
              </h2>
            </div>

            <p className="responsive-copy max-w-2xl text-[#A9BDD3] text-pretty">
              Nem todo cliente chega sabendo exatamente o que precisa. Às vezes
              começa com uma ideia, uma dor operacional ou uma apresentação que
              ainda não transmite profissionalismo.
            </p>
          </div>
        </Reveal>

        <div className="overflow-hidden rounded-[2rem] border border-[#1E3654] bg-[#0C1B2E]/74 backdrop-blur">
          {fronts.map((front, index) => {
            const Icon = front.icon;
            const isLast = index === fronts.length - 1;

            return (
              <Reveal key={front.title} delay={index * 90}>
                <article
                  className={[
                    "group grid gap-6 p-6 transition hover:bg-[#10233B]/35 md:p-8 lg:grid-cols-[0.24fr_0.76fr]",
                    !isLast ? "border-b border-[#1E3654]" : "",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-4 lg:block">
                    <div>
                      <p className="text-5xl font-black text-white/10">
                        {front.number}
                      </p>

                      <div className="mt-4 flex h-13 w-13 items-center justify-center rounded-2xl border border-[#1E3654] bg-[#07111F] text-[#00D9FF] shadow-[0_0_30px_rgba(0,217,255,0.08)]">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    <span className="rounded-full border border-[#1E3654] bg-[#07111F]/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#7F96AD] lg:hidden">
                      {front.title}
                    </span>
                  </div>

                  <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
                    <div>
                      <p className="hidden text-sm font-semibold uppercase tracking-[0.24em] text-[#00D9FF] lg:block">
                        {front.title}
                      </p>

                      <h3 className="mt-0 text-2xl font-black text-[#F5FBFF] lg:mt-3 lg:text-3xl">
                        {front.subtitle}
                      </h3>
                    </div>

                    <div>
                      <p className="text-sm leading-7 text-[#A9BDD3]">
                        {front.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {front.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-[#1E3654] bg-[#07111F]/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#A9BDD3]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={180}>
          <div className="mt-8 grid gap-6 rounded-[2rem] border border-[#1E3654] bg-[#07111F]/68 p-6 backdrop-blur md:p-8 lg:grid-cols-[1fr_0.42fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00D9FF]">
                Não sabe por onde começar?
              </p>

              <p className="mt-3 max-w-3xl text-lg leading-8 text-[#A9BDD3]">
                Pode me chamar com a ideia ainda bagunçada. A primeira parte do
                trabalho é justamente organizar o caminho e entender qual
                solução faz mais sentido.
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