import { site } from "./site";
import { suites } from "./suites";

// schema.org Resort markup — the current site has none; this is a clean SEO win.
export function resortSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Resort",
    name: site.name,
    description:
      "A boutique luxury resort in Bhimtal, Uttarakhand — twelve barn-style suites with private balconies and Himalayan views, above Bhimtal Lake in the Kumaon hills.",
    url: site.url,
    telephone: site.phoneRaw,
    email: site.email,
    priceRange: "₹₹₹",
    petsAllowed: false,
    checkinTime: "12:00",
    checkoutTime: "11:00",
    image: [
      `${site.url}/media/gallery/1.jpg`,
      `${site.url}/media/suite-balcony/1.jpg`,
      `${site.url}/media/mountain-view/2.jpg`,
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: "Bhimtal",
      addressRegion: "Uttarakhand",
      postalCode: "263136",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
      bestRating: 5,
    },
    amenityFeature: [
      "Free Wi-Fi",
      "Free parking",
      "In-house restaurant",
      "Rooftop terrace",
      "Bonfire / firepit",
      "Private balconies",
      "Air conditioning",
      "Children's play area",
    ].map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    makesOffer: suites.map((s) => ({
      "@type": "Offer",
      name: s.name,
      priceCurrency: "INR",
      price: s.fromINR,
      url: `${site.url}/suites/${s.slug}`,
    })),
    sameAs: [site.social.instagram, site.social.facebook],
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
