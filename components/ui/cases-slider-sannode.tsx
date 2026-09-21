"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, MoveHorizontal } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export type CaseSliderItem = {
  title: string;
  category: string;
  slug: string;
  coverImage: string;
  imageMode?: "brand" | "screen";
  summary: string;
  stack: string[];
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
    setShowRightControl(projects.length > 1 && rail.scrollLeft < maxScrollLeft - tolerance);
  }, [projects.length]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    updateRailState();
    const resizeObserver = new ResizeObserver(updateRailState);
    resizeObserver.observe(rail);
    return () => resizeObserver.disconnect();
  }, [updateRailState]);

  function scrollRail(direction: "previous" | "next") {
    const rail = railRef.current;
    if (!rail) return;

    const firstCard = rail.querySelector<HTMLElement>("[data-project-slide]");
    const cardWidth = firstCard?.getBoundingClientRect().width ?? rail.clientWidth * 0.84;
    setHasInteracted(true);
    rail.scrollBy({
      left: direction === "next" ? cardWidth + MOBILE_CARD_GAP : -(cardWidth + MOBILE_CARD_GAP),
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
        onScroll={() => {
          setHasInteracted(true);
          updateRailState();
        }}
        className="relative z-20 -mx-4 flex min-w-0 snap-x snap-proximity gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain px-4 pb-5 scroll-px-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 xl:grid-cols-3"
      >
        {projects.map((project) => (
          <article
            key={project.slug}
            data-project-slide
            className="group flex h-full w-[84vw] min-w-[17.5rem] max-w-[22rem] flex-none snap-start flex-col overflow-hidden rounded-2xl border border-[#243B5A]/65 bg-[#101A31]/76 transition hover:border-[#3FE3FF]/35 sm:w-auto sm:min-w-0 sm:max-w-none sm:snap-none"
          >
            <Link
              href={`/projetos/${project.slug}`}
              draggable={false}
              className="relative aspect-[16/10] overflow-hidden border-b border-[#243B5A]/55 bg-[#0A1020]"
              aria-label={`Ver case ${project.title}`}
            >
              <Image
                src={project.coverImage}
                alt={`Imagem do projeto ${project.title}`}
                fill
                draggable={false}
                sizes="(max-width: 640px) 84vw, (max-width: 1280px) 50vw, 33vw"
                className={[
                  "select-none transition-transform duration-300 group-hover:scale-[1.02]",
                  project.imageMode === "brand" ? "object-contain p-8" : "object-cover object-top",
                ].join(" ")}
              />
            </Link>

            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#3FE3FF]">
                {project.category}
              </p>
              <h4 className="mt-2 text-xl font-extrabold leading-tight text-[#F7FBFF]">{project.title}</h4>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#A8B6CC]">{project.summary}</p>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-[#7F93AD]">
                {project.stack.slice(0, 3).map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <Link
                href={`/projetos/${project.slug}`}
                className="mt-5 inline-flex min-h-11 w-fit items-center py-2 text-sm font-bold text-[#DFF9FF] transition hover:text-[#3FE3FF]"
              >
                Ver case
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {projects.length > 1 && showRightControl && !hasInteracted ? (
        <div className="pointer-events-none absolute right-1 top-[4.75rem] z-30 flex items-center gap-2 rounded-full border border-[#3FE3FF]/25 bg-[#0A1020]/92 px-3 py-2 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-[#DFF9FF] sm:hidden">
          <MoveHorizontal className="h-4 w-4 text-[#3FE3FF]" />
          Arraste
        </div>
      ) : null}

      {projects.length > 1 ? (
        <div className="relative z-30 mt-1 flex items-center justify-end gap-2 sm:hidden">
          <button
            type="button"
            onClick={() => scrollRail("previous")}
            disabled={!showLeftControl}
            aria-label={`Ver projetos anteriores de ${groupLabel}`}
            className="grid size-10 place-items-center rounded-full border border-[#243B5A] bg-[#0F1B3D] text-[#DFF9FF] disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollRail("next")}
            disabled={!showRightControl}
            aria-label={`Ver mais projetos de ${groupLabel}`}
            className="grid size-10 place-items-center rounded-full border border-[#3FE3FF]/30 bg-[#0F1B3D] text-[#3FE3FF] disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
