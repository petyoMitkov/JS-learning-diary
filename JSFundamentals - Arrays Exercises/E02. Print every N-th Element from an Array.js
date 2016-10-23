/*    Print every N-th Element from an Array 
Write a JS function that prints every element of an array, on a given step.
The input comes as array of strings. The last element is N - the step.
The output is every element on the N-th step starting from the first one. 
If the step is “3”, you need to print the 1-st, the 4-th, the 7-th … and so on, 
until you reach the end of the array. The elements must be printed each on a new line.

Examples
Input	Output
5       5
20      31
31      20
4
20
2
*/

function printNthElement(input){
	let step = input.pop();
	let result = "";
	for (let i = 0; i < input.length; i++){
		if (i == 0){
			result += input[i] + "\n";
		} else if (i % step == 0){
			result += input[i] + "\n";
		}
	}
	console.log(result);
}
printNthElement([5, 20, 31, 4, 20, 2]);