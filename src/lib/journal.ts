// The Journal. Posts are ported at the exact slugs the current site already
// ranks for (including the original "attrection" spelling) to preserve indexed
// URLs, with rewritten, genuinely useful content.

export type Block = { h?: string; p: string[] };

export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  excerpt: string;
  category: string;
  readMins: number;
  hero: string;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "the-barns-resort",
    title: "The Barns Resort: where the mountains meet a fine hotel",
    metaTitle: "The Barns Resort, Bhimtal — Our Story",
    description:
      "The story behind The Barns Resort in Bhimtal — barn-style architecture, Kumaoni craft and quiet luxury a short walk from the lake.",
    excerpt:
      "How a hillside of stone and pine became a twelve-room resort that guests compare to a five-star stay.",
    category: "The House",
    readMins: 4,
    hero: "/media/gallery/1.jpg",
    body: [
      {
        p: [
          "The Barns began with a view and a feeling — that the rough, honest craft of the Kumaon and the comforts of a fine hotel need not live apart. We built into the slope above Bhimtal rather than flattening it, letting the land set the shape of the rooms.",
        ],
      },
      {
        h: "Raw and luxury",
        p: [
          "Stone gathered from the hillside meets pine cut for the roofs; inside, vaulted timber ceilings rise over deep beds and full-height glass. The result is a place that feels rooted in the mountains yet wants for nothing.",
          "We don't claim a star rating. We'd rather earn the comparison — and our guests, gratifyingly, keep making it.",
        ],
      },
      {
        h: "Twelve rooms, three characters",
        p: [
          "There are just twelve rooms, in three styles: the Suite with Balcony beneath its glazed apex, the Mountain View Suite framed by a wall of glass, and the Family Room with Attic, with its timber loft under the eaves. Every one opens to a private balcony and a view worth waking for.",
        ],
      },
    ],
  },
  {
    slug: "luxury-resorts-bhimtal",
    title: "What makes a luxury resort in Bhimtal worth the journey",
    metaTitle: "Luxury Resorts in Bhimtal — What to Look For",
    description:
      "Choosing a luxury resort in Bhimtal? Here's what genuinely matters — views, quiet, craft and care — and how The Barns measures up.",
    excerpt:
      "Bhimtal has no shortage of places to stay. A few things separate a genuine retreat from a room with a view.",
    category: "Travel Notes",
    readMins: 5,
    hero: "/media/gallery/9.jpg",
    body: [
      {
        p: [
          "Bhimtal has grown busy, and rooms here are easy to find. A true retreat is harder. After a few stays you learn to look past the photographs for the things that actually shape a holiday in the hills.",
        ],
      },
      {
        h: "A view you can live with",
        p: [
          "Many rooms claim a mountain view; fewer are designed around one. Look for a private balcony and glass that opens properly — the difference between glancing at the hills and living among them.",
        ],
      },
      {
        h: "Quiet, and the right kind of distance",
        p: [
          "The best Bhimtal stays sit a little above the town: close enough to walk to the lake, far enough that the evenings are silent but for the wind. That balance is rarer than it sounds.",
        ],
      },
      {
        h: "Care over grandeur",
        p: [
          "Luxury in the mountains is less about marble and more about warmth — a fire lit without asking, tea on the roof at sunset, a kitchen that cooks like home. It's the care that guests remember.",
        ],
      },
    ],
  },
  {
    slug: "best-hotels-in-bhimtal",
    title: "Choosing among the best hotels in Bhimtal",
    metaTitle: "Best Hotels in Bhimtal — An Honest Guide",
    description:
      "An honest guide to picking among the best hotels in Bhimtal — location, room type, season and what to ask before you book.",
    excerpt:
      "A short, honest guide to booking well in Bhimtal — by location, by room, and by season.",
    category: "Travel Notes",
    readMins: 4,
    hero: "/media/gallery/8.jpg",
    body: [
      {
        h: "Start with location",
        p: [
          "Lakeside is lively; the hillside above is calmer and cooler, with the better views. Decide which holiday you want before you compare rooms — it narrows the field quickly.",
        ],
      },
      {
        h: "Match the room to the party",
        p: [
          "Couples are happiest in a view-led room; families need space to spread out. A room with a loft or attic earns its keep when you're travelling with children.",
        ],
      },
      {
        h: "Mind the season",
        p: [
          "Spring and autumn are golden. Monsoon brings mist and green but slower days. Winters are crisp and clear — pack for cold nights and ask whether a fire or heater is on hand.",
        ],
      },
      {
        h: "Ask before you book",
        p: [
          "Three questions settle most things: Is the view private? Is breakfast included? Can you arrange a transfer? A good resort answers all three without hesitation.",
        ],
      },
    ],
  },
  {
    slug: "rooms-in-bhimtal",
    title: "Rooms in Bhimtal: a guide to the three suites at The Barns",
    metaTitle: "Rooms in Bhimtal — The Suites at The Barns",
    description:
      "A guide to rooms in Bhimtal at The Barns Resort — the Suite with Balcony, Mountain View Suite and Family Room with Attic.",
    excerpt:
      "Three characters of room, each with a private balcony — how to choose between them.",
    category: "The Rooms",
    readMins: 3,
    hero: "/media/suite-balcony/1.jpg",
    body: [
      {
        h: "Suite with Balcony",
        p: [
          "Our signature room, crowned by a vaulted pine ceiling and a glazed apex that pulls the sky indoors. Best for those who want the architecture to be part of the stay.",
        ],
      },
      {
        h: "Mountain View Suite",
        p: [
          "Built around a floor-to-ceiling window onto the ridgelines, with a calm, contemporary hand. The room we recommend for a romantic escape.",
        ],
      },
      {
        h: "Family Room with Attic",
        p: [
          "A timber loft under the eaves, reached by a ladder — space for everyone, and a small adventure for younger guests. The warmest, most characterful room we have.",
        ],
      },
    ],
  },
  {
    slug: "bhimtal-lake-attractions",
    title: "Bhimtal Lake and the things to do around it",
    metaTitle: "Bhimtal Lake Attractions — Boating, the Island & More",
    description:
      "Bhimtal Lake attractions — boating to the island aquarium, the sister lakes of Sattal and Naukuchiatal, temples and trails near The Barns Resort.",
    excerpt:
      "The lake is the heart of it — and there's a whole district of quieter water and forest just beyond.",
    category: "Around Bhimtal",
    readMins: 4,
    hero: "/media/gallery/17.jpg",
    body: [
      {
        h: "The lake and its island",
        p: [
          "Bhimtal Lake is larger and calmer than its famous neighbour in Nainital. Hire a boat across to the little island at its centre, home to an aquarium, and watch the hills reflect in the still water.",
        ],
      },
      {
        h: "The sister lakes",
        p: [
          "A short drive brings you to Sattal — a cluster of interconnected lakes ringed by oak and pine, beloved of birdwatchers — and Naukuchiatal, the nine-cornered lake, good for a quiet paddle.",
        ],
      },
      {
        h: "Temples and trails",
        p: [
          "The Bhimeshwar temple sits by the lake, and gentle ridge walks lead to viewpoints and Kumaoni villages. Our team will point you to the right trail for the morning.",
        ],
      },
    ],
  },
  {
    slug: "tourist-attrection-in-bhimtal",
    title: "Tourist attractions in Bhimtal: a local's shortlist",
    metaTitle: "Tourist Attractions in Bhimtal — A Local Shortlist",
    description:
      "Tourist attractions in and around Bhimtal — lakes, temples, viewpoints and day trips to Nainital, Sattal and Naukuchiatal from The Barns Resort.",
    excerpt:
      "Beyond the lake — a shortlist of what's genuinely worth your time around Bhimtal.",
    category: "Around Bhimtal",
    readMins: 5,
    hero: "/media/gallery/19.jpg",
    body: [
      {
        h: "On the water",
        p: [
          "Boating on Bhimtal, the island aquarium, and a half-day at Sattal for birdsong and forest. Naukuchiatal rewards an early start before the day-trippers arrive.",
        ],
      },
      {
        h: "A day in Nainital",
        p: [
          "About an hour away, Naini Lake and the Mall make for a lively day out — the cable car up to Snow View on a clear day is worth the queue.",
        ],
      },
      {
        h: "Temples and viewpoints",
        p: [
          "Bhimeshwar Mahadev by the lake, Hanuman temples on the ridges, and quiet viewpoints where the Himalaya line the horizon on a clear morning.",
        ],
      },
      {
        h: "Slow it down",
        p: [
          "The truth is that Bhimtal rewards doing less. A walk, a boat, a long lunch and an evening by the fire is, for many of our guests, the whole point.",
        ],
      },
    ],
  },
  {
    slug: "hotel-contact-in-bhimtal",
    title: "Planning your stay: how to reach The Barns in Bhimtal",
    metaTitle: "Hotel Contact in Bhimtal — Reach The Barns Resort",
    description:
      "How to contact and reach The Barns Resort in Bhimtal — phone, WhatsApp, directions from Pantnagar Airport and Kathgodam, and booking options.",
    excerpt:
      "Everything you need to get in touch and get here — by air, rail or road.",
    category: "Plan Your Stay",
    readMins: 3,
    hero: "/media/gallery/12.jpg",
    body: [
      {
        h: "Getting in touch",
        p: [
          "The quickest way to reach us is by phone or WhatsApp on +91 87006 19502. Reception answers promptly and is glad to help with rooms, transfers and anything your stay needs.",
        ],
      },
      {
        h: "Getting here",
        p: [
          "Pantnagar Airport is about 58 km away; Kathgodam, the nearest railhead, around 26 km. By road it's a six to seven hour drive from Delhi through the Kumaon. We can arrange a car for the last stretch.",
        ],
      },
      {
        h: "Booking a room",
        p: [
          "Reserve through your preferred partner — Booking.com, MakeMyTrip, Agoda, Goibibo, EaseMyTrip or Airbnb — or call us to book directly and to arrange anything special for your arrival.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
