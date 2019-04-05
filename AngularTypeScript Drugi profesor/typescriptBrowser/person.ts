import { IUser } from './test';

export class Person implements IUser {
    name = 'asd';
    email = '';
    firstName: string;
    lastName: string;
    // user: IUser = {
    //     name: 'Danilo',
    //     lastName: 'Mogin',
    //     email: 'danilo.mogin@gmail.com'
    // };
    constructor() {
        this.firstName = 'firstName';
        this.lastName = 'lastName';
    }
    getFullName(): void {
        console.log('Danilo' + ' ' + 'Mogin');
    }
}
