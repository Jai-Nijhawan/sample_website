"use client";

import { useBooking } from "@/components/providers/BookingContext";

// The single Reserve call-to-action used across the site. Opens the booking
// chooser. Two visual variants: outline (default) and solid.
export default function Reserve({
  variant = "outline",
  className = "",
  label = "Reserve",
}: {
  variant?: "outline" | "solid" | "cream";
  className?: string;
  label?: string;
}) {
  const { openBooking } = useBooking();

  const base =
    "group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 text-[0.78rem] uppercase tracking-[0.18em] font-medium transition-colors duration-500 ease-out";

  const styles: Record<string, string> = {
    outline:
      "border border-ink/30 text-ink hover:bg-ink hover:text-sand",
    solid: "bg-bronze text-sand hover:bg-ink",
    cream:
      "border border-cream/35 text-cream hover:bg-cream hover:text-espresso",
  };

  return (
    <button
      type="button"
      onClick={openBooking}
      className={`${base} ${styles[variant]} ${className}`}
    >
      <span>{label}</span>
      <span
        aria-hidden
        className="h-1 w-1 rounded-full bg-current transition-transform duration-500 group-hover:scale-150"
      />
    </button>
  );
}
