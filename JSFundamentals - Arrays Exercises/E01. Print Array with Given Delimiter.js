/*    Print an inputay with a given Delimiter
Write a JS function that prints a given inputay. The input comes as inputay of
strings. The last element of the inputay is the delimiter.
The output is the same inputay, printed on the console, each element separated
from the others by the given delimiter.

Examples
Input:            Output:	
One               One-Two-Three-Four-Five
Two
Three
Four
Five
-

*/

function arrayWithDelimiter(input){
	let delimiter = input[input.length - 1];
	input.pop();             //remove the last array element 
	for (let i = 0; i < input.length; i++){
		if(i == 0){
			result += input[i];
		} else {
			result += delimiter + input[i];
		}
	}
	console.log(result);
}
arrayWithDelimiter(["One", "Two", "Three", "Four", "Five", "-"]);
