import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Mail,
  PenTool,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "ABF Representações | Case SanNode",  
  description:
    "Case de identidade visual da ABF Representações desenvolvido pela SanNode.",
};

const projectInfo = [
  {
    label: "Cliente",
    value: "ABF Representações",
  },
  {
    label: "Categoria",
    value: "Identidade Visual",
  },
  {
    label: "Ano",
    value: "2026",
  },
  {
    label: "Direção",
    value: "Marca, conceito e presença digital",
  },
];

const deliverables = [
  "Logo principal",
  "Variações da marca",
  "Paleta de cores",
  "Conceito visual",
  "Aplicação em cartão de visita",
  "Criação do Instagram",
  "Organização da bio",
  "Capas de destaques",
  "Modelos para Instagram",
  "Padronização de marcas representadas",
  "Sistema visual para comunicação",
];

const colors = [
  {
    name: "Dourado Fosco",
    hex: "#C6A15B",
  },
  {
    name: "Branco Quente",
    hex: "#F5F3EF",
  },
  {
    name: "Grafite Profundo",
    hex: "#0F1115",
  },
];

const instagramAssets = [
  {
    title: "Marca representada",
    description:
      "Modelo visual criado para apresentar marcas representadas pela ABF de forma padronizada no Instagram.",
    image: "/projetos/abf-case/marca-gama.png",
  },
  {
    title: "Capa de destaque",
    description:
      "Capa desenvolvida para organizar os destaques do Instagram da ABF por marca representada.",
    image: "/projetos/abf-case/marca-alyne-azul.png",
  },
  {
    title: "Variação visual",
    description:
      "Versão alternativa para aplicação da marca representada, mantendo a identidade da ABF como moldura visual.",
    image: "/projetos/abf-case/marca-alyne-branco.png",
  },
];

const instagramChecklist = [
  "Criação e organização do perfil",
  "Bio comercial com direcionamento para atendimento",
  "Capas de destaques para marcas representadas",
  "Primeiros conteúdos para presença digital",
];

export default function AbfProjectPage() {
  return (
    <main className="min-h-screen bg-[#0F1115] text-[#F5F3EF]">
      <section className="border-b border-white/10 bg-[#0F1115]">
        <div className="container-site py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-white/70 transition hover:border-[#C6A15B] hover:text-[#C6A15B]"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o portfólio
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/10 bg-[#0F1115]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#C6A15B22,transparent_30%),radial-gradient(circle_at_left,#ffffff08,transparent_40%)]" />

        <div className="container-site relative grid gap-12 py-20 md:grid-cols-[0.95fr_1.05fr] md:items-center md:py-28">
          <div>
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70">
              <Sparkles className="h-4 w-4 text-[#C6A15B]" />
              Case de identidade visual
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C6A15B]">
              ABF Representações
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
              Uma marca construída para transmitir solidez, confiança e
              crescimento.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              A identidade visual da ABF Representações foi desenvolvida com uma
              linguagem sóbria, comercial e sofisticada, explorando linhas,
              proporções e contraste para reforçar presença profissional no
              mercado de representação. Além da marca, o projeto incluiu a
              estruturação inicial da presença digital no Instagram.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#aplicacoes"
                className="inline-flex items-center rounded-2xl bg-[#C6A15B] px-6 py-4 font-semibold text-[#0F1115] transition hover:bg-[#D8B66D]"
              >
                Ver aplicações
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </a>

              <a
                href="#conceito"
                className="inline-flex items-center rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 font-semibold text-white transition hover:border-[#C6A15B] hover:text-[#C6A15B]"
              >
                Entender conceito
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0F1115]">
              <Image
                src="/projetos/abf-case/logo-principal.png"
                alt="Logo principal ABF Representações"
                width={1400}
                height={1000}
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
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C6A15B]">
                {item.label}
              </p>
              <p className="mt-3 text-sm leading-6 text-white/75">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="conceito"
        className="border-y border-white/10 bg-[#121419]"
      >
        <div className="container-site grid gap-10 py-20 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C6A15B]">
              Conceito
            </p>

            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Direção visual focada em estrutura e confiança.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/65">
              O conceito parte da ideia de crescimento comercial, solidez e
              representação profissional. As linhas verticais reforçam estrutura
              e presença, enquanto o dourado fosco transmite valor, maturidade e
              posicionamento.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0F1115]">
            <Image
              src="/projetos/abf-case/conceito.png"
              alt="Conceito da marca ABF Representações"
              width={1400}
              height={1000}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container-site py-20">
        <div className="mb-10 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C6A15B]">
              Elementos gráficos
            </p>

            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Linhas que representam expansão e direção comercial.
            </h2>
          </div>

          <p className="text-base leading-8 text-white/65">
            Os elementos verticais funcionam como apoio visual da marca,
            podendo ser usados em aplicações, materiais institucionais e peças de
            comunicação.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0F1115]">
          <Image
            src="/projetos/abf-case/linhas-conceito.png"
            alt="Linhas conceituais da marca ABF"
            width={1400}
            height={1000}
            className="h-auto w-full object-cover"
          />
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#121419]">
        <div className="container-site grid gap-10 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0F1115]">
            <Image
              src="/projetos/abf-case/construcao-logo.png"
              alt="Construção da logo ABF Representações"
              width={1400}
              height={1000}
              className="h-auto w-full object-cover"
            />
          </div>

          <div>
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C6A15B]/15 text-[#C6A15B]">
              <PenTool className="h-6 w-6" />
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C6A15B]">
              Construção
            </p>

            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Proporção, alinhamento e consistência.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/65">
              A marca foi construída com foco em presença e legibilidade. A
              combinação das letras com as linhas cria um símbolo forte, direto
              e com personalidade própria.
            </p>
          </div>
        </div>
      </section>

      <section className="container-site py-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C6A15B]">
              Paleta de cores
            </p>

            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Cores sóbrias para uma marca comercial.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-white/65">
            A paleta combina grafite profundo, dourado fosco e branco quente,
            criando uma identidade elegante, séria e fácil de aplicar.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {colors.map((color) => (
            <div
              key={color.hex}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
            >
              <div
                className="h-32 rounded-2xl border border-white/10"
                style={{ backgroundColor: color.hex }}
              />

              <h3 className="mt-5 text-xl font-bold text-white">
                {color.name}
              </h3>

              <p className="mt-2 text-sm text-white/60">{color.hex}</p>
            </div>
          ))}
        </div>

      </section>

      <section className="border-y border-white/10 bg-[#121419]">
        <div className="container-site py-20">
          <div className="mb-10 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C6A15B]">
                Variações
              </p>

              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
                Uma identidade preparada para diferentes usos.
              </h2>
            </div>

            <p className="text-base leading-8 text-white/65">
              As variações permitem aplicar a marca em formatos horizontais,
              reduzidos, monocromáticos e materiais diversos sem perder
              reconhecimento.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0F1115]">
            <Image
              src="/projetos/abf-case/variacoes-logo.png"
              alt="Variações da logo ABF Representações"
              width={1400}
              height={1000}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container-site py-20">
  <div className="mb-10 grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C6A15B]">
        Presença digital
      </p>

      <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
        Destaques organizados para apresentar as marcas representadas.
      </h2>
    </div>

    <p className="text-base leading-8 text-white/65">
      Além da identidade principal, foram criadas capas e modelos visuais para
      organizar o Instagram da ABF, destacando cada marca representada de forma
      padronizada, profissional e fácil de reconhecer.
    </p>
  </div>

  <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
    <div className="mb-8 flex items-center justify-between gap-4 border-b border-white/10 pb-6">
      <div>
        <p className="text-sm font-semibold text-white">
          Capas de destaques
        </p>
        <p className="mt-1 text-sm text-white/55">
          Estrutura visual aplicada ao perfil da ABF Representações.
        </p>
      </div>

      <span className="hidden rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A15B] sm:inline-flex">
        Instagram
      </span>
    </div>

    <div className="grid gap-6 sm:grid-cols-3">
      {instagramAssets.map((asset) => (
        <article
          key={asset.title}
          className="group rounded-3xl border border-white/10 bg-[#0F1115] p-5 transition hover:border-[#C6A15B]/60"
        >
          <div className="mx-auto flex aspect-square w-full max-w-[210px] items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[#0B0D11] p-3 shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src={asset.image}
                alt={asset.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="mt-5 text-center">
            <h3 className="text-lg font-bold text-white">{asset.title}</h3>

            <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-white/55">
              {asset.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

      <section className="border-y border-white/10 bg-[#121419]">
        <div className="container-site grid gap-10 py-20 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C6A15B]">
              Instagram
            </p>

            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Perfil estruturado do zero para fortalecer a presença digital.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/65">
              Além da criação da identidade visual, o projeto também envolveu a
              estruturação do Instagram da ABF Representações, com organização
              da bio, imagem de perfil, destaques por marcas representadas e
              primeiros conteúdos publicados.
            </p>

            <div className="mt-6 grid gap-3">
              {instagramChecklist.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-white/75"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#C6A15B]" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-[360px] rounded-[2.2rem] border border-white/10 bg-white/[0.04] p-3 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
          <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#0F1115]">
            <Image
              src="/projetos/abf-case/instagram-perfil.png"
              alt="Perfil do Instagram da ABF Representações estruturado pela SanNode"
              width={820}
              height={1792}
              className="h-auto w-full object-contain"
            />
          </div>
</div>  
        </div>
      </section>

      <section id="aplicacoes" className="container-site py-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C6A15B]">
              Aplicações
            </p>

            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Cartão de visita e presença comercial.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-white/65">
            A aplicação em cartão de visita demonstra como a identidade se
            comporta em materiais comerciais, mantendo contraste, clareza e
            sofisticação.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0F1115] shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
          <Image
            src="/projetos/abf-case/cartao-visita.png"
            alt="Cartão de visita ABF Representações"
            width={1400}
            height={1000}
            className="h-auto w-full object-cover"
          />
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#121419]">
        <div className="container-site grid gap-10 py-20 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C6A15B]">
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
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#C6A15B]" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-20">
  <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,#1A1D23,#0F1115)] p-8 md:p-12">
    <div className="grid gap-8 md:grid-cols-[1fr_0.65fr] md:items-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C6A15B]">
          Próximo passo
        </p>

        <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
          Quer apresentar sua marca com mais profissionalismo?
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
          Posso ajudar a construir uma identidade visual clara, elegante e
          funcional para sua marca, com aplicações, materiais digitais,
          organização visual e presença profissional.
        </p>
      </div>

      <div className="grid gap-3">
        <a
          href="https://wa.me/5584988479869"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-2xl border border-[#C6A15B]/30 bg-[#C6A15B] px-6 py-4 text-base font-bold text-[#0F1115] shadow-[0_12px_35px_rgba(198,161,91,0.18)] transition hover:bg-[#D8B66D]"
        >
          Falar no WhatsApp
          <ArrowUpRight className="ml-2 h-5 w-5" />
        </a>

        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-base font-semibold text-white transition hover:border-[#C6A15B]/60 hover:text-[#C6A15B]"
        >
          Ver outros projetos
          <ArrowUpRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}