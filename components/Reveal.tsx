"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: RevealDirection;
};

const hiddenDirectionClass: Record<RevealDirection, string> = {
  up: "translate-y-6",
  down: "-translate-y-6",
  left: "translate-x-6",
  right: "-translate-x-6",
  none: "translate-x-0 translate-y-0",
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    const revealImmediately = () =>
      window.setTimeout(() => {
        setIsVisible(true);
      }, 0);

    if (!element) {
      const immediateTimer = revealImmediately();

      return () => {
        window.clearTimeout(immediateTimer);
      };
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      const immediateTimer = revealImmediately();

      return () => {
        window.clearTimeout(immediateTimer);
      };
    }

    const fallbackTimer = window.setTimeout(() => {
      setIsVisible(true);
    }, 700 + delay);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          window.clearTimeout(fallbackTimer);

          window.setTimeout(() => {
            setIsVisible(true);
          }, delay);

          observer.disconnect();
        }
      },
      {
        root: null,
        threshold: 0.08,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(element);

    return () => {
      window.clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={[
        "transition-all duration-700 ease-out will-change-transform",
        isVisible
          ? "translate-x-0 translate-y-0 opacity-100"
          : `${hiddenDirectionClass[direction]} opacity-0`,
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}