export interface Category {
    id: number;
    name: string;
}

export interface Rating {
    id: number;
    comment: string;
}

export interface Product {
    id: number;
    name: string;
    originalPrice: string;
    offerPrice?: number;  // ovo je opcioni parametar kod interfaca
    stock: number;
    category: number;
    ratings?: Rating[];  // niz interfaca
}

export interface IProductService {   // export makes it global
     getCategories (): Category[];
     getAllProducts (): Product[];
     getProductsByCategory (param: Category['id']): Product[];
     addProduct (param: Product): void;  // ovaj ne vraca nista po zadatku
     addRating (param: Product['id'], param2: Rating): void;  // pitaj za ovo
}




