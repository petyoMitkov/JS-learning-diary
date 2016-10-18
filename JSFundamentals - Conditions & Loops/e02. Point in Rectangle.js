/*2.	Point in Rectangle
Write a JS function that takes as input 6 numbers x, y, xMin, xMax, yMin, yMax 
and prints whether the point {x, y} is inside the rectangle or outside of it. 
If the point is at the rectangle border, it is considered inside.
The input comes as array of strings. Its holds the string representations 
of x, y, xMin, xMax, yMin, yMax. All numbers will in the range [-1 000 000 … 1 000 000]. 
It is guaranteed that xMin < xMax and yMin < yMax.
The output is a single line holding “inside” or “outside”.

Examples
Input	Output
8       inside
-1
2 
12
-3
3
*/

function solve([x, y, xMin, xMax, yMin, yMax]){
	[x, y, xMin, xMax, yMin, yMax] = 
	[x, y, xMin, xMax, yMin, yMax].map(Number);

	if (x <= xMax && x >= xMin && y <= yMax && y >= yMin) {
		console.log("inside");
	} else {
		console.log("outside");
	}
}