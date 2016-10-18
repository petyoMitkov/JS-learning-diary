/*	Even Position Element
Write a JS function that finds the elements at even positions in an array.
The input comes as array of string elements holding numbers.
The output is the return value of your function. Collect all elements 
in a string, separated by space.

Examples
Input	            Output		
['20', '30', '40']	20 40
Input	            Output	
['5', '10']         5
 */

function evenPositionElements(arr){
	let newArr = [];
	for (let index in arr){
		if (index % 2 == 0)
			newArr.push(arr[index]);
	}	
	console.log(newArr.join(" "));
}
evenPositionElements(['20', '30', '40']);