import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import {
  getProjectCaseBySlug,
  projectCases,
  type ProjectCase,
} from "@/data/project-cases";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const statusStyles: Record<ProjectCase["status"], string> = {
  Publicado:
    "border-emerald-400/30 bg-emerald-400/[0.08] text-emerald-200",
  "Em desenvolvimento":
    "border-[#00D9FF]/35 bg-[#00D9FF]/[0.08] text-[#B8F3FF]",
  "Sistema interno":
    "border-amber-300/30 bg-amber-300/[0.08] text-amber-100",
  "MVP funcional":
    "border-[#00D9FF]/40 bg-[#00D9FF]/[0.10] text-[#D9F4FF]",
};

export async function generateStaticParams() {
  return projectCases.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectCaseBySlug(slug);

  if (!project) {
    return {
      title: "Projeto não encontrado | SanNode",
    };
  }

  return {
    title: `${project.title} | Case SanNode`,
    description: project.summary,
  };
}

export default async function ProjectCasePage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectCaseBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative z-10 overflow-hidden">
      <section className="relative border-b border-[#1E3654]/20 bg-[#07111F]/35">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,217,255,0.10),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(37,99,235,0.10),transparent_32%)]" />

        <div className="container-site responsive-section relative">
          <Link
            href="/#projetos"
            className="inline-flex items-center gap-2 rounded-full border border-[#1E3654]/70 bg-[#07111F]/75 px-4 py-2 text-sm font-semibold text-[#D9F4FF] transition hover:border-[#00D9FF]/70 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para projetos
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[#00D9FF]/35 bg-[#00D9FF]/[0.07] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#00D9FF]">
                  {project.category}
                </span>

                <span
                  className={[
                    "rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.16em]",
                    statusStyles[project.status],
                  ].join(" ")}
                >
                  {project.status}
                </span>
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
                {project.eyebrow}
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.06em] text-[#F5FBFF] md:text-6xl">
                {project.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#A9BDD3]">
                {project.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#1E3654]/80 bg-[#10233B]/60 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#A9BDD3]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-9 inline-flex items-center justify-center rounded-2xl border border-[#00D9FF]/50 bg-[#00D9FF]/[0.08] px-6 py-4 text-sm font-bold text-[#D9F4FF] transition hover:border-[#00D9FF]/80 hover:bg-[#00D9FF]/[0.13]"
                >
                  {project.liveLabel ?? "Acessar projeto"}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              ) : null}
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-[#00D9FF]/10 blur-3xl" />

              {project.livePreview && project.liveUrl ? (
                <div className="relative overflow-hidden rounded-[2rem] border border-[#1E3654]/70 bg-[#040B14] shadow-[0_28px_100px_rgba(0,0,0,0.35)]">
                  <div className="flex items-center justify-between gap-4 border-b border-[#1E3654]/55 bg-[#07111F]/95 px-4 py-3">
                    <div
                      aria-hidden="true"
                      className="flex shrink-0 items-center gap-2"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                    </div>

                    <div className="min-w-0 flex-1 rounded-full border border-[#1E3654]/70 bg-[#040B14]/80 px-3 py-1.5 text-center text-[0.66rem] font-bold uppercase tracking-[0.16em] text-[#A9BDD3]">
                      <span className="block truncate">
                        Landing oficial ao vivo
                      </span>
                    </div>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hidden shrink-0 items-center gap-1.5 rounded-full border border-[#00D9FF]/35 bg-[#00D9FF]/[0.06] px-3 py-1.5 text-[0.66rem] font-black uppercase tracking-[0.14em] text-[#D9F4FF] transition hover:border-[#00D9FF]/75 hover:bg-[#00D9FF]/[0.12] sm:inline-flex"
                    >
                      Abrir
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  <div className="relative aspect-[16/10] bg-[#020812]">
                    <iframe
                      src={project.liveUrl}
                      title={`Prévia ao vivo do projeto ${project.title}`}
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="h-full w-full border-0"
                    />

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#040B14]/45 to-transparent" />
                  </div>
                </div>
              ) : (
                <div className="relative overflow-hidden rounded-[2rem] border border-[#1E3654]/70 bg-[#040B14] shadow-[0_28px_100px_rgba(0,0,0,0.35)]">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={project.coverImage}
                      alt={`Imagem do projeto ${project.title}`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-b border-[#1E3654]/15 bg-[#040B14]/35">
        <div className="container-site responsive-section">
          <div className="grid gap-6 lg:grid-cols-4">
            <CaseInfoCard
              icon={Layers3}
              title="Visão geral"
              description={project.overview}
            />

            <CaseInfoCard
              icon={ShieldCheck}
              title="Desafio"
              description={project.challenge}
            />

            <CaseInfoCard
              icon={Sparkles}
              title="Solução"
              description={project.solution}
            />

            <CaseInfoCard
              icon={Rocket}
              title="Resultado"
              description={project.result}
            />
          </div>
        </div>
      </section>

      <section className="relative border-b border-[#1E3654]/15 bg-[#07111F]/30">
        <div className="container-site responsive-section">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
                Entrega
              </p>

              <h2 className="mt-3 max-w-xl text-3xl font-black tracking-[-0.05em] text-[#F5FBFF] md:text-5xl">
                O que este projeto constrói na prática.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-[#A9BDD3]">
                Cada case da SanNode é pensado para sair do visual bonito e
                chegar em uma entrega utilizável: com clareza, organização,
                responsividade e estrutura para evoluir.
              </p>
            </div>

            <div className="grid gap-4">
              {project.highlights.map((item) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-[1.5rem] border border-[#1E3654]/55 bg-[#07111F]/70 p-5"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#00D9FF]" />

                  <p className="text-sm leading-7 text-[#D7E8F6]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-b border-[#1E3654]/15 bg-[#040B14]/30">
        <div className="container-site responsive-section">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#1E3654]/60 bg-[#07111F]/70 p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
                Stack
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-[#F5FBFF]">
                Tecnologias usadas
              </h2>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#1E3654]/80 bg-[#10233B]/70 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#C7D9EA]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#1E3654]/60 bg-[#07111F]/70 p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
                Evolução
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-[#F5FBFF]">
                Próximos passos
              </h2>

              <div className="mt-6 grid gap-3">
                {(project.nextSteps ?? ["Refinar conteúdo final."]).map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[#1E3654]/50 bg-[#040B14]/55 px-4 py-3 text-sm leading-7 text-[#A9BDD3]"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-[2rem] border border-[#00D9FF]/20 bg-[#00D9FF]/[0.045] p-6 md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00D9FF]">
                  SanNode
                </p>

                <h2 className="mt-2 text-2xl font-black tracking-[-0.04em] text-[#F5FBFF]">
                  Quer transformar uma ideia em uma entrega real?
                </h2>
              </div>

              <Link
                href="/#contato"
                className="inline-flex items-center justify-center rounded-2xl bg-[#0B2A5B] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#2563EB]"
              >
                Falar sobre projeto
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

type CaseInfoCardProps = {
  icon: typeof Layers3;
  title: string;
  description: string;
};

function CaseInfoCard({ icon: Icon, title, description }: CaseInfoCardProps) {
  return (
    <article className="rounded-[1.6rem] border border-[#1E3654]/55 bg-[#07111F]/70 p-5">
      <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#00D9FF]/25 bg-[#00D9FF]/[0.07]">
        <Icon className="h-5 w-5 text-[#00D9FF]" />
      </div>

      <h2 className="text-xl font-black tracking-[-0.04em] text-[#F5FBFF]">
        {title}
      </h2>

      <p className="mt-3 text-sm leading-7 text-[#A9BDD3]">{description}</p>
    </article>
  );
}