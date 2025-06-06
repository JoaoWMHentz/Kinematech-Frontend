export interface Product {
  id: string;
  name: string;
  description?: string;
  price?: number;
  category: Category;
  thumbnail: string;
  photos?: string[];
  showOnHomepage: boolean;
  detailedDescription?: string;
}

export interface Category {
  id: number;
  name: string;
}