export const products = [
  {
    id: 1,
    name: "GRAVITY OVERSIZE HOODIE",
    price: 145,
    originalPrice: 242,
    discount: "-30%",
    rating: 4.8,
    reviews: 124,
    category: "MEN",
    image: "streetwear_urban_premium_1773052520436.png",
    description: "Premium heavy-weight cotton blend, drop shoulder silhouette for that perfect urban aesthetic."
  },
  {
    id: 2,
    name: "SILK MINIMALIST BLOUSE",
    price: 180,
    originalPrice: 220,
    discount: "-15%",
    rating: 4.9,
    reviews: 86,
    category: "WOMEN",
    image: "luxury_casual_women_1773052588213.png",
    description: "Ethically sourced silk with a fluid drape, perfect for transitional dressing."
  },
  {
    id: 3,
    name: "ESSENTIAL POCKET TEE",
    price: 45,
    rating: 4.5,
    reviews: 210,
    category: "MEN",
    image: "minimalist_apparel_collection_1773052603930.png",
    description: "The foundation of every wardrobe. Premium pima cotton with a precise fit."
  },
  // Generating more products...
  ...Array.from({ length: 27 }, (_, i) => ({
    id: i + 4,
    name: `PREMIUM ITEM VOL. ${i + 4}`,
    price: Math.floor(Math.random() * 200) + 50,
    rating: (Math.random() * 1.5 + 3.5).toFixed(1),
    reviews: Math.floor(Math.random() * 300),
    category: i % 2 === 0 ? "MEN" : "WOMEN",
    image: i % 3 === 0 ? "streetwear_urban_premium_1773052520436.png" : 
           i % 3 === 1 ? "luxury_casual_women_1773052588213.png" : 
           "minimalist_apparel_collection_1773052603930.png",
    description: "High-end design meets seasonal functionality. Designed for the modern professional."
  }))
];
