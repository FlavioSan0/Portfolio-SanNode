import { MessageCircle } from "lucide-react";

import { contact } from "@/data/contact";

/** Botão fixo de WhatsApp, só no celular (no desktop o CTA fica no header). */
export default function WhatsAppFloat() {
  return (
    <a
      href={contact.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex min-h-12 items-center gap-2 rounded-full bg-gradient-to-r from-[#3FE3FF] to-[#1E90FF] px-5 py-3 text-sm font-extrabold text-[#06101F] shadow-[0_12px_35px_rgba(0,0,0,0.4)] lg:hidden"
    >
      <MessageCircle className="h-5 w-5" />
      WhatsApp
    </a>
  );
}
