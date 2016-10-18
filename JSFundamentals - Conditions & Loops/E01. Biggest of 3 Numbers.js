/*	Biggest of 3 Numbers
Write a JS function that finds the biggest of 3 numbers.
The input comes as array of strings, where each element holds a number.
The output is the biggest from the input numbers.

Examples
Input	Output
5       7
-2
7
*/

function solve([a, b, c]){
	[a, b, c] = [a, b, c].map(Number);

	let result = Math.max(a, b, c);
	console.log(result);
}
solve([5, -2, 7]);