"use client";

import Image from "next/image";
import { ArrowUpRight, LoaderCircle, RefreshCw } from "lucide-react";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";

import type { LivePreviewConfig } from "@/data/project-cases";

type LiveProjectPreviewProps = {
  url: string;
  title: string;
  fallbackImage: string;
  variant: "card" | "hero";
  config?: LivePreviewConfig;
};

type PreviewState = "idle" | "loading" | "loaded" | "failed";

type PreviewSize = {
  width: number;
  height: number;
};

const DEFAULT_VIEWPORT = {
  width: 1440,
  height: 900,
};

function getProjectHostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "Projeto publicado";
  }
}

export default function LiveProjectPreview({
  url,
  title,
  fallbackImage,
  variant,
  config,
}: LiveProjectPreviewProps) {
  const previewAreaRef = useRef<HTMLDivElement>(null);
  const [previewState, setPreviewState] = useState<PreviewState>(
    variant === "hero" ? "loading" : "idle",
  );
  const [shouldLoad, setShouldLoad] = useState(variant === "hero");
  const [reloadKey, setReloadKey] = useState(0);
  const [previewSize, setPreviewSize] = useState<PreviewSize>({
    width: 0,
    height: 0,
  });

  const hostname = useMemo(() => getProjectHostname(url), [url]);
  const isCard = variant === "card";
  const previewUrl = config?.previewUrl ?? url;
  const viewportWidth = config?.viewportWidth ?? DEFAULT_VIEWPORT.width;
  const viewportHeight = config?.viewportHeight ?? DEFAULT_VIEWPORT.height;
  const zoom = config?.zoom ?? 1;
  const offsetX = config?.offsetX ?? 0;
  const offsetY = config?.offsetY ?? 0;

  useEffect(() => {
    const element = previewAreaRef.current;
    if (!element) return;

    const updateSize = () => {
      const rect = element.getBoundingClientRect();
      setPreviewSize({ width: rect.width, height: rect.height });
    };

    updateSize();

    const observer = new ResizeObserver(updateSize);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isCard) {
      setShouldLoad(true);
      return;
    }

    const element = previewAreaRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldLoad(true);
        observer.disconnect();
      },
      { rootMargin: "320px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [isCard]);

  useEffect(() => {
    if (!shouldLoad) return;

    setPreviewState("loading");

    const timeout = window.setTimeout(() => {
      setPreviewState((current) =>
        current === "loading" ? "failed" : current,
      );
    }, 12000);

    return () => window.clearTimeout(timeout);
  }, [previewUrl, reloadKey, shouldLoad]);

  const iframeStyle = useMemo<CSSProperties>(() => {
    if (!previewSize.width) {
      return {
        width: viewportWidth,
        height: viewportHeight,
        opacity: 0,
      };
    }

    const baseScale = previewSize.width / viewportWidth;
    const appliedScale = baseScale * zoom;
    const scaledWidth = viewportWidth * appliedScale;
    const left = (previewSize.width - scaledWidth) / 2 + offsetX * baseScale;
    const top = offsetY * baseScale;

    return {
      width: viewportWidth,
      height: viewportHeight,
      left,
      top,
      transform: `scale(${appliedScale})`,
      transformOrigin: "top left",
    };
  }, [offsetX, offsetY, previewSize.width, viewportHeight, viewportWidth, zoom]);

  function reloadPreview() {
    setPreviewState("loading");
    setShouldLoad(true);
    setReloadKey((current) => current + 1);
  }

  return (
    <div
      className={
        isCard
          ? "relative h-full w-full overflow-hidden rounded-[1.05rem] bg-[radial-gradient(circle_at_top,rgba(0,217,255,0.16),transparent_42%),linear-gradient(180deg,rgba(15,27,61,0.96),rgba(7,17,31,0.98))] p-2.5"
          : "rounded-[1.5rem] border border-[#00D9FF]/20 bg-[radial-gradient(circle_at_top,rgba(0,217,255,0.16),transparent_38%),linear-gradient(180deg,rgba(15,27,61,0.92),rgba(7,17,31,0.96))] p-3 shadow-[0_18px_45px_rgba(0,0,0,0.22)] sm:rounded-[2rem]"
      }
    >
      <div
        className={
          isCard
            ? "flex h-full flex-col overflow-hidden rounded-[0.95rem] border border-[#2A3E58]/70 bg-[#030812] shadow-[0_18px_45px_rgba(0,0,0,0.28)]"
            : "overflow-hidden rounded-[1.1rem] border border-[#2A3E58]/70 bg-[#030812] shadow-[0_20px_45px_rgba(0,0,0,0.3)] sm:rounded-[1.4rem]"
        }
      >
        <div
          className={`flex shrink-0 items-center gap-2 border-b border-white/6 bg-[#09111B] ${
            isCard ? "h-9 px-3.5" : "h-11 px-4"
          }`}
        >
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/80" />
          </div>

          <div
            className={`min-w-0 flex-1 rounded-full border border-white/6 bg-white/[0.04] font-semibold uppercase text-[#91A6BC] ${
              isCard
                ? "px-3 py-1 text-[0.52rem] tracking-[0.16em]"
                : "px-3 py-1 text-[0.58rem] tracking-[0.18em]"
            }`}
          >
            <span className="block truncate">{hostname}</span>
          </div>

          <span
            className={`shrink-0 rounded-full border border-[#00D9FF]/20 bg-[#00D9FF]/8 font-bold uppercase text-[#A9EEFF] ${
              isCard
                ? "hidden px-2 py-1 text-[0.52rem] tracking-[0.16em] sm:inline-flex"
                : "inline-flex px-2.5 py-1 text-[0.58rem] tracking-[0.16em]"
            }`}
          >
            Ao vivo
          </span>
        </div>

        <div
          ref={previewAreaRef}
          className={`relative overflow-hidden bg-[#07111F] ${
            isCard ? "min-h-0 flex-1" : "aspect-[16/10]"
          }`}
        >
          {shouldLoad && previewState !== "failed" ? (
            <iframe
              key={`${previewUrl}-${reloadKey}`}
              src={previewUrl}
              title={`Preview ao vivo do projeto ${title}`}
              loading={isCard ? "lazy" : "eager"}
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-modals allow-downloads"
              allow="fullscreen; clipboard-read; clipboard-write"
              allowFullScreen
              tabIndex={isCard ? -1 : 0}
              onLoad={() => setPreviewState("loaded")}
              onError={() => setPreviewState("failed")}
              className={`absolute border-0 bg-white transition-opacity duration-300 ${
                isCard ? "pointer-events-none" : "pointer-events-auto"
              } ${previewState === "loaded" ? "opacity-100" : "opacity-0"}`}
              style={iframeStyle}
            />
          ) : null}

          {previewState === "idle" || previewState === "loading" ? (
            <div className="pointer-events-none absolute inset-0 z-10 grid place-items-center bg-[#030812]/88 backdrop-blur-sm">
              <div className="flex items-center gap-2 rounded-full border border-[#00D9FF]/15 bg-[#07192A]/90 px-4 py-2 text-xs font-semibold text-[#CDEEFF]">
                <LoaderCircle className="h-4 w-4 animate-spin text-[#00D9FF] motion-reduce:animate-none" />
                Carregando projeto
              </div>
            </div>
          ) : null}

          {previewState === "failed" ? (
            <div className="absolute inset-0 z-20 overflow-hidden bg-[#030812]">
              <Image
                src={fallbackImage}
                alt={`Capa de fallback do projeto ${title}`}
                fill
                sizes={isCard ? "33vw" : "58vw"}
                className="object-cover object-top opacity-35"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,18,0.42),rgba(3,8,18,0.96))]" />

              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <p className="text-sm font-bold text-[#F5FBFF]">
                  Preview indisponível neste navegador
                </p>
                <p className="mt-2 max-w-sm text-xs leading-5 text-[#91A6BC]">
                  O projeto continua publicado. Abra em uma nova aba ou tente carregar novamente.
                </p>

                {!isCard ? (
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    <button
                      type="button"
                      onClick={reloadPreview}
                      className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-[#1E3654] bg-[#07192A] px-4 py-2 text-xs font-bold text-[#D9F4FF] transition hover:border-[#00D9FF]/35 hover:text-[#00D9FF]"
                    >
                      <RefreshCw className="h-3.5 w-3.5" />
                      Tentar novamente
                    </button>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-[#0B2A5B] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#124084]"
                    >
                      Abrir projeto
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}

          {!isCard ? (
            <div className="absolute inset-x-0 bottom-0 z-30 flex items-center justify-between gap-3 border-t border-white/8 bg-[#030812]/82 px-3 py-2 backdrop-blur-md sm:px-4">
              <p className="truncate text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#91A6BC]">
                Preview interativo
              </p>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#D9F4FF] transition hover:text-[#00D9FF]"
              >
                Abrir em nova aba
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
