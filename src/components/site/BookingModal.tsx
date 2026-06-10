"use client";

import { useEffect, useRef } from "react";
import { useBooking } from "@/components/providers/BookingContext";
import Image from "next/image";
import { bookingPartners } from "@/lib/booking";
import { site, whatsappLink } from "@/lib/site";
import { gsap } from "@/lib/gsap";

// Full-screen reservation chooser. Lists the resort's live OTA listings with
// indicative nightly rates, plus a direct call / WhatsApp option. The site
// never processes payment itself — it hands guests to a trusted partner.
export default function BookingModal() {
  const { open, closeBooking } = useBooking();
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<HTMLDivElement>(null);

  // Animate in/out + lock scroll + escape to close.
  useEffect(() => {
    if (!open) return;
    document.documentElement.classList.add("lenis-stopped");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeBooking();
    };
    window.addEventListener("keydown", onKey);

    const ctx = gsap.context(() => {
      gsap.set(overlayRef.current, { autoAlpha: 1 });
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.45, ease: "power2.out" },
      );
      gsap.fromTo(
        panelRef.current,
        { yPercent: 4, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
      );
      const rows = rowsRef.current?.querySelectorAll("[data-row]");
      if (rows)
        gsap.fromTo(
          rows,
          { y: 22, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.06,
            delay: 0.12,
            ease: "power3.out",
          },
        );
    });

    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("lenis-stopped");
      ctx.revert();
    };
  }, [open, closeBooking]);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[120] flex items-stretch justify-end bg-espresso/60 backdrop-blur-[2px]"
      style={{ visibility: "hidden" }}
      onClick={(e) => {
        if (e.target === overlayRef.current) closeBooking();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Reserve your stay"
    >
      <div
        ref={panelRef}
        className="relative h-full w-full max-w-[560px] overflow-y-auto bg-sand px-7 py-10 sm:px-12 sm:py-14"
        data-lenis-prevent
      >
        <button
          type="button"
          onClick={closeBooking}
          className="absolute right-6 top-6 text-[0.72rem] uppercase tracking-[0.2em] text-stone transition-colors hover:text-ink"
        >
          Close ✕
        </button>

        <p className="eyebrow">Reserve your stay</p>
        <h2 className="font-display display-lg mt-4 leading-[1.02]">
          Choose how <span className="font-display-italic">you’d like</span> to
          book
        </h2>
        <p className="measure-sm mt-5 text-[0.95rem] leading-relaxed text-ink/70">
          We keep rooms across trusted partners. Pick your preferred platform —
          live rates and availability appear on each site.
        </p>

        <div ref={rowsRef} className="mt-10">
          <div className="rule mb-2" />
          {bookingPartners.map((p) => (
            <a
              key={p.id}
              data-row
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 border-b border-line py-5 transition-colors hover:bg-sand-deep/60"
            >
              <span className="flex min-w-0 items-center gap-5">
                <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={p.logo}
                    alt={`${p.name} logo`}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </span>
                <span className="min-w-0">
                  <span className="font-display text-[1.5rem] leading-none text-ink">
                    {p.name}
                  </span>
                  <span className="mt-1.5 block text-[0.78rem] text-stone">
                    {p.note}
                  </span>
                </span>
              </span>
              <span className="shrink-0 text-[0.72rem] uppercase tracking-[0.18em] text-bronze opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Book →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 border-t border-line pt-8">
          <p className="eyebrow">Book direct — best deals</p>
          <p className="subhead mt-3 text-ink/80">
            Contact us directly for the best deals.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${site.phoneRaw}`}
              className="flex-1 border border-ink/25 px-5 py-4 text-center text-[0.8rem] uppercase tracking-[0.16em] transition-colors hover:bg-ink hover:text-sand"
            >
              Call {site.phoneDisplay}
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-sage px-5 py-4 text-center text-[0.8rem] uppercase tracking-[0.16em] text-sand transition-colors hover:bg-ink"
            >
              WhatsApp us
            </a>
          </div>
          <p className="mt-6 text-[0.74rem] leading-relaxed text-stone">
            Reception is happy to arrange airport transfers, early check-in and
            anything else your stay needs.
          </p>
        </div>
      </div>
    </div>
  );
}
