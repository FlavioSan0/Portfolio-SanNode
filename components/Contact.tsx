import { MessageCircle } from "lucide-react";

import { contact, whatsappLink } from "@/data/contact";
import { primaryButton } from "@/lib/ui";

const message =
  "Olá! Vim pelo site da San_Node e quero tirar meu negócio do caderno. Posso explicar o que preciso?";

export default function Contact() {
  return (
    <section id="contato" className="container-site pb-24 md:pb-28">
      <div className="rounded-3xl border border-[#3FE3FF]/25 bg-[linear-gradient(135deg,#0B2A5B,#0F1B3D)] p-8 text-center md:p-16">
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.04em] text-white text-balance md:text-5xl">
          Conta como seu negócio funciona hoje.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-white/75">
          Eu respondo no WhatsApp e digo o que dá para resolver.
        </p>

        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noreferrer"
          className={`${primaryButton} mt-8 w-full sm:w-auto sm:px-10`}
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          Chamar no WhatsApp
        </a>

        <p className="mt-6 text-sm text-white/60">
          Prefere e-mail?{" "}
          <a href={contact.emailHref} className="font-semibold text-white underline-offset-4 hover:underline">
            {contact.email}
          </a>
        </p>
      </div>
    </section>
  );
}
