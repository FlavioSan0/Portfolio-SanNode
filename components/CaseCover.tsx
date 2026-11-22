import Image from "next/image";

type CaseCoverProps = {
  title: string;
  image?: string;
  url?: string;
  sizes?: string;
};

function hostOf(url?: string) {
  if (!url) return "";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

/** Capa padrão dos cases: moldura de navegador com print em desktop. */
export default function CaseCover({ title, image, url, sizes = "(max-width: 768px) 100vw, 50vw" }: CaseCoverProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-[#243B5A] bg-[#0A1020]">
      <div className="flex items-center gap-1.5 border-b border-[#243B5A] bg-[#0F1B3D] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#3B5270]" />
        <span className="h-2 w-2 rounded-full bg-[#3B5270]" />
        <span className="h-2 w-2 rounded-full bg-[#3B5270]" />
        <span className="ml-2 truncate text-[0.68rem] font-semibold text-[#7F93AD]">{hostOf(url)}</span>
      </div>
      <div className="relative aspect-[16/10]">
        {image ? (
          <Image
            src={image}
            alt={`Site ${title} em versão desktop`}
            fill
            sizes={sizes}
            className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="grid h-full place-items-center bg-[radial-gradient(circle_at_30%_20%,rgba(63,227,255,0.14),transparent_55%)] px-6 text-center">
            <p className="text-2xl font-extrabold tracking-[-0.03em] text-[#F7FBFF] md:text-3xl">{title}</p>
          </div>
        )}
      </div>
    </div>
  );
}
