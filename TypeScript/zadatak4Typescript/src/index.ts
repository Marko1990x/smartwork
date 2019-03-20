import { Printy } from "./StudentskaSluzba";

interface Ispit {
    brojIndexa: number;
    imeStudenta: string;
    prezimeStudenta: string;
    sifraPredmeta: number;
    nazivPredmeta: string;
}

function printSsluzba(IssObj: Ispit) {
    console.log(IssObj);
}

let myInterface = {
    brojIndexa: 10, imeStudenta: "Marko", prezimeStudenta: "markovic",
    sifraPredmeta: 1001, nazivPredmeta: "programing",
};

printSsluzba(myInterface);

export class IspitniRok implements Ispit {
    public brojIndexa: number;
    public imeStudenta: string;
    public prezimeStudenta: string;
    public sifraPredmeta: number;
    public nazivPredmeta: string;
    // tslint:disable-next-line:max-line-length
    constructor(brojInd: number, imeStudenta: string, prezimeStudenta: string, sifraPredmeta: number, nazivPredmeta: string) {
        this.brojIndexa = brojInd;
        this.imeStudenta = imeStudenta;
        this.prezimeStudenta = prezimeStudenta;
        this.sifraPredmeta = sifraPredmeta;
        this.nazivPredmeta = nazivPredmeta;

    }
}

let x = new Printy();
x.printStudents();