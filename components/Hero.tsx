import { ArrowRight, MessageCircle } from "lucide-react";

import NodeTrail from "@/components/NodeTrail";
import { hero, heroWhatsapp } from "@/data/home";
import { primaryButton } from "@/lib/ui";

export default function Hero() {
  const [lead] = hero.title.split(hero.highlight);

  return (
    <section id="inicio" className="relative">
      <div className="container-site grid gap-12 pb-20 pt-16 md:pb-28 md:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#3FE3FF]">{hero.eyebrow}</p>

          <h1 className="mt-5 text-[clamp(3rem,7.5vw,6rem)] font-extrabold leading-[0.95] tracking-[-0.055em] text-[#F7FBFF] text-balance">
            {lead}
            <span className="bg-gradient-to-r from-[#3FE3FF] to-[#1E90FF] bg-clip-text text-transparent">
              {hero.highlight}
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#B7C5D9]">{hero.subtitle}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={heroWhatsapp} target="_blank" rel="noreferrer" className={primaryButton}>
              <MessageCircle className="mr-2 h-5 w-5" />
              {hero.primaryCta}
            </a>
            <a
              href="#trabalhos"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#243B5A] px-6 py-3 font-bold text-[#F7FBFF] transition hover:border-[#3FE3FF]/60 hover:text-[#3FE3FF]"
            >
              {hero.secondaryCta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>

        <NodeTrail items={hero.trail} className="lg:pl-6" />
      </div>
    </section>
  );
}
