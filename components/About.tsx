export default function About() {
  return (
    <section id="sobre" className="container-site py-20 md:py-28">
      <div className="grid gap-8 border-b border-[#243B5A]/70 pb-16 md:grid-cols-[0.7fr_1.3fr] md:gap-14">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#3FE3FF]">Sobre a San_Node</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#F7FBFF] md:text-5xl">
            Tecnologia aplicada à rotina real.
          </h2>
        </div>

        <div className="max-w-2xl space-y-5 text-base leading-8 text-[#A8B6CC]">
          <p>
            A San_Node trabalha na interseção entre design e desenvolvimento. O foco é entender
            onde a comunicação ou a operação está travando e construir uma solução que faça sentido
            para aquele cenário.
          </p>
          <p>
            Isso pode ser um site para apresentar melhor o negócio, um sistema para centralizar a
            operação ou uma automação para reduzir tarefas manuais. O projeto é conduzido por Flávio
            Oliveira, fundador e desenvolvedor da San_Node.
          </p>
        </div>
      </div>
    </section>
  );
}
