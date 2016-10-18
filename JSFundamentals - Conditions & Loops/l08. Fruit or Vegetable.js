/*    Fruit or Vegetable
Write a JS function to print "fruit", "vegetable" or "unknown" depending on the input string.
•	Fruits are: banana, apple, kiwi, cherry, lemon, grapes, peach
•	Vegetable are: tomato, cucumber, pepper, onion, garlic, parsley
•	All others are unknown
The input comes as array of one string element, the name of the fruit.
The output should be printed to the console

Examples
Input   Output
banana  fruit
*/
function fruitOrVegetable(input){
    switch(input.toString()){
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
        case "peach":
            console.log("fruit");
            break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "onion":
        case "garlic":
        case "parsley":
            console.log("vegetable");
            break;
        default: 
            console.log("unknown");
    }
}
fruitOrVegetable("banana");
//Fruits are: banana, apple, kiwi, cherry, lemon, grapes, peach
//Vegetable are: tomato, cucumber, pepper, onion, garlic, parsley
//All others are unknown