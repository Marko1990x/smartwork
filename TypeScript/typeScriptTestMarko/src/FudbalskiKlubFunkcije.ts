import { Igrac } from "./index";
import { FudbalskiKlub } from "./index";

/*   ovaj deo je vezan za igraca posto njega moram da ubacim u fudbalski klub 
registarskaOznaka: number;
    imeIgraca: string;
    prezimeIgraca: string;
    godisteIgraca: number;
    prvaPostava: boolean; */

export let newIgrac1 = new Igrac(13, "Nikola", "Nikolic", 1991, true);
export let newIgrac2 = new Igrac(14, "Petar", "Petrovic", 1989, true);
export let newIgrac3 = new Igrac(15, "Damjan", "Nikolic", 1800, false);

export let x3 = [newIgrac1, newIgrac2, newIgrac3];
//listaIG: [IIgrac] to listaIG: IIgrac[]

/*  ovaj deo je vezan za fudbalski klub gde ubacujem 3 intance igraca jej
public registarskaOznaka: number;
    public nazivKluba: string;
    public krazakOpis: string;
    public listaIgraca: [IIgrac];
*/

// tslint:disable-next-line:max-line-length
export let newFudbalskiKlub = new FudbalskiKlub(1002, "My Sports Club", "Best Club In The Whole World", [newIgrac1, newIgrac2, newIgrac3]);
// jedna instanca fudbalskog kluba


