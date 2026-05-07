import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { contact } from "@/data/contact";

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.41 7.86 10.94.58.1.79-.25.79-.56v-2.17c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.39-5.25 5.67.41.36.77 1.06.77 2.14v3.18c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
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

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M5.1 8.8H1.8V22h3.3V8.8ZM3.45 2A1.9 1.9 0 1 0 3.4 5.8 1.9 1.9 0 0 0 3.45 2ZM22.2 14.4c0-4-2.14-5.86-5-5.86a4.32 4.32 0 0 0-3.9 2.14h-.05V8.8h-3.16V22h3.3v-6.53c0-1.72.32-3.39 2.45-3.39 2.1 0 2.13 1.97 2.13 3.5V22h3.3v-7.6h-.07Z" />
    </svg>
  );
}

const footerLinks = [
  {
    label: "GitHub",
    href: contact.github,
    icon: GithubIcon,
  },
  {
    label: "Instagram",
    href: contact.instagram,
    icon: InstagramIcon,
  },
  {
    label: "LinkedIn",
    href: contact.linkedin,
    icon: LinkedinIcon,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1E3654] bg-[#07111F]">
      <div className="container-site py-10">
        <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="text-2xl font-black text-[#F5FBFF]">
              {contact.brand}
            </p>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#A9BDD3]">
              Design, programação e automação para transformar ideias em
              soluções digitais claras, funcionais e bem apresentadas.
            </p>

            <p className="mt-5 text-xs text-[#7F96AD]">
              © 2026 — Desenvolvido por {contact.name}.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <div className="flex w-full flex-wrap gap-3 md:w-auto md:justify-end">
              {footerLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="tech-button inline-flex min-w-[132px] flex-1 items-center justify-center ...items-center justify-center rounded-2xl border border-[#1E3654] bg-[#0C1B2E] px-4 py-3 text-sm font-semibold text-[#A9BDD3] transition hover:border-[#00D9FF] hover:text-[#00D9FF]"
                  >
                    <span className="mr-2 text-[#00D9FF]">
                      <Icon />
                    </span>
                    {item.label}
                  </a>
                );
              })}
            </div>

            <div className="flex w-full flex-wrap gap-3 md:w-auto md:justify-end">
              <a
                href={contact.emailHref}
                className="tech-button inline-flex min-w-[132px] flex-1 items-center justify-center ...items-center justify-center rounded-2xl border border-[#1E3654] bg-[#0C1B2E] px-4 py-3 text-sm font-semibold text-[#A9BDD3] transition hover:border-[#00D9FF] hover:text-[#00D9FF]"
              >
                <Mail className="mr-2 h-4 w-4 text-[#00D9FF]" />
                E-mail
              </a>

              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="tech-button inline-flex min-w-[132px] flex-1 items-center justify-center ...items-center justify-center rounded-2xl bg-[#0B2A5B] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB]"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}