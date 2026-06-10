"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

// First-visit preloader: a counter rises while the wordmark masks in, then the
// whole curtain lifts to reveal the hero. Runs once per browser session.
export default function Preloader() {
  const [show, setShow] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const markRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("barns-preloaded");
    if (seen || prefersReducedMotion()) {
      setShow(false);
      return;
    }
    sessionStorage.setItem("barns-preloaded", "1");
    document.documentElement.classList.add("lenis-stopped");

    const ctx = gsap.context(() => {
      const counter = { v: 0 };
      const tl = gsap.timeline({
        onComplete: () => {
          document.documentElement.classList.remove("lenis-stopped");
          ScrollTrigger.refresh();
          setShow(false);
        },
      });
      tl.to(counter, {
        v: 100,
        duration: 1.5,
        ease: "power2.inOut",
        onUpdate: () => {
          if (countRef.current)
            countRef.current.textContent = String(Math.round(counter.v));
        },
      });
      tl.from(
        markRef.current,
        { yPercent: 120, duration: 1.1, ease: "power4.out" },
        0.2,
      );
      tl.to({}, { duration: 0.2 });
      tl.to(rootRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut",
      });
    });

    return () => {
      document.documentElement.classList.remove("lenis-stopped");
      ctx.revert();
    };
  }, []);

  if (!show) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-espresso text-cream"
    >
      <div className="overflow-hidden">
        <div ref={markRef} className="flex flex-col items-center">
          <span className="eyebrow text-bronze-soft">Est. Bhimtal</span>
          <span className="font-display mt-3 text-[clamp(2.6rem,8vw,5rem)] leading-none">
            The Barns
          </span>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-between px-6 text-[0.72rem] uppercase tracking-[0.2em] text-cream/55 sm:px-10">
        <span>Raw &amp; Luxury</span>
        <span>
          <span ref={countRef}>0</span> %
        </span>
      </div>
    </div>
  );
}
