import { IProductService } from '../interfaces/IProductService';
import { Product } from '../interfaces/product';
import { Category } from '../interfaces/category';
import { Rating } from '../interfaces/rating';
export class ProductService implements IProductService {
    private products: Product[];
    private categories: Category[];
    constructor(products: Product[], categories: Category[]) {
        this.products = products;
        this.categories = categories;
    }
    getCategories() {
        return this.categories;
    }
    getAllProducts() {
        return this.products;
    }
    getProductsByCategory(categoryId: number) {
        return this.products.filter(product => product.category === categoryId);
    }
    addProduct(product: Product) {
        return this.products.push(product);
    }
    addRating(productId: number, rating: Rating) {
        let productIndex: number = this.products.findIndex(product => product.id === productId);
        if (!!this.products[productIndex].ratings) {
            this.products[productIndex].ratings!.push(rating);
        } else {
            this.products[productIndex].ratings = [rating];
        }
    }
}