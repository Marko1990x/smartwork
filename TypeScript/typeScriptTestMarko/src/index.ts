//import { prikaziFudbalskiKlub } from "./app";
import { x3, newIgrac1, newIgrac2, newIgrac3 } from "./FudbalskiKlubFunkcije";  // to su 3 instance classe igrac po zadatku iz drugog ts fajla
import { newFudbalskiKlub } from "./FudbalskiKlubFunkcije";

interface IFudbalskiKlub {
    registarskaOznaka: number;
    nazivKluba: string;
    krazakOpis: string;
    listaIgraca: IIgrac[];
}

interface IIgrac {
    registarskaOznaka: number;
    imeIgraca: string;
    prezimeIgraca: string;
    godisteIgraca: number;
    prvaPostava: boolean;
}

export class FudbalskiKlub implements IFudbalskiKlub {
    public registarskaOznaka: number;
    public nazivKluba: string;
    public krazakOpis: string;
    public listaIgraca: IIgrac[];

    constructor(ID: number, nazivK: string, kratakOP: string, listaIG: IIgrac[]) {
        this.registarskaOznaka = ID;
        this.nazivKluba = nazivK;
        this.krazakOpis = kratakOP;
        this.listaIgraca = listaIG;
    }
}

// klasa igrac po zadatku

// tslint:disable-next-line:max-classes-per-file
export class Igrac implements IIgrac {
    public registarskaOznaka: number;
    public imeIgraca: string;
    public prezimeIgraca: string;
    public godisteIgraca: number;
    public prvaPostava: boolean;
    constructor(iDIgrac: number, imeIg: string, prezimeIg: string, godisteIg: number, prvaPo: boolean) {
        this.registarskaOznaka = iDIgrac;
        this.imeIgraca = imeIg;
        this.prezimeIgraca = prezimeIg;
        this.godisteIgraca = godisteIg;
        this.prvaPostava = prvaPo;
    }
}

// pozivanje konstrucktora da napravi objekat u memoriji

let constIgrac = new Igrac(1, "Marko", "Markovic", 1990, true);
console.log("constIgrac");
console.log(constIgrac);


/*
public registarskaOznaka: number;
    public nazivKluba: string;
    public krazakOpis: string;
    public listaIgraca: [IIgrac];
 */

let constFudbalskiKlub = new FudbalskiKlub(1, "partizan klub", "best sports club", [constIgrac]);
console.log("constFudbalskiKlub" + "this is the fully instanced version of one player");
console.log(constFudbalskiKlub);

console.log("this is the 3 instanced igrac from other ts file");
console.log(x3);
console.log("this is the one instance of fudbalski klub");
console.log(newFudbalskiKlub);
/*
 registarskaOznaka: number;
    imeIgraca: string;
    prezimeIgraca: string;
    godisteIgraca: number;
    prvaPostava: boolean; */


(document.getElementById("prikazi") as HTMLInputElement).addEventListener("click", function () {
    console.log(newFudbalskiKlub);
});


(document.getElementById("dodaj") as HTMLInputElement).addEventListener("click", function () {
    /*
    public registarskaOznaka: number;
    public imeIgraca: string;
    public prezimeIgraca: string;
    public godisteIgraca: number;
    public prvaPostava: boolean; */
    let regID: number = ((document.getElementById("ID") as HTMLInputElement).valueAsNumber);
    let imeIgraca = ((document.getElementById("imeIG") as HTMLInputElement).value);
    let prezimeIgraca = ((document.getElementById("prezIG") as HTMLInputElement).value);
    let godisteIgraca: number = ((document.getElementById("godisteIG") as HTMLInputElement).valueAsNumber);
    let prvaPostava = ((document.getElementById("booleanValue") as HTMLInputElement).value);

    if (prvaPostava === "true") {

        const xxx: boolean = true;

        console.log("regID +imeIgraca + prezimeIgraca + godisteIgraca + prvaPostava");
        // tslint:disable-next-line:max-line-length
        console.log(regID + " sent by the add function" + "\n" + imeIgraca + " sent by the add function" + "\n" + prezimeIgraca + " sent by the add function" + "\n" + godisteIgraca + " sent by the add function" + "\n" + prvaPostava);

        let xNew = new Igrac(regID, imeIgraca, prezimeIgraca, godisteIgraca, xxx);

        console.log("xNew ovo je novi igrac prosledjen konstruktoru ako je vrednost booleana true");
        console.log(xNew);

    } else if (prvaPostava === "false") {

        const xxx: boolean = false;

        console.log("regID +imeIgraca + prezimeIgraca + godisteIgraca + prvaPostava");
        // tslint:disable-next-line:max-line-length
        console.log(regID + " sent by the add function" + "\n" + imeIgraca + " sent by the add function" + "\n" + prezimeIgraca + " sent by the add function" + "\n" + godisteIgraca + " sent by the add function" + "\n" + prvaPostava);

        let xNew = new Igrac(regID, imeIgraca, prezimeIgraca, godisteIgraca, xxx);

        console.log("xNew ovo je novi igrac prosledjen konstruktoru ako je vrednost booleana false");
        console.log(xNew);

    } else {
        console.log("niste uneli boolean vrednost unesite ili true ili false")
    }
});



(document.getElementById("obrisi") as HTMLInputElement).addEventListener("click", function () {
    for (let i = 0; i < x3.length; i++) {
        let igrac = x3[i];
        // console.log("this is the value sent by the for loop");
        // console.log(igrac); 

        let regID: number = ((document.getElementById("ID") as HTMLInputElement).valueAsNumber);
        let prvaPostava = ((document.getElementById("booleanValue") as HTMLInputElement).value);

        if (prvaPostava === "true") {
            console.log("uneti korisnik ne moze da se brise")
        } if (prvaPostava === "false") {
            console.log("uklonjen je korisnik sa Id om i sa prvom postavom koja je false");
            x3.pop();
            console.log(igrac);
        }
    }
});

let xxxx: number = ((document.getElementById("ID") as HTMLInputElement).valueAsNumber);
var value = document.getElementById("ID");

(document.getElementById("izmeni") as HTMLInputElement).addEventListener("click", function () {
    for (let i = 0; i < x3.length; i++) {
        
        let igrac = x3[i];
        console.log(igrac.registarskaOznaka + " " + console.log(xxxx));

        if (igrac.registarskaOznaka === xxxx) {

            let imeIgraca = ((document.getElementById("imeIG") as HTMLInputElement).value);
            let prezimeIgraca = ((document.getElementById("prezIG") as HTMLInputElement).value);

            let x = new Igrac(xxxx, imeIgraca, prezimeIgraca, igrac.godisteIgraca, igrac.prvaPostava);

            console.log("igrac je izmenjen")
            console.log(x + " this is the new player");

        } else {
            console.log("the user id doesnt math those in memory");
        }
    }
});