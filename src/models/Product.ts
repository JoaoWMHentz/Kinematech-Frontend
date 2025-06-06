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
  weight?: number;
  length?: number;
  width?: number;
  height?: number;
  packageInfo?: Package;
}

export interface Category {
  id: number;
  name: string;
}

export interface Package {
  id: string;
  length: number;
  width: number;
  height: number;
  maxWeight: number;
  description?: string;
}