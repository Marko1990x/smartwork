let fn = () => {
     return 'response';
    };
// arrow function
// obicna funkcija radi isto
let fn1 = function() {   // javlja greske
    return 'response';
};

let fn_1 = () => 'response';

let fn_2 = function () {
    let test = 'asd';
    test = '1';
    return 'response';
};


/**
 *
 * @param a broj 1
 * @param b broj 2
 * @param c broj 3
 * @param d broj 4
 */
const cetiri = (a: number, b: number, c: number = 0, d: number = 0): number => {
    return a + b + c + d;
};

class Person {
    firstName: string;
    lastName: string;
    constructor() {}

}
const aPerson = new Person();
aPerson.firstName = 'Pera';
console.log('aPerson.firstName');
console.log(aPerson.firstName);
