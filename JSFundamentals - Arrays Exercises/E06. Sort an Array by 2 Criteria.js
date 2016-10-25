/*    Sort an Array by 2 Criteria
Write a JS function that orders a given array of strings, by length in ascending 
order as primary criteria, and by alphabetical value in ascending order as second
criteria. The comparison should be case-insensitive.
The input comes as array of strings.
The output is the ordered array of strings.

Examples
Input    Output
alpha    beta
beta     alpha
gamma    gamma
---------------
test     Deny
Deny     omen
omen     test
Default  Default
*/

//first way 
function sort (input) {
  input = input.sort().sort(function (e1, e2) {
    return e1.length > e2.length
  }).forEach(e => console.log(e))
}
sort(['test', 'Deny', 'omen', 'Default']);

//second way
function sortArray(array) {
    array = array.sort().sort((a, b) => (a.length - b.length));
    console.log(array.join('\n'));
}
sortArray(['alpha','beta','gamma']);