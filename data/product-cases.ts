import type { ProjectCase } from "@/data/project-cases";

export const oficinaNodeCase: ProjectCase = {
  slug: "oficinanode",
  title: "OficinaNode",
  eyebrow: "Gestão para oficinas de carro e moto",
  status: "MVP funcional",
  category: "Sistema",
  summary:
    "Plataforma de gestão para oficinas, reunindo ordens de serviço, financeiro, estoque, clientes, veículos, agenda e rotina operacional em um único ambiente.",
  coverImage: "/projetos/oficinanode/cover.svg",
  coverWidth: 1600,
  coverHeight: 1000,
  coverFit: "contain",
  coverExpandable: false,
  liveUrl: "https://oficinanode.vercel.app",
  liveLabel: "Conhecer OficinaNode",
  tags: ["Oficinas", "Ordens de serviço", "Financeiro", "Estoque"],
  overview:
    "O OficinaNode nasceu de uma necessidade simples de controle de estoque e evoluiu para uma plataforma operacional voltada à rotina completa de oficinas de carro e moto.",
  challenge:
    "Oficinas pequenas e médias costumam espalhar informações entre papel, WhatsApp, planilhas e sistemas isolados. Isso dificulta acompanhar serviços, pagamentos, peças, clientes, veículos e o andamento da operação.",
  solution:
    "A solução centraliza o fluxo da oficina em módulos conectados: ordens de serviço, cadastro de clientes e veículos, financeiro, estoque, compras, agenda, documentos e acompanhamento operacional. A evolução do produto é feita a partir de uso real e feedback de oficinas.",
  highlights: [
    "Ordens de serviço com fluxo comercial e acompanhamento da execução.",
    "Financeiro com recebimentos, despesas, pagamentos parciais e múltiplas formas de pagamento.",
    "Estoque integrado a peças e insumos, com leitura de código de barras por câmera.",
    "Cadastro de clientes, veículos, serviços e histórico operacional.",
    "Agendamento público e recursos de relacionamento com o cliente.",
    "Base preparada para operação multiempresa, relatórios e evolução como SaaS.",
  ],
  result:
    "O projeto deixou de ser um controle isolado de estoque e passou a funcionar como uma base de gestão de oficina, já utilizada em cenário real e preparada para continuar evoluindo comercialmente.",
  results: [
    "Mais processos reunidos em uma única plataforma.",
    "Produto validado em rotina real de oficina.",
    "Base técnica pronta para ampliar módulos e atender novas oficinas.",
  ],
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "PostgreSQL",
  ],
  seo: {
    title: "OficinaNode | Gestão para Oficinas",
    description:
      "Case do OficinaNode, plataforma da San_Node para gestão de oficinas com ordens de serviço, financeiro, estoque, clientes, veículos e operação integrada.",
    openGraphDescription:
      "Gestão integrada para oficinas de carro e moto, com ordens de serviço, financeiro, estoque, clientes, veículos e agenda.",
    twitterDescription:
      "Case do OficinaNode: gestão integrada para oficinas de carro e moto.",
  },
};

export const agendaNodeCase: ProjectCase = {
  slug: "agendanode",
  title: "AgendaNode",
  eyebrow: "Agenda e gestão para negócios de beleza",
  status: "MVP funcional",
  category: "Sistema",
  summary:
    "SaaS multiempresa para agendamento e gestão de profissionais autônomos, barbearias, salões, estética, tranças, unhas e outros negócios de atendimento.",
  coverImage: "/projetos/agendanode/cover.svg",
  coverWidth: 1600,
  coverHeight: 1000,
  coverFit: "contain",
  coverExpandable: false,
  tags: ["Agendamento", "Beleza", "SaaS", "Multiempresa"],
  overview:
    "O AgendaNode foi estruturado para negócios que dependem de agenda, equipe e atendimento recorrente, mas precisam de mais controle do que uma agenda isolada consegue oferecer.",
  challenge:
    "Organizar serviços, profissionais, horários, clientes, pagamentos e disponibilidade sem criar uma operação pesada para quem trabalha diretamente com atendimento.",
  solution:
    "A plataforma combina agendamento público e operacional com clientes, serviços, profissionais, horários, bloqueios, caixa, estoque, relatórios e recursos multiempresa. O produto também possui onboarding, permissões por função e backoffice da San_Node para administração da plataforma.",
  highlights: [
    "Agendamento público, manual e reagendamento com regras de disponibilidade.",
    "Serviços, categorias, profissionais, horários e bloqueios configuráveis.",
    "Clientes com histórico, exportação e recursos de privacidade.",
    "Caixa com pagamentos parciais, estornos e despesas.",
    "Estoque, relatórios e módulos habilitados por estabelecimento.",
    "Arquitetura multiempresa com RBAC, onboarding e Backoffice San_Node.",
  ],
  result:
    "O AgendaNode chegou a uma base SaaS funcional, com núcleo operacional, controles de segurança e estrutura preparada para implantação em diferentes negócios de beleza e atendimento.",
  results: [
    "Fluxo de agenda e atendimento centralizado.",
    "Estrutura multiempresa pronta para diferentes operações.",
    "Base preparada para implantação, planos e evolução comercial.",
  ],
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "Neon",
  ],
  seo: {
    title: "AgendaNode | Agendamento e Gestão para Beleza",
    description:
      "Case do AgendaNode, SaaS da San_Node para agendamento e gestão de profissionais, salões, barbearias, estética e outros negócios de atendimento.",
    openGraphDescription:
      "Agenda, clientes, profissionais, caixa, estoque e gestão multiempresa para negócios de beleza e atendimento.",
    twitterDescription:
      "Case do AgendaNode: agendamento e gestão para negócios de beleza e atendimento.",
  },
};

export const productCases = [oficinaNodeCase, agendaNodeCase] as const;
