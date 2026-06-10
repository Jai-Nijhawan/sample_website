// Real guest reviews gathered from Google, TripAdvisor and MakeMyTrip.
// Kept verbatim (lightly trimmed) with genuine attribution.

export type Review = {
  quote: string;
  name: string;
  source: string;
  context: string;
  avatar: string;
  rating: number;
  featured?: boolean;
};

export const reviews: Review[] = [
  {
    quote:
      "Tucked away in a peaceful area with gorgeous mountain views, it was exactly the serene escape we wanted. The staff were incredibly attentive, and the food was delicious and homely — a real highlight. Don't miss the evening tea on the rooftop.",
    name: "Sanjay S.",
    source: "TripAdvisor",
    context: "A perfect family escape",
    avatar: "/media/avatars/sanjay.jpg",
    rating: 5,
    featured: true,
  },
  {
    quote:
      "The place was very luxurious and very beautiful. The mountain views were breathtaking, and the rooms were spotlessly clean.",
    name: "Karan",
    source: "TripAdvisor",
    context: "Stayed in the Mountain View Suite",
    avatar: "/media/avatars/karan.jpg",
    rating: 5,
  },
  {
    quote:
      "Exceptional service from the moment we arrived. The staff were warm and attentive, and the dining was outstanding — fresh, flavourful and beautifully presented.",
    name: "Ankita W.",
    source: "Google",
    context: "October stay",
    avatar: "/media/avatars/ankita.jpg",
    rating: 5,
  },
  {
    quote:
      "Best resort in Bhimtal, with a great mountain view. A newly built property with genuinely luxurious rooms, and the food was delicious.",
    name: "Sonu D.",
    source: "Google",
    context: "Travellers' Choice",
    avatar: "/media/avatars/sonu.jpg",
    rating: 5,
  },
  {
    quote:
      "A comfortable, relaxing stay at an amazing price. The staff were incredibly friendly — the perfect getaway from city life.",
    name: "Parneet K.",
    source: "Google",
    context: "Spring weekend",
    avatar: "/media/avatars/parneet.jpg",
    rating: 5,
  },
];
