"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

const INTRO_DURATION_MS = 2600;
const STORAGE_KEY = "sannode-intro-seen";

/** Abertura: a logo (PNG, sem moldura) surge com luz e o nome aparece embaixo. Uma vez por sessão. */
export default function SanNodeIntro() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);

  const closeIntro = useCallback(() => {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* sessionStorage indisponível: tudo bem */
    }
    setVisible(false);
  }, []);

  useEffect(() => {
    let alreadySeen = false;
    try {
      alreadySeen = window.sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      alreadySeen = false;
    }

    if (alreadySeen) {
      const skip = window.setTimeout(() => setVisible(false), 0);
      return () => window.clearTimeout(skip);
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const timer = window.setTimeout(closeIntro, reduceMotion ? 1000 : INTRO_DURATION_MS);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [closeIntro, reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="sannode-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="sannode-intro fixed inset-0 z-[200] overflow-hidden bg-[#020711] text-[#F5FBFF]"
          aria-label="Abertura da San_Node"
        >
          <div className="sannode-intro__grid absolute inset-0" aria-hidden="true" />
          <div className="sannode-intro__vignette absolute inset-0" aria-hidden="true" />
          {reduceMotion ? null : (
            <div className="sannode-intro__scan absolute inset-x-0 top-0" aria-hidden="true" />
          )}

          <div className="relative flex h-full flex-col items-center justify-center px-6">
            <div className="relative">
              <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: [0, 0.55, 0.3], scale: [0.7, 1.15, 1] }}
                transition={{ duration: 1.6, ease: "easeOut" }}
                className="absolute -inset-16 rounded-full bg-[radial-gradient(circle,rgba(0,194,255,0.35),transparent_62%)]"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.82, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src="/logo-sannode-trim.png"
                  alt="Logo da San_Node"
                  width={416}
                  height={458}
                  priority
                  className="relative h-40 w-auto drop-shadow-[0_0_34px_rgba(0,194,255,0.45)] sm:h-52"
                />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.34em" }}
              transition={{ delay: 0.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 text-sm font-bold uppercase text-[#9DEEFF] sm:text-base"
            >
              San_Node
            </motion.p>
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
