import { MessageCircle } from "lucide-react";

import { whatsappLink } from "@/data/contact";
import { primaryButton } from "@/lib/ui";

type CaseCTAProps = {
  title: string;
  message: string;
  label?: string;
};

export default function CaseCTA({ title, message, label = "Pedir um projeto assim" }: CaseCTAProps) {
  return (
    <section className="container-site pb-16 md:pb-24">
      <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-[#3FE3FF]/25 bg-[linear-gradient(135deg,#0B2A5B,#0F1B3D)] p-8 md:flex-row md:items-center md:p-12">
        <h2 className="max-w-xl text-2xl font-extrabold leading-tight tracking-[-0.03em] text-white text-balance md:text-4xl">
          {title}
        </h2>
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noreferrer"
          className={`${primaryButton} w-full shrink-0 md:w-auto`}
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          {label}
        </a>
      </div>
    </section>
  );
}
