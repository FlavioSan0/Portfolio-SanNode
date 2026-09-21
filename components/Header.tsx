"use client";

import Image from "next/image";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

import { contact } from "@/data/contact";

const navItems = [
  { label: "Soluções", href: "#servicos", id: "servicos" },
  { label: "Produtos", href: "#produtos", id: "produtos" },
  { label: "Projetos", href: "#projetos", id: "projetos" },
  { label: "Sobre", href: "#sobre", id: "sobre" },
  { label: "Contato", href: "#contato", id: "contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [hasScrolled, setHasScrolled] = useState(false);

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

      let currentSection = "inicio";

      for (const id of ["inicio", ...navItems.map((item) => item.id)]) {
        const element = document.getElementById(id);
        if (element && scrollPosition >= element.offsetTop) currentSection = id;
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
        "sticky top-0 z-50 border-b transition-all duration-300",
        hasScrolled
          ? "border-[#243B5A]/70 bg-[#0A1020]/88 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl"
          : "border-[#243B5A]/35 bg-[#0A1020]/68 backdrop-blur-lg",
      ].join(" ")}
    >
      <div className="container-site flex items-center justify-between py-4">
        <a href="#inicio" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <div className="relative h-11 w-11 overflow-hidden rounded-xl border border-[#243B5A] bg-[#0F1B3D]">
            <Image
              src="/logo-sannode.png"
              alt="Logo San_Node"
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </div>
          <div className="leading-tight">
            <p className="font-bold text-[#F7FBFF]">{contact.brand}</p>
            <p className="text-xs text-[#7F93AD]">{contact.role}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={[
                "rounded-lg px-3 py-2 text-sm font-semibold transition",
                activeSection === item.id
                  ? "bg-[#3FE3FF]/8 text-[#3FE3FF]"
                  : "text-[#AFC0D6] hover:bg-white/[0.04] hover:text-white",
              ].join(" ")}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center rounded-xl bg-[#1E90FF] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1679D8] lg:inline-flex"
        >
          Falar com a San_Node
          <MessageCircle className="ml-2 h-4 w-4" />
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="rounded-xl border border-[#243B5A] bg-[#0F1B3D] p-3 text-white lg:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-[#243B5A]/60 bg-[#0A1020]/96 backdrop-blur-xl lg:hidden">
          <nav className="container-site flex flex-col gap-1 py-4" aria-label="Navegação mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-[#B7C5D9] hover:bg-[#0F1B3D] hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-[#1E90FF] px-4 py-3 text-sm font-bold text-white"
            >
              Falar no WhatsApp
              <MessageCircle className="ml-2 h-4 w-4" />
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
