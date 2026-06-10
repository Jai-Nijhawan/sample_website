import Link from "next/link";
import { site, footerNav, whatsappLink } from "@/lib/site";
import Reserve from "./Reserve";

export default function Footer() {
  return (
    <footer className="relative bg-espresso text-cream">
      {/* CTA band */}
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="grid gap-10 border-b border-line-cream py-20 md:grid-cols-[1.3fr_1fr] md:items-end md:py-28">
          <div>
            <p className="eyebrow text-bronze-soft">Your stay awaits</p>
            <h2 className="font-display display-xl mt-5 leading-[1.02]">
              Wake to misty mornings
              <br />
              <span className="font-display-italic">above the lake</span>
            </h2>
          </div>
          <div className="md:pb-3">
            <p className="subhead measure-sm text-cream/80">
              Twelve rooms, a rooftop for the sunset, and the whole of Bhimtal
              at your feet. Reserve directly or through your preferred partner.
            </p>
            <p className="mt-3 text-[0.86rem] tracking-wide text-bronze-soft">
              Contact us directly for the best deals.
            </p>
            <div className="mt-7">
              <Reserve variant="cream" />
            </div>
          </div>
        </div>
      </div>

      {/* Detail columns */}
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <p className="font-display text-[1.6rem] leading-none">
              The Barns
            </p>
            <p className="mt-4 text-[0.86rem] leading-relaxed text-cream/65">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.region}
            </p>
          </div>

          <div>
            <p className="eyebrow text-stone">Explore</p>
            <ul className="mt-5 space-y-3">
              {footerNav.map((i) => (
                <li key={i.href}>
                  <Link
                    href={i.href}
                    className="link-underline text-[0.9rem] text-cream/80"
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-stone">Reach us</p>
            <ul className="mt-5 space-y-3 text-[0.9rem] text-cream/80">
              <li>
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="link-underline"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="link-underline"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-stone">Follow</p>
            <ul className="mt-5 space-y-3 text-[0.9rem] text-cream/80">
              <li>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  Facebook
                </a>
              </li>
            </ul>
            <p className="mt-7 text-[0.78rem] text-cream/50">
              {site.rating.value} ★ · {site.rating.count} guest reviews on{" "}
              {site.rating.source}
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-line-cream pt-7 text-[0.74rem] text-cream/45 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} The Barns Resort, Bhimtal. All rights
            reserved.
          </p>
          <p>Raw &amp; Luxury, in the Kumaon hills.</p>
        </div>
      </div>
    </footer>
  );
}
