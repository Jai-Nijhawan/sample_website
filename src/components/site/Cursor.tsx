"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

// A small bronze dot that trails the pointer and grows to a label over
// elements marked data-cursor. Desktop / fine-pointer only.
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine || prefersReducedMotion()) return;

    document.body.classList.add("has-cursor");
    const dot = dotRef.current!;
    const xTo = gsap.quickTo(dot, "x", { duration: 0.5, ease: "power3" });
    const yTo = gsap.quickTo(dot, "y", { duration: 0.5, ease: "power3" });

    const move = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = (e.target as HTMLElement)?.closest<HTMLElement>(
        "[data-cursor]",
      );
      const interactive = (e.target as HTMLElement)?.closest(
        "a,button,[data-cursor]",
      );
      setLabel(t?.dataset.cursor || "");
      gsap.to(dot, {
        scale: t ? 1 : interactive ? 0.5 : 1,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      document.body.classList.remove("has-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[150] hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center lg:flex"
      style={{ mixBlendMode: "difference" }}
    >
      {label ? (
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream text-[0.62rem] uppercase tracking-[0.14em] text-espresso">
          {label}
        </span>
      ) : (
        <span className="block h-2.5 w-2.5 rounded-full bg-cream" />
      )}
    </div>
  );
}
