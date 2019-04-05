let arr1: number[] = [1, 2, 3, 4, 5];
let arr2: string[] = ['Pera', 'Djura', 'Danilo', 'Nenad'];
let obj1: object = {
    name: 'intruder',
    something: 500
}
let obj2: object = {
    neki: 'danilo..',
    broj: 400
}
function func(a: number[] | string[], b: number[] | string[]): void {
    let c = [...a, ...b];
    console.log(c);
}
function funcO(a: object, b: object): void {
    let c = { ...a, ...b };
    console.log(c);
}
func(arr1, arr2);
func(arr2, arr1);
funcO(obj1, obj2)