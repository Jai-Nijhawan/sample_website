"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { suites } from "@/lib/suites";
import { inrFormatter } from "@/lib/booking";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

// Pinned horizontal showcase of the three suites (desktop). The section pins
// and the track translates sideways as the guest scrolls. On small screens or
// with reduced motion it falls back to a clean vertical stack.
export default function SuitesShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const distance = track.scrollWidth - window.innerWidth;
      const tween = gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance + window.innerHeight * 0.4}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
      return () => {
        tween.kill();
      };
    });

    return () => mm.revert();
  }, []);

  const reduced =
    typeof window !== "undefined" ? prefersReducedMotion() : false;

  return (
    <section className="bg-espresso text-cream">
      {/* Heading */}
      <div className="mx-auto max-w-[1320px] px-5 pt-[clamp(5rem,12vh,9rem)] sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line-cream pb-10">
          <div>
            <p className="eyebrow text-bronze-soft">02 — The Suites</p>
            <h2 className="font-display display-lg mt-5 max-w-[16ch]">
              Twelve rooms, each with
              <span className="font-display-italic"> its own sky</span>
            </h2>
          </div>
          <p className="subhead measure-sm text-cream/80">
            Three characters of room, every one with a private balcony and a
            view worth waking for. Drag or scroll to explore.
          </p>
        </div>
      </div>

      {/* Desktop: pinned horizontal. Mobile/reduced: vertical stack. */}
      <div
        ref={sectionRef}
        className={
          reduced ? "" : "lg:h-[100svh] lg:overflow-hidden"
        }
      >
        <div
          ref={trackRef}
          className="flex flex-col gap-5 px-5 py-12 sm:px-8 lg:h-full lg:flex-row lg:items-center lg:gap-8 lg:py-0 lg:pr-[12vw]"
          data-cursor="View"
        >
          {suites.map((s) => (
            <Link
              key={s.slug}
              href={`/suites/${s.slug}`}
              className="group relative block shrink-0 overflow-hidden lg:h-[68vh] lg:w-[clamp(380px,42vw,620px)]"
            >
              <div className="img-frame relative aspect-[4/5] w-full lg:h-full lg:aspect-auto">
                <Image
                  src={s.hero}
                  alt={s.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-espresso/10" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-7">
                <div>
                  <p className="text-[0.74rem] uppercase tracking-[0.2em] text-bronze-soft">
                    {s.index} — {s.tagline}
                  </p>
                  <h3 className="font-display display-md mt-2 text-cream">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-[0.82rem] text-cream/70">
                    From {inrFormatter.format(s.fromINR)} / night
                  </p>
                </div>
                <span className="mb-1 shrink-0 text-[0.74rem] uppercase tracking-[0.16em] text-cream/80 link-underline">
                  Discover →
                </span>
              </div>
            </Link>
          ))}

          {/* Tail card → all suites */}
          <Link
            href="/suites"
            className="flex shrink-0 items-center justify-center border border-line-cream px-12 py-16 lg:h-[68vh] lg:w-[34vw]"
          >
            <span className="text-center">
              <span className="font-display display-md block">
                All suites &amp; rates
              </span>
              <span className="mt-3 block text-[0.78rem] uppercase tracking-[0.18em] text-bronze-soft">
                Explore →
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
