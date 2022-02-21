class Kitchen{
    ingredients: [string, number][];
    constructor (private food: [string, number][]){
        this.ingredients = food
    }

   /**
    * get_ingredients prints all of the ingredients in the kitchen
    */
   public get_ingredients() {
       this.ingredients.forEach( (ingredient) =>{
           console.log (ingredient)
       }
       )      
   }
   public add_ingredient(ingredient: [string, number]) {
       let found = false;
       this.ingredients.forEach( (element) =>{
           if (element[0]==ingredient[0]){
               element[1] += ingredient[1]
               found = true;
            }
        }
       )
        if (found == false){
            this.ingredients.push(ingredient)
        }
   }
   public decrease_amount(ingredient: [string, number]){
        this.ingredients.forEach( (element) =>{
            if (element[0]==ingredient[0]){
                if (element[1]>=ingredient[1]){
                    element[1] -= ingredient[1]
                }
                else{
                    console.log("not enough")
                }
                
            }
     }
    )
    }
}
let a = new Kitchen([["onion", 3], ["garlic", 5]])
a.add_ingredient(["carrot", 2])
a.add_ingredient(["carrot", 2])
a.add_ingredient(["tomato", 6])
a.decrease_amount(["onion", 2])
a.decrease_amount(["garlic", 8])
a.get_ingredients()
// class RecipeBook{

// }