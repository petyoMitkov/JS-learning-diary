/*  Match the Dates
Write a JS function that finds and extracts all the dates in the given sentences.
The dates should be in format d-MMM-yyyy. Example: 12-Jun-1999, 3-Dec-2017.
The input comes as an array of strings. Each string represents a sentence.
The output should be printed on the console. The output should consist of 
all extracted VALID dates. Each element should be printed on a new line.

Examples
Input
I am born on 30-Dec-1994.
This is not date: 512-Jan-1996.
My father is born on the 29-Jul-1955.
Output
30-Dec-1994 (Day: 30, Month: Dec, Year: 1994)
29-Jul-1955 (Day: 29, Month: Jul, Year: 1955)
*/

function matchTheDates(inputArr) {
    let regExp = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;
    let dates = [], match;
    for (let str of inputArr)        
        while (match = regExp.exec(str)) {       //returns Array or Null
        dates.push(`${match[0]}` + 
            ` (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
        }
    console.log(dates.join("\n"));
}
matchTheDates(["I am born on 30-Dec-1994.",
               "This is not date: 512-Jan-1996.",
               "My father is born on the 29-Jul-1955."]);