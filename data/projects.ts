export type ProjectCategory = "design" | "programacao";

export type ProjectSection = {
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  type: string;
  description: string;
  status: string;
  year: string;
  client?: string;
  role: string;
  stack?: string[];
  highlights: string[];
  challenge: string;
  solution: string;
  result: string;
  colors?: string[];
  typography?: string[];
  deliverables: string[];
  sections: ProjectSection[];
  link?: string;
  github?: string;
  presentationUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "abf-representacoes",
    title: "ABF Representações",
    category: "design",
    type: "Identidade Visual / Social Media",
    description:
      "Projeto de marca para empresa de representação comercial, com construção de identidade visual, aplicações e presença digital.",
    status: "Projeto de design",
    year: "2026",
    client: "ABF Representações",
    role: "Design de identidade visual e direção criativa",

    highlights: [
      "Sistema visual",
      "Aplicações de marca",
      "Estrutura para Instagram",
    ],
    challenge:
      "A marca precisava transmitir mais profissionalismo e organização para se apresentar melhor no mercado de representação comercial.",
    solution:
      "Foi construída uma identidade visual com linguagem limpa, moderna e aplicável em diferentes materiais, desde redes sociais até apresentações comerciais.",
    result:
      "O projeto resultou em uma marca mais consistente, com melhor presença visual e mais clareza para comunicação digital e institucional.",
    colors: ["#0B2A5B", "#00D9FF", "#F5FBFF", "#07111F"],
    typography: ["Sans serif principal", "Hierarquia limpa", "Títulos fortes"],
    deliverables: [
      "Logo principal",
      "Paleta de cores",
      "Aplicações de marca",
      "Modelos para Instagram",
      "Materiais de apresentação",
    ],
    sections: [
      {
        title: "Conceito visual",
        description:
          "A identidade foi pensada para comunicar confiança, organização e presença comercial, sem excesso visual.",
      },
      {
        title: "Aplicações",
        description:
          "A marca foi preparada para uso em peças digitais, materiais comerciais, apresentações e comunicação nas redes sociais.",
      },
      {
        title: "Sistema de marca",
        description:
          "A construção visual buscou facilitar a repetição da identidade em diferentes formatos, mantendo consistência.",
      },
    ],
  },
  {
    slug: "site-casamento",
    title: "Site de Casamento",
    category: "programacao",
    type: "Site / Sistema Web",
    description:
      "Convite digital com confirmação de presença, lista de presentes, painel administrativo, filtros e exportação.",
    status: "Publicado",
    year: "2026",
    client: "Projeto pessoal",
    role: "Front-end, integração com Supabase e painel administrativo",
    stack: ["HTML", "CSS", "JavaScript", "Supabase"],
    highlights: [
      "RSVP online",
      "Painel administrativo",
      "Lista de presentes",
    ],
    challenge:
      "Criar um convite digital funcional, bonito e fácil de usar, com confirmação de presença e controle de convidados.",
    solution:
      "Foi desenvolvido um site com formulário de confirmação, lista de presentes, painel administrativo, filtros e funcionalidades para organização dos convidados.",
    result:
      "O projeto centralizou informações importantes do casamento, facilitou a confirmação dos convidados e trouxe mais controle para a organização.",
    deliverables: [
      "Página inicial",
      "Confirmação de presença",
      "Lista de presentes",
      "Painel administrativo",
      "Exportação de convidados",
    ],
    sections: [
      {
        title: "Experiência do convidado",
        description:
          "O site foi pensado para ser simples no celular, permitindo que o convidado confirme presença e acesse informações rapidamente.",
      },
      {
        title: "Painel administrativo",
        description:
          "Foi criado um painel para acompanhar confirmações, convidados, acompanhantes e presentes reservados.",
      },
      {
        title: "Organização",
        description:
          "A solução ajudou a transformar o convite em uma ferramenta real de gestão do evento.",
      },
    ],
    link: "https://site-casamento-chi.vercel.app",
  },
  {
    slug: "controle-estoque-mecanica",
    title: "Controle de Estoque Mecânica",
    category: "programacao",
    type: "Sistema Web",
    description:
      "Sistema para controle de produtos, fornecedores, entradas, saídas, movimentações e dashboard operacional.",
    status: "Em desenvolvimento",
    year: "2026",
    client: "Projeto de sistema",
    role: "Desenvolvimento front-end, organização de fluxo e integração",
    stack: ["React", "Tailwind", "Supabase", "Express"],
    highlights: [
      "Cadastro de produtos",
      "Controle de fornecedores",
      "Movimentações de estoque",
    ],
    challenge:
      "Criar uma solução organizada para controlar produtos, fornecedores, entradas, saídas e movimentações de uma mecânica.",
    solution:
      "O sistema foi estruturado com páginas específicas, dashboard, formulários padronizados e uma interface visual limpa para facilitar o uso diário.",
    result:
      "A solução permite acompanhar o estoque com mais clareza, reduzindo desorganização e preparando o projeto para futuras integrações.",
    deliverables: [
      "Dashboard",
      "Cadastro de produtos",
      "Cadastro de fornecedores",
      "Entradas e saídas",
      "Histórico de movimentações",
    ],
    sections: [
      {
        title: "Interface",
        description:
          "A interface foi pensada para uso operacional, com cards, filtros e formulários consistentes.",
      },
      {
        title: "Fluxo de estoque",
        description:
          "O sistema organiza entradas, saídas e movimentações para facilitar o acompanhamento dos produtos.",
      },
      {
        title: "Evolução",
        description:
          "A estrutura permite adicionar relatórios, vendas, permissões e integração com um site comercial futuramente.",
      },
    ],
    github: "https://github.com/FlavioSan0/Controle-de-estoque-mec-nica",
  },

  {
    slug: "automacoes-google-workspace",
    title: "Automações Google Workspace",
    category: "programacao",
    type: "Automação / Processos",
    description:
      "Soluções com Google Sheets, Forms, Drive e Apps Script para organizar arquivos, formulários e documentos.",
    status: "Projetos internos",
    year: "2026",
    client: "Projetos internos",
    role: "Automação com Google Apps Script",
    stack: ["Apps Script", "Google Sheets", "Drive", "Forms"],
    highlights: [
      "Criação automática de pastas",
      "Geração de documentos",
      "Organização de dados",
    ],
    challenge:
      "Reduzir tarefas repetitivas envolvendo formulários, planilhas, pastas e documentos.",
    solution:
      "Foram criadas automações com Apps Script para gerar pastas, organizar arquivos, atualizar dados e criar documentos automaticamente.",
    result:
      "Os processos ficaram mais rápidos, organizados e menos dependentes de ações manuais.",
    deliverables: [
      "Scripts personalizados",
      "Integração Forms/Sheets",
      "Organização no Drive",
      "Geração de documentos",
      "Menus personalizados",
    ],
    sections: [
      {
        title: "Automação",
        description:
          "As rotinas foram pensadas para economizar tempo e reduzir erros manuais.",
      },
      {
        title: "Organização",
        description:
          "Os arquivos e dados passaram a seguir uma estrutura mais previsível e fácil de consultar.",
      },
      {
        title: "Escalabilidade",
        description:
          "A base permite adaptar os scripts para novos formulários, planilhas e fluxos.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}