import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Palette,
  PanelsTopLeft,
} from "lucide-react";

import BackToTop from "@/components/BackToTop";
import CaseCTA from "@/components/CaseCTA";

export const metadata: Metadata = {
  title: "ABF Representações | Identidade Visual e Landing Page",
  description:
    "Case da SanNode para a ABF Representações: identidade visual, presença digital e landing page institucional publicada.",
  openGraph: {
    title: "ABF Representações | Identidade Visual e Landing Page",
    description:
      "Identidade visual, presença digital e landing page institucional desenvolvidas para a ABF Representações.",
    images: ["/projetos/abf-case/logo-principal.png"],
  },
};

const deliverables = [
  "Logo principal",
  "Paleta de cores",
  "Conceito visual",
  "Variações da marca",
  "Cartão de visita",
  "Perfil do Instagram",
  "Capas de destaques",
  "Landing page institucional",
];

const visualAssets = [
  {
    title: "Logo principal",
    description: "Marca principal criada para representar solidez e confiança.",
    image: "/projetos/abf-case/logo-principal.png",
  },
  {
    title: "Conceito visual",
    description:
      "Direção visual com foco em presença comercial, seriedade e crescimento.",
    image: "/projetos/abf-case/conceito.png",
  },
  {
    title: "Cartão de visita",
    description:
      "Aplicação da identidade em material direto para contato e apresentação.",
    image: "/projetos/abf-case/cartao-visita.png",
  },
  {
    title: "Perfil do Instagram",
    description:
      "Organização inicial da presença digital para fortalecer a marca.",
    image: "/projetos/abf-case/instagram-perfil.png",
  },
];

const decisions = [
  {
    title: "Direção sóbria",
    description:
      "A identidade foi construída com uma estética comercial, escura e elegante, evitando excesso de elementos visuais.",
  },
  {
    title: "Cores com presença",
    description:
      "A combinação de grafite profundo, dourado fosco e branco quente reforça profissionalismo e solidez.",
  },
  {
    title: "Aplicação prática",
    description:
      "A marca foi pensada para funcionar em cartão, Instagram, materiais digitais e posteriormente na landing page.",
  },
];

const landingHighlights = [
  "Página institucional publicada",
  "Aplicação da identidade visual",
  "Apresentação comercial da empresa",
  "CTA para contato",
];

export default function ABFRepresentacoesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07111F] text-[#F5FBFF]">
      <section className="relative overflow-hidden border-b border-[#1E3654]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#C6A15B22,transparent_30%),radial-gradient(circle_at_left,#00D9FF12,transparent_38%)]" />
        <div className="tech-grid-bg absolute inset-0 opacity-20" />

        <div className="container-site relative py-10">
          <Link
            href="/#projetos"
            className="tech-button inline-flex items-center rounded-2xl border border-[#1E3654] bg-[#0C1B2E]/80 px-4 py-3 text-sm font-semibold text-[#A9BDD3] transition hover:border-[#00D9FF] hover:text-[#00D9FF]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para projetos
          </Link>

          <div className="grid gap-10 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C6A15B]">
                Case de identidade e presença digital
              </p>

              <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[#F5FBFF] md:text-7xl">
                ABF Representações
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#A9BDD3]">
                Identidade visual, presença digital e landing page institucional
                desenvolvidas para fortalecer a apresentação comercial da marca.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
  {["Identidade visual", "Landing page", "Instagram", "Vercel"].map(
    (item) => (
      <span
        key={item}
        className="rounded-full border border-[#1E3654] bg-[#0C1B2E]/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#A9BDD3]"
      >
        {item}
      </span>
    )
  )}
</div>

<div className="mt-8 flex flex-wrap gap-3">
  <a
    href="https://abf-representacao.vercel.app/#"
    target="_blank"
    rel="noreferrer"
    className="tech-button inline-flex items-center justify-center rounded-2xl bg-[#0B2A5B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB]"
  >
    Acessar landing page
    <ExternalLink className="ml-2 h-4 w-4" />
  </a>

  <Link
    href="/#projetos"
    className="tech-button inline-flex items-center justify-center rounded-2xl border border-[#1E3654] bg-[#0C1B2E]/80 px-5 py-3 text-sm font-semibold text-[#A9BDD3] transition hover:border-[#00D9FF] hover:text-[#00D9FF]"
  >
    Ver outros projetos
    <ArrowUpRight className="ml-2 h-4 w-4" />
  </Link>
</div>
            </div>

            <div className="relative rounded-4xl border border-[#1E3654] bg-[#0C1B2E]/80 p-6 shadow-[0_25px_90px_rgba(0,0,0,0.35)] backdrop-blur">
              <div className="absolute right-0 top-0 h-40 w-40 translate-x-10 -translate-y-10 rounded-full bg-[#C6A15B]/20 blur-3xl" />

              <div className="relative flex min-h-70 items-center justify-center rounded-3xl border border-white/10 bg-[linear-gradient(135deg,#0F1115,#07111F)] p-10">
                <Image
                  src="/projetos/abf-case/logo-principal.png"
                  alt="Logo ABF Representações"
                  width={720}
                  height={420}
                  priority
                  className="h-auto max-h-60 w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-site responsive-section">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
              Contexto
            </p>

            <h2 className="responsive-title-lg mt-3 max-w-3xl font-black text-[#F5FBFF] text-balance">
              Uma marca que precisava se apresentar com mais força.
            </h2>
          </div>

          <div className="rounded-4xl border border-[#1E3654] bg-[#0C1B2E]/72 p-6 backdrop-blur md:p-8">
            <p className="text-base leading-8 text-[#A9BDD3]">
              A ABF Representações precisava de uma identidade visual mais
              sólida para comunicar profissionalismo, confiança e presença
              comercial. O projeto começou pela criação da marca e evoluiu para
              aplicações digitais, organização visual e uma landing page
              institucional publicada.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-[#1E3654] bg-[#07111F]/70 px-4 py-3"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#00D9FF]" />
                  <span className="text-sm font-semibold text-[#D9F4FF]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1E3654] bg-[#07111F]/78">
        <div className="container-site responsive-section">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#C6A15B]">
                Direção visual
              </p>

              <h2 className="responsive-title-lg mt-3 max-w-3xl font-black text-[#F5FBFF] text-balance">
                Solidez, confiança e presença comercial.
              </h2>
            </div>

            <p className="responsive-copy max-w-2xl text-[#A9BDD3] text-pretty">
              A construção visual buscou uma linguagem sóbria e elegante, com
              cores que reforçam profissionalismo e materiais que mantêm
              consistência em diferentes pontos de contato.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {decisions.map((item) => (
              <article
                key={item.title}
                className="rounded-4xl border border-[#1E3654] bg-[#0C1B2E]/72 p-6 backdrop-blur"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#10233B] text-[#C6A15B]">
                  <Palette className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-xl font-black text-[#F5FBFF]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#A9BDD3]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site responsive-section">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
            Aplicações
          </p>

          <h2 className="responsive-title-lg mt-3 max-w-3xl font-black text-[#F5FBFF] text-balance">
            A identidade aplicada em pontos reais da marca.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {visualAssets.map((asset) => (
            <article
              key={asset.title}
              className="overflow-hidden rounded-4xl border border-[#1E3654] bg-[#0C1B2E]/72 backdrop-blur"
            >
              <div className="relative min-h-70 bg-[#07111F]">
                <Image
                  src={asset.image}
                  alt={asset.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-black text-[#F5FBFF]">
                  {asset.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#A9BDD3]">
                  {asset.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#1E3654] bg-[#07111F]/78">
        <div className="container-site responsive-section">
          <div className="grid gap-8 rounded-4xl border border-[#1E3654] bg-[#0C1B2E]/72 p-6 backdrop-blur md:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
                Evolução do projeto
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#F5FBFF] md:text-5xl">
                A identidade também ganhou uma landing page.
              </h2>

              <p className="mt-5 text-base leading-8 text-[#A9BDD3]">
                Depois da construção da identidade visual, a marca foi aplicada
                em uma landing page institucional para apresentar a ABF
                Representações, suas áreas de atuação e seus canais de contato
                de forma mais profissional.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {landingHighlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#1E3654] bg-[#10233B] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#A9BDD3]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[#1E3654] bg-[#07111F]/80 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#10233B] text-[#00D9FF]">
                <PanelsTopLeft className="h-6 w-6" />
              </div>

              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.24em] text-[#00D9FF]">
                Projeto publicado
              </p>

              <h3 className="mt-3 text-2xl font-black text-[#F5FBFF]">
                Landing Page ABF Representações
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#A9BDD3]">
                Página institucional desenvolvida para reforçar a presença
                digital da marca e facilitar o contato comercial.
              </p>

              <a
                href="https://abf-representacao.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="tech-button mt-6 inline-flex items-center justify-center rounded-2xl bg-[#0B2A5B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB]"
              >
                Acessar landing page
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-site responsive-section">
        <div className="grid gap-8 rounded-4xl border border-[#1E3654] bg-[#0C1B2E]/72 p-6 backdrop-blur md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#C6A15B]">
              Resultado
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#F5FBFF] md:text-5xl">
              Marca mais completa, clara e pronta para se apresentar.
            </h2>
          </div>

          <p className="text-base leading-8 text-[#A9BDD3]">
            O case evoluiu de uma identidade visual para uma presença digital
            mais estruturada. A ABF passou a contar com uma base visual
            consistente, aplicações para comunicação e uma landing page
            institucional para apresentar melhor a empresa.
          </p>
        </div>
      </section>

      <CaseCTA
        eyebrow="Quer uma presença digital mais profissional?"
        title="Sua marca também pode sair do improviso."
        description="Posso ajudar a organizar sua identidade visual, criar uma página de apresentação e transformar sua presença digital em algo mais claro, bonito e funcional."
        secondaryLabel="Voltar aos projetos"
        secondaryHref="/#projetos"
        variant="gold"
      />

      <BackToTop />
    </main>
  );
}