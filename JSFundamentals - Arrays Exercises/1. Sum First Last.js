/*	Sum First Last
Write a JS function that calculates and prints the sum of 
the first and the last elements in an array.
The input comes as array of string elements holding numbers.
The output is the return value of your function.

Examples
Input	            Output		
['20', '30', '40']	60

Input	            Output
['5', '10']	        15
 */

function sumFirstLast(arr){
	let first = Number(arr[0]); 
    let last = Number(arr[arr.length - 1]);
    return first + last;
}
sumFirstLast(['20', '30', '40']);