import { steps } from "@/data/home";

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="container-site py-20 md:py-28">
      <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.04em] text-[#F7FBFF] md:text-5xl">
        Como funciona
      </h2>

      <ol className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        <span
          aria-hidden="true"
          className="absolute left-[0.6875rem] top-3 hidden h-0.5 bg-gradient-to-r from-[#3FE3FF] to-[#1E90FF] md:block md:w-[calc(100%-1.5rem)]"
        />
        {steps.map((step, index) => (
          <li key={step.title} className="relative">
            <span
              aria-hidden="true"
              className="relative z-10 grid h-6 w-6 place-items-center rounded-full border-2 border-[#3FE3FF] bg-[#0A1020]"
            >
              <span className="h-2 w-2 rounded-full bg-[#3FE3FF]" />
            </span>
            <p className="mt-5 text-xs font-bold tabular-nums text-[#3FE3FF]">0{index + 1}</p>
            <h3 className="mt-1 text-xl font-extrabold text-[#F7FBFF]">{step.title}</h3>
            <p className="mt-2 max-w-xs text-base leading-7 text-[#B7C5D9]">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
