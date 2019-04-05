interface menuInterface {
    meals: string[];
    pages: number;
}
class Menu implements menuInterface {
    meals: string[];
    pages: number;
    constructor(myInterface: menuInterface) {
        this.meals = myInterface.meals;
        this.pages = myInterface.pages;
    }
    list(): void {
        console.log(...this.meals);
    }
    custList(): void {
        let customize: string = '';
        for (let i in this.meals) {
            customize += 'Meal: ' + this.meals[i] + '\n';
        }
        console.log(customize);
    }
}

class dailyMenu extends Menu {
    list(): void {
        console.log('Daily Menu _:');
        console.log(...this.meals);
    }
    custList(): void {
        let customize: string = `Daily Menu _:\n`;
        for (let i in this.meals) {
            customize += `Meal:\t${this.meals[i]}\n`;
        }
        console.log(customize);
    }
}

const broj_strana: number = 1;
const nas_meni = new Menu({ meals: ['jelo_1', 'jelo_2', 'jelo_3'], pages: broj_strana });

const dnevni_meni = new dailyMenu({ meals: ['jelo_1', 'jelo_2'], pages: broj_strana });

console.log('Requested List _:');
dnevni_meni.list();
console.log('====================');
console.log('Customizable List _:');
dnevni_meni.custList();
console.log('====================');