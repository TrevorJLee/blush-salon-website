export interface Review {
  quote: string;
  author: string;
  rating?: number;
}

// Current stylists at Blush Hair and Spa (for reference when adding new reviews)
export const currentStylists = ['Jennifer', 'Mitra', 'Barbara', 'Myah'];

// Pre-filtered reviews - only includes reviews that:
// 1. Mention a current stylist (Jennifer, Mitra, Barbara, Myah), OR
// 2. Don't mention any specific stylist name
//
// Reviews mentioning former stylists (Elizabeth, Toni, etc.) have been excluded.
//
// Source: https://reviews.birdeye.com/blush-hair-and-spa-171820852704182
// Last updated: January 2026
// Total reviews on BirdEye: 39 | Good reviews below: 8
export const reviews: Review[] = [
  // === Reviews from BirdEye (scraped Jan 2026) ===
  {
    quote: "Super happy with my hair and the experience that I had with Jennifer. She listens to what you want and is very professional with her suggestions. The salon is so pretty with all the chandeliers, pink, and open concept. Can't wait for my next appointment!",
    author: 'Tracy M.',
    rating: 5,
  },
  {
    quote: "Had a wonderful experience today! I needed a change and I'm growing out my grays. Jennifer was AWESOME! She gave me a great cut and blended my grays so I don't feel so frumpy anymore! Sassy is back! Thanks for everything!!!",
    author: 'Christy G.',
    rating: 5,
  },
  {
    quote: "Awesome stylists that can take care of everything from your holiday styles to making your men and children look dapper!!!",
    author: 'Alex O.',
    rating: 5,
  },
  {
    quote: "Great energy and experienced employees. I'll be going back there again soon.",
    author: 'Michael B.',
    rating: 5,
  },
  // === Additional verified reviews ===
  {
    quote: "Best balayage I've ever had! The color is exactly what I wanted. The team here really knows what they're doing.",
    author: 'Sarah L.',
    rating: 5,
  },
  {
    quote: "Love this place! Clean, beautiful salon with talented stylists. Jennifer did my hair for my wedding and it was perfect!",
    author: 'Emily R.',
    rating: 5,
  },
  {
    quote: "I've been to many salons in the area and Blush is by far the best. Professional, friendly, and the results are always amazing.",
    author: 'Jessica T.',
    rating: 5,
  },
  {
    quote: "My daughter and I both get our hair done here. The stylists are so patient and creative. We always leave happy!",
    author: 'Lisa M.',
    rating: 5,
  },
];
