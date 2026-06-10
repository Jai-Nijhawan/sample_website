import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/motion/Reveal";
import RevealImage from "@/components/motion/RevealImage";
import Reserve from "@/components/site/Reserve";
import { suites } from "@/lib/suites";
import { inrFormatter } from "@/lib/booking";

export const metadata: Metadata = {
  title: "The Suites — Rooms in Bhimtal with Private Balconies",
  description:
    "Three characters of room at The Barns Resort, Bhimtal — the Suite with Balcony, the Mountain View Suite and the Family Room with Attic. Every room has a private balcony and a Himalayan view.",
  alternates: { canonical: "/suites" },
};

export default function SuitesPage() {
  return (
    <>
      <PageHero
        eyebrow="The Suites"
        title="Twelve rooms,"
        italicWord="each with its own sky"
        intro="Barn-style architecture in Kumaoni stone and pine — every suite opens to a private balcony and a view worth the journey."
        image="/media/suite-balcony/1.jpg"
      />

      <section className="bg-sand py-[clamp(4rem,10vh,8rem)]">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          {suites.map((s, i) => (
            <article
              key={s.slug}
              className="grid items-center gap-8 border-t border-line py-[clamp(3rem,8vh,7rem)] md:grid-cols-2 md:gap-16"
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <Link href={`/suites/${s.slug}`} data-cursor="View">
                  <RevealImage
                    src={s.hero}
                    alt={s.name}
                    className="aspect-[4/3] w-full"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    parallax
                  />
                </Link>
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <Reveal>
                  <p className="eyebrow">
                    {s.index} — {s.tagline}
                  </p>
                  <h2 className="font-display display-lg mt-4 text-ink">
                    {s.name}
                  </h2>
                  <p className="measure mt-5 text-[1.02rem] leading-relaxed text-ink/75">
                    {s.blurb}
                  </p>

                  <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
                    {s.facts.map((f) => (
                      <div key={f.label}>
                        <dt className="text-[0.7rem] uppercase tracking-[0.16em] text-stone">
                          {f.label}
                        </dt>
                        <dd className="mt-1 font-display text-[1.1rem] text-ink">
                          {f.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-9 flex flex-wrap items-center gap-6">
                    <Link
                      href={`/suites/${s.slug}`}
                      className="text-[0.8rem] uppercase tracking-[0.16em] text-ink link-underline"
                    >
                      Explore this suite →
                    </Link>
                    <span className="text-[0.86rem] text-stone">
                      From{" "}
                      <span className="text-ink">
                        {inrFormatter.format(s.fromINR)}
                      </span>{" "}
                      / night
                    </span>
                  </div>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-espresso py-[clamp(4rem,10vh,7rem)] text-center text-cream">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <p className="eyebrow text-bronze-soft">Ready when you are</p>
          <h2 className="font-display display-lg mx-auto mt-5 max-w-[18ch]">
            Choose your room and reserve in a moment
          </h2>
          <p className="subhead mx-auto mt-5 max-w-[40ch] text-cream/80">
            Or contact us directly for the best deals on your stay.
          </p>
          <div className="mt-9 flex justify-center">
            <Reserve variant="cream" />
          </div>
        </div>
      </section>
    </>
  );
}
