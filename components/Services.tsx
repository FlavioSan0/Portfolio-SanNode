import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="servicos" className="border-y border-[#1E3654] bg-[#091728]">
      <div className="container-site py-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
              O que eu faço
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-[#F5FBFF] md:text-5xl">
              Soluções digitais sem excesso visual.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-[#A9BDD3]">
            A SanNode conecta design, desenvolvimento e automação para entregar
            projetos claros, organizados e úteis.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-3xl border border-[#1E3654] bg-[#0C1B2E] p-6 text-[#F5FBFF] transition hover:-translate-y-1 hover:border-[#00D9FF]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#10233B] text-[#00D9FF]">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-xl font-bold">{service.title}</h3>

                <p className="mt-3 text-sm leading-6 text-[#A9BDD3]">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}   