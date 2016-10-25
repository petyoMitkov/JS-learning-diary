/*    Odd / Even
Write a JS function to check if a number is odd or even or invalid 
(fractions are neither odd nor even). The input comes as array of 
one string element, holding a number. The output should be printed 
to the console. Print odd for odd numbers, even for even number and 
invalid for numbers that contain decimal fractions.

Examples
Input    Output
5        odd
8        even
1.5      invalid
*/
function oddOrEven(input){
    let num = Number(input);
    if (Math.round(num) - num != 0){
        console.log("invalid");
    } else {
        let result = (num % 2 == 0) ? "even" : "odd";
        console.log(result);
    }
}
oddOrEven("5.45");
