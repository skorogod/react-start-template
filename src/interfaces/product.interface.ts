import { Category } from './category.interface';

export type Product = {
  title: string;
  cost: number;
  images: string[];
  description?: string;
  category?: Category;
};
