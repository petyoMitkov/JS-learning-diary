/*	Last K Numbers Sequence
You are given two integers n and k. Write a JS function that generates and 
prints the following sequence:
•	The first element is 1
•	Every following element equals the sum of the previous k elements
•	The length of the sequence is n elements
The input comes as array of two string elements holding numbers. The first
element represents the number n, and the second – the number k.
The output is printed on the console on a single line, separated by space.

Examples
Input	      Output
['6', '3']	  1 1 2 4 7 13		
['8', '2']	  1 1 2 3 5 8 13 21
 */

function solve([n, k]){
	let result = [1];
	for(let current = 1; current < n; current++){
		let start = Math.max(0, current - k);  // if current - k < 0, return 0
		let end = current;
		let sum = result.slice(start, end); //get inner arr from result
		sum = sum.reduce((a , b) => a + b); // sum inner arr element		
		result[current] = sum;
	}
	console.log(result.join(" "));
}
solve(["8", "2"]);