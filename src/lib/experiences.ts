// On-property experiences and the nearby Kumaon. Only what the resort
// genuinely offers or can arrange — no spa, no pool.

export type Experience = {
  index: string;
  title: string;
  blurb: string;
  image: string;
  kind: "On the property" | "Around Bhimtal";
};

export const experiences: Experience[] = [
  {
    index: "01",
    title: "Rooftop Evening Tea",
    blurb:
      "As the light drops behind the ridge, tea is laid on the rooftop terrace. It is the moment guests write home about — the whole valley turning gold, cup in hand.",
    image: "/media/gallery/14.jpg",
    kind: "On the property",
  },
  {
    index: "02",
    title: "Bonfire Under the Stars",
    blurb:
      "On cool Kumaon nights the firepit is lit in the garden. Pull a chair close, watch the hills go dark, and let the mountain quiet do its work.",
    image: "/media/gallery/1.jpg",
    kind: "On the property",
  },
  {
    index: "03",
    title: "Bhimtal Lake & the Island",
    blurb:
      "A fifteen-minute stroll brings you to Bhimtal Lake — boating across still water to the island aquarium, with the hills mirrored all around.",
    image: "/media/gallery/17.jpg",
    kind: "Around Bhimtal",
  },
  {
    index: "04",
    title: "The Sister Lakes — Sattal & Naukuchiatal",
    blurb:
      "Beyond Bhimtal lie the quieter waters of Sattal and Naukuchiatal, ringed by oak and pine — a morning's drive for birdsong, paddling and forest trails.",
    image: "/media/gallery/9.jpg",
    kind: "Around Bhimtal",
  },
  {
    index: "05",
    title: "Walks, Temples & Birdsong",
    blurb:
      "Our team maps gentle hikes to ridgeline temples and Kumaoni villages — the kind of slow walking that the hills were made for.",
    image: "/media/gallery/8.jpg",
    kind: "Around Bhimtal",
  },
  {
    index: "06",
    title: "An Evening at the Barns Table",
    blurb:
      "Homely Indian cooking from our kitchen, served in the garden or to your balcony — fresh, unfussy, and exactly what the mountains call for.",
    image: "/media/gallery/12.jpg",
    kind: "On the property",
  },
];

export type Distance = { place: string; detail: string; time: string };

export const distances: Distance[] = [
  { place: "Bhimtal Lake", detail: "Boating & island aquarium", time: "1.5 km" },
  { place: "Sattal Lake", detail: "Forest & birdwatching", time: "3.5 km" },
  { place: "Naukuchiatal", detail: "The nine-cornered lake", time: "5 km" },
  { place: "Nainital", detail: "Naini Lake & the Mall", time: "22 km" },
  { place: "Pantnagar Airport", detail: "Nearest airport", time: "58 km" },
  { place: "Kathgodam Station", detail: "Nearest railhead", time: "26 km" },
];
