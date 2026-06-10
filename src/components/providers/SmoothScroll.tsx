"use client";

import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

// Lenis smooth scroll, synced to the GSAP ticker so ScrollTrigger stays
// perfectly in step. Disabled when the user prefers reduced motion.
function LenisBridge() {
  const lenis = useLenis();
  const pathname = usePathname();

  // Keep ScrollTrigger aware of Lenis scrolls.
  useEffect(() => {
    if (!lenis) return;
    lenis.on("scroll", ScrollTrigger.update);
    const onTick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(onTick);
    };
  }, [lenis]);

  // Reset scroll + refresh triggers on route change.
  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 120);
    return () => window.clearTimeout(id);
  }, [pathname, lenis]);

  return null;
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduced =
    typeof window !== "undefined" ? prefersReducedMotion() : false;

  if (reduced) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.6,
      }}
    >
      <LenisBridge />
      {children}
    </ReactLenis>
  );
}
