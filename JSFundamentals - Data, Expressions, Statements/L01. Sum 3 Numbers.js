/*    Sum 3 Numbers
Write a JS function that takes three numbers as input and outputs their sum.
The input comes as array of string elements that need to be parsed as numbers.
The output should be printed to the console.

Examples
Input           Output
['2', '3', '4'] 9
*/

function solution(input){
    var a = Number(input[0]);
    var b = Number(input[1]);
    var c = Number(input[2]);
    return a + b + c;
}
solution(['2', '3', '4']);