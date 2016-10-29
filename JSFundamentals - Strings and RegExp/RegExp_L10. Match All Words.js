/*    Match All Words
Write a JS function that matches all words in a text, a word is anything that 
consists of letters, numbers or underscores (_). The input comes as an array of
string consisting of a single entry - the text from which to extract the words.
The output should be printed on the console and should consist of all words 
concatenated with a “|“(pipe), check the examples bellow to better understand the
format.

Examples
Input
['_(Underscores) are also word characters']
Output
_|Underscores|are|also|word|characters

*/

function matchAllWord(str) {
    if (Array.isArray(str)) str = str[0];
    let regEx = /\w+/g;
    let words = str.match(regEx); //["_", "Underscores", "are", "also", "word", "characters"]                  
    return words.join("|");
}
matchAllWord(['_(Underscores) are also word characters']);