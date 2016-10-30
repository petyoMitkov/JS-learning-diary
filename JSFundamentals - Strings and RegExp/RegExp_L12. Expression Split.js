/*   *Expression Split
Write a JS function that splits a passed in JS code into separate parts. The passed in 
code will always have one or more spaces between operators and operands. 
Normal brackets (‘(‘,’)’), commas (,), semicolons (;) and the member 
access operator (‘.’(dot), as in “console.log”) should also be used for splitting. 
String literals will always be initialized with double quotes (") and will contain 
only letters. Make sure there are no empty entries in the output.
The input comes as array of one string element - the JS code that has to be split.
The output should be printed on the console, with each elements obtained from 
the split is printed on a new line.

Examples
Input                                    Output
['let sum = (4) * 4,b =   "wow";']       let
                                         sum
                                         =
                                         4
                                         *
                                         4
                                         b
                                         =
                                         "wow"
*/

function expretionSplit(input) {
    input = input[0];    
    let regExp = /[';,.()\s]+/g;
    let result = input.split(regExp);

    result.forEach(e => console.log(e));
}
expretionSplit(['let sum = (4) * 4,b =   "wow";']);