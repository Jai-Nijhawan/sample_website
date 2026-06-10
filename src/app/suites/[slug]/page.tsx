import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/motion/Reveal";
import SuiteGallery from "@/components/site/SuiteGallery";
import Reserve from "@/components/site/Reserve";
import { JsonLd } from "@/lib/schema";
import { suites, getSuite } from "@/lib/suites";
import { inrFormatter } from "@/lib/booking";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return suites.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const suite = getSuite(slug);
  if (!suite) return {};
  return {
    title: `${suite.name} — Luxury Room in Bhimtal`,
    description: suite.blurb,
    alternates: { canonical: `/suites/${suite.slug}` },
    openGraph: {
      title: `${suite.name} — The Barns Resort, Bhimtal`,
      description: suite.blurb,
      images: [{ url: suite.hero }],
    },
  };
}

export default async function SuitePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const suite = getSuite(slug);
  if (!suite) notFound();

  const others = suites.filter((s) => s.slug !== suite.slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HotelRoom",
          name: suite.name,
          description: suite.blurb,
          image: `${site.url}${suite.hero}`,
          occupancy: { "@type": "QuantitativeValue", maxValue: 4 },
          amenityFeature: suite.amenities.map((a) => ({
            "@type": "LocationFeatureSpecification",
            name: a,
          })),
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            price: suite.fromINR,
            url: `${site.url}/suites/${suite.slug}`,
          },
        }}
      />

      <PageHero
        eyebrow={`Suite ${suite.index} · ${suite.tagline}`}
        title={suite.name}
        image={suite.hero}
        align="left"
      />

      {/* Intro + facts */}
      <section className="bg-sand py-[clamp(4rem,10vh,8rem)]">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="grid gap-12 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <Reveal>
                {suite.description.map((p, i) => (
                  <p
                    key={i}
                    className="font-display text-[clamp(1.3rem,2.2vw,1.7rem)] leading-[1.4] text-ink first:mt-0 [&:not(:first-child)]:mt-6 [&:not(:first-child)]:font-sans [&:not(:first-child)]:text-[1.02rem] [&:not(:first-child)]:leading-relaxed [&:not(:first-child)]:text-ink/70"
                  >
                    {p}
                  </p>
                ))}
              </Reveal>
            </div>

            <div className="md:col-span-5 md:pl-8">
              <Reveal>
                <div className="border-t border-ink/20 pt-6">
                  <p className="text-[0.74rem] uppercase tracking-[0.18em] text-stone">
                    Rate
                  </p>
                  <p className="mt-2 font-display text-[2rem] text-ink">
                    From {inrFormatter.format(suite.fromINR)}
                    <span className="text-[0.9rem] text-stone"> / night</span>
                  </p>
                </div>

                <dl className="mt-8 grid grid-cols-2 gap-5">
                  {suite.facts.map((f) => (
                    <div key={f.label} className="border-t border-line pt-3">
                      <dt className="text-[0.7rem] uppercase tracking-[0.16em] text-stone">
                        {f.label}
                      </dt>
                      <dd className="mt-1 font-display text-[1.12rem] text-ink">
                        {f.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-9">
                  <Reserve variant="solid" className="w-full" />
                </div>
                <a
                  href="/contact"
                  className="mt-4 block text-center text-[0.84rem] text-bronze link-underline"
                >
                  Contact us for the best deals →
                </a>
              </Reveal>
            </div>
          </div>

          {/* Amenities */}
          <div className="mt-16 border-t border-line pt-10">
            <p className="eyebrow">In this room</p>
            <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {suite.amenities.map((a) => (
                <li
                  key={a}
                  className="flex items-baseline gap-3 border-b border-line py-3 text-[0.96rem] text-ink/80"
                >
                  <span className="h-1 w-1 shrink-0 translate-y-[0.4em] rounded-full bg-bronze" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-sand-deep py-[clamp(4rem,10vh,8rem)]">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-display display-md text-ink">
              The {suite.shortName}, in full
            </h2>
            <span className="text-[0.76rem] uppercase tracking-[0.16em] text-stone">
              {suite.gallery.length} photographs
            </span>
          </div>
          <SuiteGallery images={suite.gallery} />
        </div>
      </section>

      {/* Other suites */}
      <section className="bg-espresso py-[clamp(4rem,10vh,8rem)] text-cream">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <p className="eyebrow text-bronze-soft">Also at The Barns</p>
          <h2 className="font-display display-lg mt-4">The other suites</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/suites/${o.slug}`}
                className="group block"
                data-cursor="View"
              >
                <div className="img-frame relative aspect-[3/2] w-full">
                  <Image
                    src={o.cover}
                    alt={o.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display display-md mt-5">{o.name}</h3>
                <p className="mt-2 text-[0.92rem] text-cream/70">
                  From {inrFormatter.format(o.fromINR)} / night ·{" "}
                  <span className="link-underline">Discover →</span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
