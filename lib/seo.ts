import type { Metadata } from "next";

import { contact } from "@/data/contact";
import { offers } from "@/data/home";
import type { ProjectCase } from "@/data/project-cases";
import { siteConfig, siteUrl } from "@/data/site";

const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

/** Metadados padrão de uma página de case (título sem duplicar o sufixo do layout). */
export function caseMetadata(project: ProjectCase): Metadata {
  const title = project.seo?.title ?? `${project.title} | Case San_Node`;
  const description = project.seo?.description ?? project.summary;
  const path = `/projetos/${project.slug}`;
  const image = { url: project.coverImage, width: project.coverWidth, height: project.coverHeight, alt: project.title };

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description: project.seo?.openGraphDescription ?? description,
      url: `${siteUrl}${path}`,
      siteName: siteConfig.name,
      type: "article",
      locale: siteConfig.locale,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.seo?.twitterDescription ?? description,
      images: [project.coverImage],
    },
  };
}

/** Dados estruturados da home: empresa/serviço, catálogo de serviços e o site. */
export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": organizationId,
        name: siteConfig.name,
        url: siteUrl,
        description: siteConfig.description,
        logo: { "@type": "ImageObject", url: `${siteUrl}/logo-sannode.png`, width: 1024, height: 1024 },
        image: `${siteUrl}/og-sannode.png`,
        founder: { "@type": "Person", name: siteConfig.founder },
        email: contact.email,
        telephone: "+5584988479869",
        address: { "@type": "PostalAddress", addressLocality: "Natal", addressRegion: "RN", addressCountry: "BR" },
        areaServed: [
          { "@type": "City", name: "Natal" },
          { "@type": "Country", name: "Brasil" },
        ],
        knowsLanguage: "pt-BR",
        sameAs: [contact.instagram, contact.tiktok, contact.github, contact.linkedin],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: "+5584988479869",
          email: contact.email,
          availableLanguage: "pt-BR",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Serviços da San_Node",
          itemListElement: offers.map((offer) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: offer.title, description: offer.description },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: siteConfig.name,
        inLanguage: siteConfig.language,
        publisher: { "@id": organizationId },
      },
    ],
  };
}

/** Dados estruturados de um case: trilha de navegação + o trabalho em si. */
export function caseJsonLd(project: ProjectCase) {
  const url = `${siteUrl}/projetos/${project.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: siteConfig.name, item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Trabalhos", item: `${siteUrl}/#trabalhos` },
          { "@type": "ListItem", position: 3, name: project.title, item: url },
        ],
      },
      {
        "@type": "CreativeWork",
        name: project.title,
        description: project.seo?.description ?? project.summary,
        url,
        image: `${siteUrl}${project.coverImage}`,
        inLanguage: siteConfig.language,
        creator: { "@id": organizationId },
        keywords: project.tags.join(", "),
      },
    ],
  };
}
