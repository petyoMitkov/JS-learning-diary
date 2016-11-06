/*    Extract Unique Words
Write a JS function that extracts all UNIQUE words from a valid text, and stores 
them. Ensure that there are NO duplicates in the stored words. Once you find a 
word, there is no need for you to store it again if you meet it again in the text.
You also need to make all characters from the words you’ve stored – lowercase.
The input comes as array of strings. Each element will represent a sentence.
The output is all of the unique words you’ve found, each with each, separated by a
coma and a space, printed in the order in which you’ve found them. 

Examples
Input	                                   Output
JS devs use Node.js for server-side JS.    js, devs, use, node.js, for, server-side
JS devs use JS.
-- JS for devs --
*/

function extractUniqueWords(arrOfStr) {
    let strInput = arrOfStr.join(" ").toLowerCase();
    let setConteiner = new Set();
    let regExp = /\b[a-zA-Z0-9_.\S]+\b/g;
    let match = strInput.match(regExp);    //returns Array of Strins
    match.forEach(x => setConteiner.add(x));
    console.log(Array.from(setConteiner).join(", "));
}
extractUniqueWords(["JS devs use Node.js for server-side JS.", 
                    "JS devs use JS.",
                    "-- JS for devs --"]);