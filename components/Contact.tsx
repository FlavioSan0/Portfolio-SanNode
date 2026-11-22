import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";

import Reveal from "@/components/Reveal";
import { contact, whatsappLink } from "@/data/contact";
import { primaryButton } from "@/lib/ui";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.41 7.86 10.94.58.1.79-.25.79-.56v-2.17c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.39-5.25 5.67.41.36.77 1.06.77 2.14v3.18c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
      <path d="M5.1 8.8H1.8V22h3.3V8.8ZM3.45 2A1.9 1.9 0 1 0 3.4 5.8 1.9 1.9 0 0 0 3.45 2ZM22.2 14.4c0-4-2.14-5.86-5-5.86a4.32 4.32 0 0 0-3.9 2.14h-.05V8.8h-3.16V22h3.3v-6.53c0-1.72.32-3.39 2.45-3.39 2.1 0 2.13 1.97 2.13 3.5V22h3.3v-7.6h-.07Z" />
    </svg>
  );
}

function TiktokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
      <path d="M19.6 6.7a5.1 5.1 0 0 1-3.1-1.6A5 5 0 0 1 15.3 2h-3.4v13.2a2.9 2.9 0 1 1-2-2.8V8.9a6.3 6.3 0 1 0 5.4 6.3V9.1a8.4 8.4 0 0 0 4.9 1.6V6.7Z" />
    </svg>
  );
}

const socialLinks = [
  { label: "Instagram", href: contact.instagram, icon: InstagramIcon },
  { label: "TikTok", href: contact.tiktok, icon: TiktokIcon },
  { label: "GitHub", href: contact.github, icon: GithubIcon },
  { label: "LinkedIn", href: contact.linkedin, icon: LinkedinIcon },
];

/** Atalhos: cada um abre o WhatsApp já com o assunto escolhido. */
const topics = [
  { label: "Um site", message: "Olá! Vim pelo site da San_Node e quero um site para o meu negócio." },
  { label: "Um sistema", message: "Olá! Vim pelo site da San_Node e quero um sistema sob medida para o meu negócio." },
  { label: "Uma automação", message: "Olá! Vim pelo site da San_Node e quero automatizar uma tarefa do meu negócio." },
  { label: "Ainda não sei", message: "Olá! Vim pelo site da San_Node. Tenho uma ideia solta e queria ajuda para entender por onde começar." },
];

const secondaryButton =
  "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.07] px-6 py-3 text-sm font-bold text-white transition hover:border-[#3FE3FF]/45 hover:bg-white/[0.12]";

export default function Contact() {
  return (
    <section id="contato" className="container-site pb-24 md:pb-28">
      <Reveal duration={700} distance={26} initialScale={0.985}>
        <div className="relative overflow-hidden rounded-[2rem] border border-[#3FE3FF]/25 bg-[linear-gradient(135deg,#0B2A5B,#0F1B3D_70%)] p-6 md:p-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#3FE3FF]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-[#1E90FF]/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(63,227,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(63,227,255,0.05)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_80%_0%,black,transparent_65%)]" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
            <div>
              <div className="inline-flex items-center gap-2 text-[#9DEEFF]">
                <Mail className="h-5 w-5" />
                <span className="text-sm font-bold uppercase tracking-[0.25em]">Contato</span>
              </div>

              <h2 className="mt-4 text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] text-white md:text-6xl">
                Tem uma ideia{" "}
                <span className="bg-gradient-to-r from-[#3FE3FF] to-[#1E90FF] bg-clip-text text-transparent">meio solta?</span>
              </h2>

              <p className="mt-5 max-w-lg text-base leading-7 text-white/80 md:text-lg md:leading-8">
                Me chama. A gente organiza o caminho e vê o que faz mais sentido primeiro.
              </p>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#7F93AD]">Comece pelo que você precisa</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <a
                    key={topic.label}
                    href={whatsappLink(topic.message)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-10 items-center rounded-full border border-[#3FE3FF]/30 bg-[#3FE3FF]/[0.07] px-4 text-sm font-bold text-[#DFF9FF] transition hover:border-[#3FE3FF] hover:bg-[#3FE3FF]/15"
                  >
                    {topic.label}
                  </a>
                ))}
              </div>

              <div className="mt-8 grid gap-3 text-sm text-white/85 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <a href={contact.phoneHref} className="inline-flex items-center gap-2.5 hover:text-[#3FE3FF]">
                  <Phone className="h-4 w-4 text-[#3FE3FF]" />
                  {contact.phoneDisplay}
                </a>
                <a href={contact.emailHref} className="inline-flex min-w-0 items-center gap-2.5 hover:text-[#3FE3FF]">
                  <Mail className="h-4 w-4 shrink-0 text-[#3FE3FF]" />
                  <span className="truncate">{contact.email}</span>
                </a>
              </div>
            </div>

            <div className="grid gap-3">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className={`${primaryButton} min-h-16 w-full gap-2.5 text-base`}
              >
                <MessageCircle className="h-5 w-5" />
                Conversar sobre minha ideia
                <ArrowUpRight className="h-5 w-5" />
              </a>
              <p className="-mt-1 text-center text-xs font-semibold text-white/60">Resposta direta no WhatsApp, sem formulário.</p>

              <div className="grid gap-3 sm:grid-cols-2">
                <a href={contact.emailHref} className={secondaryButton}>
                  <Mail className="h-4 w-4" />
                  Enviar e-mail
                </a>
                <a href={contact.phoneHref} className={secondaryButton}>
                  <Phone className="h-4 w-4" />
                  Ligar agora
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm font-bold text-white/85 transition hover:border-[#3FE3FF]/40 hover:text-[#3FE3FF]"
                    >
                      <span className="text-[#3FE3FF]">
                        <Icon />
                      </span>
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
