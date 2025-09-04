export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'burger' | 'side' | 'drink' | 'dessert';
  popular?: boolean;
  new?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
  image: string;
  isActive: boolean;
}