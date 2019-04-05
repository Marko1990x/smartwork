interface Hrana {
    naziv: string;
    kalVal: number;
}
function func(x: Hrana): void {
    console.log(x);
}
func({ naziv: 'danilo', kalVal: 999 });