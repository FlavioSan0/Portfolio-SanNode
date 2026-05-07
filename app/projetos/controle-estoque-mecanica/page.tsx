import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  ExternalLink,
  FileText,
  Lock,
  Package,
  Repeat,
  Wrench,
} from "lucide-react";
import CaseCTA from "@/components/CaseCTA";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "Controle de Estoque Mecânica | Sistema Web Privado",
  description:
    "Case de sistema web privado para oficina mecânica, com dashboard, produtos, entradas, saídas, movimentações, relatórios e acesso restrito.",

  openGraph: {
    title: "Controle de Estoque Mecânica | Sistema Web Privado",
    description:
      "Sistema web para controle operacional de estoque em oficina mecânica, com dashboard, movimentações, relatórios e evolução para gestão mecânica.",
    url: "https://san-node.vercel.app/projetos/controle-estoque-mecanica",
    siteName: "SanNode",
    images: [
      {
        url: "/projetos/estoque-case/dashboard.png",
        width: 1200,
        height: 630,
        alt: "Dashboard do sistema de controle de estoque para oficina mecânica",
      },
    ],
    locale: "pt_BR",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Controle de Estoque Mecânica | Sistema Web Privado",
    description:
      "Case de sistema web privado com dashboard, produtos, movimentações, relatórios e acesso restrito.",
    images: ["/projetos/estoque-case/dashboard.png"],
  },
};

const projectInfo = [
  {
    label: "Projeto",
    value: "Controle de Estoque Mecânica",
  },
  {
    label: "Categoria",
    value: "Sistema Web Privado",
  },
  {
    label: "Status",
    value: "Em desenvolvimento",
  },
  {
    label: "Função",
    value: "Front-end, fluxo operacional e integração",
  },
];

const features = [
  {
    icon: BarChart3,
    title: "Dashboard operacional",
    description:
      "Visão geral com produtos cadastrados, itens em alerta, entradas, saídas e últimas movimentações.",
  },
  {
    icon: Package,
    title: "Gestão de produtos",
    description:
      "Painel para cadastrar, filtrar, ordenar e visualizar produtos com estoque, preço, fornecedor e status.",
  },
  {
    icon: Repeat,
    title: "Entradas e saídas",
    description:
      "Fluxo para registrar reposições, compras, baixas, vendas, uso interno e ajustes de estoque.",
  },
  {
    icon: FileText,
    title: "Relatórios",
    description:
      "Consultas operacionais para estoque baixo, inventário atual e movimentações por período.",
  },
];

const deliverables = [
  "Tela de login",
  "Dashboard operacional",
  "Cadastro e listagem de produtos",
  "Registro de entradas",
  "Registro de saídas",
  "Histórico de movimentações",
  "Relatórios operacionais",
  "Controle de fornecedores",
  "Controle de usuários",
  "Layout responsivo",
  "Interface com cards e filtros",
  "Sistema privado com autenticação",
  "Base para gestão de oficina mecânica",
  "Evolução planejada para novos módulos",
];

const stack = ["React", "Tailwind CSS", "Supabase", "Express", "Vercel"];

const screens = [
  {
    title: "Dashboard",
    description:
      "Resumo visual da operação, com indicadores e alertas para acompanhamento rápido do estoque.",
    image: "/projetos/estoque-case/dashboard.png",
  },
  {
    title: "Produtos",
    description:
      "Área de produtos com filtros, ordenação, status de estoque e acesso aos detalhes de cada item.",
    image: "/projetos/estoque-case/produtos.png",
  },
  {
    title: "Entradas",
    description:
      "Registro de reposições e compras, com resumo da operação e campos para nota fiscal e custo.",
    image: "/projetos/estoque-case/entradas.png",
  },
  {
    title: "Saídas",
    description:
      "Baixa de itens por venda, uso interno ou ajuste, com validação visual do saldo disponível.",
    image: "/projetos/estoque-case/saidas.png",
  },
  {
    title: "Movimentações",
    description:
      "Histórico completo de alterações no estoque, com filtros por produto, tipo e período.",
    image: "/projetos/estoque-case/movimentacoes.png",
  },
  {
    title: "Relatórios",
    description:
      "Consultas rápidas para apoiar operação, reposição e análise do estoque.",
    image: "/projetos/estoque-case/relatorios.png",
  },
];

export default function EstoqueProjectPage() {
  return (
    <main className="min-h-screen bg-[#07111F] text-[#F5FBFF]">
      <section className="border-b border-white/10 bg-[#07111F]">
        <div className="container-site py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-white/70 transition hover:border-[#00D9FF] hover:text-[#00D9FF]"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o portfólio
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/10 bg-[#07111F]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#00D9FF22,transparent_30%),radial-gradient(circle_at_left,#2563EB18,transparent_38%)]" />

        <div className="container-site relative grid gap-12 py-20 md:grid-cols-[0.95fr_1.05fr] md:items-center md:py-28">
          <div>
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70">
              <Wrench className="h-4 w-4 text-[#00D9FF]" />
              Case de sistema web privado
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#00D9FF]">
              Controle de Estoque Mecânica
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
              Sistema operacional para controle de estoque em oficina mecânica.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Projeto desenvolvido inicialmente para organizar produtos, entradas,
                saídas, movimentações, fornecedores e relatórios. Atualmente, o sistema
                está em evolução para se tornar uma plataforma de gestão para oficina
                mecânica, ampliando o controle operacional além do estoque. Por ser um
                sistema privado com autenticação, o case apresenta as principais telas e
                decisões de interface sem depender do acesso ao painel.
            </p>

            <div className="mobile-action-grid mt-8 flex flex-wrap gap-3 sm:flex-row">
              <a
                href="#telas"
                className="inline-flex items-center rounded-2xl bg-[#0B2A5B] px-6 py-4 font-semibold text-white transition hover:bg-[#2563EB]"
              >
                Ver telas do sistema
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </a>

              <a
                href="https://controle-de-estoque-mecanica.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 font-semibold text-white transition hover:border-[#00D9FF] hover:text-[#00D9FF]"
              >
                Sistema privado
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0C1B2E]">
              <Image
                src="/projetos/estoque-case/dashboard.png"
                alt="Dashboard do sistema de controle de estoque"
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-site py-16">
        <div className="grid gap-5 md:grid-cols-4">
          {projectInfo.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#00D9FF]">
                {item.label}
              </p>
              <p className="mt-3 text-sm leading-6 text-white/75">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#091728]">
        <div className="container-site grid gap-5 py-20 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xl font-bold text-white">Problema</h3>
            <p className="mt-4 text-sm leading-7 text-white/65">
              A operação precisava controlar produtos, fornecedores, entradas,
              saídas e alertas de estoque de forma mais organizada e consultável.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xl font-bold text-white">Solução</h3>
            <p className="mt-4 text-sm leading-7 text-white/65">
              Foi criado um painel web com telas específicas para cada fluxo,
              mantendo filtros, cards de resumo e formulários padronizados.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xl font-bold text-white">Resultado</h3>
            <p className="mt-4 text-sm leading-7 text-white/65">
              O sistema permite acompanhar o estoque com mais clareza, reduzir
              desorganização e preparar a base para relatórios e integrações
              futuras.
            </p>
          </div>
        </div>
      </section>

      <section className="container-site py-20">
        <div className="mb-10 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#00D9FF]">
              Funcionalidades
            </p>

            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Fluxos principais para a rotina de estoque.
            </h2>
          </div>

          <p className="text-base leading-8 text-white/65">
            A estrutura do sistema foi pensada para uso operacional, com telas
            objetivas, ações claras e informações importantes sempre próximas do
            usuário.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#00D9FF]/60"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00D9FF]/10 text-[#00D9FF]">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/65">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#091728]">
  <div className="container-site grid gap-10 py-20 md:grid-cols-[0.8fr_1.2fr] md:items-start">
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#00D9FF]">
        Evolução do produto
      </p>

      <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
        De controle de estoque para sistema de gestão mecânica.
      </h2>

      <p className="mt-5 text-base leading-8 text-white/65">
        O projeto nasceu para resolver o controle de estoque, mas sua estrutura
        está sendo preparada para evoluir como uma solução mais completa para
        oficinas mecânicas, reunindo operação, clientes, fornecedores,
        relatórios e futuros módulos administrativos.
      </p>
    </div>

    <div className="grid gap-4 sm:grid-cols-2">
      {[
        {
          title: "Estoque",
          description:
            "Controle de produtos, entradas, saídas, movimentações e alertas de reposição.",
        },
        {
          title: "Fornecedores",
          description:
            "Cadastro e organização dos fornecedores vinculados à operação da oficina.",
        },
        {
          title: "Clientes",
          description:
            "Base para gerenciamento de clientes e futuros vínculos com ordens de serviço.",
        },
        {
          title: "Gestão operacional",
          description:
            "Caminho para integrar relatórios, usuários, permissões e módulos administrativos.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
        >
          <h3 className="text-xl font-bold text-white">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-white/65">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      <section className="border-y border-white/10 bg-[#091728]">
        <div className="container-site grid gap-10 py-20 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00D9FF]/10 text-[#00D9FF]">
              <Lock className="h-6 w-6" />
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#00D9FF]">
              Acesso restrito
            </p>

            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Sistema privado protegido por login.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/65">
              Como o sistema possui dados operacionais e acesso administrativo,
              a visualização pública acontece por meio deste case. O link do
              sistema é mantido como referência, mas o acesso é restrito.
            </p>
          </div>

          <div className="mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
            <Image
              src="/projetos/estoque-case/login.png"
              alt="Tela de login do sistema de estoque"
              width={1600}
              height={900}
              className="h-auto w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="telas" className="container-site py-20">
        <div className="mb-10 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#00D9FF]">
              Telas do sistema
            </p>

            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Interface limpa para operação diária.
            </h2>
          </div>

          <p className="text-base leading-8 text-white/65">
            Os prints abaixo mostram as principais áreas do sistema: visão
            geral, produtos, entradas, saídas, movimentações e relatórios.
          </p>
        </div>

        <div className="grid gap-6">
          {screens.map((screen) => (
            <article
              key={screen.title}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]"
            >
              <div className="border-b border-white/10 p-6">
                <h3 className="text-2xl font-bold text-white">
                  {screen.title}
                </h3>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-white/60">
                  {screen.description}
                </p>
              </div>

              <div className="bg-[#0C1B2E] p-3 md:p-5">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
                  <Image
                    src={screen.image}
                    alt={screen.title}
                    width={1600}
                    height={900}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#091728]">
        <div className="container-site grid gap-10 py-20 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#00D9FF]">
              Entregas
            </p>

            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              O que foi desenvolvido.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {deliverables.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-white/75"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#00D9FF]" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#00D9FF]">
              Tecnologias
            </p>

            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Base técnica do projeto.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-white/65">
            O sistema foi estruturado com front-end moderno, banco de dados,
            autenticação e preparação para expansão de módulos.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white/70"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <CaseCTA
      variant="blue"
      title="Precisa transformar sua operação em um sistema?"
      description="Posso ajudar a estruturar um sistema web para controle, gestão, cadastro, relatórios e automação de processos, criando uma solução adaptada à rotina real do seu negócio."
      secondaryLabel="Acessar sistema privado"
      secondaryHref="https://controle-de-estoque-mecanica.vercel.app"
      secondaryExternal
      />
      <BackToTop />
    </main>
  );
}