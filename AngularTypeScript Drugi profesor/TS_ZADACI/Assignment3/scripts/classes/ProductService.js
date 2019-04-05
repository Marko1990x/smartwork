"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductService = (function () {
    function ProductService(products, categories) {
        this.products = products;
        this.categories = categories;
    }
    ProductService.prototype.getCategories = function () {
        return this.categories;
    };
    ProductService.prototype.getAllProducts = function () {
        return this.products;
    };
    ProductService.prototype.getProductsByCategory = function (categoryId) {
        return this.products.filter(function (product) { return product.category === categoryId; });
    };
    ProductService.prototype.addProduct = function (product) {
        return this.products.push(product);
    };
    ProductService.prototype.addRating = function (productId, rating) {
        var productIndex = this.products.findIndex(function (product) { return product.id === productId; });
        if (!!this.products[productIndex].ratings) {
            this.products[productIndex].ratings.push(rating);
        }
        else {
            this.products[productIndex].ratings = [rating];
        }
    };
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9hcHAvY2xhc3Nlcy9Qcm9kdWN0U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBO0lBR0ksd0JBQVksUUFBbUIsRUFBRSxVQUFzQjtRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUNqQyxDQUFDO0lBQ0Qsc0NBQWEsR0FBYjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFDRCx1Q0FBYyxHQUFkO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUNELDhDQUFxQixHQUFyQixVQUFzQixVQUFrQjtRQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsUUFBUSxLQUFLLFVBQVUsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFDRCxtQ0FBVSxHQUFWLFVBQVcsT0FBZ0I7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxrQ0FBUyxHQUFULFVBQVUsU0FBaUIsRUFBRSxNQUFjO1FBQ3ZDLElBQUksWUFBWSxHQUFXLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLEVBQUUsS0FBSyxTQUFTLEVBQXhCLENBQXdCLENBQUMsQ0FBQztRQUN4RixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELENBQUM7SUFDTCxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBM0JELElBMkJDO0FBM0JZLHdDQUFjIn0=