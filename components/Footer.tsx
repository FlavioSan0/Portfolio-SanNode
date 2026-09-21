import { ArrowUpRight } from "lucide-react";

import { contact } from "@/data/contact";

const links = [
  ["Instagram", contact.instagram],
  ["GitHub", contact.github],
  ["LinkedIn", contact.linkedin],
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-[#243B5A]/70 bg-[#0A1020]">
      <div className="container-site grid gap-8 py-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-2xl font-extrabold text-[#F7FBFF]">{contact.brand}</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-[#8FA1B9]">
            Sites, sistemas e automações para organizar processos e fortalecer negócios no digital.
          </p>
          <p className="mt-5 text-xs text-[#667B98]">© 2026 — San_Node. Desenvolvimento por {contact.name}.</p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-3" aria-label="Links externos">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-sm font-semibold text-[#A8B6CC] transition hover:text-[#3FE3FF]"
            >
              {label}
              <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
