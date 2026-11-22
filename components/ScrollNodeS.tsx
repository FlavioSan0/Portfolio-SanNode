"use client";

import { useEffect, useRef } from "react";

/**
 * O S da San_Node, grande, no fundo do site.
 * Conforme a página rola, um nó desce pelo S: o trecho já percorrido acende.
 */
const S_PATH = "M330 70 H180 C60 70 60 280 180 280 H230 C350 280 350 490 230 490 H80";
const NODE_STOPS = [0, 0.34, 0.67, 1] as const;

export default function ScrollNodeS() {
  const pathRef = useRef<SVGPathElement>(null);
  const litRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGGElement>(null);
  const nodeRefs = useRef<Array<SVGCircleElement | null>>([]);

  useEffect(() => {
    const path = pathRef.current;
    const lit = litRef.current;
    const dot = dotRef.current;
    if (!path || !lit || !dot) return;

    const total = path.getTotalLength();
    lit.style.strokeDasharray = String(total);

    NODE_STOPS.forEach((stop, index) => {
      const point = path.getPointAtLength(total * stop);
      const node = nodeRefs.current[index];
      if (!node) return;
      node.setAttribute("cx", String(point.x));
      node.setAttribute("cy", String(point.y));
    });

    let frame = 0;

    function update() {
      frame = 0;
      if (!path || !lit || !dot) return;

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
      const length = total * progress;
      const point = path.getPointAtLength(length);

      dot.setAttribute("transform", `translate(${point.x} ${point.y})`);
      dot.style.visibility = "visible";
      lit.style.strokeDashoffset = String(total - length);

      NODE_STOPS.forEach((stop, index) => {
        nodeRefs.current[index]?.setAttribute("fill-opacity", progress >= stop ? "0.95" : "0.22");
      });
    }

    function requestUpdate() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="absolute inset-0 grid place-items-center overflow-hidden lg:pl-[18vw]" aria-hidden="true">
      <svg viewBox="0 0 400 560" className="h-[90vh] w-auto max-w-none opacity-70 sm:opacity-100">
        <defs>
          <linearGradient id="sannode-s-gradient" gradientUnits="userSpaceOnUse" x1="0" y1="70" x2="0" y2="490">
            <stop offset="0" stopColor="#3FE3FF" />
            <stop offset="1" stopColor="#1E90FF" />
          </linearGradient>
        </defs>

        <path
          ref={pathRef}
          d={S_PATH}
          fill="none"
          stroke="rgba(63,227,255,0.11)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          ref={litRef}
          d={S_PATH}
          fill="none"
          stroke="url(#sannode-s-gradient)"
          strokeOpacity="0.5"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDashoffset="1000000"
        />

        {NODE_STOPS.map((stop, index) => (
          <circle
            key={stop}
            ref={(element) => {
              nodeRefs.current[index] = element;
            }}
            r="13"
            fill="#3FE3FF"
            fillOpacity="0.22"
          />
        ))}

        <g ref={dotRef} style={{ visibility: "hidden" }}>
          <circle r="34" fill="#3FE3FF" fillOpacity="0.14" />
          <circle r="17" fill="#3FE3FF" />
          <circle r="7" fill="#0A1020" />
        </g>
      </svg>
    </div>
  );
}
