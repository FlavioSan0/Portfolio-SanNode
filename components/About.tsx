import Image from "next/image";

import { about } from "@/data/home";

export default function About() {
  return (
    <section id="sobre" className="band-light">
      <div className="container-site py-20 md:py-28">
      <div className="grid items-center gap-10 rounded-3xl border border-[#D6E2F0] bg-white p-7 shadow-[0_14px_36px_rgba(10,16,32,0.07)] md:grid-cols-[auto_1fr] md:gap-12 md:p-10">
        <div className="relative h-40 w-40 overflow-hidden rounded-2xl border border-[#D6E2F0] md:h-52 md:w-52">
          <Image
            src="/flavio-profile.png"
            alt="Flávio Oliveira, fundador da San_Node"
            fill
            sizes="208px"
            className="object-cover object-top"
          />
        </div>
        <div>
          <h2 className="max-w-2xl text-2xl font-extrabold leading-tight tracking-[-0.03em] text-[#0A1020] md:text-4xl">
            {about.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#3D4F6B]">{about.text}</p>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-[#0A6FD6]">
            {about.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
}
