/* Binary Logarithm
Write a JS function that prints the binary logarithm (log2x) 
for each number in the input.
The input comes as array of string elements, each holding a number.
The output should be printed to the console, on a new line for each number.
*/

function bynaryLog(a){
	let total;
	let holder;	
	for (let i = 0; i < a.length; i++) {
		holder = Math.log2(Number(a[i]));
		console.log(holder);
	}	
}
bynaryLog([1024, 1048576]);

/*
input: 
[1024, 1048576, 256, 1, 2, 50, 100]
 */