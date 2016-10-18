/*    Sum And VAT
Write a JS function that sums a variable number of prices and calculates their 
VAT (Value Add Tax, 20%). The input comes as array of string elements that need 
to be parsed as numbers. The number of elements will be different every time.
The output should be printed to the console on a new line for every entry.

Input        
['1.20', '2.60', '3.50']

Output 
sum = 7.3
VAT = 1.46
total = 8.76
*/

function solution(input){
    let sum = 0;
    for (let element of input){
        sum += Number(element);
    }
    console.log("sum = " + sum);
    console.log("VAT = " + sum * 0.20);
    console.log("total = " + sum * 1.20);
}
solution(['1.20', '2.60', '3.50']);