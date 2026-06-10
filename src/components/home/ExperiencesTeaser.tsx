import Link from "next/link";
import TextReveal from "@/components/motion/TextReveal";
import Reveal from "@/components/motion/Reveal";
import RevealImage from "@/components/motion/RevealImage";
import { experiences } from "@/lib/experiences";

// Asymmetric editorial teaser for the experiences. Three featured, offset.
export default function ExperiencesTeaser() {
  const featured = [experiences[0], experiences[1], experiences[2]];

  return (
    <section className="bg-sand py-[clamp(6rem,14vh,12rem)]">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">03 — The Days</p>
            <TextReveal as="h2" className="font-display display-lg mt-5 text-ink">
              Slow mornings, golden
              <br />
              evenings, the lake below
            </TextReveal>
          </div>
          <Link
            href="/experiences"
            className="text-[0.8rem] uppercase tracking-[0.16em] text-ink link-underline"
          >
            All experiences →
          </Link>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-12">
          {/* Tall feature */}
          <div className="md:col-span-5">
            <Link href="/experiences" className="group block" data-cursor="View">
              <RevealImage
                src={featured[0].image}
                alt={featured[0].title}
                className="aspect-[4/5] w-full"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <p className="eyebrow mt-5">{featured[0].kind}</p>
              <h3 className="font-display display-md mt-2 text-ink">
                {featured[0].title}
              </h3>
              <p className="measure mt-3 text-[0.96rem] leading-relaxed text-ink/70">
                {featured[0].blurb}
              </p>
            </Link>
          </div>

          {/* Two stacked */}
          <div className="flex flex-col gap-12 md:col-span-7 md:pt-24">
            {[featured[1], featured[2]].map((e) => (
              <Reveal key={e.index}>
                <Link
                  href="/experiences"
                  className="group grid gap-6 sm:grid-cols-2 sm:items-center"
                  data-cursor="View"
                >
                  <RevealImage
                    src={e.image}
                    alt={e.title}
                    className="aspect-[3/2] w-full"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                  <div>
                    <p className="eyebrow">{e.kind}</p>
                    <h3 className="font-display display-md mt-2 text-ink">
                      {e.title}
                    </h3>
                    <p className="mt-3 text-[0.94rem] leading-relaxed text-ink/70">
                      {e.blurb}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
