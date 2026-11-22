import { whatsappLink } from "@/data/contact";

/**
 * Todo o texto da home mora aqui. Para trocar a frase principal,
 * mexa só em `hero`.
 */
export const hero = {
  eyebrow: "San_Node · Natal, RN",
  title: "Seu negócio sai do caderno.",
  highlight: "sai do caderno.",
  subtitle:
    "Sites, sistemas e automações sob medida para pequenos negócios que ainda controlam tudo no papel, na planilha e no WhatsApp.",
  primaryCta: "Pedir orçamento",
  primaryMessage:
    "Olá! Vim pelo site da San_Node e quero tirar meu negócio do caderno. Posso explicar o que preciso?",
  secondaryCta: "Ver trabalhos",
  trail: [
    { label: "Caderno, planilha e WhatsApp", muted: true },
    { label: "Um sistema do seu jeito" },
    { label: "Você no controle" },
  ],
} as const;

export const heroWhatsapp = whatsappLink(hero.primaryMessage);

export const offers = [
  {
    title: "Site que gera contato",
    description: "Página rápida, no celular e no computador, com botão direto para o seu WhatsApp.",
    example: "Agência, psicólogo, igreja, profissional autônomo",
    message: "Olá! Quero um site para o meu negócio. Pode me passar como funciona?",
  },
  {
    title: "Sistema sob medida",
    description: "Pedidos, agenda, estoque e caixa em um painel só, no lugar do caderno.",
    example: "Oficina, delivery, salão, barbearia",
    message: "Olá! Quero organizar meu negócio com um sistema. Pode me explicar como funciona?",
  },
  {
    title: "Automação",
    description: "Planilha, formulário e relatório que se preenchem sozinhos, sem retrabalho.",
    example: "Relatórios, cadastros, controles internos",
    message: "Olá! Tenho uma tarefa repetitiva que quero automatizar. Podemos conversar?",
  },
] as const;

export const products = [
  {
    name: "OficinaNode",
    forWho: "Oficinas de carro e moto",
    pain: "Ordem de serviço, peças e pagamentos espalhados entre papel e WhatsApp.",
    features: ["Ordem de serviço", "Estoque e peças", "Financeiro"],
    status: "Em uso em oficina real",
    image: "/projetos/oficinanode/home.jpg",
    caseHref: "/projetos/oficinanode",
    demoHref: "https://oficinanode.vercel.app",
  },
  {
    name: "MesaFlow",
    forWho: "Restaurantes, bares e delivery",
    pain: "Pedido anotado à mão, cozinha desencontrada e caixa fechado no olho.",
    features: ["Balcão, mesa e delivery", "Painel da cozinha", "Caixa e relatórios"],
    status: "Pronto para demonstração",
    image: "/projetos/mesaflow/dashboard.png",
    caseHref: "/projetos/mesaflow-sistema-garcom",
    demoHref: "https://garcom-zeta.vercel.app",
  },
  {
    name: "AgendaNode",
    forWho: "Salões, barbearias e estética",
    pain: "Horário marcado no caderno, cliente esquecido e agenda cheia de buraco.",
    features: ["Agenda online", "Equipe e serviços", "Clientes e caixa"],
    status: "Em evolução",
    image: "/projetos/agendanode/home.jpg",
    caseHref: "/projetos/agendanode",
    demoHref: "https://agendanode-gamma.vercel.app",
  },
] as const;

export type FeaturedCase = {
  slug: string;
  title: string;
  audience: string;
  outcome: string;
  image?: string;
  liveUrl?: string;
  embed?: boolean;
};

export const featuredCases: FeaturedCase[] = [
  {
    slug: "vem-voando",
    title: "Vem Voando",
    audience: "Agência de viagens",
    outcome: "Landing page que apresenta a agência e leva o cliente direto para o pedido de cotação.",
    image: "/projetos/vem-voando/home.png",
    liveUrl: "https://vem-voando.vercel.app",
  },
  {
    slug: "matheus-alexandre",
    title: "Matheus Alexandre",
    audience: "Psicólogo clínico",
    outcome: "Site profissional que explica o atendimento online e simplifica o primeiro contato.",
    image: "/projetos/matheus-alexandre/home.jpg",
    liveUrl: "https://matheus-alexandre-site.vercel.app",
  },
  {
    slug: "paroquia-santuario",
    title: "Santuário N. S. de Fátima",
    audience: "Igreja e comunidade",
    outcome: "Horários, celebrações e pastorais reunidos em um único site fácil de consultar.",
    image: "/projetos/paroquia-santuario/home.png",
    liveUrl: "https://santuario-nossa-senhora-de-fatima.vercel.app",
  },
  {
    slug: "portfolio-daniel-felix",
    title: "Daniel Félix",
    audience: "Audiovisual",
    outcome: "Portfólio que mostra o trabalho com cara de cinema e endereço próprio.",
    image: "/projetos/daniel-felix/home.png",
    liveUrl: "https://portfolio-daniel-felix.vercel.app",
  },
  {
    slug: "abf-representacoes",
    title: "ABF Representações",
    audience: "Representação comercial",
    outcome: "Marca nova e landing page para a empresa se apresentar com mais credibilidade.",
    image: "/projetos/abf-case/landing-page.png",
    liveUrl: "https://abf-representacao.vercel.app",
  },
];

export const steps = [
  { title: "Você conta", description: "Uma conversa rápida no WhatsApp sobre como o negócio funciona hoje." },
  { title: "Eu proponho", description: "Escopo, prazo e valor claros, antes de qualquer desenvolvimento." },
  { title: "Entrego e acompanho", description: "Publico, ensino a usar e sigo ajustando conforme o uso." },
] as const;

export const about = {
  title: "Quem faz é uma pessoa só, e você fala direto com ela.",
  text: "Sou o Flávio, desenvolvedor e designer. Cuido de tudo: conversa, desenho, código e suporte. Sem intermediário e sem pacote pronto.",
  facts: ["Atendo Natal e todo o Brasil", "Resposta direta no WhatsApp", "Produtos próprios em uso real"],
} as const;
