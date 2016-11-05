/*    Count Words with Maps
You are tasked to count the number of words in a text using a Map, any combination 
of letters, digits and _ (underscore) should be counted as a word. The words should 
be stored in a Map - the key being the word and the value being the amount of times 
the word is contained in the text. The matching should be case insensitive. Print 
the words in a sorted order.
The input comes as an array of strings containing one entry - the text whose words 
should be counted. The text may consist of more than one sentence.
The output should be printed on the console - print each word in the map in 
the format "'<word>' -> <count> times", each on a new line.

Examples:

Input
Far too slow, you're far too slow.
Output
'far' -> 2 times
're' -> 1 times
'slow' -> 2 times
'too' -> 2 times
'you' -> 1 times
*/

function countWordsWithMap(input) {                       //input type: Array of Strings
    let words = input.join("\n").toLowerCase()
        .split(/[^A-Za-z0-9_]+/).filter(w => w != "");
    let mapCounter = new Map();
    for (let w of words) {
        if (mapCounter.has(w))                            //returns boolean 
            mapCounter.set(w, mapCounter.get(w) + 1);     //Map.get(key) returns value
        else 
            mapCounter.set(w, 1);
    } //mapCounter = Map {"far" => 2, "too" => 2, "slow" => 2, "you" => 1, "re" => 1}

    let wordsArrSorted = Array.from(mapCounter.keys()).sort(); //make Arr from Map keys
    wordsArrSorted.forEach(w => 
        console.log(`'${w}' -> ${mapCounter.get(w)} times`));
}
countWordsWithMap(["Far too slow, you're far too slow."]);
