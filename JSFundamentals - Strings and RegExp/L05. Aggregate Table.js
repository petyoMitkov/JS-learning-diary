/*    Aggregate Table
You will be given a list of towns and incomes for each town, formatted in a table, 
separated by pipes (|). Write a JS function that extracts the names of all towns and 
produces a sum of the incomes. Note that splitting may result in empty string elements 
and the number of spaces may be different in every table. 
The input comes as array of string elements. Each element is one row in a formatted 
table.
The output is printed on the console on two lines. On the first line, print a 
comma-separated list of all towns and on the second, the sum of all incomes.

Examples    
Input:                               Output:
['| Sofia           | 300',          Sofia, Veliko Tarnovo, Yambol
 '| Veliko Tarnovo  | 500',          1075
 '| Yambol          | 275']

*/

function aggregateTable(arr){
    let sum = 0, list = [];
    for (let e of arr){
        let line = e.split("|");             //["", " Sofia           ", " 300"]...
        let town = line[1].trim();           //" Sofia           " => "Sofia"
        let income = Number(line[2].trim()); //" 300" => 300
        list.push(town);
        sum += income;
    }
    console.log(list.join(", ") + "\n" + sum);
}
aggregateTable(['| Sofia           | 300',
                '| Veliko Tarnovo  | 500',
                '| Yambol          | 275']);