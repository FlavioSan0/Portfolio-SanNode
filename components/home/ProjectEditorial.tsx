import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import CaseCover from "@/components/CaseCover";
import { featuredCases, type FeaturedCase } from "@/data/home";

function CaseCard({ item, large }: { item: FeaturedCase; large?: boolean }) {
  return (
    <article className={`group ${large ? "lg:col-span-3" : "lg:col-span-2"}`}>
      <Link href={`/projetos/${item.slug}`} aria-label={`Ver case ${item.title}`} className="block">
        <CaseCover
          title={item.title}
          image={item.image}
          url={item.liveUrl}
          sizes={large ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 33vw"}
        />
      </Link>
      <div className="mt-5">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#3FE3FF]">{item.audience}</p>
        <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.03em] text-[#F7FBFF]">{item.title}</h3>
        <p className="mt-2 max-w-xl text-base leading-7 text-[#B7C5D9]">{item.outcome}</p>
        <Link
          href={`/projetos/${item.slug}`}
          className="mt-2 inline-flex min-h-11 items-center text-sm font-bold text-[#F7FBFF] transition hover:text-[#3FE3FF]"
        >
          Ver case
          <ArrowUpRight className="ml-1.5 h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export default function ProjectEditorial() {
  return (
    <section id="trabalhos" className="border-y border-[#243B5A]/45 bg-[#0F1B3D]/20">
      <div className="container-site py-20 md:py-28">
        <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.04em] text-[#F7FBFF] md:text-5xl">
          Trabalhos no ar
        </h2>

        <div className="mt-12 grid gap-x-8 gap-y-14 lg:grid-cols-6">
          {featuredCases.map((item, index) => (
            <CaseCard key={item.slug} item={item} large={index < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
