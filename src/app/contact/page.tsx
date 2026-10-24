import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/motion/Reveal";
import Faq from "@/components/site/Faq";
import Reserve from "@/components/site/Reserve";
import { JsonLd } from "@/lib/schema";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Enquiries — The Barns Resort, Bhimtal",
  description:
    "Reach The Barns Resort, Bhimtal by phone on +91 63985 09035 or +91 96672 25444, or call and WhatsApp on +91 92057 68448. Check-in, check-out, policies and answers to common questions about your stay.",
  alternates: { canonical: "/contact" },
};

const faqs = [
  {
    q: "What are your check-in and check-out times?",
    a: "Check-in is from 12:00 PM and check-out is by 11:00 AM. Early check-in and late check-out can often be arranged subject to availability — just ask reception.",
  },
  {
    q: "How do I book a room?",
    a: "Tap Reserve anywhere on the site to choose your preferred booking partner — Booking.com, MakeMyTrip, Agoda, Goibibo, EaseMyTrip or Airbnb — or call our reservations team directly on +91 63985 09035 or +91 96672 25444 to book and to arrange anything special.",
  },
  {
    q: "Are children welcome?",
    a: "Very much so. Children of all ages are welcome, with a children's menu, board games and a play area. The Family Room with Attic is especially loved by younger guests.",
  },
  {
    q: "Do you allow pets?",
    a: "We're sorry, but we're unable to accommodate pets at the resort.",
  },
  {
    q: "Is there parking, and is Wi-Fi included?",
    a: "Yes to both — free parking is on the property and complimentary Wi-Fi runs throughout the resort.",
  },
  {
    q: "Can you arrange airport or station transfers?",
    a: "We can. Let us know your arrival details when you book and we'll organise a car from Pantnagar Airport or Kathgodam station.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

      <PageHero
        eyebrow="Contact"
        title="We'd love to"
        italicWord="host you"
        intro="Call, message or write — reception is happy to help with rooms, transfers, dinner and anything your stay in the hills might need."
        image="/media/family-attic/2.jpg"
      />

      {/* Contact channels */}
      <section className="bg-sand py-[clamp(5rem,12vh,10rem)]">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="grid gap-12 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-5">
              <p className="eyebrow">Reach us directly</p>
              <div className="mt-8 space-y-8">
                <div className="border-t border-line pt-4">
                  <p className="text-[0.72rem] uppercase tracking-[0.18em] text-stone">
                    Call or WhatsApp
                  </p>
                  <div className="mt-2 flex flex-col items-start gap-2">
                    <a
                      href={`tel:${site.whatsappRaw}`}
                      className="font-display text-[1.8rem] text-ink link-underline"
                    >
                      {site.whatsappDisplay}
                    </a>
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.9rem] text-bronze link-underline"
                    >
                      Message us on WhatsApp →
                    </a>
                  </div>
                </div>
                <div className="border-t border-line pt-4">
                  <p className="text-[0.72rem] uppercase tracking-[0.18em] text-stone">
                    Reservations
                  </p>
                  <div className="mt-2 flex flex-col items-start gap-1">
                    {site.reservationPhones.map((p) => (
                      <a
                        key={p.raw}
                        href={`tel:${p.raw}`}
                        className="font-display text-[1.8rem] text-ink link-underline"
                      >
                        {p.display}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="border-t border-line pt-4">
                  <p className="text-[0.72rem] uppercase tracking-[0.18em] text-stone">
                    Write to us
                  </p>
                  <div className="mt-2 flex flex-col items-start gap-1">
                    {site.emails.map((e) => (
                      <a
                        key={e}
                        href={`mailto:${e}`}
                        className="max-w-full font-display text-[1.1rem] text-ink link-underline [overflow-wrap:anywhere]"
                      >
                        {e}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="border-t border-line pt-4">
                  <p className="text-[0.72rem] uppercase tracking-[0.18em] text-stone">
                    Find us
                  </p>
                  <address className="mt-2 not-italic text-[1.02rem] leading-relaxed text-ink/80">
                    {site.address.line1}, {site.address.line2},{" "}
                    {site.address.region}
                  </address>
                </div>
              </div>

              <div className="mt-10">
                <Reserve variant="solid" />
              </div>
            </div>

            {/* Enquiry note (mailto) */}
            <div className="md:col-span-7 md:border-l md:border-line md:pl-12">
              <Reveal>
                <p className="eyebrow">Planning a stay</p>
                <h2 className="font-display display-md mt-4 text-ink">
                  Tell us what you have in mind
                </h2>
                <p className="measure mt-5 text-[1rem] leading-relaxed text-ink/70">
                  For a tailored quote, a celebration, or a longer stay, drop us
                  a line with your dates and party size and we'll come straight
                  back to you. For instant rates and availability, the Reserve
                  button takes you to live listings.
                </p>
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent(
                    "Stay enquiry — The Barns Resort",
                  )}&body=${encodeURIComponent(
                    "Hello,\n\nI'd like to enquire about a stay.\n\nDates: \nNumber of guests: \nRoom preference: \n\nThank you,",
                  )}`}
                  className="mt-8 inline-flex border border-ink/25 px-7 py-4 text-[0.8rem] uppercase tracking-[0.16em] transition-colors hover:bg-ink hover:text-sand"
                >
                  Start an email enquiry
                </a>
                <p className="mt-5 text-[0.82rem] text-stone">
                  Prefer to talk? Reception answers quickly on WhatsApp.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand-deep py-[clamp(5rem,12vh,10rem)]">
        <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
          <p className="eyebrow">Good to know</p>
          <h2 className="font-display display-lg mt-4 text-ink">
            Common <span className="font-display-italic">questions</span>
          </h2>
          <div className="mt-10">
            <Faq items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
