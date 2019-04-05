"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data = require("./data");
var ProductService_1 = require("./classes/ProductService");
var table_1 = require("./table");
var service1 = new ProductService_1.ProductService(data.PRODUCTS, data.CATEGORIES);
console.log(JSON.stringify(service1.getCategories(), null, 4));
console.log(JSON.stringify(service1.getAllProducts(), null, 4));
console.log(JSON.stringify(service1.getProductsByCategory(1), null, 4));
service1.addRating(1, { id: 4, comment: 'ok ok' });
console.log(JSON.stringify(service1.getAllProducts(), null, 4));
var display = document.getElementById('display');
var table = new table_1.MyTable();
document.body.onload = function () {
    display.innerHTML = table.formatTable();
};
// Adapted application to not need button to load, old code
// let btn: HTMLButtonElement = <HTMLButtonElement>document.getElementById('btn');
// btn.addEventListener('click', () => {
//     let table = new MyTable();
//     display.innerHTML = table.formatTable();
// });
var fillTable;
(function (fillTable) {
    // Initialize Header
    table.add('head', 'Id');
    table.add('head', 'Name');
    table.add('head', 'Price');
    table.add('head', 'Stock');
    table.add('head', 'Category');
    // Initialize Body
    for (var i in service1.getAllProducts()) {
        var rating = service1.getAllProducts()[i].ratings;
        var ratingFormat = 'Comments: \n====================\n';
        if (rating !== undefined) {
            for (var j in rating) {
                ratingFormat += rating[j].comment + '\n';
            }
        }
        table.add('body', { title: ratingFormat, content: service1.getAllProducts()[i] });
    }
})(fillTable || (fillTable = {}));
;
fillTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9hcHAvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBK0I7QUFDL0IsMkRBQTBEO0FBQzFELGlDQUFrQztBQUVsQyxJQUFJLFFBQVEsR0FBbUIsSUFBSSwrQkFBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRWxGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hFLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRWhFLElBQUksT0FBTyxHQUFtQyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2pGLElBQUksS0FBSyxHQUFHLElBQUksZUFBTyxFQUFFLENBQUM7QUFFMUIsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUc7SUFDbkIsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDNUMsQ0FBQyxDQUFDO0FBRUYsMkRBQTJEO0FBQzNELGtGQUFrRjtBQUNsRix3Q0FBd0M7QUFDeEMsaUNBQWlDO0FBQ2pDLCtDQUErQztBQUMvQyxNQUFNO0FBRU4sSUFBVSxTQUFTLENBbUJsQjtBQW5CRCxXQUFVLFNBQVM7SUFDZixvQkFBb0I7SUFDcEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDMUIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDM0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDM0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFFOUIsa0JBQWtCO0lBQ2xCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEMsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUNwRCxJQUFJLFlBQVksR0FBVyxvQ0FBb0MsQ0FBQztRQUNoRSxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN2QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixZQUFZLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDN0MsQ0FBQztRQUNMLENBQUM7UUFDRCxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEYsQ0FBQztBQUNMLENBQUMsRUFuQlMsU0FBUyxLQUFULFNBQVMsUUFtQmxCO0FBQUEsQ0FBQztBQUNGLFNBQVMsQ0FBQyJ9