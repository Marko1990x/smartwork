import { IspitniRok } from "./index";

/*
public brojIndexa: number;
    public imeStudenta: string;
    public prezimeStudenta: string;
    public sifraPredmeta: number;
    public nazivPredmeta: string;
*/

export class Printy {
    constructor(){
    }
   public printStudents() {
            let student1 = new IspitniRok(1111, "Pera", "Peric", 1, "Osnove Programiranja");
            let student2 = new IspitniRok(1212, "Branka", "Beric", 2, "filozofija");
            let student3 = new IspitniRok(1311, "Zoran", "Zoric", 2, "Fizika");

            const x = [student1, student2, student3];
            console.log(x);
        
    }
}


