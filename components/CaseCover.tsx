"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type CaseCoverProps = {
  title: string;
  image?: string;
  url?: string;
  live?: boolean;
  sizes?: string;
};

const VIEWPORT = { width: 1440, height: 900 };

function hostOf(url?: string) {
  if (!url) return "";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

/**
 * Capa padrão dos cases: moldura de navegador com o site rodando ao vivo.
 * O print fica por baixo como fundo enquanto o site carrega (e se ele não carregar).
 * O site só começa a carregar quando a capa se aproxima da tela.
 */
export default function CaseCover({ title, image, url, live = true, sizes = "(max-width: 768px) 100vw, 50vw" }: CaseCoverProps) {
  const areaRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const element = areaRef.current;
    if (!element || !url || !live) return;

    const resizeObserver = new ResizeObserver(() => {
      setScale(element.getBoundingClientRect().width / VIEWPORT.width);
    });
    resizeObserver.observe(element);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          intersectionObserver.disconnect();
        }
      },
      { rootMargin: "240px" },
    );
    intersectionObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [url, live]);

  return (
    <div className="overflow-hidden rounded-xl border border-[#243B5A] bg-[#0A1020]">
      <div className="flex items-center gap-1.5 border-b border-[#243B5A] bg-[#0F1B3D] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#3B5270]" />
        <span className="h-2 w-2 rounded-full bg-[#3B5270]" />
        <span className="h-2 w-2 rounded-full bg-[#3B5270]" />
        <span className="ml-2 min-w-0 flex-1 truncate text-[0.68rem] font-semibold text-[#7F93AD]">{hostOf(url)}</span>
        {url && live ? (
          <span className="flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-[#9DEEFF]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3FE3FF] motion-safe:animate-pulse" />
            Ao vivo
          </span>
        ) : null}
      </div>
      <div ref={areaRef} className="relative aspect-[16/10] overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={`Site ${title} em versão desktop`}
            fill
            sizes={sizes}
            className="object-cover object-top"
          />
        ) : (
          <div className="grid h-full place-items-center bg-[radial-gradient(circle_at_30%_20%,rgba(63,227,255,0.14),transparent_55%)] px-6 text-center">
            <p className="text-2xl font-extrabold tracking-[-0.03em] text-[#F7FBFF] md:text-3xl">{title}</p>
          </div>
        )}

        {url && live && active && scale > 0 ? (
          <iframe
            src={url}
            title={`Site ${title} ao vivo`}
            tabIndex={-1}
            aria-hidden="true"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            sandbox="allow-same-origin allow-scripts allow-forms"
            onLoad={() => setLoaded(true)}
            className={`pointer-events-none absolute left-0 top-0 border-0 bg-white transition-opacity duration-500 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            style={{
              width: VIEWPORT.width,
              height: VIEWPORT.height,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
          />
        ) : null}
      </div>
    </div>
  );
}
