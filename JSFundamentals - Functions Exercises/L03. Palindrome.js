/*    Write a JS function that checks if an input string is a palindrome.
The input comes as an array with a single string element.
The output is the return value of your function. It should be true if the 
string is a palindrome and false if it’s not.

Input   Output   
haha    false
racecar true
unitinu true
*/

function palindrone([input]){
    for (let i = 0; i < input.length / 2; i++){
        if (input[i] == input[input.length - i - 1]){
            return true;  
        } else {
            return false; 
        }       
    }   
}
palindrone("haha");