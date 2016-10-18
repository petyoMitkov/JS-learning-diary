/*    Area and Perimeter
Write a JS function that calculates the area and perimeter of a rectangle 
by given two sides. The input comes as array of strings that need to be 
parsed as numbers. The output should be printed to the console on two lines.

Examples
Input   Output
[2, 2]  4
        8
[1, 3]  3
        8    
*/

function areaAndPerimeter([a, b]){ 
	a = Number(a);
	b = Number(b);
	let area = a * b;
	let perimeter = (a + b) * 2;
	
	console.log(area);
	console.log(perimeter);
}
areaAndPerimeter([2, 2]);
