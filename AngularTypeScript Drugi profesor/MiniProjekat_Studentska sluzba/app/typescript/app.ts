import { IspitniRok } from './classes/IspitniRok';
import * as StudentskaSluzba from './StudentskaSluzba';

const display: HTMLDivElement = <HTMLDivElement>document.getElementById('display');
const kraj: HTMLUListElement = <HTMLUListElement>document.getElementById('kraj');
const zarok: HTMLUListElement = <HTMLUListElement>document.getElementById('zarok');
const nadji: HTMLUListElement = <HTMLUListElement>document.getElementById('nadji');
const izmeni: HTMLUListElement = <HTMLUListElement>document.getElementById('izmeni');
const brisi: HTMLUListElement = <HTMLUListElement>document.getElementById('brisi');
const unos: HTMLUListElement = <HTMLUListElement>document.getElementById('unos');

display.innerHTML = StudentskaSluzba.prikaziSveRokove();

nadji.addEventListener('click', () => {
    display.innerHTML = StudentskaSluzba.prikaziSveRokove();
});

function checkInputs(): boolean {
    const inputs = document.getElementsByTagName('input');
    if (!(inputs[0] instanceof HTMLInputElement)) {
        throw new Error('Expected "inputs" to be HTMLInputElement, it wasn\'t!');
    }
    for (let i in inputs) {
        if (inputs[i].value === '') {
            return false;
        }
    }
    return true;
}

izmeni.addEventListener('click', () => {
    let prep: string = '<div><p>Nadji studenta:</p><input type="number" id="staroindeks" placeholder="Broj Indeksa.." />';
    prep += '<input type="text" id="staroime" placeholder="Ime.." />';
    prep += '<input type="text" id="staroprezime" placeholder="Prezime.." />';
    prep += '<input type="number" id="staropredmetn" placeholder="Sifra Predmeta.." />';
    prep += '<input type="text" id="staropredmets" placeholder="Naziv Predmeta.." /></div>';
    prep += '<div><p>Izmenjeni podatci:</p><input type="number" id="novoindeks" placeholder="Broj Indeksa.." />';
    prep += '<input type="text" id="novoime" placeholder="Ime.." />';
    prep += '<input type="text" id="novoprezime" placeholder="Prezime.." />';
    prep += '<input type="number" id="novopredmetn" placeholder="Sifra Predmeta.." />';
    prep += '<input type="string" id="novopredmets" placeholder="Naziv Predmeta.." /></div>';
    prep += '<input type="button" id="btnUnesi" value="Izmeni" /></div>';
    display.innerHTML = prep;

    const unesi: HTMLInputElement = <HTMLInputElement>document.getElementById('btnUnesi');
    unesi.addEventListener('click', () => {
        if (!checkInputs()) {
            alert('Please fill in all fields!');
        } else {
            const staroindeks: HTMLInputElement = <HTMLInputElement>document.getElementById('staroindeks');
            const staroime: HTMLInputElement = <HTMLInputElement>document.getElementById('staroime');
            const staroprezime: HTMLInputElement = <HTMLInputElement>document.getElementById('staroprezime');
            const staropredmetn: HTMLInputElement = <HTMLInputElement>document.getElementById('staropredmetn');
            const staropredmets: HTMLInputElement = <HTMLInputElement>document.getElementById('staropredmets');
            const novoindeks: HTMLInputElement = <HTMLInputElement>document.getElementById('novoindeks');
            const novoime: HTMLInputElement = <HTMLInputElement>document.getElementById('novoime');
            const novoprezime: HTMLInputElement = <HTMLInputElement>document.getElementById('novoprezime');
            const novopredmetn: HTMLInputElement = <HTMLInputElement>document.getElementById('novopredmetn');
            const novopredmets: HTMLInputElement = <HTMLInputElement>document.getElementById('novopredmets');
            display.innerHTML = StudentskaSluzba.izmeniIspitniRok(new IspitniRok(
                Number(staroindeks.value),
                staroime.value,
                staroprezime.value,
                Number(staropredmetn.value),
                staropredmets.value
            ), new IspitniRok(
                Number(novoindeks.value),
                novoime.value,
                novoprezime.value,
                Number(novopredmetn.value),
                novopredmets.value
            ));
            setTimeout(() => {
                display.innerHTML = StudentskaSluzba.prikaziSveRokove();
            }, 2500);
        }
    });
});

brisi.addEventListener('click', () => {
    let prep: string = '<input type="text" id="ime" placeholder="Ime.." />';
    prep += '<input type="text" id="prezime" placeholder="Prezime.." />';
    prep += '<input type="number" id="predmetn" placeholder="Sifra Predmeta.." />';
    prep += '<input type="button" id="btnUnesi" value="Prikazi" />';
    display.innerHTML = prep;

    const unesi: HTMLInputElement = <HTMLInputElement>document.getElementById('btnUnesi');
    unesi.addEventListener('click', () => {
        const ime: HTMLInputElement = <HTMLInputElement>document.getElementById('ime');
        const prezime: HTMLInputElement = <HTMLInputElement>document.getElementById('prezime');
        const predmetn: HTMLInputElement = <HTMLInputElement>document.getElementById('predmetn');
        display.innerHTML = StudentskaSluzba.obrisiIspitniRok(ime.value, prezime.value, Number(predmetn.value));
        setTimeout(() => {
            display.innerHTML = StudentskaSluzba.prikaziSveRokove();
        }, 2500);
    });
});

unos.addEventListener('click', () => {
    let prep: string = '<input type="text" id="ime" placeholder="Ime.." />';
    prep += '<input type="text" id="prezime" placeholder="Prezime.." />';
    prep += '<input type="number" id="index" placeholder="Index.." />';
    prep += '<input type="number" id="predmetn" placeholder="Sifra Predmeta.." />';
    prep += '<input type="text" id="predmets" placeholder="Predmet.." />';
    prep += '<input type="button" id="btnUnesi" value="Prikazi" />';
    display.innerHTML = prep;

    const unesi: HTMLInputElement = <HTMLInputElement>document.getElementById('btnUnesi');
    unesi.addEventListener('click', () => {
        const ime: HTMLInputElement = <HTMLInputElement>document.getElementById('ime');
        const prezime: HTMLInputElement = <HTMLInputElement>document.getElementById('prezime');
        const index: HTMLInputElement = <HTMLInputElement>document.getElementById('index');
        const predmetn: HTMLInputElement = <HTMLInputElement>document.getElementById('predmetn');
        const predmets: HTMLInputElement = <HTMLInputElement>document.getElementById('predmets');
        StudentskaSluzba.unesiIspitniRok(new IspitniRok(
            Number(index.value),
            ime.value,
            prezime.value,
            Number(predmetn.value),
            predmets.value
        ));
        alert('Uspesan Unos!');
        display.innerHTML = StudentskaSluzba.prikaziSveRokove();
    });

});

zarok.addEventListener('click', () => {
    let prep: string = '<input type="text" id="ime" placeholder="Ime.." />';
    prep += '<input type="text" id="prezime" placeholder="Prezime.." />';
    prep += '<input type="button" id="btnUnesi" value="Prikazi" />';
    display.innerHTML = prep;

    const unesi: HTMLInputElement = <HTMLInputElement>document.getElementById('btnUnesi');
    unesi.addEventListener('click', () => {
        const ime: HTMLInputElement = <HTMLInputElement>document.getElementById('ime');
        const prezime: HTMLInputElement = <HTMLInputElement>document.getElementById('prezime');
        display.innerHTML = StudentskaSluzba.prikaziIspitniRok(ime.value, prezime.value);
    });

});

kraj.addEventListener('click', () => {
    alert('Kraj');
});

