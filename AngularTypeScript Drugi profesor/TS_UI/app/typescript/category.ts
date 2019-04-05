export class Category {
    constructor(private _name: string, private _img:string) {}
    get name():string {
        return this._name;
    }
    get img():string {
        return this._img;
    }
}