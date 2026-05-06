import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { contact } from "@/data/contact";

export default function Contact() {
  return (
    <section id="contato" className="container-site pb-24">
      <div className="relative overflow-hidden rounded-[2rem] border border-[#1E3654] bg-[linear-gradient(135deg,#0B2A5B,#123B6D)] p-8 md:p-12">
        <div className="absolute right-0 top-0 h-72 w-72 translate-x-20 -translate-y-20 rounded-full bg-[#00D9FF]/20 blur-3xl" />

        <div className="relative grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-[#B9F5FF]">
              <Mail className="h-5 w-5" />

              <span className="text-sm font-semibold uppercase tracking-[0.25em]">
                Contato
              </span>
            </div>

            <h2 className="text-3xl font-black text-white md:text-5xl">
              Vamos construir algo funcional?
            </h2>

            <p className="mt-5 max-w-2xl text-white/80">
              Entre em contato para projetos de identidade visual, interfaces,
              sites, sistemas personalizados e automações.
            </p>

            <div className="mt-6 space-y-3 text-sm text-white/85">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#B9F5FF]" />
                <a
                  href={contact.phoneHref}
                  className="hover:text-[#B9F5FF] hover:underline"
                >
                  {contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#B9F5FF]" />
                <a
                  href={contact.emailHref}
                  className="hover:text-[#B9F5FF] hover:underline"
                >
                  {contact.email}
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="tech-button inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 font-semibold text-[#0B2A5B] transition hover:bg-[#E6FAFF]"
            >
              Enviar mensagem pelo WhatsApp
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>

            <a
              href={contact.emailHref}
              className="tech-button inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-6 py-4 font-semibold text-white transition hover:bg-white/15"
            >
              Enviar e-mail
              <Mail className="ml-2 h-5 w-5" />
            </a>

            <a
              href={contact.phoneHref}
              className="tech-button inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-6 py-4 font-semibold text-white transition hover:bg-white/15"
            >
              Ligar para {contact.phoneDisplay}
              <Phone className="ml-2 h-5 w-5" />
            </a>

            <div className="grid grid-cols-3 gap-3">
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="tech-button inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 py-4 text-sm font-bold text-white transition hover:bg-white/15"
              >
                GH
              </a>

              <a
                href={contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="tech-button inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 py-4 text-sm font-bold text-white transition hover:bg-white/15"
              >
                IG
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="tech-button inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 py-4 text-sm font-bold text-white transition hover:bg-white/15"
              >
                IN
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}