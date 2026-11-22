/**
 * Geometria do S da logo, redesenhada em vetor (mesmas coordenadas do
 * logo-sannode.png, 1024x1024). São dois traços entrelaçados que ligam os
 * quatro nós A → D.
 */
export const S_VIEWBOX = "300 280 424 466";

export const S_PATH_OUTER =
  "M648 331 H455 A105 105 0 0 0 455 541 H565 C590 541 608 556 608 578 Q608 607 580 607 H468 L380 676";

export const S_PATH_INNER =
  "M648 331 L560 398 H475 C450 398 435 410 435 432 C435 452 450 468 475 468 H585 C650 468 695 515 695 578 C695 641 650 688 585 688 H360";

/** Nós da logo. `at` é o ponto do progresso (0 a 1) em que o nó acende. */
export const S_NODES = [
  { cx: 648, cy: 330, rx: 37, ry: 33, at: 0 },
  { cx: 434, cy: 432, rx: 25, ry: 23, at: 0.4 },
  { cx: 608, cy: 578, rx: 25, ry: 23, at: 0.68 },
  { cx: 360, cy: 688, rx: 41, ry: 36, at: 0.98 },
] as const;
