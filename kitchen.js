var Kitchen = /** @class */ (function () {
    function Kitchen(food) {
        this.food = food;
        this.ingredients = food;
    }
    /**
     * get_ingredients prints all of the ingredients in the kitchen
     */
    Kitchen.prototype.get_ingredients = function () {
        this.ingredients.forEach(function (ingredient) {
            console.log(ingredient);
        });
    };
    Kitchen.prototype.add_ingredient = function (ingredient) {
        var found = false;
        this.ingredients.forEach(function (element) {
            if (element[0] == ingredient[0]) {
                element[1] += ingredient[1];
                found = true;
            }
        });
        if (found == false) {
            this.ingredients.push(ingredient);
        }
    };
    Kitchen.prototype.decrease_amount = function (ingredient) {
        this.ingredients.forEach(function (element) {
            if (element[0] == ingredient[0]) {
                if (element[1] >= ingredient[1]) {
                    element[1] -= ingredient[1];
                }
                else {
                    console.log("not enough");
                }
            }
        });
    };
    return Kitchen;
}());
var a = new Kitchen([["onion", 3], ["garlic", 5]]);
a.add_ingredient(["carrot", 2]);
a.add_ingredient(["carrot", 2]);
a.add_ingredient(["tomato", 6]);
a.decrease_amount(["onion", 2]);
a.decrease_amount(["garlic", 8]);
a.get_ingredients();
// class RecipeBook{
// }
