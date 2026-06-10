"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { reviews } from "@/lib/reviews";
import { site } from "@/lib/site";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

// All reviews visible at once — a featured pull-quote beside a stacked column
// of guest cards, each with the reviewer's photo. Editorial, not card-soup:
// hairline rules, serif quotes, quiet metadata.
function Stars({ count }: { count: number }) {
  return (
    <span
      className="text-[0.7rem] tracking-[0.3em] text-bronze"
      aria-label={`${count} out of 5 stars`}
    >
      {"★".repeat(count)}
    </span>
  );
}

export default function Reviews() {
  const gridRef = useRef<HTMLDivElement>(null);

  const featured = reviews.find((r) => r.featured) ?? reviews[0];
  const rest = reviews.filter((r) => r !== featured);

  useEffect(() => {
    if (prefersReducedMotion() || !gridRef.current) return;
    const ctx = gsap.context(() => {
      const cards = gridRef.current!.querySelectorAll("[data-review]");
      gsap.from(cards, {
        opacity: 0,
        y: 34,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-sand-deep py-[clamp(6rem,14vh,12rem)]">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-10">
          <div>
            <p className="eyebrow">05 — In Their Words</p>
            <h2 className="font-display display-lg mt-5 text-ink">
              Guests keep <span className="font-display-italic">returning</span>
            </h2>
          </div>
          <p className="text-[0.86rem] tracking-wide text-stone">
            Rated <span className="text-ink">{site.rating.value} ★</span> across{" "}
            {site.rating.count}+ reviews on {site.rating.source}
          </p>
        </div>

        <div
          ref={gridRef}
          className="mt-12 grid gap-x-14 gap-y-10 lg:grid-cols-12"
        >
          {/* Featured quote */}
          <figure
            data-review
            className="lg:col-span-6 lg:sticky lg:top-28 lg:self-start"
          >
            <Stars count={featured.rating} />
            <blockquote className="font-display mt-5 text-[clamp(1.5rem,2.8vw,2.3rem)] leading-[1.22] text-ink">
              “{featured.quote}”
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-4">
              <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={featured.avatar}
                  alt={featured.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </span>
              <span>
                <span className="block text-[0.95rem] font-medium text-ink">
                  {featured.name}
                </span>
                <span className="mt-0.5 block text-[0.74rem] uppercase tracking-[0.16em] text-stone">
                  {featured.context} · {featured.source}
                </span>
              </span>
            </figcaption>
          </figure>

          {/* Stacked cards */}
          <div className="lg:col-span-6">
            {rest.map((r) => (
              <figure
                key={r.name}
                data-review
                className="border-t border-line py-8 first:border-t-0 first:pt-0"
              >
                <div className="flex items-start gap-5">
                  <span className="relative mt-1 h-12 w-12 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={r.avatar}
                      alt={r.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </span>
                  <div>
                    <Stars count={r.rating} />
                    <blockquote className="font-serif mt-2 text-[1.18rem] leading-[1.5] text-ink/90">
                      “{r.quote}”
                    </blockquote>
                    <figcaption className="mt-3 text-[0.74rem] uppercase tracking-[0.16em] text-stone">
                      <span className="font-medium normal-case tracking-normal text-ink text-[0.88rem]">
                        {r.name}
                      </span>{" "}
                      · {r.context} · {r.source}
                    </figcaption>
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
