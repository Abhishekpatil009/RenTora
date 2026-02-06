export type BookingStatus =
  | 'pending'
  | 'confirmed'
  | 'returned'
  | 'damaged'
  | 'cancelled';

export interface RentalItem {
  id: string;
  title: string;
  category: string;
  pricePerDay: number;
  securityDeposit: number;
  rating: number;
  image: string;
  ownerId: string;
  description: string;
}

export interface Category {
  id: string;
  label: string;
  icon: string;
}
