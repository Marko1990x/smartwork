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
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + " meters.");
    };
    Animal.prototype.behave = function (trait) {
        if (trait === undefined) {
            console.error('Please provide parameter: trait.');
        }
        console.log(this.name + " does a " + trait + ".");
    };
    return Animal;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log('My Snake is Slithering...');
        _super.prototype.move.call(this, distanceInMeters);
    };
    Snake.prototype.behave = function (trait) {
        if (trait === void 0) { trait = 'hiss'; }
        console.log('Hissing SCARILY!!..');
        _super.prototype.behave.call(this, trait);
    };
    return Snake;
}(Animal));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log('That Horse is Galloping...');
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var snake = new Snake('Sammy the Python');
var horse = new Horse('Tommy the Horse');
snake.behave();
horse.move(34);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0lBQ0ksZ0JBQW1CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUksQ0FBQztJQUNwQyxxQkFBSSxHQUFKLFVBQUssZ0JBQTRCO1FBQTVCLGlDQUFBLEVBQUEsb0JBQTRCO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLElBQUksZUFBVSxnQkFBZ0IsYUFBVSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUNELHVCQUFNLEdBQU4sVUFBTyxLQUFhO1FBQ2hCLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUN0RCxDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsSUFBSSxnQkFBVyxLQUFLLE1BQUcsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFDRDtJQUFvQix5QkFBTTtJQUN0QixlQUFZLElBQVk7ZUFDcEIsa0JBQU0sSUFBSSxDQUFDO0lBQ2YsQ0FBQztJQUNELG9CQUFJLEdBQUosVUFBSyxnQkFBNEI7UUFBNUIsaUNBQUEsRUFBQSxvQkFBNEI7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ3pDLGlCQUFNLElBQUksWUFBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxzQkFBTSxHQUFOLFVBQU8sS0FBYztRQUFkLHNCQUFBLEVBQUEsY0FBYztRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbkMsaUJBQU0sTUFBTSxZQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQyxBQVpELENBQW9CLE1BQU0sR0FZekI7QUFDRDtJQUFvQix5QkFBTTtJQUN0QixlQUFZLElBQVk7ZUFDcEIsa0JBQU0sSUFBSSxDQUFDO0lBQ2YsQ0FBQztJQUNELG9CQUFJLEdBQUosVUFBSyxnQkFBNkI7UUFBN0IsaUNBQUEsRUFBQSxxQkFBNkI7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQzFDLGlCQUFNLElBQUksWUFBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQyxBQVJELENBQW9CLE1BQU0sR0FRekI7QUFDRCxJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzFDLElBQUksS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFFekMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2YsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyJ9