/*    Magic Matrices
Write a JS function that checks if a given matrix of numbers is magical. A matrix is
magical if the sums of the cells of every row and every column are equal. 
The input comes as array of strings. Each element represents a string of numbers, 
with spaces between them. Parse it into a matrix of numbers, so you can work with
it. The input numbers will always be positive.
The output is a Boolean result indicating whether the matrix is magical or not.

Examples
rownput          Output
['4 5 6',        true
 '6 5 4',
 '5 5 5']

['11 32 45',     false
 '21 0 1',
 '21 1 1']

 */

function magicMatrix(arr){
    let matrix = arr.map(row => row.split(" ").map(Number));
    let mainSum = matrix[0].reduce((a,b) => (a + b));

    let sumRow;
    for(let row = 1; row < matrix.length; row++){
        sumRow = 0;
        for(let col = 0; col < matrix[0].length; col++){
            sumRow += matrix[row][col];
        }
        //sumRow = matrix[row].reduce((a, b) => (a + b)); same as for loop 
        if (mainSum != sumRow) {
            return false;
        }
    }
    
    let sumCol;
    for (let col = 0; col < matrix[0].length; col++){
        sumCol = 0;
        for (let row = 0; row < matrix.length; row++){
            sumCol += matrix[row][col];
        }
        if (sumCol != mainSum) {
            return false;
        }
    }
    return true;
}
magicMatrix(['4 5 6', 
             '6 5 4',
             '5 5 5']);