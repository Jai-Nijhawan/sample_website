"use client";

import { useRef, useEffect, ElementType } from "react";
import { gsap, SplitText, prefersReducedMotion } from "@/lib/gsap";

// Line-by-line masked reveal for headlines. Splits into lines and lifts each
// from a clipped baseline — the signature luxury headline motion.
export default function TextReveal({
  children,
  as: Tag = "h2",
  className = "",
  delay = 0,
  start = "top 85%",
}: {
  children: React.ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  start?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      gsap.set(el, { opacity: 1 });
      return;
    }

    let split: SplitText | null = null;
    const ctx = gsap.context(() => {
      gsap.set(el, { opacity: 1 });
      split = new SplitText(el, {
        type: "lines",
        linesClass: "split-line",
      });
      // Wrap each line in an overflow-hidden mask.
      split.lines.forEach((line) => {
        const wrap = document.createElement("span");
        wrap.style.display = "block";
        wrap.style.overflow = "hidden";
        line.parentNode?.insertBefore(wrap, line);
        wrap.appendChild(line);
      });
      gsap.from(split.lines, {
        yPercent: 115,
        duration: 1.1,
        delay,
        ease: "power4.out",
        stagger: 0.09,
        scrollTrigger: { trigger: el, start },
      });
    }, ref);

    return () => {
      split?.revert();
      ctx.revert();
    };
  }, [delay, start]);

  return (
    <Tag ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </Tag>
  );
}
