import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export type CaseSliderItem = {
  number: string;
  title: string;
  category: string;
  slug: string;
  image: string;
  imageMode?: "brand" | "screen";
  context: string;
  decision: string;
  result: string;
  deliverables: string[];
  liveUrl?: string;
};

type CasesSliderSanNodeProps = {
  projects: CaseSliderItem[];
};

export default function CasesSliderSanNode({
  projects,
}: CasesSliderSanNodeProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <article
          key={project.slug}
          className="group flex min-h-[460px] flex-col overflow-hidden rounded-[2rem] border border-[#1E3654]/70 bg-[#07111F]/78 shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#00D9FF]/70 hover:bg-[#0C1B2E]/88"
        >
          <div className="relative h-[180px] overflow-hidden border-b border-[#1E3654]/45 bg-[#040B14]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(0,217,255,0.14),transparent_36%),linear-gradient(180deg,rgba(7,17,31,0.12),rgba(7,17,31,0.88))]" />

            <Image
              src={project.image}
              alt={`Imagem do projeto ${project.title}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className={[
                "object-cover transition duration-500 group-hover:scale-[1.04]",
                project.imageMode === "brand" ? "p-8 object-contain" : "",
              ].join(" ")}
            />

            <div className="absolute left-4 top-4 z-10 max-w-[calc(100%-2rem)]">
              <span className="inline-flex max-w-full items-center rounded-full border border-white/15 bg-[#040B14]/72 px-3 py-1.5 text-[0.64rem] font-black uppercase tracking-[0.16em] text-white shadow-[0_12px_30px_rgba(0,0,0,0.22)] backdrop-blur">
                <span className="truncate">{project.category}</span>
              </span>
            </div>
          </div>

          <div className="flex flex-1 flex-col p-5">
            <div className="flex flex-1 flex-col">
              <h4 className="text-xl font-black leading-tight tracking-[-0.04em] text-[#F5FBFF]">
                {project.title}
              </h4>

              <p className="mt-4 text-sm leading-7 text-[#A9BDD3] line-clamp-4">
                {project.context}
              </p>

              <div className="mt-4 flex flex-wrap gap-2 border-t border-[#1E3654]/40 pt-4">
                {project.deliverables.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#1E3654]/70 bg-[#10233B]/70 px-3 py-1 text-[0.64rem] font-black uppercase tracking-[0.14em] text-[#A9BDD3]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              <Link
                href={`/projetos/${project.slug}`}
                className={[
                  "inline-flex min-h-11 items-center justify-center rounded-2xl px-4 py-3 text-sm font-bold text-white transition",
                  "bg-[#0B2A5B] hover:bg-[#2563EB]",
                  !project.liveUrl ? "sm:col-span-2" : "",
                ].join(" ")}
              >
                Ver case
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-[#00D9FF]/45 bg-[#00D9FF]/[0.035] px-4 py-3 text-sm font-bold text-[#D9F4FF] transition hover:border-[#00D9FF]/80 hover:bg-[#00D9FF]/[0.08]"
                >
                  Acessar
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              ) : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}