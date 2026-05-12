"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { ReactNode, useRef } from "react";

type RevealDirection = "up" | "left" | "right";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  amount?: number;
  fadeOut?: boolean;
  direction?: RevealDirection;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 18,
  amount = 0.18,
  fadeOut = true,
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const isInView = useInView(ref, {
    amount,
    margin: "0px 0px -8% 0px",
  });

  function getHiddenPosition() {
    if (direction === "left") {
      return {
        x: -28,
        y: 0,
      };
    }

    if (direction === "right") {
      return {
        x: 28,
        y: 0,
      };
    }

    return {
      x: 0,
      y,
    };
  }

  const hiddenPosition = getHiddenPosition();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={
        isInView || !fadeOut
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              filter: "blur(0px)",
            }
          : {
              opacity: 0,
              x: hiddenPosition.x,
              y: hiddenPosition.y,
              filter: "blur(4px)",
            }
      }
      transition={{
        duration: 0.42,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}