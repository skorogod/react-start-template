import { Category } from './category.interface';

export type Product = {
  title: string;
  costFull: number;
  costDiscount?: number;
  images: string[];
  description?: string;
  category?: Category;
};
