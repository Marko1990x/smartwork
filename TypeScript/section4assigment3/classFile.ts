import { IProductService, Product, Category } from './interfaces';

class ProductServices implements IProductService {
    private parametar1;
    private parametar2;
    constructor(product: Product, category: Category){
        this.parametar1 + product
        this.parametar2 + category
    }
}
