/*   Boxes and Bottles
Write a JS function to calculate how many boxes will be needed to fit n bottles 
if each box fits k bottles. The input comes as array of strings, where each element
holds a number. The first element is the number of bottles and the second is 
the capacity of a single box.
The output should be printed to the console.

Examples
Input	Output
20      4
5
*/

function boxesAndBottles([a, b]){
    let bottles = Number(a);
    let boxes = Number(b);
    if (bottles <= boxes) {
        console.log(1);
    } else {
        let holder = bottles % boxes;
        if (holder === 0) { //when 10 / 2;   			
            console.log(bottles / boxes);
        } else {    	    // when 11 / 2
            console.log(((bottles - holder) / boxes) + 1);
        }
    }
}
boxesAndBottles(["20", "5"]);
