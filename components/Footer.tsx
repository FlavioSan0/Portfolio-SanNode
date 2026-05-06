import {
  ArrowUpRight,
  Mail,
  MessageCircle,
} from "lucide-react";
import { contact } from "@/data/contact";

const footerLinks = [
  {
    label: "GitHub",
    short: "GH",
    href: contact.github,
  },
  {
    label: "Instagram",
    short: "IG",
    href: contact.instagram,
  },
  {
    label: "LinkedIn",
    short: "IN",
    href: contact.linkedin,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1E3654] bg-[#07111F]">
      <div className="container-site py-10">
        <div className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-center">
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

          <div className="grid gap-3">
            <div className="flex flex-wrap gap-3 md:justify-end">
              {footerLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="tech-button inline-flex items-center rounded-2xl border border-[#1E3654] bg-[#0C1B2E] px-4 py-3 text-sm font-semibold text-[#A9BDD3] transition hover:border-[#00D9FF] hover:text-[#00D9FF]"
                >
                  <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-lg bg-[#10233B] text-xs font-black text-[#00D9FF]">
                    {item.short}
                  </span>
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href={contact.emailHref}
                className="tech-button inline-flex items-center rounded-2xl border border-[#1E3654] bg-[#0C1B2E] px-4 py-3 text-sm font-semibold text-[#A9BDD3] transition hover:border-[#00D9FF] hover:text-[#00D9FF]"
              >
                <Mail className="mr-2 h-4 w-4" />
                E-mail
              </a>

              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="tech-button inline-flex items-center rounded-2xl bg-[#0B2A5B] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB]"
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