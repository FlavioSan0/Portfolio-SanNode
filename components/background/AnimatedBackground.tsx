"use client";

import { motion, useReducedMotion } from "framer-motion";

const circuitPaths = [
  "M 40 140 H 320 V 260 H 520",
  "M 520 260 H 760 V 180 H 980",
  "M 980 180 H 1240 V 320 H 1500",
  "M 120 420 H 420 V 560 H 660",
  "M 660 560 H 920 V 460 H 1180 V 620 H 1460",
  "M 80 760 H 300 V 900 H 520",
  "M 520 900 H 860 V 760 H 1080",
  "M 1080 760 H 1340 V 920 H 1540",
  "M 250 80 V 220 H 430",
  "M 720 80 V 240 H 880",
  "M 1280 60 V 210 H 1420",
  "M 180 540 V 700 H 360",
  "M 820 520 V 700 H 980",
  "M 1380 500 V 690 H 1500",
  "M 400 980 V 1120 H 620",
  "M 980 980 V 1120 H 1260",
  "M 300 340 H 360 V 420 H 520",
  "M 1120 320 H 1180 V 420 H 1320",
];

const nodes = [
  { cx: 40, cy: 140, r: 4, delay: 0.1 },
  { cx: 320, cy: 140, r: 3.5, delay: 0.3 },
  { cx: 320, cy: 260, r: 4.5, delay: 0.5 },
  { cx: 520, cy: 260, r: 4, delay: 0.7 },
  { cx: 760, cy: 260, r: 3.5, delay: 0.9 },
  { cx: 760, cy: 180, r: 4, delay: 1.1 },
  { cx: 980, cy: 180, r: 4.5, delay: 1.3 },
  { cx: 1240, cy: 180, r: 3.5, delay: 1.5 },
  { cx: 1240, cy: 320, r: 4, delay: 1.7 },
  { cx: 1500, cy: 320, r: 4.5, delay: 1.9 },

  { cx: 120, cy: 420, r: 4, delay: 0.2 },
  { cx: 420, cy: 420, r: 3.5, delay: 0.4 },
  { cx: 420, cy: 560, r: 4, delay: 0.6 },
  { cx: 660, cy: 560, r: 4.5, delay: 0.8 },
  { cx: 920, cy: 560, r: 3.5, delay: 1.0 },
  { cx: 920, cy: 460, r: 4, delay: 1.2 },
  { cx: 1180, cy: 460, r: 4.5, delay: 1.4 },
  { cx: 1180, cy: 620, r: 3.5, delay: 1.6 },
  { cx: 1460, cy: 620, r: 4, delay: 1.8 },

  { cx: 80, cy: 760, r: 4.5, delay: 0.25 },
  { cx: 300, cy: 760, r: 3.5, delay: 0.45 },
  { cx: 300, cy: 900, r: 4, delay: 0.65 },
  { cx: 520, cy: 900, r: 4.5, delay: 0.85 },
  { cx: 860, cy: 900, r: 3.5, delay: 1.05 },
  { cx: 860, cy: 760, r: 4, delay: 1.25 },
  { cx: 1080, cy: 760, r: 4.5, delay: 1.45 },
  { cx: 1340, cy: 760, r: 3.5, delay: 1.65 },
  { cx: 1340, cy: 920, r: 4, delay: 1.85 },
  { cx: 1540, cy: 920, r: 4.5, delay: 2.05 },

  { cx: 250, cy: 80, r: 3.5, delay: 0.15 },
  { cx: 430, cy: 220, r: 3.5, delay: 0.55 },
  { cx: 720, cy: 80, r: 3.5, delay: 0.95 },
  { cx: 880, cy: 240, r: 3.5, delay: 1.35 },
  { cx: 1280, cy: 60, r: 3.5, delay: 1.75 },
  { cx: 1420, cy: 210, r: 3.5, delay: 2.15 },

  { cx: 180, cy: 540, r: 3.5, delay: 0.35 },
  { cx: 360, cy: 700, r: 3.5, delay: 0.75 },
  { cx: 820, cy: 520, r: 3.5, delay: 1.15 },
  { cx: 980, cy: 700, r: 3.5, delay: 1.55 },
  { cx: 1380, cy: 500, r: 3.5, delay: 1.95 },
  { cx: 1500, cy: 690, r: 3.5, delay: 2.35 },

  { cx: 400, cy: 980, r: 3.5, delay: 0.5 },
  { cx: 620, cy: 1120, r: 3.5, delay: 0.9 },
  { cx: 980, cy: 980, r: 3.5, delay: 1.3 },
  { cx: 1260, cy: 1120, r: 3.5, delay: 1.7 },
];

const movingSignals = [
  {
    path: "M 40 140 H 320 V 260 H 520 H 760 V 180 H 980",
    dur: "7s",
    begin: "0s",
  },
  {
    path: "M 120 420 H 420 V 560 H 660 H 920 V 460 H 1180",
    dur: "8s",
    begin: "1.2s",
  },
  {
    path: "M 80 760 H 300 V 900 H 520 H 860 V 760 H 1080 H 1340",
    dur: "9s",
    begin: "0.6s",
  },
  {
    path: "M 250 80 V 220 H 430",
    dur: "5s",
    begin: "0.9s",
  },
  {
    path: "M 1280 60 V 210 H 1420",
    dur: "5.6s",
    begin: "1.5s",
  },
];

export default function AnimatedSiteBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#040B14]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 12% 18%, rgba(0,217,255,0.14), transparent 28%),
            radial-gradient(circle at 86% 14%, rgba(37,99,235,0.18), transparent 30%),
            radial-gradient(circle at 50% 55%, rgba(0,217,255,0.08), transparent 36%),
            radial-gradient(circle at 28% 86%, rgba(37,99,235,0.12), transparent 24%),
            radial-gradient(circle at 78% 82%, rgba(0,217,255,0.10), transparent 22%)
          `,
        }}
      />

      <motion.div
        className="absolute inset-y-0 left-[-10%] w-[30%] blur-3xl"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,217,255,0.10), transparent)",
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: ["0%", "220%"],
                opacity: [0.12, 0.2, 0.12],
              }
        }
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute inset-x-0 top-[-10%] h-64 blur-3xl"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(37,99,235,0.10), transparent)",
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: ["0%", "180%"],
                opacity: [0.1, 0.22, 0.1],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="absolute inset-0 opacity-[0.95]">
        <svg
          viewBox="0 0 1600 1200"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id="circuitStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0,217,255,0.12)" />
              <stop offset="50%" stopColor="rgba(0,217,255,0.55)" />
              <stop offset="100%" stopColor="rgba(37,99,235,0.18)" />
            </linearGradient>

            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(0,217,255,0.95)" />
              <stop offset="100%" stopColor="rgba(0,217,255,0)" />
            </radialGradient>

            <filter id="softGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {circuitPaths.map((path, index) => (
            <motion.path
              key={`path-${index}`}
              d={path}
              fill="none"
              stroke="url(#circuitStroke)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#softGlow)"
              initial={{ opacity: 0.18, pathLength: 0.96 }}
              animate={
                shouldReduceMotion
                  ? { opacity: 0.24 }
                  : {
                      opacity: [0.14, 0.38, 0.14],
                      pathLength: [0.96, 1, 0.96],
                    }
              }
              transition={{
                duration: 4.8 + (index % 4),
                delay: index * 0.08,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {nodes.map((node, index) => (
            <g key={`node-${index}`}>
              <motion.circle
                cx={node.cx}
                cy={node.cy}
                r={node.r + 6}
                fill="url(#nodeGlow)"
                initial={{ opacity: 0.2, scale: 0.9 }}
                animate={
                  shouldReduceMotion
                    ? { opacity: 0.25 }
                    : {
                        opacity: [0.12, 0.42, 0.12],
                        scale: [0.92, 1.18, 0.92],
                      }
                }
                transition={{
                  duration: 3.2,
                  delay: node.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
              />

              <motion.circle
                cx={node.cx}
                cy={node.cy}
                r={node.r}
                fill="rgba(0,217,255,0.95)"
                initial={{ opacity: 0.45 }}
                animate={
                  shouldReduceMotion
                    ? { opacity: 0.6 }
                    : {
                        opacity: [0.3, 1, 0.3],
                      }
                }
                transition={{
                  duration: 2.6,
                  delay: node.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </g>
          ))}

          {!shouldReduceMotion &&
            movingSignals.map((signal, index) => (
              <g key={`signal-${index}`}>
                <circle r="4" fill="rgba(0,217,255,0.95)" filter="url(#softGlow)">
                  <animateMotion
                    dur={signal.dur}
                    begin={signal.begin}
                    repeatCount="indefinite"
                    path={signal.path}
                  />
                </circle>

                <circle r="10" fill="rgba(0,217,255,0.16)">
                  <animateMotion
                    dur={signal.dur}
                    begin={signal.begin}
                    repeatCount="indefinite"
                    path={signal.path}
                  />
                </circle>
              </g>
            ))}
        </svg>
      </div>

      <motion.div
        className="absolute -left-16 top-[20%] h-80 w-80 rounded-full bg-[#00D9FF]/10 blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                opacity: [0.08, 0.18, 0.08],
                scale: [1, 1.1, 1],
              }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute right-[-80px] top-[10%] h-96 w-96 rounded-full bg-[#2563EB]/12 blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                opacity: [0.08, 0.22, 0.08],
                scale: [1, 1.12, 1],
              }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[-120px] left-[24%] h-80 w-80 rounded-full bg-[#00D9FF]/8 blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                opacity: [0.05, 0.16, 0.05],
                scale: [1, 1.08, 1],
              }
        }
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, transparent 52%, rgba(4,11,20,0.16) 76%, rgba(4,11,20,0.58) 100%)",
        }}
      />
    </div>
  );
}