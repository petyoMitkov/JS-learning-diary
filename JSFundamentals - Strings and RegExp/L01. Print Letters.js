/*    Print Letters
Write a JS function that prints all the symbols of a string, each on a new
line. The str comes as array of one string element.
The output is printed on the console, each letter on a new line.

Examples
str         Output
['SoftUni']   str[0] -> S
              str[1] -> o
              str[2] -> f
              str[3] -> t
              str[4] -> U
              str[5] -> n
              str[6] -> i
*/

function printLetters(str){
	if (Array.isArray(str))  // works with string and array input
		str = str[0];
	for (let i in str){
		console.log(`str[${i}] -> ${str[i]}`);
	}
}
printLetters(['SoftUni']);