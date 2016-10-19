/*    Process Odd Numbers
You are given an array of numbers. Write a JS function that prints the elements at odd positions from the array, doubled and in reverse order.
The input comes as array of string elements holding numbers.
The output is printed on the console on a single line, separated by space.

Examples
Input                              Output
['10', '15', '20', '25']           50 30
['3', '0', '10', '4', '7', '3']    6 8 0
 */

function processOddNumbers(input){
	input = input.map(Number);
	let result = [];
	for (let i = 0; i < input.length; i++){
		if( i % 2 != 0){
			result.unshift(input[i] * 2);
		}
	}
<<<<<<< HEAD
    /*short way
    let result = arr
=======
     /* short way
     let result = arr
>>>>>>> ba16b128e2356a706b82b360fe72810a7c98627b
    .filter((num, i) => i % 2 == 1)
    .map(x => 2*x)
    .reverse(); 
    */
	console.log(result.join(" "));
}
processOddNumbers(['3', '0', '10', '4', '7', '3']);

