import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
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
    "Portfólio da SanNode: identidade visual, sites, sistemas web, interfaces e automações com Google Workspace.",

  keywords: [
    "SanNode",
    "Flávio Santos",
    "portfólio",
    "design",
    "programação",
    "automação",
    "sites",
    "sistemas web",
    "identidade visual",
    "Google Workspace",
    "Apps Script",
  ],

  authors: [
    {
      name: "Flávio Santos",
    },
  ],

  creator: "Flávio Santos",

  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "SanNode | Design, Programação e Automação",
    description:
      "Portfólio de projetos digitais, identidades visuais, sistemas web e automações.",
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
      "Portfólio de projetos digitais, identidades visuais, sistemas web e automações.",
    images: ["/og-sannode.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}