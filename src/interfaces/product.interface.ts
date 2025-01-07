import { Category } from "./category.interface";

export type  Product  = {
    title: string;
    cost: number;
    image: string;
    description: string;
    category: Category;
}