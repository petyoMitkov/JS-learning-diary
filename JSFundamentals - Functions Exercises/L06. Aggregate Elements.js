/*	Aggregate Elements
Write a JS program that performs and outputs different operations on an array of elements.
Implement the following operations:
•	Sum(ai) - calculates the sum all elements from the input array
•	Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
•	Concat(ai) - concatenates the string representations of all elements from the array
The input comes as an array of elements that must be parsed as numbers, where necessary.
The output should be printed on the console on a new line for each of the operations.

Examples
Input             Output
['1', '2', '3']   6
                  1.8333
                  123
*/

function aggregateElement(input){
	input = input.map(Number);
    aggregate(input, 0, (a, b) => a + b);
    aggregate(input, 0, (a, b) => a + 1/b);
    aggregate(input, "", (a, b) => a + b);

	function aggregate(arr, initVal, func){
		let val = initVal;
		for (let i = 0; i < arr.length; i++)
			val = func(val, arr[i]);
		console.log(val);
	} 
}
aggregateElement(['1', '2', '3']);