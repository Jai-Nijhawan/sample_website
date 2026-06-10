"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

// Image inside an overflow-hidden frame that wipes open (clip-path) while the
// inner image settles from a gentle scale. Optional slow parallax drift.
export default function RevealImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  sizes = "100vw",
  priority = false,
  parallax = false,
  rounded = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  parallax?: boolean;
  rounded?: boolean;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const img = imgRef.current;
    if (!frame || !img) return;
    if (prefersReducedMotion()) {
      gsap.set(frame, { clipPath: "inset(0% 0% 0% 0%)" });
      gsap.set(img, { scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        frame,
        { clipPath: "inset(0% 0% 100% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.3,
          ease: "power3.out",
          scrollTrigger: { trigger: frame, start: "top 88%" },
        },
      );
      gsap.fromTo(
        img,
        { scale: 1.16 },
        {
          scale: 1,
          duration: 1.6,
          ease: "power3.out",
          scrollTrigger: { trigger: frame, start: "top 88%" },
        },
      );
      if (parallax) {
        gsap.fromTo(
          img,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: frame,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }
    });
    return () => ctx.revert();
  }, [parallax]);

  return (
    <div
      ref={frameRef}
      className={`img-frame relative ${rounded ? "rounded-[2px]" : ""} ${className}`}
    >
      <div ref={imgRef} className="absolute inset-0 h-full w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${imgClassName}`}
        />
      </div>
    </div>
  );
}
