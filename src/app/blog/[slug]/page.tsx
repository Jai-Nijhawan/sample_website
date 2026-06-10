import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/motion/Reveal";
import Reserve from "@/components/site/Reserve";
import { JsonLd } from "@/lib/schema";
import { posts, getPost } from "@/lib/journal";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.description,
      images: [{ url: post.hero }],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.description,
          image: `${site.url}${post.hero}`,
          author: { "@type": "Organization", name: site.name },
          publisher: { "@type": "Organization", name: site.name },
        }}
      />

      <PageHero
        eyebrow={`${post.category} · ${post.readMins} min read`}
        title={post.title}
        image={post.hero}
        align="left"
      />

      <article className="bg-sand py-[clamp(4rem,10vh,8rem)]">
        <div className="mx-auto max-w-[760px] px-5 sm:px-8">
          <Reveal>
            {post.body.map((block, i) => (
              <div key={i} className={i === 0 ? "" : "mt-12"}>
                {block.h && (
                  <h2 className="font-display display-md mb-4 text-ink">
                    {block.h}
                  </h2>
                )}
                {block.p.map((para, j) => (
                  <p
                    key={j}
                    className={`text-[1.08rem] leading-[1.75] text-ink/80 ${
                      j > 0 ? "mt-5" : ""
                    } ${i === 0 && j === 0 ? "first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-[3.6rem] first-letter:leading-[0.8] first-letter:text-bronze" : ""}`}
                  >
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </Reveal>

          <div className="mt-16 border-t border-line pt-10">
            <p className="font-display text-[1.5rem] text-ink">
              Come and see it for yourself.
            </p>
            <div className="mt-6">
              <Reserve variant="solid" />
            </div>
          </div>
        </div>
      </article>

      {/* More posts */}
      <section className="bg-sand-deep py-[clamp(4rem,10vh,7rem)]">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <p className="eyebrow">Keep reading</p>
          <div className="mt-8 grid gap-10 md:grid-cols-3">
            {more.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group block border-t border-line pt-5"
                data-cursor="Read"
              >
                <p className="text-[0.72rem] uppercase tracking-[0.16em] text-stone">
                  {p.category}
                </p>
                <h3 className="font-display text-[1.4rem] leading-tight mt-2 text-ink">
                  {p.title}
                </h3>
                <span className="mt-3 inline-block text-[0.78rem] uppercase tracking-[0.16em] text-bronze link-underline">
                  Read →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
