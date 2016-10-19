/*    Smallest Two Numbers
Write a JS function that prints the two smallest elements from an array of numbers. The input comes as array of string elements holding numbers.
The output is printed on the console on a single line, separated by space.

Examples
Input                             Output
['30', '15', '50', '5']           5 15
['3', '0', '10', '4', '7', '3']   0 3
 */

function smallestTwoNumbers(input){
	input.sort((a,b) => a-b);
	let result = input.slice(0, 2);
	console.log(result.join(" "));
}
smallestTwoNumbers(['30', '15', '50', '5']);
