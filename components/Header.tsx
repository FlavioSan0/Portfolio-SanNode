"use client";

import Image from "next/image";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { contact } from "@/data/contact";

const navItems = [
  { label: "Sobre", href: "#sobre", id: "sobre" },
  { label: "Serviços", href: "#servicos", id: "servicos" },
  { label: "Projetos", href: "#projetos", id: "projetos" },
  { label: "Processo", href: "#processo", id: "processo" },
  { label: "Contato", href: "#contato", id: "contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  function closeMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    const sections = ["inicio", ...navItems.map((item) => item.id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]?.target?.id) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.12, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1E3654] bg-[#07111F]/85 backdrop-blur-xl">
      <div className="container-site flex items-center justify-between py-4">
        <a href="#inicio" className="flex items-center gap-3" onClick={closeMenu}>
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-[#1E3654] bg-[#0C1B2E] shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
            <Image
              src="/logo-sannode.png"
              alt="Logo SanNode"
              width={44}
              height={44}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="leading-tight">
            <p className="font-bold tracking-tight text-[#F5FBFF]">
              {contact.brand}
            </p>
            <p className="text-xs text-[#9DB2C7]">{contact.role}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.href}
                href={item.href}
                className={[
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  isActive
                    ? "bg-[#00D9FF]/10 text-[#00D9FF]"
                    : "text-[#A9BDD3] hover:bg-white/[0.04] hover:text-[#00D9FF]",
                ].join(" ")}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="tech-button hidden rounded-2xl bg-[#0B2A5B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB] md:inline-flex"
        >
          Fale comigo
          <MessageCircle className="ml-2 h-4 w-4" />
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="rounded-2xl border border-[#1E3654] bg-[#0C1B2E] p-3 text-[#F5FBFF] md:hidden"
          aria-label="Abrir menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[#1E3654] bg-[#07111F] md:hidden">
          <nav className="container-site flex flex-col gap-1 py-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={[
                    "rounded-2xl px-4 py-3 text-sm transition",
                    isActive
                      ? "bg-[#00D9FF]/10 text-[#00D9FF]"
                      : "text-[#A9BDD3] hover:bg-[#0C1B2E] hover:text-[#00D9FF]",
                  ].join(" ")}
                >
                  {item.label}
                </a>
              );
            })}

            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="mt-2 rounded-2xl bg-[#0B2A5B] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB]"
            >
              Fale comigo no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}