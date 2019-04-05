import { Rating } from './rating';
export interface Product {
    id: number;
    name: string;
    originalPrice: number;
    offerPrice?: number;
    stock: number;
    category: number;
    ratings?: Rating[];
}