"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

// Click any image to open a full-screen lightbox with keyboard + arrow
// navigation. Used on suite pages and the gallery.
export default function Lightbox({
  images,
  children,
}: {
  images: string[];
  children: (open: (i: number) => void) => React.ReactNode;
}) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length],
  );
  const prev = useCallback(
    () =>
      setIndex((i) =>
        i === null ? i : (i - 1 + images.length) % images.length,
      ),
    [images.length],
  );

  useEffect(() => {
    if (index === null) return;
    document.documentElement.classList.add("lenis-stopped");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.classList.remove("lenis-stopped");
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, next, prev]);

  return (
    <>
      {children(setIndex)}

      {index !== null && (
        <div
          className="fixed inset-0 z-[130] flex items-center justify-center bg-espresso/95 px-4 py-16"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={close}
            className="absolute right-6 top-6 text-[0.74rem] uppercase tracking-[0.2em] text-cream/70 hover:text-cream"
          >
            Close ✕
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 px-4 py-6 text-cream/60 hover:text-cream sm:left-8"
            aria-label="Previous"
          >
            ←
          </button>
          <div
            className="relative h-full w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index]}
              alt=""
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 px-4 py-6 text-cream/60 hover:text-cream sm:right-8"
            aria-label="Next"
          >
            →
          </button>
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[0.74rem] tracking-[0.2em] text-cream/60">
            {index + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  );
}
