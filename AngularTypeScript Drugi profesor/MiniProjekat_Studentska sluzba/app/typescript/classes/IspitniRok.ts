import { Ispit } from '../interfaces/Ispit';
export class IspitniRok implements Ispit {
    
    constructor(
        public brojIndeksa: number,
        public imeStudenta: string,
        public prezimeStudenta: string,
        public sifraPredmeta: number,
        public nazivPredmeta: string
    ) { }

    ispisSvePodatke(): string {
        throw new Error("Method not implemented.");
    }
}