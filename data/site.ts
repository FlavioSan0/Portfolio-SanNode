export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://san-node.vercel.app"
).replace(/\/$/, "");

export const siteConfig = {
  name: "San_Node",
  title: "San_Node | Sites, Sistemas e Automações em Natal, RN",
  description:
    "Sites que geram contato, sistemas sob medida e automações para tirar seu negócio do caderno. Desenvolvimento em Natal, RN, atendendo todo o Brasil.",
  founder: "Flávio Oliveira",
  locale: "pt_BR",
  language: "pt-BR",
};
