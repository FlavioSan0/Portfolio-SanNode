const fronts = [
  {
    title: "Presença digital",
    description:
      "Sites, landing pages, identidade e interfaces para apresentar o negócio com clareza e facilitar o contato com o cliente.",
  },
  {
    title: "Sistemas sob medida",
    description:
      "Ferramentas para centralizar atendimento, operação, estoque, financeiro, agendamentos e outros processos que hoje ficam espalhados.",
  },
  {
    title: "Automação e integração",
    description:
      "Fluxos que reduzem tarefa repetitiva e conectam ferramentas, planilhas, formulários, WhatsApp e rotinas internas.",
  },
];

export default function WorkFronts() {
  return (
    <section id="servicos" className="relative border-y border-[#243B5A]/55 bg-[#0F1B3D]/26">
      <div className="container-site py-18 md:py-24">
        <div className="grid gap-8 md:grid-cols-[0.72fr_1.28fr] md:gap-14">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#3FE3FF]">Soluções</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#F7FBFF] md:text-5xl">
              Da presença digital à rotina interna.
            </h2>
          </div>

          <div className="divide-y divide-[#243B5A]/70 border-y border-[#243B5A]/70">
            {fronts.map((front, index) => (
              <article key={front.title} className="grid gap-3 py-6 sm:grid-cols-[2.2rem_0.55fr_1fr] sm:gap-5">
                <span className="text-xs font-bold tabular-nums text-[#3FE3FF]">0{index + 1}</span>
                <h3 className="text-lg font-bold text-[#F7FBFF]">{front.title}</h3>
                <p className="text-sm leading-6 text-[#A8B6CC]">{front.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
