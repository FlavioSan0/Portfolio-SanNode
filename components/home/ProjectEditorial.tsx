import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "ABF Representações",
    category: "Identidade visual e presença digital",
    slug: "abf-representacoes",
    image: "/projetos/abf/logo-principal.png",
    context:
      "A ABF precisava de uma presença visual mais sólida para se apresentar de forma profissional no mercado de representação.",
    decision:
      "A direção visual foi construída com grafite profundo, dourado fosco e branco quente, criando uma marca sóbria, comercial e elegante.",
    deliverables: ["Logo", "Paleta", "Cartão", "Instagram"],
  },
  {
    number: "02",
    title: "Site de Casamento",
    category: "Convite digital com painel",
    slug: "site-casamento",
    image: "/projetos/site-casamento/mobile-home.png",
    context:
      "O projeto nasceu da necessidade de criar uma experiência digital completa para convidados e administração do evento.",
    decision:
      "Além do site público, a solução recebeu painel administrativo, RSVP, lista de presentes, PIX, cotas e galeria.",
    deliverables: ["RSVP", "Painel", "Presentes", "Mobile"],
  },
  {
    number: "03",
    title: "Controle de Estoque Mecânica",
    category: "Sistema web privado",
    slug: "controle-estoque-mecanica",
    image: "/projetos/estoque-case/dashboard.png",
    context:
      "O sistema foi criado para organizar estoque, entradas, saídas e movimentações em uma rotina real de oficina.",
    decision:
      "A estrutura evoluiu para uma base de gestão mecânica, com dashboard, histórico, cadastros e controle operacional.",
    deliverables: ["Dashboard", "Estoque", "Movimentações", "Gestão"],
  },
];

export default function ProjectEditorial() {
  return (
    <section id="projetos" className="border-y border-[#1E3654] bg-[#07111F]/78">
      <div className="container-site responsive-section">
        <Reveal>
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
                Projetos reais
              </p>

              <h2 className="responsive-title-lg mt-3 max-w-3xl font-black text-[#F5FBFF] text-balance">
                Trabalhos com contexto, decisão e entrega.
              </h2>
            </div>

            <p className="responsive-copy max-w-2xl text-[#A9BDD3] text-pretty">
              Cada projeto aqui mostra um problema sendo organizado, uma direção
              sendo definida e uma solução saindo do papel.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-10">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 120}>
              <article className="overflow-hidden rounded-[2rem] border border-[#1E3654] bg-[#0C1B2E]/78 backdrop-blur">
                <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="relative min-h-[320px] overflow-hidden bg-[#07111F]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.15),rgba(7,17,31,0.7))]" />

                    <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-[#07111F]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
                      {project.category}
                    </div>

                    <div className="absolute bottom-6 left-6 text-7xl font-black text-white/15">
                      {project.number}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between p-7 md:p-9">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
                        SanNode Case
                      </p>

                      <h3 className="mt-3 text-4xl font-black text-[#F5FBFF] md:text-5xl">
                        {project.title}
                      </h3>

                      <div className="mt-7 grid gap-5">
                        <div>
                          <p className="text-sm font-bold text-[#F5FBFF]">
                            Contexto
                          </p>

                          <p className="mt-2 text-sm leading-7 text-[#A9BDD3]">
                            {project.context}
                          </p>
                        </div>

                        <div className="rounded-3xl border border-[#1E3654] bg-[#07111F]/70 p-5">
                          <div className="flex gap-3">
                            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#00D9FF]" />

                            <div>
                              <p className="text-sm font-bold text-[#F5FBFF]">
                                Decisão de projeto
                              </p>

                              <p className="mt-2 text-sm leading-7 text-[#A9BDD3]">
                                {project.decision}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.deliverables.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-[#1E3654] bg-[#10233B] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#A9BDD3]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8">
                      <Link
                        href={`/projetos/${project.slug}`}
                        className="tech-button inline-flex items-center justify-center rounded-2xl bg-[#0B2A5B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB]"
                      >
                        Ver case completo
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}