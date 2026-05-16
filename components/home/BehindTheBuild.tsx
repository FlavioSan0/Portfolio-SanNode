import Reveal from "@/components/Reveal";
import {
  Database,
  FileText,
  GitBranch,
  LayoutDashboard,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const backstageItems = [
  {
    icon: FileText,
    title: "Objetivo",
    description:
      "Entender o que o projeto precisa resolver antes de pensar em tela, cor ou tecnologia.",
  },
  {
    icon: GitBranch,
    title: "Fluxo",
    description:
      "Organizar a jornada, as etapas, os caminhos e as ações principais do usuário.",
  },
  {
    icon: LayoutDashboard,
    title: "Interface",
    description:
      "Criar telas com hierarquia, clareza, contraste e foco na experiência de uso.",
  },
  {
    icon: Database,
    title: "Dados",
    description:
      "Pensar em cadastros, informações, filtros, registros e estrutura para evolução.",
  },
  {
    icon: Smartphone,
    title: "Responsividade",
    description:
      "Testar a experiência em celular, tablet e desktop sem quebrar o layout.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança",
    description:
      "Considerar permissões, acesso, validação, privacidade e manutenção desde o início.",
  },
];

export default function BehindTheBuild() {
  return (
    <section className="container-site responsive-section">
      <Reveal>
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
              Bastidores
            </p>

            <h2 className="responsive-title-lg mt-3 max-w-3xl font-black text-[#F5FBFF] text-balance">
              O que acontece antes de uma solução parecer pronta.
            </h2>
          </div>

          <p className="responsive-copy max-w-2xl text-[#A9BDD3] text-pretty">
            Boa parte do trabalho não aparece no primeiro print. Está nas
            decisões, na organização, nos fluxos e na forma como a solução é
            preparada para funcionar no dia a dia.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {backstageItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <Reveal key={item.title} delay={index * 70}>
              <article className="group h-full rounded-3xl border border-[#1E3654] bg-[#0C1B2E]/76 p-6 backdrop-blur transition hover:border-[#00D9FF]/70">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#10233B] text-[#00D9FF]">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#F5FBFF]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#A9BDD3]">
                  {item.description}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={180}>
        <div className="mt-8 rounded-[2rem] border border-[#1E3654] bg-[#07111F]/70 p-6 backdrop-blur md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
            Minha regra
          </p>

          <p className="mt-4 max-w-4xl text-2xl font-black leading-tight text-[#F5FBFF] md:text-4xl">
            Se a pessoa não entende, não usa ou não consegue evoluir depois,
            ainda não está pronto.
          </p>
        </div>
      </Reveal>
    </section>
  );
}