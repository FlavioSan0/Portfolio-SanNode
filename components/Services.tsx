"use client";

import Reveal from "@/components/Reveal";
import {
  ArrowUpRight,
  Boxes,
  FileCode2,
  LayoutDashboard,
  Palette,
  PanelsTopLeft,
  Workflow,
} from "lucide-react";
import { useEffect, useState } from "react";

const services = [
  {
    icon: Palette,
    title: "Identidade visual",
    description:
      "Criação de marcas, paletas, aplicações, materiais digitais e organização visual para empresas, projetos e perfis profissionais.",
    tag: "Marca",
  },
  {
    icon: PanelsTopLeft,
    title: "Sites e landing pages",
    description:
      "Sites modernos, responsivos e publicados, com foco em apresentação, clareza, conversão e boa experiência no celular.",
    tag: "Web",
  },
  {
    icon: LayoutDashboard,
    title: "Sistemas web",
    description:
      "Soluções com painéis, cadastros, filtros, dashboards e fluxos internos para organizar operações reais.",
    tag: "Sistema",
  },
  {
    icon: FileCode2,
    title: "Interfaces e painéis",
    description:
      "Criação de telas administrativas, formulários, cards, tabelas e componentes pensados para uso prático e visual limpo.",
    tag: "UI",
  },
  {
    icon: Workflow,
    title: "Automações digitais",
    description:
      "Automação de tarefas repetitivas com planilhas, formulários, documentos, pastas e fluxos personalizados.",
    tag: "Automação",
  },
  {
    icon: Boxes,
    title: "Estruturação de projetos",
    description:
      "Organização de funcionalidades, etapas de desenvolvimento, prioridades e evolução de soluções digitais.",
    tag: "Planejamento",
  },
];

const problems = [
  "Preciso de uma marca mais profissional.",
  "Quero um site para apresentar meu serviço.",
  "Tenho um processo manual que poderia ser automatizado.",
  "Preciso organizar cadastros, dados ou informações.",
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const currentService = services[activeService];
  const CurrentIcon = currentService.icon;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveService((current) => (current + 1) % services.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="servicos" className="border-y border-[#1E3654] bg-[#091728]">
      <div className="container-site py-20">
        <Reveal>
          <div className="mb-10 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
                Como posso ajudar
              </p>

              <h2 className="responsive-title-lg mt-3 max-w-3xl font-black text-[#F5FBFF] text-balance">
                Soluções digitais para apresentar, organizar e automatizar.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-[#A9BDD3]">
              A SanNode une design, desenvolvimento e organização de processos
              para transformar ideias em projetos digitais funcionais, bonitos e
              preparados para evoluir.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="service-tech-panel mb-8 overflow-hidden rounded-[2rem] border border-[#1E3654] bg-[#0C1B2E] p-6 md:p-8">
            <div className="service-scan-line" />

            <div className="relative z-10 grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1E3654] bg-[#07111F]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#00D9FF]">
                  <span className="h-2 w-2 rounded-full bg-[#00D9FF] shadow-[0_0_18px_rgba(0,217,255,0.9)]" />
                  Serviço em destaque
                </div>

                <h3
                  key={currentService.title}
                  className="service-title-enter text-2xl font-black text-[#F5FBFF] md:text-4xl"
                >
                  {currentService.title}
                </h3>

                <p
                  key={currentService.description}
                  className="service-text-enter mt-4 max-w-2xl text-sm leading-7 text-[#A9BDD3] md:text-base"
                >
                  {currentService.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-[#1E3654] bg-[#10233B]/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#A9BDD3]">
                    {currentService.tag}
                  </span>

                  <span className="rounded-full border border-[#00D9FF]/20 bg-[#00D9FF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#00D9FF]">
                    SanNode Flow
                  </span>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-[#1E3654] bg-[#07111F] p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#00D9FF22,transparent_35%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:26px_26px]" />

                <div className="relative">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div
                      key={currentService.title}
                      className="service-icon-orbit flex h-20 w-20 items-center justify-center rounded-[1.6rem] border border-[#00D9FF]/25 bg-[#10233B] text-[#00D9FF] shadow-[0_0_45px_rgba(0,217,255,0.12)]"
                    >
                      <CurrentIcon className="h-9 w-9" />
                    </div>

                    <div className="rounded-2xl border border-[#1E3654] bg-[#0C1B2E]/90 px-4 py-3 text-right">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7F96AD]">
                        Módulo
                      </p>
                      <p className="mt-1 text-sm font-bold text-[#F5FBFF]">
                        0{activeService + 1}/0{services.length}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-2xl border border-[#1E3654] bg-[#0C1B2E]/80 p-4">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#7F96AD]">
                        Foco
                      </p>
                      <p className="mt-2 text-sm font-bold text-[#F5FBFF]">
                        Clareza
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#1E3654] bg-[#0C1B2E]/80 p-4">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#7F96AD]">
                        Base
                      </p>
                      <p className="mt-2 text-sm font-bold text-[#F5FBFF]">
                        Estrutura
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#1E3654] bg-[#0C1B2E]/80 p-4">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#7F96AD]">
                        Saída
                      </p>
                      <p className="mt-2 text-sm font-bold text-[#F5FBFF]">
                        Solução
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A9BDD3]">
                        Rotação automática
                      </p>

                      <p className="text-xs font-semibold text-[#00D9FF]">
                        ativo
                      </p>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div
                        key={activeService}
                        className="service-progress h-full rounded-full bg-[#00D9FF]"
                      />
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-6 gap-2">
                    {services.map((service, index) => (
                      <button
                        key={service.title}
                        type="button"
                        onClick={() => setActiveService(index)}
                        aria-label={`Ver serviço ${service.title}`}
                        className={[
                          "h-2 rounded-full transition-all",
                          activeService === index
                            ? "bg-[#00D9FF] shadow-[0_0_16px_rgba(0,217,255,0.75)]"
                            : "bg-white/15 hover:bg-white/30",
                        ].join(" ")}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeService === index;

            return (
              <Reveal key={service.title} delay={index * 80}>
                <article
                  onMouseEnter={() => setActiveService(index)}
                  className={[
                    "tech-card tech-glow h-full rounded-3xl border bg-[#0C1B2E] p-6 text-[#F5FBFF]",
                    isActive
                      ? "border-[#00D9FF] shadow-[0_22px_60px_rgba(0,217,255,0.08)]"
                      : "border-[#1E3654] hover:border-[#00D9FF]",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={[
                        "flex h-12 w-12 items-center justify-center rounded-2xl bg-[#10233B] text-[#00D9FF]",
                        isActive
                          ? "shadow-[0_0_32px_rgba(0,217,255,0.14)]"
                          : "",
                      ].join(" ")}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="rounded-full border border-[#1E3654] bg-[#10233B] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#A9BDD3]">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold">{service.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-[#A9BDD3]">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={160}>
          <div className="mt-10 rounded-[2rem] border border-[#1E3654] bg-[#0C1B2E] p-6 md:p-8">
            <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
                  Quando faz sentido me chamar
                </p>

                <h3 className="mt-3 text-2xl font-black text-[#F5FBFF] md:text-3xl">
                  Se a ideia precisa sair do papel com estrutura, eu posso
                  ajudar.
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#A9BDD3]">
                  Antes de desenvolver uma tela, marca ou sistema, eu organizo o
                  objetivo, o fluxo, as prioridades e a melhor forma de entregar
                  valor sem complicar o projeto.
                </p>

                <a
                  href="#contato"
                  className="tech-button group mt-6 inline-flex items-center justify-center rounded-2xl bg-[#0B2A5B] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#2563EB]"
                >
                  Conversar sobre um projeto
                  <ArrowUpRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>

              <div className="grid gap-3">
                {problems.map((problem) => (
                  <div
                    key={problem}
                    className="rounded-2xl border border-[#1E3654] bg-[#10233B] px-4 py-4 text-sm text-[#C7D8E8]"
                  >
                    {problem}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}