import { MESAFLOW_LANDING_URL } from "@/data/project-links";

export type ProjectMedia = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  title?: string;
  description?: string;
  expandable?: boolean;
  layout?: "full" | "half" | "third";
};

export type ProjectGalleryItem = ProjectMedia & {
  sectionTitle?: string;
  sectionDescription?: string;
};

export type ProjectGallerySection = {
  title: string;
  description: string;
};

export type LivePreviewConfig = {
  previewUrl?: string;
  viewportWidth?: number;
  viewportHeight?: number;
  offsetX?: number;
  offsetY?: number;
  zoom?: number;
};

export type ProjectCase = {
  slug: string;
  title: string;
  eyebrow: string;
  status: "Publicado" | "Em desenvolvimento" | "Sistema interno" | "MVP funcional";
  category: "Design" | "Site" | "Sistema" | "Dashboards & Automações";
  summary: string;
  coverImage: string;
  coverWidth: number;
  coverHeight: number;
  publishedPreviewImage?: string;
  publishedPreviewWidth?: number;
  publishedPreviewHeight?: number;
  coverExpandable?: boolean;
  coverFit?: "cover" | "contain";
  liveUrl?: string;
  liveLabel?: string;
  livePreview?: LivePreviewConfig;
  tags: string[];
  overview: string;
  challenge: string;
  solution: string;
  highlights: string[];
  result: string;
  results: string[];
  stack: string[];
  gallery?: ProjectGalleryItem[];
  gallerySection?: ProjectGallerySection;
  confidentialityNote?: string;
  seo?: {
    title: string;
    description: string;
    openGraphDescription?: string;
    twitterDescription?: string;
  };
};

export const projectCases: ProjectCase[] = [
  {
    slug: "abf-representacoes",
    title: "ABF Representações",
    eyebrow: "Identidade visual e landing page",
    status: "Publicado",
    category: "Design",
    summary:
      "Identidade visual e landing page para fortalecer a presença comercial da ABF.",
    coverImage: "/projetos/abf-case/logo-principal.png",
    coverWidth: 4001,
    coverHeight: 3001,
    liveUrl: "https://abf-representacao.vercel.app/#",
    liveLabel: "Acessar landing page",
    tags: ["Identidade visual", "Landing page", "Marca", "Comercial"],
    overview:
      "A ABF precisava organizar sua apresentação comercial. O trabalho começou pela identidade visual e evoluiu para aplicações digitais e uma landing page institucional.",
    challenge:
      "Construir uma imagem que transmitisse confiança e solidez, funcionasse em diferentes materiais e não parecesse genérica.",
    solution:
      "Uma identidade sóbria, com hierarquia clara e aplicações consistentes, conectada a uma landing page objetiva para apresentar a empresa e facilitar o contato.",
    highlights: [
      "Logo principal e variações da marca.",
      "Paleta de cores e direção visual.",
      "Aplicações para materiais de contato.",
      "Organização inicial da presença no Instagram.",
      "Landing page institucional publicada.",
    ],
    result:
      "A marca passou a contar com uma base visual coerente e uma presença digital pronta para apoiar sua apresentação comercial.",
    results: [
      "Identidade aplicada em diferentes pontos de contato.",
      "Apresentação institucional reunida em uma página.",
      "Comunicação visual mais consistente.",
    ],
    stack: ["Identidade visual", "UI/UX", "Next.js", "Tailwind CSS"],
    gallery: [
      {
        src: "/projetos/abf-case/conceito.png",
        width: 4001,
        height: 3001,
        layout: "full",
        alt: "Conceito visual da ABF Representações",
        caption: "Conceito visual com foco em presença comercial e confiança.",
      },
      {
        src: "/projetos/abf-case/cartao-visita.png",
        width: 4001,
        height: 3001,
        alt: "Cartão de visita da ABF Representações",
        caption: "Identidade aplicada ao material de contato.",
      },
      {
        src: "/projetos/abf-case/instagram-perfil.png",
        width: 1080,
        height: 2400,
        alt: "Perfil do Instagram da ABF Representações",
        caption: "Organização inicial da presença digital da marca.",
      },
    ],
    seo: {
      title: "ABF Representações | Identidade Visual e Landing Page",
      description:
        "Case da SanNode para a ABF Representações: identidade visual, presença digital e landing page institucional publicada.",
      openGraphDescription:
        "Identidade visual, presença digital e landing page institucional desenvolvidas para a ABF Representações.",
    },
  },
  {
    slug: "site-casamento",
    title: "Site de Casamento",
    eyebrow: "Convite digital com painel",
    status: "Publicado",
    category: "Site",
    summary:
      "Convite digital com experiência para convidados e painel administrativo para organização do evento.",
    coverImage: "/projetos/site-casamento/mobile-home.png",
    coverWidth: 1080,
    coverHeight: 2953,
    publishedPreviewImage: "/projetos/site-casamento/mobile-home.png",
    publishedPreviewWidth: 1080,
    publishedPreviewHeight: 2953,
    liveUrl: "https://convite-casamento-chi.vercel.app/evento/flavio-ana",
    liveLabel: "Acessar projeto",
    livePreview: {
      viewportWidth: 768,
      viewportHeight: 480,
      offsetX: 0,
      offsetY: 0,
      zoom: 1,
    },
    tags: ["RSVP", "Painel", "Lista de presentes", "Evento"],
    overview:
      "O projeto transformou o convite de casamento em uma experiência digital com informações do evento, confirmação de presença, presentes e uma área reservada para o casal.",
    challenge:
      "Unir emoção e praticidade em uma interface simples para os convidados, sem deixar de atender às necessidades reais de organização do casal.",
    solution:
      "Um site responsivo com convite, RSVP, lista de presentes e informações essenciais, apoiado por um painel para acompanhar confirmações e administrar o conteúdo.",
    highlights: [
      "Convite digital responsivo.",
      "Confirmação de presença com acompanhantes.",
      "Lista de presentes e cotas.",
      "Informações do evento em uma navegação direta.",
      "Painel administrativo para o casal.",
    ],
    result:
      "O evento ganhou um ambiente digital próprio, facilitando o acesso dos convidados e centralizando parte da organização para o casal.",
    results: [
      "Informações do evento reunidas em um único endereço.",
      "Confirmações acessíveis pelo painel.",
      "Experiência adaptada a celulares e computadores.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS"],
    gallery: [
      {
        src: "/projetos/site-casamento/painel-login.png",
        width: 1872,
        height: 921,
        alt: "Tela de acesso ao painel do site de casamento",
        caption: "Acesso reservado à área administrativa.",
      },
      {
        src: "/projetos/site-casamento/painel-dashboard.png",
        width: 1856,
        height: 916,
        alt: "Dashboard administrativo do site de casamento",
        caption: "Visão geral para acompanhar a organização do evento.",
      },
      {
        src: "/projetos/site-casamento/painel-presentes.png",
        width: 1849,
        height: 921,
        alt: "Gestão de presentes no painel do site de casamento",
        caption: "Cadastro e organização da lista de presentes.",
      },
      {
        src: "/projetos/site-casamento/painel-confirmacoes.png",
        width: 1856,
        height: 931,
        alt: "Lista de confirmações no painel do site de casamento",
        caption: "Acompanhamento das confirmações de presença.",
      },
    ],
    seo: {
      title: "Site de Casamento | Convite Digital com RSVP e Painel",
      description:
        "Case de site de casamento com convite digital, confirmação de presença, lista de presentes, painel administrativo e experiência mobile.",
      openGraphDescription:
        "Projeto de convite digital com confirmação de presença, lista de presentes, painel administrativo e estrutura responsiva.",
      twitterDescription:
        "Case de site com RSVP, lista de presentes, painel administrativo e experiência mobile.",
    },
  },
  {
    slug: "portfolio-daniel-felix",
    title: "Portfólio Daniel Félix",
    eyebrow: "Portfólio audiovisual e presença profissional",
    status: "Publicado",
    category: "Site",
    summary:
      "Portfólio responsivo para apresentar trabalhos de captação e produção audiovisual com uma experiência visual mais cinematográfica.",
    coverImage: "/projetos/daniel-felix/home.png",
    coverWidth: 1600,
    coverHeight: 1000,
    publishedPreviewImage: "/projetos/daniel-felix/home.png",
    publishedPreviewWidth: 1600,
    publishedPreviewHeight: 1000,
    liveUrl: "https://portfolio-daniel-felix.vercel.app/#inicio",
    liveLabel: "Acessar portfólio",
    livePreview: {
      viewportWidth: 1440,
      viewportHeight: 900,
      offsetX: 0,
      offsetY: 0,
      zoom: 1,
    },
    tags: ["Portfólio", "Audiovisual", "Responsivo", "Direção visual"],
    overview:
      "Daniel precisava de um espaço próprio para apresentar seus trabalhos, explicar sua atuação e transformar registros audiovisuais em uma apresentação profissional acessível pelo celular e pelo computador.",
    challenge:
      "Construir uma experiência com identidade cinematográfica sem esconder o conteúdo, evitar uma sequência excessiva de cards e manter a navegação objetiva principalmente no mobile.",
    solution:
      "Um portfólio editorial com hierarquia forte, destaque para imagens e vídeos, seções organizadas por contexto e uma adaptação mobile pensada para reduzir rolagem sem perder a leitura dos projetos.",
    highlights: [
      "Apresentação profissional do videomaker.",
      "Projetos organizados com foco no conteúdo visual.",
      "Experiência responsiva com ajustes específicos para mobile.",
      "Direção visual inspirada no universo audiovisual.",
      "Textos ajustados para eventos, empresas e diferentes produções.",
      "Chamadas diretas para contato e contratação.",
    ],
    result:
      "O projeto transformou o trabalho de Daniel em uma presença digital própria, com narrativa visual consistente e uma estrutura pronta para apresentar novos projetos.",
    results: [
      "Trabalhos reunidos em um único endereço profissional.",
      "Apresentação mais clara dos serviços e áreas de atuação.",
      "Experiência adaptada para navegação em diferentes telas.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "UI/UX"],
    seo: {
      title: "Portfólio Daniel Félix | Site Audiovisual",
      description:
        "Case de portfólio audiovisual responsivo para apresentar projetos, serviços e trabalhos de Daniel Félix com direção visual cinematográfica.",
      openGraphDescription:
        "Portfólio audiovisual com experiência responsiva, apresentação de projetos e direção visual construída para Daniel Félix.",
      twitterDescription:
        "Case de portfólio audiovisual responsivo com projetos, serviços e direção visual cinematográfica.",
    },
  },
  {
    slug: "paroquia-santuario",
    title: "Paróquia / Santuário",
    eyebrow: "Site institucional religioso",
    status: "Publicado",
    category: "Site",
    summary:
      "Site institucional publicado para organizar informações do Santuário, horários, celebrações, pastorais e comunicação com a comunidade.",
    coverImage: "/projetos/paroquia-santuario/home.png",
    coverWidth: 1862,
    coverHeight: 921,
    liveUrl: "https://santuario-nossa-senhora-de-fatima.vercel.app",
    liveLabel: "Acessar site do Santuário",
    livePreview: {
      viewportWidth: 1440,
      viewportHeight: 900,
      offsetX: 0,
      offsetY: 0,
      zoom: 1,
    },
    tags: ["Site institucional", "UI/UX", "Responsivo", "Comunidade"],
    overview:
      "O site reúne horários, eventos, pastorais, localização, contatos e conteúdos de apoio em um ambiente acolhedor e acessível para a comunidade.",
    challenge:
      "Equilibrar tradição e modernidade em uma experiência clara para pessoas de diferentes idades e níveis de familiaridade com tecnologia.",
    solution:
      "Uma arquitetura simples, com leitura confortável, seções bem definidas, chamadas objetivas e imagens institucionais que aproximam a comunidade.",
    highlights: [
      "Apresentação institucional clara.",
      "Organização dos horários de missas.",
      "Espaço para eventos e comunicados.",
      "Estrutura para pastorais e contatos.",
      "Navegação responsiva e acessível.",
      "Site publicado com estrutura preparada para evolução contínua.",
    ],
    result:
      "O site foi publicado e passou a oferecer uma base digital organizada para fortalecer a comunicação do Santuário e facilitar o acesso às informações recorrentes da comunidade.",
    results: [
      "Conteúdo institucional reunido em uma estrutura única.",
      "Informações recorrentes mais fáceis de consultar.",
      "Site disponível publicamente e preparado para novas atualizações.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "UI/UX"],
  },
  {
    slug: "banda-praise",
    title: "Banda Praise",
    eyebrow: "Site artístico e institucional",
    status: "Em desenvolvimento",
    category: "Site",
    summary:
      "Site para apresentar a identidade da Banda Praise, seus momentos, vídeos, fotos, agenda e presença musical.",
    coverImage: "/projetos/banda-praise/home.png",
    coverWidth: 1862,
    coverHeight: 933,
    tags: ["Site artístico", "Momentos", "Vídeos", "Identidade"],
    overview:
      "A Banda Praise precisava de um espaço próprio para apresentar sua identidade, registrar momentos importantes e facilitar o acesso a vídeos, fotos, agenda e contatos.",
    challenge:
      "Transmitir energia e emoção sem poluir a navegação, mantendo fotos e vídeos reais como parte central da experiência.",
    solution:
      "Uma estrutura visual direta, com destaque para mídia, capas personalizadas e chamadas claras, organizada para receber novos conteúdos ao longo do tempo.",
    highlights: [
      "Apresentação da banda na página inicial.",
      "Seção de momentos com fotos e vídeos.",
      "Capas personalizadas para conteúdos em vídeo.",
      "Espaço para agenda e contatos.",
      "Interface responsiva.",
    ],
    result:
      "O projeto em desenvolvimento cria uma presença digital mais organizada e uma base preparada para atualizações de agenda, mídia e contato.",
    results: [
      "Conteúdos da banda reunidos em um só ambiente.",
      "Maior destaque para registros visuais.",
      "Estrutura pronta para receber novas publicações.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "UI/UX"],
  },
  {
    slug: "vem-voando",
    title: "Vem Voando",
    eyebrow: "Landing page comercial",
    status: "Publicado",
    category: "Site",
    summary:
      "Landing page publicada para apresentar a Vem Voando com clareza, impacto visual e foco em conversão.",
    coverImage: "/projetos/vem-voando/home.png",
    coverWidth: 1857,
    coverHeight: 928,
    liveUrl: "https://vem-voando.vercel.app",
    liveLabel: "Acessar landing page",
    livePreview: {
      viewportWidth: 1366,
      viewportHeight: 854,
      offsetX: 0,
      offsetY: 0,
      zoom: 1,
    },
    tags: ["Landing page", "Conversão", "Responsivo", "Viagens"],
    overview:
      "A landing page foi pensada para apresentar a Vem Voando de forma objetiva, explicar sua proposta e direcionar o visitante para orçamento ou atendimento.",
    challenge:
      "Comunicar valor e gerar confiança rapidamente, sem excesso de informação ou uma apresentação comercial genérica.",
    solution:
      "Uma página direta, com proposta principal, benefícios, conteúdo explicativo e chamadas para contato, apoiada por uma hierarquia visual responsiva.",
    highlights: [
      "Proposta principal apresentada no hero.",
      "Seções objetivas para serviços e benefícios.",
      "Chamadas de ação ao longo da página.",
      "Navegação responsiva.",
      "Landing page publicada e preparada para evolução contínua.",
    ],
    result:
      "A landing page foi publicada e passou a funcionar como uma base comercial para apresentar a marca, organizar sua proposta e direcionar oportunidades para atendimento e orçamento.",
    results: [
      "Mensagem comercial organizada em uma única página.",
      "Caminho de contato mais visível.",
      "Projeto disponível publicamente e adaptado a diferentes telas.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "UI/UX"],
  },
  {
    slug: "controle-estoque-mecanica",
    title: "Controle de Estoque Mecânica",
    eyebrow: "Sistema web para oficina",
    status: "Sistema interno",
    category: "Sistema",
    summary:
      "Sistema privado para organizar produtos, entradas, saídas e movimentações em uma rotina real de oficina.",
    coverImage: "/projetos/estoque-case/dashboard.png",
    coverWidth: 1871,
    coverHeight: 921,
    liveUrl: "https://controle-de-estoque-mecanica.vercel.app",
    liveLabel: "Acessar sistema",
    tags: ["Estoque", "Dashboard", "Fornecedores", "Movimentações"],
    overview:
      "O sistema foi desenvolvido para concentrar produtos, fornecedores, entradas, saídas e movimentações em uma rotina operacional de oficina.",
    challenge:
      "Substituir controles dispersos por registros mais claros, com histórico, filtros e uma visão rápida do estoque disponível.",
    solution:
      "Uma aplicação web com dashboard, cadastros e fluxos de movimentação conectados a uma base de dados, organizada para receber novos módulos.",
    highlights: [
      "Dashboard com visão geral do estoque.",
      "Cadastro e consulta de produtos.",
      "Registro de entradas e saídas.",
      "Histórico de movimentações.",
      "Cadastro de fornecedores.",
      "Relatórios para consulta.",
    ],
    result:
      "A operação passou a contar com uma base central para consultar o estoque e registrar movimentações, mantendo espaço para ampliar o sistema.",
    results: [
      "Produtos e movimentações reunidos em uma aplicação.",
      "Histórico disponível para consulta.",
      "Estrutura preparada para novos módulos.",
    ],
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Supabase",
    ],
    gallery: [
      {
        src: "/projetos/estoque-case/login.png",
        width: 1874,
        height: 913,
        alt: "Tela de acesso do sistema de estoque",
        caption: "Acesso reservado ao sistema.",
      },
      {
        src: "/projetos/estoque-case/produtos.png",
        width: 1857,
        height: 919,
        alt: "Tela de produtos do sistema de estoque",
        caption: "Cadastro e consulta de produtos.",
      },
      {
        src: "/projetos/estoque-case/entradas.png",
        width: 1858,
        height: 924,
        alt: "Tela de entradas do sistema de estoque",
        caption: "Registro de entradas no estoque.",
      },
      {
        src: "/projetos/estoque-case/saidas.png",
        width: 1855,
        height: 922,
        alt: "Tela de saídas do sistema de estoque",
        caption: "Registro de saídas do estoque.",
      },
      {
        src: "/projetos/estoque-case/movimentacoes.png",
        width: 1856,
        height: 921,
        alt: "Histórico de movimentações do sistema de estoque",
        caption: "Histórico centralizado de movimentações.",
      },
      {
        src: "/projetos/estoque-case/relatorios.png",
        width: 1872,
        height: 919,
        alt: "Tela de relatórios do sistema de estoque",
        caption: "Relatórios para apoiar a consulta operacional.",
      },
    ],
    seo: {
      title: "Controle de Estoque Mecânica | Sistema Web Privado",
      description:
        "Case de sistema web privado para oficina mecânica, com dashboard, produtos, entradas, saídas, movimentações, relatórios e acesso restrito.",
      openGraphDescription:
        "Sistema web para controle operacional de estoque em oficina mecânica, com dashboard, movimentações, relatórios e evolução para gestão mecânica.",
      twitterDescription:
        "Case de sistema web privado com dashboard, produtos, movimentações, relatórios e acesso restrito.",
    },
  },
  {
    slug: "mesaflow-sistema-garcom",
    title: "MesaFlow — Sistema de Pedidos e Atendimento",
    eyebrow: "Produto SaaS para pequenos negócios gastronômicos",
    status: "MVP funcional",
    category: "Sistema",
    summary:
      "Sistema web para pequenos estabelecimentos organizarem cardápio digital, pedidos, balcão, delivery, mesas, atendimento por garçom e gestão operacional em uma única plataforma.",
    coverImage: "/projetos/mesaflow/dashboard.png",
    coverWidth: 1864,
    coverHeight: 933,
    liveUrl: MESAFLOW_LANDING_URL,
    liveLabel: "Ver landing page oficial",
    tags: ["SaaS", "Cardápio digital", "Pedidos", "Gestão"],
    overview:
      "O MesaFlow organiza cardápio, pedidos, balcão, delivery, mesas e atendimento em uma plataforma voltada à rotina de pequenos estabelecimentos gastronômicos.",
    challenge:
      "Substituir comandas, mensagens e controles dispersos por uma solução simples de usar e flexível para diferentes tipos de operação.",
    solution:
      "Um MVP com cardápio digital, canais de pedido, setores de preparo, controle de mesas e painel administrativo para produtos, usuários e configurações.",
    highlights: [
      "Cardápio digital com identidade do estabelecimento.",
      "Pedidos por delivery, balcão, mesas e garçom.",
      "Gestão de produtos, adicionais e disponibilidade.",
      "Organização por setores de preparo.",
      "Controle de mesas, contas e status dos pedidos.",
      "Usuários e permissões por função.",
    ],
    result:
      "O produto saiu do protótipo e chegou a uma base funcional para demonstração, testes com clientes e evolução como serviço.",
    results: [
      "Fluxo completo de atendimento demonstrável.",
      "Módulos centrais reunidos em uma plataforma.",
      "Base pronta para validar produto e operação.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "Supabase",
      "PostgreSQL",
      "Vercel",
      "Playwright",
      "Git/GitHub",
    ],
  },
  {
    slug: "painel-do-dia",
    title: "Painel do Dia",
    eyebrow: "Aplicativo desktop integrado ao Google Agenda",
    status: "MVP funcional",
    category: "Sistema",
    summary:
      "Aplicativo para Windows que reúne compromissos do dia e calendário mensal em uma visualização fixa e rápida no computador.",
    coverImage: "/projetos/painel-do-dia/dashboard.png",
    coverWidth: 1600,
    coverHeight: 1000,
    tags: ["Desktop", "Google Agenda", "Produtividade", "Automação"],
    overview:
      "O Painel do Dia foi criado para reduzir a necessidade de abrir diferentes telas durante a rotina e manter compromissos e prioridades visíveis em um único ambiente no computador.",
    challenge:
      "Consultar a agenda repetidamente interrompia o fluxo de trabalho. A solução também precisava iniciar com o Windows, preservar a configuração local e funcionar como um widget sem ficar sobrepondo os outros aplicativos.",
    solution:
      "Um aplicativo desktop com interface em React, integração com o Google Calendar e estrutura em Tauri, exibindo atividades do dia, visão mensal e configurações persistentes para uso recorrente.",
    highlights: [
      "Integração com compromissos do Google Calendar.",
      "Resumo visual das atividades do dia.",
      "Calendário mensal integrado ao painel.",
      "Inicialização automática com o Windows.",
      "Configuração local preservada entre execuções.",
      "Comportamento pensado para uso como widget desktop.",
    ],
    result:
      "O aplicativo chegou a uma versão funcional para uso diário, centralizando compromissos e reduzindo consultas manuais à agenda durante o trabalho.",
    results: [
      "Agenda diária disponível diretamente no desktop.",
      "Menos alternância entre navegador, calendário e tarefas.",
      "Base preparada para novos recursos de produtividade.",
    ],
    stack: ["Tauri", "Rust", "React", "TypeScript", "Google Calendar API"],
    seo: {
      title: "Painel do Dia | Aplicativo Desktop com Google Agenda",
      description:
        "Case de aplicativo desktop para Windows com atividades diárias, calendário mensal e integração com o Google Calendar.",
      openGraphDescription:
        "Aplicativo desktop integrado ao Google Agenda para visualizar compromissos, calendário e prioridades do dia.",
      twitterDescription:
        "Case de aplicativo desktop com Google Agenda, calendário mensal e visão das atividades do dia.",
    },
  },
  {
    slug: "gestao-financeira",
    title: "Gestão Financeira",
    eyebrow: "Sistema financeiro familiar",
    status: "Em desenvolvimento",
    category: "Sistema",
    summary:
      "Sistema para organizar lançamentos, contas, cartões, entradas, despesas fixas e rotina financeira familiar.",
    coverImage: "/projetos/gestao-financeira/dashboard.png",
    coverWidth: 1866,
    coverHeight: 937,
    tags: ["Finanças", "Dashboard", "Mobile", "Contas", "Cartões"],
    overview:
      "O sistema reúne contas, cartões, lançamentos, despesas fixas, entradas e visão mensal para tornar o acompanhamento financeiro familiar mais claro.",
    challenge:
      "Atender ao uso diário, principalmente no celular, sem tornar confusos os registros recorrentes, cartões, pagamentos, responsáveis e filtros.",
    solution:
      "Uma interface responsiva com dashboard, formulários, filtros, controle de contas e cartões, lançamentos fixos e edição de registros.",
    highlights: [
      "Dashboard com visão financeira organizada.",
      "Controle de contas e cartões.",
      "Registro de entradas e despesas.",
      "Lançamentos fixos, recorrentes e parcelados.",
      "Filtros adaptados ao uso no celular.",
      "Status e responsáveis pelos registros.",
    ],
    result:
      "O projeto em desenvolvimento já consolida uma base para acompanhar a rotina financeira e ampliar o acesso a mais pessoas da família.",
    results: [
      "Informações financeiras reunidas em uma interface.",
      "Consulta mensal mais organizada.",
      "Base preparada para autenticação e múltiplos usuários.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "Neon",
      "PostgreSQL",
    ],
  },
  {
    slug: "dashboard-comercial-leads-vem-voando",
    title: "Dashboard Comercial de Leads — Vem Voando",
    eyebrow: "Inteligência comercial integrada",
    status: "Sistema interno",
    category: "Dashboards & Automações",
    summary:
      "Dashboard integrado ao Google Forms e Sheets que transforma registros de atendimento em indicadores, filtros e análises comerciais.",
    coverImage: "/projects/dashboard-leads/gallery/visao-geral.png",
    coverWidth: 1672,
    coverHeight: 941,
    coverFit: "contain",
    tags: ["Leads", "Conversões", "Gestores", "Dashboard"],
    overview:
      "A Vem Voando já registrava os atendimentos no Google Forms e armazenava as respostas em uma planilha. O projeto aproveitou esse fluxo sem exigir migração.",
    challenge:
      "A equipe precisava percorrer muitas linhas para acompanhar conversões, origens e períodos, preparar reuniões e diferenciar recorrência de duplicidade.",
    solution:
      "Um dashboard conectado à planilha, com indicadores e filtros por período, gestor, origem, produto e conversão. A análise de duplicidade combina cliente, produto e cotação.",
    gallerySection: {
      title: "Interface e acompanhamento comercial",
      description:
        "O painel organiza diferentes níveis da operação comercial, desde a visão geral dos indicadores até a análise detalhada dos leads, permitindo consultar resultados, aplicar filtros e identificar pontos que precisam de atenção.",
    },
    gallery: [
      {
        src: "/projects/dashboard-leads/gallery/visao-geral.png",
        width: 1672,
        height: 941,
        alt: "Visão geral do painel comercial de leads da Vem Voando",
        title: "Visão centralizada da operação",
        description:
          "A tela inicial reúne o período analisado, os filtros principais e os indicadores necessários para acompanhar o desempenho comercial mensal.",
        layout: "full",
      },
      {
        src: "/projects/dashboard-leads/gallery/indicadores-filtros.png",
        width: 1672,
        height: 941,
        alt: "Indicadores comerciais e filtros rápidos por situação dos leads",
        title: "Situação atual dos leads",
        description:
          "Os indicadores apresentam pendências, retornos, possíveis duplicidades, erros e decisões finalizadas. Os filtros rápidos permitem acessar cada situação sem navegar manualmente pela planilha.",
        layout: "half",
      },
      {
        src: "/projects/dashboard-leads/gallery/consulta-avancada.png",
        width: 1672,
        height: 941,
        alt: "Consulta avançada do painel com filtros por período, gestor, origem e produto",
        title: "Análises por diferentes critérios",
        description:
          "A consulta avançada permite combinar período, gestor, origem, produto, situação e checagem, refinando os resultados conforme a necessidade da equipe.",
        layout: "half",
      },
      {
        src: "/projects/dashboard-leads/gallery/resumo-produto.png",
        width: 1672,
        height: 941,
        alt: "Resumo do desempenho comercial dos leads por produto",
        title: "Desempenho por produto",
        description:
          "A visualização compara procura, conversão, pendências e alertas entre passagens, pacotes, hospedagens e outros produtos comercializados.",
        layout: "third",
      },
      {
        src: "/projects/dashboard-leads/gallery/resumo-origem.png",
        width: 1672,
        height: 941,
        alt: "Resumo dos leads e conversões por canal de origem",
        title: "Origem dos leads",
        description:
          "O painel mostra quais canais geram maior volume e conversão, facilitando a análise de indicações, clientes recorrentes, redes sociais e outras fontes.",
        layout: "third",
      },
      {
        src: "/projects/dashboard-leads/gallery/resumo-gestor.png",
        width: 1672,
        height: 941,
        alt: "Resumo anonimizado do acompanhamento comercial por gestor",
        title: "Acompanhamento por responsável",
        description:
          "A distribuição por gestor permite analisar volume, conversões, pendências e alertas por responsável, preservando a privacidade dos dados apresentados.",
        layout: "third",
      },
      {
        src: "/projects/dashboard-leads/gallery/fechamento-mensal-anonimizado.png",
        width: 1636,
        height: 831,
        alt: "Visão executiva da reunião mensal do painel de leads",
        title: "Visão executiva do período",
        description:
          "O fechamento mensal reúne os principais indicadores do período, um resumo executivo automático e os dados necessários para orientar a reunião comercial.",
        layout: "full",
        sectionTitle: "Reunião mensal e apoio à decisão",
        sectionDescription:
          "O painel também consolida os dados do período em uma visão preparada para reuniões mensais, reunindo indicadores, comparações, destaques e pontos que exigem acompanhamento.",
      },
      {
        src: "/projects/dashboard-leads/gallery/comparativo-destaques-anonimizado.png",
        width: 1624,
        height: 892,
        alt: "Comparativo mensal e pontos de atenção do painel comercial",
        title: "Comparativo e pontos de atenção",
        description:
          "A comparação com o mês anterior permite identificar evolução, quedas e situações que precisam de acompanhamento pela equipe.",
        layout: "full",
      },
      {
        src: "/projects/dashboard-leads/gallery/reuniao-mensal-distribuicao-anonimizada.png",
        width: 1636,
        height: 909,
        alt: "Distribuição de resultados por equipe, origem e produto",
        title: "Distribuição dos resultados",
        description:
          "A visão consolidada organiza volume e conversões por responsáveis, canais de aquisição, produtos e demandas recorrentes.",
        layout: "half",
      },
      {
        src: "/projects/dashboard-leads/gallery/produtos-rotas-anonimizadas.png",
        width: 1620,
        height: 897,
        alt: "Produtos e rotas recorrentes identificados no painel",
        title: "Produtos e rotas recorrentes",
        description:
          "O painel destaca os produtos mais procurados e os padrões de cotação, apoiando a análise de demanda comercial.",
        layout: "half",
      },
      {
        src: "/projects/dashboard-leads/gallery/leads-encontrados.png",
        width: 1672,
        height: 941,
        alt: "Listagem anonimizada dos leads encontrados no período",
        title: "Base operacional detalhada",
        description:
          "A listagem reúne os registros do período com origem, produto, situação e checagem, permitindo localizar rapidamente os atendimentos que precisam de acompanhamento.",
        layout: "full",
      },
    ],
    highlights: [
      "Integração com Google Forms e Sheets.",
      "Indicadores de atendimento e conversão.",
      "Filtros por período, gestor, origem e produto.",
      "Consulta de registros individuais.",
      "Controle de leads convertidos e não convertidos.",
      "Sinalização de possíveis duplicidades por critérios combinados.",
    ],
    result:
      "A base de respostas passou a funcionar como ferramenta de acompanhamento, apoiando consultas, reuniões mensais e a identificação de pontos de atenção.",
    results: [
      "Leitura do período reunida em um painel.",
      "Preparação das reuniões apoiada por filtros.",
      "Recorrências tratadas com critérios mais adequados.",
    ],
    stack: ["Google Sheets", "Google Forms", "Google Apps Script", "JavaScript"],
    confidentialityNote:
      "Dados demonstrativos e informações sensíveis foram anonimizados para preservar a confidencialidade do projeto.",
  },
  {
    slug: "painel-controle-relatorios-operacionais",
    title: "Painel de Controle de Relatórios Operacionais",
    eyebrow: "Automação documental e rastreabilidade",
    status: "Sistema interno",
    category: "Dashboards & Automações",
    summary:
      "Painel integrado ao ecossistema Google para centralizar a conferência, organização e rastreabilidade de relatórios operacionais.",
    coverImage: "/projects/painel-relatorios-operacionais.webp",
    coverWidth: 1568,
    coverHeight: 1003,
    tags: ["Relatórios", "Documentos", "Google Drive", "Automação"],
    overview:
      "Formulários, planilhas, documentos e pastas reuniam as informações do processo. O painel conecta essas fontes para apoiar a conferência e a organização documental.",
    challenge:
      "A conferência exigia buscas manuais por responsáveis, registros e arquivos, dificultando a identificação de pendências e o acompanhamento das observações.",
    solution:
      "Um painel integrado ao Google Forms, Sheets e Drive, com pesquisa, filtros, status de conferência, observações e organização automatizada dos arquivos relacionados.",
    highlights: [
      "Pesquisa de registros por número e ano.",
      "Filtros por grupos e responsáveis.",
      "Consulta rápida ou sincronização completa.",
      "Controle de envio, conferência e pendências.",
      "Cadastro de responsáveis ainda sem relatórios.",
      "Acesso e organização dos documentos relacionados.",
    ],
    result:
      "A solução reduziu consultas manuais e reuniu as informações necessárias para uma conferência mais organizada e rastreável.",
    results: [
      "Pendências reunidas em uma visão central.",
      "Observações vinculadas aos registros.",
      "Documentos relacionados mais fáceis de localizar.",
    ],
    stack: ["Google Sheets", "Google Forms", "Google Drive", "Google Apps Script"],
    confidentialityNote:
      "Esta apresentação utiliza dados demonstrativos para preservar a confidencialidade das informações.",
  },
];

export function getProjectCaseBySlug(slug: string) {
  return projectCases.find((project) => project.slug === slug);
}

export function shouldUsePublishedScreenPreview(
  project: Pick<ProjectCase, "category" | "status">,
) {
  return (
    (project.category === "Site" || project.category === "Sistema") &&
    project.status === "Publicado"
  );
}

export function getProjectPublishedPreviewMedia(
  project: ProjectCase,
): ProjectMedia {
  return {
    src: project.publishedPreviewImage ?? project.coverImage,
    alt: `Preview publicado do projeto ${project.title}`,
    title: project.title,
    description: project.summary,
    width: project.publishedPreviewWidth ?? project.coverWidth,
    height: project.publishedPreviewHeight ?? project.coverHeight,
    expandable: project.coverExpandable,
  };
}

export function getProjectCoverMedia(project: ProjectCase): ProjectMedia {
  return {
    src: project.coverImage,
    alt: `Imagem principal do projeto ${project.title}`,
    title: project.title,
    description: project.summary,
    width: project.coverWidth,
    height: project.coverHeight,
    expandable: project.coverExpandable,
  };
}

export function getProjectMedia(project: ProjectCase): ProjectMedia[] {
  const heroMedia = shouldUsePublishedScreenPreview(project)
    ? getProjectPublishedPreviewMedia(project)
    : getProjectCoverMedia(project);

  const items: ProjectMedia[] = [
    heroMedia,
    ...(project.gallery ?? []).map((item) => ({
      ...item,
      title: item.title ?? item.caption ?? item.alt,
      description: item.description ?? item.caption,
    })),
  ];

  return items.filter(
    (item, index) =>
      item.expandable !== false &&
      items.findIndex((candidate) => candidate.src === item.src) === index,
  );
}
