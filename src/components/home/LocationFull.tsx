import TextReveal from "@/components/motion/TextReveal";
import Reveal from "@/components/motion/Reveal";
import RevealImage from "@/components/motion/RevealImage";
import { site } from "@/lib/site";
import { distances } from "@/lib/experiences";

// Full location chapter at the foot of the home page: the setting, the map,
// every distance, and the three ways in.
const routes = [
  {
    mode: "By Air",
    body: "Pantnagar Airport (PGH) is the nearest, about 58 km away, roughly two hours by road. Dehradun and Delhi airports connect onward by car. We're glad to arrange a transfer.",
  },
  {
    mode: "By Rail",
    body: "Kathgodam is the closest railhead, about 26 km below us, with overnight trains from Delhi. From the station it's a scenic hour's drive up into the hills.",
  },
  {
    mode: "By Road",
    body: "Around 300 km from Delhi via Haldwani, a six to seven hour drive that turns beautiful the moment you enter the Kumaon. Free parking is on the property.",
  },
];

export default function LocationFull() {
  return (
    <section id="location" className="bg-sand-deep py-[clamp(5rem,12vh,10rem)]">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        {/* Setting */}
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <RevealImage
              src="/media/gallery/17.jpg"
              alt="Aerial view of Bhimtal Lake at dusk, ringed by the Kumaon hills"
              className="aspect-[3/2] w-full"
              sizes="(max-width: 768px) 100vw, 50vw"
              parallax
            />
          </div>
          <div className="md:col-span-6 md:pl-8">
            <p className="eyebrow">07 — Getting Here</p>
            <TextReveal as="h2" className="font-display display-lg mt-5 text-ink">
              Above Bhimtal Lake,
              <br />
              in the heart of Kumaon
            </TextReveal>
            <Reveal>
              <p className="subhead measure mt-6 text-ink/80">
                We sit on the hillside a short stroll above the lake — close
                enough for a morning by the water, far enough for the quiet you
                came for.
              </p>
              <address className="mt-7 border-t border-line pt-5 not-italic text-[0.98rem] leading-relaxed text-ink/75">
                {site.name}, {site.address.line1},
                <br />
                {site.address.line2}, {site.address.region}
              </address>
              <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-[0.9rem]">
                <a href={`tel:${site.phoneRaw}`} className="link-underline text-ink">
                  {site.phoneDisplay}
                </a>
                {site.reservationPhones.map((p) => (
                  <a key={p.raw} href={`tel:${p.raw}`} className="link-underline text-ink">
                    {p.display}
                  </a>
                ))}
                <a
                  href={site.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-bronze"
                >
                  Open in Google Maps →
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <div className="img-frame relative aspect-[16/10] w-full overflow-hidden border border-line sm:aspect-[21/9]">
            <iframe
              src={site.mapsEmbed}
              title="The Barns Resort on the map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full grayscale-[0.2]"
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
        </div>

        {/* Distances */}
        <dl className="mt-16 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {distances.map((d) => (
            <div key={d.place} className="border-t border-line pt-4">
              <div className="flex items-baseline justify-between gap-3">
                <dt className="font-display text-[1.4rem] text-ink">{d.place}</dt>
                <span className="font-display text-[1.2rem] text-bronze">
                  {d.time}
                </span>
              </div>
              <dd className="mt-1 text-[0.9rem] text-stone">{d.detail}</dd>
            </div>
          ))}
        </dl>

        {/* Three ways in */}
        <div className="mt-20 border-t border-line pt-12">
          <p className="eyebrow">The journey</p>
          <h3 className="font-display display-md mt-3 text-ink">Three ways in</h3>
          <div className="mt-9 grid gap-10 md:grid-cols-3">
            {routes.map((r) => (
              <Reveal key={r.mode}>
                <div className="border-t border-line pt-5">
                  <h4 className="font-serif text-[1.5rem] font-semibold text-ink">
                    {r.mode}
                  </h4>
                  <p className="mt-3 text-[0.96rem] leading-relaxed text-ink/70">
                    {r.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
