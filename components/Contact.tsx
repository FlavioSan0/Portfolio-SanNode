import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";

import { contact } from "@/data/contact";

export default function Contact() {
  return (
    <section id="contato" className="container-site pb-24">
      <div className="relative overflow-hidden rounded-[1.75rem] border border-[#3FE3FF]/20 bg-[#0F1B3D] p-7 md:p-12">
        <div className="absolute right-0 top-0 h-52 w-52 translate-x-16 -translate-y-16 rounded-full bg-[#1E90FF]/12 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#3FE3FF]">Contato</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-white md:text-5xl">
              Tem algo na sua operação que ainda depende de improviso?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#B7C5D9]">
              Conte o cenário. A primeira conversa serve para entender o problema e definir se faz
              sentido resolver com site, sistema, automação ou uma combinação dessas frentes.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#B7C5D9]">
              <a href={contact.phoneHref} className="inline-flex items-center gap-2 hover:text-[#3FE3FF]">
                <Phone className="h-4 w-4" />
                {contact.phoneDisplay}
              </a>
              <a href={contact.emailHref} className="inline-flex items-center gap-2 hover:text-[#3FE3FF]">
                <Mail className="h-4 w-4" />
                {contact.email}
              </a>
            </div>
          </div>

          <div className="grid gap-3">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-13 items-center justify-center rounded-xl bg-[#1E90FF] px-6 py-4 font-bold text-white transition hover:bg-[#1679D8]"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar com a San_Node
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href={contact.emailHref}
              className="inline-flex min-h-13 items-center justify-center rounded-xl border border-[#243B5A] bg-[#101A31] px-6 py-4 font-bold text-[#F7FBFF] transition hover:border-[#3FE3FF]/45 hover:text-[#3FE3FF]"
            >
              Enviar e-mail
              <Mail className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
