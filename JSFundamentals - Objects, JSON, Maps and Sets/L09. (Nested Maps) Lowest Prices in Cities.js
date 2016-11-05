/*    Lowest Prices in Cities
You will be given several towns, with products and their price. You need to find
 the lowest price for every product and the town it is sold at for that price.
The input comes as array of strings. Each element will hold data about a town, 
product, and its price at that town. The town and product will be strings; 
the price will be a number. The input will come in the following format:
{townName} | {productName} | {productPrice}

If you receive the same town and product more than once, you should update 
the old value with the new one. As output you must print each product with 
its lowest price and the town at which the product is sold at that price. 
If two towns share the same lowest price, print the one that was entered first. 
The output, for every product, should be in the following format:
{productName} -> {productLowestPrice} ({townName})

The order of output is – order of entrance. See the examples for more info.

Examples
Input                                          Output
Sample Town | Sample Product | 1000            Sample Product -> 1000 (Sample Town)
Sample Town | Orange | 2                       Orange -> 2 (Sample Town)
Sample Town | Peach | 1                        Peach -> 1 (Sample Town)
Sofia | Orange | 3                             Burger -> 10 (New York)
Sofia | Peach | 2 
New York | Sample Product | 1000.1
New York | Burger | 10
*/

function lowestPricesInCities(arrOgStr) {
    let mainMap = new Map();
    for (let row of arrOgStr){       //create map of pams: Product => Map {Town => Price}
        let [town, product, price] = row.split(/\s*\|\s*/);
        price = Number(price);

        if (!mainMap.has(product)) {     //if the Product is undefined, will add it.
            mainMap.set(product, new Map());            
        }
        mainMap.get(product).set(town, price); 
         
        /* Same product and same town but first occurrence was with lower price. End not replace old value!
        if (!mainMap.get(product).has(town)) {    
            mainMap.get(product).set(town, price);   
        } else if (price < mainMap.get(product).get(town)) {  
            mainMap.get(product).set(town, price);           
        } 
        */                                                      
    }
    for (let [product, town] of mainMap){
        let theSmolestPrice = Number.MAX_VALUE;
        let townKeyHolder = "";
        for (let townKey of town.keys()){
            if (theSmolestPrice > mainMap.get(product).get(townKey)){
                theSmolestPrice = mainMap.get(product).get(townKey);
                townKeyHolder = townKey;
            }            
        }
        console.log(`${product} -> ${theSmolestPrice} (${townKeyHolder})`);
    }    
}
lowestPricesInCities(["Sample Town | Sample Product | 1000", 
                      "Sample Town | Orange | 2 ", 
                      "Sample Town | Peach | 1", 
                      "Sofia | Orange | 3", 
                      "Sofia | Peach | 2", 
                      "New York | Sample Product | 1000.1", 
                      "New York | Burger | 10"]);