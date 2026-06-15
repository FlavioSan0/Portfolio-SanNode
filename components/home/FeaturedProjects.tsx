import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const featuredProjects = [
  {
    number: "01",
    title: "ABF Representações",
    category: "Identidade visual",
    slug: "abf-representacoes",
    summary:
      "De uma presença visual inicial para uma identidade comercial mais sólida, com logo, paleta, aplicações, cartão e Instagram estruturado.",
    result: "Marca mais clara, profissional e pronta para presença digital.",
    accent: "gold",
    tags: ["Logo", "Instagram", "Aplicações"],
  },
  {
    number: "02",
    title: "Site de Casamento",
    category: "Site e painel administrativo",
    slug: "site-casamento",
    summary:
      "Convite digital com RSVP, lista de presentes, cotas, PIX, galeria e painel para o casal gerenciar informações do evento.",
    result: "Experiência digital completa para convidados e administração.",
    accent: "wedding",
    tags: ["RSVP", "Painel", "Presentes"],
  },
  {
    number: "03",
    title: "MesaFlow",
    category: "Sistema SaaS / MVP funcional",
    slug: "mesaflow-sistema-garcom",
    summary:
      "Sistema web para pequenos negócios organizarem cardápio digital, pedidos, balcão, delivery, mesas, garçom e gestão em uma única plataforma.",
    result: "Produto pronto para apresentação comercial e validação com clientes reais.",
    accent: "blue",
    tags: ["SaaS", "Pedidos", "Cardápio"],
  },
];

function getAccentClasses(accent: string) {
  if (accent === "gold") {
    return {
      badge: "text-[#C6A15B] border-[#C6A15B]/25 bg-[#C6A15B]/10",
      visual:
        "bg-[radial-gradient(circle_at_top_right,#C6A15B33,transparent_35%),linear-gradient(135deg,#0F1115,#1A1D23)]",
      text: "text-[#C6A15B]",
    };
  }

  if (accent === "wedding") {
    return {
      badge: "text-[#F4EFE7] border-white/20 bg-white/10",
      visual:
        "bg-[radial-gradient(circle_at_top_right,#80000066,transparent_35%),linear-gradient(135deg,#08265E,#07111F)]",
      text: "text-[#D8BFA3]",
    };
  }

  return {
    badge: "text-[#00D9FF] border-[#00D9FF]/25 bg-[#00D9FF]/10",
    visual:
      "bg-[radial-gradient(circle_at_top_right,#00D9FF33,transparent_35%),linear-gradient(135deg,#0B2A5B,#091728)]",
    text: "text-[#00D9FF]",
  };
}

export default function FeaturedProjects() {
  return (
    <section id="projetos" className="border-y border-[#1E3654]">
      <div className="container-site responsive-section">
        <Reveal>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
                Projetos reais
              </p>

              <h2 className="responsive-title-lg mt-3 max-w-3xl font-black text-[#F5FBFF] text-balance">
                Trabalhos onde a ideia saiu do papel e virou entrega.
              </h2>
            </div>

            <p className="responsive-copy max-w-2xl text-[#A9BDD3] text-pretty">
              Em vez de mostrar apenas telas bonitas, cada case apresenta
              contexto, decisões e entregas reais — do visual à estrutura
              funcional.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6">
          {featuredProjects.map((project, index) => {
            const accent = getAccentClasses(project.accent);

            return (
              <Reveal key={project.slug} delay={index * 120}>
                <article className="group overflow-hidden rounded-[2rem] border border-[#1E3654] bg-[#0C1B2E]/80 backdrop-blur transition hover:border-[#00D9FF]/70">
                  <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                    <div
                      className={[
                        "relative min-h-[260px] overflow-hidden p-7 lg:min-h-[360px]",
                        accent.visual,
                      ].join(" ")}
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />

                      <div className="relative flex h-full flex-col justify-between">
                        <div className="flex items-center justify-between gap-4">
                          <span
                            className={[
                              "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]",
                              accent.badge,
                            ].join(" ")}
                          >
                            {project.category}
                          </span>

                          <span className="text-5xl font-black text-white/10">
                            {project.number}
                          </span>
                        </div>

                        <div>
                          <p
                            className={[
                              "text-sm font-semibold uppercase tracking-[0.28em]",
                              accent.text,
                            ].join(" ")}
                          >
                            SanNode Case
                          </p>

                          <h3 className="mt-3 text-4xl font-black text-white md:text-5xl">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between p-7 md:p-8">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#00D9FF]">
                          O que foi construído
                        </p>

                        <p className="mt-4 text-base leading-8 text-[#A9BDD3]">
                          {project.summary}
                        </p>

                        <div className="mt-6 rounded-3xl border border-[#1E3654] bg-[#07111F]/70 p-5">
                          <div className="flex gap-3">
                            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#00D9FF]" />

                            <div>
                              <p className="text-sm font-semibold text-[#F5FBFF]">
                                Resultado percebido
                              </p>

                              <p className="mt-1 text-sm leading-6 text-[#A9BDD3]">
                                {project.result}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-[#1E3654] bg-[#10233B] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#A9BDD3]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8">
                        <Link
                          href={`/projetos/${project.slug}`}
                          className="tech-button group/link inline-flex items-center justify-center rounded-2xl bg-[#0B2A5B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB]"
                        >
                          Ver case completo
                          <ArrowUpRight className="ml-2 h-4 w-4 transition group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
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