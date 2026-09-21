import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MessageCircle } from "lucide-react";

import { contact } from "@/data/contact";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-[#0A1020] text-[#F7FBFF]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(63,227,255,0.08),transparent_30%),radial-gradient(circle_at_left,rgba(30,144,255,0.08),transparent_38%)]"
        aria-hidden="true"
      />

      <section className="container-site relative py-20">
        <div className="mx-auto max-w-3xl rounded-[1.75rem] border border-[#243B5A] bg-[#0F1B3D]/88 p-8 text-center shadow-[0_25px_80px_rgba(0,0,0,0.32)] backdrop-blur md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#3FE3FF]">
            Erro 404
          </p>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Página não encontrada.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#A8B6CC]">
            O endereço acessado não existe ou pode ter sido movido. Volte para a
            San_Node e continue navegando pelas soluções e projetos.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex min-h-12 min-w-[132px] flex-1 items-center justify-center rounded-xl bg-[#1E90FF] px-6 py-4 font-bold text-white transition hover:bg-[#1679D8]"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Voltar para a San_Node
            </Link>

            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 min-w-[132px] flex-1 items-center justify-center rounded-xl border border-[#243B5A] bg-[#101A31] px-6 py-4 font-bold text-[#F7FBFF] transition hover:border-[#3FE3FF]/55 hover:text-[#3FE3FF]"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar no WhatsApp
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
