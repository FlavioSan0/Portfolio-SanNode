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

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className="tech-button fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#1E3654] bg-[#0C1B2E]/90 text-[#00D9FF] shadow-[0_18px_45px_rgba(0,0,0,0.35)] backdrop-blur transition hover:border-[#00D9FF] hover:bg-[#10233B]"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}