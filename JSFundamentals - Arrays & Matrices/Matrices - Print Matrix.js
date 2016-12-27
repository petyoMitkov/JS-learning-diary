function solve(inputArrOfStr) {
    let matrix = inputArrOfStr.map(row => row.split("")); //make matrix from Array
    console.log("Print Matrix by 2 for loops");
    prinMatrix(matrix);
    console.log("Print Matrix by forEach()");
    printMatrixFunctionally(matrix);

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
        matrixName.forEach(row => console.log(row.join("") + "\n"));
    }
}
solve(["abnbjs", "xoBab", "Abmbh", "aabab", "ababvvvv"]);