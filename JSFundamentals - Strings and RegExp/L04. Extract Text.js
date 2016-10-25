/*    Extract Text
You will be given a text as a string. Write a JS function that extracts 
and prints only the text that’s surrounded by parentheses.
The input comes as array of a single string element.
The output is printed on the console on a single line, in the form of 
a comma-separated list.

Examples

Input: ['Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)']

Output: Bulgarian brandy, alcoholic drink
*/

function extractText([text]){
    let result = [];
    let startIndex = text.indexOf("(");
    while (startIndex > -1){
        let endIndex = text.indexOf(")", startIndex);
        if (endIndex == -1) { 
            break;
        }
        let snippet = text.substring(startIndex + 1, endIndex);        
        result.push(snippet);
        startIndex = text.indexOf("(", endIndex);
    }
    console.log(result.join(", "));
}
extractText(['Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)']);