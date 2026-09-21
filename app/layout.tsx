import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";

import AnimatedSiteBackground from "@/components/AnimatedSiteBackground";
import { contact } from "@/data/contact";
import { siteConfig, siteUrl } from "@/data/site";
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
    "Next.js",
    "React",
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
  icons: {
    icon: [
      { url: "/logo-sannode.png", type: "image/png", sizes: "32x32" },
      { url: "/logo-sannode.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/logo-sannode.png",
    apple: [
      { url: "/logo-sannode.png", type: "image/png", sizes: "180x180" },
    ],
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteUrl,
  description: siteConfig.description,
  founder: {
    "@type": "Person",
    name: siteConfig.founder,
  },
  sameAs: [contact.instagram, contact.github, contact.linkedin],
  email: contact.email,
  telephone: contact.phoneDisplay,
  areaServed: "Brasil",
  serviceType: [
    "Desenvolvimento de sites",
    "Desenvolvimento de sistemas web",
    "Automação de processos",
    "Identidade e presença digital",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang={siteConfig.language}>
      <body className={`${oxanium.variable} bg-[var(--background)] text-[var(--text-main)]`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <AnimatedSiteBackground />
        <div className="relative z-10 min-h-screen">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
