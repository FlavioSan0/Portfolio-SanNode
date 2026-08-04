import Reveal from "@/components/Reveal";
import Tech3DDecor from "@/components/Tech3DDecor";

const fronts = [
  {
    title: "Visual",
    description: "Identidade, interfaces e materiais digitais.",
  },
  {
    title: "Web",
    description: "Sites, landing pages e experiências responsivas.",
  },
  {
    title: "Sistemas e automações",
    description: "Dashboards, sistemas internos e otimização de processos.",
  },
];

export default function WorkFronts() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden border-y border-[#1E3654]/25"
    >
      <Tech3DDecor
        variant="orbital"
        className="-right-14 top-1/2 hidden h-56 w-56 -translate-y-1/2 opacity-[0.45] md:grid lg:right-[2%]"
      />

      <div className="container-site relative z-10 py-16 md:py-20">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
            Frentes de trabalho
          </p>
        </Reveal>

        <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-0">
          {fronts.map((front, index) => {
            return (
              <Reveal
                key={front.title}
                stagger={90}
                index={index}
                duration={600}
                distance={24}
              >
                <article className="border-l border-[#1E3654]/35 pl-5 md:min-h-28 md:px-7">
                  <h2 className="text-xl font-black text-[#F5FBFF]">
                    {front.title}
                  </h2>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-[#A9BDD3]">
                    {front.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
