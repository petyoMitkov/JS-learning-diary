/*    City Markets
You have been tasked to follow the sales of products in the different towns. For every 
town you need to keep track of all the products sold, and for every product, the amount
of total income. The input comes as array of strings. Each element will represent 
data about a product and its sales. The format of input is:
{town} -> {product} -> {amountOfSales} : {priceForOneUnit}
The town and product are both strings. The amount of sales and price for one unit 
will be numbers. Store all towns, for every town, store its products, and for every 
product, its amount of total income. The total income is calculated with the following 
formula - amount of sales * price for one unit. If you receive as input a town you 
already have, you should just add the new product to it.
As output you must print every town, its products and their total income in the 
following format:

“Town – {townName}
 $$${product1Name} : {productTotalIncome}
 $$${product2Name} : {productTotalIncome}
 ...”
The order of output for each of those entries is – by order of entrance.

Examples
Input                                         Output
Sofia -> Laptops HP -> 200 : 2000             Town - Sofia
Sofia -> Raspberry -> 200000 : 1500           $$$Laptops HP : 400000
Sofia -> Audi Q7 -> 200 : 100000              $$$Raspberry : 300000000
Montana -> Portokals -> 200000 : 1            $$$Audi Q7 : 20000000
Montana -> Qgodas -> 20000 : 0.2              Town - Montana
Montana -> Chereshas -> 1000 : 0.3            $$$Portokals : 200000
                                              $$$Qgodas : 4000
                                              $$$Chereshas : 300
*/

function cityMarkets(arrOfStr) {
    let townsMap = new Map();
    for (let row of arrOfStr){
        let [town, product, quantityAndPrice] = row.split(/\s*->\s*/);
        let [quantity, price] = quantityAndPrice.split(/\s*:\s*/);
        if (!townsMap.has(town)) { 
            townsMap.set(town, new Map()); //set Sofia => new Map() if is undefined
            //console.log("//Add " + town + " => Value: new Map()");
        }
        let income = quantity * price;
        let oldIncome = townsMap.get(town).get(product); //returns undefined or value
        if (oldIncome != undefined)
            income += oldIncome;
        townsMap.get(town).set(product, income);   //set Sofia => Map {product, incom}
        //console.log("     //Set => Map " + "{Key: " + product + " => Value: " + income + "}");
    }
    //console.log(townsMap);
    for (let townKey of townsMap.keys()){
        console.log("Town - " + townKey);
        for (let innerKey of townsMap.get(townKey).keys()){
            console.log("$$$" + innerKey + " : " + townsMap.get(townKey).get(innerKey));
       }
    }
}
cityMarkets(["Sofia -> Laptops HP -> 200 : 2000", 
             "Sofia -> Raspberry -> 200000 : 1500", 
             "Sofia -> Audi Q7 -> 200 : 100000", 
             "Montana -> Portokals -> 200000 : 1", 
             "Montana -> Qgodas -> 20000 : 0.2", 
             "Montana -> Chereshas -> 1000 : 0.3"]);
