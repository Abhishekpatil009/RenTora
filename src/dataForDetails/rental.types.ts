// export interface Owner {
//   id: string;
//   name: string;
//   level: 'Novice' | 'Verified' | 'Elite Owner';
//   avatar: string;
//   joined: string;
//   responseTime: string;
// }

// export interface RentalItem {
//   id: string;
//   title: string;
//   description: string;
//   category: 'Cameras' | 'Bikes' | 'Laptops' | 'Equipment' | 'Audio' | 'Tools';
  
//   // Pricing
//   pricePerDay: number;
//   securityDeposit: number;
  
//   // Stats
//   rating: number;
//   reviews: number;
//   location: string;
  
//   // Media & Details
//   images: string[]; // Array of strings (0 index is cover)
//   features: string[];
  
//   // Relationships
//   owner: Owner;
// }



export type RentalCategory =
  | 'Cameras'
  | 'Bikes'
  | 'Laptops'
  | 'Equipment'
  | 'Audio'
  | 'Tools';

export interface Owner {
  id: string;
  name: string;
  level: 'Novice' | 'Verified' | 'Elite Owner';
  avatar: string;
  joined: string;
  responseTime: string;
}

export interface RentalItem {
  id: string;
  title: string;
  description: string;
  category: RentalCategory;

  // Pricing
  pricePerDay: number;
  securityDeposit: number;

  // Stats
  rating: number;
  reviews: number;
  location: string;

  // Media & Details
  images: string[];
  features: string[];

  // Relationships
  owner: Owner;
}
