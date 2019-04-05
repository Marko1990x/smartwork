import { IspitniRok } from './classes/IspitniRok';

const rokovi: IspitniRok[] = [];

// let isp1 = new IspitniRok(1111, 'Pera', 'Perić', 1, 'Osnove programiranja');
// let isp2 = new IspitniRok(1111, 'Pera', 'Perić', 1, 'Osnove programiranja');
// let isp3 = new IspitniRok(1111, 'Pera', 'Perić', 1, 'Osnove programiranja');

// rokovi.push(isp1);
// rokovi.push(isp2);s
// rokovi.push(isp3);

rokovi.push(new IspitniRok(1111, 'Pera', 'Perić', 1, 'Osnove programiranja'));
rokovi.push(new IspitniRok(1212, 'Branka', 'Berić', 2, 'Fizika'));
rokovi.push(new IspitniRok(1311, 'Zoran', 'Zorić', 2, 'Fizika'));
function nadjiStudenta(ime: string, prezime: string, predmet?: number): number {
    for (let i in rokovi) {
        if (rokovi[i].imeStudenta === ime
            && rokovi[i].prezimeStudenta === prezime) {
            if (predmet) {
                if (rokovi[i].sifraPredmeta === predmet) {
                    return Number(i);
                }
            } else {
                return Number(i);
            }
        }
    }
    return -1;
}


export function unesiIspitniRok(noviRok: IspitniRok): void {
    rokovi.push(new IspitniRok(
        noviRok.brojIndeksa,
        noviRok.imeStudenta,
        noviRok.prezimeStudenta,
        noviRok.sifraPredmeta,
        noviRok.nazivPredmeta
    ));
}
export function obrisiIspitniRok(ime: string, prezime: string, predmet: number): string {
    const findMeh: number = nadjiStudenta(ime, prezime, predmet);
    if (findMeh !== -1) {
        rokovi.splice(findMeh, 1);
        return '<p>Uspesno brisanje!</p>';
    } else {
        return '<p>Ne postoji student sa zadatim parametrima.</p>';
    }
}
export function izmeniIspitniRok(oldStudent: IspitniRok, newStudent: IspitniRok): string {
    const findMeh: number = nadjiStudenta(oldStudent.imeStudenta, oldStudent.prezimeStudenta, oldStudent.sifraPredmeta);
    if (findMeh !== -1) {
        rokovi[findMeh] = newStudent;
        return '<p>Uspesna izmena</p>';
    } else {
        return '<p>Ne postoji student sa zadatim parametrima.</p>';
    }
}

export function prikaziIspitniRok(ime: string, prezime: string): string {
    const findMeh: number = nadjiStudenta(ime, prezime);
    if (findMeh !== -1) {
        let prep: string = '<table><thead><tr><th>Broj Indeksa</th><th>Ime</th><th>Prezime</th><th>Predmet</th></tr></thead><tbody><tr>';
        prep += '<td>' + rokovi[findMeh].brojIndeksa + '</td>';
        prep += '<td>' + rokovi[findMeh].imeStudenta + '</td>';
        prep += '<td>' + rokovi[findMeh].prezimeStudenta + '</td>';
        prep += '<td>' + rokovi[findMeh].nazivPredmeta + '</td>';
        prep += '</tr></tbody></table>';
        return prep;
    } else {
        return '<p>Ne postoji student sa zadatim parametrima.<p>';
    }
}

export function prikaziSveRokove(): string {
    let prep: string = '<table><thead><tr><th>Broj Indeksa</th><th>Ime</th><th>Prezime</th><th>Predmet</th></tr></thead><tbody>';
    for (let i in rokovi) {
        prep += '<tr>';
        prep += '<td>' + rokovi[i].brojIndeksa + '</td>';
        prep += '<td>' + rokovi[i].imeStudenta + '</td>';
        prep += '<td>' + rokovi[i].prezimeStudenta + '</td>';
        prep += '<td>' + rokovi[i].nazivPredmeta + '</td>';
        prep += '</tr>';
    }
    prep += '</tbody></table>';
    return prep;
}