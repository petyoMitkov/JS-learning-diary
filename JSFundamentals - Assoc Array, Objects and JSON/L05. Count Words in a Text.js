/*  Count Words in a Text
You are tasked to count the number of words in a text using an object as an 
associative array, any combination of letters, digits and _ (underscore) should 
be counted as a word. The words should be stored in the object as properties - 
the key being the word and the value being the amount of times the word is 
contained in the text. The input comes as an array of strings containing one entry 
- the text whose words should be counted. The text may consist of more than one 
sentence.
The output should be printed on the console 
- the JSON representation of the object containing the words.

Examples:
Input
["Far too slow", "you're far too slow."]
Output
{"Far":1,"too":2,"slow":2,"you":1,"re":1,"far":1}

Input
["JS devs use Node.js for server-side JS.-- JS for devs"]
Output
{"JS":3,"devs":2,"use":1,"Node":1,"js":1,"for":2,"server":1,"side":1}
*/

function countWordsInAText(arrOfStr) {
    let text = arrOfStr.join(" ");        //Far too slow you're far too slow.
    let words = text.split(/[^A-Za-z0-9_]+/)
        .filter(w => w != ""); //["Far", "too", "slow", "you", "re", "far", "too", "slow"]
    let wordsCount = {};       //type Object
    for (let key of words) {
        if (wordsCount[key] == undefined) //If Object Key is undefined, add it: key = 1. 
            wordsCount[key] = 1;
        else 
            wordsCount[key]++;            // then count occurrences
    } 
    return JSON.stringify(wordsCount);
}
countWordsInAText(["Far too slow", "you're far too slow."]);
