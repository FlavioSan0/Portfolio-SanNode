import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import CaseImageGallery from "@/components/CaseImageGallery";
import { CaseImageLightbox, ExpandableImage } from "@/components/CaseImageLightbox";
import CaseCTA from "@/components/CaseCTA";
import LiveProjectPreview from "@/components/LiveProjectPreview";
import {
  getProjectCoverMedia,
  getProjectMedia,
  shouldUsePublishedScreenPreview,
  type ProjectCase,
} from "@/data/project-cases";

type ProjectCaseLayoutProps = {
  project: ProjectCase;
  previousProject: ProjectCase;
  nextProject: ProjectCase;
};

export default function ProjectCaseLayout({ project, previousProject, nextProject }: ProjectCaseLayoutProps) {
  const cover = getProjectCoverMedia(project);
  const useLivePublishedPreview = shouldUsePublishedScreenPreview(project) && Boolean(project.liveUrl) && project.liveEmbed !== false;

  return (
    <CaseImageLightbox items={getProjectMedia(project)}>
      <main className="relative z-10 overflow-hidden bg-[#0A1020] text-[#F7FBFF]">
        <section className="relative border-b border-[#243B5A]/55">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_8%,rgba(63,227,255,0.07),transparent_30%)]" />
          <div className="container-site relative pb-16 pt-8 md:pb-24 md:pt-10 lg:pb-28">
            <Link href="/#trabalhos" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#A8B6CC] transition hover:text-[#3FE3FF]">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Link>

            <div className="mt-12 grid min-w-0 gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-center lg:gap-16">
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3FE3FF]">{project.category}</p>
                <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-balance sm:text-5xl md:text-6xl xl:text-7xl">
                  {project.title}
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-7 text-[#A8B6CC] text-pretty md:text-lg md:leading-8">
                  {project.summary}
                </p>

                <p className="mt-6 text-sm font-semibold text-[#7F93AD]">{project.tags.slice(0, 3).join(" · ")}</p>

                {project.liveUrl ? (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-xl bg-gradient-to-r from-[#3FE3FF] to-[#1E90FF] px-5 py-3 text-sm font-extrabold text-[#06101F] transition hover:brightness-110">
                    {project.liveLabel ?? "Acessar projeto"}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </div>

              <div>
                {useLivePublishedPreview && project.liveUrl ? (
                  <LiveProjectPreview
                    url={project.liveUrl}
                    title={project.title}
                    fallbackImage={project.publishedPreviewImage ?? project.coverImage}
                    variant="hero"
                    config={project.livePreview}
                  />
                ) : (
                  <ExpandableImage
                    item={cover}
                    preload
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className={`rounded-[1.5rem] border sm:rounded-[2rem] ${
                      project.coverFit === "contain"
                        ? "border-[#3FE3FF]/20 bg-[#0F1B3D] p-3 shadow-[0_18px_45px_rgba(0,0,0,0.22)]"
                        : "border-[#243B5A]/70 bg-[#101A31]"
                    } ${project.coverFit === "contain" ? "aspect-video" : "aspect-[4/3] sm:aspect-[16/10]"}`}
                    imageClassName={`object-contain ${project.category === "Design" ? "p-8 sm:p-12" : ""}`}
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="container-site py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            <article className="border-t border-[#3FE3FF]/45 pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3FE3FF]">O problema</p>
              <p className="mt-4 text-base leading-7 text-[#B7C5D9] text-pretty">{project.challenge}</p>
            </article>
            <article className="border-t border-[#3FE3FF]/45 pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3FE3FF]">O que foi feito</p>
              <p className="mt-4 text-base leading-7 text-[#B7C5D9] text-pretty">{project.solution}</p>
            </article>
            <article className="border-t border-[#3FE3FF]/45 pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3FE3FF]">O que mudou</p>
              <ul className="mt-4 grid gap-3">
                {project.results.slice(0, 3).map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-7 text-[#DFF0FA]">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3FE3FF]" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        {project.gallery?.length ? (
          <section className="border-y border-[#243B5A]/55 bg-[#0F1B3D]/30 py-16 md:py-24">
            <div className="container-site">
              <SectionHeading
                label="Interface"
                title={project.gallerySection?.title ?? "Detalhes da solução"}
                description={project.gallerySection?.description ?? "Telas e aplicações que mostram o projeto em uso."}
              />
              <CaseImageGallery items={project.gallery} />
              {project.confidentialityNote ? (
                <p className="mx-auto mt-12 max-w-3xl text-center text-xs leading-6 text-[#7F93AD] md:mt-16">{project.confidentialityNote}</p>
              ) : null}
            </div>
          </section>
        ) : null}

        <section className="container-site py-16 md:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3FE3FF]">O que entrega</p>
          <ul className="mt-6 grid gap-x-12 md:grid-cols-2">
            {project.highlights.slice(0, 4).map((item) => (
              <li key={item} className="border-t border-[#243B5A]/55 py-4 text-base leading-7 text-[#DFF0FA]">
                {item}
              </li>
            ))}
          </ul>
          {project.confidentialityNote && !project.gallerySection ? (
            <p className="mt-8 max-w-3xl text-xs leading-6 text-[#7F93AD]">{project.confidentialityNote}</p>
          ) : null}
        </section>

        <CaseCTA
          title="Quer algo assim para o seu negócio?"
          message={`Olá! Vi o case ${project.title} no site da San_Node e quero algo parecido para o meu negócio.`}
        />

        <nav aria-label="Navegação entre projetos" className="border-t border-[#243B5A]/55">
          <div className="container-site grid md:grid-cols-[1fr_auto_1fr]">
            <ProjectNavigationLink project={previousProject} direction="previous" />
            <Link href="/#trabalhos" className="flex min-h-24 items-center justify-center border-y border-[#243B5A]/55 px-6 text-sm font-semibold text-[#A8B6CC] transition hover:text-[#3FE3FF] md:border-x md:border-y-0">
              Todos os projetos
            </Link>
            <ProjectNavigationLink project={nextProject} direction="next" />
          </div>
        </nav>
      </main>
    </CaseImageLightbox>
  );
}

function SectionHeading({ label, title, description }: { label: string; title: string; description: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3FE3FF]">{label}</p>
      <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-balance md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-[#7F93AD]">{description}</p>
    </div>
  );
}

function ProjectNavigationLink({ project, direction }: { project: ProjectCase; direction: "previous" | "next" }) {
  const isPrevious = direction === "previous";

  return (
    <Link
      href={`/projetos/${project.slug}`}
      className={`group flex min-h-28 items-center gap-4 py-6 transition hover:text-[#3FE3FF] ${
        isPrevious ? "pr-6" : "justify-end pl-6 text-right"
      }`}
    >
      {isPrevious ? <ArrowLeft className="h-5 w-5 shrink-0 text-[#3FE3FF] transition-transform group-hover:-translate-x-1" /> : null}
      <span>
        <span className="block text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[#7F93AD]">
          {isPrevious ? "Projeto anterior" : "Próximo projeto"}
        </span>
        <span className="mt-2 block text-sm font-bold text-[#DFF0FA] group-hover:text-[#3FE3FF]">{project.title}</span>
      </span>
      {!isPrevious ? <ArrowRight className="h-5 w-5 shrink-0 text-[#3FE3FF] transition-transform group-hover:translate-x-1" /> : null}
    </Link>
  );
}
