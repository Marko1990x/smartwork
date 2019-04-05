import { Person } from './person';

class Predavac extends Person {
    getFullName(): void {
        console.log('Danilo' + ' ' + 'Mogin');
    }
}
const pred: Person = new Predavac();
console.log(`pred.getFullName()`);
pred.getFullName();
