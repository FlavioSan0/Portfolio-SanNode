import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import CaseCover from "@/components/CaseCover";
import { products } from "@/data/home";

export default function Products() {
  return (
    <section id="produtos" className="container-site py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#3FE3FF]">Sistemas prontos</p>
        <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.04em] text-[#F7FBFF] md:text-5xl">
          Já feitos, testados e em evolução.
        </h2>
        <p className="mt-4 text-base leading-7 text-[#A8B6CC]">
          Comece com um produto pronto ou peça um sistema do zero.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.name}
            className="flex flex-col rounded-2xl border border-[#243B5A] bg-[#101A31]/80 p-7 transition hover:border-[#3FE3FF]/40"
          >
            <CaseCover
              title={product.name}
              image={"image" in product ? product.image : undefined}
              url={"demoHref" in product ? product.demoHref : undefined}
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <span className="mt-6 w-fit rounded-full border border-[#3FE3FF]/25 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#9DEEFF]">
              {product.status}
            </span>
            <h3 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-[#F7FBFF]">{product.name}</h3>
            <p className="mt-1 text-sm font-semibold text-[#3FE3FF]">{product.forWho}</p>
            <p className="mt-4 text-base leading-7 text-[#B7C5D9]">{product.pain}</p>

            <ul className="mt-6 grid gap-2.5">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5 text-sm font-semibold text-[#DFF0FA]">
                  <Check className="h-4 w-4 shrink-0 text-[#3FE3FF]" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-1 pt-7">
              {"demoHref" in product ? (
                <a
                  href={product.demoHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center text-sm font-bold text-[#F7FBFF] transition hover:text-[#3FE3FF]"
                >
                  Ver funcionando
                  <ArrowUpRight className="ml-1.5 h-4 w-4" />
                </a>
              ) : null}
              <Link
                href={product.caseHref}
                className="inline-flex min-h-11 items-center text-sm font-bold text-[#7F93AD] transition hover:text-[#3FE3FF]"
              >
                Detalhes
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
