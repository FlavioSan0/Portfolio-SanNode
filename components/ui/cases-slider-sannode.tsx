import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export type CaseSliderItem = {
  title: string;
  category: string;
  slug: string;
  coverImage: string;
  imageMode?: "brand" | "screen";
  summary: string;
  stack: string[];
};

type CasesSliderSanNodeProps = {
  projects: CaseSliderItem[];
};

export default function CasesSliderSanNode({
  projects,
}: CasesSliderSanNodeProps) {
  return (
    <div className="grid gap-6 overflow-visible sm:grid-cols-2 lg:gap-8 xl:grid-cols-3">
      {projects.map((project, index) => (
        <Reveal
          key={project.slug}
          stagger={90}
          index={index}
          duration={650}
          distance={26}
          initialScale={0.98}
        >
          <div className="px-2 sm:px-3 lg:px-4">
            <article className="group flex min-w-0 flex-col rounded-2xl border border-[#1E3654]/20 transition-[transform,border-color,box-shadow,opacity] duration-300 active:border-[#00D9FF]/30 active:opacity-95 [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-1.5 [@media(hover:hover)_and_(pointer:fine)]:hover:border-[#00D9FF]/30 [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_18px_50px_rgba(0,217,255,0.07)]">
            <Link
              href={`/projetos/${project.slug}`}
              className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[#1E3654]/25 bg-[#07111F] transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00D9FF] [@media(hover:hover)_and_(pointer:fine)]:group-hover:border-[#00D9FF]/35"
              aria-label={`Ver case ${project.title}`}
            >
              <Image
                src={project.coverImage}
                alt={`Imagem do projeto ${project.title}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className={[
                  "object-cover transition-transform duration-300 [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-[1.03]",
                  project.imageMode === "brand" ? "p-8 object-contain" : "",
                ].join(" ")}
              />
            </Link>

            <div className="flex flex-1 flex-col px-6 pb-7 pt-6 sm:px-7 sm:pb-8 sm:pt-7 lg:px-8 lg:pb-9">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00D9FF]">
                {project.category}
              </p>
              <h4 className="mt-2 text-xl font-black leading-tight tracking-[-0.035em] text-[#F5FBFF]">
                {project.title}
              </h4>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#A9BDD3]">
                {project.summary}
              </p>

              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-[#7F96AD]">
                {project.stack.slice(0, 3).map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <Link
                href={`/projetos/${project.slug}`}
                className="mt-5 inline-flex min-h-11 w-fit items-center py-2 text-sm font-bold text-[#D9F4FF] transition hover:text-[#00D9FF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00D9FF]"
              >
                Ver case
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            </article>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
