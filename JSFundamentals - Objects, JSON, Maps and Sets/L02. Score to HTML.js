/*    Score to HTML
You are given a JSON string representing an array of objects, parse the JSON and 
create a table using the supplied objects. The table should have 2 columns "name" 
and "score", each object in the array will also have these keys.
Any text elements must also be escaped in order to ensure no dangerous code can 
be passed.You can either write the HTML escape function yourself or use the one 
from the Strings and Regular Expressions Lab.
The input comes as an array of strings containing a single string - the array 
of objects as a JSON.
The output should be printed on the console - a table with 2 columns - "name" and 
"score", containing the values from the objects as rows.

Example
Input
'[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]'

Output
<table>
  <tr><th>name</th><th>score</th></tr>
  <tr><td>Pesho</td><td>479</td></tr>
  <tr><td>Gosho</td><td>205</td></tr>
</table>
*/

function scoreToHTML(inputJSON) {  // JSON Array of Objects
    let arrOfObj = JSON.parse(inputJSON);
    let html = `<table>\n  <tr><th>name</th><th>score</th></tr>\n`;
    for (let object of arrOfObj) {
        html += "  <tr>";
        html += `<td>${htmlEscape(object["name"])}</td>`; 
        html += `<td>${htmlEscape(object["score"])}</td>`;
        html += "</tr>\n";
    }
    html += `</table>`;
    console.log(html);    

    function htmlEscape(text) {
        text = new String (text);  //if text is Number convert to string
        let mapChar = {'"': '&quot;', '&': '&amp;', 
            "'": '&#39;', '<': '&lt;', '>': '&gt;'};
        return text.replace(/[\"&'<>]/g, char => mapChar[char]);
    }
}
scoreToHTML(['[{"name":"Pesho &","score":479},{"name":"Gosho <","score":205}]']);