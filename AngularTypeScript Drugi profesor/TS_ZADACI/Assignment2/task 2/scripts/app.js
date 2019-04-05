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
var Department = (function () {
    function Department(name) {
        this.name = name;
        console.log("Department is: '" + name + "'");
    }
    return Department;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting Department') || this;
    }
    AccountingDepartment.prototype.printMeeting = function (subDept) {
        console.log("You have a meeting with the " + subDept + " department at 08:00 IST");
    };
    AccountingDepartment.prototype.returnMeeting = function (subDept) {
        return "<p>You have a meeting with the " + subDept + " department at 08:00 IST</p>";
    };
    return AccountingDepartment;
}(Department));
var BioTechnologyDepartment = (function (_super) {
    __extends(BioTechnologyDepartment, _super);
    function BioTechnologyDepartment() {
        return _super.call(this, 'BioTechnology and Genetics Department') || this;
    }
    BioTechnologyDepartment.prototype.printMeeting = function (subDept) {
        console.log("You have a meeting with the " + subDept + " department at 14:00 IST");
    };
    BioTechnologyDepartment.prototype.returnMeeting = function (subDept) {
        return "<p>You have a meeting with the " + subDept + " department at 14:00 IST</p>";
    };
    return BioTechnologyDepartment;
}(Department));
var accounting = new AccountingDepartment();
var biotech = new BioTechnologyDepartment();
var btn = document.getElementById('show');
var mydisplay = document.getElementById('display');
btn.addEventListener('click', function () {
    var container = '';
    container += accounting.returnMeeting('Finance');
    container += biotech.returnMeeting('Cellbiology');
    mydisplay.innerHTML = container;
});
accounting.printMeeting('Finance');
biotech.printMeeting('Cellbiology');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0lBQ0ksb0JBQW1CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQW1CLElBQUksTUFBRyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVMLGlCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFDRDtJQUFtQyx3Q0FBVTtJQUN6QztlQUNJLGtCQUFNLHVCQUF1QixDQUFDO0lBQ2xDLENBQUM7SUFDRCwyQ0FBWSxHQUFaLFVBQWEsT0FBZTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUErQixPQUFPLDZCQUEwQixDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUNELDRDQUFhLEdBQWIsVUFBYyxPQUFlO1FBQ3pCLE1BQU0sQ0FBQyxvQ0FBa0MsT0FBTyxpQ0FBOEIsQ0FBQztJQUNuRixDQUFDO0lBQ0wsMkJBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBbUMsVUFBVSxHQVU1QztBQUNEO0lBQXNDLDJDQUFVO0lBQzVDO2VBQ0ksa0JBQU0sdUNBQXVDLENBQUM7SUFDbEQsQ0FBQztJQUNELDhDQUFZLEdBQVosVUFBYSxPQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQStCLE9BQU8sNkJBQTBCLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBQ0QsK0NBQWEsR0FBYixVQUFjLE9BQWU7UUFDekIsTUFBTSxDQUFDLG9DQUFrQyxPQUFPLGlDQUE4QixDQUFDO0lBQ25GLENBQUM7SUFDTCw4QkFBQztBQUFELENBQUMsQUFWRCxDQUFzQyxVQUFVLEdBVS9DO0FBRUQsSUFBSSxVQUFVLEdBQUcsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO0FBQzVDLElBQUksT0FBTyxHQUFHLElBQUksdUJBQXVCLEVBQUUsQ0FBQztBQUU1QyxJQUFJLEdBQUcsR0FBeUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNoRixJQUFJLFNBQVMsR0FBbUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNuRixHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBQzFCLElBQUksU0FBUyxHQUFXLEVBQUUsQ0FBQztJQUMzQixTQUFTLElBQUksVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqRCxTQUFTLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsRCxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztBQUNwQyxDQUFDLENBQUMsQ0FBQTtBQUVGLFVBQVUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbkMsT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyJ9