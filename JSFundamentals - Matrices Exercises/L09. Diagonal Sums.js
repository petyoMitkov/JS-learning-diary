/*    Diagonal Sums
A square matrix of numbers comes as an array of strings, each string holding 
numbers (space separated). Write a JS function that finds the sum at the main
and at the secondary diagonals.
The input comes as array of string elements. Each element contains the
elements from one row of a matrix, separated by space.
The output is printed on the console, on a single line separated by space.
First print the sum at the main diagonal, then the sum at the secondary
diagonal.

Examples
Input        Output
['20 40',    80 50
 '10 60']

 ['3 5 17',  99 25
 '-1 7 14',
 '1 -8 89']
 */

function diagonalSums(arr){
	let matrix = arr.map(row => row.split(" ").map(Number));
	let mainDiagonal = 0;
	let secondaryDiagonal = 0;
	for (let row = 0; row < matrix.length; row++){
		mainDiagonal += matrix[row][row];
		secondaryDiagonal += matrix[row][matrix.length - 1 - row];
	}
	console.log(mainDiagonal + " " + secondaryDiagonal);
	//print matrix
	//console.log(mainDiagonal.map(
	//row => row.join(" ")).join("\n"));
}
diagonalSums(['20 40','10 60']);
