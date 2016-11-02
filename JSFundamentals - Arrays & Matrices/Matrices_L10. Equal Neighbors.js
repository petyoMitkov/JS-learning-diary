/*    Equal Neighbors
Write a JS function that finds the number of equal neighbor pairs 
inside a matrix of variable size and type (numbers or strings).
The input comes as array of string elements. Each element contains
the elements from one row of a matrix, separated by space.
The output is return value of you function. Save the number of equal
pairs you find and return it.

Examples
Input                  Output
['2 3 4 7 0',          1
 '4 0 5 3 4',
 '2 3 5 4 2',
 '9 8 7 5 4']

['test yes yo ho',     2
 'well done yo 6',
 'not done yet 5']

 ['2 2 5 7 4',         5
  '4 0 5 3 4',
  '2 5 5 4 2'])
 */

function equalNeighbots(arr){
    let matrix = arr.map(row => row.split(" "));
    let neighbors = 0;

    for (let row = 0; row < matrix.length - 1; row++){
        for (let col = 0; col < matrix[row].length; col++){             
            if(matrix[row][col] == matrix[row + 1][col])     //check vertical
                neighbors++;            
            if (matrix[row][col] == matrix[row][col + 1])    //check horizontal
                neighbors++;
            if (row == matrix.length - 2 &&                  //check horizontal for last row
                matrix[row + 1][col] == matrix[row + 1][col + 1])
                neighbors++;
        }
    }
    console.log(neighbors);
}
equalNeighbots(['2 2 5 7 4',
                '4 0 5 3 4',
                '2 5 5 4 2']);

equalNeighbots(['2 3 4 7 0', 
                '4 0 5 3 4', 
                '2 3 5 4 2', 
                '9 8 7 5 4']);