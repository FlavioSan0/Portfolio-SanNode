import type { ProjectCase } from "@/data/project-cases";

export const mesaFlowCurrentCase: ProjectCase = {
  slug: "mesaflow-sistema-garcom",
  title: "MesaFlow — Gestão para Estabelecimentos",
  eyebrow: "Operação e gestão para pequenos negócios gastronômicos",
  status: "MVP funcional",
  category: "Sistema",
  summary:
    "Sistema multiempresa para organizar cardápio, balcão, delivery, garçom, mesas, preparo, caixa e gestão em pequenos estabelecimentos gastronômicos.",
  coverImage: "/projetos/mesaflow/dashboard.png",
  coverWidth: 1864,
  coverHeight: 933,
  liveUrl: "https://garcom-zeta.vercel.app",
  liveLabel: "Conhecer MesaFlow",
  livePreview: {
    viewportWidth: 1440,
    viewportHeight: 900,
    offsetX: 0,
    offsetY: 0,
    zoom: 1,
  },
  tags: ["Multiempresa", "Pedidos", "Caixa", "Gestão"],
  overview:
    "O MesaFlow evoluiu de um fluxo de pedidos e atendimento para uma plataforma operacional multiempresa. Hoje reúne os principais pontos da rotina de pequenos estabelecimentos gastronômicos, do cardápio público ao fechamento e à visão gerencial.",
  challenge:
    "Pedidos espalhados, fechamento manual, comunicação falha com o preparo e falta de rastreabilidade tornam a operação mais lenta e aumentam o risco de erro, principalmente quando balcão, delivery, salão e caixa trabalham ao mesmo tempo.",
  solution:
    "A plataforma organiza a operação por módulos e perfis de acesso. Balcão, delivery, garçom, mesas, setores de preparo, caixa, cardápio público, relatórios e auditoria trabalham sobre a mesma base, com estrutura preparada para diferentes empresas e rotinas. A próxima frente de evolução amplia a gestão para custos, precificação e estoque.",
  highlights: [
    "Pedidos integrados por balcão, delivery, garçom e mesas.",
    "Preparo organizado por setores como cozinha, bar, copa, churrasqueira e forno.",
    "Caixa com pagamentos, fechamento diário, ticket médio e cancelamentos rastreáveis.",
    "Cardápio público configurável com produtos, promoções, horários, taxas e identidade do estabelecimento.",
    "Arquitetura multiempresa com módulos e permissões por função.",
    "Relatórios por período, operador, produto, forma de pagamento e módulo.",
    "PWA e aplicativo Android com impressão Bluetooth e notificações operacionais.",
  ],
  result:
    "O MesaFlow já funciona como uma base completa de operação para demonstração e implantação, indo além do lançamento de pedidos e consolidando atendimento, preparo, caixa, gestão e rastreabilidade em um único produto.",
  results: [
    "Fluxo operacional unificado do pedido ao fechamento.",
    "Módulos adaptáveis à realidade de cada estabelecimento.",
    "Produto preparado para continuar evoluindo em gestão, custos e estoque.",
  ],
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Prisma",
    "PostgreSQL",
    "Capacitor",
    "Android",
    "Vercel",
  ],
  seo: {
    title: "MesaFlow | Gestão para Estabelecimentos",
    description:
      "Case do MesaFlow, sistema multiempresa da San_Node para cardápio, pedidos, balcão, delivery, garçom, mesas, preparo, caixa e gestão de pequenos estabelecimentos gastronômicos.",
    openGraphDescription:
      "Operação integrada para pequenos estabelecimentos: pedidos, preparo, caixa, cardápio público, gestão, relatórios e controle por função.",
    twitterDescription:
      "Case do MesaFlow: operação e gestão integrada para pequenos estabelecimentos gastronômicos.",
  },
};

export const matheusAlexandreCase: ProjectCase = {
  slug: "matheus-alexandre",
  title: "Matheus Alexandre — Psicologia",
  eyebrow: "Site profissional para psicologia clínica",
  status: "Publicado",
  category: "Site",
  summary:
    "Site profissional para apresentar a atuação clínica de Matheus Alexandre, explicar o atendimento online e facilitar o primeiro contato com potenciais pacientes.",
  coverImage: "/projetos/matheus-alexandre/cover.svg",
  coverWidth: 1600,
  coverHeight: 1000,
  coverFit: "contain",
  coverExpandable: false,
  liveUrl: "https://matheus-alexandre-site.vercel.app",
  liveLabel: "Acessar site",
  tags: ["Psicologia", "Site profissional", "Responsivo", "WhatsApp"],
  overview:
    "O projeto organiza a presença digital de Matheus Alexandre em uma experiência profissional, acolhedora e direta, com foco em psicologia clínica e atendimento 100% online.",
  challenge:
    "Apresentar um serviço de saúde de forma humana e confiável sem transformar o site em uma página genérica, carregada de blocos ou linguagem comercial excessiva.",
  solution:
    "A página foi estruturada com hero objetivo, explicação da abordagem, situações em que o atendimento pode ajudar, apresentação do profissional, funcionamento da primeira conversa, perguntas frequentes e chamadas claras para contato pelo WhatsApp.",
  highlights: [
    "Apresentação profissional com proposta clara já no primeiro bloco.",
    "Conteúdo organizado sobre abordagem e atendimento clínico online.",
    "Seções de identificação de necessidades e dúvidas frequentes.",
    "Apresentação do psicólogo e construção de confiança sem excesso visual.",
    "Chamadas de contato por WhatsApp distribuídas ao longo da experiência.",
    "Layout responsivo e adaptado ao uso em celular.",
  ],
  result:
    "O site foi publicado como uma presença digital própria para o profissional, reunindo apresentação, contexto do atendimento e caminhos de contato em uma estrutura mais clara e confiável.",
  results: [
    "Serviço e abordagem apresentados em um endereço profissional.",
    "Primeiro contato simplificado por chamadas diretas para WhatsApp.",
    "Experiência consistente em desktop e mobile.",
  ],
  stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "UI/UX"],
  seo: {
    title: "Matheus Alexandre | Site Profissional de Psicologia",
    description:
      "Case do site profissional de Matheus Alexandre, psicólogo clínico com atendimento online, desenvolvido pela San_Node.",
    openGraphDescription:
      "Site profissional para psicologia clínica, com apresentação, abordagem, perguntas frequentes e contato direto para atendimento online.",
    twitterDescription:
      "Case de site profissional para psicologia clínica e atendimento online.",
  },
};

export const currentCases = [mesaFlowCurrentCase, matheusAlexandreCase] as const;
