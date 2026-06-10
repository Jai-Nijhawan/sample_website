// Booking partners. The site does not process payments — "Reserve" opens a
// chooser that hands guests to the resort's live OTA listings, plus a direct
// call/WhatsApp option. Each row shows the platform's logo; live prices and
// availability appear on the partner site itself.

export type BookingPartner = {
  id: string;
  name: string;
  url: string;
  logo: string;
  note: string;
};

export const bookingPartners: BookingPartner[] = [
  {
    id: "makemytrip",
    name: "MakeMyTrip",
    url: "https://www.makemytrip.com/hotels/the_barns_resort-details-bhimtal.html",
    logo: "/media/logos/makemytrip.png",
    note: "Popular for domestic travellers",
  },
  {
    id: "booking",
    name: "Booking.com",
    url: "https://www.booking.com/hotel/in/the-barns-resort.html",
    logo: "/media/logos/booking.png",
    note: "Free-cancellation rates available",
  },
  {
    id: "goibibo",
    name: "Goibibo",
    url: "https://www.goibibo.com/hotels/the-barns-resort-hotel-in-bhimtal-5000790850195709728/",
    logo: "/media/logos/goibibo.png",
    note: "goCash rewards on every stay",
  },
  {
    id: "agoda",
    name: "Agoda",
    url: "https://www.agoda.com/en-in/the-barns-resorts-h77124648/hotel/bhimtal-in.html",
    logo: "/media/logos/agoda.png",
    note: "Frequent member discounts",
  },
  {
    id: "easemytrip",
    name: "EaseMyTrip",
    url: "https://www.easemytrip.com/hotels/the-barns-resorts-5700144/",
    logo: "/media/logos/easemytrip.png",
    note: "Often the lowest room-only rate",
  },
  {
    id: "airbnb",
    name: "Airbnb",
    url: "https://www.airbnb.co.in/rooms/1311884727015855833",
    logo: "/media/logos/airbnb.png",
    note: "Whole-villa stays, up to 10 guests",
  },
];

export const inrFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});
