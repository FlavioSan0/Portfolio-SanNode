"use client";

import { useEffect, useRef } from "react";

import { S_NODES, S_PATH_INNER, S_PATH_OUTER, S_VIEWBOX } from "@/lib/sannode-s";

/**
 * O S da San_Node, grande, no fundo do site. Dois nós descem pelos dois
 * traços do S conforme a página rola, acendendo o caminho e os pontos.
 */
export default function ScrollNodeS() {
  const stageRef = useRef<HTMLDivElement>(null);
  const basePaths = useRef<Array<SVGPathElement | null>>([]);
  const litPaths = useRef<Array<SVGPathElement | null>>([]);
  const glowPaths = useRef<Array<SVGPathElement | null>>([]);
  const travelers = useRef<Array<SVGGElement | null>>([]);
  const nodes = useRef<Array<SVGEllipseElement | null>>([]);

  useEffect(() => {
    const stage = stageRef.current;
    const bases = basePaths.current;
    const lits = litPaths.current;
    const glows = glowPaths.current;
    const dots = travelers.current;
    if (!stage || bases.some((p) => !p) || lits.some((p) => !p) || glows.some((p) => !p) || dots.some((d) => !d)) {
      return;
    }

    const lengths = bases.map((path) => path!.getTotalLength());
    [...lits, ...glows].forEach((path, index) => {
      const total = lengths[index % lengths.length];
      path!.style.strokeDasharray = String(total);
    });

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 1024px)");

    let frame = 0;
    let maxScroll = 0;
    let lastProgress = -1;

    // A altura da página só é medida quando ela muda (e não a cada quadro da rolagem).
    function measure() {
      maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    }

    function update(force = false) {
      frame = 0;
      const progress = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;

      // Mudança minúscula: não vale redesenhar o SVG.
      if (!force && Math.abs(progress - lastProgress) < 0.002) return;
      lastProgress = progress;

      bases.forEach((path, index) => {
        const total = lengths[index];
        const length = total * progress;
        const point = path!.getPointAtLength(length);
        const offset = String(total - length);

        dots[index]!.setAttribute("transform", `translate(${point.x} ${point.y})`);
        dots[index]!.style.visibility = "visible";
        lits[index]!.style.strokeDashoffset = offset;
        glows[index]!.style.strokeDashoffset = offset;
      });

      nodes.current.forEach((node, index) => {
        node?.setAttribute("fill-opacity", progress >= S_NODES[index].at ? "1" : "0.14");
      });

      // Paralaxe leve (só em tela grande e sem "reduzir movimento"): o S sobe e cresce um pouco.
      // No celular o S fica parado; só o caminho aceso e os nós acompanham a rolagem.
      stage!.style.transform =
        desktop.matches && !reduceMotion.matches
          ? `translate3d(0, ${(-progress * 6).toFixed(2)}vh, 0) scale(${(1 + progress * 0.07).toFixed(3)})`
          : "";
    }

    function requestUpdate() {
      if (!frame) frame = window.requestAnimationFrame(() => update());
    }

    function onResize() {
      measure();
      frame = window.requestAnimationFrame(() => update(true));
    }

    measure();
    update(true);
    window.addEventListener("scroll", requestUpdate, { passive: true });
    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(document.body);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", onResize);
      resizeObserver.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const paths = [S_PATH_OUTER, S_PATH_INNER];

  return (
    <div className="absolute inset-0 grid place-items-center overflow-hidden lg:pl-[16vw]" aria-hidden="true">
      <div className="absolute h-[70vh] w-[70vh] rounded-full bg-[radial-gradient(circle,rgba(30,144,255,0.16),transparent_65%)] lg:translate-x-[16vw]" />

      <div ref={stageRef} className="lg:will-change-transform">
        <svg viewBox={S_VIEWBOX} className="h-[92vh] w-auto max-w-none opacity-60 sm:opacity-100">
          <defs>
            <linearGradient id="sannode-s-gradient" gradientUnits="userSpaceOnUse" x1="0" y1="297" x2="0" y2="727">
              <stop offset="0" stopColor="#3FE3FF" />
              <stop offset="1" stopColor="#1E90FF" />
            </linearGradient>
          </defs>

          {paths.map((d, index) => (
            <path
              key={`base-${index}`}
              ref={(element) => {
                basePaths.current[index] = element;
              }}
              d={d}
              fill="none"
              stroke="rgba(63,227,255,0.10)"
              strokeWidth="24"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}

          {paths.map((d, index) => (
            <path
              key={`glow-${index}`}
              className="max-md:hidden"
              ref={(element) => {
                glowPaths.current[index] = element;
              }}
              d={d}
              fill="none"
              stroke="url(#sannode-s-gradient)"
              strokeOpacity="0.1"
              strokeWidth="46"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDashoffset="1000000"
            />
          ))}

          {paths.map((d, index) => (
            <path
              key={`lit-${index}`}
              ref={(element) => {
                litPaths.current[index] = element;
              }}
              d={d}
              fill="none"
              stroke="url(#sannode-s-gradient)"
              strokeOpacity="0.9"
              strokeWidth="24"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDashoffset="1000000"
            />
          ))}

          {S_NODES.map((node, index) => (
            <ellipse
              key={`${node.cx}-${node.cy}`}
              ref={(element) => {
                nodes.current[index] = element;
              }}
              cx={node.cx}
              cy={node.cy}
              rx={node.rx}
              ry={node.ry}
              fill="url(#sannode-s-gradient)"
              fillOpacity="0.14"
            />
          ))}

          {paths.map((d, index) => (
            <g
              key={`traveler-${index}`}
              ref={(element) => {
                travelers.current[index] = element;
              }}
              style={{ visibility: "hidden" }}
            >
              <circle r="44" fill="#3FE3FF" fillOpacity="0.14" className="md:motion-safe:animate-pulse" />
              <circle r="20" fill="#3FE3FF" />
              <circle r="8" fill="#0A1020" />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
