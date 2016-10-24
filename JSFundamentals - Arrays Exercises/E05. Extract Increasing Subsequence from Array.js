/*    Extract an Non-decreasing Subsequence from an Array
Write a JS function that extracts only those numbers that form a non-decreasing 
subsequence. In other words, you start from the first element and continue to the 
end of the given array of numbers. Any number which is LESS THAN the current biggest
one is ignored, alternatively if it’s equal or higher than the current biggest one
you set it as the current biggest one and you continue to the next number. 
The input comes as array of strings. Each element will represent a number.
The output is the processed array after the filtration, which should be a 
non-decreasing subsequence. Each element should be printed on a new line.

Examples
Input    Output
1        1           
3        3
8        8
4        10
10       12
12       24
3
2
24
--------------
20       20
3
2
15
6
1
 */

//shorter way 
function extractIncreasing(input){
	input = input.map(Number);	
	let result = input.filter((a,b) => a >= Math.max(...input.slice(0, b)));
	console.log(result.join("\n"));
}
extractIncreasing([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractIncreasing([0,0 ,1, 13, 8 ,4, 10,12,3,2,24]);

//second way
function  extract(input) {
    input = input.map(Number);
    let biggest;
    input.filter(function(e){
        if (biggest != undefined){
            if (e >= biggest){
                biggest = e;
                return true;
            }
        }
        else{
            biggest = e;
            return true;
        }
    }).forEach(e => console.log(e));   
}
extract([0,0 ,1, 13, 8 ,4, 10,12,3,2,24]);