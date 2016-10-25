/*  Triangle Area
Write a JS function that calculates a triangle’s area by its 3 sides.
The input comes as array of three string elements, each holding a number, representing one side of a triangle.
The output should be printed to the console.
Hints : Use Heron’s formula to obtain the result.

Examples
Input   Output
2       3.4994419198
3.5
4
*/

function triangleArea([a, b, c]){
    [a, b, c] = [a, b, c].map(Number);
    console.log(a + b + c);
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log(area);
}
triangleArea(["2", "3.5", "4"]);

//A = √s(s - a)(s - b)(s - c) 