/*    Prime Number Checker
Write a JS function to check if a number is prime (only wholly divisible 
by itself and one). The input comes as array of one string element, 
holding the number. The output should be the return value of your function.
Return true for prime number and false otherwise.

Examples
Input   Output
7       true
8       false
81      false
*/

function primeNumberChecker(input){
	let num = Number(input);
	let result;
	if (num >= 2) {
		result = ((num % 2 != 0  && num % 3 != 0) || 
			(num == 2 || num == 3)) ? "true" : "false";
	} else if (num < 2){
		result = "false";
	}
	console.log(result);
}
primeNumberChecker("81");