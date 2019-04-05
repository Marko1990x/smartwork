import { Category } from './category';
export class AID {
    constructor(private _title: string, private _category: Category, private _price: number) { }
    get title(): string {
        return this._title;
    }
    get category(): Category {
        return this._category;
    }
    get price(): number {
        return this._price;
    }
}