"use client";

import { useEffect, useState } from "react";
import { FallingPattern } from "@/components/ui/falling-pattern";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    function handleChange() {
      setIsMobile(mediaQuery.matches);
    }

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return isMobile;
}

export default function AnimatedSiteBackground() {
  const isMobile = useIsMobile();

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#040B14]">
      <FallingPattern
        color={isMobile ? "rgba(0,217,255,0.2)" : "rgba(0,217,255,0.34)"}
        backgroundColor="#040B14"
        duration={isMobile ? 190 : 130}
        density={isMobile ? 1.25 : 1}
        opacity={isMobile ? 0.42 : 0.68}
        className="absolute inset-0"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 46%, rgba(4,11,20,0.28) 74%, rgba(4,11,20,0.76) 100%)",
        }}
      />
    </div>
  );
}