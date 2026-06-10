import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/motion/Reveal";
import RevealImage from "@/components/motion/RevealImage";
import Reserve from "@/components/site/Reserve";
import { experiences } from "@/lib/experiences";

export const metadata: Metadata = {
  title: "Experiences & Dining — Things to Do in Bhimtal",
  description:
    "Rooftop tea, bonfires under the stars, boating on Bhimtal Lake, the sister lakes of Sattal and Naukuchiatal, gentle hikes, and homely Kumaoni dining at The Barns Resort.",
  alternates: { canonical: "/experiences" },
};

// The Barns table — dining moments through the day.
const diningMoments = [
  {
    k: "Morning",
    title: "Breakfast as the mist clears",
    body: "A generous spread, fresh parathas, eggs your way, seasonal fruit and chai, served as the valley wakes. Buffet or à la carte; a children's menu is always on hand.",
    image: "/media/gallery/12.jpg",
  },
  {
    k: "Evening",
    title: "Tea on the rooftop",
    body: "The moment guests write home about. As the light drops behind the ridge, tea and warm bites are laid on the rooftop terrace, the whole valley turning gold.",
    image: "/media/gallery/14.jpg",
  },
  {
    k: "Night",
    title: "Dinner under the stars",
    body: "Homely Indian cooking from our kitchen, fragrant, unfussy and generous, served in the garden, by the bonfire, or quietly to your balcony.",
    image: "/media/gallery/1.jpg",
  },
];

export default function ExperiencesPage() {
  const onProperty = experiences.filter((e) => e.kind === "On the property");
  const around = experiences.filter((e) => e.kind === "Around Bhimtal");

  return (
    <>
      <PageHero
        eyebrow="The Days"
        title="Slow mornings,"
        italicWord="golden evenings"
        intro="The hills set the pace here. A cup of tea as the sun drops, a fire as the stars come out, a lake a short walk down the slope. We simply point the way."
        image="/media/gallery/8.jpg"
      />

      {/* On the property */}
      <section className="bg-sand py-[clamp(5rem,12vh,10rem)]">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="border-b border-line pb-8">
            <p className="eyebrow">On the property</p>
            <h2 className="font-display display-lg mt-4 text-ink">
              Without leaving <span className="font-display-italic">the gate</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-x-10 gap-y-16 md:grid-cols-3">
            {onProperty.map((e) => (
              <Reveal key={e.index}>
                <RevealImage
                  src={e.image}
                  alt={e.title}
                  className="aspect-[4/5] w-full"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <p className="mt-5 text-[0.72rem] uppercase tracking-[0.18em] text-stone">
                  {e.index}
                </p>
                <h3 className="font-display display-md mt-1 text-ink">
                  {e.title}
                </h3>
                <p className="mt-3 text-[0.96rem] leading-relaxed text-ink/70">
                  {e.blurb}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Around Bhimtal */}
      <section className="bg-espresso py-[clamp(5rem,12vh,10rem)] text-cream">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="border-b border-line-cream pb-8">
            <p className="eyebrow text-bronze-soft">Around Bhimtal</p>
            <h2 className="font-display display-lg mt-4">
              The Kumaon, just <span className="font-display-italic">beyond</span>
            </h2>
          </div>
          <div className="mt-12 space-y-px">
            {around.map((e, i) => (
              <Reveal key={e.index}>
                <div
                  className={`grid items-center gap-8 py-10 md:grid-cols-2 md:gap-16 ${
                    i % 2 === 1 ? "" : ""
                  }`}
                >
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    <RevealImage
                      src={e.image}
                      alt={e.title}
                      className="aspect-[3/2] w-full"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      parallax
                    />
                  </div>
                  <div className={i % 2 === 1 ? "md:order-1" : ""}>
                    <p className="text-[0.72rem] uppercase tracking-[0.18em] text-bronze-soft">
                      {e.index}
                    </p>
                    <h3 className="font-display display-md mt-2">{e.title}</h3>
                    <p className="measure mt-4 text-[1rem] leading-relaxed text-cream/70">
                      {e.blurb}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Table — dining at The Barns */}
      <section id="dining" className="bg-sand py-[clamp(5rem,12vh,10rem)]">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="border-b border-line pb-8 text-center">
            <p className="eyebrow">The Barns Restaurant</p>
            <h2 className="font-display display-lg mt-4 text-ink">
              A homely Kumaoni <span className="font-display-italic">table</span>
            </h2>
            <p className="subhead mx-auto mt-5 max-w-[52ch] text-ink/80">
              Our kitchen serves a heartfelt Indian menu through the day. Tell
              us how you like to eat and where, at the table, in the garden, on
              the rooftop or in your room, and we'll bring the hills to you.
            </p>
          </div>
          {diningMoments.map((m, i) => (
            <div
              key={m.k}
              className="grid items-center gap-8 border-b border-line py-[clamp(3rem,7vh,5rem)] md:grid-cols-2 md:gap-16"
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <RevealImage
                  src={m.image}
                  alt={m.title}
                  className="aspect-[4/3] w-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  parallax
                />
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <Reveal>
                  <p className="eyebrow">{m.k}</p>
                  <h3 className="font-display display-md mt-3 text-ink">
                    {m.title}
                  </h3>
                  <p className="measure mt-4 text-[1.02rem] leading-relaxed text-ink/70">
                    {m.body}
                  </p>
                </Reveal>
              </div>
            </div>
          ))}
          <p className="mt-8 text-center text-[0.92rem] text-stone">
            Travelling with little ones or particular tastes? We cater to most
            dietary needs with a little notice.
          </p>
        </div>
      </section>

      <section className="bg-sand py-[clamp(4rem,10vh,7rem)] text-center">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <p className="eyebrow">Let us arrange it</p>
          <h2 className="font-display display-lg mx-auto mt-5 max-w-[20ch] text-ink">
            Our team maps your days, so you don't have to
          </h2>
          <p className="measure mx-auto mt-5 text-[1rem] leading-relaxed text-ink/70">
            Boats, drivers, picnic baskets, the best trail for the morning — tell
            reception what you're hoping for and we'll set it in motion.
          </p>
          <div className="mt-8 flex justify-center">
            <Reserve variant="solid" />
          </div>
        </div>
      </section>
    </>
  );
}
