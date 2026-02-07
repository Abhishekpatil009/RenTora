// src/data/mockItems.ts

export interface LandingPageRentalItem  {
  id: string;
  title: string;
  category: string;
  pricePerDay: number;
  location: string;
  rating: number;
  reviews: number;
  image: string;
  featured?: boolean;
}

export const MOCK_ITEMS: LandingPageRentalItem [] = [
  {
    id: "1",
    title: "Sony Alpha a7 IV Camera",
    category: "Cameras",
    pricePerDay: 2500,
    location: "Mumbai",
    rating: 4.9,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800",
    featured: true,
  },
  {
    id: "2",
    title: "DJI Mavic 3 Pro Drone",
    category: "Drones",
    pricePerDay: 3200,
    location: "Pune",
    rating: 4.8,
    reviews: 94,
    image:
      "https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=800",
    featured: true,
  },
  {
    id: "3",
    title: "MacBook Pro M2",
    category: "Laptops",
    pricePerDay: 1800,
    location: "Bangalore",
    rating: 4.7,
    reviews: 76,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800",
    featured: true,
  },
  {
    id: "4",
    title: "Royal Enfield Classic 350",
    category: "Bikes",
    pricePerDay: 1200,
    location: "Delhi",
    rating: 4.6,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800",
    featured: true,
  },
];
