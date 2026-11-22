import { ArrowUpRight } from "lucide-react";

import { whatsappLink } from "@/data/contact";
import { offers } from "@/data/home";

export default function WorkFronts() {
  return (
    <section id="servicos" className="border-y border-[#243B5A]/55 bg-[#0F1B3D]/30">
      <div className="container-site py-20 md:py-24">
        <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.04em] text-[#F7FBFF] md:text-5xl">
          O que eu faço
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {offers.map((offer, index) => (
            <article
              key={offer.title}
              className="flex flex-col rounded-2xl border border-[#243B5A] bg-[#101A31]/80 p-7"
            >
              <span className="text-xs font-bold tabular-nums text-[#3FE3FF]">0{index + 1}</span>
              <h3 className="mt-4 text-2xl font-extrabold text-[#F7FBFF]">{offer.title}</h3>
              <p className="mt-3 text-base leading-7 text-[#B7C5D9]">{offer.description}</p>
              <p className="mt-5 text-sm text-[#7F93AD]">Ex.: {offer.example}</p>
              <a
                href={whatsappLink(offer.message)}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex min-h-11 items-center pt-6 text-sm font-bold text-[#3FE3FF] transition hover:text-white"
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
