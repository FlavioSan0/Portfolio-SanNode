"use client";

import { motion, useReducedMotion } from "framer-motion";

const nodes = [
  { top: "10%", left: "12%", delay: 0 },
  { top: "18%", left: "72%", delay: 0.8 },
  { top: "28%", left: "38%", delay: 1.2 },
  { top: "42%", left: "84%", delay: 0.4 },
  { top: "52%", left: "18%", delay: 1.6 },
  { top: "64%", left: "70%", delay: 0.9 },
  { top: "78%", left: "24%", delay: 1.4 },
  { top: "84%", left: "82%", delay: 0.7 },
];

const lines = [
  { top: "18%", left: "8%", width: "240px", rotate: "0deg", delay: 0.2 },
  { top: "26%", left: "58%", width: "200px", rotate: "0deg", delay: 1.1 },
  { top: "48%", left: "12%", width: "160px", rotate: "90deg", delay: 0.6 },
  { top: "62%", left: "72%", width: "180px", rotate: "90deg", delay: 1.4 },
  { top: "78%", left: "34%", width: "220px", rotate: "0deg", delay: 0.9 },
];

const separators = [
  { top: "18%", delay: 0 },
  { top: "38%", delay: 0.6 },
  { top: "58%", delay: 1.2 },
  { top: "78%", delay: 0.9 },
];

export default function AnimatedSiteBackground() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#040B14]">
      {/* base glow */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at top left, rgba(0,217,255,0.10), transparent 28%),
            radial-gradient(circle at top right, rgba(37,99,235,0.10), transparent 30%),
            radial-gradient(circle at bottom center, rgba(0,217,255,0.08), transparent 26%)
          `,
        }}
      />

      {/* grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
        animate={reduceMotion ? undefined : { backgroundPosition: ["0px 0px", "32px 32px"] }}
        transition={reduceMotion ? undefined : { duration: 16, repeat: Infinity, ease: "linear" }}
      />

      {/* overlay tech vertical */}
      <motion.div
        className="absolute inset-y-0 left-1/2 w-[42%] -translate-x-1/2 opacity-28 blur-2xl"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,217,255,0.14), transparent 22%, transparent 78%, rgba(37,99,235,0.12))",
        }}
        animate={reduceMotion ? undefined : { opacity: [0.12, 0.28, 0.12] }}
        transition={reduceMotion ? undefined : { duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* scan horizontal */}
      <motion.div
        className="absolute inset-x-0 top-0 h-36 blur-2xl"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(0,217,255,0.12), transparent)",
        }}
        animate={reduceMotion ? undefined : { y: ["-15%", "115%"] }}
        transition={reduceMotion ? undefined : { duration: 9, repeat: Infinity, ease: "linear" }}
      />

      {/* scan diagonal/side glow */}
      <motion.div
        className="absolute top-0 h-full w-[30%] blur-3xl"
        style={{
          left: "-10%",
          background:
            "linear-gradient(90deg, transparent, rgba(0,217,255,0.08), transparent)",
        }}
        animate={reduceMotion ? undefined : { x: ["0%", "140%"] }}
        transition={reduceMotion ? undefined : { duration: 14, repeat: Infinity, ease: "linear" }}
      />

      {/* floating glows */}
      <motion.div
        className="absolute -left-16 top-[22%] h-80 w-80 rounded-full bg-[#2563EB]/12 blur-3xl"
        animate={reduceMotion ? undefined : { opacity: [0.10, 0.24, 0.10], scale: [1, 1.08, 1] }}
        transition={reduceMotion ? undefined : { duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-70px] top-[10%] h-96 w-96 rounded-full bg-[#00D9FF]/12 blur-3xl"
        animate={reduceMotion ? undefined : { opacity: [0.12, 0.28, 0.12], scale: [1, 1.1, 1] }}
        transition={reduceMotion ? undefined : { duration: 6.6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* tech lines */}
      {lines.map((line, index) => (
        <motion.div
          key={`line-${index}`}
          className="absolute h-px opacity-35"
          style={{
            top: line.top,
            left: line.left,
            width: line.width,
            rotate: line.rotate,
            background:
              "linear-gradient(to right, transparent, rgba(0,217,255,0.9), transparent)",
          }}
          animate={reduceMotion ? undefined : { opacity: [0.18, 0.55, 0.18], scaleX: [0.96, 1.04, 0.96] }}
          transition={reduceMotion ? undefined : { duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: line.delay }}
        />
      ))}

      {/* nodes */}
      {nodes.map((node, index) => (
        <motion.span
          key={`node-${index}`}
          className="absolute block h-2.5 w-2.5 rounded-full bg-[#00D9FF]"
          style={{
            top: node.top,
            left: node.left,
            boxShadow: "0 0 18px rgba(0,217,255,0.85)",
          }}
          animate={reduceMotion ? undefined : { opacity: [0.25, 0.9, 0.25], scale: [0.9, 1.2, 0.9] }}
          transition={reduceMotion ? undefined : { duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: node.delay }}
        />
      ))}

      {/* soft horizontal separators to smooth section divisions */}
      {separators.map((sep, i) => (
        <motion.div
          key={`sep-${i}`}
          className="absolute left-0 right-0 h-px blur-sm"
          style={{
            top: sep.top,
            background:
              "linear-gradient(90deg, transparent, rgba(0,217,255,0.08), rgba(37,99,235,0.06), transparent)",
          }}
          animate={reduceMotion ? undefined : { opacity: [0.06, 0.22, 0.06], translateY: [-2, 2, -2] }}
          transition={reduceMotion ? undefined : { duration: 8 + i * 1.2, repeat: Infinity, ease: "easeInOut", delay: sep.delay }}
        />
      ))}

      {/* vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, transparent 54%, rgba(4,11,20,0.20) 75%, rgba(4,11,20,0.45) 100%)",
        }}
      />
    </div>
  );
}