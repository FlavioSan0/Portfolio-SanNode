import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MessageCircle } from "lucide-react";
import { contact } from "@/data/contact";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-[#07111F] text-[#F5FBFF]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#00D9FF22,transparent_30%),radial-gradient(circle_at_left,#2563EB18,transparent_38%)]" />
      <div className="tech-grid-bg absolute inset-0 opacity-60" />

      <section className="container-site relative py-20">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-[#1E3654] bg-[#0C1B2E]/90 p-8 text-center shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#00D9FF]">
            Erro 404
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
            Página não encontrada.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#A9BDD3]">
            O endereço acessado não existe ou pode ter sido movido. Volte para
            o portfólio e continue navegando pelos projetos da SanNode.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="tech-button inline-flex min-w-[132px] flex-1 items-center justify-center rounded-2xl bg-[#0B2A5B] px-6 py-4 font-semibold text-white transition hover:bg-[#2563EB]"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Voltar para o portfólio
            </Link>

            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="tech-button inline-flex min-w-[132px] flex-1 items-center justify-center rounded-2xl border border-[#1E3654] bg-[#10233B] px-6 py-4 font-semibold text-[#F5FBFF] transition hover:border-[#00D9FF] hover:text-[#00D9FF]"
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