import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/motion/Reveal";
import RevealImage from "@/components/motion/RevealImage";
import { posts } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal — Notes from Bhimtal & the Kumaon",
  description:
    "Stories and guides from The Barns Resort, Bhimtal — the rooms, the lake, things to do in the Kumaon, and how to plan your stay.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const [lead, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title="Notes from"
        italicWord="the hills"
        intro="Stories and small guides from Bhimtal and the Kumaon — the rooms, the lake, the walks, and the slow art of doing less."
        image="/media/gallery/8.jpg"
      />

      <section className="bg-sand py-[clamp(4rem,10vh,8rem)]">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          {/* Lead post */}
          <Link
            href={`/blog/${lead.slug}`}
            className="group grid items-center gap-8 border-b border-line pb-[clamp(3rem,7vh,6rem)] md:grid-cols-2 md:gap-16"
            data-cursor="Read"
          >
            <RevealImage
              src={lead.hero}
              alt={lead.title}
              className="aspect-[4/3] w-full"
              sizes="(max-width: 768px) 100vw, 50vw"
              parallax
            />
            <div>
              <p className="eyebrow">
                {lead.category} · {lead.readMins} min read
              </p>
              <h2 className="font-display display-lg mt-4 text-ink">
                {lead.title}
              </h2>
              <p className="measure mt-5 text-[1.02rem] leading-relaxed text-ink/70">
                {lead.excerpt}
              </p>
              <span className="mt-6 inline-block text-[0.8rem] uppercase tracking-[0.16em] text-bronze link-underline">
                Read the story →
              </span>
            </div>
          </Link>

          {/* Grid */}
          <div className="mt-[clamp(3rem,7vh,5rem)] grid gap-x-10 gap-y-16 md:grid-cols-3">
            {rest.map((p) => (
              <Reveal key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="group block" data-cursor="Read">
                  <RevealImage
                    src={p.hero}
                    alt={p.title}
                    className="aspect-[4/3] w-full"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <p className="eyebrow mt-5">
                    {p.category} · {p.readMins} min
                  </p>
                  <h3 className="font-display text-[1.5rem] leading-tight mt-2 text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[0.94rem] leading-relaxed text-ink/65">
                    {p.excerpt}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
