// Central site configuration for The Barns Resort.
// Single source of truth for contact details, navigation, and brand copy.

export const site = {
  name: "The Barns Resort",
  shortName: "The Barns",
  tagline: "Raw & Luxury, in the Kumaon hills",
  location: "Bhimtal · Uttarakhand",
  url: "https://www.thebarnsresort.in",

  // Sales team lines handle bookings and are listed first; the first one is the
  // primary number. The reception line is listed last.
  reservationPhones: [
    { display: "+91 63985 09035", raw: "+916398509035" },
    { display: "+91 96672 25444", raw: "+919667225444" },
  ],
  receptionPhone: { display: "+91 87006 19502", raw: "+918700619502" },
  whatsappDisplay: "+91 92057 68448",
  whatsappRaw: "+919205768448",
  whatsapp: "919205768448",
  whatsappMessage:
    "Hello, I'd like to enquire about a stay at The Barns Resort, Bhimtal.",
  email: "sales.thebarnsresortbhimtal@gmail.com", // primary enquiry inbox
  emails: [
    "sales.thebarnsresortbhimtal@gmail.com",
    "thebarnsresortbhimtal@gmail.com",
  ],

  address: {
    line1: "Dungsil, Bhimtal Road",
    line2: "Bhimtal, Nainital District",
    region: "Uttarakhand 263136",
    country: "India",
  },

  geo: { lat: 29.334642, lng: 79.561993 },

  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.21677219707!2d79.56199287582469!3d29.334642251851093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a097d616b6033f%3A0xe1e196bb884a5848!2sThe%20Barns%20Resorts!5e0!3m2!1sen!2sin!4v1734257101941!5m2!1sen!2sin",
  mapsLink: "https://maps.google.com/?q=The+Barns+Resort+Bhimtal",

  social: {
    instagram: "https://www.instagram.com/thebarnsresort",
    facebook: "https://www.facebook.com/61570214187338",
  },

  rating: { value: 4.7, count: 84, source: "Google" },

  policies: {
    checkIn: "12:00 PM",
    checkOut: "11:00 AM",
    pets: "Pets are not accommodated",
    children: "Children of all ages are warmly welcomed",
  },
} as const;

// Four-page structure: Home (via logo / first link), Suites, Experiences,
// Contact. Dining lives on Experiences; the gallery and location live on Home.
export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Suites", href: "/suites" },
  { label: "Experiences", href: "/experiences" },
  { label: "Contact", href: "/contact" },
] as const;

// Secondary links kept for the footer (content preserved on merged pages).
export const footerNav = [
  { label: "Home", href: "/" },
  { label: "Suites", href: "/suites" },
  { label: "Experiences & Dining", href: "/experiences" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Location", href: "/#location" },
  { label: "Journal", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export function whatsappLink() {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    site.whatsappMessage,
  )}`;
}
