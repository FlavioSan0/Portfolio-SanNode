export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://san-node.vercel.app"
).replace(/\/$/, "");

export const siteConfig = {
  name: "San_Node",
  title: "San_Node | Sites, Sistemas e Automações",
  description:
    "A San_Node cria sites, sistemas sob medida e automações para organizar processos, fortalecer a presença digital e tornar a operação mais eficiente.",
  founder: "Flávio Oliveira",
  locale: "pt_BR",
  language: "pt-BR",
};
