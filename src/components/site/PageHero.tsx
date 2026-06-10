"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

// Full-bleed image hero for inner pages. Dark image so the transparent nav
// reads in cream. Title rises on load; the image drifts gently on scroll.
export default function PageHero({
  eyebrow,
  title,
  italicWord,
  intro,
  image,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  italicWord?: string;
  intro?: string;
  image: string;
  align?: "center" | "left";
}) {
  const imgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const items = contentRef.current?.querySelectorAll("[data-stagger]");
      if (items)
        gsap.from(items, {
          yPercent: 110,
          opacity: 0,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.12,
          delay: 0.2,
        });
      gsap.to(imgRef.current, {
        yPercent: 14,
        ease: "none",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative flex h-[82vh] min-h-[560px] items-end overflow-hidden bg-espresso">
      <div ref={imgRef} className="absolute inset-0 -z-0 scale-110">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/25 to-espresso/40" />
      </div>

      <div
        className={`relative mx-auto w-full max-w-[1440px] px-5 pb-16 sm:px-8 sm:pb-24 ${
          align === "center" ? "text-center" : "text-left"
        }`}
      >
        <div
          ref={contentRef}
          className={align === "center" ? "mx-auto" : ""}
        >
          <div className="overflow-hidden">
            <p data-stagger className="eyebrow text-bronze-soft">
              {eyebrow}
            </p>
          </div>
          <h1
            className={`font-display display-xl mt-5 text-cream ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            <span className="block overflow-hidden">
              <span data-stagger className="block">
                {title}{" "}
                {italicWord && (
                  <span className="font-display-italic">{italicWord}</span>
                )}
              </span>
            </span>
          </h1>
          {intro && (
            <div className="overflow-hidden">
              <p
                data-stagger
                className={`subhead measure mt-6 text-cream/85 ${
                  align === "center" ? "mx-auto" : ""
                }`}
              >
                {intro}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
