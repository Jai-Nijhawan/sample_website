import TextReveal from "@/components/motion/TextReveal";
import Reveal from "@/components/motion/Reveal";
import RevealImage from "@/components/motion/RevealImage";

// The opening statement — sets the place and the mood before any product.
export default function Manifesto() {
  return (
    <section className="bg-sand py-[clamp(6rem,14vh,12rem)]">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <p className="eyebrow">01 — The Place</p>
            <TextReveal
              as="h2"
              className="font-display display-lg mt-6 text-ink"
            >
              In the tranquil embrace of the Kumaon hills, a short walk from
              Bhimtal Lake yet far from the noise of the town.
            </TextReveal>
          </div>

          <div className="md:col-span-5 md:pt-3">
            <Reveal>
              <p className="subhead measure text-ink/80">
                The Barns began with a simple idea — that the rough-hewn craft
                of the mountains and the comfort of a fine hotel need not be
                strangers. Stone gathered from the hillside, pine cut for the
                roofs, and inside, the quiet luxury of a room that asks nothing
                of you but to rest.
              </p>
              <p className="measure mt-5 text-[1.02rem] leading-relaxed text-ink/75">
                Our guests tell us it feels like a five-star stay. We prefer to
                think it simply feels like the hills, done well.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:mt-24 md:grid-cols-12 md:gap-6">
          <Reveal className="md:col-span-5 md:mt-24" delay={0.05}>
            <RevealImage
              src="/media/mountain-view/2.jpg"
              alt="A Mountain View Suite with a floor-to-ceiling window onto the Kumaon ridgelines"
              className="aspect-[4/5] w-full"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <p className="mt-3 text-[0.78rem] uppercase tracking-[0.16em] text-stone">
              Mountain View Suite
            </p>
          </Reveal>
          <div className="md:col-span-7">
            <RevealImage
              src="/media/gallery/9.jpg"
              alt="The Barns Resort terraced into the hillside at dusk"
              className="aspect-[3/2] w-full"
              sizes="(max-width: 768px) 100vw, 58vw"
              parallax
            />
            <p className="mt-3 text-[0.78rem] uppercase tracking-[0.16em] text-stone">
              Terraced into the hillside, Bhimtal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
