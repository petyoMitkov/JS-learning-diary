//Solve - X-Removal
function solve(inputArrOfStr) {
    let matrix = inputArrOfStr.map(row => row.split("")); //make matrix from Array 
    let checkMatrix = inputArrOfStr.map(row => row.toLowerCase().split("")); //toLowerCase()

    for (let row = 0; row < checkMatrix.length - 2; row++) {
        for (let col = 0; col < checkMatrix[row].length - 2; col++) {
            let char = checkMatrix[row][col];
            if (checkMatrix[row][col + 2] === char &&
                checkMatrix[row + 1][col + 1] === char &&
                checkMatrix[row + 2][col] === char &&
                checkMatrix[row + 2][col + 2] === char) {

                matrix[row][col] = "";
                matrix[row][col + 2] = "";
                matrix[row + 1][col + 1] = "";
                matrix[row + 2][col] = "";
                matrix[row + 2][col + 2] = "";
            }
        }
    }
    printMatrix(matrix);
    
    function printMatrix(matrixName) {
        matrixName.forEach(row => console.log(row.join('')));
    }
}
solve(["abnbjs", "xoBab", "Abmbh", "aabab", "ababvvvv"]);