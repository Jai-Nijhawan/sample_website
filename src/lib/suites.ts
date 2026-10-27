// The three accommodation types at The Barns Resort.
// All copy and amenities reflect the real property; galleries map to the
// resort's own photography in /public/media.

const range = (dir: string, count: number, start = 1) =>
  Array.from({ length: count }, (_, i) => `/media/${dir}/${i + start}.jpg`);

export type Suite = {
  slug: string;
  index: string; // editorial numbering
  name: string;
  shortName: string;
  tagline: string;
  blurb: string;
  description: string[];
  fromINR: number;
  facts: { label: string; value: string }[];
  amenities: string[];
  hero: string;
  cover: string; // landscape image for cards / showcase
  gallery: string[];
};

export const suites: Suite[] = [
  {
    slug: "suite-with-balcony",
    index: "01",
    name: "Suite with Balcony",
    shortName: "Balcony Suite",
    tagline: "Vaulted timber, open sky",
    blurb:
      "Our signature room — a soaring A-frame ceiling in Kumaoni pine, a glazed apex that pulls the sky indoors, and a private balcony hung over the valley.",
    description: [
      "The Suite with Balcony is the clearest expression of what we mean by raw and luxury. Hand-finished pine rises to a glazed apex, so the first light of the hills falls across the bed long before you wake.",
      "Below the timber, everything is considered: a deep, dressed bed, a quiet sitting corner, and full-height glass that opens to a balcony made for slow mornings and slower evenings.",
    ],
    fromINR: 5600,
    facts: [
      { label: "Sleeps", value: "2 guests" },
      { label: "Outlook", value: "Valley & sky" },
      { label: "Feature", value: "Vaulted A-frame ceiling" },
      { label: "Balcony", value: "Private" },
    ],
    amenities: [
      "Private balcony",
      "Vaulted pine ceiling with glazed apex",
      "Air conditioning",
      "King bed with premium linen",
      "Flat-screen TV, satellite channels",
      "Tea & coffee, replenished daily",
      "En-suite bath with rain shower",
      "Complimentary toiletries & robes",
      "Free Wi-Fi throughout",
    ],
    hero: "/media/suite-balcony/1.jpg",
    cover: "/media/suite-balcony/5.jpg",
    gallery: range("suite-balcony", 18),
  },
  {
    slug: "mountain-view-suite",
    index: "02",
    name: "Mountain View Suite",
    shortName: "Mountain View",
    tagline: "A window full of Himalaya",
    blurb:
      "For couples and solo wanderers — a calm, contemporary room framed by a floor-to-ceiling window that opens straight onto the ridgelines.",
    description: [
      "The Mountain View Suite is built around its window. A wall of glass frames the Kumaon ridgelines, and a sculpted, fluted headboard wall gives the room a quiet, modern stillness.",
      "It is the room we recommend for a romantic escape — uncluttered, sunlit, and arranged so the mountains are the last thing you see at night and the first each morning.",
    ],
    fromINR: 4863,
    facts: [
      { label: "Sleeps", value: "2 guests" },
      { label: "Outlook", value: "Himalayan ridgelines" },
      { label: "Feature", value: "Full-height view window" },
      { label: "Balcony", value: "Private" },
    ],
    amenities: [
      "Floor-to-ceiling mountain window",
      "Private balcony",
      "Air conditioning",
      "King bed with premium linen",
      "Sitting area with valley outlook",
      "Flat-screen TV, satellite channels",
      "Tea & coffee, replenished daily",
      "En-suite bath with separate shower",
      "Free Wi-Fi throughout",
    ],
    hero: "/media/mountain-view/2.jpg",
    cover: "/media/mountain-view/1.jpg",
    gallery: range("mountain-view", 12),
  },
  {
    slug: "family-room-with-attic",
    index: "03",
    name: "Family Room with Attic",
    shortName: "Family Attic",
    tagline: "Room to gather, a loft to wander",
    blurb:
      "Our most generous room — a mezzanine attic reached by a timber ladder, set beneath the full sweep of the barn roof. Made for families and friends travelling together.",
    description: [
      "The Family Room with Attic adds a second storey under the eaves: a timber loft, reached by a ladder, tucked into the apex of the barn roof. Children claim it within minutes.",
      "Downstairs, a comfortable double opens to the balcony and the view; upstairs, the attic makes space for everyone without anyone feeling on top of each other. It is the warmest, most characterful room we have.",
    ],
    fromINR: 6078,
    facts: [
      { label: "Sleeps", value: "Up to 4 guests" },
      { label: "Layout", value: "Bedroom + attic loft" },
      { label: "Feature", value: "Mezzanine under the eaves" },
      { label: "Balcony", value: "Private" },
    ],
    amenities: [
      "Mezzanine attic loft with ladder",
      "Private balcony",
      "Air conditioning",
      "Family bedding configuration",
      "Flat-screen TV, satellite channels",
      "Tea & coffee, replenished daily",
      "Board games & children's menu",
      "En-suite bath with shower",
      "Free Wi-Fi throughout",
    ],
    hero: "/media/family-attic/11.jpg",
    cover: "/media/family-attic/3.jpg",
    gallery: range("family-attic", 13),
  },
];

export const getSuite = (slug: string) =>
  suites.find((s) => s.slug === slug);
