// zadatak 1
// tslint:disable: no-inferrable-types
let string1: string = 'This is my stringy';
let broj1: number = 1;
let boolean: boolean = true;
let boolean2: boolean = false;
let test = function(param1: string, param2: number, param3: boolean) {

    if (param3 === true) {
        // tslint:disable-next-line:max-line-length
        return console.log('zadatak 1: ----boolean-prosledjen-true------ \n' + 'vrednost stringa = ' + param1 + '\n' + 'vrednost broja =' + broj1 + '\n' + 'vrednost booleana = ' + boolean);
    } else {
        return 'boolean koji ste prosledili je false';
    }
};

// zadatak 2

let nizbrojeva1: number[] = [1, 5, 10, 15, 20];
let nizBrojeva2: number[] = [3, 7, 113, 145, 200];

let rows = function(row1: Array<number>, row2: Array<number>) {
    console.log('this is the number row 1 before spread ' + row1);
    console.log('this is the number row 2 before spread ' + row2);
    const nizSpread: number[] = [-10, -5, ...row1, 9, ...row2];
    console.log('Made a new row and added some extra numbers');
    console.log('this is the final number row with spread = ' + nizSpread);
    return null;
};


// zadatak 3
function hranaFunckija(hranaObj: {naziv: string, kalorije: number}) {
    console.log('ovo je naziv hrane: ' + hranaObj.naziv + '\n' + 'ovo je kalorijska vrednost hrane ' + hranaObj.kalorije);
}

class Hrana {
    nazivHrane: string[];
    brojStrane: number;
    constructor(hranaN: string[], nb1: number) {
        this.nazivHrane = hranaN;
        this.brojStrane = nb1;
    }
    listAll() {
       return  console.log('this is the return form the function + \n' + this.nazivHrane + this.brojStrane);
    }
}

class NovaHrana extends Hrana {
}



// pozivi funkcija
console.log(test(string1, broj1, boolean));   // sa boolean = true
console.log(test(string1, broj1, boolean2)); // false
console.log('----------------Pocetak-Zadatka-2---------------- \n');
rows(nizbrojeva1, nizBrojeva2);
console.log('----------------kraj-zadatka-2------------------- \n');
console.log('----------------Pocetak-Zadataka-3--------------- \n');
let mojaHrana = {naziv: 'Sarma je moja omiljena hrana', kalorije: 100 , energetskaVrednost: 200};
// tslint:disable-next-line: max-line-length
hranaFunckija(mojaHrana);  // funckciji interfacu je prosledjen objekat
 /* napomena kada imam vise parametara ne pravi problem, kada imam manjak parametara javlja mi gresku kao undefined za tak parametar */
console.log('----------------kraj-Zadataka-3--------------- \n');
console.log('----------------pocetak-Zadataka-4--------------- \n');
let hrana = new Hrana(['this is my food 1', 'this is my food 2', 'this is my food 3'], 10);
console.log(hrana);
// klasi i njenim konstruktoru su prosledjeni parametri izgleda ok
console.log('----------------kraj-Zadataka-4--------------- \n');
console.log('----------------pocetak-Zadataka-5--------------- \n');
const extendovanaKlasa = new NovaHrana(['this is my new food 1', 'this is my new food 2', 'this is my new food 3'], 69);
console.log(extendovanaKlasa);
console.log('----------------kraj-Zadataka-5--------------- \n');

