"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Menu = (function () {
    function Menu(myInterface) {
        this.meals = myInterface.meals;
        this.pages = myInterface.pages;
    }
    Menu.prototype.list = function () {
        console.log.apply(console, this.meals);
    };
    Menu.prototype.custList = function () {
        var customize = '';
        for (var i in this.meals) {
            customize += 'Meal: ' + this.meals[i] + '\n';
        }
        console.log(customize);
    };
    return Menu;
}());
var dailyMenu = (function (_super) {
    __extends(dailyMenu, _super);
    function dailyMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    dailyMenu.prototype.list = function () {
        console.log('Daily Menu _:');
        console.log.apply(console, this.meals);
    };
    dailyMenu.prototype.custList = function () {
        var customize = "Daily Menu _:\n";
        for (var i in this.meals) {
            customize += "Meal:\t" + this.meals[i] + "\n";
        }
        console.log(customize);
    };
    return dailyMenu;
}(Menu));
var broj_strana = 1;
var nas_meni = new Menu({ meals: ['jelo_1', 'jelo_2', 'jelo_3'], pages: broj_strana });
var dnevni_meni = new dailyMenu({ meals: ['jelo_1', 'jelo_2'], pages: broj_strana });
console.log('Requested List _:');
dnevni_meni.list();
console.log('====================');
console.log('Customizable List _:');
dnevni_meni.custList();
console.log('====================');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUlBO0lBR0ksY0FBWSxXQUEwQjtRQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO0lBQ25DLENBQUM7SUFDRCxtQkFBSSxHQUFKO1FBQ0ksT0FBTyxDQUFDLEdBQUcsT0FBWCxPQUFPLEVBQVEsSUFBSSxDQUFDLEtBQUssRUFBRTtJQUMvQixDQUFDO0lBQ0QsdUJBQVEsR0FBUjtRQUNJLElBQUksU0FBUyxHQUFXLEVBQUUsQ0FBQztRQUMzQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN2QixTQUFTLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2pELENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQztBQUVEO0lBQXdCLDZCQUFJO0lBQTVCOztJQVlBLENBQUM7SUFYRyx3QkFBSSxHQUFKO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3QixPQUFPLENBQUMsR0FBRyxPQUFYLE9BQU8sRUFBUSxJQUFJLENBQUMsS0FBSyxFQUFFO0lBQy9CLENBQUM7SUFDRCw0QkFBUSxHQUFSO1FBQ0ksSUFBSSxTQUFTLEdBQVcsaUJBQWlCLENBQUM7UUFDMUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdkIsU0FBUyxJQUFJLFlBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBSSxDQUFDO1FBQzdDLENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUMsQUFaRCxDQUF3QixJQUFJLEdBWTNCO0FBRUQsSUFBTSxXQUFXLEdBQVcsQ0FBQyxDQUFDO0FBQzlCLElBQU0sUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUV6RixJQUFNLFdBQVcsR0FBRyxJQUFJLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUV2RixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDakMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDcEMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyJ9