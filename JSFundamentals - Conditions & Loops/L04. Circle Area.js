/*  Circle Area
Write a JS function that calculates circle area by given radius. Print the area as it is calculated and then print it rounded to two decimal places.
The input comes as array of one string element, holding a number.
The output should be printed to the console on a new line for each result.

Examples
Input   Output
5       78.53981633974483
        78.54

*/

function circleArea(radius){
    let area = Math.PI * radius * radius;
    console.log(area);
    console.log(Number(area.toFixed(2)));
}
circleArea(5);

