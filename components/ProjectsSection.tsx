import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  Palette,
} from "lucide-react";
import { projects } from "@/data/projects";
import Reveal from "@/components/Reveal";

function ProjectPreview({ slug, category }: { slug: string; category: string }) {
  if (slug === "abf-representacoes") {
    return (
      <div className="mb-6 h-44 rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,#0F1115,#1A1D23)] p-5">
        <div className="flex h-full flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="h-12 w-12 rounded-2xl bg-[#C6A15B]" />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C6A15B]">
              Branding
            </p>
          </div>

          <div>
            <p className="text-4xl font-black text-white">ABF</p>
            <p className="mt-2 text-xs uppercase tracking-[0.28em] text-white/45">
              Representações
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (slug === "site-casamento") {
    return (
      <div className="mb-6 h-44 rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,#80000066,transparent_30%),linear-gradient(135deg,#08265E,#07111F)] p-5">
        <div className="flex h-full flex-col justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[#D8BFA3]">
            ♥
          </div>

          <div>
            <p className="text-xl font-black text-white">Flávio & Ana</p>
            <p className="mt-2 text-xs uppercase tracking-[0.24em] text-white/55">
              RSVP • Presentes • Painel
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (slug === "controle-estoque-mecanica") {
    return (
      <div className="mb-6 h-44 rounded-[1.5rem] border border-[#1E3654] bg-[linear-gradient(135deg,#0C1B2E,#10233B)] p-5">
        <div className="grid h-full grid-cols-[0.75fr_1.25fr] gap-4">
          <div className="space-y-3">
            <div className="h-8 rounded-xl bg-[#00D9FF]/20" />
            <div className="h-8 rounded-xl bg-white/10" />
            <div className="h-8 rounded-xl bg-white/10" />
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#07111F]/70 p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-[#00D9FF]">
              Dashboard
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-10 rounded-xl bg-[#00D9FF]/15" />
              <div className="h-10 rounded-xl bg-white/10" />
              <div className="h-10 rounded-xl bg-white/10" />
              <div className="h-10 rounded-xl bg-[#2563EB]/20" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (slug === "automacoes-google-workspace") {
    return (
      <div className="mb-6 h-44 rounded-[1.5rem] border border-[#1E3654] bg-[radial-gradient(circle_at_top_right,#00D9FF33,transparent_30%),linear-gradient(135deg,#0B2A5B,#091728)] p-5">
        <div className="flex h-full items-center justify-between gap-2">
          {["Forms", "Sheets", "Script", "Drive"].map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-[10px] font-bold text-white/80">
                {item}
              </div>
              {index < 3 && (
                <ArrowUpRight className="hidden h-4 w-4 text-[#00D9FF] sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mb-6 h-44 rounded-[1.5rem] border border-[#1E3654] bg-[radial-gradient(circle_at_top_right,#00D9FF33,transparent_30%),radial-gradient(circle_at_bottom_left,#2563EB22,transparent_35%),linear-gradient(135deg,#0B2A5B,#091728)] p-5">
      <div className="flex h-full flex-col justify-between">
        {category === "design" ? (
          <Palette className="h-7 w-7 text-white/90" />
        ) : (
          <Code2 className="h-7 w-7 text-white/90" />
        )}

        <p className="text-xs uppercase tracking-[0.25em] text-white/70">
          {category === "design" ? "Design case" : "Dev case"}
        </p>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const designProjects = projects.filter(
    (project) => project.category === "design"
  );

  const programmingProjects = projects.filter(
    (project) => project.category === "programacao"
  );

  return (
    <section id="projetos">
      <div className="container-site py-20">
        <Reveal>
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
                Projetos de design
              </p>

              <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-[#F5FBFF] md:text-5xl">
                Marcas, peças e materiais com boa apresentação e clareza visual.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-[#A9BDD3]">
              Aqui entram trabalhos de identidade visual, social media,
              materiais editoriais, apresentações e peças para divulgação.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {designProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 90}>
              <article className="tech-card tech-glow h-full rounded-3xl border border-[#1E3654] bg-[#0C1B2E] p-6 text-white hover:border-[#00D9FF]">
                <ProjectPreview
                  slug={project.slug}
                  category={project.category}
                />

                <p className="text-sm text-[#00D9FF]">{project.type}</p>

                <h3 className="mt-3 text-xl font-bold text-[#F5FBFF]">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#A9BDD3]">
                  {project.description}
                </p>

                <div className="mt-5 grid gap-2">
                  {project.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-[#C7D8E8]"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#00D9FF]" />
                      {item}
                    </div>
                  ))}
                </div>

                <a
                  href={`/projetos/${project.slug}`}
                  className="tech-button group mt-5 inline-flex items-center text-sm font-semibold text-[#D9F4FF] transition hover:text-[#00D9FF]"
                >
                  Ver case
                  <ArrowUpRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="border-y border-[#1E3654] bg-[#091728]">
        <div className="container-site py-20">
          <Reveal>
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
                  Projetos de programação
                </p>

                <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-[#F5FBFF] md:text-5xl">
                  Sistemas, sites e automações desenvolvidos para problemas
                  reais.
                </h2>
              </div>

              <p className="max-w-xl text-base leading-7 text-[#A9BDD3]">
                A seção técnica mostra capacidade de construir soluções
                completas: interface, dados, regras de negócio e painel
                administrativo.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {programmingProjects.map((project, index) => (
              <Reveal key={project.title} delay={index * 90}>
                <article className="tech-card tech-glow h-full rounded-3xl border border-[#1E3654] bg-[#0C1B2E] p-6 text-white hover:border-[#00D9FF] md:p-7">
                  <ProjectPreview
                    slug={project.slug}
                    category={project.category}
                  />

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm text-[#00D9FF]">
                        {project.stack?.join(" • ") || project.type}
                      </p>

                      <h3 className="mt-3 text-2xl font-bold text-[#F5FBFF]">
                        {project.title}
                      </h3>
                    </div>

                    <span className="w-fit rounded-full border border-[#1E3654] bg-[#10233B] px-3 py-1 text-xs text-[#A9BDD3]">
                      {project.status}
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-[#A9BDD3]">
                    {project.description}
                  </p>

                  <div className="mt-5 grid gap-2">
                    {project.highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm text-[#C7D8E8]"
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#00D9FF]" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={`/projetos/${project.slug}`}
                      className="tech-button group inline-flex items-center rounded-2xl border border-[#1E3654] bg-[#10233B] px-5 py-3 text-sm font-semibold text-[#F5FBFF] transition hover:border-[#00D9FF] hover:text-[#00D9FF]"
                    >
                      Ver case
                      <ArrowUpRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="tech-button group inline-flex items-center rounded-2xl bg-[#0B2A5B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB]"
                      >
                        Ver projeto
                        <ExternalLink className="ml-2 h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="tech-button group inline-flex items-center rounded-2xl border border-[#1E3654] bg-[#10233B] px-5 py-3 text-sm font-semibold text-[#F5FBFF] transition hover:border-[#00D9FF] hover:text-[#00D9FF]"
                      >
                        GitHub
                        <ArrowUpRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}