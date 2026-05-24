"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Code2,
  MessageCircle,
  Palette,
  Workflow,
} from "lucide-react";
import { useState } from "react";
import type { ComponentType } from "react";
import { contact } from "@/data/contact";

type IconProps = {
  className?: string;
};

function GithubIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.41 7.86 10.94.58.1.79-.25.79-.56v-2.17c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.39-5.25 5.67.41.36.77 1.06.77 2.14v3.18c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M5.1 8.8H1.8V22h3.3V8.8ZM3.45 2A1.9 1.9 0 1 0 3.4 5.8 1.9 1.9 0 0 0 3.45 2ZM22.2 14.4c0-4-2.14-5.86-5-5.86a4.32 4.32 0 0 0-3.9 2.14h-.05V8.8h-3.16V22h3.3v-6.53c0-1.72.32-3.39 2.45-3.39 2.1 0 2.13 1.97 2.13 3.5V22h3.3v-7.6h-.07Z" />
    </svg>
  );
}

type SocialLink = {
  id: string;
  label: string;
  href: string;
  icon: ComponentType<IconProps>;
};

const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: contact.github,
    icon: GithubIcon,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: contact.instagram,
    icon: InstagramIcon,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: contact.linkedin,
    icon: LinkedinIcon,
  },
];

const specialties = [
  {
    icon: Palette,
    label: "Design",
  },
  {
    icon: Code2,
    label: "Dev",
  },
  {
    icon: Workflow,
    label: "Processo",
  },
];

export default function ProfileCard() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <motion.article
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, delay: 0.08 }}
      className="relative mx-auto w-full max-w-[390px]"
    >
      <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[linear-gradient(135deg,rgba(0,217,255,0.28),rgba(37,99,235,0.18),transparent)] opacity-40 blur-2xl transition duration-500" />

      <div className="relative overflow-hidden rounded-[2rem] border border-[#1E3654]/80 bg-[#06111F]/72 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,217,255,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.14),transparent_34%)]" />

        <div className="absolute left-0 top-0 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(0,217,255,0.72),transparent)] opacity-70" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(37,99,235,0.52),transparent)] opacity-60" />

        <div className="relative flex flex-col items-center text-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#00D9FF]/20 blur-2xl" />

            <div className="relative h-32 w-32 overflow-hidden rounded-full border border-[#00D9FF]/35 bg-[#07111F] p-1 shadow-[0_0_45px_rgba(0,217,255,0.12)]">
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src="/flavio-profile.png"
                  alt="Flávio Oliveira, criador da SanNode"
                  fill
                  priority
                  sizes="128px"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="absolute -bottom-1 -right-1 flex h-10 w-10 items-center justify-center rounded-full border border-[#1E3654] bg-[#07111F] text-[#00D9FF] shadow-[0_0_24px_rgba(0,217,255,0.18)]">
              <BadgeCheck className="h-5 w-5" />
            </div>
          </div>

          <div className="mt-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#00D9FF]">
              Por trás da SanNode
            </p>

            <h3 className="mt-3 text-3xl font-black tracking-tight text-[#F5FBFF]">
              Flávio Oliveira
            </h3>

            <p className="mt-2 text-sm font-semibold text-[#74C7FF]">
              Design, programação e automação
            </p>

            <p className="mx-auto mt-4 max-w-[290px] text-sm leading-7 text-[#A9BDD3]">
              Transformo ideias soltas em marcas, sites, sistemas e automações
              com visual limpo, lógica clara e execução real.
            </p>
          </div>

          <div className="my-6 h-px w-32 rounded-full bg-[linear-gradient(90deg,transparent,rgba(0,217,255,0.5),transparent)]" />

          <div className="grid w-full grid-cols-3 gap-2">
            {specialties.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#1E3654]/70 bg-[#07111F]/70 px-3 py-3"
                >
                  <Icon className="mx-auto h-5 w-5 text-[#00D9FF]" />

                  <p className="mt-2 text-xs font-bold text-[#D9F4FF]">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-5 rounded-[1.5rem] border border-[#1E3654]/70 bg-[#07111F]/62 p-4 text-left">
            <div className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#00D9FF]/20 bg-[#0C2744]/80 text-[#00D9FF]">
                <Workflow className="h-5 w-5" />
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#F5FBFF]">
                  Trabalho com visão completa
                </h4>

                <p className="mt-1 text-xs leading-6 text-[#A9BDD3]">
                  Uno marca, interface, código e processo para criar soluções
                  que funcionam na prática.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.id} className="relative">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="group flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-[#1E3654]/80 bg-[#07111F]/80 text-[#A9BDD3] transition hover:border-[#00D9FF]/60 hover:bg-[#0C1B2E] hover:text-[#00D9FF]"
                    aria-label={item.label}
                  >
                    <Icon className="h-5 w-5 transition group-hover:scale-110" />
                  </a>

                  <div
                    role="tooltip"
                    className={[
                      "pointer-events-none absolute -top-11 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-xl border border-[#1E3654]/80 bg-[#040B14]/95 px-3 py-1.5 text-xs font-semibold text-[#D9F4FF] shadow-[0_12px_35px_rgba(0,0,0,0.35)] backdrop-blur transition",
                      hoveredItem === item.id
                        ? "translate-y-0 opacity-100"
                        : "translate-y-2 opacity-0",
                    ].join(" ")}
                  >
                    {item.label}
                    <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-[#1E3654]/80 bg-[#040B14]" />
                  </div>
                </div>
              );
            })}
          </div>

          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="tech-button group mt-6 inline-flex items-center justify-center rounded-full bg-[#0B2A5B] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_45px_rgba(11,42,91,0.24)] transition hover:bg-[#2563EB]"
          >
            Falar comigo
            <MessageCircle className="ml-2 h-4 w-4" />
            <ArrowUpRight className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}