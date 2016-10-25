/*  Triangle of Stars
Write a JS function that outputs a triangle made of stars with variable size, 
depending on an input parameter. Look at the examples to get an idea.
The input comes as an array with one string element in it, which needs 
to be parsed to a number.
The output is a series of lines printed on the console,
forming a triangle of variable size.
 
Examples
Input   Output
2        *
         **
         *
*/

function triangleOfStars(input){
    function printStr(n){
        console.log("*".repeat(n));
    }
    for (var i = 0; i <= input; i++) 
        printStr(i);
    for (var i = input - 1; i > 0; i--)
        printStr(i);    
}
triangleOfStars([5]);