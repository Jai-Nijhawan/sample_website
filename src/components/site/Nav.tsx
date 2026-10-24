"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { primaryNav, primaryPhone } from "@/lib/site";
import Reserve from "./Reserve";

// Fixed header. Sits transparent over each page's dark hero, then resolves to
// a solid sand bar with a hairline rule once the guest scrolls.
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("lenis-stopped", menuOpen);
    return () => document.documentElement.classList.remove("lenis-stopped");
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-colors duration-500 ${
        solid
          ? "bg-sand/95 backdrop-blur-md text-ink border-b border-line"
          : "bg-transparent text-cream"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-3"
          aria-label="The Barns Resort — home"
        >
          <Image
            src="/media/brand/logo.png"
            alt=""
            width={42}
            height={42}
            className={`h-9 w-auto transition-[filter] duration-500 ${
              solid ? "brightness-0" : ""
            }`}
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.15rem] tracking-tight">
              The Barns
            </span>
            <span className="text-[0.6rem] uppercase tracking-[0.3em] opacity-70">
              Bhimtal
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-underline text-[0.82rem] uppercase tracking-[0.14em]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Reserve variant={solid ? "outline" : "cream"} />
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-px w-6 bg-current transition-transform duration-300 ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-current transition-transform duration-300 ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-sand text-ink transition-[max-height] duration-500 ease-out lg:hidden ${
          menuOpen ? "max-h-[90vh]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 pb-8 pt-2">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-line py-4 font-display text-[1.6rem]"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-7" onClick={() => setMenuOpen(false)}>
            <Reserve variant="solid" className="w-full" />
          </div>
          <a
            href={`tel:${primaryPhone.raw}`}
            className="mt-5 text-[0.8rem] uppercase tracking-[0.16em] text-stone"
          >
            {primaryPhone.display}
          </a>
        </nav>
      </div>
    </header>
  );
}
