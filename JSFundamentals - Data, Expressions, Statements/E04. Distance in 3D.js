/*  Distance in 3D
Write a JS function that calculates the distance between the two points in 
3D by given coordinates. The input comes as an array of strings that need 
to be parsed as numbers. The first three elements are the x, y and z 
coordinates for the first point and the second set of arguments are 
the coordinates of the other point.
The output should be printed to the console.

Examples
Input                  Output
[1, 1, 0, 5, 4, 0]     5
[3.5, 0, 1, 0, 2, -1]  4.5
*/

function distanceIn3D([x1, y1, z1, x2, y2, z2]){
    [x1, y1, z1, x2, y2, z2] = [x1, y1, z1, x2, y2, z2].map(Number);
    let sideA = x1 - x2;
    let sideB = y1 - y2;
    let thirdDimention = z1 - z2;
    //c = sqrt a * a + b * b    
    let result = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2) + 
        Math.pow(thirdDimention, 2));

    console.log(result);  
}
distanceIn3D([3.5, 0, 1, 0, 2, -1]);