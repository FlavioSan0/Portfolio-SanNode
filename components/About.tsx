import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="sobre" className="container-site py-20 md:py-28">
      <div className="grid gap-8 border-b border-[#1E3654]/35 pb-16 md:grid-cols-[0.65fr_1.35fr] md:gap-14">
        <Reveal direction="left" duration={650} distance={28}>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
              Sobre
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.045em] text-[#F5FBFF] md:text-4xl">
              Flávio Oliveira
            </h2>
          </div>
        </Reveal>

        <Reveal direction="right" delay={90} duration={650} distance={28}>
          <div className="max-w-2xl space-y-4 text-base leading-8 text-[#A9BDD3]">
            <p>
              Sou designer e desenvolvedor, criador da SanNode. Trabalho entre
              identidade visual, interfaces, desenvolvimento web e automações.
            </p>
            <p>
              Transformo necessidades em soluções digitais claras, responsivas
              e adequadas à rotina de cada projeto.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
