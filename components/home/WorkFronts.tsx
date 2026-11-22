import { ArrowUpRight } from "lucide-react";

import { whatsappLink } from "@/data/contact";
import { offers } from "@/data/home";

export default function WorkFronts() {
  return (
    <section id="servicos" className="relative bg-[#F5F8FC]">
      <div className="container-site py-20 md:py-24">
        <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.04em] text-[#0A1020] md:text-5xl">
          O que eu faço
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {offers.map((offer, index) => (
            <article
              key={offer.title}
              className="flex flex-col rounded-2xl border border-[#D6E2F0] bg-white p-7 shadow-[0_14px_36px_rgba(10,16,32,0.07)]"
            >
              <span className="text-xs font-bold tabular-nums text-[#0A6FD6]">0{index + 1}</span>
              <h3 className="mt-4 text-2xl font-extrabold text-[#0A1020]">{offer.title}</h3>
              <p className="mt-3 text-base leading-7 text-[#3D4F6B]">{offer.description}</p>
              <p className="mt-5 text-sm text-[#6A7D99]">Ex.: {offer.example}</p>
              <a
                href={whatsappLink(offer.message)}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex min-h-11 items-center pt-6 text-sm font-bold text-[#0A6FD6] transition hover:text-[#0A1020]"
              >
                Quero isso
                <ArrowUpRight className="ml-1.5 h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
