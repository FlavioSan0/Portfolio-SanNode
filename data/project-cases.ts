import { MESAFLOW_LANDING_URL } from "@/data/project-links";

export type ProjectGalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectCase = {
  slug: string;
  title: string;
  eyebrow: string;
  status: "Publicado" | "Em desenvolvimento" | "Sistema interno" | "MVP funcional";
  category: "Design" | "Site" | "Sistema" | "Dashboards & Automações";
  summary: string;
  coverImage: string;
  liveUrl?: string;
  liveLabel?: string;
  tags: string[];
  overview: string;
  challenge: string;
  solution: string;
  highlights: string[];
  result: string;
  results: string[];
  stack: string[];
  gallery?: ProjectGalleryItem[];
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
        alt: "Conceito visual da ABF Representações",
        caption: "Conceito visual com foco em presença comercial e confiança.",
      },
      {
        src: "/projetos/abf-case/cartao-visita.png",
        alt: "Cartão de visita da ABF Representações",
        caption: "Identidade aplicada ao material de contato.",
      },
      {
        src: "/projetos/abf-case/instagram-perfil.png",
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
    liveUrl: "https://site-casamento-chi.vercel.app",
    liveLabel: "Acessar projeto",
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
        alt: "Tela de acesso ao painel do site de casamento",
        caption: "Acesso reservado à área administrativa.",
      },
      {
        src: "/projetos/site-casamento/painel-dashboard.png",
        alt: "Dashboard administrativo do site de casamento",
        caption: "Visão geral para acompanhar a organização do evento.",
      },
      {
        src: "/projetos/site-casamento/painel-presentes.png",
        alt: "Gestão de presentes no painel do site de casamento",
        caption: "Cadastro e organização da lista de presentes.",
      },
      {
        src: "/projetos/site-casamento/painel-confirmacoes.png",
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
    slug: "paroquia-santuario",
    title: "Paróquia / Santuário",
    eyebrow: "Site institucional religioso",
    status: "Em desenvolvimento",
    category: "Site",
    summary:
      "Site institucional para organizar informações da paróquia, horários, eventos, pastorais e comunicação com a comunidade.",
    coverImage: "/projetos/paroquia-santuario/home.png",
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
    ],
    result:
      "Ainda em desenvolvimento, o projeto já estabelece uma base organizada para fortalecer a comunicação e facilitar o acesso às informações recorrentes.",
    results: [
      "Conteúdo institucional reunido em uma estrutura única.",
      "Informações recorrentes mais fáceis de consultar.",
      "Base preparada para publicação e atualização.",
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
    status: "Em desenvolvimento",
    category: "Site",
    summary:
      "Landing page para apresentar a Vem Voando com clareza, impacto visual e foco em conversão.",
    coverImage: "/projetos/vem-voando/home.png",
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
      "Estrutura pronta para publicação.",
    ],
    result:
      "O projeto em desenvolvimento estabelece uma base mais clara para a apresentação comercial da marca e para a captação de oportunidades online.",
    results: [
      "Mensagem comercial organizada em uma única página.",
      "Caminho de contato mais visível.",
      "Experiência adaptada a diferentes telas.",
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
        alt: "Tela de acesso do sistema de estoque",
        caption: "Acesso reservado ao sistema.",
      },
      {
        src: "/projetos/estoque-case/produtos.png",
        alt: "Tela de produtos do sistema de estoque",
        caption: "Cadastro e consulta de produtos.",
      },
      {
        src: "/projetos/estoque-case/entradas.png",
        alt: "Tela de entradas do sistema de estoque",
        caption: "Registro de entradas no estoque.",
      },
      {
        src: "/projetos/estoque-case/saidas.png",
        alt: "Tela de saídas do sistema de estoque",
        caption: "Registro de saídas do estoque.",
      },
      {
        src: "/projetos/estoque-case/movimentacoes.png",
        alt: "Histórico de movimentações do sistema de estoque",
        caption: "Histórico centralizado de movimentações.",
      },
      {
        src: "/projetos/estoque-case/relatorios.png",
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
    slug: "gestao-financeira",
    title: "Gestão Financeira",
    eyebrow: "Sistema financeiro familiar",
    status: "Em desenvolvimento",
    category: "Sistema",
    summary:
      "Sistema para organizar lançamentos, contas, cartões, entradas, despesas fixas e rotina financeira familiar.",
    coverImage: "/projetos/gestao-financeira/dashboard.png",
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
    coverImage: "/projects/dashboard-leads-vem-voando.webp",
    tags: ["Leads", "Conversões", "Gestores", "Dashboard"],
    overview:
      "A Vem Voando já registrava os atendimentos no Google Forms e armazenava as respostas em uma planilha. O projeto aproveitou esse fluxo sem exigir migração.",
    challenge:
      "A equipe precisava percorrer muitas linhas para acompanhar conversões, origens e períodos, preparar reuniões e diferenciar recorrência de duplicidade.",
    solution:
      "Um dashboard conectado à planilha, com indicadores e filtros por período, gestor, origem, produto e conversão. A análise de duplicidade combina cliente, produto e cotação.",
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
