import Link from "next/link";
import TextReveal from "@/components/motion/TextReveal";
import Reveal from "@/components/motion/Reveal";
import RevealImage from "@/components/motion/RevealImage";

// Sticky split layout: pinned copy on the left, imagery scrolling on the right.
export default function DiningTeaser() {
  return (
    <section className="bg-espresso text-cream">
      <div className="mx-auto grid max-w-[1440px] gap-0 md:grid-cols-2">
        {/* Sticky copy */}
        <div className="flex items-center px-5 py-[clamp(5rem,12vh,9rem)] sm:px-8 md:sticky md:top-0 md:h-screen">
          <div className="max-w-[44ch]">
            <p className="eyebrow text-bronze-soft">04 — The Table</p>
            <TextReveal as="h2" className="font-display display-lg mt-6">
              A homely Kumaoni
              <br />
              <span className="font-display-italic">table</span>, fresh from
              the hills
            </TextReveal>
            <Reveal>
              <p className="subhead mt-7 text-cream/85">
                Our kitchen cooks the food of the mountains — unfussy, fragrant
                and generous. Breakfast arrives as the mist clears; dinner is
                served in the garden, on the rooftop, or quietly to your
                balcony.
              </p>
              <p className="mt-5 text-[0.96rem] leading-relaxed text-cream/65">
                Guests return again and again to the evening tea laid out as the
                sun drops behind the ridge.
              </p>
              <div className="mt-9">
                <Link
                  href="/experiences#dining"
                  className="text-[0.8rem] uppercase tracking-[0.16em] link-underline"
                >
                  Discover dining →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Scrolling imagery */}
        <div className="flex flex-col gap-5 px-5 pb-16 sm:px-8 md:py-[14vh]">
          <RevealImage
            src="/media/gallery/14.jpg"
            alt="The rooftop terrace at The Barns, set for evening tea with mountain views"
            className="aspect-[4/5] w-full"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <RevealImage
            src="/media/gallery/12.jpg"
            alt="The Barns Resort cottages at dusk"
            className="aspect-[3/4] w-full md:ml-16"
            sizes="(max-width: 768px) 100vw, 40vw"
            parallax
          />
        </div>
      </div>
    </section>
  );
}
