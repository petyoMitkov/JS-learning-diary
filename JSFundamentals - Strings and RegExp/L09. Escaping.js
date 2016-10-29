/*	Escaping
You will be given a list of strings, containing user-submitted data. Write a JS 
function that prints an HTML list from the data. The strings, however, may contain
special HTML characters, which is an oft-used method for injection attacks. To 
prevent unwanted behavior or harmful content, all special characters need to be
replaced with their encoded counterparts – they will look the same to the user, but
will not pose a security risk. Use the following table to compose your function:
Raw	Encoded
<	&lt;
>	&gt;
&	&amp;
"	&quot;
The input comes as array of string elements.
The output is the return value of your function. Compose the list in a string and
return it. See the examples for formatting details.

Examples:
Input
['<b>unescaped text</b>', 'normal text']
Output
<ul>
  <li>&lt;b&gt;unescaped text&lt;/b&gt;</li>
  <li>normal text</li>
</ul>
*/

function htmlEscape(inputArr) {
    let result = "";
    result += "<ul>\n"
    for (let strInput of inputArr) {
        result += "  <li>";
        for (let ch of strInput){
            if (ch == "<")            //< &lt;
                result += "&lt;";
            else if (ch == ">")       //> &gt;
                result += "&gt;";
            else if (ch == "&")       //& &amp;
                result += "&amp;";
            else if (ch == '\"')      //" &quot;
                result += "&quot;";
            else 
                result += ch;
        }
        result += "</li>\n"
    }
    result += "</ul>";
    return result; 
}
htmlEscape(['<b>unescaped text</b>', 'normal text']);
//htmlEscape(['<div style=\"color: red;\">Hello, Red!</div>', 
//    '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>']);