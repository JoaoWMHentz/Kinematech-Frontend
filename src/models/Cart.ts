import { Product } from './Product';
import { User } from './User';

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

export interface Cart {
  id: string;
  user: User;
  items: CartItem[];
}