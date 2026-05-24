"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  MessageCircle,
  Palette,
  Sparkles,
  Workflow,
} from "lucide-react";
import ProfileCard from "@/components/ProfileCard";
import { contact } from "@/data/contact";

const highlights = ["Marcas", "Landing pages", "Sistemas", "Automações"];

const bullets = [
  "Visual limpo",
  "Lógica clara",
  "Execução real",
];

const capabilities = [
  {
    icon: Palette,
    title: "Design",
    description: "Identidade, interfaces e presença visual.",
  },
  {
    icon: Code2,
    title: "Dev",
    description: "Sites, sistemas e experiências digitais.",
  },
  {
    icon: Workflow,
    title: "Processo",
    description: "Organização, fluxo e evolução do projeto.",
  },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-transparent"
    >
      <div className="container-site relative grid min-h-screen gap-14 py-24 md:grid-cols-[0.92fr_0.78fr] md:items-center md:py-28 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative z-10 flex flex-col justify-center"
        >
          <a
            href="#sobre"
            className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-[#1E3654]/80 bg-[#07111F]/70 px-4 py-2 text-sm font-medium text-[#A9BDD3] backdrop-blur transition hover:border-[#00D9FF]/50 hover:text-[#D9F4FF]"
          >
            <Sparkles className="h-4 w-4 text-[#00D9FF]" />
            SanNode por Flávio Oliveira
          </a>

          <h1 className="max-w-4xl text-[clamp(2.9rem,5.8vw,5.4rem)] font-black leading-[0.98] tracking-[-0.065em] text-[#F5FBFF] text-balance">
            Organizo ideias e transformo em{" "}
            <span className="bg-gradient-to-r from-[#D9F4FF] via-[#6DB9FF] to-[#00D9FF] bg-clip-text text-transparent">
              soluções digitais reais.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#A9BDD3] md:text-lg">
            Sou Flávio Oliveira, criador da SanNode. Uno design, programação e
            organização para criar marcas, sites, sistemas e automações com
            visual limpo, lógica clara e uso real.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projetos"
              className="tech-button group inline-flex items-center justify-center rounded-2xl bg-[#0B2A5B] px-6 py-4 font-semibold text-white transition hover:bg-[#2563EB]"
            >
              Ver projetos
              <ArrowUpRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="tech-button group inline-flex items-center justify-center rounded-2xl border border-[#00D9FF]/35 bg-[#07111F]/68 px-6 py-4 font-semibold text-[#F5FBFF] transition hover:border-[#00D9FF] hover:text-[#00D9FF]"
            >
              Entrar em contato
              <MessageCircle className="ml-2 h-5 w-5" />
            </a>
          </div>

          <div className="mt-10 grid max-w-3xl gap-7 border-y border-[#1E3654]/20 py-7 md:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#00D9FF]">
                O que construo
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#1E3654]/70 bg-[#07111F]/52 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#A9BDD3] backdrop-blur"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#00D9FF]">
                Método SanNode
              </p>

              <p className="mt-4 text-sm leading-7 text-[#A9BDD3]">
                Antes do visual, vem a organização. Antes do código, vem o
                fluxo. Antes da entrega, vem entender o que precisa funcionar.
              </p>
            </div>
          </div>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#D9F4FF]">
            {bullets.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00D9FF]" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 grid max-w-4xl gap-5 md:grid-cols-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.16 + index * 0.08 }}
                  className="group"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#1E3654]/70 bg-[#07111F]/72 text-[#00D9FF] backdrop-blur transition group-hover:border-[#00D9FF]/50">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="text-sm font-black text-[#F5FBFF]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-[#9DB2C7]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="relative z-10 flex items-center justify-center md:justify-end"
        >
          <ProfileCard />
        </motion.div>
      </div>
    </section>
  );
}