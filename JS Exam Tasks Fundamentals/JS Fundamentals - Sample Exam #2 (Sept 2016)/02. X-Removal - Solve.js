//Solve - X-Removal
function solve(inputArrOfStr) {
    let matrix = inputArrOfStr.map(row => row.split("")); //make matrix from Array 
    let checkMatrix = inputArrOfStr.map(row => row.toLowerCase().split("")); //toLowerCase()

    printMatrixFunctionally(matrix);
    printMatrixFunctionally(checkMatrix);
    
    //print matrix by 2 for loops 
    function prinMatrix(matrixName) {
        for (let i = 0; i < matrixName.length; i++) {
            let row = "";
            for (let j = 0; j < matrixName[i].length; j++) {
                row += matrixName[i][j]; 
            }
            console.log(row + "\n");
        }
    }
    //print matrix by forEach()
    function printMatrixFunctionally(matrixName) {
        matrixName.forEach(row => console.log(row.join(" ") + "\n"));
    }
}
solve(["abnbjs", "xoBab", "Abmbh", "aabab", "ababvvvv"]);