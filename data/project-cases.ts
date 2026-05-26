export type ProjectCase = {
  slug: string;
  title: string;
  eyebrow: string;
  status: "Publicado" | "Em desenvolvimento" | "Sistema interno";
  category: "Design" | "Site" | "Sistema";
  summary: string;
  coverImage: string;
  liveUrl?: string;
  tags: string[];
  overview: string;
  challenge: string;
  solution: string;
  result: string;
  highlights: string[];
  stack: string[];
  nextSteps?: string[];
};

export const projectCases: ProjectCase[] = [
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
      "O projeto da Paróquia / Santuário nasceu com o objetivo de transformar a comunicação institucional em uma experiência digital mais clara, acolhedora e acessível. A proposta é reunir em um único ambiente informações importantes como horários de missas, eventos, pastorais, localização, contatos e conteúdos de apoio para os fiéis.",
    challenge:
      "O principal desafio é equilibrar tradição, espiritualidade e modernidade sem descaracterizar a identidade religiosa. O site precisa ser bonito, organizado e emocional, mas também funcional para pessoas de diferentes idades e níveis de familiaridade com tecnologia.",
    solution:
      "A solução está sendo construída com uma arquitetura de página clara, seções bem divididas, hierarquia visual forte e elementos acolhedores. A interface prioriza leitura fácil, navegação simples, chamadas objetivas e uso de imagens institucionais para aproximar a comunidade da paróquia.",
    result:
      "Mesmo em desenvolvimento, o projeto já funciona como uma base sólida para fortalecer a presença digital da paróquia, facilitar o acesso às informações e transmitir mais profissionalismo na comunicação com os fiéis.",
    highlights: [
      "Página inicial com apresentação institucional clara.",
      "Organização de horários de missas e informações recorrentes.",
      "Estrutura para eventos, pastorais e comunicados.",
      "Visual acolhedor, responsivo e alinhado ao público religioso.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "UI/UX"],
    nextSteps: [
      "Finalizar organização das fotos institucionais.",
      "Polir animações e microinterações.",
      "Revisar textos finais com a paróquia.",
      "Preparar versão responsiva final para publicação.",
    ],
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
      "O site da Banda Praise está sendo desenvolvido para transformar a presença digital da banda em uma experiência mais profissional, emocional e organizada. A ideia é apresentar quem são, registrar momentos importantes, destacar vídeos, fotos, agenda e facilitar o contato para convites e apresentações.",
    challenge:
      "O desafio do projeto é criar um site que tenha energia visual e emoção sem ficar poluído. Como a banda trabalha com música, fé e eventos, a experiência precisa transmitir presença, movimento e verdade, usando fotos e vídeos reais como parte central da narrativa.",
    solution:
      "A estrutura foi pensada com foco em impacto visual, organização de momentos e valorização da identidade da banda. As seções trabalham com imagens, vídeos, capas personalizadas, cards e chamadas diretas para criar uma navegação viva, bonita e fácil de consumir.",
    result:
      "O projeto está em desenvolvimento e já aponta para uma presença digital mais forte, com melhor apresentação dos conteúdos da banda e uma base preparada para futuras atualizações de agenda, mídia e contato.",
    highlights: [
      "Página inicial com apresentação da banda.",
      "Seção de momentos com fotos e vídeos.",
      "Capas visuais personalizadas para vídeos.",
      "Interface emocional, moderna e responsiva.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "UI/UX"],
    nextSteps: [
      "Tratar e organizar fotos finais.",
      "Inserir vídeos e capas oficiais.",
      "Refinar hierarquia visual da seção de momentos.",
      "Finalizar responsividade mobile.",
    ],
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
      "A landing page da Vem Voando está sendo desenvolvida para apresentar a marca de forma objetiva, profissional e comercial. A proposta é criar uma página clara, visualmente atrativa e preparada para direcionar o visitante para uma ação, seja contato, orçamento, atendimento ou interesse em serviços relacionados a viagens.",
    challenge:
      "O desafio do projeto é transformar uma ideia comercial em uma página simples de entender e forte o suficiente para gerar confiança rapidamente. A página precisa comunicar valor, evitar excesso de informação e conduzir o usuário para o contato sem parecer genérica.",
    solution:
      "A solução foi pensada com uma estrutura de landing page direta: hero com proposta forte, blocos de benefício, seções explicativas, chamadas de ação e layout responsivo. O visual prioriza clareza, contraste, boa hierarquia e uma experiência fluida tanto no desktop quanto no mobile.",
    result:
      "O projeto está em desenvolvimento e já serve como base para posicionar a Vem Voando com mais presença digital, melhorar a apresentação comercial e preparar a marca para captar oportunidades online.",
    highlights: [
      "Hero com proposta clara e chamada de ação.",
      "Estrutura objetiva para apresentar serviços e benefícios.",
      "Layout responsivo com foco em navegação rápida.",
      "Base preparada para publicação e evolução comercial.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "UI/UX"],
    nextSteps: [
      "Inserir imagens finais da marca.",
      "Revisar textos comerciais.",
      "Ajustar CTAs para WhatsApp ou canal principal de contato.",
      "Finalizar responsividade e validação antes do deploy.",
    ],
  },
  {
    slug: "mesaflow-sistema-garcom",
    title: "MesaFlow / Sistema Garçom",
    eyebrow: "Sistema operacional para estabelecimentos gastronômicos",
    status: "Em desenvolvimento",
    category: "Sistema",
    summary:
      "Sistema para operação de pedidos, mesas, preparo, caixa e rotina de estabelecimentos gastronômicos.",
    coverImage: "/projetos/mesaflow/dashboard.png",
    tags: ["Sistema web", "Pedidos", "Mesas", "Operação", "Gestão"],
    overview:
      "O MesaFlow é um sistema web em desenvolvimento para organizar a operação de estabelecimentos gastronômicos como lanchonetes, pizzarias, espetinhos, bares, restaurantes, cafeterias e açaíterias. A proposta é centralizar pedidos, mesas, setores de preparo, caixa, estoque simples e gestão operacional em uma interface prática.",
    challenge:
      "Muitos negócios gastronômicos operam com comandas manuais, mensagens soltas, retrabalho entre garçom, cozinha e caixa, além de pouca visibilidade sobre o andamento dos pedidos. O desafio é criar um sistema flexível o suficiente para diferentes tipos de estabelecimento, mas simples o bastante para ser usado no dia a dia sem travar a operação.",
    solution:
      "A solução está sendo desenhada com login por função, áreas separadas para garçom, preparo, caixa e gestão, além de configurações iniciais por tipo de estabelecimento. O sistema considera setores configuráveis como cozinha, bar, churrasqueira, pizzaria, chapa e copa, permitindo que cada negócio adapte o fluxo à sua realidade.",
    result:
      "O projeto está em fase de construção e já possui uma base operacional voltada para pedidos, mesas, equipe, setores e configurações. A proposta é evoluir para um produto reutilizável, com foco em organização, rastreabilidade e agilidade no atendimento.",
    highlights: [
      "Fluxo de pedidos por mesa e atendimento.",
      "Setores de preparo configuráveis por estabelecimento.",
      "Área de equipe com permissões por função.",
      "Base para dashboard, caixa e controle operacional.",
      "Planejamento para onboarding por nicho gastronômico.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    nextSteps: [
      "Polir telas operacionais.",
      "Finalizar área de equipe e permissões.",
      "Implementar atualização automática entre telas.",
      "Refinar onboarding inicial do estabelecimento.",
      "Preparar roadmap para dashboard gerencial.",
    ],
  },
];

export function getProjectCaseBySlug(slug: string) {
  return projectCases.find((project) => project.slug === slug);
}