/*    Triangle of Dollars
Write a JS function that prints a triangle of n lines of “$” characters 
like shown in the examples.The input comes as array of strings. Its first 
element holds the number n (0 < n < 100).
The output consists of n text lines like shown below.

Examples
Input   Output
4       $
        $$
        $$$
        $$$$
*/

function solve(input){
    input = Number(input);
    let col = 0;
    let result = "";

    for (let row = 1; row <= input ; row++) {
        col = row;
        result = " ";
        for (let i = 0; i < col; i++) {
            result += "$";
        }
        console.log(result);
    }
}
solve(6);
