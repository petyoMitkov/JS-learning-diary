/*    Restaurant Bill
You are tasked to write a JS function that receives an array of purchases and 
their prices and prints all your purchases and their total sum.
The input comes as an array of string elements – the elements on even indexes 
(0, 2, 4…) are the product names, while the elements on odd indexes (1, 3, 5…)
are the corresponding prices.
The output should be printed on the console - a single sentence containing all 
products and their total sum in the format “You purchased {all products
separated by comma + space} for a total sum of {total sum of products}”.

Examples
Input
['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']
Output
You purchased Beer Zagorka, Tripe soup, Lasagna for a total sum of 16.14

Input
['Cola', '1.35', 'Pancakes', '2.88']
Output
You purchased Cola, Pancakes for a total sum of 4.2
*/

function resturantBill(arr) {
    let purchases = [];
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++){
        if (i % 2 == 0) {
            purchases.push(arr[i]);
        } else {
            totalSum += Number(arr[i]);
        }
    }
    let strPurchasee = purchases.join(", ");
    console.log(`You purchased ${strPurchasee} for a total sum of ${totalSum}`);
}
resturantBill(['Cola', '1.35', 'Pancakes', '2.88']);

// second solve
function resturantBill(arr) {
    let purchases = arr.filter((x, i) => i % 2 == 0);
    let sum = arr.filter((x, i) => i % 2 == 1)
        .map(Number)
        .reduce((a, b) => a + b);
    console.log(`You purchased ${purchases.join(", ")} for a total sum of ${sum}`);
}
resturantBill(['Cola', '1.35', 'Pancakes', '2.88']);