/*    Concatenate Reversed
Write a JS function that reverses a series of strings and prints them 
concatenated from last to first.The input comes as array of strings.
The output is printed on the console. Print all strings concatenated on a single
line, starting from the last input string, going to the first. Reverse each 
individual string’s letters.

Examples
Input                    Output
['I', 'am', 'student']   tnedutsmaI
['race', 'car']          racecar
*/

function concatenateAndReverse(arr){
    let allStrings = arr.join('');          //"Iamstudent"
    let arrChars = Array.from(allStrings);  //["I","a","m","s","t","u","d","e","n","t"]
    let revArrChars = arrChars.reverse();   //["t","n","e","d","u","t","s","m","a","I"]
    let joinArrToStr = revArrChars.join('');//"tnedutsmaI"
    return joinArrToStr;
}
concatenateAndReverse(['I', 'am', 'student']);