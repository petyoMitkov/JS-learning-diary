/*    Biggest Element
Write a JS function that finds the biggest element inside a matrix.
The input comes as array of string elements. Each element contains the
elements from one row of a matrix, separated by space.
The output is the return value of your function. Find the biggest element and
return it.

Examples
Input            Output
['20 50 10',     145
 '8 33 145']

['3 5 7 12',     33
 '-1 4 33 2',
 '8 3 0 4']
*/

function biggestElement(matrix){
    //convert arr of strings to matrix of numbers
    let input = matrix.map(row => row.split(" ").map(Number)); 
    let biggestNum = Number.NEGATIVE_INFINITY;
    input.forEach(
        row => row.forEach(
            element => biggestNum = Math.max(biggestNum, element))); 
    console.log(biggestNum);
}
biggestElement(['20 50 10', '8 33 145']);