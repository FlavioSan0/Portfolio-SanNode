"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Cpu, Layers3, MessageCircle, Sparkles } from "lucide-react";
import ProfileCard from "@/components/ProfileCard";

const deliverables = [
  "Identidade visual",
  "Sites publicados",
  "Sistemas web",
  "Automações",
];

const techPoints = [
  {
    icon: Layers3,
    label: "Design",
    value: "Interfaces e identidade",
  },
  {
    icon: Code2,
    label: "Dev",
    value: "Sites e sistemas",
  },
  {
    icon: Cpu,
    label: "Processo",
    value: "Estrutura e execução",
  },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-[#1E3654] bg-transparent"
    >
      <div className="container-site relative grid gap-12 py-20 lg:grid-cols-[1.05fr_0.82fr] lg:items-center lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#1E3654] bg-[#0C1B2E]/88 px-4 py-2 text-sm font-medium text-[#A9BDD3] backdrop-blur">
            <Sparkles className="h-4 w-4 text-[#00D9FF]" />
            SanNode por Flávio Oliveira
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[#F5FBFF] sm:text-6xl xl:text-7xl">
            Eu transformo ideias
            <span className="block">em soluções digitais.</span>
            <span className="block bg-gradient-to-r from-[#F5FBFF] via-[#6DB9FF] to-[#00D9FF] bg-clip-text text-transparent">
              Com clareza e execução real.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#A9BDD3] sm:text-lg">
            Sou Flávio Oliveira, criador da SanNode. Desenvolvo identidades
            visuais, sites, sistemas e automações para transformar ideias em
            projetos organizados, funcionais e bem apresentados.
          </p>

          {/* 2 CTAs principais */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projetos"
              className="inline-flex items-center justify-center rounded-2xl bg-[#0B2A5B] px-6 py-4 font-semibold text-white transition hover:bg-[#2563EB]"
            >
              Ver projetos
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>

            <a
              href="https://wa.me/5584988479869"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-[#00D9FF]/35 bg-[#0C1B2E]/88 px-6 py-4 font-semibold text-[#F5FBFF] transition hover:border-[#00D9FF] hover:text-[#00D9FF]"
            >
              Entrar em contato
              <MessageCircle className="ml-2 h-5 w-5" />
            </a>
          </div>

          {/* informativos */}
          <div className="mt-8 grid gap-4 lg:max-w-3xl lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-3xl border border-[#1E3654] bg-[#0C1B2E]/72 p-5 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
                O que eu construo
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {deliverables.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#1E3654] bg-[#10233B] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#A9BDD3]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[#1E3654] bg-[#07111F]/72 p-5 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
                Como eu trabalho
              </p>

              <p className="mt-4 text-sm leading-7 text-[#A9BDD3]">
                Uno design, desenvolvimento e organização para criar soluções
                que funcionam na prática e também comunicam profissionalismo.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {techPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.15 + index * 0.08 }}
                  className="rounded-3xl border border-[#1E3654] bg-[#0C1B2E]/78 p-4 backdrop-blur"
                >
                  <Icon className="h-5 w-5 text-[#00D9FF]" />
                  <p className="mt-3 text-sm font-bold text-[#F5FBFF]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#9DB2C7]">
                    {item.value}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="flex items-center justify-center lg:justify-end"
        >
          <div className="w-full max-w-[390px]">
            <ProfileCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
}