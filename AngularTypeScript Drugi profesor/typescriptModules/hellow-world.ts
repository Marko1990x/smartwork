import { Person } from './person';

class Predavac extends Person {
    getFullName(): void {
        console.log('this.firstName' + ' ' + 'this.lastName');
    }
}
const pred: Person = new Predavac();
console.log(`pred.getFullName()`);
console.log(pred.getFullName());
