import { Category } from './category';
import { Product } from './product';
import { Rating } from './rating';
export interface IProductService {
    getCategories(): Category[];
    getAllProducts(): Product[];
    getProductsByCategory(categoryId: number): Product[];
    addProduct(product: Product): void;
    addRating(productId: number, rating: Rating): void;
}