"use client";

import Image from "next/image";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { contact } from "@/data/contact";

const navItems = [
  { label: "O que resolvo", href: "#problemas", id: "problemas" },
  { label: "Projetos", href: "#projetos", id: "projetos" },
  { label: "Processo", href: "#processo", id: "processo" },
  { label: "Serviços", href: "#servicos", id: "servicos" },
  { label: "Contato", href: "#contato", id: "contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [hasScrolled, setHasScrolled] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    function updateHeaderState() {
      const scrollPosition = window.scrollY + 140;
      const pageBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 80;

      setHasScrolled(window.scrollY > 12);

      if (pageBottom) {
        setActiveSection("contato");
        return;
      }

      const sectionIds = ["inicio", ...navItems.map((item) => item.id)];

      let currentSection = "inicio";

      for (const id of sectionIds) {
        const element = document.getElementById(id);

        if (!element) continue;

        const sectionTop = element.offsetTop;

        if (scrollPosition >= sectionTop) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    }

    updateHeaderState();

    window.addEventListener("scroll", updateHeaderState, { passive: true });
    window.addEventListener("resize", updateHeaderState);

    return () => {
      window.removeEventListener("scroll", updateHeaderState);
      window.removeEventListener("resize", updateHeaderState);
    };
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-all duration-300",
        hasScrolled
          ? "border-b border-[#1E3654]/45 bg-[#040B14]/72 shadow-[0_18px_60px_rgba(0,0,0,0.26)] backdrop-blur-2xl"
          : "border-b border-[#1E3654]/20 bg-[#040B14]/42 backdrop-blur-xl",
      ].join(" ")}
    >
      <div className="container-site flex items-center justify-between py-4">
        <a
          href="#inicio"
          className="group flex items-center gap-3"
          onClick={closeMenu}
        >
          <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-[#1E3654]/80 bg-[#07111F]/85 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition group-hover:border-[#00D9FF]/60">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,217,255,0.22),transparent_38%)] opacity-70" />

            <Image
              src="/logo-sannode.png"
              alt="Logo SanNode"
              width={44}
              height={44}
              className="relative h-full w-full object-cover"
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

        <nav className="hidden items-center gap-1 rounded-full border border-[#1E3654]/55 bg-[#07111F]/58 p-1 backdrop-blur-xl lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.href}
                href={item.href}
                className={[
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  isActive
                    ? "bg-[#00D9FF]/12 text-[#00D9FF] shadow-[0_0_24px_rgba(0,217,255,0.1)]"
                    : "text-[#A9BDD3] hover:bg-white/[0.04] hover:text-[#F5FBFF]",
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
          className="tech-button hidden rounded-2xl border border-[#00D9FF]/20 bg-[#0B2A5B]/88 px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_45px_rgba(11,42,91,0.24)] transition hover:border-[#00D9FF]/50 hover:bg-[#2563EB] lg:inline-flex"
        >
          Fale comigo
          <MessageCircle className="ml-2 h-4 w-4" />
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="rounded-2xl border border-[#1E3654]/70 bg-[#07111F]/80 p-3 text-[#F5FBFF] backdrop-blur transition hover:border-[#00D9FF]/50 lg:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-[#1E3654]/45 bg-[#040B14]/95 backdrop-blur-2xl lg:hidden">
          <nav className="container-site flex flex-col gap-1 py-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={[
                    "rounded-2xl px-4 py-3 text-sm font-medium transition",
                    isActive
                      ? "bg-[#00D9FF]/10 text-[#00D9FF]"
                      : "text-[#A9BDD3] hover:bg-[#0C1B2E]/80 hover:text-[#F5FBFF]",
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
              className="mt-2 inline-flex items-center justify-center rounded-2xl bg-[#0B2A5B] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB]"
            >
              Fale comigo no WhatsApp
              <MessageCircle className="ml-2 h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}