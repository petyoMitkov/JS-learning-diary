/*    String Of Numbers 1…N
Write a JS function that read a number n as input and prints all numbers from 1 to n, 
concatenated as a single string. The input comes as array of one string element 
that needs to be parsed as a number.
The output should be returned as a result of your function.

Input   Output
['11']  '1234567891011'
*/

function stringOfNumbers(str){
    let result = "";
    for (let i = 1; i <= str; i++) {
        result += i;
    }       
    return result;
}
stringOfNumbers(5);