"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 700);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-xl border border-[#243B5A] bg-[#0F1B3D]/92 text-[#3FE3FF] shadow-[0_18px_45px_rgba(0,0,0,0.3)] backdrop-blur transition hover:border-[#3FE3FF]/55"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
