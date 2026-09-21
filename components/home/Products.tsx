const products = [
  {
    name: "OficinaNode",
    description:
      "Gestão para oficinas de carro e moto, reunindo ordem de serviço, financeiro, estoque, clientes, veículos e rotina operacional.",
    status: "Produto próprio em evolução",
  },
  {
    name: "AgendaNode",
    description:
      "Agendamento online para negócios de atendimento, com serviços, profissionais, disponibilidade e comunicação integrada.",
    status: "Produto próprio em evolução",
  },
  {
    name: "MesaFlow",
    description:
      "Pedidos e gestão para alimentação, evoluindo para ficha técnica, precificação, estoque e visão financeira do estabelecimento.",
    status: "Produto próprio em evolução",
  },
] as const;

export default function Products() {
  return (
    <section id="produtos" className="container-site py-20 md:py-28">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#3FE3FF]">Produtos</p>
        <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#F7FBFF] md:text-5xl">
          Soluções que nasceram de problemas reais de operação.
        </h2>
        <p className="mt-5 text-base leading-8 text-[#A8B6CC]">
          Além dos projetos sob medida, a San_Node mantém produtos próprios que são
          testados, ajustados e ampliados a partir do uso em cenários reais.
        </p>
      </div>

      <div className="mt-12 divide-y divide-[#243B5A]/70 border-y border-[#243B5A]/70">
        {products.map((product, index) => (
          <article key={product.name} className="grid gap-4 py-7 md:grid-cols-[4rem_0.55fr_1fr_auto] md:items-start md:gap-6">
            <span className="text-xs font-bold tabular-nums text-[#3FE3FF]">0{index + 1}</span>
            <h3 className="text-xl font-extrabold text-[#F7FBFF]">{product.name}</h3>
            <p className="text-sm leading-7 text-[#A8B6CC]">{product.description}</p>
            <span className="w-fit rounded-full border border-[#3FE3FF]/25 bg-[#3FE3FF]/6 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#9DEEFF]">
              {product.status}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
