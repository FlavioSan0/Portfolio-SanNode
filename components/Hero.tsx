"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Layers3, Network, Sparkles } from "lucide-react";

const stats = [
  { value: "Design", label: "Identidade, interfaces e peças digitais" },
  { value: "Dev", label: "Sites, sistemas e automações" },
  { value: "Tech", label: "Soluções digitais bem estruturadas" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-[#1E3654] bg-[#07111F]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#00D9FF22,transparent_30%),radial-gradient(circle_at_left,#2563EB18,transparent_38%)]" />
      <div className="tech-grid-bg absolute inset-0 opacity-70" />
      <div className="tech-lines absolute inset-0 opacity-40" />

      <div className="container-site relative grid gap-12 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#1E3654] bg-[#0C1B2E]/85 px-4 py-2 text-sm font-medium text-[#A9BDD3] backdrop-blur">
            <Sparkles className="h-4 w-4 text-[#00D9FF]" />
            Design, programação e automação
          </div>

            <h1 className="responsive-title-xl max-w-5xl font-black text-[#F5FBFF] text-balance">            Soluções digitais com visual limpo,
            <span className="block bg-gradient-to-r from-[#F5FBFF] via-[#6DB9FF] to-[#00D9FF] bg-clip-text text-transparent">
              lógica clara e execução real.
            </span>
          </h1>

          <p className="responsive-copy mt-6 max-w-2xl text-[#A9BDD3] text-pretty">
            Sou Flávio Santos, criador da SanNode. Desenvolvo identidades
            visuais, interfaces, sites, sistemas e automações para transformar
            ideias em projetos organizados, bonitos e funcionais.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="tech-button group inline-flex rounded-2xl bg-[#0B2A5B] px-6 py-4 font-semibold text-white transition hover:bg-[#2563EB]"
            >
              Ver projetos
              <ArrowUpRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="https://wa.me/5584988479869"
              target="_blank"
              rel="noreferrer"
              className="tech-button inline-flex rounded-2xl border border-[#1E3654] bg-[#0C1B2E]/85 px-6 py-4 font-semibold text-[#F5FBFF] transition hover:border-[#00D9FF] hover:text-[#00D9FF]"
            >
              Entrar em contato
            </a>
          </div>

          <div className="mt-6 text-sm text-[#9DB2C7]">
            WhatsApp:{" "}
            <a
              href="https://wa.me/5584988479869"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#00D9FF] hover:underline"
            >
              (84) 98847-9869
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.18 + index * 0.08 }}
                className="tech-card rounded-3xl border border-[#1E3654] bg-[#0C1B2E]/85 p-4 backdrop-blur"
              >
                <p className="text-xl font-black text-[#00D9FF]">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs leading-5 text-[#9DB2C7]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="flex items-center justify-center"
        >
          <div className="tech-card relative w-full max-w-md rounded-[2rem] border border-[#1E3654] bg-[#0C1B2E]/90 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur">
            <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-[#00D9FF]/15 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-[#2563EB]/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[1.6rem] border border-[#1E3654] bg-[#10233B] p-7">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />

              <div className="relative">
                <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-3xl border border-[#1E3654] bg-[#0C1B2E]">
                  <Image
                    src="/logo-sannode.png"
                    alt="Logo SanNode"
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>

                <h2 className="mt-7 text-2xl font-black text-[#F5FBFF]">
                  SanNode
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#A9BDD3]">
                  Marca pessoal voltada para design, programação, automação e
                  construção de soluções digitais com visual moderno e estrutura
                  técnica.
                </p>

                <div className="mt-4 rounded-2xl border border-[#1E3654] bg-[#0C1B2E] px-4 py-3 text-sm text-[#A9BDD3]">
                  <span className="font-semibold text-[#D9F4FF]">
                    Contato:
                  </span>{" "}
                  <a
                    href="https://wa.me/5584988479869"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#00D9FF] hover:underline"
                  >
                    (84) 98847-9869
                  </a>
                </div>

                <div className="mt-7 grid gap-3">
                  <div className="rounded-3xl border border-[#1E3654] bg-[#0C1B2E] p-4">
                    <p className="text-sm font-semibold text-[#D9F4FF]">
                      Direção visual
                    </p>

                    <div className="mt-4 grid grid-cols-4 gap-2">
                      <div className="h-16 rounded-2xl bg-[#07111F] ring-1 ring-[#1E3654]" />
                      <div className="h-16 rounded-2xl bg-[#0B2A5B]" />
                      <div className="h-16 rounded-2xl bg-[#2563EB]" />
                      <div className="h-16 rounded-2xl bg-[#00D9FF]" />
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-3xl border border-[#1E3654] bg-[#0C1B2E] p-4">
                      <Cpu className="h-5 w-5 text-[#00D9FF]" />
                      <p className="mt-3 text-sm font-semibold text-[#F5FBFF]">
                        Tech
                      </p>
                    </div>

                    <div className="rounded-3xl border border-[#1E3654] bg-[#0C1B2E] p-4">
                      <Layers3 className="h-5 w-5 text-[#00D9FF]" />
                      <p className="mt-3 text-sm font-semibold text-[#F5FBFF]">
                        UI
                      </p>
                    </div>

                    <div className="rounded-3xl border border-[#1E3654] bg-[#0C1B2E] p-4">
                      <Network className="h-5 w-5 text-[#00D9FF]" />
                      <p className="mt-3 text-sm font-semibold text-[#F5FBFF]">
                        Sistemas
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}