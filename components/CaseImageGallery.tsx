"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { Fragment, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import Reveal from "@/components/Reveal";
import type { ProjectGalleryItem } from "@/data/project-cases";

const layoutClasses = {
  full: "md:col-span-6",
  half: "md:col-span-3",
  third: "md:col-span-2",
};

export default function CaseImageGallery({
  items,
}: {
  items: ProjectGalleryItem[];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const activeItem = activeIndex === null ? null : items[activeIndex];

  function open(index: number) {
    previousFocusRef.current = document.activeElement as HTMLElement;
    setActiveIndex(index);
  }

  function close() {
    setActiveIndex(null);
  }

  function move(offset: number) {
    setActiveIndex((current) =>
      current === null ? null : (current + offset + items.length) % items.length,
    );
  }

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft")
        setActiveIndex((current) =>
          current === null ? null : (current - 1 + items.length) % items.length,
        );
      if (event.key === "ArrowRight")
        setActiveIndex((current) =>
          current === null ? null : (current + 1) % items.length,
        );

      if (event.key === "Tab") {
        const buttons = document.querySelectorAll<HTMLElement>(
          "[data-lightbox-control]",
        );
        const first = buttons[0];
        const last = buttons[buttons.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [activeIndex, items.length]);

  return (
    <>
      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-6 md:gap-y-20">
        {items.map((item, index) => (
          <Fragment key={item.src}>
            {item.sectionTitle ? (
              <Reveal
                distance={20}
                className="pt-6 md:col-span-6 md:pt-10"
              >
                <div className="max-w-4xl border-t border-[#1E3654]/40 pt-12 md:pt-16">
                  <h3 className="text-2xl font-black tracking-[-0.04em] text-balance md:text-4xl">
                    {item.sectionTitle}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#7F96AD] text-pretty">
                    {item.sectionDescription}
                  </p>
                </div>
              </Reveal>
            ) : null}

            <Reveal
              delay={index * 60}
              distance={24}
              initialScale={0.985}
              className={layoutClasses[item.layout ?? "half"]}
            >
              <figure>
              <div className="mb-6">
                <h3 className="text-xl font-bold tracking-[-0.025em] text-[#F5FBFF] md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#A9BDD3] text-pretty md:text-base">
                  {item.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => open(index)}
                aria-label={`Ampliar imagem: ${item.title}`}
                className="group relative block aspect-video w-full cursor-zoom-in overflow-hidden rounded-2xl border border-[#1E3654]/50 bg-[#040B14] shadow-[0_18px_45px_rgba(0,0,0,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00D9FF]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  preload={index === 0}
                  loading={index === 0 ? undefined : "lazy"}
                  sizes={
                    item.layout === "full"
                      ? "(max-width: 768px) 100vw, 1200px"
                      : item.layout === "third"
                        ? "(max-width: 768px) 100vw, 33vw"
                        : "(max-width: 768px) 100vw, 50vw"
                  }
                  className="object-contain transition-transform duration-300 motion-safe:group-hover:scale-[1.015] motion-reduce:transition-none"
                />
                <span className="absolute right-3 top-3 grid size-9 place-items-center rounded-full border border-white/15 bg-[#040B14]/75 text-white opacity-80 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <Maximize2 className="size-4" aria-hidden="true" />
                </span>
              </button>

              {item.caption ? (
                <figcaption className="mt-3 text-xs leading-6 text-[#7F96AD]">
                  {item.caption}
                </figcaption>
              ) : null}
              </figure>
            </Reveal>
          </Fragment>
        ))}
      </div>

      {activeItem && activeIndex !== null
        ? createPortal(
            (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-lightbox-title"
          aria-describedby="case-lightbox-description"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close();
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#02060C]/95 p-3 backdrop-blur-sm sm:p-6"
        >
          <div className="flex h-full max-h-[calc(100dvh-1.5rem)] w-full max-w-[96rem] flex-col sm:max-h-[calc(100dvh-3rem)]">
            <div className="flex shrink-0 items-start justify-between gap-5 pb-4 text-white">
              <div className="min-w-0">
                <p className="text-xs font-bold tabular-nums text-[#00D9FF]">
                  {activeIndex + 1} de {items.length}
                </p>
                <h2 id="case-lightbox-title" className="mt-1 text-lg font-bold sm:text-xl">
                  {activeItem.title}
                </h2>
                <p
                  id="case-lightbox-description"
                  className="mt-1 max-w-4xl text-xs leading-5 text-[#A9BDD3] sm:text-sm sm:leading-6"
                >
                  {activeItem.description}
                </p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                data-lightbox-control
                onClick={close}
                aria-label="Fechar imagem ampliada"
                className="grid size-11 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00D9FF]"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <div className="relative min-h-0 flex-1 overflow-hidden rounded-xl border border-white/10 bg-black/35">
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="flex shrink-0 items-center justify-between gap-4 pt-4">
              <button
                type="button"
                data-lightbox-control
                onClick={() => move(-1)}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00D9FF]"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
                Anterior
              </button>
              <button
                type="button"
                data-lightbox-control
                onClick={() => move(1)}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00D9FF]"
              >
                Próxima
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
            ),
            document.body,
          )
        : null}
    </>
  );
}
