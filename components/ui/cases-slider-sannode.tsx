"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  MoveHorizontal,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import LiveProjectPreview from "@/components/LiveProjectPreview";
import Reveal from "@/components/Reveal";
import type { LivePreviewConfig } from "@/data/project-cases";

export type CaseSliderItem = {
  title: string;
  category: string;
  slug: string;
  coverImage: string;
  imageMode?: "brand" | "screen";
  summary: string;
  stack: string[];
  liveUrl?: string;
  livePreview?: LivePreviewConfig;
};

type CasesSliderSanNodeProps = {
  projects: CaseSliderItem[];
  groupLabel?: string;
};

const MOBILE_CARD_GAP = 16;

export default function CasesSliderSanNode({
  projects,
  groupLabel = "projetos",
}: CasesSliderSanNodeProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showLeftControl, setShowLeftControl] = useState(false);
  const [showRightControl, setShowRightControl] = useState(projects.length > 1);

  const updateRailState = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;

    const maxScrollLeft = Math.max(0, rail.scrollWidth - rail.clientWidth);
    const tolerance = 8;

    setShowLeftControl(rail.scrollLeft > tolerance);
    setShowRightControl(
      projects.length > 1 && rail.scrollLeft < maxScrollLeft - tolerance,
    );
  }, [projects.length]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    updateRailState();

    const resizeObserver = new ResizeObserver(updateRailState);
    resizeObserver.observe(rail);

    return () => resizeObserver.disconnect();
  }, [updateRailState]);

  function handleScroll() {
    setHasInteracted(true);
    updateRailState();
  }

  function scrollRail(direction: "previous" | "next") {
    const rail = railRef.current;
    if (!rail) return;

    const firstCard = rail.querySelector<HTMLElement>("[data-project-slide]");
    const cardWidth = firstCard?.getBoundingClientRect().width ?? rail.clientWidth * 0.84;
    const distance = cardWidth + MOBILE_CARD_GAP;

    setHasInteracted(true);
    rail.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: "smooth",
    });
  }

  return (
    <div className="relative min-w-0">
      <div
        ref={railRef}
        role="region"
        aria-roledescription="carrossel"
        aria-label={`Lista horizontal de ${groupLabel}. Deslize para ver mais projetos.`}
        tabIndex={0}
        onScroll={handleScroll}
        style={{
          WebkitOverflowScrolling: "touch",
          touchAction: "auto",
        }}
        className="mobile-project-rail relative z-20 -mx-4 flex min-w-0 snap-x snap-proximity gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain px-4 pb-5 scroll-px-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:gap-8 xl:grid-cols-3"
      >
        {projects.map((project, index) => (
          <Reveal
            key={project.slug}
            stagger={90}
            index={index}
            duration={650}
            distance={26}
            initialScale={0.98}
            className="h-auto w-[84vw] min-w-[17.5rem] max-w-[22rem] flex-none snap-start sm:h-full sm:w-auto sm:min-w-0 sm:max-w-none sm:snap-none"
          >
            <div data-project-slide className="h-full px-0 sm:px-3 lg:px-4">
              <article className="group flex h-full min-w-0 flex-col rounded-2xl border border-[#1E3654]/20 transition-[transform,border-color,box-shadow,opacity] duration-300 active:border-[#00D9FF]/30 active:opacity-95 [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-1.5 [@media(hover:hover)_and_(pointer:fine)]:hover:border-[#00D9FF]/30 [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_18px_50px_rgba(0,217,255,0.07)]">
                <Link
                  href={`/projetos/${project.slug}`}
                  draggable={false}
                  className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[#1E3654]/25 bg-[#07111F] transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00D9FF] [@media(hover:hover)_and_(pointer:fine)]:group-hover:border-[#00D9FF]/35"
                  aria-label={`Ver case ${project.title}`}
                >
                  {project.imageMode === "screen" && project.liveUrl ? (
                    <LiveProjectPreview
                      url={project.liveUrl}
                      title={project.title}
                      fallbackImage={project.coverImage}
                      variant="card"
                      config={project.livePreview}
                    />
                  ) : (
                    <Image
                      src={project.coverImage}
                      alt={`Imagem do projeto ${project.title}`}
                      fill
                      draggable={false}
                      sizes="(max-width: 640px) 84vw, (max-width: 1280px) 50vw, 33vw"
                      className={[
                        "pointer-events-none select-none object-cover transition-transform duration-300 [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-[1.03]",
                        project.imageMode === "brand" ? "p-8 object-contain" : "",
                      ].join(" ")}
                    />
                  )}
                </Link>

                <div className="flex flex-1 flex-col px-6 pb-7 pt-6 sm:px-7 sm:pb-8 sm:pt-7 lg:px-8 lg:pb-9">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00D9FF]">
                    {project.category}
                  </p>
                  <h4 className="mt-2 text-xl font-black leading-tight tracking-[-0.035em] text-[#F5FBFF]">
                    {project.title}
                  </h4>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#A9BDD3]">
                    {project.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-[#7F96AD]">
                    {project.stack.slice(0, 3).map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <Link
                    href={`/projetos/${project.slug}`}
                    draggable={false}
                    className="mt-5 inline-flex min-h-11 w-fit items-center py-2 text-sm font-bold text-[#D9F4FF] transition hover:text-[#00D9FF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00D9FF]"
                  >
                    Ver case
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </article>
            </div>
          </Reveal>
        ))}
      </div>

      {projects.length > 1 && showRightControl && !hasInteracted ? (
        <div
          className="mobile-project-swipe-hint pointer-events-none absolute right-1 top-[4.75rem] z-30 flex items-center gap-2 rounded-full border border-[#00D9FF]/25 bg-[#040B14]/88 px-3 py-2 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#CDEEFF] shadow-[0_10px_35px_rgba(0,0,0,0.3)] backdrop-blur-md sm:hidden"
          aria-hidden="true"
        >
          <MoveHorizontal className="mobile-project-swipe-icon h-4 w-4 text-[#3FE3FF]" />
          Arraste
        </div>
      ) : null}

      {projects.length > 1 && showRightControl ? (
        <div
          className="pointer-events-none absolute bottom-14 right-0 top-0 w-12 bg-gradient-to-l from-[#040B14] via-[#040B14]/45 to-transparent sm:hidden"
          aria-hidden="true"
        />
      ) : null}

      {projects.length > 1 ? (
        <div className="relative z-30 mt-1 flex items-center justify-end gap-2 sm:hidden">
          <button
            type="button"
            onClick={() => scrollRail("previous")}
            disabled={!showLeftControl}
            aria-label={`Ver projetos anteriores de ${groupLabel}`}
            className="mobile-project-nav-button grid size-10 place-items-center rounded-full border border-[#1E3654]/70 bg-[#07111F]/92 text-[#D9F4FF] shadow-[0_10px_28px_rgba(0,0,0,0.24)] transition disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollRail("next")}
            disabled={!showRightControl}
            aria-label={`Ver mais projetos de ${groupLabel}`}
            className="mobile-project-nav-button mobile-project-nav-button--next grid size-10 place-items-center rounded-full border border-[#00D9FF]/30 bg-[#07192A]/95 text-[#3FE3FF] shadow-[0_10px_28px_rgba(0,0,0,0.24)] transition disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
