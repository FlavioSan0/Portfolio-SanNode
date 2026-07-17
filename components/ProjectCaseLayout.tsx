import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import Reveal from "@/components/Reveal";
import type { ProjectCase } from "@/data/project-cases";

type ProjectCaseLayoutProps = {
  project: ProjectCase;
  previousProject: ProjectCase;
  nextProject: ProjectCase;
};

export default function ProjectCaseLayout({
  project,
  previousProject,
  nextProject,
}: ProjectCaseLayoutProps) {
  const coverFit = project.category === "Design" ? "object-contain" : "object-cover";

  return (
    <main className="relative z-10 overflow-hidden bg-[#040B14] text-[#F5FBFF]">
      <section className="relative border-b border-[#1E3654]/25">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_8%,rgba(0,217,255,0.08),transparent_30%)]" />

        <div className="container-site relative pb-16 pt-8 md:pb-24 md:pt-10 lg:pb-28">
          <Reveal direction="none" duration={500}>
            <Link
              href="/#projetos"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#A9BDD3] transition-colors hover:text-[#00D9FF]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Voltar para projetos
            </Link>
          </Reveal>

          <div className="mt-12 grid min-w-0 gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-center lg:gap-16">
            <div className="min-w-0">
              <Reveal delay={40} distance={18}>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#00D9FF]">
                  {project.category}
                </p>
              </Reveal>

              <Reveal delay={100} distance={28}>
                <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.055em] text-balance sm:text-5xl md:text-6xl xl:text-7xl">
                  {project.title}
                </h1>
              </Reveal>

              <Reveal delay={170} distance={24}>
                <p className="mt-6 max-w-2xl text-base leading-7 text-[#A9BDD3] text-pretty md:text-lg md:leading-8">
                  {project.summary}
                </p>
              </Reveal>

              <Reveal delay={230} distance={20}>
                <div className="mt-8">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#6F879F]">
                    Tecnologias e disciplinas
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                    {project.stack.slice(0, 4).map((item) => (
                      <span key={item} className="text-sm font-semibold text-[#D7E8F6]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              {project.liveUrl ? (
                <Reveal delay={280} distance={18}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#0B2A5B] px-5 py-3 text-sm font-bold text-white transition duration-300 hover:bg-[#124084]"
                  >
                    {project.liveLabel ?? "Acessar projeto"}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Reveal>
              ) : null}
            </div>

            <Reveal direction="right" delay={120} distance={30} initialScale={0.985}>
              <div className="overflow-hidden rounded-[1.5rem] border border-[#1E3654]/50 bg-[#07111F] sm:rounded-[2rem]">
                <div className="relative aspect-[4/3] sm:aspect-[16/10]">
                  <Image
                    src={project.coverImage}
                    alt={`Imagem principal do projeto ${project.title}`}
                    fill
                    preload
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className={`${coverFit} p-0 ${project.category === "Design" ? "p-8 sm:p-12" : ""}`}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-site py-16 md:py-24">
        <Reveal distance={22}>
          <div className="grid gap-6 border-b border-[#1E3654]/35 pb-16 md:grid-cols-[0.34fr_1fr] md:gap-12 md:pb-24">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#00D9FF]">
              Contexto
            </p>
            <p className="max-w-4xl text-xl leading-8 text-[#D7E8F6] text-pretty md:text-2xl md:leading-10">
              {project.overview}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-12 py-16 md:grid-cols-2 md:gap-16 md:py-24">
          <Reveal direction="left" distance={24}>
            <article className="border-t border-[#00D9FF]/50 pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#00D9FF]">
                Necessidade
              </p>
              <p className="mt-5 text-base leading-8 text-[#A9BDD3] text-pretty">
                {project.challenge}
              </p>
            </article>
          </Reveal>

          <Reveal direction="right" delay={90} distance={24}>
            <article className="border-t border-[#1E3654] pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#00D9FF]">
                Solução desenvolvida
              </p>
              <p className="mt-5 text-base leading-8 text-[#A9BDD3] text-pretty">
                {project.solution}
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      {project.gallery?.length ? (
        <section className="border-y border-[#1E3654]/25 bg-[#07111F]/55 py-16 md:py-24">
          <div className="container-site">
            <SectionHeading
              label="Interface"
              title="Detalhes da solução"
              description="Telas e aplicações que mostram o projeto em uso."
            />

            <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-10">
              {project.gallery.map((item, index) => (
                <Reveal
                  key={item.src}
                  delay={index * 80}
                  distance={24}
                  initialScale={0.985}
                  className={project.gallery?.length === 3 && index === 0 ? "md:col-span-2" : ""}
                >
                  <figure>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[#1E3654]/40 bg-[#040B14]">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain"
                      />
                    </div>
                    {item.caption ? (
                      <figcaption className="mt-3 text-sm leading-6 text-[#7F96AD]">
                        {item.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="container-site py-16 md:py-24">
        <SectionHeading
          label="Principais funcionalidades"
          title="O que a solução entrega"
          description="Os recursos centrais do projeto, sem camadas desnecessárias."
        />

        <div className="mt-10 grid gap-x-12 md:grid-cols-2">
          {project.highlights.slice(0, 6).map((item, index) => (
            <Reveal key={item} delay={index * 70} distance={18}>
              <div className="flex gap-5 border-t border-[#1E3654]/40 py-5">
                <span className="mt-0.5 text-xs font-bold tabular-nums text-[#00D9FF]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-7 text-[#D7E8F6]">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-site pb-16 md:pb-24">
        <Reveal initialScale={0.985} distance={24}>
          <div className="rounded-[1.5rem] border border-[#00D9FF]/20 bg-[#07192A] p-7 sm:p-9 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#00D9FF]">
                  Impacto
                </p>
                <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-balance md:text-4xl">
                  Resultado do projeto
                </h2>
              </div>

              <div>
                <p className="text-base leading-8 text-[#D7E8F6] text-pretty">
                  {project.result}
                </p>
                <ul className="mt-7 grid gap-3">
                  {project.results.slice(0, 3).map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 text-[#A9BDD3]">
                      <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-[#00D9FF]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {project.confidentialityNote ? (
          <Reveal direction="none" delay={100}>
            <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-6 text-[#7F96AD]">
              {project.confidentialityNote}
            </p>
          </Reveal>
        ) : null}
      </section>

      <Reveal distance={18}>
        <nav
          aria-label="Navegação entre projetos"
          className="border-t border-[#1E3654]/30"
        >
          <div className="container-site grid md:grid-cols-[1fr_auto_1fr]">
            <ProjectNavigationLink project={previousProject} direction="previous" />

            <Link
              href="/#projetos"
              className="flex min-h-24 items-center justify-center border-y border-[#1E3654]/30 px-6 text-sm font-semibold text-[#A9BDD3] transition-colors hover:text-[#00D9FF] md:border-x md:border-y-0"
            >
              Todos os projetos
            </Link>

            <ProjectNavigationLink project={nextProject} direction="next" />
          </div>
        </nav>
      </Reveal>
    </main>
  );
}

type SectionHeadingProps = {
  label: string;
  title: string;
  description: string;
};

function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <Reveal distance={16}>
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#00D9FF]">
          {label}
        </p>
      </Reveal>
      <Reveal delay={70} distance={22}>
        <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-balance md:text-5xl">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={130} distance={18}>
        <p className="mt-4 text-base leading-7 text-[#7F96AD]">{description}</p>
      </Reveal>
    </div>
  );
}

type ProjectNavigationLinkProps = {
  project: ProjectCase;
  direction: "previous" | "next";
};

function ProjectNavigationLink({ project, direction }: ProjectNavigationLinkProps) {
  const isPrevious = direction === "previous";

  return (
    <Link
      href={`/projetos/${project.slug}`}
      className={`group flex min-h-28 items-center gap-4 py-6 transition-colors hover:text-[#00D9FF] ${
        isPrevious ? "pr-6" : "justify-end pl-6 text-right"
      }`}
    >
      {isPrevious ? (
        <ArrowLeft className="h-5 w-5 shrink-0 text-[#00D9FF] transition-transform group-hover:-translate-x-1" />
      ) : null}
      <span>
        <span className="block text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#6F879F]">
          {isPrevious ? "Projeto anterior" : "Próximo projeto"}
        </span>
        <span className="mt-2 block text-sm font-bold text-[#D7E8F6] group-hover:text-[#00D9FF]">
          {project.title}
        </span>
      </span>
      {!isPrevious ? (
        <ArrowRight className="h-5 w-5 shrink-0 text-[#00D9FF] transition-transform group-hover:translate-x-1" />
      ) : null}
    </Link>
  );
}
