import * as data from './data';
import { ProductService } from './classes/ProductService';
import { MyTable } from './table';

let service1: ProductService = new ProductService(data.PRODUCTS, data.CATEGORIES);

console.log(JSON.stringify(service1.getCategories(), null, 4));
console.log(JSON.stringify(service1.getAllProducts(), null, 4));
console.log(JSON.stringify(service1.getProductsByCategory(1), null, 4));
service1.addRating(1, { id: 4, comment: 'ok ok' });
console.log(JSON.stringify(service1.getAllProducts(), null, 4));

let display: HTMLDivElement = <HTMLDivElement>document.getElementById('display');
let table = new MyTable();

document.body.onload = (): void => {
    display.innerHTML = table.formatTable();
};

// Adapted application to not need button to load, old code
// let btn: HTMLButtonElement = <HTMLButtonElement>document.getElementById('btn');
// btn.addEventListener('click', () => {
//     let table = new MyTable();
//     display.innerHTML = table.formatTable();
// });

namespace fillTable {
    // Initialize Header
    table.add('head', 'Id');
    table.add('head', 'Name');
    table.add('head', 'Price');
    table.add('head', 'Stock');
    table.add('head', 'Category');

    // Initialize Body
    for (let i in service1.getAllProducts()) {
        const rating = service1.getAllProducts()[i].ratings;
        let ratingFormat: string = 'Comments: \n====================\n';
        if (rating !== undefined) {
            for (let j in rating) {
                ratingFormat += rating[j].comment + '\n';
            }
        }
        table.add('body', { title: ratingFormat, content: service1.getAllProducts()[i] });
    }
};
fillTable;