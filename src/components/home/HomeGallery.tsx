"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Lightbox from "@/components/site/Lightbox";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

// The gallery on the home page — twenty-one photographs in a bento grid.
// A six-column grid with fixed row units and designed col/row spans that
// tessellate perfectly (every row sums to six), so all 21 images sit flush
// in the given space with no holes. Dense auto-flow backfills any slack.
export type GalleryImage = { src: string; alt: string };

// span: [phone (2-col grid), desktop (6-col grid)] tile classes.
type Tile = GalleryImage & { span: string };

const tiles: Tile[] = [
  // rows 1–2 — hero + supports (3+2+1 / 3+1+2)
  { src: "/media/gallery/1.jpg", alt: "The Barns at dusk", span: "col-span-2 row-span-2 md:col-span-3 md:row-span-2" },
  { src: "/media/suite-balcony/11.jpg", alt: "A-frame suite, warm light", span: "md:col-span-2" },
  { src: "/media/gallery/16.jpg", alt: "Steps to the terrace", span: "md:col-span-1" },
  { src: "/media/family-attic/2.jpg", alt: "Sunset from a private balcony", span: "md:col-span-1" },
  { src: "/media/mountain-view/2.jpg", alt: "Mountain View Suite at first light", span: "md:col-span-2" },
  // rows 3–4 — tall left + pairs (2+2+2 / 2+2+2)
  { src: "/media/family-attic/11.jpg", alt: "The attic loft beneath the eaves", span: "col-span-2 row-span-2 md:col-span-2 md:row-span-2" },
  { src: "/media/gallery/14.jpg", alt: "The rooftop terrace above the valley", span: "md:col-span-2" },
  { src: "/media/suite-balcony/1.jpg", alt: "Vaulted ceiling, glazed apex", span: "md:col-span-2" },
  { src: "/media/gallery/12.jpg", alt: "Balconies at blue hour", span: "md:col-span-2" },
  { src: "/media/mountain-view/8.jpg", alt: "Dressed for the evening", span: "md:col-span-2" },
  // row 5 (2+1+3)
  { src: "/media/gallery/fb-cover.jpg", alt: "The glass pavilion at nightfall", span: "md:col-span-2" },
  { src: "/media/suite-balcony/7.jpg", alt: "Detail in Kumaoni pine", span: "md:col-span-1" },
  { src: "/media/gallery/9.jpg", alt: "The glass lounge from below", span: "col-span-2 md:col-span-3" },
  // rows 6–7 — hero right (3+1+2 / 3+2+1)
  { src: "/media/gallery/17.jpg", alt: "Bhimtal Lake from above", span: "col-span-2 row-span-2 md:col-span-3 md:row-span-2" },
  { src: "/media/family-attic/3.jpg", alt: "Evening light through curtains", span: "md:col-span-1" },
  { src: "/media/mountain-view/11.jpg", alt: "A quiet corner with a view", span: "md:col-span-2" },
  { src: "/media/gallery/8.jpg", alt: "Gables against the evening sky", span: "md:col-span-2" },
  { src: "/media/gallery/15.jpg", alt: "The hills beyond the railing", span: "md:col-span-1" },
  // row 8 (2+2+2)
  { src: "/media/gallery/7.jpg", alt: "The terraces at golden hour", span: "md:col-span-2" },
  { src: "/media/mountain-view/5.jpg", alt: "The window wall at dawn", span: "md:col-span-2" },
  { src: "/media/gallery/19.jpg", alt: "Under a clear night sky", span: "md:col-span-2" },
];

export default function HomeGallery() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !rootRef.current) return;
    const ctx = gsap.context(() => {
      ScrollTrigger.batch(rootRef.current!.querySelectorAll("[data-tile]"), {
        start: "top 90%",
        once: true,
        onEnter: (els) => {
          gsap.fromTo(
            els,
            { opacity: 0, scale: 0.96, y: 24 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.07,
              ease: "power3.out",
            },
          );
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" className="bg-sand py-[clamp(6rem,14vh,12rem)]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-10">
          <div>
            <p className="eyebrow">06 — The Gallery</p>
            <h2 className="font-display display-lg mt-5 text-ink">
              Twenty-one <span className="font-display-italic">views</span>
            </h2>
          </div>
          <p className="subhead max-w-[34ch] text-ink/75">
            Every photograph is our own — the place exactly as you'll find it.
          </p>
        </div>

        <Lightbox images={tiles.map((t) => t.src)}>
          {(open) => (
            <div
              ref={rootRef}
              className="mt-12 grid grid-flow-dense grid-cols-2 auto-rows-[150px] gap-2.5 sm:auto-rows-[170px] sm:gap-3 md:grid-cols-6 lg:auto-rows-[200px] lg:gap-3.5"
            >
              {tiles.map((t, i) => (
                <button
                  key={t.src}
                  type="button"
                  data-tile
                  data-cursor="View"
                  onClick={() => open(i)}
                  aria-label={`Open photograph ${i + 1}: ${t.alt}`}
                  className={`group relative block w-full overflow-hidden rounded-[2px] ${t.span}`}
                  style={{ opacity: 0 }}
                >
                  <Image
                    src={t.src}
                    alt={t.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-espresso/55 to-transparent p-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="text-[0.62rem] uppercase tracking-[0.18em] text-cream">
                      № {String(i + 1).padStart(2, "0")} — {t.alt}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          )}
        </Lightbox>
      </div>
    </section>
  );
}
