"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, Code2, Layers3, Workflow } from "lucide-react";

const pillars = [
  {
    icon: Layers3,
    title: "Design",
    description: "Identidade visual e interfaces",
  },
  {
    icon: Code2,
    title: "Dev",
    description: "Sites e sistemas",
  },
  {
    icon: Workflow,
    title: "Processo",
    description: "Organização e evolução",
  },
];

export default function ProfileCard() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, delay: 0.08 }}
      className="relative overflow-hidden rounded-[2rem] border border-[#17385D] bg-[#081423]/90 shadow-[0_28px_80px_rgba(0,0,0,0.38)] backdrop-blur-xl"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,217,255,0.10),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.10),transparent_30%)]" />

      <div className="relative p-3">
        <div className="overflow-hidden rounded-[1.6rem] border border-[#183C62] bg-[#0B1627]">
          <div className="relative aspect-[4/4.9]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,217,255,0.12),transparent_22%),linear-gradient(to_bottom,rgba(4,11,20,0.08),rgba(4,11,20,0.22))] z-10" />

            <Image
              src="/flavio-profilee.png"
              alt="Flávio Oliveira"
              fill
              priority
              sizes="(max-width: 640px) 100vw, 40vw"
              className="object-cover object-center"
            />

            <div className="absolute bottom-4 left-4 z-20 rounded-full border border-[#00D9FF]/35 bg-[#05101D]/82 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#00D9FF] backdrop-blur">
              Criador da SanNode
            </div>
          </div>
        </div>
      </div>

      <div className="relative px-6 pb-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#00D9FF]">
              Por trás da SanNode
            </p>

            <h3 className="mt-3 text-3xl font-black text-[#F5FBFF]">
              Flávio Oliveira
            </h3>

            <p className="mt-2 text-sm text-[#A9BDD3]">
              Design, programação e automação
            </p>
          </div>

          <span className="mt-6 rounded-full border border-[#1E3654] bg-[#10233B] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9DB2C7]">
            SanNode
          </span>
        </div>

        <div className="mt-5 rounded-[1.6rem] border border-[#1E3654] bg-[#09192C]/88 p-5">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0C2744] text-[#00D9FF]">
              <BadgeCheck className="h-5 w-5" />
            </div>

            <div>
              <h4 className="text-base font-bold text-[#F5FBFF]">
                Trabalho com visão completa
              </h4>
              <p className="mt-2 text-sm leading-6 text-[#A9BDD3]">
                Da ideia inicial à entrega visual e funcional, conectando marca,
                interface, código e processo.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <div
                key={pillar.title}
                className="flex items-center justify-between gap-4 rounded-2xl border border-[#1E3654] bg-[#0C1B2E]/84 px-4 py-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#10233B] text-[#00D9FF]">
                    <Icon className="h-4.5 w-4.5" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#F5FBFF]">
                      {pillar.title}
                    </p>
                    <p className="text-xs text-[#9DB2C7]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
}