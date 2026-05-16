"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Cpu,
  Layers3,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import ProfileCard from "@/components/ProfileCard";
import { contact } from "@/data/contact";

const techPoints = [
  {
    icon: Layers3,
    label: "Design",
    value: "Identidade e interfaces",
  },
  {
    icon: Code2,
    label: "Dev",
    value: "Sites e sistemas",
  },
  {
    icon: Cpu,
    label: "Processo",
    value: "Organização e execução",
  },
];

const deliverables = [
  "Marcas",
  "Landing pages",
  "Sistemas",
  "Automações",
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-[#1E3654]/80 bg-transparent"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(0,217,255,0.10),transparent_28%),linear-gradient(180deg,rgba(7,17,31,0.16),rgba(7,17,31,0.74))]" />

      <div className="container-site relative grid gap-12 py-20 lg:grid-cols-[1fr_0.82fr] lg:items-center lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#1E3654] bg-[#07111F]/70 px-4 py-2 text-sm font-medium text-[#A9BDD3] shadow-[0_0_35px_rgba(0,217,255,0.06)] backdrop-blur">
            <Sparkles className="h-4 w-4 text-[#00D9FF]" />
            SanNode por Flávio Oliveira
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.06em] text-[#F5FBFF] sm:text-6xl xl:text-7xl">
            Eu organizo ideias
            <span className="block">e transformo em</span>
            <span className="block bg-gradient-to-r from-[#F5FBFF] via-[#74C7FF] to-[#00D9FF] bg-clip-text text-transparent">
              soluções digitais reais.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#A9BDD3] sm:text-lg">
            Sou Flávio Oliveira, criador da SanNode. Uno design, programação e
            organização para construir marcas, sites, sistemas e automações com
            visual limpo, lógica clara e uso real.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projetos"
              className="tech-button group inline-flex items-center justify-center rounded-2xl bg-[#0B2A5B] px-6 py-4 font-semibold text-white shadow-[0_18px_45px_rgba(11,42,91,0.28)] transition hover:bg-[#2563EB]"
            >
              Ver projetos
              <ArrowUpRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="tech-button inline-flex items-center justify-center rounded-2xl border border-[#00D9FF]/35 bg-[#07111F]/72 px-6 py-4 font-semibold text-[#F5FBFF] backdrop-blur transition hover:border-[#00D9FF] hover:text-[#00D9FF]"
            >
              Entrar em contato
              <MessageCircle className="ml-2 h-5 w-5" />
            </a>
          </div>

          <div className="mt-9 grid gap-4 lg:max-w-3xl lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[1.5rem] border border-[#1E3654] bg-[#07111F]/68 p-5 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
                O que construo
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {deliverables.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#1E3654] bg-[#0C1B2E]/86 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#A9BDD3]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#1E3654] bg-[#07111F]/68 p-5 backdrop-blur">
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-[#00D9FF]/10 blur-2xl" />

              <p className="relative text-xs font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
                Método SanNode
              </p>

              <p className="relative mt-4 text-sm leading-7 text-[#A9BDD3]">
                Antes do visual, vem a organização. Antes do código, vem o
                fluxo. Antes da entrega, vem entender o que precisa funcionar.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {techPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.15 + index * 0.08 }}
                  className="rounded-[1.35rem] border border-[#1E3654] bg-[#07111F]/62 p-4 backdrop-blur transition hover:border-[#00D9FF]/45"
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