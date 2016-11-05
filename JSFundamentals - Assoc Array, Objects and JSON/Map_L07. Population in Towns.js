/*    Populations in Towns
You have been tasked to create a register for different towns and their population.
The input comes as array of strings. Each element will contain data for a town and 
its population in the following format:
“{townName} <-> {townPopulation}”
If you receive the same town twice, you should add the given population to the 
current one.
As output, you must print all the towns, and their population.

Examples
Input                          Output
Sofia <-> 1200000              Sofia : 1200000
Montana <-> 20000              Montana : 20000
New York <-> 10000000          New York : 10000000
Washington <-> 2345000         Washington : 2345000
Las Vegas <-> 1000000          Las Vegas : 1000000

Istanbul <-> 100000            Istanbul : 101000
Honk Kong <-> 2100004          Honk Kong : 2100004
Jerusalem <-> 2352344          Jerusalem : 2352344
Mexico City <-> 23401925       Mexico City : 23401925
Istanbul <-> 100
*/

function populationInTowns(arrOfStr) {
    let map = new Map();
    for (let row of arrOfStr) {
        let matchRow = row.match(/\b([A-Za-z]+\b[ A-Za-z]*)\b\s*<\->\s*([0-9]+)\b/);
        let town = matchRow[1];
        let population = Number(matchRow[2]);
        if (map.has(town))
            map.set(town, map.get(town) + population);
        else
            map.set(town, population);
    }
    for (let [town, sum] of map) {
        console.log(town + " : " + sum);
    }
}
populationInTowns(["Sofia <-> 1200000", 
                   "Montana <-> 20000", 
                   "New York <-> 10000000", 
                   "Washington <-> 2345000",
                   "Las Vegas <-> 1000000"]);

populationInTowns(["  Sofia   <->    120    0000", 
                   "Montana      <->     20000", 
                   "New York <->       10000000", 
                   "Washington <-> 2345000",
                   "Las Vegas <-> 1000000",
                   "Sofia <-> 5     "]);

