"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minus,
  Plus,
  RotateCcw,
  X,
} from "lucide-react";
import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

import type { ProjectMedia } from "@/data/project-cases";

const MAX_ZOOM = 2.5;

const LightboxContext = createContext<((src: string) => void) | null>(null);

export function CaseImageLightbox({
  items,
  children,
}: {
  items: ProjectMedia[];
  children: ReactNode;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const imageAreaRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const dragRef = useRef<{ x: number; y: number; left: number; top: number } | null>(null);
  const reducedMotion = useReducedMotion();
  const activeItem = activeIndex === null ? null : items[activeIndex];
  const isOpen = activeIndex !== null;

  function open(src: string) {
    const index = items.findIndex((item) => item.src === src);
    if (index === -1) return;
    previousFocusRef.current = document.activeElement as HTMLElement;
    resetZoom();
    setActiveIndex(index);
  }

  function close() {
    resetZoom();
    setActiveIndex(null);
  }

  function move(offset: number) {
    resetZoom();
    setActiveIndex((current) =>
      current === null ? null : (current + offset + items.length) % items.length,
    );
  }

  function clampPosition(next: { x: number; y: number }, nextZoom = zoom) {
    const area = imageAreaRef.current;
    if (!area || !activeItem || nextZoom === 1) return { x: 0, y: 0 };

    const { width: areaWidth, height: areaHeight } = area.getBoundingClientRect();
    const fit = Math.min(areaWidth / activeItem.width, areaHeight / activeItem.height);
    const imageWidth = activeItem.width * fit;
    const imageHeight = activeItem.height * fit;
    const maxX = Math.max(0, (imageWidth * nextZoom - areaWidth) / 2);
    const maxY = Math.max(0, (imageHeight * nextZoom - areaHeight) / 2);

    return {
      x: Math.max(-maxX, Math.min(maxX, next.x)),
      y: Math.max(-maxY, Math.min(maxY, next.y)),
    };
  }

  function changeZoom(next: number) {
    const value = Math.max(1, Math.min(MAX_ZOOM, next));
    setZoom(value);
    setPosition((current) => clampPosition(current, value));
  }

  function resetZoom() {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }

  function startDrag(event: ReactPointerEvent<HTMLDivElement>) {
    if (zoom === 1 || event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = {
      x: event.clientX,
      y: event.clientY,
      left: position.x,
      top: position.y,
    };
  }

  function drag(event: ReactPointerEvent<HTMLDivElement>) {
    if (!dragRef.current) return;
    setPosition(
      clampPosition({
        x: dragRef.current.left + event.clientX - dragRef.current.x,
        y: dragRef.current.top + event.clientY - dragRef.current.y,
      }),
    );
  }

  function stopDrag() {
    dragRef.current = null;
  }

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        resetZoom();
        setActiveIndex(null);
      }
      if (event.key === "ArrowLeft" && items.length > 1) {
        resetZoom();
        setActiveIndex((current) =>
          current === null ? null : (current - 1 + items.length) % items.length,
        );
      }
      if (event.key === "ArrowRight" && items.length > 1) {
        resetZoom();
        setActiveIndex((current) =>
          current === null ? null : (current + 1) % items.length,
        );
      }

      if (event.key === "Tab") {
        const controls = dialogRef.current?.querySelectorAll<HTMLElement>(
          "button:not(:disabled)",
        );
        if (!controls?.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [isOpen, items.length]);

  return (
    <LightboxContext.Provider value={open}>
      {children}
      {typeof document !== "undefined" ? createPortal(
        <AnimatePresence>
          {activeItem && activeIndex !== null ? (
            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="case-lightbox-title"
              aria-describedby={activeItem.description ? "case-lightbox-description" : undefined}
              initial={reducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.18 }}
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) close();
              }}
              className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#02060C]/95 p-3 backdrop-blur-sm sm:p-6"
            >
              <motion.div
                initial={reducedMotion ? false : { opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: reducedMotion ? 0 : 0.18, ease: "easeOut" }}
                className="flex h-full max-h-[calc(100dvh-1.5rem)] w-full max-w-[96rem] min-w-0 flex-col sm:max-h-[calc(100dvh-3rem)]"
              >
                <div className="flex shrink-0 items-start justify-between gap-4 pb-3 text-white sm:pb-4">
                  <div className="max-h-[22dvh] min-w-0 overflow-y-auto pr-1">
                    <p className="text-xs font-bold tabular-nums text-[#00D9FF]">
                      {activeIndex + 1} de {items.length}
                    </p>
                    <h2 id="case-lightbox-title" className="mt-1 text-base font-bold sm:text-xl">
                      {activeItem.title ?? activeItem.alt}
                    </h2>
                    {activeItem.description ? (
                      <p
                        id="case-lightbox-description"
                        className="mt-1 max-w-4xl text-xs leading-5 text-[#A9BDD3] sm:text-sm sm:leading-6"
                      >
                        {activeItem.description}
                      </p>
                    ) : null}
                  </div>
                  <ControlButton ref={closeButtonRef} label="Fechar imagem ampliada" onClick={close}>
                    <X className="size-5" aria-hidden="true" />
                  </ControlButton>
                </div>

                <div
                  ref={imageAreaRef}
                  onPointerDown={startDrag}
                  onPointerMove={drag}
                  onPointerUp={stopDrag}
                  onPointerCancel={stopDrag}
                  className={`relative min-h-0 flex-1 overflow-hidden rounded-xl border border-white/10 bg-black/35 ${
                    zoom > 1 ? "cursor-grab touch-none active:cursor-grabbing" : ""
                  }`}
                >
                  <div
                    className="absolute inset-0"
                    style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${zoom})` }}
                  >
                    <Image
                      src={activeItem.src}
                      alt={activeItem.alt}
                      fill
                      unoptimized
                      sizes="100vw"
                      className="pointer-events-none select-none object-contain"
                    />
                  </div>
                </div>

                <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 pt-3 sm:gap-4 sm:pt-4">
                  <div className="flex items-center gap-2">
                    <ControlButton label="Reduzir zoom" onClick={() => changeZoom(zoom - 0.5)} disabled={zoom === 1}>
                      <Minus className="size-5" aria-hidden="true" />
                    </ControlButton>
                    <span className="min-w-12 text-center text-xs font-bold tabular-nums text-white">
                      {zoom.toFixed(1)}x
                    </span>
                    <ControlButton label="Ampliar zoom" onClick={() => changeZoom(zoom + 0.5)} disabled={zoom === MAX_ZOOM}>
                      <Plus className="size-5" aria-hidden="true" />
                    </ControlButton>
                    <ControlButton label="Restaurar zoom" onClick={resetZoom} disabled={zoom === 1}>
                      <RotateCcw className="size-4" aria-hidden="true" />
                    </ControlButton>
                  </div>

                  {items.length > 1 ? (
                    <div className="flex items-center gap-2">
                      <ControlButton label="Imagem anterior" onClick={() => move(-1)}>
                        <ChevronLeft className="size-5" aria-hidden="true" />
                      </ControlButton>
                      <ControlButton label="Próxima imagem" onClick={() => move(1)}>
                        <ChevronRight className="size-5" aria-hidden="true" />
                      </ControlButton>
                    </div>
                  ) : null}
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>,
        document.body,
      ) : null}
    </LightboxContext.Provider>
  );
}

export function ExpandableImage({
  item,
  preload = false,
  sizes,
  className = "",
  imageClassName = "",
}: {
  item: ProjectMedia;
  preload?: boolean;
  sizes: string;
  className?: string;
  imageClassName?: string;
}) {
  const open = useContext(LightboxContext);

  if (item.expandable === false || !open) {
    return (
      <div className={`relative ${className}`}>
        <Image
          src={item.src}
          alt={item.alt}
          fill
          preload={preload}
          loading={preload ? undefined : "lazy"}
          sizes={sizes}
          className={`object-contain ${imageClassName}`}
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => open(item.src)}
      aria-label={`Ampliar imagem: ${item.title ?? item.alt}`}
      className={`group relative block w-full cursor-zoom-in overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00D9FF] ${className}`}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        preload={preload}
        loading={preload ? undefined : "lazy"}
        sizes={sizes}
        className={`object-contain transition-transform duration-300 motion-safe:group-hover:scale-[1.015] motion-reduce:transition-none ${imageClassName}`}
      />
      <span className="pointer-events-none absolute right-3 top-3 grid size-9 place-items-center rounded-full border border-white/15 bg-[#040B14]/75 text-white opacity-75 backdrop-blur-sm transition-opacity group-hover:opacity-100">
        <Maximize2 className="size-4" aria-hidden="true" />
      </span>
    </button>
  );
}

const ControlButton = forwardRef<
  HTMLButtonElement,
  {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    children: ReactNode;
  }
>(function ControlButton({ label, onClick, disabled, children }, ref) {
  return (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className="grid size-11 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00D9FF] disabled:cursor-not-allowed disabled:opacity-35"
    >
      {children}
    </button>
  );
});
