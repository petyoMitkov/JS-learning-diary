/*    Distance between Points
Write a JS function that calculates the distance between two points by given x and y 
coordinates. Use objects to store the two points. The input comes as array of four 
string elements in the format [x1, y1, x2, y2] that need to be parsed as numbers. 
ach pair of elements are the coordinates of a point in 2D space.
The output should be returned as a result of your function.

Examples
Input                                     Output
['2', '4', '5', '0']                      5
['2.34', '15.66', '-13.55', '-2.9985']    24.50778901186315

*/

function distanst([x1, y1, x2, y2]){
    let pointA = {"x":x1, "y":y1};
    let pointB = {"x":x2, "y":y2};

    let sideX = Math.pow(pointA.x - pointB.x, 2); 
    let sideY = Math.pow(pointA.y - pointB.y, 2);

    return Math.sqrt(sideX - sideY); 
}
distanst([2, 4, 5, 0]);
