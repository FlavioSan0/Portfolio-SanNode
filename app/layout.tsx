import type { Metadata, Viewport } from "next";
import { Oxanium } from "next/font/google";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";

import AnimatedSiteBackground from "@/components/AnimatedSiteBackground";
import JsonLd from "@/components/JsonLd";
import SanNodeIntro from "@/components/SanNodeIntro";
import { contact } from "@/data/contact";
import { siteConfig, siteUrl } from "@/data/site";
import { siteJsonLd } from "@/lib/seo";
import "./globals.css";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-oxanium",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "San_Node",
    "SanNode",
    "sites profissionais",
    "landing pages",
    "sistemas web",
    "automação de processos",
    "desenvolvimento sob medida",
    "identidade visual",
    "criação de sites em Natal",
    "sistema de gestão sob medida",
    "site para empresa",
    "Natal RN",
  ],
  authors: [{ name: siteConfig.founder }],
  creator: siteConfig.founder,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-sannode.png",
        width: 1200,
        height: 630,
        alt: "San_Node — sites, sistemas e automações",
      },
    ],
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/og-sannode.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1020",
  colorScheme: "dark",
};

/**
 * Roda antes da primeira pintura: marca o <html> quando a abertura deve tocar
 * (primeira visita da sessão, e não para robôs). Sem isso a abertura piscaria em toda recarga.
 */
const introGate = `try{if(!sessionStorage.getItem("sannode-intro-seen")&&!navigator.webdriver&&!/bot|crawl|spider|lighthouse|pagespeed/i.test(navigator.userAgent)){document.documentElement.setAttribute("data-intro","1")}}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang={siteConfig.language} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introGate }} />
      </head>
      <body className={`${oxanium.variable} bg-[var(--background)] text-[var(--text-main)]`}>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-lg focus:bg-[#3FE3FF] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-[#06101F]"
        >
          Pular para o conteúdo
        </a>
        <JsonLd data={siteJsonLd()} />
        <SanNodeIntro />
        <AnimatedSiteBackground />
        <div className="relative z-10 min-h-screen">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
