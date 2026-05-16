import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "ABF Representações",
    category: "Identidade visual + landing page",
    slug: "abf-representacoes",
    image: "/projetos/abf-case/landing-page.png",
    imageMode: "screen",
    context:
      "A ABF precisava de uma presença visual mais sólida e de uma página institucional para apresentar a empresa, suas representações e seus canais de contato.",
    decision:
      "A identidade visual foi aplicada em uma landing page escura, sóbria e comercial, conectando marca, apresentação, serviços e chamada para contato.",
    result:
      "O projeto passou a ter uma presença digital mais completa, unindo marca profissional e página publicada para apresentação comercial.",
    deliverables: ["Logo", "Identidade", "Landing page", "Contato"],
  },
  {
    number: "02",
    title: "Site de Casamento",
    category: "Site + painel",
    slug: "site-casamento",
    image: "/projetos/site-casamento/mobile-home.png",
    imageMode: "screen",
    context:
      "Convite digital com experiência para convidados e painel administrativo para organização do evento.",
    decision:
      "Estrutura com RSVP, lista de presentes, cotas, PIX, galeria e área de gestão para o casal.",
    result: "Evento apresentado e administrado em um ambiente digital próprio.",
    deliverables: ["RSVP", "Painel", "Presentes", "Mobile"],
  },
  {
    number: "03",
    title: "Controle de Estoque Mecânica",
    category: "Sistema web",
    slug: "controle-estoque-mecanica",
    image: "/projetos/estoque-case/dashboard.png",
    imageMode: "screen",
    context:
      "Sistema privado para organizar produtos, entradas, saídas e movimentações em uma rotina real de oficina.",
    decision:
      "Base operacional com dashboard, cadastros, histórico e estrutura para evoluir para gestão mecânica.",
    result: "Mais controle sobre estoque, registros e movimentações.",
    deliverables: ["Dashboard", "Estoque", "Gestão"],
  },
];

export default function ProjectEditorial() {
  return (
    <section id="projetos" className="border-y border-[#1E3654] bg-[#07111F]/78">
      <div className="container-site responsive-section">
        <Reveal>
          <div className="mx-auto mb-10 grid max-w-5xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
                Projetos reais
              </p>

              <h2 className="responsive-title-lg mt-3 max-w-3xl font-black text-[#F5FBFF] text-balance">
                Trabalhos com contexto, decisão e entrega.
              </h2>
            </div>

            <p className="responsive-copy max-w-2xl text-[#A9BDD3] text-pretty">
              Cada projeto mostra uma ideia sendo organizada, uma direção sendo
              definida e uma solução saindo do papel.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-5xl gap-5">
          {projects.map((project, index) => {
            return (
              <Reveal key={project.slug} delay={index * 100}>
                <article className="relative overflow-hidden rounded-[1.75rem] border border-[#1E3654] bg-[#0C1B2E]/72 backdrop-blur transition hover:border-[#00D9FF]/60">
                  <div className="absolute right-0 top-0 h-48 w-48 translate-x-20 -translate-y-20 rounded-full bg-[#00D9FF]/8 blur-3xl" />

                  <div className="relative grid gap-0 lg:grid-cols-[0.72fr_1.28fr]">
                    <div className="relative min-h-[220px] overflow-hidden bg-[#07111F] lg:min-h-[260px]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 36vw"
                        className={[
                          "object-cover transition duration-700 hover:scale-[1.03]",
                          project.slug === "site-casamento"
                            ? "object-top"
                            : "object-center",
                        ].join(" ")}
                      />

                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.02),rgba(7,17,31,0.62))]" />

                      <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#07111F]/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                        {project.category}
                      </div>

                      <div className="absolute bottom-4 left-4">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#00D9FF]">
                          SanNode Case
                        </p>

                        <p className="mt-1 text-5xl font-black leading-none text-white/20">
                          {project.number}
                        </p>
                      </div>
                    </div>

                    <div className="relative flex flex-col justify-between p-5 md:p-6">
                      <div>
                        <div className="mb-4 flex items-center justify-between gap-4">
                          <span className="rounded-full border border-[#1E3654] bg-[#07111F]/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A9BDD3]">
                            Projeto {project.number}
                          </span>

                          <span className="text-4xl font-black text-white/5">
                            {project.number}
                          </span>
                        </div>

                        <h3 className="text-2xl font-black tracking-tight text-[#F5FBFF] md:text-3xl">
                          {project.title}
                        </h3>

                        <div className="mt-5 grid gap-4">
                          <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#00D9FF]">
                              Contexto
                            </p>

                            <p className="mt-2 text-sm leading-6 text-[#A9BDD3]">
                              {project.context}
                            </p>
                          </div>

                          <div className="rounded-2xl border border-[#1E3654] bg-[#07111F]/70 p-4">
                            <div className="flex gap-3">
                              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#00D9FF]" />

                              <div>
                                <p className="text-sm font-bold text-[#F5FBFF]">
                                  Decisão
                                </p>

                                <p className="mt-1 text-sm leading-6 text-[#A9BDD3]">
                                  {project.decision}
                                </p>
                              </div>
                            </div>
                          </div>

                          <p className="text-sm leading-6 text-[#A9BDD3]">
                            <span className="font-semibold text-[#F5FBFF]">
                              Resultado:
                            </span>{" "}
                            {project.result}
                          </p>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.deliverables.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-[#1E3654] bg-[#10233B] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#A9BDD3]"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6">
                        <Link
                          href={`/projetos/${project.slug}`}
                          className="tech-button inline-flex items-center justify-center rounded-2xl bg-[#0B2A5B] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB]"
                        >
                          Ver case
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}