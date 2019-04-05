export class User {
    constructor(public user: string, private _pass: string) { };
    get pass(): string {
        return this._pass;
    }
}