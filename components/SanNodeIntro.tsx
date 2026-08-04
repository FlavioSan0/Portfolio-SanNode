"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

const INTRO_DURATION_MS = 2200;

export default function SanNodeIntro() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);

  const closeIntro = useCallback(() => {
    setVisible(false);
  }, []);

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const timer = window.setTimeout(
      closeIntro,
      reduceMotion ? 1100 : INTRO_DURATION_MS,
    );

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [closeIntro, reduceMotion]);

  useEffect(() => {
    if (visible) return;

    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }, [visible]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="sannode-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="sannode-intro fixed inset-0 z-[200] overflow-hidden bg-[#020711] text-[#F5FBFF]"
          aria-label="Abertura da SanNode"
        >
          <div className="sannode-intro__grid absolute inset-0" aria-hidden="true" />
          <div className="sannode-intro__vignette absolute inset-0" aria-hidden="true" />
          <div className="sannode-intro__scan absolute inset-x-0 top-0" aria-hidden="true" />
          <div className="sannode-intro__noise absolute inset-0" aria-hidden="true" />

          <div className="relative flex h-full items-center justify-center px-6">
            <div className="relative flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.86 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="sannode-intro__logo-wrap relative"
              >
                <motion.div
                  animate={
                    reduceMotion
                      ? { opacity: [0.22, 0.34, 0.22] }
                      : {
                          opacity: [0.16, 0.4, 0.16],
                          scale: [0.92, 1.05, 0.92],
                        }
                  }
                  transition={{ duration: 1.35, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-[-2.25rem] rounded-full bg-[#00C2FF]/18 blur-3xl"
                  aria-hidden="true"
                />

                <div className="relative grid place-items-center rounded-[2rem] border border-[#3FE3FF]/22 bg-[#071524]/58 p-7 shadow-[0_0_55px_rgba(0,194,255,0.14)] backdrop-blur-md sm:rounded-[2.4rem] sm:p-8">
                  <motion.div
                    animate={
                      reduceMotion
                        ? { opacity: [1, 0.92, 1] }
                        : {
                            x: [0, -2, 1, 0],
                            y: [0, 1, -1, 0],
                            opacity: [0.26, 0.42, 0.26],
                          }
                    }
                    transition={{ duration: 0.28, repeat: Infinity, repeatDelay: 0.8 }}
                    className="sannode-intro__logo-ghost sannode-intro__logo-ghost--cyan"
                    aria-hidden="true"
                  >
                    <Image
                      src="/logo-sannode.png"
                      alt=""
                      width={180}
                      height={180}
                      priority
                      className="h-[7.6rem] w-[7.6rem] object-contain sm:h-[9rem] sm:w-[9rem]"
                    />
                  </motion.div>

                  <motion.div
                    animate={
                      reduceMotion
                        ? { opacity: [0.9, 1, 0.9] }
                        : {
                            x: [0, 2, -1, 0],
                            y: [0, -1, 1, 0],
                            opacity: [0.18, 0.3, 0.18],
                          }
                    }
                    transition={{ duration: 0.31, repeat: Infinity, repeatDelay: 1.1 }}
                    className="sannode-intro__logo-ghost sannode-intro__logo-ghost--magenta"
                    aria-hidden="true"
                  >
                    <Image
                      src="/logo-sannode.png"
                      alt=""
                      width={180}
                      height={180}
                      priority
                      className="h-[7.6rem] w-[7.6rem] object-contain sm:h-[9rem] sm:w-[9rem]"
                    />
                  </motion.div>

                  <motion.div
                    animate={
                      reduceMotion
                        ? { opacity: 1 }
                        : { x: [0, 1, 0, -1, 0], y: [0, 0, -1, 1, 0] }
                    }
                    transition={{ duration: 0.22, repeat: Infinity, repeatDelay: 1.25 }}
                    className="relative z-[2]"
                  >
                    <Image
                      src="/logo-sannode.png"
                      alt="Logo da SanNode"
                      width={180}
                      height={180}
                      priority
                      className="h-[7.6rem] w-[7.6rem] object-contain drop-shadow-[0_0_28px_rgba(0,194,255,0.28)] sm:h-[9rem] sm:w-[9rem]"
                    />
                  </motion.div>

                  <span className="sannode-intro__logo-line absolute inset-x-4 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#C4F6FF]/90 to-transparent" aria-hidden="true" />
                </div>
              </motion.div>
            </div>
          </div>

          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.28 }}
            onClick={closeIntro}
            className="absolute bottom-7 right-7 min-h-11 rounded-full border border-[#1E3654]/70 bg-[#07111F]/70 px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#7F96AD] backdrop-blur-md transition hover:border-[#3FE3FF]/40 hover:text-[#D9F4FF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3FE3FF] sm:bottom-9 sm:right-9"
          >
            Pular abertura
          </motion.button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
