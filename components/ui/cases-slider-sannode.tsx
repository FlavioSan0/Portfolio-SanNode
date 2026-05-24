"use client";

import Image from "next/image";
import Link from "next/link";
import { animate, motion, useMotionValue } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export type CaseSliderItem = {
  number: string;
  title: string;
  category: string;
  slug: string;
  image: string;
  imageMode: "brand" | "screen";
  context: string;
  decision: string;
  result: string;
  deliverables: string[];
  liveUrl?: string;
};

type CasesSliderSanNodeProps = {
  projects: CaseSliderItem[];
};

export default function CasesSliderSanNode({
  projects,
}: CasesSliderSanNodeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [maxDragWidth, setMaxDragWidth] = useState(0);

  useEffect(() => {
    function updateWidth() {
      if (!containerRef.current) return;

      const scrollWidth = containerRef.current.scrollWidth;
      const offsetWidth = containerRef.current.offsetWidth;

      setMaxDragWidth(Math.max(scrollWidth - offsetWidth, 0));
    }

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [projects.length]);

  function scrollTo(direction: "left" | "right") {
    if (!containerRef.current) return;

    const currentX = x.get();
    const containerWidth = containerRef.current.offsetWidth;
    const scrollAmount = containerWidth * 0.82;

    const nextX =
      direction === "left"
        ? Math.min(currentX + scrollAmount, 0)
        : Math.max(currentX - scrollAmount, -maxDragWidth);

    animate(x, nextX, {
      type: "spring",
      stiffness: 260,
      damping: 32,
      mass: 1,
    });
  }

  const hasMultipleProjects = projects.length > 1;
  const canSlide = maxDragWidth > 0;

  return (
    <div className="group/slider relative w-full">
      {hasMultipleProjects && canSlide && (
        <>
          <button
            type="button"
            onClick={() => scrollTo("left")}
            className="absolute left-2 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#1E3654]/80 bg-[#040B14]/82 text-[#F5FBFF] opacity-0 shadow-[0_18px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl transition hover:border-[#00D9FF]/60 hover:text-[#00D9FF] group-hover/slider:opacity-100 lg:flex"
            aria-label="Voltar cases"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => scrollTo("right")}
            className="absolute right-2 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#1E3654]/80 bg-[#040B14]/82 text-[#F5FBFF] opacity-0 shadow-[0_18px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl transition hover:border-[#00D9FF]/60 hover:text-[#00D9FF] group-hover/slider:opacity-100 lg:flex"
            aria-label="Avançar cases"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      <motion.div
        ref={containerRef}
        className="overflow-hidden px-1 py-4"
        whileTap={{ cursor: hasMultipleProjects ? "grabbing" : "auto" }}
      >
        <motion.div
          drag={hasMultipleProjects && canSlide ? "x" : false}
          dragConstraints={{ right: 0, left: -maxDragWidth }}
          dragElastic={0.08}
          style={{ x }}
          className={[
            "flex gap-6",
            hasMultipleProjects && canSlide
              ? "cursor-grab active:cursor-grabbing"
              : "",
          ].join(" ")}
        >
          {projects.map((project) => {
            const isBrandImage = project.imageMode === "brand";

            return (
              <motion.article
                key={project.slug}
                whileHover={{ y: -7 }}
                transition={{ duration: 0.25 }}
                className="group/case relative flex h-[420px] min-w-[300px] max-w-[300px] flex-col overflow-hidden rounded-[1.75rem] border border-[#1E3654]/70 bg-[#07111F]/66 shadow-[0_22px_70px_rgba(0,0,0,0.22)] backdrop-blur transition hover:border-[#00D9FF]/60 hover:bg-[#0C1B2E]/58 sm:min-w-[320px] sm:max-w-[320px] lg:min-w-[326px] lg:max-w-[326px]"
              >
                <div className="absolute right-0 top-0 h-36 w-36 translate-x-14 -translate-y-14 rounded-full bg-[#00D9FF]/10 blur-3xl opacity-0 transition group-hover/case:opacity-100" />

                <div className="relative h-[176px] shrink-0 overflow-hidden bg-[#040B14]">
                  {isBrandImage ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,#C6A15B1f,transparent_40%),linear-gradient(135deg,#080B10,#07111F)] px-5 py-6">
                      <div className="relative flex h-[112px] w-full max-w-[250px] items-center justify-center rounded-[1.25rem] border border-[#C6A15B]/25 bg-[radial-gradient(circle_at_center,rgba(198,161,91,0.12),transparent_58%),rgba(0,0,0,0.24)] px-5 py-4 shadow-[0_24px_70px_rgba(0,0,0,0.26)] backdrop-blur">
                        <div className="absolute inset-0 rounded-[1.25rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_35%,rgba(198,161,91,0.05))]" />

                        <Image
                          src={project.image}
                          alt={project.title}
                          width={520}
                          height={300}
                          className="relative h-auto max-h-[78px] w-full object-contain"
                          priority={project.number === "01"}
                        />
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 85vw, 326px"
                      className={[
                        "object-cover transition duration-700 group-hover/case:scale-[1.04]",
                        project.slug === "site-casamento"
                          ? "object-top"
                          : "object-center",
                      ].join(" ")}
                    />
                  )}

                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,11,20,0.03),rgba(4,11,20,0.12)_42%,rgba(4,11,20,0.66))]" />

                  <div className="absolute left-4 top-4 max-w-[calc(100%-2rem)] rounded-full border border-white/15 bg-[#040B14]/78 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.13em] text-white backdrop-blur">
                    {project.category}
                  </div>
                </div>

                <div className="relative flex min-h-0 flex-1 flex-col p-5">
                  <h4 className="line-clamp-2 text-xl font-black tracking-tight text-[#F5FBFF]">
                    {project.title}
                  </h4>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#A9BDD3]">
                    {project.context}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.deliverables.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#1E3654]/70 bg-[#0C1B2E]/70 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.11em] text-[#A9BDD3]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div
                    className={[
                      "mt-auto grid gap-2 border-t border-[#1E3654]/35 pt-4",
                      project.liveUrl ? "grid-cols-2" : "grid-cols-1",
                    ].join(" ")}
                  >
                    <Link
                      href={`/projetos/${project.slug}`}
                      className="tech-button inline-flex items-center justify-center rounded-full bg-[#0B2A5B] px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-[#2563EB]"
                    >
                      Ver case
                      <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="tech-button inline-flex items-center justify-center rounded-full border border-[#00D9FF]/35 bg-[#040B14]/72 px-3 py-2.5 text-xs font-semibold text-[#D9F4FF] transition hover:border-[#00D9FF] hover:text-[#00D9FF]"
                      >
                        Acessar
                        <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}