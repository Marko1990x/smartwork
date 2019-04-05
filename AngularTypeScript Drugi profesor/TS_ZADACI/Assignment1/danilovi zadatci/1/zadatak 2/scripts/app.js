"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var arr1 = [1, 2, 3, 4, 5];
var arr2 = ['Pera', 'Djura', 'Danilo', 'Nenad'];
var obj1 = {
    name: 'intruder',
    something: 500
};
var obj2 = {
    neki: 'danilo..',
    broj: 400
};
function func(a, b) {
    var c = a.concat(b);
    console.log(c);
}
function funcO(a, b) {
    var c = __assign({}, a, b);
    console.log(c);
}
func(arr1, arr2);
func(arr2, arr1);
funcO(obj1, obj2);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFJLElBQUksR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNyQyxJQUFJLElBQUksR0FBYSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzFELElBQUksSUFBSSxHQUFXO0lBQ2YsSUFBSSxFQUFFLFVBQVU7SUFDaEIsU0FBUyxFQUFFLEdBQUc7Q0FDakIsQ0FBQTtBQUNELElBQUksSUFBSSxHQUFXO0lBQ2YsSUFBSSxFQUFFLFVBQVU7SUFDaEIsSUFBSSxFQUFFLEdBQUc7Q0FDWixDQUFBO0FBQ0QsY0FBYyxDQUFzQixFQUFFLENBQXNCO0lBQ3hELElBQUksQ0FBQyxHQUFPLENBQUMsUUFBSyxDQUFDLENBQUMsQ0FBQztJQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25CLENBQUM7QUFDRCxlQUFlLENBQVMsRUFBRSxDQUFTO0lBQy9CLElBQUksQ0FBQyxnQkFBUSxDQUFDLEVBQUssQ0FBQyxDQUFFLENBQUM7SUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQixDQUFDO0FBQ0QsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNqQixJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2pCLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUEifQ==