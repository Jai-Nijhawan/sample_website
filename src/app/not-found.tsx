import Link from "next/link";
import { primaryNav } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-espresso px-6 text-center text-cream">
      <p className="eyebrow text-bronze-soft">Lost in the hills</p>
      <h1 className="font-display display-xl mt-5">
        This page has <span className="font-display-italic">wandered off</span>
      </h1>
      <p className="measure-sm mt-5 text-cream/70">
        The trail you followed doesn't lead anywhere — let's get you back to the
        resort.
      </p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
        <Link
          href="/"
          className="border border-cream/35 px-7 py-3.5 text-[0.78rem] uppercase tracking-[0.18em] transition-colors hover:bg-cream hover:text-espresso"
        >
          Return home
        </Link>
        {primaryNav.slice(0, 4).map((i) => (
          <Link
            key={i.href}
            href={i.href}
            className="text-[0.8rem] uppercase tracking-[0.14em] text-cream/70 link-underline"
          >
            {i.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
