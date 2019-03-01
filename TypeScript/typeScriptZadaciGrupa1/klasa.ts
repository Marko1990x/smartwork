import { PersonaName } from './personaInterface';

export class HomeWork implements PersonaName {
    name: string;
    godiste: number;

    constructor(nameX: string, godisteX: number) {
        this.name = nameX;
        this.godiste = godisteX;
    }
}


// ovo mora da ide preko noda da se pokene na mestu pozivanja
