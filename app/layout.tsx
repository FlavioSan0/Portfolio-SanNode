import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import AnimatedSiteBackground from "@/components/AnimatedSiteBackground";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://san-node.vercel.app"),

  title: {
    default: "SanNode | Design, Programação e Automação",
    template: "%s | SanNode",
  },

  description:
    "Portfólio da SanNode: identidade visual, sites, sistemas web, interfaces, landing pages e automações com Google Workspace.",

  keywords: [
    "SanNode",
    "Flávio Oliveira",
    "portfólio",
    "design",
    "programação",
    "automação",
    "sites",
    "sistemas web",
    "identidade visual",
    "UI UX",
    "landing page",
    "Google Workspace",
    "Apps Script",
  ],

  authors: [
    {
      name: "Flávio Oliveira",
    },
  ],

  creator: "Flávio Oliveira",

  icons: {
    icon: [
      {
        url: "/logo-sannode.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/logo-sannode.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    shortcut: "/logo-sannode.png",
    apple: [
      {
        url: "/logo-sannode.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },

  openGraph: {
    title: "SanNode | Design, Programação e Automação",
    description:
      "Portfólio de projetos digitais, identidades visuais, landing pages, sistemas web e automações.",
    url: "https://san-node.vercel.app",
    siteName: "SanNode",
    images: [
      {
        url: "/og-sannode.png",
        width: 1200,
        height: 630,
        alt: "SanNode - Design, Programação e Automação",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SanNode | Design, Programação e Automação",
    description:
      "Portfólio de projetos digitais, identidades visuais, landing pages, sistemas web e automações.",
    images: ["/og-sannode.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-[#040B14] text-[#F5FBFF]">
        <AnimatedSiteBackground />

        <div className="relative z-10 min-h-screen">{children}</div>

        <Analytics />
      </body>
    </html>
  );
}