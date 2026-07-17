import Image from "next/image";

export default function ProfileCard() {
  return (
    <article className="relative mx-auto w-full max-w-[360px]">
      <div className="relative overflow-hidden rounded-[2rem] border border-[#1E3654]/60 bg-[#07111F]/68 p-6 backdrop-blur-xl">
        <div className="relative flex flex-col items-center text-center">
          <div className="relative h-28 w-28 overflow-hidden rounded-full border border-[#00D9FF]/30 bg-[#07111F]">
            <Image
              src="/flavio-profile.png"
              alt="Flávio Oliveira, criador da SanNode"
              fill
              priority
              sizes="112px"
              className="object-cover object-center"
            />
          </div>

          <div className="mt-5">
            <h3 className="text-2xl font-black tracking-tight text-[#F5FBFF]">
              Flávio Oliveira
            </h3>
            <p className="mt-2 text-sm font-semibold text-[#74C7FF]">
              Designer e desenvolvedor
            </p>
            <p className="mx-auto mt-4 max-w-[280px] text-sm leading-6 text-[#A9BDD3]">
              Crio soluções digitais claras, funcionais e prontas para o uso.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
