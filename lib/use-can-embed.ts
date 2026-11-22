"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(min-width: 1024px) and (hover: hover)";

function subscribe(onChange: () => void) {
  const media = window.matchMedia(QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function getSnapshot() {
  // Economia de dados ligada: não carrega sites inteiros dentro de iframes.
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  if (connection?.saveData) return false;
  return window.matchMedia(QUERY).matches;
}

/**
 * Sites ao vivo dentro das capas só em telas grandes com mouse.
 * No celular cada iframe carrega um site desktop inteiro (HTML, JS, imagens), o que pesa muito:
 * lá a capa mostra o print e o botão abre o site de verdade.
 */
export function useCanEmbed() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
