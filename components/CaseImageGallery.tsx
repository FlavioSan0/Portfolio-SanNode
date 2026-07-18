import { Fragment } from "react";

import { ExpandableImage } from "@/components/CaseImageLightbox";
import Reveal from "@/components/Reveal";
import type { ProjectGalleryItem } from "@/data/project-cases";

const layoutClasses = {
  full: "md:col-span-6",
  half: "md:col-span-3",
  third: "md:col-span-2",
};

export default function CaseImageGallery({ items }: { items: ProjectGalleryItem[] }) {
  return (
    <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-6 md:gap-y-20">
      {items.map((item, index) => (
        <Fragment key={item.src}>
          {item.sectionTitle ? (
            <Reveal distance={20} className="pt-6 md:col-span-6 md:pt-10">
              <div className="max-w-4xl border-t border-[#1E3654]/40 pt-12 md:pt-16">
                <h3 className="text-2xl font-black tracking-[-0.04em] text-balance md:text-4xl">
                  {item.sectionTitle}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#7F96AD] text-pretty">
                  {item.sectionDescription}
                </p>
              </div>
            </Reveal>
          ) : null}

          <Reveal
            delay={index * 60}
            distance={24}
            initialScale={0.985}
            className={layoutClasses[item.layout ?? "half"]}
          >
            <figure>
              {item.title || item.description ? (
                <div className="mb-6">
                  {item.title ? (
                    <h3 className="text-xl font-bold tracking-[-0.025em] text-[#F5FBFF] md:text-2xl">
                      {item.title}
                    </h3>
                  ) : null}
                  {item.description ? (
                    <p className="mt-3 text-sm leading-7 text-[#A9BDD3] text-pretty md:text-base">
                      {item.description}
                    </p>
                  ) : null}
                </div>
              ) : null}

              <ExpandableImage
                item={item}
                sizes={
                  item.layout === "full"
                    ? "(max-width: 768px) 100vw, 1200px"
                    : item.layout === "third"
                      ? "(max-width: 768px) 100vw, 33vw"
                      : "(max-width: 768px) 100vw, 50vw"
                }
                className="aspect-video rounded-2xl border border-[#1E3654]/50 bg-[#040B14] shadow-[0_18px_45px_rgba(0,0,0,0.2)]"
              />

              {item.caption ? (
                <figcaption className="mt-3 text-xs leading-6 text-[#7F96AD]">
                  {item.caption}
                </figcaption>
              ) : null}
            </figure>
          </Reveal>
        </Fragment>
      ))}
    </div>
  );
}
