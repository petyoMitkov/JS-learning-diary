//Examples for Excaping chars 

function htmlEscape1(text) {
        text = new String (text);  //if text is Number convert to string
        let mapChar = {'"': '&quot;', '&': '&amp;', 
            "'": '&#39;', '<': '&lt;', '>': '&gt;'};
        return text.replace(/[\"&'<>]/g, char => mapChar[char]);
    }
htmlEscape1('< > & " <div>');

function htmlEscape2(inputArr) {
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
htmlEscape2(['<b>unescaped text</b>', 'normal text']);