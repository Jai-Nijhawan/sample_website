"use client";

import { useRef, useEffect } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import Reserve from "@/components/site/Reserve";

// Full-bleed video hero. The resort's own dusk footage, a centred serif
// wordmark, and a gentle parallax drift as the guest begins to scroll.
export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Some browsers stall muted autoplay; nudge it on mount and on first touch.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
    window.addEventListener("touchstart", tryPlay, { once: true });
    window.addEventListener("click", tryPlay, { once: true });
    return () => {
      window.removeEventListener("touchstart", tryPlay);
      window.removeEventListener("click", tryPlay);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const items = contentRef.current?.querySelectorAll("[data-h]");
      if (items)
        gsap.from(items, {
          yPercent: 120,
          opacity: 0,
          duration: 1.3,
          ease: "power4.out",
          stagger: 0.13,
          delay: 0.35,
        });
      gsap.to(videoWrapRef.current, {
        yPercent: 18,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(contentRef.current, {
        opacity: 0,
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "60% top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-espresso"
    >
      <div ref={videoWrapRef} className="absolute inset-0 scale-105">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/media/gallery/1.jpg"
          className="h-full w-full object-cover"
        >
          <source src="/media/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/55 via-espresso/15 to-espresso/75" />
      </div>

      <div className="relative flex h-full flex-col items-center justify-center px-5 text-center text-cream">
        <div ref={contentRef} className="flex flex-col items-center">
          <div className="overflow-hidden">
            <p data-h className="eyebrow text-bronze-soft">
              Bhimtal · Kumaon Hills · Uttarakhand
            </p>
          </div>
          <h1 className="mt-6 font-display leading-[0.95]">
            <span className="block overflow-hidden">
              <span data-h className="display-hero block">
                Raw &amp; Luxury,
              </span>
            </span>
            <span className="block overflow-hidden">
              <span data-h className="display-hero font-display-italic block">
                above the lake
              </span>
            </span>
          </h1>
          <div className="overflow-hidden">
            <p
              data-h
              className="subhead measure-sm mt-7 text-cream/85"
            >
              A boutique resort of twelve barn-style suites, terraced into the
              hillside with the whole of Bhimtal at your feet.
            </p>
          </div>
          <div
            data-h
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Reserve variant="cream" />
            <a
              href="/suites"
              className="text-[0.78rem] uppercase tracking-[0.18em] text-cream/80 link-underline"
            >
              View the suites
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-cream/60 sm:flex">
          <span className="text-[0.66rem] uppercase tracking-[0.28em]">
            Scroll
          </span>
          <span className="h-12 w-px bg-cream/40" />
        </div>
      </div>
    </section>
  );
}
