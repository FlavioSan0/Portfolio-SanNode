"use client";

import Image from "next/image";
import { ArrowUpRight, LoaderCircle, RefreshCw } from "lucide-react";
import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

import type { LivePreviewConfig } from "@/data/project-cases";

type LiveProjectPreviewProps = {
  url: string;
  title: string;
  fallbackImage: string;
  variant: "card" | "hero";
  config?: LivePreviewConfig;
};

type PreviewState = "loading" | "loaded" | "failed";

const DEFAULT_VIEWPORT = { width: 1440, height: 900 };

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
  const isCard = variant === "card";
  const previewAreaRef = useRef<HTMLDivElement>(null);
  const [previewState, setPreviewState] = useState<PreviewState>("loading");
  const [reloadKey, setReloadKey] = useState(0);
  const [previewSize, setPreviewSize] = useState({ width: 0, height: 0 });

  const hostname = useMemo(() => getProjectHostname(url), [url]);
  const previewUrl = config?.previewUrl ?? url;
  const viewportWidth = config?.viewportWidth ?? DEFAULT_VIEWPORT.width;
  const viewportHeight = config?.viewportHeight ?? DEFAULT_VIEWPORT.height;
  const zoom = config?.zoom ?? 1;
  const offsetX = config?.offsetX ?? 0;
  const offsetY = config?.offsetY ?? 0;

  useEffect(() => {
    if (isCard) return;

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
  }, [isCard]);

  useEffect(() => {
    if (isCard) return;

    setPreviewState("loading");
    const timeout = window.setTimeout(() => {
      setPreviewState((current) => (current === "loading" ? "failed" : current));
    }, 10000);

    return () => window.clearTimeout(timeout);
  }, [isCard, previewUrl, reloadKey]);

  const iframeStyle = useMemo<CSSProperties>(() => {
    if (!previewSize.width) {
      return { width: viewportWidth, height: viewportHeight, opacity: 0 };
    }

    const baseScale = previewSize.width / viewportWidth;
    const appliedScale = baseScale * zoom;
    const scaledWidth = viewportWidth * appliedScale;

    return {
      width: viewportWidth,
      height: viewportHeight,
      left: (previewSize.width - scaledWidth) / 2 + offsetX * baseScale,
      top: offsetY * baseScale,
      transform: `scale(${appliedScale})`,
      transformOrigin: "top left",
    };
  }, [offsetX, offsetY, previewSize.width, viewportHeight, viewportWidth, zoom]);

  if (isCard) {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#0A1020]">
        <Image src={fallbackImage} alt={`Preview do projeto ${title}`} fill sizes="33vw" className="object-cover object-top" />
      </div>
    );
  }

  return (
    <div className="rounded-[1.5rem] border border-[#3FE3FF]/20 bg-[#0F1B3D] p-3 shadow-[0_18px_45px_rgba(0,0,0,0.22)] sm:rounded-[2rem]">
      <div className="overflow-hidden rounded-[1.1rem] border border-[#243B5A] bg-[#08101F] sm:rounded-[1.4rem]">
        <div className="flex h-11 items-center gap-2 border-b border-[#243B5A]/70 bg-[#101A31] px-4">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/75" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/75" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/75" />
          </div>
          <span className="min-w-0 flex-1 truncate rounded-full border border-white/6 bg-white/[0.04] px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[#8FA1B9]">
            {hostname}
          </span>
          <span className="rounded-full border border-[#3FE3FF]/20 bg-[#3FE3FF]/8 px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#9DEEFF]">
            Ao vivo
          </span>
        </div>

        <div ref={previewAreaRef} className="relative aspect-[16/10] overflow-hidden bg-[#0A1020]">
          {previewState !== "failed" ? (
            <iframe
              key={`${previewUrl}-${reloadKey}`}
              src={previewUrl}
              title={`Preview ao vivo do projeto ${title}`}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
              allow="fullscreen"
              allowFullScreen
              onLoad={() => setPreviewState("loaded")}
              onError={() => setPreviewState("failed")}
              className={`absolute border-0 bg-white transition-opacity duration-300 ${
                previewState === "loaded" ? "opacity-100" : "opacity-0"
              }`}
              style={iframeStyle}
            />
          ) : null}

          {previewState === "loading" ? (
            <div className="pointer-events-none absolute inset-0 z-10 grid place-items-center overflow-hidden bg-[#08101F]/92">
              <Image src={fallbackImage} alt="" fill aria-hidden="true" sizes="58vw" className="object-cover object-top opacity-20" />
              <div className="absolute inset-0 bg-[#08101F]/72" />
              <div className="relative flex items-center gap-2 rounded-full border border-[#3FE3FF]/15 bg-[#0F1B3D]/95 px-4 py-2 text-xs font-semibold text-[#DFF9FF]">
                <LoaderCircle className="h-4 w-4 animate-spin text-[#3FE3FF] motion-reduce:animate-none" />
                Carregando projeto
              </div>
            </div>
          ) : null}

          {previewState === "failed" ? (
            <div className="absolute inset-0 z-20 overflow-hidden bg-[#08101F]">
              <Image src={fallbackImage} alt={`Capa do projeto ${title}`} fill sizes="58vw" className="object-cover object-top opacity-30" />
              <div className="absolute inset-0 bg-[#08101F]/82" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <p className="text-sm font-bold text-[#F7FBFF]">Preview indisponível neste navegador</p>
                <p className="mt-2 max-w-sm text-xs leading-5 text-[#8FA1B9]">
                  O projeto continua publicado. Abra em uma nova aba ou tente carregar novamente.
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setPreviewState("loading");
                      setReloadKey((current) => current + 1);
                    }}
                    className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-[#243B5A] bg-[#101A31] px-4 py-2 text-xs font-bold text-[#DFF9FF] hover:border-[#3FE3FF]/40"
                  >
                    <RefreshCw className="h-3.5 w-3.5" />
                    Tentar novamente
                  </button>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-[#1E90FF] px-4 py-2 text-xs font-bold text-white hover:bg-[#1679D8]"
                  >
                    Abrir projeto
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ) : null}

          <div className="absolute inset-x-0 bottom-0 z-30 flex items-center justify-between gap-3 border-t border-white/8 bg-[#08101F]/88 px-4 py-2 backdrop-blur-md">
            <p className="truncate text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#8FA1B9]">Preview interativo</p>
            <a href={url} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-[#DFF9FF] hover:text-[#3FE3FF]">
              Abrir em nova aba
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
