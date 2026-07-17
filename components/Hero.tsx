"use client";

import { ArrowUpRight, MessageCircle } from "lucide-react";
import ProfileCard from "@/components/ProfileCard";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-transparent">
      <div className="container-site relative grid gap-14 pb-20 pt-28 md:grid-cols-[1.08fr_0.55fr] md:items-center md:pb-24 md:pt-36 lg:gap-20">
        <div className="relative z-10 flex flex-col justify-center">
          <Reveal direction="none" duration={520} repeat={false}>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
              SanNode por Flávio Oliveira
            </p>
          </Reveal>

          <Reveal delay={60} duration={650} repeat={false}>
            <h1 className="max-w-4xl text-[clamp(2.7rem,4.5vw,4.15rem)] font-black leading-[1.02] tracking-[-0.055em] text-[#F5FBFF] text-balance">
              Organizo ideias e transformo em{" "}
              <span className="bg-gradient-to-r from-[#D9F4FF] via-[#6DB9FF] to-[#00D9FF] bg-clip-text text-transparent">
                soluções digitais reais.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={140} duration={620} repeat={false}>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#A9BDD3] md:text-lg md:leading-8">
              Crio identidades, sites, sistemas e automações que organizam ideias
              e processos em experiências digitais claras e funcionais.
            </p>
          </Reveal>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Reveal delay={210} duration={560} repeat={false}>
              <a
                href="#projetos"
                className="tech-button group inline-flex w-full items-center justify-center rounded-2xl bg-[#0B2A5B] px-6 py-4 font-semibold text-white transition hover:bg-[#2563EB] sm:w-auto"
              >
                Ver projetos
                <ArrowUpRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Reveal>

            <Reveal delay={280} duration={560} repeat={false}>
              <a
                href="#contato"
                className="tech-button group inline-flex w-full items-center justify-center rounded-2xl border border-[#00D9FF]/35 bg-[#07111F]/68 px-6 py-4 font-semibold text-[#F5FBFF] transition hover:border-[#00D9FF] hover:text-[#00D9FF] sm:w-auto"
              >
                Entrar em contato
                <MessageCircle className="ml-2 h-5 w-5" />
              </a>
            </Reveal>
          </div>
        </div>

        <Reveal
          direction="right"
          delay={120}
          duration={700}
          distance={32}
          initialScale={0.98}
          repeat={false}
          className="relative z-10 flex items-center justify-center md:justify-end"
        >
          <ProfileCard />
        </Reveal>
      </div>
    </section>
  );
}
