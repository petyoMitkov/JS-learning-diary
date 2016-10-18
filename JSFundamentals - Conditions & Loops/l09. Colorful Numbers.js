/*	Colorful Numbers
Write a JS function to print the numbers from 1 to n. Return a string 
holding HTML list with the odd lines in blue and even lines in green. 
See the example for more information. 
The input comes as array of one string element, holding the number n. 
The output should be returned as a result of your function in the form of a string.

Examples
Input : 10

Output: <ul>
          <li><span style='color:green'>1</span></li>
          <li><span style='color:blue'>2</span></li>
          <li><span style='color:green'>3</span></li>
          <li><span style='color:blue'>4</span></li>
          <li><span style='color:green'>5</span></li>
          <li><span style='color:blue'>6</span></li>
          <li><span style='color:green'>7</span></li>
          <li><span style='color:blue'>8</span></li>
          <li><span style='color:green'>9</span></li>
          <li><span style='color:blue'>10</span></li>
        </ul>
*/
    function colorfulNumbers(row){
    	let rowNumber = Number(row);
    	let totalString = "<ul>\n";
    	let color = ""; 
    	let i;
    	for (i = 1; i <= rowNumber; i++) {
    		color = (i % 2 == 0) ? "blue" : "green";
    		totalString += 
    		`\t<li><span style="color:${color}">${i}</span></li>\n`
    	}
    	totalString += "</ul>";
    	return totalString;
    }
    document.body.innerHTML = colorfulNumbers(10);