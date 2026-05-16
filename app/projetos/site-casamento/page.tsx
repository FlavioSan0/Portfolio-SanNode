import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Gift,
  Heart,
  ListChecks,
  MonitorSmartphone,
  ShieldCheck,
  Users,
} from "lucide-react";
import CaseCTA from "@/components/CaseCTA";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "Site de Casamento | Convite Digital com RSVP e Painel",
  description:
    "Case de site de casamento com convite digital, confirmação de presença, lista de presentes, painel administrativo e experiência mobile.",

  openGraph: {
    title: "Site de Casamento | Convite Digital com RSVP e Painel",
    description:
      "Projeto de convite digital com confirmação de presença, lista de presentes, painel administrativo e estrutura responsiva.",
    url: "https://san-node.vercel.app/projetos/site-casamento",
    siteName: "SanNode",
    images: [
      {
        url: "/projetos/site-casamento/mobile-home.png",
        width: 1200,
        height: 630,
        alt: "Case do site de casamento com convite digital e painel administrativo",
      },
    ],
    locale: "pt_BR",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Site de Casamento | Convite Digital com RSVP e Painel",
    description:
      "Case de site com RSVP, lista de presentes, painel administrativo e experiência mobile.",
    images: ["/projetos/site-casamento/mobile-home.png"],
  },
};

const projectInfo = [
  {
    label: "Projeto",
    value: "Site de Casamento",
  },
  {
    label: "Categoria",
    value: "Site / Sistema Web",
  },
  {
    label: "Ano",
    value: "2026",
  },
  {
    label: "Função",
    value: "Interface, front-end, banco de dados e painel administrativo",
  },
];

const features = [
  {
    icon: Heart,
    title: "Convite digital",
    description:
      "Página principal com identidade visual do casamento, informações do evento, contador, orientações e navegação simples para os convidados.",
  },
  {
    icon: Users,
    title: "Confirmação de presença",
    description:
      "Sistema de RSVP com nome do convidado, controle de acompanhantes e limite definido para organizar melhor a lista.",
  },
  {
    icon: Gift,
    title: "Lista de presentes",
    description:
      "Área dedicada para presentes, reservas e cotas disponíveis, facilitando a escolha dos convidados.",
  },
  {
    icon: ShieldCheck,
    title: "Painel administrativo",
    description:
      "Ambiente interno para visualizar confirmações, gerenciar presentes, filtrar dados e acompanhar a organização do evento.",
  },
];

const process = [
  {
    title: "Problema",
    description:
      "O casamento precisava de uma forma centralizada para informar os convidados, confirmar presenças, controlar acompanhantes e organizar a lista de presentes sem depender apenas de mensagens manuais.",
  },
  {
    title: "Solução",
    description:
      "Foi criado um convite digital com RSVP, lista de presentes, área PIX, painel administrativo, filtros e estrutura responsiva para facilitar o uso pelo celular.",
  },
  {
    title: "Resultado",
    description:
      "O projeto transformou o convite em uma ferramenta real de organização, reunindo comunicação, confirmação e gestão em uma única experiência.",
  },
];

const deliverables = [
  "Página inicial do convite",
  "Contador regressivo",
  "Informações da cerimônia",
  "Informações da recepção",
  "Confirmação de presença online",
  "Cadastro de acompanhantes",
  "Limite de acompanhantes",
  "Lista de presentes",
  "Controle de cotas disponíveis",
  "Área PIX",
  "Login do painel administrativo",
  "Dashboard administrativo",
  "Painel administrativo",
  "Gestão de confirmações",
  "Gestão de presentes",
  "Filtros no painel",
  "Edição de confirmações",
  "Exportação CSV",
  "Visualização mobile do painel",
  "Layout responsivo para celular",
  "Modais de confirmação",
];

const stack = ["HTML", "CSS", "JavaScript", "Supabase", "Vercel"];

const highlights = [
  {
    number: "01",
    title: "Experiência do convidado",
    description:
      "O site foi pensado para ser simples, elegante e direto, permitindo que o convidado encontre informações e confirme presença rapidamente.",
  },
  {
    number: "02",
    title: "Organização do evento",
    description:
      "As confirmações, acompanhantes e presentes ficam centralizados, reduzindo a necessidade de controle manual.",
  },
  {
    number: "03",
    title: "Painel de gestão",
    description:
      "O painel permite acompanhar dados importantes do casamento e facilita a tomada de decisão durante a organização.",
  },
];

const panelScreens = [
  {
    title: "Login do painel",
    description:
      "Tela de acesso restrito para proteger a área administrativa do casamento.",
    image: "/projetos/site-casamento/painel-login.png",
  },
  {
    title: "Visão geral do painel",
    description:
      "Resumo administrativo com confirmações, total de pessoas, acompanhantes e reservas registradas.",
    image: "/projetos/site-casamento/painel-dashboard.png",
  },
  {
    title: "Gestão de presentes",
    description:
      "Área para visualizar, filtrar e editar os presentes disponíveis no site, incluindo cotas, reservas e disponibilidade.",
    image: "/projetos/site-casamento/painel-presentes.png",
  },
  {
    title: "Lista de presença",
    description:
      "Área de conferência das confirmações com filtros, atualização, edição, exclusão e exportação em CSV.",
    image: "/projetos/site-casamento/painel-confirmacoes.png",
  },
];

export default function SiteCasamentoPage() {
  return (
    <main className="min-h-screen bg-[#07111F] text-[#F5FBFF]">
      <section className="border-b border-white/10">
        <div className="container-site py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-white/75 transition hover:border-[#D8BFA3] hover:text-[#D8BFA3]"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o portfólio
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#80000044,transparent_30%),radial-gradient(circle_at_left,#08265E66,transparent_42%)]" />

        <div className="container-site relative grid gap-12 py-20 md:grid-cols-[0.95fr_1.05fr] md:items-center md:py-28">
          <div>
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70">
              <Heart className="h-4 w-4 text-[#D8BFA3]" />
              Case de site e sistema web
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#D8BFA3]">
              Site de Casamento
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
              Um convite digital transformado em ferramenta de organização.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Projeto desenvolvido para centralizar as informações do casamento,
              facilitar a confirmação de presença, organizar acompanhantes,
              estruturar a lista de presentes e oferecer um painel
              administrativo para controle do evento.
            </p>

            <div className="mobile-action-grid mt-8 flex flex-wrap gap-3 sm:flex-row">
              <a
                href="https://site-casamento-chi.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-2xl bg-[#800000] px-6 py-4 font-semibold text-white shadow-[0_10px_30px_rgba(128,0,0,0.25)] transition hover:bg-[#9A1B1B]"
              >
                Acessar site
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>

              <a
                href="#funcionalidades"
                className="inline-flex items-center rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-4 font-semibold text-white transition hover:border-[#D8BFA3] hover:text-[#D8BFA3]"
              >
                Ver funcionalidades
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mobile-panel border border-white/10 bg-white/3 shadow-[0_25px_80px_rgba(0,0,0,0.45)] md:p-8">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,#08265E,#07111F)] p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#80000066,transparent_30%)]" />

              <div className="relative">
                <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 text-[#D8BFA3]">
                  <Heart className="h-8 w-8" />
                </div>

                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#D8BFA3]">
                  Convite digital
                </p>

                <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
                  Flávio & Ana Paula
                </h2>

                <p className="mt-5 max-w-md text-base leading-7 text-white/70">
                  Confirmação de presença, lista de presentes e painel de gestão
                  em uma única experiência digital.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-sm font-bold text-white">RSVP</p>
                    <p className="mt-1 text-xs text-white/55">
                      Confirmações online
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-sm font-bold text-white">Painel</p>
                    <p className="mt-1 text-xs text-white/55">
                      Controle administrativo
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-sm font-bold text-white">Presentes</p>
                    <p className="mt-1 text-xs text-white/55">
                      Lista e reservas
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-sm font-bold text-white">Mobile</p>
                    <p className="mt-1 text-xs text-white/55">
                      Uso pelo celular
                    </p>
                  </div>
                </div>
              </div>
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
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D8BFA3]">
                {item.label}
              </p>

              <p className="mt-3 text-sm leading-6 text-white/75">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0B1728]">
        <div className="container-site grid gap-5 py-20 md:grid-cols-3">
          {process.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-xl font-bold text-white">{item.title}</h3>

              <p className="mt-4 text-sm leading-7 text-white/65">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="funcionalidades" className="container-site py-20">
        <div className="mb-10 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#D8BFA3]">
              Funcionalidades
            </p>

            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Mais que um convite: um sistema de apoio ao evento.
            </h2>
          </div>

          <p className="text-base leading-8 text-white/65">
            A estrutura foi pensada para ser simples para os convidados e útil
            para o casal, com foco em celular, organização e facilidade de
            atualização.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#D8BFA3]/60"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#800000]/25 text-[#D8BFA3]">
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

      <section className="border-y border-white/10 bg-[#0B1728]">
        <div className="container-site py-20">
          <div className="mb-10 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#D8BFA3]">
                Decisões do projeto
              </p>

              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
                Organização, controle e experiência mobile.
              </h2>
            </div>

            <p className="text-base leading-8 text-white/65">
              O projeto foi evoluindo conforme surgiram necessidades reais da
              organização do casamento, como limite de acompanhantes, filtros,
              exportação e melhor visualização no celular.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.number}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-4xl font-black text-[#D8BFA3]">
                  {item.number}
                </p>

                <h3 className="mt-5 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/65">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-20">
        <div className="mb-10 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#D8BFA3]">
              Painel administrativo
            </p>

            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Área interna para gerenciar confirmações e presentes.
            </h2>
          </div>

          <p className="text-base leading-8 text-white/65">
            O projeto também conta com uma área restrita para organização do
            evento, permitindo acompanhar confirmações, reservas, presentes e
            informações importantes em um só lugar.
          </p>
        </div>

        <div className="grid gap-6">
          {panelScreens.map((screen) => (
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

              <div className="bg-[#07111F] p-3 md:p-5">
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

      <section className="border-y border-white/10 bg-[#0B1728]">
        <div className="container-site py-20">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#800000]/25 text-[#D8BFA3]">
                <MonitorSmartphone className="h-6 w-6" />
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#D8BFA3]">
                Responsividade
              </p>

              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
                Construído pensando principalmente no celular.
              </h2>

              <p className="mt-5 text-base leading-8 text-white/65">
                Como o convite é compartilhado por link e acessado
                principalmente pelo WhatsApp, a experiência mobile foi tratada
                como prioridade: leitura simples, botões claros, contagem
                regressiva visível e acesso rápido à confirmação de presença e à
                lista de presentes.
              </p>
            </div>

            <div className="mx-auto w-full max-w-[360px] rounded-[2.2rem] border border-white/10 bg-white/[0.04] p-3 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
              <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#07111F]">
                <Image
                  src="/projetos/site-casamento/mobile-home.png"
                  alt="Visualização mobile da página inicial do site de casamento"
                  width={720}
                  height={1600}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0B1728]">
        <div className="container-site grid gap-10 py-20 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#800000]/25 text-[#D8BFA3]">
              <ListChecks className="h-6 w-6" />
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#D8BFA3]">
              Entregas
            </p>

            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              O que foi desenvolvido.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/65">
              A solução combina apresentação visual, formulário de confirmação,
              banco de dados e painel administrativo.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {deliverables.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-white/75"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#D8BFA3]" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#D8BFA3]">
              Tecnologias
            </p>

            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Base simples, funcional e fácil de manter.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-white/65">
            A escolha das tecnologias priorizou agilidade, hospedagem simples,
            integração com dados e facilidade para evoluir o projeto.
          </p>
        </div>

        <div className="mobile-action-grid">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white/75"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <CaseCTA
        variant="wedding"
        title="Quer criar um site funcional para seu evento ou negócio?"
        description="Posso ajudar a transformar uma ideia em uma experiência digital bem apresentada, com site publicado, painel de controle, formulário, banco de dados e recursos personalizados para sua necessidade."
        secondaryLabel="Ver site publicado"
        secondaryHref="https://site-casamento-chi.vercel.app"
        secondaryExternal
      />
      <BackToTop />
    </main>
  );
}