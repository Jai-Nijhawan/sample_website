"use client";

import { useRef, useEffect, ElementType } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

// Fade + rise reveal for blocks of content as they enter the viewport.
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  y = 28,
  className = "",
}: {
  children: React.ReactNode;
  as?: ElementType;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          delay,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 86%" },
        },
      );
    });
    return () => ctx.revert();
  }, [delay, y]);

  return (
    <Tag ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </Tag>
  );
}
