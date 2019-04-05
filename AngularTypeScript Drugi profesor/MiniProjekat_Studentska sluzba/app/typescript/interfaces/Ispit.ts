import { Student } from './Student';
export interface Ispit extends Student{
    brojIndeksa: number;
    sifraPredmeta: number;
    nazivPredmeta: string;
    ispisSvePodatke():string;
}