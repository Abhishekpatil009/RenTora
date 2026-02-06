export type GearItem = {
  id: string;
  title: string;
  price: number;
  status: 'Active' | 'Rented';
  category: string;
  image: string;
};

export type Booking = {
  id: string;
  renter: string;
  item: string;
  date: string;
  total: number;
  status: string;
};

export type Message = {
  id: string;
  user: string;
  text: string;
  time: string;
  unread: boolean;
  avatar: string;
};
