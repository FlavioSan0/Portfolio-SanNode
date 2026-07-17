"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "none";
type RevealPhase = "before" | "visible" | "exited";

type RevealProps = {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  initialScale?: number;
  stagger?: number;
  index?: number;
  repeat?: boolean;
  className?: string;
};

type RevealRegistration = {
  repeat: boolean;
  update: (isVisible: boolean) => void;
};

const registrations = new Map<Element, RevealRegistration>();
let sharedObserver: IntersectionObserver | null = null;

function getSharedObserver() {
  if (sharedObserver || typeof IntersectionObserver === "undefined") {
    return sharedObserver;
  }

  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const registration = registrations.get(entry.target);

        if (!registration) continue;

        const viewportHeight = entry.rootBounds?.height ?? window.innerHeight;
        const isLargeElement =
          entry.boundingClientRect.height >= viewportHeight * 0.75;
        const entered =
          entry.isIntersecting &&
          (isLargeElement || entry.intersectionRatio >= 0.16);

        if (entered) {
          registration.update(true);

          if (!registration.repeat) {
            sharedObserver?.unobserve(entry.target);
            registrations.delete(entry.target);
          }
        } else if (!entry.isIntersecting) {
          registration.update(false);
        }
      }
    },
    {
      threshold: [0, 0.16],
      rootMargin: "-4% 0px -10% 0px",
    },
  );

  return sharedObserver;
}

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 650,
  distance = 28,
  initialScale = 1,
  stagger = 0,
  index = 0,
  repeat = true,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [phase, setPhase] = useState<RevealPhase>("before");

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const observer = getSharedObserver();

    if (reducedMotion || !observer) {
      const immediateTimer = window.setTimeout(() => setPhase("visible"), 0);

      return () => window.clearTimeout(immediateTimer);
    }

    let observerReported = false;

    registrations.set(element, {
      repeat,
      update: (isVisible) => {
        observerReported = true;
        setPhase((current) =>
          isVisible ? "visible" : current === "before" ? current : "exited",
        );
      },
    });
    observer.observe(element);

    const fallbackTimer = window.setTimeout(() => {
      if (!observerReported) setPhase("visible");
    }, 1500);

    return () => {
      window.clearTimeout(fallbackTimer);
      observer.unobserve(element);
      registrations.delete(element);
    };
  }, [repeat]);

  const style = {
    "--reveal-delay": `${delay + stagger * index}ms`,
    "--reveal-duration": `${duration}ms`,
    "--reveal-exit-duration": `${Math.min(duration, 420)}ms`,
    "--reveal-distance": `${distance}px`,
    "--reveal-exit-distance": `${Math.min(14, distance * 0.45)}px`,
    "--reveal-initial-scale": initialScale,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      data-reveal-state={phase}
      data-reveal-direction={direction}
      className={`scroll-reveal ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
