export const products = [
  // New Arrivals
  { id: 1, name: 'T-shirt with Tape Details', price: 120, rating: 4.5, reviews: 156, isNew: true, category: 'men', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop' },
  { id: 2, name: 'Skinny Fit Jeans', price: 240, rating: 3.5, reviews: 210, oldPrice: 260, discount: 20, isNew: true, category: 'men', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop' },
  { id: 3, name: 'Checkered Shirt', price: 180, rating: 4.5, reviews: 89, isNew: true, category: 'men', image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=1000&auto=format&fit=crop' },
  { id: 4, name: 'Sleeve Striped T-shirt', price: 130, rating: 4.5, reviews: 145, oldPrice: 160, discount: 30, isNew: true, category: 'men', image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1000&auto=format&fit=crop' },
  
  // Top Selling
  { id: 5, name: 'Vertical Striped Shirt', price: 212, rating: 5.0, reviews: 290, oldPrice: 232, discount: 20, category: 'men', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1000&auto=format&fit=crop' },
  { id: 6, name: 'Courage Graphic T-shirt', price: 145, rating: 4.0, reviews: 132, category: 'men', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop' },
  { id: 7, name: 'Loose Fit Bermuda Shorts', price: 80, rating: 3.0, reviews: 45, category: 'men', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=1000&auto=format&fit=crop' },
  { id: 8, name: 'Faded Skinny Jeans', price: 210, rating: 4.5, reviews: 198, category: 'men', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1000&auto=format&fit=crop' },

  // On Sale / Collection Expansion
  { id: 9, name: 'Denim Jacket', price: 160, rating: 4.8, reviews: 120, oldPrice: 200, discount: 20, category: 'men', image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1000&auto=format&fit=crop' },
  { id: 10, name: 'Linen Blend Suit', price: 450, rating: 4.9, reviews: 56, category: 'men', image: 'https://images.unsplash.com/photo-1594932224030-94555811da6d?q=80&w=1000&auto=format&fit=crop' },
  { id: 11, name: 'Floral Summer Dress', price: 190, rating: 4.7, reviews: 230, category: 'women', image: 'https://images.unsplash.com/photo-1572804013307-a9a11db9824d?q=80&w=1000&auto=format&fit=crop' },
  { id: 12, name: 'Silk Blouse', price: 140, rating: 4.6, reviews: 112, oldPrice: 180, discount: 22, category: 'women', image: 'https://images.unsplash.com/photo-1624222247344-550fb60583ad?q=80&w=1000&auto=format&fit=crop' },
  { id: 13, name: 'Wide Leg Trousers', price: 120, rating: 4.4, reviews: 88, category: 'women', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop' },
  { id: 14, name: 'Leather Biker Jacket', price: 320, rating: 4.9, reviews: 45, category: 'women', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1000&auto=format&fit=crop' },
  { id: 15, name: 'Knitted Sweater', price: 95, rating: 4.3, reviews: 176, category: 'unisex', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1000&auto=format&fit=crop' },
  { id: 16, name: 'Canvas Sneakers', price: 75, rating: 4.2, reviews: 310, category: 'accessories', image: 'https://images.unsplash.com/photo-1525966222034-adc3884a60d0?q=80&w=1000&auto=format&fit=crop' },
  { id: 17, name: 'Sunglasses Chrome', price: 150, rating: 4.7, reviews: 67, oldPrice: 200, discount: 25, category: 'accessories', image: 'https://images.unsplash.com/photo-1511499767390-91f19766a817?q=80&w=1000&auto=format&fit=crop' },
  { id: 18, name: 'Minimalist Watch', price: 290, rating: 4.8, reviews: 124, category: 'accessories', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop' },
  { id: 19, name: 'Wool Beanie', price: 45, rating: 4.5, reviews: 56, category: 'accessories', image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1000&auto=format&fit=crop' },
  { id: 20, name: 'Oxford Shoes', price: 220, rating: 4.6, reviews: 89, category: 'men', image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1000&auto=format&fit=crop' },
  { id: 21, name: 'Cashmere Scarf', price: 110, rating: 4.9, reviews: 42, oldPrice: 150, discount: 27, category: 'accessories', image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=1000&auto=format&fit=crop' },
  { id: 22, name: 'High-Waist Skirt', price: 85, rating: 4.4, reviews: 73, category: 'women', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1000&auto=format&fit=crop' },
  { id: 23, name: 'Classic Trench Coat', price: 380, rating: 4.9, reviews: 31, category: 'women', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop' },
  { id: 24, name: 'Graphic Hoodie', price: 125, rating: 4.5, reviews: 152, oldPrice: 180, discount: 30, category: 'unisex', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop' },
  { id: 25, name: 'Cargo Pants', price: 110, rating: 4.3, reviews: 94, category: 'men', image: 'https://images.unsplash.com/photo-1624373401509-f30894082dc8?q=80&w=1000&auto=format&fit=crop' },
  { id: 26, name: 'Satin Slip Dress', price: 160, rating: 4.7, reviews: 65, category: 'women', image: 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?q=80&w=1000&auto=format&fit=crop' },
  { id: 27, name: 'Leather Belt', price: 65, rating: 4.8, reviews: 120, category: 'accessories', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop' },
  { id: 28, name: 'Polo Shirt', price: 90, rating: 4.5, reviews: 215, oldPrice: 110, discount: 18, category: 'men', image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1000&auto=format&fit=crop' },
  { id: 29, name: 'Summer Romper', price: 75, rating: 4.4, reviews: 48, category: 'women', image: 'https://images.unsplash.com/photo-1616428751322-178456de9c4c?q=80&w=1000&auto=format&fit=crop' },
  { id: 30, name: 'Beanie Orange', price: 40, rating: 4.2, reviews: 34, oldPrice: 60, discount: 33, category: 'accessories', image: 'https://images.unsplash.com/photo-1618354691792-d1d42acfd860?q=80&w=1000&auto=format&fit=crop' },
  
  // New AI Generated & Premium Selection (15 More)
  { id: 31, name: 'Premium Archi-Watch', price: 550, rating: 5.0, reviews: 12, isNew: true, category: 'accessories', image: '/products/watch.png' },
  { id: 32, name: 'Neo-Urban Sneakers', price: 320, rating: 4.9, reviews: 45, isNew: true, category: 'accessories', image: '/products/sneakers.png' },
  { id: 33, name: 'Geometric Silk Scarf', price: 180, rating: 4.8, reviews: 28, category: 'accessories', image: '/products/scarf.png' },
  { id: 34, name: 'Sculptural Leather Bag', price: 890, rating: 5.0, reviews: 8, isNew: true, category: 'accessories', image: '/products/handbag.png' },
  { id: 35, name: 'Reflective Arch-Glasses', price: 240, rating: 4.7, reviews: 19, category: 'accessories', image: '/products/sunglasses.png' },
  { id: 36, name: 'Charcoal Wool Overcoat', price: 420, rating: 4.9, reviews: 34, isNew: true, category: 'men', image: '/products/overcoat.png' },
  
  // Premium Unsplash Batch
  { id: 37, name: 'Oversized Knit Vest', price: 110, rating: 4.6, reviews: 52, category: 'unisex', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop' },
  { id: 38, name: 'Pleated Midi Skirt', price: 145, rating: 4.5, reviews: 89, oldPrice: 180, discount: 20, category: 'women', image: 'https://images.unsplash.com/photo-1577900232427-18219b9166a0?q=80&w=1000&auto=format&fit=crop' },
  { id: 39, name: 'Chunky Sole Boots', price: 280, rating: 4.8, reviews: 73, category: 'accessories', image: 'https://images.unsplash.com/photo-1520639889410-d04196f72a5a?q=80&w=1000&auto=format&fit=crop' },
  { id: 40, name: 'Velvet Evening Pouch', price: 160, rating: 4.7, reviews: 41, category: 'accessories', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop' },
  { id: 41, name: 'Double-Breasted Blazer', price: 340, rating: 4.9, reviews: 65, category: 'women', image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1000&auto=format&fit=crop' },
  { id: 42, name: 'Minimalist Card Holder', price: 85, rating: 4.8, reviews: 112, category: 'accessories', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1000&auto=format&fit=crop' },
  { id: 43, name: 'Ribbed Turtle Neck', price: 130, rating: 4.6, reviews: 94, oldPrice: 160, discount: 19, category: 'unisex', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1000&auto=format&fit=crop' },
  { id: 44, name: 'Suede Loafers', price: 210, rating: 4.7, reviews: 58, category: 'men', image: 'https://images.unsplash.com/photo-1531310197839-ccf54624b09f?q=80&w=1000&auto=format&fit=crop' },
  { id: 45, name: 'Quilted Puffer Jacket', price: 380, rating: 4.9, reviews: 82, isNew: true, category: 'unisex', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop' }
];
